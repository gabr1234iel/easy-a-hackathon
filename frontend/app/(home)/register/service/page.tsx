'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  UploadSimple,
  ArrowLeft,
  CaretDown,
  Globe,
  TwitterLogo,
  TelegramLogo,
} from '@phosphor-icons/react';
import Link from 'next/link';

export default function RegisterServicePage() {
  const [serviceType, setServiceType] = useState('Compute');
  const [hasAgentIdentity] = useState(false); // This would be checked from actual state/API
  const [logo, setLogo] = useState<string | null>(null);
  const [showLaunchView, setShowLaunchView] = useState(false);

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowLaunchView(true);
  };

  if (showLaunchView) {
    return (
      <div className="max-w-2xl mx-auto py-8 text-foreground">
        <h1 className="text-2xl font-bold mb-1">Launch your service</h1>
        <p className="text-sm text-muted-foreground mb-8">
          Create a service that's instantly tradeable for under $1 in one
          click
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-2">Service details</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Choose carefully, these can't be changed after launch
            </p>

            <div className="bg-card border border-border rounded-2xl p-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Name your service"
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Ticker
                  </label>
                  <input
                    type="text"
                    placeholder="Your ticker (e.g. ACME)"
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Logo</label>
                <div
                  className="relative w-32 h-32 border-2 border-dashed border-border rounded-2xl flex flex-col items-center justify-center bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer group"
                  onClick={() => document.getElementById('logo-upload-2')?.click()}
                >
                  {logo ? (
                    <img
                      src={logo}
                      alt="Logo preview"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  ) : (
                    <>
                      <div className="p-2 bg-muted rounded-lg mb-2 group-hover:scale-110 transition-transform">
                        <UploadSimple size={24} />
                      </div>
                      <span className="text-xs font-medium">Click to upload</span>
                    </>
                  )}
                  <input
                    id="logo-upload-2"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleLogoChange}
                  />
                </div>
                <p className="text-[10px] text-muted-foreground mt-2 uppercase tracking-wider">
                  JPEG, PNG, GIF or WebP. Max 5MB.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium">
                    Description (Optional)
                  </label>
                  <span className="text-xs text-muted-foreground">0/200</span>
                </div>
                <textarea
                  placeholder="Write a short description of your service (e.g. GPT-4 Inference with automated payments)"
                  rows={4}
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                />
              </div>

              <button className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                <CaretDown size={16} />
                <span>Add social links (Optional)</span>
              </button>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">
              Initial purchase (optional)
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Be the first to invest in your service token. Shows you believe in
              your own project.
            </p>

            <div className="relative">
              <input
                type="number"
                placeholder="0.0"
                className="w-full px-4 py-4 bg-muted/50 border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/50 pr-16 text-lg font-bold"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 font-bold">
                <span>ETH</span>
              </div>
            </div>
          </section>

          <Button className="w-full py-8 text-lg font-bold rounded-2xl bg-foreground text-background hover:bg-foreground/90">
            Launch your Service and Coin
          </Button>
        </div>
      </div>
    );
  }

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
      <form className="space-y-6" onSubmit={handleSubmit}>
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
