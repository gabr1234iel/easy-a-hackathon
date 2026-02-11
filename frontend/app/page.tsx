import Navbar from '@/components/global/navbar';

export default function Page() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold">Welcome to Easy A</h1>
      </main>
    </div>
  );
}
