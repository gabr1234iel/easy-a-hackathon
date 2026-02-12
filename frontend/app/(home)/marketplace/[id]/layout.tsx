export default function ServiceDetailLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Select Service</h1>
      </div>

      {/* Content */}
      <div className="w-full">{children}</div>
    </>
  );
}
