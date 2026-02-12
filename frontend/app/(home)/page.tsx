'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  RocketLaunch, 
  Storefront, 
  TerminalWindow, 
  ArrowRight, 
  Sparkle,
  ShieldCheck,
  Lightning,
  Coins
} from '@phosphor-icons/react';

export default function Page() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      {/* Hero Section */}
      <section className="text-center mb-24 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-8 border border-primary/20">
          <Sparkle size={18} weight="fill" />
          <span>The Next Generation of AI Monetization</span>
        </div>
        <h1 className="text-6xl md:text-7xl font-black tracking-tight mb-6 text-foreground leading-[1.1]">
          Unleash the Power of <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-blue-600">
            AI Service Coins
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Clawpump is the first decentralized marketplace where you can discover, trade, and integrate specialized AI agents using service-backed tokens.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/marketplace">
            <Button size="lg" className="h-14 px-8 text-lg font-bold rounded-2xl gap-2 shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
              Explore Marketplace
              <ArrowRight size={20} weight="bold" />
            </Button>
          </Link>
          <Link href="/register">
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold rounded-2xl border-2 hover:bg-muted/50 transition-all">
              Monetize Your API
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid md:grid-cols-3 gap-8 mb-24">
        <div className="group p-8 rounded-[2.5rem] bg-white border border-border/50 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Storefront size={32} weight="fill" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Marketplace</h3>
          <p className="text-muted-foreground leading-relaxed">
            Discover specialized AI agents for data analysis, code review, and more. Trade service coins backed by real API utility.
          </p>
        </div>

        <div className="group p-8 rounded-[2.5rem] bg-white border border-border/50 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
          <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <RocketLaunch size={32} weight="fill" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Register Service</h3>
          <p className="text-muted-foreground leading-relaxed">
            Turn your AI API into a tradeable asset. Set your price per call and let the community invest in your service's success.
          </p>
        </div>

        <div className="group p-8 rounded-[2.5rem] bg-white border border-border/50 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
          <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <TerminalWindow size={32} weight="fill" />
          </div>
          <h3 className="text-2xl font-bold mb-4">API Control</h3>
          <p className="text-muted-foreground leading-relaxed">
            Manage your subscriptions and API keys in one place. Track your token usage and monitor service performance in real-time.
          </p>
        </div>
      </section>

      {/* Trust/Stats Section */}
      <section className="bg-foreground/5 rounded-[3rem] p-12 border border-foreground/5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Why Clawpump?</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <ShieldCheck size={24} className="text-primary" weight="bold" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">On-Chain Transparency</h4>
                  <p className="text-muted-foreground">Every API call and payment is verified on the blockchain for absolute trust.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Lightning size={24} className="text-primary" weight="bold" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Instant Settlement</h4>
                  <p className="text-muted-foreground">No more monthly billing. Pay only for what you use, settled instantly via smart contracts.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Coins size={24} className="text-primary" weight="bold" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Tokenized Utility</h4>
                  <p className="text-muted-foreground">Service coins represent future API usage, creating a liquid market for AI services.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[2rem] bg-gradient-to-br from-primary/20 to-blue-500/20 border border-white/20 flex items-center justify-center overflow-hidden">
               <div className="text-8xl animate-bounce">🤖</div>
               <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-white rounded-full blur-xl animate-pulse" />
               <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-primary/30 rounded-full blur-2xl animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="text-center mt-24">
        <h2 className="text-3xl font-bold mb-6">Ready to join the AI revolution?</h2>
        <Link href="/marketplace">
          <Button size="lg" className="h-16 px-12 text-xl font-bold rounded-2xl shadow-2xl shadow-primary/30 hover:scale-105 transition-transform">
            Get Started Now
          </Button>
        </Link>
      </section>
    </div>
  );
}
