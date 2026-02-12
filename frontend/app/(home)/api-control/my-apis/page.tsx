"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Copy, Eye, EyeOff, RefreshCw, ExternalLink } from "lucide-react";
import { useState } from "react";

const MY_APIS = [
  {
    id: "sub-1",
    name: "GPT-4o API",
    provider: "OpenAI (via Clawpump)",
    status: "active",
    apiKey: "sk-claw-xxxxxxxxxxxxxxxxxxxx4567",
    endpoint: "https://api.clawpump.com/v1/chat/completions",
    expiry: "2026-12-31"
  },
  {
    id: "sub-2",
    name: "Claude 3.5 Sonnet",
    provider: "Anthropic (via Clawpump)",
    status: "active",
    apiKey: "sk-claw-xxxxxxxxxxxxxxxxxxxx8901",
    endpoint: "https://api.clawpump.com/v1/anthropic/messages",
    expiry: "2026-10-15"
  }
];

export default function MyApisPage() {
  const [showKeys, setShowKeys] = useState<Record<string, boolean>>({});

  const toggleKey = (id: string) => {
    setShowKeys(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Your API Subscriptions</h1>
        <p className="text-muted-foreground mt-1">
          Manage your active API keys and endpoints for subscribed services.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {MY_APIS.map((api) => (
          <Card key={api.id}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle className="text-xl">{api.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{api.provider}</p>
              </div>
              <Badge variant="default" className="bg-green-500 hover:bg-green-600">
                {api.status}
              </Badge>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-muted-foreground uppercase">Endpoint</label>
                <div className="flex gap-2">
                  <code className="flex-1 p-3 bg-muted rounded-lg text-sm break-all">
                    {api.endpoint}
                  </code>
                  <Button variant="outline" size="icon" onClick={() => navigator.clipboard.writeText(api.endpoint)}>
                    <Copy className="size-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-muted-foreground uppercase">API Key</label>
                <div className="flex gap-2">
                  <code className="flex-1 p-3 bg-muted rounded-lg text-sm break-all">
                    {showKeys[api.id] ? api.apiKey : api.apiKey.replace(/.(?=.{4})/g, '*')}
                  </code>
                  <Button variant="outline" size="icon" onClick={() => toggleKey(api.id)}>
                    {showKeys[api.id] ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                  </Button>
                  <Button variant="outline" size="icon" onClick={() => navigator.clipboard.writeText(api.apiKey)}>
                    <Copy className="size-4" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between pt-4 border-t gap-4">
                <div className="text-sm">
                  <span className="text-muted-foreground">Expires on:</span>{" "}
                  <span className="font-medium">{api.expiry}</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-2">
                    <RefreshCw className="size-4" />
                    Rotate Key
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink className="size-4" />
                    Docs
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
