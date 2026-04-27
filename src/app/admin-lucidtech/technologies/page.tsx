"use client";

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useAdminTheme } from '../layout';
import { Plus, Edit2, Trash2, Cpu, Loader2, Save, X } from 'lucide-react';
import { Button } from 'rsuite';
import { useTranslation } from 'react-i18next';
import DataManagementLayout from '@/components/admin/DataManagementLayout';
import DataTable, { DataTableColumn } from '@/components/admin/DataTable';
import AdminConfirmDeleteModal from '@/components/admin/AdminConfirmDeleteModal';

import ActionMenu from '@/components/admin/ActionMenu';
import { useAdminAuth } from '@/context/AdminAuthContext';
import i18n from '@/i18n';

interface Technology {
  id: number;
  name: string;
  category: string | null;
  categoryId: number | null;
  cat?: TechnologyCategory | null;
  createdAt: string;
}

interface TechnologyCategory {
  id: number;
  nameEn: string;
  nameVn: string;
  name: string;
  sortOrder: number;
}

const EMPTY: Omit<Technology, 'id' | 'createdAt'> = { name: '', category: '', categoryId: null };
const EMPTY_CAT: Omit<TechnologyCategory, 'id'> = { nameEn: '', nameVn: '', name: '', sortOrder: 0 };

