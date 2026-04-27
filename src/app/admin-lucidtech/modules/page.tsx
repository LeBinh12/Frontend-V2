"use client";

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useAdminTheme } from '../layout';
import { Plus, Edit2, Trash2, Layers, Loader2, Save, X } from 'lucide-react';
import { Button } from 'rsuite';
import { useTranslation } from 'react-i18next';
import DataManagementLayout from '@/components/admin/DataManagementLayout';
import DataTable, { DataTableColumn } from '@/components/admin/DataTable';
import AdminConfirmDeleteModal from '@/components/admin/AdminConfirmDeleteModal';
import ActionMenu from '@/components/admin/ActionMenu';
import { useAdminAuth } from '@/context/AdminAuthContext';

interface Module {
  id: string;
  nameEn: string;
  nameVn: string;
  code: string;
  descriptionEn?: string | null;
  descriptionVn?: string | null;
  createdAt: string;
}

const EMPTY: Omit<Module, 'id' | 'createdAt'> = { 
  nameEn: '', 
  nameVn: '', 
  code: '', 
  descriptionEn: '', 
  descriptionVn: '' 
};

function ModuleModal({ open, onClose, onSave, item, isDark }: {
  open: boolean; onClose: () => void; onSave: (d: Omit<Module, 'id' | 'createdAt'>) => Promise<void>;
  item: Module | null; isDark: boolean;
}) {
  const { t } = useTranslation();
  const [form, setForm] = useState(EMPTY);
  const [saving, setSaving] = useState(false);

  useEffect(() => { 
    setForm(item ? { 
      nameEn: item.nameEn, 
      nameVn: item.nameVn, 
      code: item.code,
      descriptionEn: item.descriptionEn ?? '', 
      descriptionVn: item.descriptionVn ?? '' 
    } : EMPTY); 
  }, [item, open]);

  if (!open) return null;

  const bg = isDark ? '#0f172a' : '#ffffff', border = isDark ? '#1e293b' : '#e2e8f0';
  const input = isDark ? '#1e293b' : '#f8fafc', text = isDark ? '#e2e8f0' : '#1e293b', label = isDark ? '#94a3b8' : '#64748b';
  const inp: React.CSSProperties = { background: input, border: `1px solid ${border}`, borderRadius: 4, padding: '6px 10px', fontSize: 12, color: text, outline: 'none', width: '100%' };
  
  const F = (lbl: string, el: React.ReactNode) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <label style={{ fontSize: 11, fontWeight: 600, color: label, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{lbl}</label>
      {el}
    </div>
  );

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.65)' }}>
      <div style={{ background: bg, border: `1px solid ${border}`, borderRadius: 8, width: 440, boxShadow: '0 24px 48px rgba(0,0,0,0.4)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', borderBottom: `1px solid ${border}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Layers size={15} color="#3b82f6" />
            <span style={{ fontSize: 13, fontWeight: 700, color: text }}>{item ? t('admin.modules.editTitle') : t('admin.modules.addTitle')}</span>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: label }}><X size={16} /></button>
        </div>
        <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {F(t('admin.modules.code'), <input style={inp} value={form.code} placeholder="CODE_MODULE" onChange={e => setForm(f => ({ ...f, code: e.target.value.toUpperCase().replace(/\s+/g, '_') }))} />)}
          {F(t('admin.modules.nameEn'), <input style={inp} value={form.nameEn} onChange={e => setForm(f => ({ ...f, nameEn: e.target.value }))} />)}
          {F(t('admin.modules.nameVn'), <input style={inp} value={form.nameVn} onChange={e => setForm(f => ({ ...f, nameVn: e.target.value }))} />)}
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, padding: '12px 18px', borderTop: `1px solid ${border}` }}>
          <button onClick={onClose} style={{ padding: '7px 16px', fontSize: 12, borderRadius: 4, cursor: 'pointer', background: 'transparent', border: `1px solid ${border}`, color: label }}>{t('admin.common.cancel')}</button>
          <button disabled={!form.code.trim() || saving} onClick={async () => { setSaving(true); await onSave(form); setSaving(false); onClose(); }}
            style={{ padding: '7px 16px', fontSize: 12, fontWeight: 700, borderRadius: 4, cursor: 'pointer', background: '#3b82f6', border: 'none', color: '#fff', display: 'flex', alignItems: 'center', gap: 6 }}>
            {saving ? <Loader2 size={12} className="animate-spin" /> : <Save size={12} />} {item ? t('admin.common.save') : t('admin.common.add')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ModulesPage() {
  const { isDark } = useAdminTheme();
  const { t, i18n } = useTranslation();
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState<Module[]>([]);
  const [formOpen, setFormOpen] = useState(false);
  const [editItem, setEditItem] = useState<Module | null>(null);
  const [deleteItem, setDeleteItem] = useState<Module | null>(null);
  const { canDo } = useAdminAuth();

  const canCreate = canDo('MODULES', 'CREATE');
  const canUpdate = canDo('MODULES', 'UPDATE');
  const canDelete = canDo('MODULES', 'DELETE');

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/modules');
      const d = await res.json();
      setRows(Array.isArray(d) ? d : []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleAdd = async (f: Omit<Module, 'id' | 'createdAt'>) => {
    await fetch('/api/admin/modules', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(f) });
    await fetchData();
  };
  
  const handleEdit = async (f: Omit<Module, 'id' | 'createdAt'>) => {
    if (!editItem) return;
    await fetch(`/api/admin/modules/${editItem.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(f) });
    await fetchData();
  };

  const handleDelete = async () => { 
    if (!deleteItem) return; 
    await fetch(`/api/admin/modules/${deleteItem.id}`, { method: 'DELETE' }); 
    await fetchData(); 
    setDeleteItem(null);
  };

  const filteredRows = useMemo(() => {
    if (!search) return rows;
    const s = search.toLowerCase();
    return rows.filter(r => 
      r.code.toLowerCase().includes(s) || 
      r.nameEn.toLowerCase().includes(s) || 
      r.nameVn.toLowerCase().includes(s)
    );
  }, [rows, search]);

  const columns: DataTableColumn<Module>[] = useMemo(() => [
    { 
      key: 'code', 
      header: t('admin.modules.code'), 
      width: 150, 
      render: r => <span className="text-xs font-mono font-bold text-blue-500">{r.code}</span> 
    },
    { 
      key: 'nameEn', 
      header: t('admin.modules.nameEn'), 
      flexGrow: 1, 
      render: r => <span className="text-xs">{r.nameEn}</span> 
    },
    { 
      key: 'nameVn', 
      header: t('admin.modules.nameVn'), 
      flexGrow: 1, 
      render: r => <span className="text-xs">{r.nameVn}</span> 
    },
    {
      key: 'actions', header: t('admin.common.actions'), width: 80, align: 'right', fixed: 'right',
      render: r => (
        <ActionMenu 
          isDark={isDark}
          items={[
            ...(canUpdate ? [{ 
              label: t('admin.common.edit'), 
              icon: <Edit2 size={14} />, 
              eventKey: 'edit', 
              onClick: () => { setEditItem(r); setFormOpen(true); } 
            }] : []),
            ...(canDelete ? [{ 
              label: t('admin.common.delete'), 
              icon: <Trash2 size={14} />, 
              eventKey: 'delete', 
              onClick: () => setDeleteItem(r),
              isDanger: true
            }] : [])
          ]}
        />
      ),
    },
  ], [isDark, t]);

  const handleSyncSidebar = async () => {
    const sidebarModules = [
      { code: 'DASHBOARD', nameEn: 'Dashboard', nameVn: 'Bảng điều khiển' },
      { code: 'CONTACTS', nameEn: 'Contacts', nameVn: 'Liên hệ' },
      { code: 'CONTENT', nameEn: 'Static Content', nameVn: 'Nội dung tĩnh' },
      { code: 'SERVICES', nameEn: 'Services', nameVn: 'Dịch vụ' },
      { code: 'PORTFOLIO', nameEn: 'Portfolio', nameVn: 'Dự án' },
      { code: 'TEAM', nameEn: 'Team', nameVn: 'Đội ngũ' },
      { code: 'STATS', nameEn: 'Statistics', nameVn: 'Số liệu' },
      { code: 'TECH', nameEn: 'Technologies', nameVn: 'Công nghệ' },
      { code: 'COMPANY', nameEn: 'Company Info', nameVn: 'Thông tin công ty' },
      { code: 'ACCOUNTS', nameEn: 'Admin Accounts', nameVn: 'Tài khoản' },
      { code: 'ROLES', nameEn: 'Roles', nameVn: 'Vai trò' },
      { code: 'MODULES', nameEn: 'Modules', nameVn: 'Nhóm quyền' },
      { code: 'PERMISSIONS', nameEn: 'Actions', nameVn: 'Quyền (Hành động)' },
      { code: 'MATRIX', nameEn: 'Permission Matrix', nameVn: 'Ma trận quyền' },
    ];

    setLoading(true);
    try {
      for (const mod of sidebarModules) {
        const existing = rows.find(r => r.code === mod.code);
        if (!existing) {
          await fetch('/api/admin/modules', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(mod)
          });
        }
      }
      await fetchData();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <DataManagementLayout
        searchTerm={search} onSearchTermChange={setSearch} onSearch={() => {}}
        advancedOpen={false} onToggleAdvanced={() => {}} searchPlaceholder={t('admin.modules.search')} controlSize="sm" isDark={isDark}
        searchBarExtras={
          <div style={{ display: 'flex', gap: 8 }}>
            {canCreate && (
              <Button size="sm" appearance="subtle" onClick={handleSyncSidebar} className="!flex !items-center !gap-1.5 !px-3 !py-1 !rounded-sm !text-[10px] !font-bold">
                <Layers size={14} /> {t('admin.modules.syncSidebar') || "Đồng bộ Sidebar"}
              </Button>
            )}
            {canCreate && (
              <Button size="sm" appearance="primary" color="blue" onClick={() => { setEditItem(null); setFormOpen(true); }} className="!flex !items-center !gap-1.5 !px-3 !py-1 !rounded-sm !text-[10px] !font-bold">
                <Plus size={14} /> {t('admin.common.addNew')}
              </Button>
            )}
          </div>
        }
      >
        <DataTable
          data={filteredRows}
          columns={columns}
          rowKey="id"
          gridHeight="calc(100vh - 148px)"
          isDark={isDark}
          loading={loading}
          emptyText={t('admin.modules.empty')}
        />
      </DataManagementLayout>

      <ModuleModal open={formOpen} onClose={() => { setFormOpen(false); setEditItem(null); }} onSave={editItem ? handleEdit : handleAdd} item={editItem} isDark={isDark} />
      
      <AdminConfirmDeleteModal
        open={Boolean(deleteItem)}
        onClose={() => setDeleteItem(null)}
        onConfirm={handleDelete}
        itemLabel={deleteItem?.code ?? ''}
        isDark={isDark}
        title={t('admin.modules.confirmDeleteTitle')}
        description={t('admin.modules.confirmDeleteDesc')}
      />
    </div>
  );
}
