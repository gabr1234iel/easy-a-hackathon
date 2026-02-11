'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';

type Step = 1 | 2 | 3 | 4;

export default function RegisterAgentPage() {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [supportsX402, setSupportsX402] = useState(false);

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep((currentStep + 1) as Step);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as Step);
    }
  };

  return (
    <>
      {/* Step 1: Agent Details */}
      {currentStep === 1 && (
        <div className="space-y-6">
          {/* Agent Name */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Agent Name <span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g., GPT-4 Research Assistant"
              className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Description (Optional)
            </label>
            <textarea
              placeholder="Describe what your agent does..."
              rows={4}
              className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            />
          </div>

          {/* Support x402 payments */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="x402"
              checked={supportsX402}
              onChange={e => setSupportsX402(e.target.checked)}
              className="mt-1 w-4 h-4 rounded border-border"
            />
            <div>
              <label
                htmlFor="x402"
                className="text-sm font-medium cursor-pointer"
              >
                Support x402 payments
              </label>
              <p className="text-sm text-muted-foreground">
                Enable automatic payment handling for API calls
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-end">
            <Button onClick={handleNext} size="lg">
              Next
              <ArrowRight weight="bold" />
            </Button>
          </div>
        </div>
      )}

      {/* Step 2: Wallet Policy */}
      {currentStep === 2 && (
        <div className="space-y-6">
          {/* Daily Spending Limit */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Daily Spending Limit (USDC){' '}
              <span className="text-destructive">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                $
              </span>
              <input
                type="number"
                step="0.01"
                defaultValue="100.00"
                className="w-full pl-8 pr-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Maximum USDC this agent can spend per day
            </p>
          </div>

          {/* Policy Expiry */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Policy Expiry <span className="text-destructive">*</span>
            </label>
            <input
              type="datetime-local"
              className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <p className="text-sm text-muted-foreground mt-1">
              When this spending policy expires (can be updated later)
            </p>
          </div>

          {/* Operator Address */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Operator Address <span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              placeholder="0x990cc6eA7cD6585c8f08cc5f2c48199165D14B23"
              className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring font-mono text-sm"
            />
            <p className="text-sm text-muted-foreground mt-1">
              Address authorized to execute transactions (defaults to your
              wallet)
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button onClick={handleBack} variant="outline" size="lg">
              <ArrowLeft weight="bold" />
              Back
            </Button>
            <Button onClick={handleNext} size="lg">
              Next
              <ArrowRight weight="bold" />
            </Button>
          </div>
        </div>
      )}

      {/* Step 3: Register & Deploy */}
      {currentStep === 3 && (
        <div className="space-y-6">
          <p className="text-muted-foreground">
            Complete these three transactions to register your agent
          </p>

          {/* Transaction Steps */}
          <div className="space-y-4">
            {/* Step 1: Register Identity */}
            <div className="border border-border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold mb-1">1. Register Identity</h3>
                </div>
                <Button variant="default">Execute Transaction</Button>
              </div>
            </div>

            {/* Step 2: Create Smart Wallet */}
            <div className="border border-border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold mb-1">2. Create Smart Wallet</h3>
                </div>
                <Button variant="default">Execute Transaction</Button>
              </div>
            </div>

            {/* Step 3: Bind Wallet */}
            <div className="border border-border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold mb-1">3. Bind Wallet</h3>
                </div>
                <Button variant="default">Execute Transaction</Button>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button onClick={handleBack} variant="outline" size="lg">
              <ArrowLeft weight="bold" />
              Back
            </Button>
            <Button onClick={handleNext} size="lg">
              Next
              <ArrowRight weight="bold" />
            </Button>
          </div>
        </div>
      )}

      {/* Step 4: Pool */}
      {currentStep === 4 && (
        <div className="space-y-6">
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-2">Pool</h2>
            <p className="text-muted-foreground">
              Pool configuration coming soon...
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-start">
            <Button onClick={handleBack} variant="outline" size="lg">
              <ArrowLeft weight="bold" />
              Back
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
