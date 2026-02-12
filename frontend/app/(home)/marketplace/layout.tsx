export default function MarketplaceLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-blue-600 py-2 leading-[1.2]">
          Agent Marketplace
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Discover and integrate specialized AI agents into your applications
        </p>
      </div>
      {children}
    </>
  );
}
