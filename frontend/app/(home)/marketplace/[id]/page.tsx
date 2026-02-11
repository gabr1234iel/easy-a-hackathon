'use client';

import { useState, use } from 'react';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, 
  ShareNetwork, 
  TrendUp, 
  TrendDown, 
  Clock, 
  ArrowsLeftRight,
  Info,
  Copy
} from '@phosphor-icons/react';
import Link from 'next/link';

export default function ServiceTradingPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [activeTab, setActiveTab] = useState<'buy' | 'sell'>('buy');
  const [amount, setAmount] = useState('');

  return (
    <div className="min-h-screen bg-background text-foreground pb-20 w-full">
      {/* Top Navigation */}
      <div className="flex items-center gap-4 mb-6">
        <Link href="/marketplace" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft size={16} />
          Back
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column - Chart and Info (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Header Card */}
          <div className="bg-card border border-border rounded-2xl p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-muted rounded-2xl overflow-hidden">
                <img 
                  src={`https://api.dicebear.com/7.x/identicon/svg?seed=${id}`} 
                  alt="Token Icon"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold uppercase tracking-tight">{id.slice(0, 8)}</h1>
                  <span className="text-muted-foreground font-mono text-sm opacity-60">0x{id.slice(0, 4)}...{id.slice(-4)}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">by: pragma_user • 8h ago</p>
              </div>
            </div>
            <Button variant="outline" className="rounded-xl gap-2 border-primary/20 hover:bg-primary/5 text-primary">
              <ShareNetwork size={18} weight="bold" />
              Share
            </Button>
          </div>

          {/* Market Cap Card */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex justify-between items-end mb-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wider font-semibold">Market Cap</p>
                <h2 className="text-4xl font-black tracking-tighter">$2.7K</h2>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">ATH <span className="text-foreground">$2.86K</span></p>
              </div>
            </div>
            {/* Progress Bar */}
            <div className="h-3 bg-muted rounded-full overflow-hidden relative border border-border/50">
              <div 
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary/50 to-primary animate-pulse" 
                style={{ width: '85%' }}
              />
            </div>
            <div className="flex justify-between mt-3 text-xs font-bold uppercase tracking-widest">
              <span className="text-primary">+ $0 (+0.00%) 24hr</span>
              <span className="text-muted-foreground">Vol 24h <span className="text-foreground">$927</span></span>
            </div>
          </div>

          {/* Chart Section (Placeholder) */}
          <div className="bg-card border border-border rounded-2xl p-6 h-[450px] flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <div className="flex gap-4">
                {['1m', '5m', '15m', '1h', '4h', '1d'].map((t) => (
                  <button key={t} className={`text-xs font-bold uppercase tracking-widest px-2 py-1 rounded ${t === '15m' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex-1 bg-muted/20 rounded-xl border border-dashed border-border flex items-center justify-center">
              <div className="flex flex-col items-center gap-4 text-muted-foreground">
                <TrendUp size={48} weight="thin" className="opacity-20" />
                <p className="font-mono text-sm uppercase tracking-widest opacity-40">Price Chart Coming Soon</p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Price', value: '$0.00000270' },
              { label: 'From Launch', value: '↑ 0.00%', color: 'text-primary' },
              { label: 'Price (in ETH)', value: '0.0000000014' },
              { label: 'ETH/USD', value: '$1918.84' },
            ].map((stat) => (
              <div key={stat.label} className="bg-card border border-border rounded-2xl p-4 text-center">
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold mb-1">{stat.label}</p>
                <p className={`font-mono text-sm font-bold ${stat.color || 'text-foreground'}`}>{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Trades List */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-border">
              <h3 className="font-bold text-lg uppercase tracking-tight">Recent Trades</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm font-mono">
                <thead>
                  <tr className="bg-muted/30 text-muted-foreground uppercase text-[10px] tracking-widest">
                    <th className="px-6 py-4 font-bold">Account</th>
                    <th className="px-6 py-4 font-bold">Type</th>
                    <th className="px-6 py-4 font-bold">Amount (ETH)</th>
                    <th className="px-6 py-4 font-bold">Time</th>
                    <th className="px-6 py-4 font-bold">Txn</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {[...Array(5)].map((_, i) => (
                    <tr key={i} className="hover:bg-muted/10 transition-colors">
                      <td className="px-6 py-4 text-primary font-bold">d14b23</td>
                      <td className="px-6 py-4">
                        <span className={i % 2 === 0 ? 'text-primary' : 'text-destructive'}>
                          {i % 2 === 0 ? 'BUY' : 'SELL'}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-bold">0.043124</td>
                      <td className="px-6 py-4 text-muted-foreground">8h ago</td>
                      <td className="px-6 py-4 text-muted-foreground hover:text-foreground cursor-pointer">0x8bce...</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column - Trading Terminal (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-card border border-border rounded-3xl p-6 sticky top-6">
            {/* Buy/Sell Tabs */}
            <div className="flex bg-muted/30 rounded-2xl p-1 mb-8">
              <button 
                onClick={() => setActiveTab('buy')}
                className={`flex-1 py-3 rounded-xl font-bold transition-all ${activeTab === 'buy' ? 'bg-primary text-primary-foreground shadow-lg' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Buy
              </button>
              <button 
                onClick={() => setActiveTab('sell')}
                className={`flex-1 py-3 rounded-xl font-bold transition-all ${activeTab === 'sell' ? 'bg-destructive text-destructive-foreground shadow-lg' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Sell
              </button>
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-center px-1">
                <h3 className="font-bold text-xl tracking-tight">Buy {id.slice(0, 8).toUpperCase()}</h3>
                <div className="flex items-center gap-1 text-primary cursor-pointer hover:opacity-80 transition-opacity">
                  <TrendUp size={18} weight="bold" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute right-4 top-4 text-[10px] font-bold uppercase tracking-widest text-primary cursor-pointer hover:opacity-80">Max</div>
                  <input 
                    type="number" 
                    placeholder="0.00"
                    className="w-full bg-muted/50 border border-border rounded-2xl px-6 py-8 text-2xl font-black focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                  <div className="absolute left-6 bottom-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Amount (ETH)</div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {['0.1', '0.5', '1'].map((v) => (
                    <button 
                      key={v}
                      onClick={() => setAmount(v)}
                      className="py-3 bg-muted/50 border border-border rounded-xl font-bold text-sm hover:bg-muted transition-colors"
                    >
                      {v} ETH
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-border/50">
                {[
                  { label: 'Price', value: '$0.00000270' },
                  { label: 'ETH Price', value: '0.0000000014 ETH' },
                  { label: 'Market Cap', value: '1.41 ETH' },
                  { label: 'Slippage', value: '5%', icon: <ArrowsLeftRight size={14} /> },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center text-xs">
                    <span className="text-muted-foreground font-medium uppercase tracking-wider">{item.label}</span>
                    <span className="font-mono font-bold flex items-center gap-1">
                      {item.value}
                      {item.icon}
                    </span>
                  </div>
                ))}
              </div>

              <Button className={`w-full py-8 text-lg font-black rounded-2xl shadow-xl transition-transform active:scale-[0.98] ${activeTab === 'buy' ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-destructive text-destructive-foreground hover:bg-destructive/90'}`}>
                {activeTab === 'buy' ? `BUY ${id.slice(0, 8).toUpperCase()}` : `SELL ${id.slice(0, 8).toUpperCase()}`}
              </Button>

              <div className="flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Connected: 0x1964...7198
              </div>
            </div>
          </div>

          {/* Position Info Card */}
          <div className="bg-card border border-border rounded-3xl p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Your Position</span>
              <span className="text-primary text-xs font-bold">+0.00%</span>
            </div>
            <div className="flex justify-between items-end">
              <div>
                <p className="text-2xl font-black">$0</p>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">0 {id.slice(0, 8).toUpperCase()}</p>
              </div>
              <Button variant="ghost" size="sm" className="h-8 rounded-lg text-[10px] font-bold uppercase tracking-widest border border-border">
                Share PnL
              </Button>
            </div>
          </div>

          {/* Bonding Curve Progress Card */}
          <div className="bg-card border border-border rounded-3xl p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Bonding Curve Progress</span>
              <span className="text-primary text-xs font-bold">0.0%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden border border-border/50">
              <div className="h-full bg-primary" style={{ width: '0%' }} />
            </div>
            <p className="text-[10px] text-center text-muted-foreground font-medium">
              0.00 ETH in bonding curve • $43,174 to graduate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
