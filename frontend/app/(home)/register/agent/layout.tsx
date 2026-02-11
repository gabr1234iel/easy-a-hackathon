export default function RegisterAgentLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Agent Details</h1>
      </div>

      {/* Form Content */}
      <div className="max-w-2xl">{children}</div>
    </>
  );
}
