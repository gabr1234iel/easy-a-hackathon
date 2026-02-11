'use client';

import { useChainId, useSwitchChain } from 'wagmi';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { WarningCircle } from '@phosphor-icons/react';
import { base, sepolia } from 'wagmi/chains';

export function NetworkGuard() {
  const chainId = useChainId();
  const { switchChain } = useSwitchChain();

  const isSupported = chainId === base.id || chainId === sepolia.id;

  if (isSupported) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-md animate-in slide-in-from-bottom-4">
      <Alert variant="destructive" className="bg-destructive/10 border-destructive/50">
        <WarningCircle className="h-4 w-4" />
        <AlertTitle>Unsupported Network</AlertTitle>
        <AlertDescription className="mt-2 flex flex-col gap-2">
          <p>
            You are connected to an unsupported network. Please switch to Base or Sepolia to use the marketplace.
          </p>
          <div className="flex gap-2">
            <Button 
              size="sm" 
              variant="default" 
              onClick={() => switchChain({ chainId: base.id })}
              className="bg-destructive hover:bg-destructive/90 text-destructive-foreground"
            >
              Switch to Base
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              onClick={() => switchChain({ chainId: sepolia.id })}
              className="border-destructive/50 hover:bg-destructive/20"
            >
              Switch to Sepolia
            </Button>
          </div>
        </AlertDescription>
      </Alert>
    </div>
  );
}
