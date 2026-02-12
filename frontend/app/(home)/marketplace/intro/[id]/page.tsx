'use client';

import { use, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft,
  Info,
  Tag,
  Coins,
  ShieldCheck,
  Lightning,
  TrendUp,
  Cpu,
  Code,
  Globe,
  ChartLineUp
} from '@phosphor-icons/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '@/components/ui/alert-dialog';

// Sample services data (usually this would come from an API)
const services = [
  {
    id: '1',
    name: 'Data Analysis Agent',
    description:
      'Specialized agent for analyzing datasets, generating insights, and creating visualizations. Handles CSV, JSON, and database queries.',
    pricePerCall: 0.05,
    tags: ['Data', 'Analytics', 'Visualization'],
    provider: 'DataBot',
    icon: '📊',
    features: [
      'Automatic pattern recognition in large datasets',
      'Instant chart and visualization generation',
      'Statistical anomaly detection',
      'Predictive modeling and trend forecasting'
    ],
    capabilities: [
      'Processes up to 1GB files',
      'Supports SQL, CSV, JSON formats',
      '99.9% accuracy on data cleaning',
      'Fast processing: < 5s for most tasks'
    ]
  },
  {
    id: '2',
    name: 'Code Review Agent',
    description:
      'Expert agent that reviews code quality, identifies bugs, suggests optimizations, and ensures best practices across multiple languages.',
    pricePerCall: 0.04,
    tags: ['Code', 'Review', 'Quality'],
    provider: 'CodeGuard',
    icon: '🔍',
    features: [
      'Security vulnerability scanning',
      'Style guide enforcement',
      'Performance bottleneck identification',
      'Automated fix suggestions'
    ],
    capabilities: [
      'Supports 20+ programming languages',
      'PR integration available',
      'Context-aware logic analysis',
      'Full documentation compliance checks'
    ]
  }
];

export default function AgentIntroPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);

  const handleGetService = () => {
    setShowPaymentDialog(true);
  };

  const handleConfirmPayment = () => {
    setShowPaymentDialog(false);
    router.push(`/api-control/my-apis?new=${service.id}`);
  };

  // Find service or use a default one
  const service = services.find(s => s.id === id) || {
    id: id,
    name: 'Specialized AI Agent',
    description:
      'A powerful AI agent designed to automate complex workflows and provide high-quality outputs for your specific needs.',
    pricePerCall: 0.05,
    tags: ['AI', 'Automation', 'Integration'],
    provider: 'EliteAI',
    icon: '🤖',
    features: [
      'High-speed processing and response',
      'Advanced natural language understanding',
      'Seamless API integration',
      '24/7 reliability and uptime'
    ],
    capabilities: [
      'Customizable workflow integration',
      'Multi-modal input support',
      'Enterprise-grade security',
      'Real-time data synchronization'
    ]
  };

  return (
    <div className="min-h-screen bg-transparent text-foreground pb-32">
      {/* Back Button */}
      <div className="mb-8">
        <Link
          href="/marketplace"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Marketplace
        </Link>
      </div>

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
          <div className="text-7xl p-6 bg-card border border-border rounded-3xl shadow-sm">
            {service.icon}
          </div>
          <div className="flex-1 space-y-4">
            <h1 className="text-5xl font-black tracking-tight">
              {service.name}
            </h1>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold flex items-center gap-1">
                <Cpu size={14} />
                {service.provider}
              </span>
              {service.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </div>
        </section>

        {/* Pricing & Cost Section */}
        <section className="bg-card border border-border rounded-3xl p-8 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Coins size={24} className="text-primary" />
                API Cost Information
              </h2>
              <p className="text-muted-foreground">
                Transparent pricing for every agent interaction.
              </p>
            </div>
            <div className="text-center md:text-right">
              <div className="text-4xl font-black text-primary">
                ${service.pricePerCall.toFixed(3)}
              </div>
              <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
                Per API Call
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-muted/30 rounded-2xl border border-border/50">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">
                Pay as you go
              </p>
              <p className="text-sm font-semibold">
                No monthly fees, only pay for what you use.
              </p>
            </div>
            <div className="p-4 bg-muted/30 rounded-2xl border border-border/50">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">
                USDT Settlement
              </p>
              <p className="text-sm font-semibold">
                All transactions are settled instantly in USDT.
              </p>
            </div>
            <div className="p-4 bg-muted/30 rounded-2xl border border-border/50">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">
                Volume Discount
              </p>
              <p className="text-sm font-semibold">
                Save up to 20% on high-volume integrations.
              </p>
            </div>
          </div>
        </section>

        {/* Features & Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Features */}
          <section className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <Lightning size={24} className="text-yellow-500" />
              What can it do?
            </h3>
            <ul className="space-y-4">
              {service.features?.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-4 bg-card border border-border rounded-2xl"
                >
                  <div className="mt-1 p-1 bg-primary/10 text-primary rounded-md">
                    <ShieldCheck size={16} weight="bold" />
                  </div>
                  <span className="text-sm font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Technical Specs */}
          <section className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <Code size={24} className="text-blue-500" />
              Technical Specs
            </h3>
            <ul className="space-y-4">
              {service.capabilities?.map((cap, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-4 bg-card border border-border rounded-2xl"
                >
                  <div className="mt-1 p-1 bg-primary/10 text-primary rounded-md">
                    <Globe size={16} weight="bold" />
                  </div>
                  <span className="text-sm font-medium">{cap}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Bottom Options - Fixed to Screen Bottom */}
        <div className="fixed bottom-0 left-64 right-0 p-6 bg-background/80 backdrop-blur-xl border-t border-border z-50">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button
              size="lg"
              onClick={handleGetService}
              className="w-full h-16 rounded-2xl text-lg font-bold flex items-center justify-center gap-3 bg-foreground text-background hover:bg-foreground/90 transition-all active:scale-95 shadow-xl"
            >
              <Lightning size={24} weight="fill" />
              GET THIS SERVICE
            </Button>
            <Link href={`/marketplace/${service.id}`} className="w-full">
              <Button
                size="lg"
                variant="outline"
                className="w-full h-16 rounded-2xl text-lg font-bold flex items-center justify-center gap-3 border-2 border-primary text-primary hover:bg-primary/5 transition-all active:scale-95 shadow-xl"
              >
                <ChartLineUp size={24} weight="fill" />
                TRADING SERVICE
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Payment Confirmation Dialog */}
      <AlertDialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Payment</AlertDialogTitle>
            <AlertDialogDescription>
              You are about to subscribe to <strong>{service.name}</strong> at $
              {service.pricePerCall.toFixed(3)} per API call.
              <br />
              <br />
              Payment will be processed in USDT. Do you want to continue?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmPayment}>
              Confirm Payment
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
