"use client";

import React from 'react';
import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFoundActions() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <Link 
        href="/"
        className="group relative flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_35px_rgba(37,99,235,0.5)] hover:-translate-y-1"
      >
        <Home size={20} className="group-hover:scale-110 transition-transform" />
        Quay về trang chủ
      </Link>
      
      <button 
        onClick={() => window.history.back()}
        className="flex items-center gap-3 px-8 py-4 bg-slate-900/50 hover:bg-slate-800/80 text-slate-300 hover:text-white font-bold rounded-2xl border border-slate-700 hover:border-slate-500 transition-all duration-300 backdrop-blur-md"
      >
        <ArrowLeft size={20} />
        Quay lại trang trước
      </button>
    </div>
  );
}
