'use client';

import { useState } from 'react';
import { ServiceCard } from '@/components/marketplace/service-card';
import { Badge } from '@/components/ui/badge';

interface Service {
  id: string;
  name: string;
  description: string;
  pricePerCall: number;
  tags: string[];
  provider: string;
  icon?: string;
}

const services: Service[] = [
  {
    id: '1',
    name: 'Data Analysis Agent',
    description:
      'Specialized agent for analyzing datasets, generating insights, and creating visualizations. Handles CSV, JSON, and database queries.',
    pricePerCall: 0.05,
    tags: ['Data', 'Analytics', 'Visualization'],
    provider: 'DataBot',
    icon: '📊'
  },
  {
    id: '2',
    name: 'Code Review Agent',
    description:
      'Expert agent that reviews code quality, identifies bugs, suggests optimizations, and ensures best practices across multiple languages.',
    pricePerCall: 0.04,
    tags: ['Code', 'Review', 'Quality'],
    provider: 'CodeGuard',
    icon: '🔍'
  },
  {
    id: '3',
    name: 'Content Writer Agent',
    description:
      'Creative writing agent for blog posts, articles, marketing copy, and social media content with SEO optimization.',
    pricePerCall: 0.03,
    tags: ['Writing', 'Content', 'Marketing'],
    provider: 'WriteAI',
    icon: '✍️'
  },
  {
    id: '4',
    name: 'Research Agent',
    description:
      'Comprehensive research agent that gathers information, summarizes findings, and generates detailed reports on any topic.',
    pricePerCall: 0.06,
    tags: ['Research', 'Analysis', 'Reports'],
    provider: 'ResearchBot',
    icon: '🔬'
  },
  {
    id: '5',
    name: 'Translation Agent',
    description:
      'Multilingual agent supporting 100+ languages with context-aware translations and cultural adaptations.',
    pricePerCall: 0.02,
    tags: ['Translation', 'Language', 'Localization'],
    provider: 'PolyglotAI',
    icon: '🌐'
  },
  {
    id: '6',
    name: 'Customer Support Agent',
    description:
      'Intelligent customer service agent that handles inquiries, resolves issues, and provides personalized assistance 24/7.',
    pricePerCall: 0.025,
    tags: ['Support', 'Customer Service', 'Chatbot'],
    provider: 'SupportAI',
    icon: '💬'
  },
  {
    id: '7',
    name: 'DevOps Agent',
    description:
      'Automates deployment, monitoring, and infrastructure management. Handles CI/CD pipelines and cloud operations.',
    pricePerCall: 0.07,
    tags: ['DevOps', 'Automation', 'Infrastructure'],
    provider: 'CloudOps',
    icon: '⚙️'
  },
  {
    id: '8',
    name: 'Design Agent',
    description:
      'Creative agent for generating design concepts, mockups, and UI/UX suggestions with brand consistency.',
    pricePerCall: 0.05,
    tags: ['Design', 'UI/UX', 'Creative'],
    provider: 'DesignAI',
    icon: '🎨'
  },
  {
    id: '9',
    name: 'Testing Agent',
    description:
      'Automated testing agent that generates test cases, performs QA checks, and identifies edge cases across your application.',
    pricePerCall: 0.045,
    tags: ['Testing', 'QA', 'Automation'],
    provider: 'TestBot',
    icon: '🧪'
  }
];

// Extract all unique tags
const allTags = Array.from(
  new Set(services.flatMap(service => service.tags))
).sort();

export default function MarketplacePage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const filteredServices =
    selectedTags.length === 0
      ? services
      : services.filter(service =>
          selectedTags.some(tag => service.tags.includes(tag))
        );

  return (
    <>
      {/* Tag Filter */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Filter by Tags</h2>
        <div className="flex flex-wrap gap-2">
          {allTags.map(tag => (
            <Badge
              key={tag}
              variant={selectedTags.includes(tag) ? 'default' : 'outline'}
              className="cursor-pointer transition-transform"
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
        {selectedTags.length > 0 && (
          <button
            onClick={() => setSelectedTags([])}
            className="mt-3 text-sm text-muted-foreground hover:text-foreground underline"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {/* No Results */}
      {filteredServices.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            No agents found matching your filters
          </p>
        </div>
      )}
    </>
  );
}
