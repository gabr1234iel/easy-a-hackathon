"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, TrendingUp, TrendingDown, Eye, ArrowRight } from "lucide-react";
import Link from "next/link";

const WATCHLIST_DATA = [
  {
    id: "1",
    name: "GPT-4o API",
    symbol: "GPT4",
    price: "45.20 USDT",
    change: "+12.5%",
    positive: true,
    volume: "1.2M USDT",
    marketCap: "450M USDT"
  },
  {
    id: "2",
    name: "Claude 3.5 Sonnet",
    symbol: "CLD35",
    price: "32.15 USDT",
    change: "-2.3%",
    positive: false,
    volume: "850K USDT",
    marketCap: "320M USDT"
  },
  {
    id: "3",
    name: "Llama 3 70B",
    symbol: "LLM3",
    price: "12.40 USDT",
    change: "+5.1%",
    positive: true,
    volume: "420K USDT",
    marketCap: "120M USDT"
  }
];

export default function WatchlistPage() {
  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Your Watchlist</h1>
          <p className="text-muted-foreground mt-1">
            Track performance of service coins you're interested in
          </p>
        </div>
        <Link href="/marketplace">
          <Button variant="outline" className="gap-2">
            Explore Marketplace
            <ArrowRight className="size-4" />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {WATCHLIST_DATA.map((item) => (
          <Card key={item.id} className="hover:bg-muted/30 transition-colors">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-yellow-500/10 rounded-full text-yellow-500">
                    <Star className="size-6 fill-current" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{item.symbol}</Badge>
                      <span className="text-sm text-muted-foreground">Vol: {item.volume}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 flex-1 md:justify-end">
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground uppercase font-semibold">Price</p>
                    <p className="text-lg font-bold">{item.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground uppercase font-semibold">24h Change</p>
                    <div className={`flex items-center justify-end gap-1 font-bold ${item.positive ? 'text-green-500' : 'text-red-500'}`}>
                      {item.positive ? <TrendingUp className="size-4" /> : <TrendingDown className="size-4" />}
                      {item.change}
                    </div>
                  </div>
                  <div className="hidden md:block text-right">
                    <p className="text-sm text-muted-foreground uppercase font-semibold">Market Cap</p>
                    <p className="text-lg font-bold">{item.marketCap}</p>
                  </div>
                </div>

                <div className="flex gap-2 w-full md:w-auto">
                  <Link href={`/marketplace/${item.id}`} className="flex-1 md:flex-none">
                    <Button variant="default" size="sm" className="w-full gap-2">
                      <Eye className="size-4" />
                      Trade
                    </Button>
                  </Link>
                  <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-500/10">
                    Remove
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {WATCHLIST_DATA.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center border-2 border-dashed rounded-3xl">
          <div className="p-4 bg-muted rounded-full mb-4">
            <Star className="size-10 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-bold">Your watchlist is empty</h2>
          <p className="text-muted-foreground mt-2 max-w-sm">
            Add service coins from the marketplace to track their performance here.
          </p>
          <Link href="/marketplace" className="mt-6">
            <Button>Go to Marketplace</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
