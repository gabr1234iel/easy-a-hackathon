'use server';

import { GoogleGenerativeAI } from '@google/generative-ai';
import { services, type Service } from '@/lib/services-data';

// Initialize Gemini
// Note: In production, ensure process.env.GEMINI_API_KEY is set
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
const model = genAI.getGenerativeModel({ model: 'text-embedding-004' });

// Simple keyword matching fallback
function getKeywordMatches(query: string, allServices: Service[]): Service[] {
  const lowerQuery = query.toLowerCase();
  const terms = lowerQuery.split(/\s+/).filter(t => t.length > 2);
  
  return allServices.filter(service => {
    const text = `${service.name} ${service.description} ${service.tags.join(' ')}`.toLowerCase();
    // Count how many terms match
    const matchCount = terms.reduce((acc, term) => acc + (text.includes(term) ? 1 : 0), 0);
    return matchCount > 0;
  }).sort((a, b) => {
    // Sort by relevance (basic implementation)
    const textA = `${a.name} ${a.description} ${a.tags.join(' ')}`.toLowerCase();
    const textB = `${b.name} ${b.description} ${b.tags.join(' ')}`.toLowerCase();
    
    const countA = terms.reduce((acc, term) => acc + (textA.includes(term) ? 1 : 0), 0);
    const countB = terms.reduce((acc, term) => acc + (textB.includes(term) ? 1 : 0), 0);
    
    return countB - countA;
  });
}

function cosineSimilarity(vecA: number[], vecB: number[]) {
  let dotProduct = 0;
  let magnitudeA = 0;
  let magnitudeB = 0;
  
  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    magnitudeA += vecA[i] * vecA[i];
    magnitudeB += vecB[i] * vecB[i];
  }
  
  magnitudeA = Math.sqrt(magnitudeA);
  magnitudeB = Math.sqrt(magnitudeB);
  
  if (magnitudeA === 0 || magnitudeB === 0) return 0;
  return dotProduct / (magnitudeA * magnitudeB);
}

export async function getRecommendedServices(query: string): Promise<Service[]> {
  if (!query || query.trim().length === 0) {
    return [];
  }

  try {
    if (!process.env.GEMINI_API_KEY) {
      console.warn('GEMINI_API_KEY is not set. Using keyword fallback.');
      return getKeywordMatches(query, services);
    }

    // 1. Generate embedding for user query
    const result = await model.embedContent(query);
    const queryEmbedding = result.embedding.values;

    // 2. Calculate similarity for each service
    // In a real app, service embeddings should be pre-calculated and stored in a vector DB (Pinecone, PGVector)
    // For this hackathon demo, we'll generate them on the fly (batching would be better, but this is simple)
    
    const servicesWithScores = await Promise.all(
      services.map(async (service) => {
        try {
          // Combine name, description and tags for rich context
          const content = `Service: ${service.name}. Description: ${service.description}. Tags: ${service.tags.join(', ')}`;
          const embeddingResult = await model.embedContent(content);
          const serviceEmbedding = embeddingResult.embedding.values;
          
          const score = cosineSimilarity(queryEmbedding, serviceEmbedding);
          return { ...service, score };
        } catch (err) {
          console.error(`Failed to embed service ${service.id}`, err);
          return { ...service, score: 0 };
        }
      })
    );

    // 3. Sort by similarity score and return top 3
    return servicesWithScores
      .filter(s => s.score > 0.4) // Threshold for relevance
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map(({ score, ...service }) => service);

  } catch (error) {
    console.error('Error getting AI recommendations:', error);
    // Fallback to keyword matching if AI fails
    return getKeywordMatches(query, services).slice(0, 3);
  }
}
