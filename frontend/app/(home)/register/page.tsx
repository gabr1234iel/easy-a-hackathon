'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { RocketLaunch, Robot } from '@phosphor-icons/react';

export default function RegisterPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center py-12">
      {/* Hero Section */}
      <div className="text-center mb-16 max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight mb-3 text-foreground leading-tight pb-1">
          Join the Ecosystem
        </h1>
        <p className="text-lg text-muted-foreground">
          Choose how you want to contribute to the PragmaMoney network. 
          Register your services or deploy powerful AI agents.
        </p>
      </div>

      {/* Options Grid */}
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-10 px-4">
        {/* Register Service Card */}
        <div className="group border border-border rounded-3xl p-10 bg-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
            <RocketLaunch size={48} weight="fill" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Register Service</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            List your API or technical service on our marketplace. 
            Enable pay-per-call monetization with automated on-chain payments.
          </p>
          <Link href="/register/service" className="w-full mt-auto">
            <Button variant="outline" className="w-full h-16 rounded-2xl text-lg font-bold shadow-sm hover:bg-emerald-50/50 hover:text-emerald-600 transition-all border-2">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Register Agent Card */}
        <div className="group border border-border rounded-3xl p-10 bg-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
            <Robot size={48} weight="fill" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Register Agent</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Deploy an autonomous AI agent with a dedicated smart wallet.
            Set spending policies and manage its on-chain identity.
          </p>
          <Link href="/register/agent" className="w-full mt-auto">
            <Button variant="outline" className="w-full h-16 rounded-2xl text-lg font-bold shadow-sm hover:bg-blue-50/50 hover:text-blue-600 transition-all border-2">
              Deploy Agent
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer Info */}
      <div className="mt-20 text-center text-muted-foreground">
        <p>Need help? Check our documentation or contact support.</p>
      </div>
    </div>
  );
}
