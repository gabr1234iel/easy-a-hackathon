'use client';

import { useState } from 'react';
import { ServiceCard } from '@/components/marketplace/service-card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Sparkle, MagnifyingGlass } from '@phosphor-icons/react';
import { services } from '@/lib/services-data';
import { getRecommendedServices } from '@/app/actions/recommend';

// Extract all unique tags
const allTags = Array.from(
  new Set(services.flatMap(service => service.tags))
).sort();

export default function MarketplacePage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [recommendedServices, setRecommendedServices] = useState<typeof services>([]);
  const [isSearching, setIsSearching] = useState(false);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    try {
      const recommendations = await getRecommendedServices(searchQuery);
      setRecommendedServices(recommendations);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setIsSearching(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const filteredServices =
    selectedTags.length === 0
      ? services
      : services.filter(service =>
          selectedTags.some(tag => service.tags.includes(tag))
        );

  return (
    <>
      {/* AI Search Section */}
      <div className="mb-10 bg-muted/30 p-6 rounded-xl border border-border">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-primary">
            <Sparkle weight="fill" className="w-5 h-5" />
            <h2 className="font-semibold">AI-Powered Search</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            Describe what you need (e.g., "I need a bot to analyze financial data" or "Help me write blog posts")
          </p>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <MagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Describe your ideal AI agent..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="pl-9"
              />
            </div>
            <Button onClick={handleSearch} disabled={isSearching}>
              {isSearching ? 'Thinking...' : 'Search'}
            </Button>
          </div>
        </div>

        {/* Recommendations */}
        {recommendedServices.length > 0 && (
          <div className="mt-8 animate-in fade-in slide-in-from-top-4 duration-500">
            <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
              Recommended for you
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendedServices.map(service => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
            <div className="my-8 border-t border-border" />
          </div>
        )}
      </div>

      {/* Tag Filter */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Browse All Agents</h2>
        <div className="flex flex-wrap gap-2">
          {allTags.map(tag => (
            <Badge
              key={tag}
              variant={selectedTags.includes(tag) ? 'default' : 'outline'}
              className="cursor-pointer transition-transform hover:scale-105"
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
