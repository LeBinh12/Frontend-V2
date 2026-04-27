"use client";

import React, { ReactNode } from 'react';
import { useAdminAuth } from '@/context/AdminAuthContext';
import { usePathname } from 'next/navigation';
import { Loader2, ShieldAlert } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function PermissionGuard({ children }: { children: ReactNode }) {
  const { loading, canAccess } = useAdminAuth();
  const pathname = usePathname();
  const { t } = useTranslation();

  if (loading) {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center gap-4 py-20">
        <Loader2 className="animate-spin text-blue-500" size={32} />
        <p className="text-xs font-bold uppercase tracking-widest opacity-50">Checking permissions...</p>
      </div>
    );
  }

  // Define module mapping for routes
  const routeToModule: Record<string, string> = {
    '/admin-lucidtech/contacts': 'CONTACTS',
    '/admin-lucidtech/content': 'CONTENT',
    '/admin-lucidtech/services': 'SERVICES',
    '/admin-lucidtech/portfolio': 'PORTFOLIO',
    '/admin-lucidtech/team': 'TEAM',
    '/admin-lucidtech/stats': 'STATS',
    '/admin-lucidtech/technologies': 'TECHNOLOGIES',
    '/admin-lucidtech/company': 'COMPANY',
    '/admin-lucidtech/accounts': 'ACCOUNTS',
    '/admin-lucidtech/roles': 'ROLES',
    '/admin-lucidtech/modules': 'MODULES',
    '/admin-lucidtech/permissions-list': 'PERMISSION_LIST',
    '/admin-lucidtech/permissions': 'PERMISSION_MATRIX',
  };

  // Find if current path matches a module route
  const currentModule = Object.entries(routeToModule).find(([route]) => pathname.startsWith(route))?.[1];

  if (currentModule && !canAccess(currentModule)) {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center gap-6 py-24 px-8 text-center">
        <div className="w-20 h-20 rounded-3xl bg-red-500/10 flex items-center justify-center text-red-500">
          <ShieldAlert size={48} />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-bold uppercase tracking-tight">Access Denied</h2>
          <p className="text-sm opacity-60 max-w-md mx-auto">
            You don't have permission to access the <strong>{currentModule}</strong> module. 
            Please contact your administrator if you believe this is an error.
          </p>
        </div>
        <button 
          onClick={() => window.location.href = '/admin-lucidtech'}
          className="px-6 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all"
        >
          Return to Dashboard
        </button>
      </div>
    );
  }

  return <>{children}</>;
}