function CategoryModal({ open, onClose, onSave, onDelete, categories, isDark, canCreate, canUpdate, canDelete }: {
  open: boolean; onClose: () => void; 
  onSave: (d: Omit<TechnologyCategory, 'id'>, id?: number) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
  categories: TechnologyCategory[]; isDark: boolean;
  canCreate?: boolean; canUpdate?: boolean; canDelete?: boolean;
}) {
  const { t } = useTranslation();
  const [form, setForm] = useState(EMPTY_CAT);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [saving, setSaving] = useState(false);

  const bg = isDark ? '#0f172a' : '#ffffff', border = isDark ? '#1e293b' : '#e2e8f0';
  const input = isDark ? '#1e293b' : '#f8fafc', text = isDark ? '#e2e8f0' : '#1e293b', label = isDark ? '#94a3b8' : '#64748b';
  const inp: React.CSSProperties = { background: input, border: `1px solid ${border}`, borderRadius: 4, padding: '6px 10px', fontSize: 12, color: text, outline: 'none', width: '100%' };

  if (!open) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.65)' }}>
      <div style={{ background: bg, border: `1px solid ${border}`, borderRadius: 8, width: 500, maxHeight: '80vh', display: 'flex', flexDirection: 'column', boxShadow: '0 24px 48px rgba(0,0,0,0.4)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', borderBottom: `1px solid ${border}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Cpu size={15} color="#3b82f6" />
            <span style={{ fontSize: 13, fontWeight: 700, color: text }}>{t('admin.tech.manageCategories')}</span>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: label }}><X size={16} /></button>
        </div>
        
        <div style={{ padding: '16px 18px', borderBottom: `1px solid ${border}`, background: isDark ? 'rgba(59,130,246,0.03)' : 'rgba(59,130,246,0.01)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'flex-end' }}>
            <div style={{ flex: 1, minWidth: 150 }}>
              <label style={{ fontSize: 10, fontWeight: 600, color: label, textTransform: 'uppercase', marginBottom: 4, display: 'block' }}>{t('admin.tech.categoryNameEn')}</label>
              <input style={inp} value={form.nameEn} placeholder="e.g. Frontend" onChange={e => setForm(f => ({ ...f, nameEn: e.target.value }))} />
            </div>
            <div style={{ flex: 1, minWidth: 150 }}>
              <label style={{ fontSize: 10, fontWeight: 600, color: label, textTransform: 'uppercase', marginBottom: 4, display: 'block' }}>{t('admin.tech.categoryNameVn')}</label>
              <input style={inp} value={form.nameVn} placeholder="e.g. Frontend" onChange={e => setForm(f => ({ ...f, nameVn: e.target.value }))} />
            </div>
            <div style={{ width: 80 }}>
              <label style={{ fontSize: 10, fontWeight: 600, color: label, textTransform: 'uppercase', marginBottom: 4, display: 'block' }}>{t('admin.tech.order')}</label>
              <input style={inp} type="number" value={form.sortOrder} onChange={e => setForm(f => ({ ...f, sortOrder: parseInt(e.target.value) || 0 }))} />
            </div>
            <div style={{ display: 'flex', gap: 4 }}>
              {canCreate && (
                <button 
                  disabled={!form.nameEn?.trim() || !form.nameVn?.trim() || saving}
                  onClick={async () => {
                    setSaving(true);
                    await onSave(form, editingId || undefined);
                    setForm(EMPTY_CAT);
                    setEditingId(null);
                    setSaving(false);
                  }}
                  style={{ height: 32, padding: '0 16px', fontSize: 12, fontWeight: 700, borderRadius: 4, cursor: 'pointer', background: '#3b82f6', border: 'none', color: '#fff' }}
                >
                  {editingId ? t('admin.common.save') : t('admin.common.add')}
                </button>
              )}
              {editingId && (
                <button onClick={() => { setEditingId(null); setForm(EMPTY_CAT); }} style={{ height: 32, padding: '0 12px', fontSize: 12, borderRadius: 4, cursor: 'pointer', background: 'transparent', border: `1px solid ${border}`, color: label }}>
                  <X size={14} />
                </button>
              )}
            </div>
          </div>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '12px 18px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${border}` }}>
                <th style={{ textAlign: 'left', padding: '8px 4px', fontSize: 11, color: label }}>{t('admin.tech.categoryName')}</th>
                <th style={{ textAlign: 'center', padding: '8px 4px', fontSize: 11, color: label, width: 60 }}>{t('admin.tech.order')}</th>
                <th style={{ textAlign: 'right', padding: '8px 4px', fontSize: 11, color: label, width: 80 }}>{t('admin.common.actions')}</th>
              </tr>
            </thead>
            <tbody>
              {categories.map(cat => (
                <tr key={cat.id} style={{ borderBottom: `1px solid ${isDark ? '#1e293b33' : '#f1f5f9'}` }}>
                  <td style={{ padding: '8px 4px', fontSize: 12, color: text }}>
                    <div>
                      <p style={{ fontWeight: 600 }}>{cat.nameEn}</p>
                      <p style={{ fontSize: 10, opacity: 0.6 }}>{cat.nameVn}</p>
                    </div>
                  </td>
                  <td style={{ padding: '8px 4px', fontSize: 12, color: text, textAlign: 'center' }}>{cat.sortOrder}</td>
                  <td style={{ padding: '8px 4px', textAlign: 'right' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 4 }}>
                      {canUpdate && <button onClick={() => { setEditingId(cat.id); setForm({ nameEn: cat.nameEn, nameVn: cat.nameVn, name: cat.name, sortOrder: cat.sortOrder }); }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#3b82f6' }}><Edit2 size={12} /></button>}
                      {canDelete && <button onClick={() => onDelete(cat.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ef4444' }}><Trash2 size={12} /></button>}
                    </div>
                  </td>
                </tr>
              ))}
              {categories.length === 0 && (
                <tr>
                  <td colSpan={3} style={{ padding: '24px', textAlign: 'center', fontSize: 12, color: label }}>{t('admin.tech.noCategories')}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        <div style={{ padding: '12px 18px', borderTop: `1px solid ${border}`, display: 'flex', justifyContent: 'flex-end' }}>
          <button onClick={onClose} style={{ padding: '7px 16px', fontSize: 12, borderRadius: 4, cursor: 'pointer', background: 'transparent', border: `1px solid ${border}`, color: label }}>{t('admin.common.close')}</button>
        </div>
      </div>
    </div>
  );
}

function TechModal({ open, onClose, onSave, item, categories, isDark }: {
  open: boolean; onClose: () => void; onSave: (d: Omit<Technology, 'id' | 'createdAt'>) => Promise<void>;
  item: Technology | null; categories: TechnologyCategory[]; isDark: boolean;
}) {
  const { t } = useTranslation();
  const [form, setForm] = useState(EMPTY);
  const [saving, setSaving] = useState(false);
  useEffect(() => { setForm(item ? { name: item.name, category: item.category ?? '', categoryId: item.categoryId } : EMPTY); }, [item, open]);
  if (!open) return null;

  const bg = isDark ? '#0f172a' : '#ffffff', border = isDark ? '#1e293b' : '#e2e8f0';
  const input = isDark ? '#1e293b' : '#f8fafc', text = isDark ? '#e2e8f0' : '#1e293b', label = isDark ? '#94a3b8' : '#64748b';
  const inp: React.CSSProperties = { background: input, border: `1px solid ${border}`, borderRadius: 4, padding: '6px 10px', fontSize: 12, color: text, outline: 'none', width: '100%' };
  const F = (lbl: string, el: React.ReactNode) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <label style={{ fontSize: 11, fontWeight: 600, color: label, textTransform: 'uppercase' as const, letterSpacing: '0.05em' }}>{lbl}</label>
      {el}
    </div>
  );

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.65)' }}>
      <div style={{ background: bg, border: `1px solid ${border}`, borderRadius: 8, width: 440, boxShadow: '0 24px 48px rgba(0,0,0,0.4)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', borderBottom: `1px solid ${border}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Cpu size={15} color="#3b82f6" />
            <span style={{ fontSize: 13, fontWeight: 700, color: text }}>{item ? t('admin.tech.editTitle') : t('admin.tech.addTitle')}</span>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: label }}><X size={16} /></button>
        </div>
        <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {F(t('admin.tech.name'), <input style={inp} value={form.name} placeholder="e.g. React, PostgreSQL" onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />)}
          {F(t('admin.tech.category'), 
            <select style={inp} value={form.categoryId ?? ''} onChange={e => {
              const id = parseInt(e.target.value) || null;
              const catMatch = categories.find(c => c.id === id);
              setForm(f => ({ ...f, categoryId: id, category: catMatch?.nameEn || '' }));
            }}>
              <option value="">-- {t('admin.tech.selectCategory')} --</option>
              {categories.map(c => (
                <option key={c.id} value={c.id}>
                  {i18n.language === 'vi' ? c.nameVn : c.nameEn}
                </option>
              ))}
            </select>
          )}
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, padding: '12px 18px', borderTop: `1px solid ${border}` }}>
          <button onClick={onClose} style={{ padding: '7px 16px', fontSize: 12, borderRadius: 4, cursor: 'pointer', background: 'transparent', border: `1px solid ${border}`, color: label }}>{t('admin.common.cancel')}</button>
          <button disabled={!form.name.trim() || !form.category || saving} onClick={async () => { setSaving(true); await onSave(form); setSaving(false); onClose(); }}
            style={{ padding: '7px 16px', fontSize: 12, fontWeight: 700, borderRadius: 4, cursor: 'pointer', background: '#3b82f6', border: 'none', color: '#fff', display: 'flex', alignItems: 'center', gap: 6 }}>
            {saving ? <Loader2 size={12} className="animate-spin" /> : <Save size={12} />} {item ? t('admin.common.save') : t('admin.common.add')}
          </button>
        </div>
      </div>
    </div>
  );
}


export default function TechnologiesPage() {
  const { isDark } = useAdminTheme();
  const { t } = useTranslation();
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState<Technology[]>([]);
  const [categories, setCategories] = useState<TechnologyCategory[]>([]);
  const [formOpen, setFormOpen] = useState(false);
  const [catModalOpen, setCatModalOpen] = useState(false);
  const [editItem, setEditItem] = useState<Technology | null>(null);
  const [deleteItem, setDeleteItem] = useState<Technology | null>(null);

  const { canDo } = useAdminAuth();

  const canCreate = canDo('TECHNOLOGIES', 'CREATE');
  const canUpdate = canDo('TECHNOLOGIES', 'UPDATE');
  const canDelete = canDo('TECHNOLOGIES', 'DELETE');

  // Sub-permissions for Categories
  const canCreateCat = canDo('TECH_CATEGORIES', 'CREATE');
  const canUpdateCat = canDo('TECH_CATEGORIES', 'UPDATE');
  const canDeleteCat = canDo('TECH_CATEGORIES', 'DELETE');

  // Pagination state
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState(0);

  const fetchCategories = useCallback(async () => {
    try {
      const res = await fetch(`/api/admin/tech-categories?_t=${Date.now()}`, { cache: 'no-store' });
      const data = await res.json();
      setCategories(Array.isArray(data) ? data : []);
    } catch (e) {
      console.error('Fetch categories error:', e);
    }
  }, []);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        q: search,
        _t: Date.now().toString()
      });
      const res = await fetch(`/api/admin/technologies?${params.toString()}`, { cache: 'no-store' });
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
    fetchCategories();
  }, [page, limit, fetchData, fetchCategories]);

  const handleSearch = useCallback(() => {
    setPage(1);
    fetchData();
  }, [fetchData]);

  const handleAdd = async (f: Omit<Technology, 'id' | 'createdAt'>) => {
    await fetch('/api/admin/technologies', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(f) });
    await fetchData();
  };
  const handleEdit = async (f: Omit<Technology, 'id' | 'createdAt'>) => {
    if (!editItem) return;
    const res = await fetch(`/api/admin/technologies/${editItem.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(f), cache: 'no-store' });
    const d = await res.json();
    if (res.ok) {
      setRows(prev => prev.map(item => item.id === editItem.id ? d : item));
    }
    await fetchData();
  };
  const handleDelete = async () => { if (!deleteItem) return; await fetch(`/api/admin/technologies/${deleteItem.id}`, { method: 'DELETE' }); await fetchData(); };

  const handleSaveCategory = async (f: Omit<TechnologyCategory, 'id'>, id?: number) => {
    const url = id ? `/api/admin/tech-categories/${id}` : '/api/admin/tech-categories';
    const method = id ? 'PUT' : 'POST';
    await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(f) });
    await fetchCategories();
    // Re-fetch techs as categories might have changed names (though ideally they'd be linked by ID)
    await fetchData();
  };

  const handleDeleteCategory = async (id: number) => {
    if (!confirm(t('admin.common.confirmDeleteDesc'))) return;
    await fetch(`/api/admin/tech-categories/${id}`, { method: 'DELETE' });
    await fetchCategories();
  };

  const columns: DataTableColumn<Technology>[] = useMemo(() => [
    { key: 'name', header: t('admin.tech.name'), flexGrow: 1, render: r => <span className="text-xs font-semibold">{r.name}</span> },
    {
      key: 'category', header: t('admin.tech.category'), width: 300,
      render: r => <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-500">{r.cat?.name || r.category || '—'}</span>,
    },
    { key: 'createdAt', header: t('admin.common.createdAt'), width: 150 , render: r => <span className="text-xs text-slate-400">{new Date(r.createdAt).toLocaleDateString('vi-VN')}</span> },
    {
      key: 'actions', header: t('admin.common.actions'), width: 110, align: 'right', fixed: 'right',
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
        advancedOpen={false} onToggleAdvanced={() => {}} searchPlaceholder={t('admin.tech.search')} controlSize="sm" isDark={isDark}
        searchBarExtras={
          <div style={{ display: 'flex', gap: 8 }}>
            {canUpdate && (
              <Button size="sm" appearance="ghost" onClick={() => setCatModalOpen(true)} className="!flex !items-center !gap-1.5 !px-3 !py-1 !rounded-sm !text-[10px] !font-bold">
                <Cpu size={14} /> {t('admin.tech.manageCategories')}
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
          data={rows}
          columns={columns}
          rowKey="id"
          gridHeight="calc(100vh - 148px)"
          classNamePrefix="tech-grid"
          isDark={isDark}
          loading={loading}
          emptyText={t('admin.tech.empty')}
          // Pagination
          page={page}
          limit={limit}
          total={total}
          onChangePage={setPage}
          onChangeLimit={setLimit}
        />
      </DataManagementLayout>

      <TechModal open={formOpen} onClose={() => { setFormOpen(false); setEditItem(null); }} onSave={editItem ? handleEdit : handleAdd} item={editItem} categories={categories} isDark={isDark} />
      
      <CategoryModal 
        open={catModalOpen} 
        onClose={() => setCatModalOpen(false)} 
        onSave={handleSaveCategory} 
        onDelete={handleDeleteCategory} 
        categories={categories} 
        isDark={isDark}
        canCreate={canCreateCat}
        canUpdate={canUpdateCat}
        canDelete={canDeleteCat}
      />

      <AdminConfirmDeleteModal
        open={Boolean(deleteItem)}
        onClose={() => setDeleteItem(null)}
        onConfirm={handleDelete}
        itemLabel={deleteItem?.name ?? ''}
        isDark={isDark}
        title={t('admin.common.confirmDeleteTitle')}
        description={t('admin.tech.confirmDeleteDesc')}
      />
    </div>
  );
}
