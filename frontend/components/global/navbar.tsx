'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { 
  Wallet, 
  Storefront, 
  PlusCircle, 
  UserCircle, 
  TerminalWindow, 
  Star 
} from '@phosphor-icons/react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

export default function Sidebar() {
  const pathname = usePathname();

  const handleWalletConnect = (walletType: string) => {
    console.log(`Connecting to ${walletType}`);
  };

  const navItems = [
    { name: 'Marketplace', href: '/marketplace', icon: Storefront },
    { name: 'Register', href: '/register', icon: PlusCircle },
    { name: 'Your Services', href: '/my-services', icon: UserCircle },
    { name: 'API Control', href: '/api-control', icon: TerminalWindow },
    { name: 'Watchlist', href: '/watchlist', icon: Star },
  ];

  return (
    <aside className="w-64 border-r border-border bg-card flex flex-col shrink-0 h-screen sticky top-0">
      {/* Logo Area */}
      <div className="p-6">
        <Link href="/">
          <div className="text-2xl font-black tracking-tighter text-primary cursor-pointer">Clawpump</div>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link key={item.href} href={item.href}>
              <Button
                variant={isActive ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start gap-3 text-base font-medium h-11 px-4",
                  isActive ? "bg-primary/10 text-primary hover:bg-primary/20" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <item.icon size={22} weight={isActive ? "fill" : "regular"} />
                {item.name}
              </Button>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Area - Wallet */}
      <div className="p-4 border-t border-border">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="default" className="w-full gap-2 h-12 rounded-xl shadow-lg shadow-primary/20">
              <Wallet size={20} weight="bold" />
              Connect Wallet
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" side="top" className="w-56">
            <DropdownMenuItem onClick={() => handleWalletConnect('MetaMask')}>
              MetaMask
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleWalletConnect('Coinbase Wallet')}>
              Coinbase Wallet
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleWalletConnect('OKX Wallet')}>
              OKX Wallet
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </aside>
  );
}
