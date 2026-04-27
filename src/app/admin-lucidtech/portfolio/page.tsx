"use client";

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useAdminTheme } from '../layout';
import { Plus, Edit2, Trash2, Image as ImageIcon, Loader2, Save, X, Eye, ExternalLink, FolderTree } from 'lucide-react';
import ActionMenu from '@/components/admin/ActionMenu';
import { Button, toaster, Notification } from 'rsuite';
import { useTranslation } from 'react-i18next';
import DataManagementLayout from '@/components/admin/DataManagementLayout';
import DataTable, { DataTableColumn } from '@/components/admin/DataTable';
import AdminConfirmDeleteModal from '@/components/admin/AdminConfirmDeleteModal';
import ImageUploader, { ImageUploaderRef } from '@/components/admin/ImageUploader';
import RichTextEditor from '@/components/admin/RichTextEditor';
import { useAdminAuth } from '@/context/AdminAuthContext';

interface PortfolioItem {
  id: number;
  key: string | null;
  titleEn: string;
  titleVn: string;
  descriptionEn: string;
  descriptionVn: string;
  image: string;
  categoryId: number | null;
  categoryKey: string | null;
  category?: PortfolioCategory | null;
  technologies: string[];
  showOnHome: boolean;
  sortOrder: number;
  contentEn: string | null;
  contentVn: string | null;
  duration: string | null;
  updatedAt?: string;
  createdAt?: string;
}

interface PortfolioCategory {
  id: number;
  nameEn: string;
  nameVn: string;
  name: string;
  sortOrder: number;
}

const EMPTY: Omit<PortfolioItem, 'id'> = { key: '', titleEn: '', titleVn: '', descriptionEn: '', descriptionVn: '', image: '', categoryId: null, categoryKey: '', technologies: [], showOnHome: false, sortOrder: 0, contentEn: '', contentVn: '', duration: '' };

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
const EMPTY_CAT: Omit<PortfolioCategory, 'id'> = { nameEn: '', nameVn: '', name: '', sortOrder: 0 };

