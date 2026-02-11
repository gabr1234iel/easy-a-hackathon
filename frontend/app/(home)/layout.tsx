import Sidebar from '@/components/global/navbar';

export default function HomeLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-white relative overflow-hidden">
      {/* Vibrant Blue & Green Gradient Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Top Left - Emerald Green */}
        <div className="absolute top-[-15%] left-[-10%] w-[65%] h-[65%] bg-emerald-500/[0.12] rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '10s' }} />
        
        {/* Top Right - Deep Sky Blue */}
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-500/[0.12] rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '15s' }} />
        
        {/* Bottom Right - Teal/Cyan */}
        <div className="absolute bottom-[-15%] right-[-5%] w-[70%] h-[70%] bg-teal-400/[0.1] rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '12s' }} />
        
        {/* Bottom Left - Mint Green */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[55%] h-[55%] bg-green-400/[0.08] rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '20s' }} />
        
        {/* Subtle radial center glow for depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-50/[0.3] rounded-full blur-[150px]" />
      </div>
      
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto w-full relative z-10">{children}</main>
    </div>
  );
}
