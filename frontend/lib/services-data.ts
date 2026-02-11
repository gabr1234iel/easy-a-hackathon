export interface Service {
  id: string;
  name: string;
  description: string;
  pricePerCall: number;
  tags: string[];
  provider: string;
  icon?: string;
  rating?: number;
  ratingCount?: number;
}

export const services: Service[] = [
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
