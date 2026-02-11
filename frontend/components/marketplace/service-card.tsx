import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Coins } from '@phosphor-icons/react';

interface Service {
  id: string;
  name: string;
  description: string;
  pricePerCall: number;
  tags: string[];
  provider: string;
  icon?: string;
}

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group/card relative">
      <Link href={`/marketplace/intro/${service.id}`} className="block">
        <div className="border border-border rounded-lg overflow-hidden bg-white flex flex-col hover:border-primary/50 transition-all hover:shadow-md h-full">
          <div className="p-6 flex-1">
            {/* Header */}
            <div className="flex items-start justify-between mb-4 pr-14">
              <div className="flex items-center gap-3">
                {service.icon && <div className="text-3xl">{service.icon}</div>}
                <div>
                  <h3 className="font-semibold text-lg">{service.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {service.provider}
                  </p>
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

      {/* View Service Coin Button - Top Right */}
      <div className="absolute top-4 right-4 z-10">
        <Link href={`/marketplace/${service.id}`}>
          <button 
            className="p-3 bg-primary/10 text-primary rounded-xl hover:bg-primary/20 transition-colors group/btn relative"
            title="View Service Coin"
            onClick={(e) => {
              // The outer Link already handles navigation, 
              // but we might want specific behavior for this button later
              // For now, it just goes to the same detail page
            }}
          >
            <Coins size={28} weight="fill" />
            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs py-1 px-2 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity whitespace-nowrap">
              View Service Coin
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
