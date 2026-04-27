"use client";

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useAdminTheme } from '../layout';
import { 
  Lock, 
  Loader2, 
  Check, 
  X, 
  Shield, 
  Settings, 
  Info, 
  Save, 
  Layers, 
  ChevronDown, 
  ChevronRight,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { Button, Stack, Toggle, Tooltip, Whisper, Message, useToaster, Tag } from 'rsuite';
import { useTranslation } from 'react-i18next';
import DataManagementLayout from '@/components/admin/DataManagementLayout';
import { useAdminAuth } from '@/context/AdminAuthContext';

interface Role {
  id: string;
  name: string;
  code?: string;
}

interface Module {
  id: string;
  code: string;
  nameEn: string;
  nameVn: string;
}

interface Permission {
  id: string;
  code: string;
  nameEn: string;
  nameVn: string;
}

interface MatrixItem {
  roleId: string;
  moduleId: string;
  permissionId: string;
}

export default function PermissionMatrixPage() {
  const { isDark } = useAdminTheme();
  const { t, i18n } = useTranslation();
  const toaster = useToaster();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [collapsedGroups, setCollapsedGroups] = useState<Set<string>>(new Set());

  const [roles, setRoles] = useState<Role[]>([]);
  const [modules, setModules] = useState<Module[]>([]);
  const [permissions, setPermissions] = useState<Permission[]>([]);
  const { canDo } = useAdminAuth();

  const canUpdate = canDo('MATRIX', 'UPDATE');
  
  // State of matrix: Record<roleId, Set<moduleId-permissionId>>
  const [matrixState, setMatrixState] = useState<Record<string, Set<string>>>({});

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/permissions/matrix');
      const data = await res.json();
      
      const r = data.roles || [];
      const m = data.modules || [];
      const p = data.permissions || [];
      const mat = data.matrix || [];

      setRoles(r);
      setModules(m);
      setPermissions(p);

      const initialState: Record<string, Set<string>> = {};
      r.forEach((role: Role) => {
        const roleMat = mat.filter((item: MatrixItem) => item.roleId === role.id);
        initialState[role.id] = new Set(roleMat.map((item: MatrixItem) => `${item.moduleId}:${item.permissionId}`));
      });
      setMatrixState(initialState);
      setHasChanges(false);
    } catch (e) {
      console.error(e);
      toaster.push(<Message type="error" showIcon>{t('admin.permissions.loadError')}</Message>, { placement: 'topEnd' });
    } finally {
      setLoading(false);
    }
  }, [t, toaster]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleToggle = (roleId: string, moduleId: string, permissionId: string) => {
    const key = `${moduleId}:${permissionId}`;
    setMatrixState(prev => {
      const newState = { ...prev };
      const roleSet = new Set(newState[roleId]);
      if (roleSet.has(key)) roleSet.delete(key);
      else roleSet.add(key);
      newState[roleId] = roleSet;
      return newState;
    });
    setHasChanges(true);
  };

  const toggleAllMatrix = () => {
    const allKeys: string[] = [];
    modules.forEach(m => permissions.forEach(p => allKeys.push(`${m.id}:${p.id}`)));
    
    const anySelected = Object.values(matrixState).some(set => set.size > 0);
    const newState: Record<string, Set<string>> = {};
    roles.forEach(role => {
      newState[role.id] = anySelected ? new Set() : new Set(allKeys);
    });
    setMatrixState(newState);
    setHasChanges(true);
  };

  const toggleAllRole = (roleId: string) => {
    const allKeys: string[] = [];
    modules.forEach(m => permissions.forEach(p => allKeys.push(`${m.id}:${p.id}`)));
    
    const current = matrixState[roleId] || new Set();
    setMatrixState(prev => ({
      ...prev,
      [roleId]: current.size === allKeys.length ? new Set() : new Set(allKeys)
    }));
    setHasChanges(true);
  };

  const toggleAllPermissionForModule = (moduleId: string, permissionId: string) => {
    const key = `${moduleId}:${permissionId}`;
    const allSelected = roles.every(r => matrixState[r.id]?.has(key));
    
    setMatrixState(prev => {
      const newState = { ...prev };
      roles.forEach(role => {
        const roleSet = new Set(newState[role.id]);
        allSelected ? roleSet.delete(key) : roleSet.add(key);
        newState[role.id] = roleSet;
      });
      return newState;
    });
    setHasChanges(true);
  };

  const toggleAllGroup = (moduleId: string) => {
    const groupKeys: string[] = permissions.map(p => `${moduleId}:${p.id}`);
    const allRolesAllPerms = roles.every(r => groupKeys.every(k => matrixState[r.id]?.has(k)));
    
    setMatrixState(prev => {
      const newState = { ...prev };
      roles.forEach(role => {
        const roleSet = new Set(newState[role.id]);
        groupKeys.forEach(k => allRolesAllPerms ? roleSet.delete(k) : roleSet.add(k));
        newState[role.id] = roleSet;
      });
      return newState;
    });
    setHasChanges(true);
  };

  const toggleGroupForRole = (roleId: string, moduleId: string) => {
    const groupKeys: string[] = permissions.map(p => `${moduleId}:${p.id}`);
    const current = matrixState[roleId] || new Set();
    const allHas = groupKeys.every(k => current.has(k));
    
    setMatrixState(prev => {
      const newState = { ...prev };
      const roleSet = new Set(newState[roleId]);
      groupKeys.forEach(k => allHas ? roleSet.delete(k) : roleSet.add(k));
      newState[roleId] = roleSet;
      return newState;
    });
    setHasChanges(true);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      // We need to flatten the state back to MatrixItem[]
      const flatMatrix: MatrixItem[] = [];
      Object.entries(matrixState).forEach(([roleId, keys]) => {
        keys.forEach(k => {
          const [moduleId, permissionId] = k.split(':');
          flatMatrix.push({ roleId, moduleId, permissionId });
        });
      });

      const res = await fetch('/api/admin/permissions/matrix', {
        method: 'PUT', // Assuming PUT for full sync, or POST with logic change
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ matrix: flatMatrix })
      });

      if (res.ok) {
        toaster.push(<Message type="success" showIcon>{t('admin.permissions.saveSuccess')}</Message>, { placement: 'topEnd' });
        setHasChanges(false);
      } else {
        toaster.push(<Message type="error" showIcon>{t('admin.permissions.saveError')}</Message>, { placement: 'topEnd' });
      }
    } catch (e) {
      console.error(e);
      toaster.push(<Message type="error" showIcon>{t('admin.permissions.saveError')}</Message>, { placement: 'topEnd' });
    } finally {
      setSaving(false);
    }
  };

  const toggleCollapse = (moduleId: string) => {
    setCollapsedGroups(prev => {
      const next = new Set(prev);
      next.has(moduleId) ? next.delete(moduleId) : next.add(moduleId);
      return next;
    });
  };

  const filteredModules = useMemo(() => {
    if (!searchTerm) return modules;
    const term = searchTerm.toLowerCase();
    return modules.filter(m => 
      m.nameEn.toLowerCase().includes(term) || 
      m.nameVn.toLowerCase().includes(term) || 
      m.code.toLowerCase().includes(term)
    );
  }, [modules, searchTerm]);

  const renderCheckbox = (checked: boolean, indeterminate: boolean, onClick: () => void, title: string, size: number = 24) => (
    <div
      className={`!rounded-lg !border !flex !items-center !justify-center !cursor-pointer !transition-all !flex-shrink-0 ${
        checked
          ? '!bg-blue-500 !border-blue-500 !text-white !shadow-lg !shadow-blue-500/20'
          : indeterminate
          ? '!bg-blue-100 !border-blue-400 !text-blue-600'
          : isDark ? '!bg-slate-800 !border-slate-700 !text-transparent hover:!border-blue-500' : '!bg-white !border-slate-300 !text-transparent hover:!border-blue-300'
      }`}
      style={{ width: size, height: size }}
      onClick={(e) => { e.stopPropagation(); onClick(); }}
      title={title}
    >
      {checked ? <Check size={size * 0.6} strokeWidth={4} /> : indeterminate ? <div className="w-2 h-0.5 bg-blue-600 rounded-full" /> : null}
    </div>
  );

  if (loading && modules.length === 0) {
    return (
      <div className="!h-[400px] !flex !items-center !justify-center">
        <Loader2 className="!animate-spin !text-blue-500" size={32} />
      </div>
    );
  }

  const border = isDark ? '!border-slate-800' : '!border-slate-200';
  const headerBg = isDark ? '!bg-[#0f172a]' : '!bg-slate-50';
  const text = isDark ? '!text-slate-200' : '!text-slate-800';
  const mutedText = isDark ? '!text-slate-500' : '!text-slate-400';
  const cardBg = isDark ? '!bg-[#030816]' : '!bg-white';
  const rowBg = isDark ? 'hover:!bg-blue-500/10' : 'hover:!bg-blue-50';
  const stickyCellBg = isDark ? '!bg-[#030816]' : '!bg-white';

  return (
    <DataManagementLayout
      searchTerm={searchTerm}
      onSearchTermChange={setSearchTerm}
      onSearch={() => {}}
      advancedOpen={false}
      onToggleAdvanced={() => {}}
      isDark={isDark}
      searchPlaceholder={t('admin.permissions.searchPlaceholder') || "Tìm kiếm module..."}
      searchBarExtras={
        <Stack spacing={12}>
            <Button
                appearance="primary"
                color="blue"
                disabled={!hasChanges || !canUpdate}
                loading={saving}
                onClick={handleSave}
                className="!flex !items-center !gap-2 !px-4 !py-1.5 !rounded-lg !text-[10px] !font-bold !uppercase !tracking-widest"
            >
                <Save size={16} />
                <span>{t('admin.permissions.saveMatrix') || "Lưu ma trận"}</span>
            </Button>
        </Stack>
      }
    >
      <div className="!p-1 !h-full !flex !flex-col !min-h-0">
        <div className={`!flex-1 !overflow-auto !rounded-sm !border ${border} ${cardBg} !shadow-2xl !relative !custom-scrollbar`}>
        <table className="w-full border-collapse min-w-[1000px]">
          <thead className={` !top-0 !z-30 ${headerBg}`}>
            <tr>
              <th className={`!p-4 !text-left !font-bold !border-b !border-r ${border} !w-[300px] !sticky !left-0 !z-40 ${headerBg}`}>
                <div className="!flex !items-center !justify-between">
                  <div className="!flex !items-center !gap-2">
                    <Shield size={18} className="!text-blue-500" />
                    <span className={`!text-xs !uppercase !tracking-widest ${text}`}>{t('admin.permissions.moduleRole')}</span>
                  </div>
                  {renderCheckbox(
                    roles.every(r => matrixState[r.id]?.size === (modules.length * permissions.length)),
                    Object.values(matrixState).some(s => s.size > 0),
                    toggleAllMatrix,
                    t('admin.permissions.selectAll')
                  )}
                </div>
              </th>
              {roles.map(role => (
                <th key={role.id} className={`!p-4 !text-center !border-b ${border} !min-w-[150px]`}>
                  <div className="!flex !flex-col !items-center !gap-2">
                    <span className={`!text-[11px] !font-bold !uppercase !tracking-wide ${text}`}>{role.name}</span>
                    <Tag size="sm" className="!font-mono !text-[9px] !bg-blue-500/10 !text-blue-500 !border-blue-500/20 !italic">
                      {role.code || role.name.replace(/\s+/g, '_')}
                    </Tag>
                    {renderCheckbox(
                      matrixState[role.id]?.size === (modules.length * permissions.length),
                      (matrixState[role.id]?.size || 0) > 0,
                      () => toggleAllRole(role.id),
                      t('admin.permissions.selectAllRole', { role: role.name })
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredModules.map(mod => {
              const isCollapsed = collapsedGroups.has(mod.id);
              return (
                <React.Fragment key={mod.id}>
                  {/* Group Header Row */}
                  <tr className={`${isDark ? '!bg-slate-900/50' : '!bg-slate-50'} !border-b ${border}`}>
                    <td colSpan={roles.length + 1} className="!p-2.5 !px-4 !sticky !left-0 !z-20">
                      <div className="!flex !items-center !justify-between">
                        <div className="!flex !items-center !gap-3">
                          <button
                            onClick={() => toggleCollapse(mod.id)}
                            className={`!p-1 !rounded !transition-colors ${isDark ? 'hover:!bg-slate-700' : 'hover:!bg-slate-200'} ${mutedText}`}
                          >
                            {isCollapsed ? <ChevronRight size={16} /> : <ChevronDown size={16} />}
                          </button>
                          <div className={`!w-6 !h-6 !rounded-lg !flex !items-center !justify-center ${isDark ? '!bg-blue-500/10 !text-blue-400' : '!bg-blue-50 !text-blue-600'}`}>
                            <Layers size={14} />
                          </div>
                          <span className={`!text-xs !font-bold !uppercase !tracking-wider ${text}`}>
                            {i18n.language === 'en' ? mod.nameEn : mod.nameVn}
                          </span>
                          <span className={`!text-[10px] !font-mono !opacity-40`}>[{mod.code}]</span>
                        </div>
                        
                        <div className="!flex !items-center !gap-2">
                          <span className="!text-[10px] !uppercase !font-bold !opacity-30">{t('admin.permissions.groupToggle')}</span>
                          {renderCheckbox(
                            roles.every(r => permissions.every(p => matrixState[r.id]?.has(`${mod.id}:${p.id}`))),
                            roles.some(r => permissions.some(p => matrixState[r.id]?.has(`${mod.id}:${p.id}`))),
                            () => toggleAllGroup(mod.id),
                            t('admin.permissions.selectAllModule', { module: mod.code })
                          )}
                        </div>
                      </div>
                    </td>
                  </tr>

                  {/* Collapsed view role checkboxes */}
                  {isCollapsed && (
                    <tr className={`!border-b ${border} ${isDark ? '!bg-slate-900/20' : '!bg-slate-50/50'}`}>
                      <td className={`!p-2 !border-r ${border} !text-[10px] !italic ${mutedText}`}>
                        {t('admin.permissions.collapsedHint', { count: permissions.length })}
                      </td>
                      {roles.map(role => (
                        <td key={role.id} className="!p-2 !text-center">
                          <div className="!flex !justify-center">
                            {renderCheckbox(
                              permissions.every(p => matrixState[role.id]?.has(`${mod.id}:${p.id}`)),
                              permissions.some(p => matrixState[role.id]?.has(`${mod.id}:${p.id}`)),
                              () => toggleGroupForRole(role.id, mod.id),
                              t('admin.permissions.groupToggleRole', { role: role.name })
                            )}
                          </div>
                        </td>
                      ))}
                    </tr>
                  )}

                  {/* Permission Rows */}
                  {!isCollapsed && permissions.map(perm => {
                    const key = `${mod.id}:${perm.id}`;
                    return (
                      <tr key={perm.id} className={`group !border-b ${border} ${rowBg} !transition-colors`}>
                        <td className={`!p-3 !border-r ${border} !relative !sticky !left-0 !z-10 ${stickyCellBg}`}>
                           <div className="!flex !items-center !justify-between">
                              <div className="!flex !flex-col">
                                <div className="!flex !items-center !gap-2">
                                  <span className={`!text-[11px] !font-semibold ${text}`}>
                                    {i18n.language === 'en' ? perm.nameEn : perm.nameVn}
                                  </span>
                                  <Whisper placement="right" speaker={<Tooltip>{perm.code}</Tooltip>}>
                                    <Info size={12} className="!opacity-30 !cursor-help" />
                                  </Whisper>
                                </div>
                                <span className="!text-[9px] !font-mono !opacity-30 !uppercase">{perm.code}</span>
                              </div>
                              {renderCheckbox(
                                roles.every(r => matrixState[r.id]?.has(key)),
                                roles.some(r => matrixState[r.id]?.has(key)),
                                () => toggleAllPermissionForModule(mod.id, perm.id),
                                t('admin.permissions.selectAllRolesForAction')
                              )}
                           </div>
                        </td>
                        {roles.map(role => {
                          const enabled = matrixState[role.id]?.has(key);
                          return (
                            <td key={role.id} className={`!p-0 !text-center !border-r ${border} last:!border-r-0`}>
                              <div 
                                className="!w-full !h-full !min-h-[50px] !flex !items-center !justify-center !cursor-pointer group/cell"
                                onClick={() => handleToggle(role.id, mod.id, perm.id)}
                              >
                                <div className={`
                                  !w-6 !h-6 !rounded-lg !flex !items-center !justify-center !transition-all !duration-200
                                  ${enabled 
                                    ? '!bg-blue-500 !text-white !shadow-lg !shadow-blue-500/20 !scale-110' 
                                    : isDark ? '!bg-slate-800/50 !border !border-slate-700 !text-transparent group-hover/cell:!border-slate-500' : '!bg-slate-50 !border !border-slate-200 !text-transparent group-hover/cell:!border-slate-400'}
                                `}>
                                  <Check size={14} strokeWidth={4} />
                                </div>
                              </div>
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      {hasChanges && (
        <div className={`!mt-6 !p-4 !rounded-xl !border !flex !items-center !justify-between !shadow-lg !animate-in !fade-in !slide-in-from-bottom-4 !duration-500 ${isDark ? '!bg-amber-500/10 !border-amber-500/30 !text-amber-500' : '!bg-amber-50 !border-amber-200 !text-amber-700'}`}>
          <div className="!flex !items-center !gap-3">
            <AlertCircle size={20} />
            <span className="!text-sm !font-bold !uppercase !tracking-wider">{t('admin.permissions.unsavedChanges')}</span>
          </div>
          <Button 
            appearance="primary" 
            color="orange" 
            loading={saving}
            onClick={handleSave}
            className="!font-bold !text-[11px] !uppercase !tracking-widest !px-6"
          >
            {t('admin.permissions.saveNow')}
          </Button>
        </div>
      )}
  
      <div className={`!mt-6 !p-4 !rounded-xl !border ${border} ${isDark ? '!bg-slate-900/30' : '!bg-slate-50'} !flex !gap-8 !items-center`}>
        <div className="!flex !items-center !gap-2">
          <div className="!w-3 !h-3 !rounded !bg-blue-500" />
          <span className="!text-[10px] !font-bold !uppercase !tracking-wider !text-slate-500">{t('admin.permissions.legendAllowed')}</span>
        </div>
        <div className="!flex !items-center !gap-2">
          <div className={`!w-3 !h-3 !rounded !border ${isDark ? '!bg-slate-800 !border-slate-700' : '!bg-white !border-slate-200'}`} />
          <span className="!text-[10px] !font-bold !uppercase !tracking-wider !text-slate-500">{t('admin.permissions.legendDenied')}</span>
        </div>
        <div className="!ml-auto !flex !items-center !gap-2 !text-[10px] !font-bold !uppercase !tracking-widest !opacity-30 !italic">
          <Info size={12} />
          <span>{t('admin.permissions.legendHint')}</span>
        </div>
        </div>
        </div>
    </DataManagementLayout>
  );
}
