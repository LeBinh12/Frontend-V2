"use client";

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useAdminTheme } from '../layout';
import { Button } from 'rsuite';
import { useTranslation } from 'react-i18next';
import DataManagementLayout from '@/components/admin/DataManagementLayout';
import DataTable, { DataTableColumn } from '@/components/admin/DataTable';
import AdminConfirmDeleteModal from '@/components/admin/AdminConfirmDeleteModal';
import { Edit2, Loader2, Plus, Save, Trash2, X, Zap, Code, Fuel, TrendingUp, Users, Cloud, Laptop, Rocket, Shield, Cpu, Globe } from 'lucide-react';
import ActionMenu from '@/components/admin/ActionMenu';

const ICON_COMPONENTS: Record<string, any> = {
  Code, Fuel, TrendingUp, Users, Cloud, Laptop, Rocket, Shield, Cpu, Globe, Zap,
  design: Code,
  blockchain: Fuel,
  ai: TrendingUp,
  software: Code,
  Design: Code
};

const ServiceIcon = ({ iconName, isDark }: { iconName: string; isDark: boolean }) => {
  const name = iconName.split(':').pop() || iconName;
  const Icon = ICON_COMPONENTS[name] || ICON_COMPONENTS[name.charAt(0).toUpperCase() + name.slice(1)] || Zap;
  
  return (
    <div className={`p-2 rounded-lg ${isDark ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
      <Icon size={20} />
    </div>
  );
};

interface Service {
  id: number;
  key: string;
  icon: string;
  titleEn: string;
  titleVn: string;
  descriptionEn: string;
  descriptionVn: string;
}

const EMPTY: Omit<Service, 'id'> = { key: '', icon: '', titleEn: '', titleVn: '', descriptionEn: '', descriptionVn: '' };

function ServiceModal({ open, onClose, onSave, item, isDark }: {
  open: boolean; onClose: () => void; onSave: (d: Omit<Service, 'id'>) => Promise<void>; item: Service | null; isDark: boolean;
}) {
  const { t } = useTranslation();
  const [form, setForm] = useState(EMPTY);
  const [saving, setSaving] = useState(false);
  useEffect(() => { setForm(item ? { key: item.key, icon: item.icon, titleEn: item.titleEn, titleVn: item.titleVn, descriptionEn: item.descriptionEn, descriptionVn: item.descriptionVn } : EMPTY); }, [item, open]);
  if (!open) return null;

  const bg = isDark ? '#0f172a' : '#ffffff', border = isDark ? '#1e293b' : '#e2e8f0';
  const input = isDark ? '#1e293b' : '#f8fafc', text = isDark ? '#e2e8f0' : '#1e293b', label = isDark ? '#94a3b8' : '#64748b';
  const inp: React.CSSProperties = { background: input, border: `1px solid ${border}`, borderRadius: 4, padding: '6px 10px', fontSize: 12, color: text, outline: 'none', width: '100%' };
  const F = (lbl: string, el: React.ReactNode) => <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}><label style={{ fontSize: 11, fontWeight: 600, color: label, textTransform: 'uppercase' as const, letterSpacing: '0.05em' }}>{lbl}</label>{el}</div>;

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.65)' }}>
      <div style={{ background: bg, border: `1px solid ${border}`, borderRadius: 8, width: 580, maxHeight: '90vh', overflowY: 'auto', boxShadow: '0 24px 48px rgba(0,0,0,0.4)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', borderBottom: `1px solid ${border}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Zap size={15} color="#3b82f6" />
            <span style={{ fontSize: 13, fontWeight: 700, color: text }}>{item ? t('admin.services.editTitle') : t('admin.services.addTitle')}</span>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: label }}><X size={16} /></button>
        </div>
        <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {F(t('admin.services.key'), <input style={{ ...inp, fontFamily: 'monospace', opacity: item ? 0.6 : 1 }} value={form.key} readOnly={!!item} placeholder="e.g. gas_station" onChange={e => setForm(f => ({ ...f, key: e.target.value }))} />)}
            {F(t('admin.services.icon'), <input style={inp} value={form.icon} placeholder="e.g. ⚡ or lucide:zap" onChange={e => setForm(f => ({ ...f, icon: e.target.value }))} />)}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {F(t('admin.services.titleEn'), <input style={inp} value={form.titleEn} placeholder="English title" onChange={e => setForm(f => ({ ...f, titleEn: e.target.value }))} />)}
            {F(t('admin.services.titleVn'), <input style={inp} value={form.titleVn} placeholder="Tiêu đề tiếng Việt" onChange={e => setForm(f => ({ ...f, titleVn: e.target.value }))} />)}
          </div>
          {F(t('admin.services.descEn'), <textarea style={{ ...inp, resize: 'vertical', minHeight: 64 }} value={form.descriptionEn} placeholder="English description..." onChange={e => setForm(f => ({ ...f, descriptionEn: e.target.value }))} />)}
          {F(t('admin.services.descVn'), <textarea style={{ ...inp, resize: 'vertical', minHeight: 64 }} value={form.descriptionVn} placeholder="Mô tả tiếng Việt..." onChange={e => setForm(f => ({ ...f, descriptionVn: e.target.value }))} />)}
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, padding: '12px 18px', borderTop: `1px solid ${border}` }}>
          <button onClick={onClose} style={{ padding: '7px 16px', fontSize: 12, fontWeight: 600, borderRadius: 4, cursor: 'pointer', background: 'transparent', border: `1px solid ${border}`, color: label }}>{t('admin.common.cancel')}</button>
          <button disabled={!form.key.trim() || saving} onClick={async () => { setSaving(true); await onSave(form); setSaving(false); onClose(); }}
            style={{ padding: '7px 16px', fontSize: 12, fontWeight: 700, borderRadius: 4, cursor: 'pointer', background: '#3b82f6', border: 'none', color: '#fff', display: 'flex', alignItems: 'center', gap: 6 }}>
            {saving ? <Loader2 size={12} /> : <Save size={12} />} {item ? t('admin.common.save') : t('admin.common.add')}
          </button>
        </div>
      </div>
    </div>
  );
}


