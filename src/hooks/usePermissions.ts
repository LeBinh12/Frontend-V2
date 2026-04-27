import { useState, useEffect, useCallback } from 'react';

export interface UserPermissionsMap {
  [moduleCode: string]: string[];
}

export function usePermissions() {
  const [permissionsMap, setPermissionsMap] = useState<UserPermissionsMap | null>(null);
  const [allowedModules, setAllowedModules] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  const fetchPermissions = useCallback(async () => {
    const savedUser = localStorage.getItem('adminUser');
    if (!savedUser) {
      setLoading(false);
      return;
    }

    try {
      const userData = JSON.parse(savedUser);
      const res = await fetch(`/api/admin/me/permissions?username=${userData.username}`);
      if (res.ok) {
        const data = await res.json();
        const pMap = data.permissions || {};
        setPermissionsMap(pMap);
        setAllowedModules(Object.keys(pMap));
        setUser(data.user);
      }
    } catch (error) {
      console.error('Failed to fetch permissions:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPermissions();
  }, [fetchPermissions]);

  // Check if user can access a module (for Sidebar/Navigation)
  const canAccess = (moduleCode: string): boolean => {
    if (user?.role === 'ADMIN' || user?.username === 'admin') return true;
    if (!permissionsMap) return false;
    
    const code = moduleCode.toUpperCase();
    return allowedModules.includes(code);
  };

  // Check if user can perform an action in a module (for Buttons/Actions)
  const canDo = (moduleCode: string, actionCode: string): boolean => {
    if (user?.role === 'ADMIN' || user?.username === 'admin') return true;
    if (!permissionsMap) return false;

    const modCode = moduleCode.toUpperCase();
    const actCode = actionCode.toUpperCase();
    
    const modulePerms = permissionsMap[modCode];
    if (!modulePerms) return false;

    return modulePerms.includes(actCode) || modulePerms.includes('FULL_ACCESS');
  };

  return { 
    permissionsMap, 
    allowedModules, 
    user, 
    loading, 
    canAccess, 
    canDo, 
    refresh: fetchPermissions 
  };
}
