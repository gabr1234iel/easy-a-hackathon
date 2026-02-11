import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <>
      {/* Options Grid */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Register Service Card */}
        <div className="border border-border rounded-lg p-8">
          <h2 className="text-xl font-medium mb-4">Register Service</h2>
          <p className="text-muted-foreground mb-6">
            List your API or service on PragmaMoney. Users pay per call via x402
            or the on-chain gateway.
          </p>
          <Link href="/register/service">
            <Button className="w-full">Register Service</Button>
          </Link>
        </div>

        {/* Register Agent Card */}
        <div className="border border-border rounded-lg p-8">
          <h2 className="text-xl font-medium mb-4">Register Agent</h2>
          <p className="text-muted-foreground mb-6">
            Deploy an AI agent with an ERC-4337 smart wallet, spending policies,
            and on-chain identity.
          </p>
          <Link href="/register/agent">
            <Button className="w-full">Register Agent</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
