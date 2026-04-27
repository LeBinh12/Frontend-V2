"use client";

import React, { useState, useCallback, useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import { useAdminTheme } from '../layout';
import { Save, Loader2, Building2, CheckCircle2, X, ImageIcon } from 'lucide-react';
import DataManagementLayout from '@/components/admin/DataManagementLayout';
import { useTranslation } from 'react-i18next';
import { useAdminAuth } from '@/context/AdminAuthContext';

interface CompanyInfo {
  id: number;
  name: string;
  tagline?: string | null;
  email?: string | null;
  phone?: string | null;
  addressEn?: string | null;
  addressVn?: string | null;
  officeImage?: string | null;
  teamImage?: string | null;
}

/** Ref API for InteractiveImageCard */
interface ImageCardRef {
  hasPendingFile: boolean;
  /** Upload pending file and return new path, or null on failure, or 'NO_PENDING' if nothing to upload */
  uploadIfPending(): Promise<string | 'NO_PENDING' | null>;
}

const EMPTY: Omit<CompanyInfo, 'id'> = { name: '', tagline: '', email: '', phone: '', addressEn: '', addressVn: '', officeImage: '', teamImage: '' };

export default function CompanyPage() {
  const { isDark } = useAdminTheme();
  const { t } = useTranslation();
  const [form, setForm] = useState<Omit<CompanyInfo, 'id'>>(EMPTY);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const { canDo } = useAdminAuth();

  const canUpdate = canDo('COMPANY', 'UPDATE');

  // Refs to each image card so we can trigger uploads on Save
  const officeCardRef = useRef<ImageCardRef>(null);
  const teamCardRef = useRef<ImageCardRef>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const data = await (await fetch(`/api/admin/company?_t=${Date.now()}`, { cache: 'no-store' })).json();
      if (data) setForm({ name: data.name ?? '', tagline: data.tagline ?? '', email: data.email ?? '', phone: data.phone ?? '', addressEn: data.addressEn ?? '', addressVn: data.addressVn ?? '', officeImage: data.officeImage ?? '', teamImage: data.teamImage ?? '' });
    } catch (e) { console.error(e); } finally { setLoading(false); }
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);

  const handleSave = async () => {
    setSaving(true);
    try {
      // Resolve image paths: upload pending files first if needed
      let officeImagePath = form.officeImage ?? '';
      let teamImagePath = form.teamImage ?? '';

      if (officeCardRef.current?.hasPendingFile) {
        const result = await officeCardRef.current.uploadIfPending();
        if (result && result !== 'NO_PENDING') officeImagePath = result;
      }
      if (teamCardRef.current?.hasPendingFile) {
        const result = await teamCardRef.current.uploadIfPending();
        if (result && result !== 'NO_PENDING') teamImagePath = result;
      }

      const payload = { ...form, officeImage: officeImagePath, teamImage: teamImagePath };
      await fetch('/api/admin/company', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      setForm(payload); // sync state with what was actually saved
      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } catch (e) { console.error(e); } finally { setSaving(false); }
  };

  // Theme tokens
  const bg = isDark ? '#0f172a' : '#ffffff';
  const bg2 = isDark ? '#030816' : '#f8fafc';
  const border = isDark ? '#1e293b' : '#e2e8f0';
  const text = isDark ? '#e2e8f0' : '#1e293b';
  const label = isDark ? '#94a3b8' : '#64748b';
  const input = isDark ? '#1e293b' : '#f8fafc';
  const inp: React.CSSProperties = { background: input, border: `1px solid ${border}`, borderRadius: 6, padding: '8px 12px', fontSize: 13, color: text, outline: 'none', width: '100%', transition: 'border-color .2s' };

  const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div style={{ background: bg, border: `1px solid ${border}`, borderRadius: 8, overflow: 'hidden' }}>
      <div style={{ padding: '12px 18px', borderBottom: `1px solid ${border}`, background: isDark ? '#0f172a' : '#f8fafc' }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: label, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{title}</span>
      </div>
      <div style={{ padding: '18px', display: 'flex', flexDirection: 'column', gap: 14 }}>{children}</div>
    </div>
  );

  const F = (lbl: string, el: React.ReactNode) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
      <label style={{ fontSize: 11, fontWeight: 600, color: label }}>{lbl}</label>
      {el}
    </div>
  );

  if (loading) {
    return (
      <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: bg2 }}>
        <Loader2 size={24} color="#3b82f6" className="animate-spin" />
      </div>
    );
  }

  return (
    <DataManagementLayout
        searchTerm="" 
        onSearchTermChange={() => {}} 
        onSearch={() => {}} 
        advancedOpen={false} 
        onToggleAdvanced={() => {}} 
        isDark={isDark}
        searchPlaceholder="Settings..."
        hideSearch
        searchBarExtras={
          canUpdate && (
            <button
              onClick={handleSave}
              disabled={saving}
              className={`flex items-center gap-2 px-6 py-1.5 rounded-lg text-xs font-bold text-white transition-all shadow-lg active:scale-95 ${saved ? 'bg-green-500 shadow-green-500/20' : 'bg-blue-600 shadow-blue-600/20 hover:bg-blue-700'}`}
            >
              {saving ? <Loader2 size={14} className="animate-spin" /> : saved ? <CheckCircle2 size={14} /> : <Save size={14} />}
              {saved ? t('admin.company.saveSuccess') : t('admin.common.save')}
            </button>
          )
        }
    >
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 900, height: '100%', overflowY: 'auto', margin: '0 auto' }}>
        <div className="flex items-center gap-3 mb-2">
            <div className={`p-2 rounded-lg ${isDark ? 'bg-blue-500/10' : 'bg-blue-50'}`}>
                <Building2 size={18} className="text-blue-500" />
            </div>
            <div>
                <h2 className={`text-lg font-bold`} style={{ color: text }}>{t('admin.company.pageTitle')}</h2>
                <p className="text-[10px]" style={{ color: label }}>{t('admin.company.pageDesc')}</p>
            </div>
        </div>

        <Section title={t('admin.company.basicInfo')}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {F(t('admin.company.name'), <input style={inp} value={form.name} readOnly={!canUpdate} placeholder="Lucid Technology" onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />)}
            {F(t('admin.company.tagline'), <input style={inp} value={form.tagline ?? ''} readOnly={!canUpdate} placeholder="Building the Future…" onChange={e => setForm(f => ({ ...f, tagline: e.target.value }))} />)}
          </div>
        </Section>

        <Section title={t('admin.company.contact')}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {F(t('admin.company.email'), <input style={inp} type="email" readOnly={!canUpdate} value={form.email ?? ''} placeholder="hello@lucidtech.vn" onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />)}
            {F(t('admin.company.phone'), <input style={inp} readOnly={!canUpdate} value={form.phone ?? ''} placeholder="+84 28 ..." onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />)}
          </div>
          {F(t('admin.company.addressEn'), <input style={inp} readOnly={!canUpdate} value={form.addressEn ?? ''} placeholder="District 7, Ho Chi Minh City, Vietnam" onChange={e => setForm(f => ({ ...f, addressEn: e.target.value }))} />)}
          {F(t('admin.company.addressVn'), <input style={inp} readOnly={!canUpdate} value={form.addressVn ?? ''} placeholder="Quận 7, TP. Hồ Chí Minh, Việt Nam" onChange={e => setForm(f => ({ ...f, addressVn: e.target.value }))} />)}
        </Section>

        <Section title={t('admin.company.images')}>
          <p className="text-[11px]" style={{ color: label }}>Chọn ảnh bên dưới. Nhấp vào ảnh để thay đổi. Ảnh sẽ được tải lên khi bạn nhấn <strong>Lưu thay đổi</strong>.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1">
            <InteractiveImageCard 
              ref={officeCardRef}
              label={t('admin.company.officeImg')}
              value={form.officeImage || ''}
              onClear={() => setForm(f => ({ ...f, officeImage: '' }))}
              isDark={isDark}
              subDir="company"
              t={t}
              disabled={!canUpdate}
            />
            <InteractiveImageCard 
              ref={teamCardRef}
              label={t('admin.company.teamImg')}
              value={form.teamImage || ''}
              onClear={() => setForm(f => ({ ...f, teamImage: '' }))}
              isDark={isDark}
              subDir="company"
              t={t}
              disabled={!canUpdate}
            />
          </div>
        </Section>
      </div>
    </DataManagementLayout>
  );
}

