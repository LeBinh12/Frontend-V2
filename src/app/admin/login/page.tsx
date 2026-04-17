import React from 'react';
import Image from 'next/image';
import Scene3D from '@/components/admin/Scene3D';
import AdminLoginForm from '@/components/admin/AdminLoginForm';

export const metadata = {
  title: 'Admin Login | Lucid Technology',
  description: 'Secure access to Lucid Technology administrative portal.',
};

export default function AdminLoginPage() {
  return (
    <main className="relative h-screen w-full bg-[#020617] flex flex-col md:flex-row overflow-hidden font-sans">
      {/* Branding - Top Left Logo */}
      <div className="absolute top-8 left-8 z-50">
        <Image
          src="/images/logo-none-bg.png"
          alt="Lucid Technology Logo"
          width={180}
          height={60}
          className="w-auto h-12 md:h-14 object-contain"
          priority
        />
      </div>

      {/* Left Column - 3D Visuals (70%) */}
      <div className="hidden md:block md:w-[70%] h-full relative overflow-hidden">        
        {/* The 3D Component */}
        <div className="absolute inset-0 w-full h-full">
          <Scene3D />
        </div>
      </div>

      {/* Right Column - Login Interface (30% approx) */}
      <div className="w-full md:w-[30%] min-w-[400px] h-screen bg-[#030816] border-l border-slate-800/50 flex items-center justify-center p-4 relative z-10 shadow-[-20px_0_50px_rgba(0,0,0,0.5)]">
        {/* Background glow behind form */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-emerald-600/5 blur-[120px] pointer-events-none" />
        
        <AdminLoginForm />
      </div>

      {/* Mobile background (small 3D or static) */}
      <div className="absolute inset-0 md:hidden opacity-20 pointer-events-none">
        <Scene3D />
      </div>
    </main>
  );
}
