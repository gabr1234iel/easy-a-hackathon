"use client";

import { Key, History, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ApiControlPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center py-12">
      <div className="mb-16 text-center max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight mb-3 text-foreground leading-tight pb-1">
          API Control Center
        </h1>
        <p className="text-lg text-muted-foreground">
          Manage your API access and track your token usage history
        </p>
      </div>

      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-10 px-4">
        {/* Option 1: API List */}
        <Link href="/api-control/my-apis" className="group">
          <div className="h-full border-2 border-border/50 rounded-[2.5rem] p-10 bg-white shadow-lg hover:shadow-2xl hover:border-primary transition-all duration-150 hover:-translate-y-2 flex flex-col items-start text-left relative overflow-hidden active:scale-[0.98]">
            {/* Large Decorative Icon */}
            <div className="absolute -top-6 -right-6 text-gray-200/30 group-hover:text-primary/10 group-hover:scale-110 transition-all duration-150">
              <Key size={160} strokeWidth={1} />
            </div>
            
            <div className="w-14 h-14 bg-gray-50 text-gray-900 rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-gray-100 relative z-10 group-hover:bg-primary group-hover:text-white transition-colors duration-150">
              <Key className="size-7" />
            </div>
            <h2 className="text-3xl font-bold mb-4 relative z-10">Your API List</h2>
            <p className="text-muted-foreground mb-10 text-base leading-relaxed relative z-10">
              View all API credentials, endpoints, and access keys for the services you have subscribed to.
            </p>
            <div className="mt-auto flex items-center gap-3 font-bold text-gray-900 group-hover:text-primary group-hover:gap-5 transition-all relative z-10 text-lg duration-150">
              View My APIs <span className="text-2xl transition-transform group-hover:translate-x-1">→</span>
            </div>
          </div>
        </Link>

        {/* Option 2: Token Usage */}
        <Link href="/api-control/usage" className="group">
          <div className="h-full border-2 border-border/50 rounded-[2.5rem] p-10 bg-white shadow-lg hover:shadow-2xl hover:border-blue-600 transition-all duration-150 hover:-translate-y-2 flex flex-col items-start text-left relative overflow-hidden active:scale-[0.98]">
            {/* Large Decorative Icon */}
            <div className="absolute -top-6 -right-6 text-blue-100/30 group-hover:text-blue-600/10 group-hover:scale-110 transition-all duration-150">
              <History size={160} strokeWidth={1} />
            </div>

            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-blue-100 relative z-10 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-150">
              <History className="size-7" />
            </div>
            <h2 className="text-3xl font-bold mb-4 relative z-10">Token Usage</h2>
            <p className="text-muted-foreground mb-10 text-base leading-relaxed relative z-10">
              Monitor what tokens you have already used, transaction history, and detailed consumption reports.
            </p>
            <div className="mt-auto flex items-center gap-3 font-bold text-blue-600 group-hover:text-blue-700 group-hover:gap-5 transition-all relative z-10 text-lg duration-150">
              View Usage History <span className="text-2xl transition-transform group-hover:translate-x-1">→</span>
            </div>
          </div>
        </Link>
      </div>

      <div className="mt-24 w-full max-w-5xl px-4">
        <div className="p-10 bg-white/60 backdrop-blur-md rounded-[2.5rem] border border-white/20 shadow-xl flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-3 text-foreground">Need help with integration?</h3>
            <p className="text-lg text-muted-foreground">Check our developer documentation for quick setup guides.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <button className="flex items-center gap-3 text-lg font-bold text-gray-900 hover:text-primary transition-all group">
              Documentation <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="hidden sm:block w-px h-8 bg-border" />
            <button className="flex items-center gap-3 text-lg font-bold text-gray-900 hover:text-primary transition-all group">
              Support <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        <p className="mt-10 text-center text-muted-foreground text-lg">
          Monitor and control your AI infrastructure in real-time.
        </p>
      </div>
    </div>
  );
}
