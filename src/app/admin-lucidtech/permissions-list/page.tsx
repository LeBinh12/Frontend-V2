"use client";

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useAdminTheme } from '../layout';
import { Plus, Edit2, Trash2, Key, Loader2, Save, X } from 'lucide-react';
import { Button } from 'rsuite';
import { useTranslation } from 'react-i18next';
import DataManagementLayout from '@/components/admin/DataManagementLayout';
import DataTable, { DataTableColumn } from '@/components/admin/DataTable';
import AdminConfirmDeleteModal from '@/components/admin/AdminConfirmDeleteModal';
import ActionMenu from '@/components/admin/ActionMenu';
import { useAdminAuth } from '@/context/AdminAuthContext';

interface Permission {
  id: string;
  nameEn: string;
  nameVn: string;
  code: string;
  descriptionEn?: string | null;
  descriptionVn?: string | null;
  createdAt: string;
}

const EMPTY: Omit<Permission, 'id' | 'createdAt'> = { 
  nameEn: '', 
  nameVn: '', 
  code: '', 
  descriptionEn: '', 
  descriptionVn: '' 
};

function PermissionModal({ open, onClose, onSave, item, isDark }: {
  open: boolean; onClose: () => void; onSave: (d: Omit<Permission, 'id' | 'createdAt'>) => Promise<void>;
  item: Permission | null; isDark: boolean;
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
            <Key size={15} color="#3b82f6" />
            <span style={{ fontSize: 13, fontWeight: 700, color: text }}>{item ? t('admin.permissionsList.editTitle') : t('admin.permissionsList.addTitle')}</span>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: label }}><X size={16} /></button>
        </div>
        <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {F(t('admin.permissionsList.code'), <input style={inp} value={form.code} placeholder="READ, WRITE, DELETE..." onChange={e => setForm(f => ({ ...f, code: e.target.value.toUpperCase().replace(/\s+/g, '_') }))} />)}
          {F(t('admin.permissionsList.nameEn'), <input style={inp} value={form.nameEn} onChange={e => setForm(f => ({ ...f, nameEn: e.target.value }))} />)}
          {F(t('admin.permissionsList.nameVn'), <input style={inp} value={form.nameVn} onChange={e => setForm(f => ({ ...f, nameVn: e.target.value }))} />)}
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

export default function PermissionsListPage() {
  const { isDark } = useAdminTheme();
  const { t, i18n } = useTranslation();
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState<Permission[]>([]);
  const [formOpen, setFormOpen] = useState(false);
  const [editItem, setEditItem] = useState<Permission | null>(null);
  const [deleteItem, setDeleteItem] = useState<Permission | null>(null);
  const { canDo } = useAdminAuth();

  const canCreate = canDo('PERMISSIONS', 'CREATE');
  const canUpdate = canDo('PERMISSIONS', 'UPDATE');
  const canDelete = canDo('PERMISSIONS', 'DELETE');

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/permissions');
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

  const handleAdd = async (f: Omit<Permission, 'id' | 'createdAt'>) => {
    await fetch('/api/admin/permissions', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(f) });
    await fetchData();
  };
  
  const handleEdit = async (f: Omit<Permission, 'id' | 'createdAt'>) => {
    if (!editItem) return;
    await fetch(`/api/admin/permissions/${editItem.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(f) });
    await fetchData();
  };

  const handleDelete = async () => { 
    if (!deleteItem) return; 
    await fetch(`/api/admin/permissions/${deleteItem.id}`, { method: 'DELETE' }); 
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

  const columns: DataTableColumn<Permission>[] = useMemo(() => [
    { 
      key: 'code', 
      header: t('admin.permissionsList.code'), 
      width: 150, 
      render: r => <span className="text-xs font-mono font-bold text-blue-500">{r.code}</span> 
    },
    { 
      key: 'nameEn', 
      header: t('admin.permissionsList.nameEn'), 
      flexGrow: 1, 
      render: r => <span className="text-xs">{r.nameEn}</span> 
    },
    { 
      key: 'nameVn', 
      header: t('admin.permissionsList.nameVn'), 
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

  const handleAddCommon = async () => {
    const commonActions = [
      { code: 'VIEW', nameEn: 'View', nameVn: 'Xem' },
      { code: 'CREATE', nameEn: 'Create', nameVn: 'Thêm mới' },
      { code: 'UPDATE', nameEn: 'Update', nameVn: 'Cập nhật' },
      { code: 'DELETE', nameEn: 'Delete', nameVn: 'Xóa' },
      { code: 'EXPORT', nameEn: 'Export', nameVn: 'Xuất dữ liệu' },
      { code: 'IMPORT', nameEn: 'Import', nameVn: 'Nhập dữ liệu' },
    ];

    setLoading(true);
    try {
      for (const act of commonActions) {
        const existing = rows.find(r => r.code === act.code);
        if (!existing) {
          await fetch('/api/admin/permissions', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(act)
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
        advancedOpen={false} onToggleAdvanced={() => {}} searchPlaceholder={t('admin.permissionsList.search')} controlSize="sm" isDark={isDark}
        searchBarExtras={
          <div style={{ display: 'flex', gap: 8 }}>
            {canCreate && (
              <Button size="sm" appearance="subtle" onClick={handleAddCommon} className="!flex !items-center !gap-1.5 !px-3 !py-1 !rounded-sm !text-[10px] !font-bold">
                <Key size={14} /> {t('admin.permissionsList.addCommon') || "Thêm hành động mẫu"}
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
          emptyText={t('admin.permissionsList.empty')}
        />
      </DataManagementLayout>

      <PermissionModal open={formOpen} onClose={() => { setFormOpen(false); setEditItem(null); }} onSave={editItem ? handleEdit : handleAdd} item={editItem} isDark={isDark} />
      
      <AdminConfirmDeleteModal
        open={Boolean(deleteItem)}
        onClose={() => setDeleteItem(null)}
        onConfirm={handleDelete}
        itemLabel={deleteItem?.code ?? ''}
        isDark={isDark}
        title={t('admin.permissionsList.confirmDeleteTitle')}
        description={t('admin.permissionsList.confirmDeleteDesc')}
      />
    </div>
  );
}