function CategoryModal({ open, onClose, onSave, onDelete, categories, isDark, canCreate, canUpdate, canDelete }: {
  open: boolean; onClose: () => void; 
  onSave: (d: Omit<PortfolioCategory, 'id'>, id?: number) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
  categories: PortfolioCategory[]; isDark: boolean;
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
            <FolderTree size={15} color="#3b82f6" />
            <span style={{ fontSize: 13, fontWeight: 700, color: text }}>{t('admin.portfolio.manageCategories')}</span>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: label }}><X size={16} /></button>
        </div>
        
        <div style={{ padding: '16px 18px', borderBottom: `1px solid ${border}`, background: isDark ? 'rgba(59,130,246,0.03)' : 'rgba(59,130,246,0.01)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'flex-end' }}>
            <div style={{ flex: 1, minWidth: 150 }}>
              <label style={{ fontSize: 10, fontWeight: 600, color: label, textTransform: 'uppercase', marginBottom: 4, display: 'block' }}>{t('admin.portfolio.categoryNameEn')}</label>
              <input style={inp} value={form.nameEn} placeholder="e.g. Web Development" onChange={e => setForm(f => ({ ...f, nameEn: e.target.value }))} />
            </div>
            <div style={{ flex: 1, minWidth: 150 }}>
              <label style={{ fontSize: 10, fontWeight: 600, color: label, textTransform: 'uppercase', marginBottom: 4, display: 'block' }}>{t('admin.portfolio.categoryNameVn')}</label>
              <input style={inp} value={form.nameVn} placeholder="e.g. Phát triển Web" onChange={e => setForm(f => ({ ...f, nameVn: e.target.value }))} />
            </div>
            <div style={{ width: 80 }}>
              <label style={{ fontSize: 10, fontWeight: 600, color: label, textTransform: 'uppercase', marginBottom: 4, display: 'block' }}>{t('admin.portfolio.order')}</label>
              <input style={inp} type="number" value={form.sortOrder} onChange={e => setForm(f => ({ ...f, sortOrder: parseInt(e.target.value) || 0 }))} />
            </div>
            <div style={{ display: 'flex', gap: 4 }}>
              {canCreate && (
                <button 
                  disabled={!form.nameEn.trim() || !form.nameVn.trim() || saving}
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
                <th style={{ textAlign: 'left', padding: '8px 4px', fontSize: 11, color: label }}>{t('admin.portfolio.categoryName')}</th>
                <th style={{ textAlign: 'center', padding: '8px 4px', fontSize: 11, color: label, width: 60 }}>{t('admin.portfolio.order')}</th>
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
                  <td colSpan={3} style={{ padding: '24px', textAlign: 'center', fontSize: 12, color: label }}>{t('admin.portfolio.noCategories')}</td>
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


function PortfolioModal({ open, onClose, onSave, item, categories, isDark }: {
  open: boolean; onClose: () => void; onSave: (d: Omit<PortfolioItem, 'id'>) => Promise<void>; item: PortfolioItem | null; categories: PortfolioCategory[]; isDark: boolean;
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
      categoryId: item.categoryId,
      categoryKey: item.categoryKey ?? '', 
      technologies: item.technologies,
      showOnHome: Boolean(item.showOnHome),
      sortOrder: Number(item.sortOrder) || 0,
      contentEn: item.contentEn || '',
      contentVn: item.contentVn || '',
      duration: item.duration || ''
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
            {F(t('admin.portfolio.category'), 
              <select style={inp} value={form.categoryId ?? ''} onChange={e => {
                const id = parseInt(e.target.value) || null;
                const cat = categories.find(c => c.id === id);
                setForm(f => ({ ...f, categoryId: id, categoryKey: cat?.name || '' }));
              }}>
                <option value="">-- {t('admin.portfolio.selectCategory')} --</option>
                {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            )}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {F(t('admin.portfolio.titleEn'), <input style={inp} value={form.titleEn} placeholder="English title" onChange={e => setForm(f => ({ ...f, titleEn: e.target.value }))} />)}
            {F(t('admin.portfolio.titleVn'), <input style={inp} value={form.titleVn} placeholder="Tiêu đề" onChange={e => setForm(f => ({ ...f, titleVn: e.target.value }))} />)}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {F(t('admin.portfolio.duration'), (
              <div style={{ display: 'flex', gap: 4 }}>
                <input 
                  style={{ ...inp, flex: 1 }} 
                  value={form.duration?.split(' ')[0] || ''} 
                  placeholder="e.g. 3" 
                  onChange={e => {
                    const val = e.target.value;
                    const unit = form.duration?.split(' ')[1] || '';
                    setForm(f => ({ ...f, duration: unit ? `${val} ${unit}` : val }));
                  }} 
                />
                <select 
                  style={{ ...inp, width: 110 }} 
                  value={form.duration?.split(' ')[1] || ''} 
                  onChange={e => {
                    const unit = e.target.value;
                    const val = form.duration?.split(' ')[0] || '';
                    setForm(f => ({ ...f, duration: val ? `${val} ${unit}` : unit }));
                  }}
                >
                  <option value="">-- {t('admin.portfolio.units.title')} --</option>
                  <option value="day">{t('portfolio.units.day')}</option>
                  <option value="month">{t('portfolio.units.month')}</option>
                  <option value="year">{t('portfolio.units.year')}</option>
                </select>
              </div>
            ))}
            <div />
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
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
             <RichTextEditor 
                key={`content-en-${item?.id || 'new'}`}
                label={t('admin.portfolio.detailTitleEn')} 
                value={form.contentEn || ''} 
                onChange={val => setForm(f => ({ ...f, contentEn: val }))} 
                isDark={isDark} 
                placeholder={t('admin.content.placeholderEn')}
             />
             <RichTextEditor 
                key={`content-vn-${item?.id || 'new'}`}
                label={t('admin.portfolio.detailTitleVn')} 
                value={form.contentVn || ''} 
                onChange={val => setForm(f => ({ ...f, contentVn: val }))} 
                isDark={isDark} 
                placeholder={t('admin.content.placeholderVn')}
             />
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
  const { t, i18n } = useTranslation();
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
            <span style={{ fontSize: 14, fontWeight: 700, color: text }}>{t('admin.portfolio.detailTitle')}</span>
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
               <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-500 border border-blue-500/10">{item.category?.name || item.categoryKey || '—'}</span>
            </div>
            <div>
               <p style={{ fontSize: 10, fontWeight: 700, color: label, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>{t('admin.portfolio.duration')}</p>
                 <p style={{ fontSize: 13, color: text, fontWeight: 600 }}>
                   {(() => {
                     if (!item.duration) return '—';
                     const parts = item.duration.split(' ');
                     if (parts.length === 2) {
                       const u = parts[1].toLowerCase();
                       if (['day', 'ngày', 'days'].includes(u)) return `${parts[0]} ${t('portfolio.units.day')}`;
                       if (['month', 'tháng', 'months'].includes(u)) return `${parts[0]} ${t('portfolio.units.month')}`;
                       if (['year', 'năm', 'years'].includes(u)) return `${parts[0]} ${t('portfolio.units.year')}`;
                     }
                     return item.duration;
                   })()}
                 </p>
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

          {(item.contentEn || item.contentVn) && (
            <div style={{ marginBottom: 32 }}>
               <p style={{ fontSize: 10, fontWeight: 700, color: label, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 16 }}>{t('admin.portfolio.caseStudyPreview')}</p>
                <div style={{ padding: 24, borderRadius: 16, border: `1px solid ${border}`, background: sectionBg, maxWidth: '100%', overflow: 'hidden' }}>
                  <div className="flex gap-4 mb-6 border-b border-white/5 pb-2">
                     <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">{t('admin.portfolio.previewContent')}</span>
                  </div>
                  <div 
                    className={`prose prose-sm max-w-none ${isDark ? 'prose-invert' : ''}`}
                    dangerouslySetInnerHTML={{ __html: (i18n.language === 'en' ? item.contentEn : item.contentVn) || item.contentVn || item.contentEn || '' }}
                    style={{ fontSize: 13, lineHeight: 1.7, overflowX: 'auto', overflowWrap: 'break-word', wordBreak: 'break-word' }}
                  />
               </div>
            </div>
          )}

          <div style={{ display: 'flex', gap: 32, padding: '16px', borderRadius: 12, border: `1px solid ${border}`, background: sectionBg }}>
              <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${item.showOnHome ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]' : 'bg-slate-500'}`} />
                  <div>
                      <p style={{ fontSize: 9, fontWeight: 700, color: label, textTransform: 'uppercase' }}>{t('admin.portfolio.showOnHome')}</p>
                      <p style={{ fontSize: 11, fontWeight: 700, color: text }}>{item.showOnHome ? `${t('admin.common.active')} (#${item.sortOrder || 0})` : t('admin.common.inactive')}</p>
                  </div>
              </div>
              <div className="flex items-center gap-2">
                 {item.key && (
                    <Button size="xs" appearance="subtle" href={`/portfolio/${item.key}`} target="_blank" className="!flex !items-center !gap-1.5 !text-[10px] !font-bold !text-blue-500">
                        <ExternalLink size={12} /> {t('admin.common.viewSite')}
                    </Button>
                 )}
              </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '16px 20px', borderTop: `1px solid ${border}` }}>
          <button onClick={onClose} style={{ padding: '8px 24px', fontSize: 12, fontWeight: 700, borderRadius: 8, cursor: 'pointer', background: '#3b82f6', border: 'none', color: '#fff' }}>
            {t('admin.common.close')}
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
  const [fetchingId, setFetchingId] = useState<number | null>(null);
  const [fetchingDetailId, setFetchingDetailId] = useState<number | null>(null);
  const [categories, setCategories] = useState<PortfolioCategory[]>([]);
  const [catModalOpen, setCatModalOpen] = useState(false);
  const { canDo } = useAdminAuth();

  const canCreate = canDo('PORTFOLIO', 'CREATE');
  const canUpdate = canDo('PORTFOLIO', 'UPDATE');
  const canDelete = canDo('PORTFOLIO', 'DELETE');

  // Sub-permissions for Categories
  const canCreateCat = canDo('PORTFOLIO_CATEGORIES', 'CREATE');
  const canUpdateCat = canDo('PORTFOLIO_CATEGORIES', 'UPDATE');
  const canDeleteCat = canDo('PORTFOLIO_CATEGORIES', 'DELETE');

  const fetchCategories = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/portfolio-categories');
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
      const res = await fetch(`/api/admin/portfolio?${params.toString()}`, { cache: 'no-store' });
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

  const startEdit = async (item: PortfolioItem) => {
    setFetchingId(item.id);
    try {
      const res = await fetch(`/api/admin/portfolio/${item.id}?_t=${Date.now()}`, { cache: 'no-store' });
      const freshItem = await res.json();
      if (freshItem && !freshItem.error) {
        setEditItem(freshItem);
        setFormOpen(true);
      } else {
        toaster.push(<Notification type="error" header="Error" closable>Could not fetch latest item data</Notification>, { placement: 'topEnd' });
      }
    } catch (e) {
      console.error("Failed to fetch fresh item", e);
    } finally {
      setFetchingId(null);
    }
  };

  const startView = async (item: PortfolioItem) => {
    setFetchingDetailId(item.id);
    try {
      const res = await fetch(`/api/admin/portfolio/${item.id}?_t=${Date.now()}`, { cache: 'no-store' });
      const freshItem = await res.json();
      if (freshItem && !freshItem.error) {
        setDetailItem(freshItem);
        setDetailOpen(true);
      } else {
        toaster.push(<Notification type="error" header="Error" closable>Could not fetch latest item data</Notification>, { placement: 'topEnd' });
      }
    } catch (e) {
      console.error("Failed to fetch fresh item for view", e);
    } finally {
      setFetchingDetailId(null);
    }
  };

  const handleAdd = async (f: Omit<PortfolioItem, 'id'>) => { 
    const res = await fetch('/api/admin/portfolio', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(f), cache: 'no-store' }); 
    const d = await res.json();
    if (res.status === 400 && d.error === 'LIMIT_REACHED') {
      toaster.push(<Notification type="error" header="Limit Reached" closable>{t('admin.portfolio.limitReached')}</Notification>, { placement: 'topEnd' });
      return;
    }
    await fetchData(); 
  };
  const handleEdit = async (f: Omit<PortfolioItem, 'id'>) => { 
    if (!editItem) return; 
    const res = await fetch(`/api/admin/portfolio/${editItem.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(f), cache: 'no-store' }); 
    const d = await res.json();
    if (res.status === 400 && d.error === 'LIMIT_REACHED') {
      toaster.push(<Notification type="error" header="Limit Reached" closable>{t('admin.portfolio.limitReached')}</Notification>, { placement: 'topEnd' });
      return;
    }
    if (res.ok) {
      setRows(prev => prev.map(item => item.id === editItem.id ? d : item));
    }
    await fetchData(); 
  };
  const handleDelete = async () => { if (!deleteItem) return; await fetch(`/api/admin/portfolio/${deleteItem.id}`, { method: 'DELETE' }); await fetchData(); };

  const handleSaveCategory = async (f: Omit<PortfolioCategory, 'id'>, id?: number) => {
    const url = id ? `/api/admin/portfolio-categories/${id}` : '/api/admin/portfolio-categories';
    const method = id ? 'PUT' : 'POST';
    await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(f) });
    await fetchCategories();
    // Re-fetch portfolio items as categories might have changed names
    await fetchData();
  };

  const handleDeleteCategory = async (id: number) => {
    if (!confirm(t('admin.common.confirmDeleteDesc'))) return;
    await fetch(`/api/admin/portfolio-categories/${id}`, { method: 'DELETE' });
    await fetchCategories();
  };

  const handleToggleHome = async (item: PortfolioItem) => {
    setTogglingHomeId(item.id);
    try {
      const newVal = !item.showOnHome;
      const res = await fetch(`/api/admin/portfolio/${item.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ showOnHome: newVal }),
        cache: 'no-store'
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
    { key: 'category', header: t('admin.portfolio.category'), width: 130, render: r => <span className="text-xs font-bold px-3 py-1 rounded-lg bg-blue-500/10 text-blue-500 border border-blue-500/10">{r.category?.name || r.categoryKey || '—'}</span> },
    { key: 'technologies', header: t('admin.portfolio.techs'), flexGrow: 1, render: r => <div className="text-xs font-bold   flex flex-wrap gap-1">{r.technologies.slice(0, 4).map(t => <span key={t} className="text-[9px] px-1.5 py-0.5 rounded-md bg-slate-500/10 text-slate-400 border border-slate-500/5">{t}</span>)}</div> },
    { key: 'showOnHome', header: t('admin.portfolio.home'), width: 110, render: r => (
      <Toggle 
        checked={r.showOnHome} 
        onChange={() => canUpdate && handleToggleHome(r)} 
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
              icon: fetchingDetailId === r.id ? <Loader2 size={14} className="animate-spin" /> : <Eye size={14} />, 
              eventKey: 'view', 
              disabled: fetchingDetailId === r.id,
              onClick: () => startView(r) 
            },
            ...(canUpdate ? [{ 
              label: t('admin.common.edit'), 
              icon: fetchingId === r.id ? <Loader2 size={14} className="animate-spin" /> : <Edit2 size={14} />, 
              eventKey: 'edit', 
              disabled: fetchingId === r.id,
              onClick: () => startEdit(r) 
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
  ], [isDark, t, togglingHomeId, fetchingId, fetchingDetailId, rows]);

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <DataManagementLayout
        searchTerm={search} onSearchTermChange={setSearch} onSearch={handleSearch}
        advancedOpen={false} onToggleAdvanced={() => {}} searchPlaceholder={t('admin.portfolio.search')} controlSize="sm" isDark={isDark}
        searchBarExtras={
          <div style={{ display: 'flex', gap: 8 }}>
            {canUpdate && (
              <Button size="sm" appearance="ghost" onClick={() => setCatModalOpen(true)} className="!flex !items-center !gap-1.5 !px-3 !py-1 !rounded-sm !text-[10px] !font-bold">
                <FolderTree size={14} /> {t('admin.portfolio.manageCategories')}
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

      <PortfolioModal open={formOpen} onClose={() => { setFormOpen(false); setEditItem(null); }} onSave={editItem ? handleEdit : handleAdd} item={editItem} categories={categories} isDark={isDark} />
      
      <PortfolioDetailModal open={detailOpen} onClose={() => { setDetailOpen(false); setDetailItem(null); }} item={detailItem} isDark={isDark} />

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
        itemLabel={deleteItem?.key ?? deleteItem?.titleEn ?? ''}
        isDark={isDark}
        title={t('admin.portfolio.confirmDeleteTitle')}
        description={t('admin.portfolio.confirmDeleteDesc')}
      />
    </div>
  );
}
