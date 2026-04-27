"use client";

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useAdminTheme } from '../layout';
import { Button, SelectPicker, Stack } from 'rsuite';
import { useTranslation } from 'react-i18next';
import DataManagementLayout from '@/components/admin/DataManagementLayout';
import DataTable, { DataTableColumn } from '@/components/admin/DataTable';
import AdminConfirmDeleteModal from '@/components/admin/AdminConfirmDeleteModal';
import { Edit2, Filter, Globe2, KeyRound, Loader2, Plus, Save, Trash2, X } from 'lucide-react';
import ActionMenu from '@/components/admin/ActionMenu';
import i18n from '@/i18n';
import { useAdminAuth } from '@/context/AdminAuthContext';

interface ContentItem {
  id: string;
  key: string;
  contentVn: string;
  contentEn: string;
  createdAt: string;
  updatedAt: string;
}

const EMPTY_FORM = { key: '', contentVn: '', contentEn: '' };

const CONTENT_CATEGORIES = [
  'admin', 'contact', 'footer', 'hero', 'nav', 'ourTeam', 
  'overview', 'portfolio', 'services', 'stats', 'team', 'technologies'
];

// ─── Form Modal ───────────────────────────────────────────────────────────────
function ContentFormModal({ open, onClose, onSave, item, isDark }: {
  open: boolean; onClose: () => void; onSave: (data: typeof EMPTY_FORM) => Promise<void>;
  item: ContentItem | null; isDark: boolean;
}) {
  const { t } = useTranslation();
  const [form, setForm] = React.useState(EMPTY_FORM);
  const [saving, setSaving] = React.useState(false);

  React.useEffect(() => {
    setForm(item ? { key: item.key, contentVn: item.contentVn, contentEn: item.contentEn } : EMPTY_FORM);
  }, [item, open]);

  if (!open) return null;
  const bg = isDark ? '#0f172a' : '#ffffff';
  const border = isDark ? '#1e293b' : '#e2e8f0';
  const input = isDark ? '#1e293b' : '#f8fafc';
  const text = isDark ? '#e2e8f0' : '#1e293b';
  const label = isDark ? '#94a3b8' : '#64748b';
  const inputStyle: React.CSSProperties = { background: input, border: `1px solid ${border}`, borderRadius: 4, padding: '6px 10px', fontSize: 12, color: text, outline: 'none', width: '100%' };
  const field = (lbl: string, el: React.ReactNode) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <label style={{ fontSize: 11, fontWeight: 600, color: label, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{lbl}</label>
      {el}
    </div>
  );

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.65)' }}>
      <div style={{ background: bg, border: `1px solid ${border}`, borderRadius: 8, width: 560, maxHeight: '90vh', overflowY: 'auto', boxShadow: '0 24px 48px rgba(0,0,0,0.4)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', borderBottom: `1px solid ${border}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <KeyRound size={15} color={isDark ? '#60a5fa' : '#3b82f6'} />
            <span style={{ fontSize: 13, fontWeight: 700, color: text }}>{item ? t('admin.content.editTitle') : t('admin.content.addTitle')}</span>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: label }}><X size={16} /></button>
        </div>
        <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 14 }}>
          {field(t('admin.content.key'),
            <input style={{ ...inputStyle, fontFamily: 'monospace', opacity: item ? 0.6 : 1 }} 
              value={form.key} readOnly={Boolean(item)} placeholder="e.g. hero.title"
              onChange={e => setForm(f => ({ ...f, key: e.target.value }))} />
          )}
          {field(t('admin.content.vn'),
            <textarea style={{ ...inputStyle, resize: 'vertical', minHeight: 80 }} value={form.contentVn}
              placeholder={t('admin.content.placeholderVn')} onChange={e => setForm(f => ({ ...f, contentVn: e.target.value }))} />
          )}
          {field(t('admin.content.en'),
            <textarea style={{ ...inputStyle, resize: 'vertical', minHeight: 80 }} value={form.contentEn}
              placeholder={t('admin.content.placeholderEn')} onChange={e => setForm(f => ({ ...f, contentEn: e.target.value }))} />
          )}
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, padding: '12px 18px', borderTop: `1px solid ${border}` }}>
          <button onClick={onClose} style={{ padding: '7px 16px', fontSize: 12, fontWeight: 600, borderRadius: 4, cursor: 'pointer', background: 'transparent', border: `1px solid ${border}`, color: label }}>{t('admin.common.cancel')}</button>
          <button disabled={!form.key.trim() || saving} onClick={async () => { setSaving(true); await onSave(form); setSaving(false); onClose(); }}
            style={{ padding: '7px 16px', fontSize: 12, fontWeight: 700, borderRadius: 4, cursor: form.key.trim() ? 'pointer' : 'not-allowed', background: form.key.trim() ? '#3b82f6' : '#3b82f680', border: 'none', color: '#fff', display: 'flex', alignItems: 'center', gap: 6 }}>
            {saving ? <Loader2 size={12} className="animate-spin" /> : <Save size={12} />} {item ? t('admin.common.save') : t('admin.common.add')}
          </button>
        </div>
      </div>
    </div>
  );
}


// ─── Main Page ────────────────────────────────────────────────────────────────
export default function StaticContentPage() {
  const { isDark } = useAdminTheme();
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [rowData, setRowData] = useState<ContentItem[]>([]);
  const [formOpen, setFormOpen] = useState(false);
  const [editItem, setEditItem] = useState<ContentItem | null>(null);
  const [selectedPrefix, setSelectedPrefix] = useState<string | null>(null);
  const [deleteItem, setDeleteItem] = useState<ContentItem | null>(null);
  const { canDo } = useAdminAuth();

  const canCreate = canDo('CONTENT', 'CREATE');
  const canUpdate = canDo('CONTENT', 'UPDATE');
  const canDelete = canDo('CONTENT', 'DELETE');

  // Pagination state
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState(0);

  // Fetch from DB
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        q: searchQuery,
        prefix: selectedPrefix || ''
      });
      const res = await fetch(`/api/admin/content?${params.toString()}`);
      const data = await res.json();
      setRowData(data.items || []);
      setTotal(data.total || 0);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [page, limit, searchQuery, selectedPrefix]);

  useEffect(() => {
    fetchData();
  }, [page, limit, selectedPrefix]);

  const handleSearch = useCallback(() => {
    setPage(1);
    fetchData();
  }, [fetchData]);

  const handleAdd = useCallback(async (form: typeof EMPTY_FORM) => {
    await fetch('/api/admin/content', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
    await fetchData();
  }, [fetchData]);

  const handleEdit = useCallback(async (form: typeof EMPTY_FORM) => {
    if (!editItem) return;
    await fetch(`/api/admin/content/${editItem.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ contentVn: form.contentVn, contentEn: form.contentEn }) });
    await fetchData();
  }, [editItem, fetchData]);

  const handleDelete = useCallback(async () => {
    if (!deleteItem) return;
    await fetch(`/api/admin/content/${deleteItem.id}`, { method: 'DELETE' });
    await fetchData();
  }, [deleteItem, fetchData]);

  const handleSelectPrefix = (prefix: string) => {
    setSelectedPrefix(prefix === selectedPrefix ? null : prefix);
    setPage(1);
  };

  const handleClearFilter = () => {
    setSelectedPrefix(null);
    setSearchQuery('');
    setPage(1);
  };

  // Luôn lấy item mới nhất từ rowData theo id để tránh stale reference
  const handleOpenEdit = useCallback((id: string) => {
    const fresh = rowData.find(r => r.id === id);
    if (fresh) {
      setEditItem(fresh);
      setFormOpen(true);
    }
  }, [rowData]);

  const columns: DataTableColumn<ContentItem>[] = useMemo(() => [
    {
      key: 'key', header: t('admin.content.key'), flexGrow: 1,
      render: (row) => (
        <div className="flex flex-col justify-center h-full">
          <span className={`text-xs font-mono font-semibold leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>{row.key}</span>
        </div>
      ),
    },
    { key: 'contentVn', header: t('admin.content.vn'), flexGrow: 1.5, render: (row) => <span className="text-xs leading-tight line-clamp-2">{row.contentVn}</span> },
    { key: 'contentEn', header: t('admin.content.en'), flexGrow: 1.5, render: (row) => <span className="text-xs leading-tight line-clamp-2">{row.contentEn}</span> },
    {
      key: 'updatedAt', header: t('admin.common.updatedAt'), width: 120,
      render: (row) => <span className="text-xs text-slate-400">{new Date(row.updatedAt).toLocaleDateString('vi-VN')}</span>,
    },
    {
      key: 'actions', header: t('admin.common.actions'), width: 80, align: 'right', fixed: 'right',
      render: (row) => (
        <ActionMenu 
          isDark={isDark}
          items={[
            ...(canUpdate ? [{ 
              label: t('admin.common.edit', 'Chỉnh sửa'), 
              icon: <Edit2 size={14} />, 
              eventKey: 'edit', 
              onClick: () => handleOpenEdit(row.id) 
            }] : []),
            ...(canDelete ? [{ 
              label: t('admin.common.delete', 'Xóa'), 
              icon: <Trash2 size={14} />, 
              eventKey: 'delete', 
              onClick: () => setDeleteItem(row),
              isDanger: true
            }] : [])
          ]}
        />
      ),
    },
  ], [isDark, handleOpenEdit, t]);

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <DataManagementLayout
        searchTerm={searchQuery} onSearchTermChange={setSearchQuery} onSearch={handleSearch}
        advancedOpen={false} onToggleAdvanced={() => {}}
        searchPlaceholder={t('admin.grid.searchPlaceholder')} controlSize="sm" isDark={isDark}
        filterControls={
          <SelectPicker
            data={CONTENT_CATEGORIES.map(c => ({ label: c.toUpperCase(), value: c }))}
            placeholder={t('admin.common.categories', 'Phân loại')}
            value={selectedPrefix}
            onChange={setSelectedPrefix}
            onClean={() => setSelectedPrefix(null)}
            style={{ width: 140 }}
            size="sm"
            cleanable
            searchable={false}
          />
        }
        searchBarExtras={
          canCreate && (
            <Button size="sm" appearance="primary" color="blue"
              onClick={() => { setEditItem(null); setFormOpen(true); }}
              className="!flex !items-center !gap-1.5 !px-3 !py-1 !rounded-sm !text-[10px] !font-bold">
              <Plus size={14} /> {t('admin.common.addNew')}
            </Button>
          )
        }
      >
        <DataTable
          data={rowData}
          columns={columns}
          rowKey="id"
          gridHeight="calc(100vh - 148px)"
          classNamePrefix="content-grid"
          isDark={isDark}
          loading={loading}
          emptyText={t('admin.content.empty')}
          // Pagination
          page={page}
          limit={limit}
          total={total}
          onChangePage={setPage}
          onChangeLimit={setLimit}
        />
      </DataManagementLayout>

      <ContentFormModal open={formOpen} onClose={() => { setFormOpen(false); setEditItem(null); }}
        onSave={editItem ? handleEdit : handleAdd} item={editItem} isDark={isDark} />
      
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
