import React from 'react';
import { TriangleAlert, Sparkles } from 'lucide-react';
import NotFoundActions from '@/components/common/NotFoundActions';

export const metadata = {
  title: '404 - Page Not Found | Lucid Technology',
  description: 'The page you are looking for does not exist or has been moved.',
};

export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full bg-[#020617] flex items-center justify-center overflow-hidden font-sans">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        {/* Icon / Branding */}
        <div className="mb-8 relative group">
          <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full scale-150 group-hover:bg-blue-400/30 transition-all duration-500" />
          <div className="relative w-24 h-24 bg-slate-900/80 border border-slate-800 rounded-3xl flex items-center justify-center backdrop-blur-xl">
             <TriangleAlert size={48} className="text-blue-500 animate-pulse" />
          </div>
        </div>

        {/* 404 Text */}
        <h1 className="text-[12rem] md:text-[16rem] font-bold leading-none mb-4 select-none tracking-tighter font-orbitron">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-blue-500 to-blue-900 drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
            404
          </span>
        </h1>

        {/* Message */}
        <div className="max-w-2xl space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight flex items-center justify-center gap-3">
             <Sparkles className="text-blue-400" size={28} />
             Trang không tồn tại
             <Sparkles className="text-blue-400" size={28} />
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed">
            Oops! Trang bạn đang tìm kiếm có thể đã bị di chuyển, xóa hoặc không còn tồn tại. 
            Vui lòng kiểm tra lại đường dẫn hoặc quay về trang chủ.
          </p>
        </div>

        {/* Actions (Client component handle interactivity) */}
        <NotFoundActions />
        
        {/* Footer info */}
        <div className="mt-24 pt-8 border-t border-slate-800/50 w-full max-w-sm">
           <p className="text-slate-600 text-sm font-medium tracking-widest uppercase">
             © 2026 Lucid Technology
           </p>
        </div>
      </div>
    </main>
  );
}
