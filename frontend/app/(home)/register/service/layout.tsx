export default function RegisterServiceLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Register Your Service</h1>
        <p className="text-muted-foreground">
          List your API or service on PragmaMoney and start earning USDC for
          every call
        </p>
      </div>

      {/* Form Content */}
      <div className="max-w-2xl">{children}</div>
    </>
  );
}