// ─── InteractiveImageCard ──────────────────────────────────────────────────────

interface ImageCardProps {
  label: string;
  value: string;            // current saved image URL
  onClear: () => void;      // called when user confirms deletion
  isDark: boolean;
  subDir: string;
  t: any;
  disabled?: boolean;
}

const InteractiveImageCard = forwardRef<ImageCardRef, ImageCardProps>(
  ({ label, value, onClear, isDark, subDir, t, disabled }, ref) => {
    const [hovered, setHovered] = useState(false);
    const [pendingFile, setPendingFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [confirmDelete, setConfirmDelete] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Theme colors
    const border = isDark ? '#1e293b' : '#e2e8f0';
    const text = isDark ? '#f1f5f9' : '#1e293b';
    const labelColor = isDark ? '#94a3b8' : '#64748b';
    const cardBg = isDark ? '#0f172a' : '#ffffff';

    // Create/revoke object URL for pending file preview
    useEffect(() => {
      if (!pendingFile) { setPreviewUrl(null); return; }
      const url = URL.createObjectURL(pendingFile);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    }, [pendingFile]);

    // Expose upload API to parent
    useImperativeHandle(ref, () => ({
      get hasPendingFile() { return pendingFile !== null; },
      async uploadIfPending(): Promise<string | 'NO_PENDING' | null> {
        if (!pendingFile) return 'NO_PENDING';
        const formData = new FormData();
        formData.append('file', pendingFile);
        formData.append('overwrite', 'true');
        if (subDir) formData.append('subDir', subDir);
        const res = await fetch('/api/upload', { method: 'POST', body: formData });
        const data = await res.json();
        if (res.ok) { setPendingFile(null); return data.path; }
        return null;
      }
    }));

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) setPendingFile(file);
      e.target.value = '';
    };

    const handleDeleteConfirm = () => {
      onClear();
      setPendingFile(null);
      setConfirmDelete(false);
    };

    // What to display in the card
    const displaySrc = previewUrl ?? (value || null);
    const hasPending = pendingFile !== null;

    return (
      <div className="flex flex-col gap-3">
        <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: labelColor }}>{label}</span>

        {/* Card */}
        <div
          className={`relative aspect-video w-full rounded-xl overflow-hidden group shadow-sm border ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
          style={{ borderColor: hasPending ? '#3b82f6' : border, transition: 'border-color .2s' }}
          onMouseEnter={() => !disabled && setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => !disabled && fileInputRef.current?.click()}
        >
          <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />

          {/* Image / Placeholder */}
          {displaySrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={displaySrc} alt={label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          ) : (
            <div className={`w-full h-full flex flex-col items-center justify-center gap-3 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
              <ImageIcon size={32} className={isDark ? 'text-slate-700' : 'text-slate-300'} />
              <span className="text-[10px] font-medium" style={{ color: labelColor }}>{t('admin.grid.noData', 'Chưa có hình')}</span>
            </div>
          )}

          {/* Hover overlay */}
          <div className={`absolute inset-0 flex flex-col items-center justify-center gap-2 transition-all duration-300 bg-black/60 backdrop-blur-[2px] ${hovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="p-3 rounded-full bg-white/20 border border-white/30 text-white shadow-xl">
              <ImageIcon size={24} />
            </div>
            <span className="text-sm font-bold text-white drop-shadow-md text-center px-4">
              {hasPending ? t('admin.company.changePending', 'Nhấp để chọn ảnh khác') : t('admin.company.changeImage', 'Bạn muốn đổi hình không?')}
            </span>
            <span className="text-[10px] font-medium text-white/70">
              {t('admin.company.clickToUpload', 'Nhấp để chọn ảnh')}
            </span>
          </div>
        </div>

        {/* Pending file info bar — no upload button, will upload on Save */}
        {hasPending && (
          <div className={`flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-xs border border-dashed border-blue-500 ${isDark ? 'bg-blue-500/10' : 'bg-blue-50'}`}>
            <div className="flex items-center gap-2 overflow-hidden">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse shrink-0" />
              <span className="truncate font-medium" style={{ color: text }}>{pendingFile!.name}</span>
              <span className="text-[10px] shrink-0" style={{ color: labelColor }}>({(pendingFile!.size / 1024).toFixed(1)} KB)</span>
            </div>
            <button type="button" onClick={(e) => { e.stopPropagation(); setPendingFile(null); }} className="text-red-400 hover:text-red-500 p-0.5 shrink-0">
              <X size={14} />
            </button>
          </div>
        )}

        {/* Current URL indicator + delete button */}
        {!hasPending && value && (
          <div className="flex items-center justify-between gap-2 overflow-hidden px-1">
            <div className="flex items-center gap-1.5 overflow-hidden">
              <div className="w-1 h-1 rounded-full bg-blue-500 shrink-0" />
              <span className="text-[10px] truncate font-mono opacity-50" style={{ color: text }}>{value}</span>
            </div>
            {!disabled && (
              <button type="button" onClick={() => setConfirmDelete(true)} className="text-[10px] text-red-400 hover:text-red-500 font-medium shrink-0">
                {t('admin.common.delete', 'Xóa')}
              </button>
            )}
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {confirmDelete && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="rounded-xl p-6 w-80 shadow-2xl border" style={{ background: cardBg, borderColor: border }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-full bg-red-500/10 text-red-500 shrink-0"><X size={18} /></div>
                <h4 className="font-bold text-sm" style={{ color: text }}>Xác nhận xóa ảnh</h4>
              </div>
              <p className="text-[12px] mb-5 leading-relaxed" style={{ color: labelColor }}>
                Bạn có chắc muốn xóa hình <strong style={{ color: text }}>{label}</strong> không? Liên kết ảnh sẽ bị xóa khi bạn nhấn <strong style={{ color: text }}>Lưu thay đổi</strong>.
              </p>
              <div className="flex items-center justify-end gap-3">
                <button type="button" onClick={() => setConfirmDelete(false)} className="px-4 py-1.5 rounded-lg text-xs font-medium border" style={{ borderColor: border, color: labelColor }}>
                  {t('admin.common.cancel', 'Hủy')}
                </button>
                <button type="button" onClick={handleDeleteConfirm} className="px-4 py-1.5 rounded-lg text-xs font-bold text-white bg-red-500 hover:bg-red-600">
                  {t('admin.common.delete', 'Xóa')}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
);

InteractiveImageCard.displayName = 'InteractiveImageCard';