export default function ServicesPage() {
  const { isDark } = useAdminTheme();
  const { t } = useTranslation();
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState<Service[]>([]);
  const [formOpen, setFormOpen] = useState(false);
  const [editItem, setEditItem] = useState<Service | null>(null);
  const [deleteItem, setDeleteItem] = useState<Service | null>(null);

  // Pagination state
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState(0);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        q: search
      });
      const res = await fetch(`/api/admin/services?${params.toString()}`);
      const d = await res.json();
      setRows(d.items || []);
      setTotal(d.total || 0);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [page, limit, search]);

  useEffect(() => {
    fetchData();
  }, [page, limit]);

  const handleSearch = useCallback(() => {
    setPage(1);
    fetchData();
  }, [fetchData]);

  const handleAdd = useCallback(async (f: Omit<Service, 'id'>) => {
    await fetch('/api/admin/services', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(f) });
    await fetchData();
  }, [fetchData]);

  const handleEdit = useCallback(async (f: Omit<Service, 'id'>) => {
    if (!editItem) return;
    await fetch(`/api/admin/services/${editItem.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(f) });
    await fetchData();
  }, [editItem, fetchData]);

  const handleDelete = useCallback(async () => {
    if (!deleteItem) return;
    await fetch(`/api/admin/services/${deleteItem.id}`, { method: 'DELETE' });
    await fetchData();
  }, [deleteItem, fetchData]);

  const columns: DataTableColumn<Service>[] = useMemo(() => [
    { key: 'key', header: t('admin.services.key'), width: 160, render: r => <span className='text-xs' style={{ fontFamily: 'monospace', color: isDark ? '#60a5fa' : '#000000' }}>{r.key}</span> },
    { key: 'icon', header: t('admin.services.icon'), width: 80, align: 'center', render: r => <ServiceIcon iconName={r.icon} isDark={isDark} /> },
    { key: 'titleEn', header: t('admin.services.titleEn'), flexGrow: 1, render: r => <span className="text-xs font-semibold">{r.titleEn}</span> },
    { key: 'titleVn', header: t('admin.services.titleVn'), flexGrow: 1, render: r => <span className="text-xs">{r.titleVn}</span> },
    { key: 'descriptionEn', header: t('admin.common.actions'), flexGrow: 2, render: r => <span className="text-xs line-clamp-2">{r.descriptionEn}</span> },
    {
      key: 'actions', header: t('admin.common.actions'), width: 80, align: 'right', fixed: 'right',
      render: r => (
        <ActionMenu 
          isDark={isDark}
          items={[
            { 
              label: t('admin.common.edit', 'Chỉnh sửa'), 
              icon: <Edit2 size={14} />, 
              eventKey: 'edit', 
              onClick: () => { setEditItem(r); setFormOpen(true); } 
            },
            { 
              label: t('admin.common.delete', 'Xóa'), 
              icon: <Trash2 size={14} />, 
              eventKey: 'delete', 
              onClick: () => setDeleteItem(r),
              isDanger: true
            }
          ]}
        />
      ),
    },
  ], [isDark, t]);

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <DataManagementLayout
        searchTerm={search} onSearchTermChange={setSearch} onSearch={handleSearch}
        advancedOpen={false} onToggleAdvanced={() => {}} searchPlaceholder={t('admin.services.search')} controlSize="sm" isDark={isDark}
        searchBarExtras={<Button size="sm" appearance="primary" color="blue" onClick={() => { setEditItem(null); setFormOpen(true); }} className="!flex !items-center !gap-1.5 !px-3 !py-1 !rounded-sm !text-[10px] !font-bold"><Plus size={14} /> {t('admin.common.addNew')}</Button>}
      >
        <DataTable
          data={rows}
          columns={columns}
          rowKey="id"
          gridHeight="calc(100vh - 148px)"
          classNamePrefix="services-grid"
          isDark={isDark}
          loading={loading}
          emptyText={t('admin.services.empty')}
          // Pagination
          page={page}
          limit={limit}
          total={total}
          onChangePage={setPage}
          onChangeLimit={setLimit}
        />
      </DataManagementLayout>

      <ServiceModal open={formOpen} onClose={() => { setFormOpen(false); setEditItem(null); }} onSave={editItem ? handleEdit : handleAdd} item={editItem} isDark={isDark} />
      
      <AdminConfirmDeleteModal
        open={Boolean(deleteItem)}
        onClose={() => setDeleteItem(null)}
        onConfirm={handleDelete}
        itemLabel={deleteItem?.key ?? ''}
        isDark={isDark}
        title={t('admin.services.confirmDeleteTitle')}
        description={t('admin.services.confirmDeleteDesc')}
      />
    </div>
  );
}
