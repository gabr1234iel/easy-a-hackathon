"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Settings, 
  Activity, 
  Code, 
  Eye, 
  MoreHorizontal,
  ArrowUpRight,
  Database
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Mock data for registered services
const REGISTERED_SERVICES = [
  {
    id: "deepseek-v3",
    name: "DeepSeek-V3 API",
    status: "active",
    type: "LLM",
    endpoints: 3,
    calls: "1.2M",
    revenue: "2,450 USDT",
    health: 99.9
  },
  {
    id: "solana-rpc-premium",
    name: "Solana RPC Premium",
    status: "active",
    type: "Infrastructure",
    endpoints: 1,
    calls: "850K",
    revenue: "1,120 USDT",
    health: 98.5
  },
  {
    id: "flux-image-gen",
    name: "Flux Image Gen",
    status: "paused",
    type: "Image Generation",
    endpoints: 2,
    calls: "45K",
    revenue: "120 USDT",
    health: 0
  }
];

export default function MyServicesPage() {
  const [services] = useState(REGISTERED_SERVICES);

  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Your Services</h1>
          <p className="text-muted-foreground mt-1">
            Manage and monitor your registered API services
          </p>
        </div>
        <Link href="/register">
          <Button className="gap-2">
            <Plus className="size-4" />
            Register New Service
          </Button>
        </Link>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Services</p>
                <h3 className="text-2xl font-bold mt-1">3</h3>
              </div>
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Settings className="size-5" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Endpoints</p>
                <h3 className="text-2xl font-bold mt-1">6</h3>
              </div>
              <div className="p-2 bg-green-500/10 rounded-lg text-green-500">
                <Code className="size-5" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
                <h3 className="text-2xl font-bold mt-1">3,690 USDT</h3>
              </div>
              <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-500">
                <Database className="size-5" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg. Health</p>
                <h3 className="text-2xl font-bold mt-1">99.2%</h3>
              </div>
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                <Activity className="size-5" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Services List */}
      <div className="grid grid-cols-1 gap-6">
        {services.map((service) => (
          <Card key={service.id} className="overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="p-6 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center font-bold text-xl text-primary">
                      {service.name.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-semibold">{service.name}</h3>
                        <Badge variant={service.status === "active" ? "default" : "secondary"}>
                          {service.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{service.type}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/marketplace/${service.id}`}>
                      <Button variant="outline" size="sm" className="gap-1.5">
                        <Eye className="size-4" />
                        View Page
                      </Button>
                    </Link>
                    <Button variant="outline" size="icon">
                      <Settings className="size-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <MoreHorizontal className="size-4" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-semibold">Endpoints</p>
                    <p className="text-lg font-medium">{service.endpoints}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-semibold">Total Calls</p>
                    <p className="text-lg font-medium">{service.calls}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-semibold">Revenue</p>
                    <p className="text-lg font-medium text-primary font-bold">{service.revenue}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-semibold">System Health</p>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${service.health > 90 ? 'bg-green-500' : service.health > 0 ? 'bg-yellow-500' : 'bg-red-500'}`} 
                          style={{ width: `${service.health}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium">{service.health}%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-muted/30 p-6 md:w-64 border-t md:border-t-0 md:border-l flex flex-col justify-center items-center gap-4">
                <Button className="w-full gap-2">
                  <Activity className="size-4" />
                  Analytics
                </Button>
                <Button variant="outline" className="w-full gap-2">
                  <Code className="size-4" />
                  API Keys
                </Button>
                <Link href={`/marketplace/${service.id}`} className="w-full">
                  <div className="text-xs text-center text-muted-foreground hover:text-foreground flex items-center justify-center gap-1 cursor-pointer">
                    Manage service coin
                    <ArrowUpRight className="size-3" />
                  </div>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
