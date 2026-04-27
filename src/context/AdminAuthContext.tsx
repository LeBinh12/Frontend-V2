"use client";

import React, { createContext, useContext, ReactNode } from 'react';
import { usePermissions, UserPermissionsMap } from '@/hooks/usePermissions';

interface AdminAuthContextType {
  user: any;
  permissionsMap: UserPermissionsMap | null;
  allowedModules: string[];
  loading: boolean;
  canDo: (moduleCode: string, actionCode: string) => boolean;
  canAccess: (moduleCode: string) => boolean;
  refresh: () => Promise<void>;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const auth = usePermissions();

  return (
    <AdminAuthContext.Provider value={auth}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (context === undefined) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
}
