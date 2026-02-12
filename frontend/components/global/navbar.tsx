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
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { cn } from '@/lib/utils';

export default function Sidebar() {
  const pathname = usePathname();

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
        <ConnectButton.Custom>
          {({
            account,
            chain,
            openAccountModal,
            openChainModal,
            openConnectModal,
            authenticationStatus,
            mounted,
          }) => {
            const ready = mounted && authenticationStatus !== 'loading';
            const connected =
              ready &&
              account &&
              chain &&
              (!authenticationStatus ||
                authenticationStatus === 'authenticated');

            return (
              <div
                {...(!ready && {
                  'aria-hidden': true,
                  'style': {
                    opacity: 0,
                    pointerEvents: 'none',
                    userSelect: 'none',
                  },
                })}
              >
                {(() => {
                  if (!connected) {
                    return (
                      <Button onClick={openConnectModal} variant="default" className="w-full gap-2 h-12 rounded-xl shadow-lg shadow-primary/20">
                        <Wallet size={20} weight="bold" />
                        Connect Wallet
                      </Button>
                    );
                  }

                  if (chain.unsupported) {
                    return (
                      <Button onClick={openChainModal} variant="destructive" className="w-full gap-2 h-12 rounded-xl shadow-lg">
                        Wrong network
                      </Button>
                    );
                  }

                  return (
                    <div className="flex flex-col gap-2">
                      <Button onClick={openChainModal} variant="outline" className="w-full justify-start gap-2 h-10 px-3">
                        {chain.hasIcon && (
                          <div
                            style={{
                              background: chain.iconBackground,
                              width: 20,
                              height: 20,
                              borderRadius: 999,
                              overflow: 'hidden',
                              marginRight: 4,
                            }}
                          >
                            {chain.iconUrl && (
                              <img
                                alt={chain.name ?? 'Chain icon'}
                                src={chain.iconUrl}
                                style={{ width: 20, height: 20 }}
                              />
                            )}
                          </div>
                        )}
                        {chain.name}
                      </Button>

                      <Button onClick={openAccountModal} variant="secondary" className="w-full justify-start gap-2 h-10 px-3 font-mono text-sm overflow-hidden">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-1 shrink-0" />
                        <span className="truncate">{account.displayName}</span>
                      </Button>
                    </div>
                  );
                })()}
              </div>
            );
          }}
        </ConnectButton.Custom>
      </div>
    </aside>
  );
}
