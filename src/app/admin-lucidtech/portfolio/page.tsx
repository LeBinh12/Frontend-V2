"use client";

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useAdminTheme } from '../layout';
import { Plus, Edit2, Trash2, Image as ImageIcon, Loader2, Save, X, Eye, ExternalLink } from 'lucide-react';
import ActionMenu from '@/components/admin/ActionMenu';
import { Button, toaster, Notification } from 'rsuite';
import { useTranslation } from 'react-i18next';
import DataManagementLayout from '@/components/admin/DataManagementLayout';
import DataTable, { DataTableColumn } from '@/components/admin/DataTable';
import AdminConfirmDeleteModal from '@/components/admin/AdminConfirmDeleteModal';
import ImageUploader, { ImageUploaderRef } from '@/components/admin/ImageUploader';

interface PortfolioItem {
  id: number;
  key: string | null;
  titleEn: string;
  titleVn: string;
  descriptionEn: string;
  descriptionVn: string;
  image: string;
  categoryKey: string;
  technologies: string[];
  showOnHome: boolean;
  sortOrder: number;
}

const EMPTY: Omit<PortfolioItem, 'id'> = { key: '', titleEn: '', titleVn: '', descriptionEn: '', descriptionVn: '', image: '', categoryKey: '', technologies: [], showOnHome: false, sortOrder: 0 };

const Toggle = ({ checked, onChange, label, isDark, loading }: { checked: boolean, onChange: (v: boolean) => void, label?: string, isDark: boolean, loading?: boolean }) => (
  <div className="flex items-center gap-2">
    <button
      disabled={loading}
      onClick={(e) => { e.stopPropagation(); onChange(!checked); }}
      className={`relative !inline-flex h-5 w-9 shrink-0 cursor-pointer !rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${loading ? 'opacity-50 cursor-not-allowed' : ''} ${checked ? 'bg-blue-600' : (isDark ? 'bg-slate-700' : 'bg-slate-300')}`}
    >
      <span
        className={`pointer-events-none !items-center inline-flex h-5 w-5 border transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${checked ? 'translate-x-4' : 'translate-x-0'}`}
      >
        {loading && <Loader2 size={10} className="animate-spin text-blue-600 m-auto" />}
      </span>
    </button>
  </div>
);


