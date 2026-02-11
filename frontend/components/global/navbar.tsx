'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Wallet } from '@phosphor-icons/react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

export default function Navbar() {
  const handleWalletConnect = (walletType: string) => {
    console.log(`Connecting to ${walletType}`);
    // Add wallet connection logic here
  };

  return (
    <nav className="border-b border-border bg-background">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="text-lg font-bold">Clawpump</div>

        {/* Center Navigation */}
        <div className="flex items-center gap-4">
          <Link href="/marketplace">
            <Button variant="ghost" size="default">
              Marketplace
            </Button>
          </Link>
          <Link href="/register">
            <Button variant="ghost" size="lg">
              Register
            </Button>
          </Link>
        </div>

        {/* Right Side - Connect Wallet */}
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="default" size="default">
                <Wallet weight="bold" />
                Connect Wallet
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" side="bottom">
              <DropdownMenuItem onClick={() => handleWalletConnect('MetaMask')}>
                MetaMask
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleWalletConnect('Coinbase Wallet')}
              >
                Coinbase Wallet
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleWalletConnect('OKX Wallet')}
              >
                OKX Wallet
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
