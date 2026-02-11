'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function RegisterServicePage() {
  const [serviceType, setServiceType] = useState('Compute');
  const [hasAgentIdentity] = useState(false); // This would be checked from actual state/API

  return (
    <>
      {/* Alert - No Agent Identity */}
      {!hasAgentIdentity && (
        <div className="mb-6 border border-border rounded-lg p-4 bg-muted/50">
          <h3 className="font-semibold mb-1">No agent identity found</h3>
          <p className="text-sm text-muted-foreground">
            You must register as an agent before you can register a service.
          </p>
        </div>
      )}

      {/* Form */}
      <form className="space-y-6">
        {/* Service Name */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Service Name <span className="text-destructive">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g., GPT-4 Inference API"
            className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        {/* Service ID */}
        <div>
          <label className="block text-sm font-medium mb-2">Service ID</label>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Custom ID"
              className="flex-1 px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              type="text"
              placeholder="service-id-123"
              className="flex-1 px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            Unique identifier for your service
          </p>
        </div>

        {/* Service Type */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Service Type <span className="text-destructive">*</span>
          </label>
          <select
            value={serviceType}
            onChange={e => setServiceType(e.target.value)}
            className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option>Compute</option>
            <option>Storage</option>
            <option>API</option>
            <option>Agent</option>
            <option>Other</option>
          </select>
        </div>

        {/* Price per Call */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Price per Call (USDC) <span className="text-destructive">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              $
            </span>
            <input
              type="number"
              step="0.01"
              defaultValue="1.00"
              className="w-full pl-8 pr-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            Amount charged for each API call
          </p>
        </div>

        {/* Endpoint URL */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Endpoint URL <span className="text-destructive">*</span>
          </label>
          <input
            type="url"
            placeholder="https://api.example.com/v1/service"
            className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <p className="text-sm text-muted-foreground mt-1">
            Your service's API endpoint URL. It will be wrapped by PragmaMoney's
            payment proxy — users will access it through the proxy URL.
          </p>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Description (Optional)
          </label>
          <textarea
            placeholder="Describe what your service does..."
            rows={4}
            className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
          />
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full" size="lg">
          Register Service
        </Button>
      </form>
    </>
  );
}