function PortfolioModal({ open, onClose, onSave, item, isDark }: {
  open: boolean; onClose: () => void; onSave: (d: Omit<PortfolioItem, 'id'>) => Promise<void>; item: PortfolioItem | null; isDark: boolean;
}) {
  const { t } = useTranslation();
  const [form, setForm] = useState(EMPTY);
  const [saving, setSaving] = useState(false);
  const [techStr, setTechStr] = useState('');
  const imgRef = React.useRef<ImageUploaderRef>(null);
  useEffect(() => {
    const f = item ? { 
      key: item.key ?? '', 
      titleEn: item.titleEn, 
      titleVn: item.titleVn, 
      descriptionEn: item.descriptionEn, 
      descriptionVn: item.descriptionVn, 
      image: item.image, 
      categoryKey: item.categoryKey, 
      technologies: item.technologies,
      showOnHome: Boolean(item.showOnHome),
      sortOrder: Number(item.sortOrder) || 0
    } : EMPTY;
    setForm(f); setTechStr(f.technologies.join(', '));
  }, [item, open]);
  if (!open) return null;

  const bg = isDark ? '#0f172a' : '#ffffff', border = isDark ? '#1e293b' : '#e2e8f0';
  const input = isDark ? '#1e293b' : '#f8fafc', text = isDark ? '#e2e8f0' : '#1e293b', label = isDark ? '#94a3b8' : '#64748b';
  const inp: React.CSSProperties = { background: input, border: `1px solid ${border}`, borderRadius: 4, padding: '6px 10px', fontSize: 12, color: text, outline: 'none', width: '100%' };
  const F = (lbl: string, el: React.ReactNode) => <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}><label style={{ fontSize: 11, fontWeight: 600, color: label, textTransform: 'uppercase' as const, letterSpacing: '0.05em' }}>{lbl}</label>{el}</div>;

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.65)' }}>
      <div style={{ background: bg, border: `1px solid ${border}`, borderRadius: 8, width: 620, maxHeight: '90vh', overflowY: 'auto', boxShadow: '0 24px 48px rgba(0,0,0,0.4)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', borderBottom: `1px solid ${border}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <ImageIcon size={15} color="#3b82f6" />
            <span style={{ fontSize: 13, fontWeight: 700, color: text }}>{item ? t('admin.portfolio.editTitle') : t('admin.portfolio.addTitle')}</span>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: label }}><X size={16} /></button>
        </div>
        <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {F(t('admin.portfolio.key'), <input style={inp} value={form.key ?? ''} placeholder="my-project" onChange={e => setForm(f => ({ ...f, key: e.target.value }))} />)}
            {F(t('admin.portfolio.category'), <input style={inp} value={form.categoryKey} placeholder="e.g. web, mobile" onChange={e => setForm(f => ({ ...f, categoryKey: e.target.value }))} />)}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {F(t('admin.portfolio.titleEn'), <input style={inp} value={form.titleEn} placeholder="English title" onChange={e => setForm(f => ({ ...f, titleEn: e.target.value }))} />)}
            {F(t('admin.portfolio.titleVn'), <input style={inp} value={form.titleVn} placeholder="Tiêu đề" onChange={e => setForm(f => ({ ...f, titleVn: e.target.value }))} />)}
          </div>
          {F(t('admin.portfolio.descEn'), <textarea style={{ ...inp, minHeight: 60, resize: 'vertical' }} value={form.descriptionEn} onChange={e => setForm(f => ({ ...f, descriptionEn: e.target.value }))} />)}
          {F(t('admin.portfolio.descVn'), <textarea style={{ ...inp, minHeight: 60, resize: 'vertical' }} value={form.descriptionVn} onChange={e => setForm(f => ({ ...f, descriptionVn: e.target.value }))} />)}
          <ImageUploader 
            ref={imgRef}
            label={t('admin.portfolio.image')} 
            value={form.image} 
            onChange={val => setForm(f => ({ ...f, image: val }))} 
            isDark={isDark} 
            subDir="portfolio"
          />
          {F(t('admin.portfolio.techs'), <input style={inp} value={techStr} placeholder="React, Next.js, PostgreSQL" onChange={e => { setTechStr(e.target.value); setForm(f => ({ ...f, technologies: e.target.value.split(',').map(s => s.trim()).filter(Boolean) })); }} />)}
          <div className='!rounded-lg' style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <label style={{ fontSize: 11, fontWeight: 600, color: label, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t('admin.portfolio.showOnHome')}</label>
              <div style={{ height: 32, display: 'flex', alignItems: 'center' }}>
                <Toggle checked={form.showOnHome} onChange={val => setForm(f => ({ ...f, showOnHome: val }))} isDark={isDark} />
              </div>
            </div>
            {F(t('admin.portfolio.sortOrder'), 
              <input type="number" style={{ ...inp, width: 80 }} value={form.sortOrder} onChange={e => setForm(f => ({ ...f, sortOrder: parseInt(e.target.value) || 0 }))} />
            )}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, padding: '12px 18px', borderTop: `1px solid ${border}` }}>
          <button onClick={onClose} style={{ padding: '7px 16px', fontSize: 12, fontWeight: 600, borderRadius: 4, cursor: 'pointer', background: 'transparent', border: `1px solid ${border}`, color: label }}>{t('admin.common.cancel')}</button>
          <button onClick={async () => {
              setSaving(true);
              // Auto-upload pending image (if user selected file but didn't click "Tải lên")
              if (imgRef.current?.hasPendingFile) {
                const uploadResult = await imgRef.current.uploadIfPending();
                if (uploadResult === null) {
                  // Upload failed or user cancelled overwrite — abort save
                  setSaving(false);
                  return;
                }
                // Update form with the uploaded path, then save
                await onSave({ ...form, image: typeof uploadResult === 'string' ? uploadResult : form.image });
              } else {
                await onSave(form);
              }
              setSaving(false);
              onClose();
            }}
            style={{ padding: '7px 16px', fontSize: 12, fontWeight: 700, borderRadius: 8, cursor: 'pointer', background: '#3b82f6', border: 'none', color: '#fff', display: 'flex', alignItems: 'center', gap: 6 }}>
            {saving ? <Loader2 size={12} className="animate-spin" /> : <Save size={12} />} {item ? t('admin.common.save') : t('admin.common.add')}
          </button>
        </div>
      </div>
    </div>
  );
}

function PortfolioDetailModal({ open, onClose, item, isDark }: { open: boolean, onClose: () => void, item: PortfolioItem | null, isDark: boolean }) {
  const { t } = useTranslation();
  if (!open || !item) return null;

  const bg = isDark ? '#0f172a' : '#ffffff', border = isDark ? '#1e293b' : '#e2e8f0';
  const text = isDark ? '#e2e8f0' : '#1e293b', label = isDark ? '#94a3b8' : '#64748b';
  const sectionBg = isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)';

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}>
      <div style={{ background: bg, border: `1px solid ${border}`, borderRadius: 16, width: 700, maxHeight: '90vh', overflowY: 'auto', boxShadow: '0 24px 64px rgba(0,0,0,0.5)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: `1px solid ${border}`, position: 'sticky', top: 0, background: bg, zIndex: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Eye size={18} className="text-blue-500" />
            <span style={{ fontSize: 14, fontWeight: 700, color: text }}>{t('admin.portfolio.detailTitle', 'Chi tiết dự án')}</span>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: label }}><X size={20} /></button>
        </div>
        
        <div style={{ padding: '24px' }}>
          {/* Image Preview */}
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: 12, overflow: 'hidden', marginBottom: 24, background: sectionBg, border: `1px solid ${border}` }}>
            {item.image ? (
              <img src={item.image} alt={item.titleEn} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: label }}>
                <ImageIcon size={48} opacity={0.3} />
                <span className="text-xs mt-2 uppercase tracking-widest opacity-50">No Image</span>
              </div>
            )}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, marginBottom: 24 }}>
            <div>
               <p style={{ fontSize: 10, fontWeight: 700, color: label, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>{t('admin.portfolio.key')}</p>
               <p style={{ fontSize: 13, color: text, fontWeight: 600 }}>{item.key || '—'}</p>
            </div>
            <div>
               <p style={{ fontSize: 10, fontWeight: 700, color: label, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>{t('admin.portfolio.category')}</p>
               <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-500 border border-blue-500/10">{item.categoryKey}</span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
            <div style={{ padding: 16, borderRadius: 12, background: sectionBg }}>
                <h4 style={{ fontSize: 12, fontWeight: 700, color: text, marginBottom: 12, borderLeft: '3px solid #3b82f6', paddingLeft: 8 }}>ENGLISH</h4>
                <p style={{ fontSize: 14, fontWeight: 700, color: text, marginBottom: 8 }}>{item.titleEn}</p>
                <div style={{ fontSize: 13, color: label, lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>{item.descriptionEn}</div>
            </div>
            <div style={{ padding: 16, borderRadius: 12, background: sectionBg }}>
                <h4 style={{ fontSize: 12, fontWeight: 700, color: text, marginBottom: 12, borderLeft: '3px solid #3b82f6', paddingLeft: 8 }}>VIETNAMESE</h4>
                <p style={{ fontSize: 14, fontWeight: 700, color: text, marginBottom: 8 }}>{item.titleVn}</p>
                <div style={{ fontSize: 13, color: label, lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>{item.descriptionVn}</div>
            </div>
          </div>

          <div style={{ marginBottom: 24 }}>
              <p style={{ fontSize: 10, fontWeight: 700, color: label, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>{t('admin.portfolio.techs')}</p>
              <div className="flex flex-wrap gap-1.5">
                  {item.technologies.map(tech => (
                      <span key={tech} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-500/10 text-slate-400 border border-slate-500/10">{tech}</span>
                  ))}
              </div>
          </div>

          <div style={{ display: 'flex', gap: 32, padding: '16px', borderRadius: 12, border: `1px solid ${border}`, background: sectionBg }}>
              <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${item.showOnHome ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]' : 'bg-slate-500'}`} />
                  <div>
                      <p style={{ fontSize: 9, fontWeight: 700, color: label, textTransform: 'uppercase' }}>Home Page</p>
                      <p style={{ fontSize: 11, fontWeight: 700, color: text }}>{item.showOnHome ? `ACTIVE (#${item.sortOrder || 0})` : 'INACTIVE'}</p>
                  </div>
              </div>
              <div className="flex items-center gap-2">
                 {item.key && (
                    <Button size="xs" appearance="subtle" href={`/portfolio/${item.key}`} target="_blank" className="!flex !items-center !gap-1.5 !text-[10px] !font-bold !text-blue-500">
                        <ExternalLink size={12} /> {t('admin.common.viewSite', 'Xem trên trang chủ')}
                    </Button>
                 )}
              </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '16px 20px', borderTop: `1px solid ${border}` }}>
          <button onClick={onClose} style={{ padding: '8px 24px', fontSize: 12, fontWeight: 700, borderRadius: 8, cursor: 'pointer', background: '#3b82f6', border: 'none', color: '#fff' }}>
            {t('admin.common.close', 'Đóng')}
          </button>
        </div>
      </div>
    </div>
  );
}


