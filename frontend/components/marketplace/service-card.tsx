import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Star } from '@phosphor-icons/react';

interface Service {
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

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link href={`/marketplace/${service.id}`} className="block">
      <div className="border border-border rounded-lg overflow-hidden bg-card flex flex-col hover:border-primary/50 transition-colors h-full">
        <div className="p-6 flex-1">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              {service.icon && <div className="text-3xl">{service.icon}</div>}
              <div>
                <h3 className="font-semibold text-lg">{service.name}</h3>
                <div className="flex items-center gap-2">
                  <p className="text-sm text-muted-foreground">
                    {service.provider}
                  </p>
                  {service.rating !== undefined && (
                    <div className="flex items-center gap-1 text-xs bg-muted px-1.5 py-0.5 rounded">
                      <Star weight="fill" className="text-yellow-400 w-3 h-3" />
                      <span className="font-medium">{service.rating.toFixed(1)}</span>
                      <span className="text-muted-foreground">({service.ratingCount})</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
            {service.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {service.tags.map(tag => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Price Button - Full Width at Bottom */}
        <div className="p-6 pt-0">
          <Button className="w-full h-10 text-sm font-semibold">
            ${service.pricePerCall.toFixed(3)} per call
          </Button>
        </div>
      </div>
    </Link>
  );
}
