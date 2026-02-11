'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Copy } from '@phosphor-icons/react';
import { use } from 'react';

// Mock data - replace with actual data fetching
const getServiceById = (id: string) => {
  return {
    id,
    name: 'E2E-Svc-1770566493196',
    endpoint: 'https://e2e-test.example.com/api',
    proxyUrl:
      'https://seo-patents-diamond-meters.trycloudflare.com/proxy/0x96548e4b7363fdabc5bc76ef3244a38077d282b71e50a8235625bd44bd7daa8a',
    pricePerCall: 0.001
  };
};

export default function ServiceDetailPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const service = getServiceById(id);

  const [httpMethod, setHttpMethod] = useState('GET');
  const [endpoint, setEndpoint] = useState(service.endpoint);
  const [headers, setHeaders] = useState<Array<{ key: string; value: string }>>(
    [{ key: 'Content-Type', value: 'application/json' }]
  );

  const addHeader = () => {
    setHeaders([...headers, { key: '', value: '' }]);
  };

  const updateHeader = (
    index: number,
    field: 'key' | 'value',
    value: string
  ) => {
    const newHeaders = [...headers];
    newHeaders[index][field] = value;
    setHeaders(newHeaders);
  };

  const removeHeader = (index: number) => {
    setHeaders(headers.filter((_, i) => i !== index));
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="space-y-8">
      {/* Service Details Section */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Service Details</h2>
        <div className="border border-border rounded-lg p-6 space-y-4">
          {/* Service Name */}
          <div>
            <div className="text-sm text-muted-foreground mb-1">
              Service Name
            </div>
            <div className="font-mono text-sm">{service.name}</div>
          </div>

          {/* Endpoint */}
          <div>
            <div className="text-sm text-muted-foreground mb-1">Endpoint</div>
            <div className="flex items-center gap-2">
              <code className="flex-1 text-sm bg-muted px-3 py-2 rounded">
                {service.endpoint}
              </code>
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={() => copyToClipboard(service.endpoint)}
              >
                <Copy />
              </Button>
            </div>
          </div>

          {/* Proxy URL */}
          <div>
            <div className="text-sm text-muted-foreground mb-1">Proxy URL</div>
            <div className="flex items-center gap-2">
              <code className="flex-1 text-sm bg-muted px-3 py-2 rounded break-all">
                {service.proxyUrl}
              </code>
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={() => copyToClipboard(service.proxyUrl)}
              >
                <Copy />
              </Button>
            </div>
          </div>

          {/* Price per Call */}
          <div>
            <div className="text-sm text-muted-foreground mb-1">
              Price per Call
            </div>
            <div className="text-lg font-bold">
              ${service.pricePerCall.toFixed(3)}
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Payment will be processed automatically when you execute the
              request.
            </p>
          </div>
        </div>
      </div>

      {/* Request Configuration Section */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Request Configuration</h2>
        <div className="space-y-4">
          {/* HTTP Method */}
          <div>
            <label className="block text-sm font-medium mb-2">
              HTTP Method
            </label>
            <select
              value={httpMethod}
              onChange={e => setHttpMethod(e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option>GET</option>
              <option>POST</option>
              <option>PUT</option>
              <option>DELETE</option>
            </select>
          </div>

          {/* Endpoint */}
          <div>
            <label className="block text-sm font-medium mb-2">Endpoint</label>
            <input
              type="text"
              value={endpoint}
              onChange={e => setEndpoint(e.target.value)}
              className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring font-mono text-sm"
            />
          </div>

          {/* Headers */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium">Headers</label>
              <Button variant="outline" size="sm" onClick={addHeader}>
                Add Header
              </Button>
            </div>
            <div className="space-y-2">
              {headers.map((header, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Key"
                    value={header.key}
                    onChange={e => updateHeader(index, 'key', e.target.value)}
                    className="flex-1 px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Value"
                    value={header.value}
                    onChange={e => updateHeader(index, 'value', e.target.value)}
                    className="flex-1 px-3 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeHeader(index)}
                  >
                    ×
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Execute Request Button */}
      <Button size="lg" className="w-full">
        Execute Request
      </Button>
    </div>
  );
}
