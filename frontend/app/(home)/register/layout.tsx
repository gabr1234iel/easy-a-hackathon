export default function RegisterLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold mb-2">Register</h1>
        <p className="text-muted-foreground">
          Choose what you want to register on PragmaMoney
        </p>
      </div>
      {children}
    </>
  );
}
