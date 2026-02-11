'use client';

import { useChainId, useSwitchChain, useAccount } from 'wagmi';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { CaretDown, WarningCircle } from '@phosphor-icons/react';
import { base, sepolia } from 'wagmi/chains';
import { useEffect, useState } from 'react';

export function ChainSwitcher() {
  const chainId = useChainId();
  const { switchChain } = useSwitchChain();
  const { isConnected } = useAccount();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isConnected) return null;

  const currentChainName =
    chainId === base.id ? 'Base' : chainId === sepolia.id ? 'Sepolia' : 'Wrong Network';

  const isWrongNetwork = chainId !== base.id && chainId !== sepolia.id;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={isWrongNetwork ? 'destructive' : 'outline'}
          size="sm"
          className="gap-2"
        >
          {isWrongNetwork && <WarningCircle className="w-4 h-4" />}
          {currentChainName}
          <CaretDown className="w-3 h-3 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => switchChain({ chainId: base.id })}>
          Base Mainnet
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchChain({ chainId: sepolia.id })}>
          Sepolia Testnet
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
