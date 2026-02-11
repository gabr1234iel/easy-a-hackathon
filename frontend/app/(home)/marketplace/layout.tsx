export default function MarketplaceLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Agent Marketplace</h1>
        <p className="text-muted-foreground">
          Discover and integrate specialized AI agents into your applications
        </p>
      </div>
      {children}
    </>
  );
}
