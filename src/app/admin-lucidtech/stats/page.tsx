"use client";

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useAdminTheme } from '../layout';
import { Plus, Edit2, Trash2, BarChart2, Loader2, Save, X } from 'lucide-react';
import ActionMenu from '@/components/admin/ActionMenu';
import { useAdminAuth } from '@/context/AdminAuthContext';
import { Button } from 'rsuite';
import { useTranslation } from 'react-i18next';
import DataManagementLayout from '@/components/admin/DataManagementLayout';
import DataTable, { DataTableColumn } from '@/components/admin/DataTable';
import AdminConfirmDeleteModal from '@/components/admin/AdminConfirmDeleteModal';

interface Stat {
  id: number;
  key: string;
  labelEn: string;
  labelVn: string;
  value: string;
  detailEn?: string | null;
  detailVn?: string | null;
}

const EMPTY: Omit<Stat, 'id'> = { key: '', labelEn: '', labelVn: '', value: '', detailEn: '', detailVn: '' };

function StatModal({ open, onClose, onSave, item, isDark }: {
  open: boolean; onClose: () => void; onSave: (d: Omit<Stat, 'id'>) => Promise<void>; item: Stat | null; isDark: boolean;
}) {
  const { t } = useTranslation();
  const [form, setForm] = useState(EMPTY);
  const [saving, setSaving] = useState(false);
  useEffect(() => {
    setForm(item ? { key: item.key, labelEn: item.labelEn, labelVn: item.labelVn, value: item.value, detailEn: item.detailEn ?? '', detailVn: item.detailVn ?? '' } : EMPTY);
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
      <div style={{ background: bg, border: `1px solid ${border}`, borderRadius: 8, width: 520, maxHeight: '90vh', overflowY: 'auto', boxShadow: '0 24px 48px rgba(0,0,0,0.4)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', borderBottom: `1px solid ${border}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <BarChart2 size={15} color="#3b82f6" />
            <span style={{ fontSize: 13, fontWeight: 700, color: text }}>{item ? t('admin.stats.editTitle') : t('admin.stats.addTitle')}</span>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: label }}><X size={16} /></button>
        </div>
        <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 12 }}>
            {F(t('admin.services.key'), <input style={{ ...inp, fontFamily: 'monospace', opacity: item ? 0.6 : 1 }} value={form.key} readOnly={!!item} placeholder="e.g. delivered_projects" onChange={e => setForm(f => ({ ...f, key: e.target.value }))} />)}
            {F(t('admin.stats.value'), <input style={inp} value={form.value} placeholder="e.g. 120+" onChange={e => setForm(f => ({ ...f, value: e.target.value }))} />)}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {F(t('admin.stats.labelEn'), <input style={inp} value={form.labelEn} placeholder="Delivered projects" onChange={e => setForm(f => ({ ...f, labelEn: e.target.value }))} />)}
            {F(t('admin.stats.labelVn'), <input style={inp} value={form.labelVn} placeholder="Dự án đã bàn giao" onChange={e => setForm(f => ({ ...f, labelVn: e.target.value }))} />)}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {F(t('admin.stats.suffix'), <input style={inp} value={form.detailEn ?? ''} placeholder="Optional detail..." onChange={e => setForm(f => ({ ...f, detailEn: e.target.value }))} />)}
            {F(t('admin.stats.suffix') + ' (VN)', <input style={inp} value={form.detailVn ?? ''} placeholder="Chi tiết..." onChange={e => setForm(f => ({ ...f, detailVn: e.target.value }))} />)}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, padding: '12px 18px', borderTop: `1px solid ${border}` }}>
          <button onClick={onClose} style={{ padding: '7px 16px', fontSize: 12, borderRadius: 4, cursor: 'pointer', background: 'transparent', border: `1px solid ${border}`, color: label }}>{t('admin.common.cancel')}</button>
          <button disabled={!form.key.trim() || saving} onClick={async () => { setSaving(true); await onSave(form); setSaving(false); onClose(); }}
            style={{ padding: '7px 16px', fontSize: 12, fontWeight: 700, borderRadius: 4, cursor: 'pointer', background: '#3b82f6', border: 'none', color: '#fff', display: 'flex', alignItems: 'center', gap: 6 }}>
            {saving ? <Loader2 size={12} className="animate-spin" /> : <Save size={12} />} {item ? t('admin.common.save') : t('admin.common.add')}
          </button>
        </div>
      </div>
    </div>
  );
}


export default function StatsPage() {
  const { isDark } = useAdminTheme();
  const { t } = useTranslation();
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState<Stat[]>([]);
  const [formOpen, setFormOpen] = useState(false);
  const [editItem, setEditItem] = useState<Stat | null>(null);
  const [deleteItem, setDeleteItem] = useState<Stat | null>(null);

  const { canDo } = useAdminAuth();

  const canCreate = canDo('STATS', 'CREATE');
  const canUpdate = canDo('STATS', 'UPDATE');
  const canDelete = canDo('STATS', 'DELETE');

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
        q: search,
        _t: Date.now().toString()
      });
      const res = await fetch(`/api/admin/stats?${params.toString()}`, { cache: 'no-store' });
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

  const handleAdd = async (f: Omit<Stat, 'id'>) => { await fetch('/api/admin/stats', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(f) }); await fetchData(); };
  const handleEdit = async (f: Omit<Stat, 'id'>) => {
    if (!editItem) return;
    const res = await fetch(`/api/admin/stats/${editItem.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(f), cache: 'no-store' });
    const d = await res.json();
    if (res.ok) {
      setRows(prev => prev.map(item => item.id === editItem.id ? d : item));
    }
    await fetchData();
  };
  const handleDelete = async () => { if (!deleteItem) return; await fetch(`/api/admin/stats/${deleteItem.id}`, { method: 'DELETE' }); await fetchData(); };

  const columns: DataTableColumn<Stat>[] = useMemo(() => [
    { key: 'key', header: t('admin.services.key'), width: 200, render: r => <span className='text-xs' style={{ fontFamily: 'monospace', color: isDark ? '#60a5fa' : '#000000' }}>{r.key}</span> },
    {
      key: 'value', header: t('admin.stats.value'), width: 100, align: 'center',
      render: r => <span style={{ fontSize: 15, fontWeight: 800, color: isDark ? '#e2e8f0' : '#0f172a' }}>{r.value}</span>,
    },
    { key: 'labelEn', header: t('admin.stats.labelEn'), flexGrow: 1, render: r => <span className="text-xs">{r.labelEn}</span> },
    { key: 'labelVn', header: t('admin.stats.labelVn'), flexGrow: 1, render: r => <span className="text-xs">{r.labelVn}</span> },
    { key: 'detailEn', header: t('admin.stats.suffix'), flexGrow: 1.5, render: r => <span className="text-xs text-slate-400 line-clamp-1">{r.detailEn || '—'}</span> },
    {
      key: 'actions', header: t('admin.common.actions'), width: 80, align: 'right', fixed: 'right',
      render: r => (
        <ActionMenu 
          isDark={isDark}
          items={[
            ...(canUpdate ? [{ 
              label: t('admin.common.edit', 'Chỉnh sửa'), 
              icon: <Edit2 size={14} />, 
              eventKey: 'edit', 
              onClick: () => { setEditItem(r); setFormOpen(true); } 
            }] : []),
            ...(canDelete ? [{ 
              label: t('admin.common.delete', 'Xóa'), 
              icon: <Trash2 size={14} />, 
              eventKey: 'delete', 
              onClick: () => setDeleteItem(r),
              isDanger: true
            }] : [])
          ]}
        />
      ),
    },
  ], [isDark, t, rows, canUpdate, canDelete]);

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <DataManagementLayout
        searchTerm={search} onSearchTermChange={setSearch} onSearch={handleSearch}
        advancedOpen={false} onToggleAdvanced={() => {}} searchPlaceholder={t('admin.stats.search')} controlSize="sm" isDark={isDark}
        searchBarExtras={
          canCreate && (
            <Button size="sm" appearance="primary" color="blue" onClick={() => { setEditItem(null); setFormOpen(true); }} className="!flex !items-center !gap-1.5 !px-3 !py-1 !rounded-sm !text-[10px] !font-bold">
              <Plus size={14} /> {t('admin.common.addNew')}
            </Button>
          )
        }
      >
        <DataTable
          data={rows}
          columns={columns}
          rowKey="id"
          gridHeight="calc(100vh - 148px)"
          classNamePrefix="stats-grid"
          isDark={isDark}
          loading={loading}
          emptyText={t('admin.stats.empty')}
          // Pagination
          page={page}
          limit={limit}
          total={total}
          onChangePage={setPage}
          onChangeLimit={setLimit}
        />
      </DataManagementLayout>

      <StatModal open={formOpen} onClose={() => { setFormOpen(false); setEditItem(null); }} onSave={editItem ? handleEdit : handleAdd} item={editItem} isDark={isDark} />
      
      <AdminConfirmDeleteModal
        open={Boolean(deleteItem)}
        onClose={() => setDeleteItem(null)}
        onConfirm={handleDelete}
        itemLabel={deleteItem?.key ?? ''}
        isDark={isDark}
        title={t('admin.common.confirmDeleteTitle')}
        description={t('admin.common.confirmDeleteDesc')}
      />
    </div>
  );
}