export default function PortfolioPage() {
  const { isDark } = useAdminTheme();
  const { t } = useTranslation();
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState<PortfolioItem[]>([]);
  const [formOpen, setFormOpen] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);
  const [editItem, setEditItem] = useState<PortfolioItem | null>(null);
  const [detailItem, setDetailItem] = useState<PortfolioItem | null>(null);
  const [deleteItem, setDeleteItem] = useState<PortfolioItem | null>(null);

  // Pagination state
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState(0);
  const [togglingHomeId, setTogglingHomeId] = useState<number | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        q: search
      });
      const res = await fetch(`/api/admin/portfolio?${params.toString()}`);
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

  const handleAdd = async (f: Omit<PortfolioItem, 'id'>) => { 
    const res = await fetch('/api/admin/portfolio', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(f) }); 
    const d = await res.json();
    if (res.status === 400 && d.error === 'LIMIT_REACHED') {
      toaster.push(<Notification type="error" header="Limit Reached" closable>{t('admin.portfolio.limitReached')}</Notification>, { placement: 'topEnd' });
      return;
    }
    await fetchData(); 
  };
  const handleEdit = async (f: Omit<PortfolioItem, 'id'>) => { 
    if (!editItem) return; 
    const res = await fetch(`/api/admin/portfolio/${editItem.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(f) }); 
    const d = await res.json();
    if (res.status === 400 && d.error === 'LIMIT_REACHED') {
      toaster.push(<Notification type="error" header="Limit Reached" closable>{t('admin.portfolio.limitReached')}</Notification>, { placement: 'topEnd' });
      return;
    }
    await fetchData(); 
  };
  const handleDelete = async () => { if (!deleteItem) return; await fetch(`/api/admin/portfolio/${deleteItem.id}`, { method: 'DELETE' }); await fetchData(); };

  const handleToggleHome = async (item: PortfolioItem) => {
    setTogglingHomeId(item.id);
    try {
      const newVal = !item.showOnHome;
      const res = await fetch(`/api/admin/portfolio/${item.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ showOnHome: newVal })
      });
      const d = await res.json();
      if (res.status === 400 && d.error === 'LIMIT_REACHED') {
        toaster.push(<Notification type="error" header="Limit Reached" closable>{t('admin.portfolio.limitReached')}</Notification>, { placement: 'topEnd' });
        return;
      }
      await fetchData();
    } finally {
      setTogglingHomeId(null);
    }
  };

  const columns: DataTableColumn<PortfolioItem>[] = useMemo(() => [
    { key: 'titleEn', header: t('admin.portfolio.titleEn'), flexGrow: 1, render: r => <div><p className="text-xs font-semibold">{r.titleEn}</p><p className="text-[10px] text-slate-400">{r.titleVn}</p></div> },
    { key: 'categoryKey', header: t('admin.portfolio.category'), width: 130, render: r => <span className="text-xs font-bold px-3 py-1 rounded-lg bg-blue-500/10 text-blue-500 border border-blue-500/10">{r.categoryKey}</span> },
    { key: 'technologies', header: t('admin.portfolio.techs'), flexGrow: 1, render: r => <div className="text-xs font-bold   flex flex-wrap gap-1">{r.technologies.slice(0, 4).map(t => <span key={t} className="text-[9px] px-1.5 py-0.5 rounded-md bg-slate-500/10 text-slate-400 border border-slate-500/5">{t}</span>)}</div> },
    { key: 'showOnHome', header: t('admin.portfolio.home'), width: 110, render: r => (
      <Toggle 
        checked={r.showOnHome} 
        onChange={() => handleToggleHome(r)} 
        label={r.showOnHome ? `#${r.sortOrder || 0}` : undefined} 
        isDark={isDark} 
        loading={togglingHomeId === r.id}
      />
    )},
    { key: 'sortOrder', header: t('admin.portfolio.order'), width: 100, align: 'center', render: r => <span className="text-xs font-mono">{r.sortOrder}</span> },
    { key: 'image', header: t('admin.portfolio.image'), width: 120, render: r => <span className="text-xs text-slate-400 truncate block max-w-[128px]">{r.image}</span> },
    {
      key: 'actions', header: t('admin.common.actions'), width: 80, align: 'right', fixed: 'right',
      render: r => (
        <ActionMenu 
          isDark={isDark}
          items={[
            { 
              label: t('admin.common.view'), 
              icon: <Eye size={14} />, 
              eventKey: 'view', 
              onClick: () => { setDetailItem(r); setDetailOpen(true); } 
            },
            { 
              label: t('admin.common.edit'), 
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
        advancedOpen={false} onToggleAdvanced={() => {}} searchPlaceholder={t('admin.portfolio.search')} controlSize="sm" isDark={isDark}
        searchBarExtras={<Button size="sm" appearance="primary" color="blue" onClick={() => { setEditItem(null); setFormOpen(true); }} className="!flex !items-center !gap-1.5 !px-3 !py-1 !rounded-lg !text-[10px] !font-bold"><Plus size={14} /> {t('admin.common.addNew')}</Button>}
      >
        <DataTable
          data={rows}
          columns={columns}
          rowKey="id"
          gridHeight="calc(100vh - 148px)"
          classNamePrefix="portfolio-grid"
          isDark={isDark}
          loading={loading}
          emptyText={t('admin.portfolio.empty')}
          // Pagination
          page={page}
          limit={limit}
          total={total}
          onChangePage={setPage}
          onChangeLimit={setLimit}
        />
      </DataManagementLayout>

      <PortfolioModal open={formOpen} onClose={() => { setFormOpen(false); setEditItem(null); }} onSave={editItem ? handleEdit : handleAdd} item={editItem} isDark={isDark} />
      
      <PortfolioDetailModal open={detailOpen} onClose={() => { setDetailOpen(false); setDetailItem(null); }} item={detailItem} isDark={isDark} />
      
      <AdminConfirmDeleteModal
        open={Boolean(deleteItem)}
        onClose={() => setDeleteItem(null)}
        onConfirm={handleDelete}
        itemLabel={deleteItem?.key ?? deleteItem?.titleEn ?? ''}
        isDark={isDark}
        title={t('admin.portfolio.confirmDeleteTitle')}
        description={t('admin.portfolio.confirmDeleteDesc')}
      />
    </div>
  );
}
