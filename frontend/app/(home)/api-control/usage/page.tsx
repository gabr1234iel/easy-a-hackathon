"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Coins, 
  Calendar,
  Filter
} from "lucide-react";

const USAGE_HISTORY = [
  {
    id: "tx-1",
    service: "GPT-4o API",
    amount: "1.50 USDT",
    tokens: "45,000",
    date: "2026-02-12 10:30 AM",
    type: "usage"
  },
  {
    id: "tx-2",
    service: "Claude 3.5 Sonnet",
    amount: "0.80 USDT",
    tokens: "12,000",
    date: "2026-02-11 04:15 PM",
    type: "usage"
  },
  {
    id: "tx-3",
    service: "Wallet Top-up",
    amount: "5.00 USDT",
    tokens: "-",
    date: "2026-02-10 09:00 AM",
    type: "deposit"
  },
  {
    id: "tx-4",
    service: "Flux Image Gen",
    amount: "0.20 USDT",
    tokens: "5 images",
    date: "2026-02-09 11:20 PM",
    type: "usage"
  }
];

export default function UsagePage() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Token Usage History</h1>
          <p className="text-muted-foreground mt-1">
            Detailed breakdown of your spending and token consumption.
          </p>
        </div>
        <div className="flex gap-2">
          <Badge variant="outline" className="px-4 py-2 gap-2 text-sm">
            <Calendar className="size-4" />
            Last 30 Days
          </Badge>
          <Badge variant="outline" className="px-4 py-2 gap-2 text-sm">
            <Filter className="size-4" />
            Filter
          </Badge>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Current Balance</p>
                <h3 className="text-3xl font-bold mt-2 text-primary">12.45 USDT</h3>
              </div>
              <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                <Coins className="size-6" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Spent (MTD)</p>
                <h3 className="text-3xl font-bold mt-2">2.50 USDT</h3>
              </div>
              <div className="p-3 bg-red-500/10 rounded-2xl text-red-500">
                <ArrowUpRight className="size-6" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Requests</p>
                <h3 className="text-3xl font-bold mt-2">57,201</h3>
              </div>
              <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-500">
                <BarChart3 className="size-6" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Transaction Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&_tr]:border-b">
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Service / Action</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Date</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Usage</th>
                  <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Amount</th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                {USAGE_HISTORY.map((tx) => (
                  <tr key={tx.id} className="border-b transition-colors hover:bg-muted/50">
                    <td className="p-4 align-middle">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${tx.type === 'deposit' ? 'bg-green-500/10 text-green-500' : 'bg-muted text-foreground'}`}>
                          {tx.type === 'deposit' ? <ArrowDownLeft className="size-4" /> : <ArrowUpRight className="size-4" />}
                        </div>
                        <span className="font-medium">{tx.service}</span>
                      </div>
                    </td>
                    <td className="p-4 align-middle text-muted-foreground">{tx.date}</td>
                    <td className="p-4 align-middle">{tx.tokens}</td>
                    <td className={`p-4 align-middle text-right font-bold ${tx.type === 'deposit' ? 'text-green-500' : ''}`}>
                      {tx.type === 'deposit' ? '+' : '-'}{tx.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
