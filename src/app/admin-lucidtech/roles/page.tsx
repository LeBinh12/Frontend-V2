"use client";

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useAdminTheme } from '../layout';
import { Plus, Edit2, Trash2, ShieldCheck, Loader2, Save, X } from 'lucide-react';
import { Button } from 'rsuite';
import { useTranslation } from 'react-i18next';
import DataManagementLayout from '@/components/admin/DataManagementLayout';
import DataTable, { DataTableColumn } from '@/components/admin/DataTable';
import AdminConfirmDeleteModal from '@/components/admin/AdminConfirmDeleteModal';
import ActionMenu from '@/components/admin/ActionMenu';
import { useAdminAuth } from '@/context/AdminAuthContext';

interface Role {
  id: string;
  name: string;
  descriptionEn?: string | null;
  descriptionVn?: string | null;
  createdAt: string;
}

const EMPTY: Omit<Role, 'id' | 'createdAt'> = { name: '', descriptionEn: '', descriptionVn: '' };

function RoleModal({ open, onClose, onSave, item, isDark }: {
  open: boolean; onClose: () => void; onSave: (d: Omit<Role, 'id' | 'createdAt'>) => Promise<void>;
  item: Role | null; isDark: boolean;
}) {
  const { t } = useTranslation();
  const [form, setForm] = useState(EMPTY);
  const [saving, setSaving] = useState(false);

  useEffect(() => { 
    setForm(item ? { 
      name: item.name, 
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
            <ShieldCheck size={15} color="#3b82f6" />
            <span style={{ fontSize: 13, fontWeight: 700, color: text }}>{item ? t('admin.roles.editTitle') : t('admin.roles.addTitle')}</span>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: label }}><X size={16} /></button>
        </div>
        <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {F(t('admin.roles.name'), <input style={inp} value={form.name} placeholder={t('admin.roles.namePlaceholder')} onChange={e => setForm(f => ({ ...f, name: e.target.value.toUpperCase().replace(/\s+/g, '_') }))} />)}
          {F(t('admin.roles.descEn'), <input style={inp} value={form.descriptionEn ?? ''} onChange={e => setForm(f => ({ ...f, descriptionEn: e.target.value }))} />)}
          {F(t('admin.roles.descVn'), <input style={inp} value={form.descriptionVn ?? ''} onChange={e => setForm(f => ({ ...f, descriptionVn: e.target.value }))} />)}
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, padding: '12px 18px', borderTop: `1px solid ${border}` }}>
          <button onClick={onClose} style={{ padding: '7px 16px', fontSize: 12, borderRadius: 4, cursor: 'pointer', background: 'transparent', border: `1px solid ${border}`, color: label }}>{t('admin.common.cancel')}</button>
          <button disabled={!form.name.trim() || saving} onClick={async () => { setSaving(true); await onSave(form); setSaving(false); onClose(); }}
            style={{ padding: '7px 16px', fontSize: 12, fontWeight: 700, borderRadius: 4, cursor: 'pointer', background: '#3b82f6', border: 'none', color: '#fff', display: 'flex', alignItems: 'center', gap: 6 }}>
            {saving ? <Loader2 size={12} className="animate-spin" /> : <Save size={12} />} {item ? t('admin.common.save') : t('admin.common.add')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function RolesPage() {
  const { isDark } = useAdminTheme();
  const { t, i18n } = useTranslation();
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState<Role[]>([]);
  const [formOpen, setFormOpen] = useState(false);
  const [editItem, setEditItem] = useState<Role | null>(null);
  const [deleteItem, setDeleteItem] = useState<Role | null>(null);
  const { canDo } = useAdminAuth();

  const canCreate = canDo('ROLES', 'CREATE');
  const canUpdate = canDo('ROLES', 'UPDATE');
  const canDelete = canDo('ROLES', 'DELETE');

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/roles');
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

  const handleAdd = async (f: Omit<Role, 'id' | 'createdAt'>) => {
    await fetch('/api/admin/roles', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(f) });
    await fetchData();
  };
  
  const handleEdit = async (f: Omit<Role, 'id' | 'createdAt'>) => {
    if (!editItem) return;
    await fetch(`/api/admin/roles/${editItem.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(f) });
    await fetchData();
  };

  const handleDelete = async () => { 
    if (!deleteItem) return; 
    await fetch(`/api/admin/roles/${deleteItem.id}`, { method: 'DELETE' }); 
    await fetchData(); 
    setDeleteItem(null);
  };

  const filteredRows = useMemo(() => {
    if (!search) return rows;
    const s = search.toLowerCase();
    return rows.filter(r => 
      r.name.toLowerCase().includes(s) || 
      (r.descriptionEn?.toLowerCase().includes(s)) || 
      (r.descriptionVn?.toLowerCase().includes(s))
    );
  }, [rows, search]);

  const columns: DataTableColumn<Role>[] = useMemo(() => [
    { 
      key: 'name', 
      header: t('admin.roles.name'), 
      width: 200, 
      render: r => <span className="text-xs font-bold text-blue-500">{r.name}</span> 
    },
    { 
      key: 'description', 
      header: t('admin.roles.description'), 
      flexGrow: 1, 
      render: r => <span className="text-xs opacity-70">{i18n.language === 'en' ? r.descriptionEn : r.descriptionVn}</span> 
    },
    { 
      key: 'createdAt', 
      header: t('admin.common.createdAt'), 
      width: 150, 
      render: r => <span className="text-[10px] opacity-50">{new Date(r.createdAt).toLocaleString()}</span> 
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
  ], [isDark, t, i18n.language]);

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <DataManagementLayout
        searchTerm={search} onSearchTermChange={setSearch} onSearch={() => {}}
        advancedOpen={false} onToggleAdvanced={() => {}} searchPlaceholder={t('admin.roles.search')} controlSize="sm" isDark={isDark}
        searchBarExtras={
          canCreate && (
            <Button size="sm" appearance="primary" color="blue" onClick={() => { setEditItem(null); setFormOpen(true); }} className="!flex !items-center !gap-1.5 !px-3 !py-1 !rounded-sm !text-[10px] !font-bold">
              <Plus size={14} /> {t('admin.common.addNew')}
            </Button>
          )
        }
      >
        <DataTable
          data={filteredRows}
          columns={columns}
          rowKey="id"
          gridHeight="calc(100vh - 148px)"
          isDark={isDark}
          loading={loading}
          emptyText={t('admin.roles.empty')}
        />
      </DataManagementLayout>

      <RoleModal open={formOpen} onClose={() => { setFormOpen(false); setEditItem(null); }} onSave={editItem ? handleEdit : handleAdd} item={editItem} isDark={isDark} />
      
      <AdminConfirmDeleteModal
        open={Boolean(deleteItem)}
        onClose={() => setDeleteItem(null)}
        onConfirm={handleDelete}
        itemLabel={deleteItem?.name ?? ''}
        isDark={isDark}
        title={t('admin.roles.confirmDeleteTitle')}
        description={t('admin.roles.confirmDeleteDesc')}
      />
    </div>
  );
}
