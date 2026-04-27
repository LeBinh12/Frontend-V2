"use client";

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useAdminTheme } from '../layout';
import { Plus, Edit2, Trash2, Users, Loader2, Save, X, Eye } from 'lucide-react';
import ActionMenu from '@/components/admin/ActionMenu';
import { Button } from 'rsuite';
import { useTranslation } from 'react-i18next';
import DataManagementLayout from '@/components/admin/DataManagementLayout';
import DataTable, { DataTableColumn } from '@/components/admin/DataTable';
import AdminConfirmDeleteModal from '@/components/admin/AdminConfirmDeleteModal';
import ImageUploader from '@/components/admin/ImageUploader';
import { useAdminAuth } from '@/context/AdminAuthContext';

interface TeamMember {
  id: number;
  name: string;
  roleEn: string;
  roleVn: string;
  bioEn?: string | null;
  bioVn?: string | null;
  avatar?: string | null;
  level: number;
  top?: string | null;
  right?: string | null;
  size?: number | null;
  delay?: number | null;
}

const EMPTY: Omit<TeamMember, 'id'> = { name: '', roleEn: '', roleVn: '', bioEn: '', bioVn: '', avatar: '', level: 3, top: '', right: '', size: null, delay: null };

function TeamModal({ open, onClose, onSave, item, isDark }: {
  open: boolean; onClose: () => void; onSave: (d: Omit<TeamMember, 'id'>) => Promise<void>; item: TeamMember | null; isDark: boolean;
}) {
  const { t } = useTranslation();
  const [form, setForm] = useState(EMPTY);
  const [saving, setSaving] = useState(false);
  useEffect(() => { setForm(item ? { name: item.name, roleEn: item.roleEn, roleVn: item.roleVn, bioEn: item.bioEn ?? '', bioVn: item.bioVn ?? '', avatar: item.avatar ?? '', level: item.level, top: item.top ?? '', right: item.right ?? '', size: item.size, delay: item.delay } : EMPTY); }, [item, open]);
  if (!open) return null;

  const bg = isDark ? '#0f172a' : '#ffffff', border = isDark ? '#1e293b' : '#e2e8f0';
  const input = isDark ? '#1e293b' : '#f8fafc', text = isDark ? '#e2e8f0' : '#1e293b', label = isDark ? '#94a3b8' : '#64748b';
  const inp: React.CSSProperties = { background: input, border: `1px solid ${border}`, borderRadius: 4, padding: '6px 10px', fontSize: 12, color: text, outline: 'none', width: '100%' };
  const F = (lbl: string, el: React.ReactNode) => <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}><label style={{ fontSize: 11, fontWeight: 600, color: label, textTransform: 'uppercase' as const }}>{lbl}</label>{el}</div>;

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.65)' }}>
      <div style={{ background: bg, border: `1px solid ${border}`, borderRadius: 8, width: 580, maxHeight: '90vh', overflowY: 'auto', boxShadow: '0 24px 48px rgba(0,0,0,0.4)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', borderBottom: `1px solid ${border}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Users size={15} color="#3b82f6" /><span style={{ fontSize: 13, fontWeight: 700, color: text }}>{item ? t('admin.team.editTitle') : t('admin.team.addTitle')}</span></div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: label }}><X size={16} /></button>
        </div>
        <div style={{ padding: '16px 18px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {F(t('admin.team.name'), <input style={inp} value={form.name} placeholder="Full name" onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />)}
            {F(t('admin.team.order'), <input style={inp} type="number" min={1} max={5} value={form.level} onChange={e => setForm(f => ({ ...f, level: Number(e.target.value) }))} />)}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {F(t('admin.team.roleEn'), <input style={inp} value={form.roleEn} placeholder="e.g. Technical Lead" onChange={e => setForm(f => ({ ...f, roleEn: e.target.value }))} />)}
            {F(t('admin.team.roleVn'), <input style={inp} value={form.roleVn} placeholder="e.g. Trưởng nhóm kỹ thuật" onChange={e => setForm(f => ({ ...f, roleVn: e.target.value }))} />)}
          </div>
          {F(t('admin.portfolio.descEn'), <textarea style={{ ...inp, minHeight: 56, resize: 'vertical' }} value={form.bioEn ?? ''} onChange={e => setForm(f => ({ ...f, bioEn: e.target.value }))} />)}
          {F(t('admin.portfolio.descVn'), <textarea style={{ ...inp, minHeight: 56, resize: 'vertical' }} value={form.bioVn ?? ''} onChange={e => setForm(f => ({ ...f, bioVn: e.target.value }))} />)}
          <ImageUploader 
            label={t('admin.team.image')} 
            value={form.avatar ?? ''} 
            onChange={val => setForm(f => ({ ...f, avatar: val }))} 
            isDark={isDark} 
            subDir="team"
          />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 8 }}>
            {F('Top (%)', <input style={inp} value={form.top ?? ''} placeholder="e.g. 10%" onChange={e => setForm(f => ({ ...f, top: e.target.value }))} />)}
            {F('Right (%)', <input style={inp} value={form.right ?? ''} placeholder="e.g. 20%" onChange={e => setForm(f => ({ ...f, right: e.target.value }))} />)}
            {F('Size (px)', <input style={inp} type="number" value={form.size ?? ''} onChange={e => setForm(f => ({ ...f, size: e.target.value ? Number(e.target.value) : null }))} />)}
            {F('Delay (s)', <input style={inp} type="number" step="0.1" value={form.delay ?? ''} onChange={e => setForm(f => ({ ...f, delay: e.target.value ? Number(e.target.value) : null }))} />)}
          </div>
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

function TeamDetailModal({ open, onClose, item, isDark }: {
  open: boolean; onClose: () => void; item: TeamMember | null; isDark: boolean;
}) {
  const { t } = useTranslation();
  if (!open || !item) return null;

  const bg = isDark ? '#0f172a' : '#ffffff', border = isDark ? '#1e293b' : '#e2e8f0';
  const text = isDark ? '#e2e8f0' : '#1e293b', label = isDark ? '#94a3b8' : '#64748b';
  
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(4px)' }}>
      <div style={{ background: bg, border: `1px solid ${border}`, borderRadius: 12, width: 480, maxHeight: '90vh', overflowY: 'auto', boxShadow: '0 24px 48px rgba(0,0,0,0.4)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: `1px solid ${border}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Users size={18} color="#3b82f6" />
            <span style={{ fontSize: 15, fontWeight: 700, color: text }}>{t('admin.team.detailTitle', 'Chi tiết thành viên')}</span>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: label }}><X size={20} /></button>
        </div>
        
        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
            <div style={{ width: 120, height: 120, borderRadius: 12, overflow: 'hidden', border: `1px solid ${border}`, flexShrink: 0, background: isDark ? '#1e293b' : '#f8fafc' }}>
              {item.avatar ? (
                <img src={item.avatar} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: label }}>
                  <Users size={40} />
                </div>
              )}
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: 20, fontWeight: 800, color: text, marginBottom: 8 }}>{item.name}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', color: label, width: 40 }}>EN</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#3b82f6' }}>{item.roleEn}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', color: label, width: 40 }}>VN</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#10b981' }}>{item.roleVn}</span>
                </div>
                <div style={{ marginTop: 4 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 4, background: isDark ? '#1e293b' : '#f1f5f9', color: label }}>Level {item.level}</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ borderTop: `1px solid ${border}`, paddingTop: 20 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: label, textTransform: 'uppercase', marginBottom: 6, display: 'block' }}>Tiểu sử (EN)</label>
                <div style={{ fontSize: 13, color: text, lineHeight: 1.6, background: isDark ? '#0f172a' : '#f8fafc', padding: '12px', borderRadius: 8, border: `1px solid ${border}` }}>
                  {item.bioEn || t('admin.common.noData', 'Chưa có thông tin')}
                </div>
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 700, color: label, textTransform: 'uppercase', marginBottom: 6, display: 'block' }}>Tiểu sử (VN)</label>
                <div style={{ fontSize: 13, color: text, lineHeight: 1.6, background: isDark ? '#0f172a' : '#f8fafc', padding: '12px', borderRadius: 8, border: `1px solid ${border}` }}>
                  {item.bioVn || t('admin.common.noData', 'Chưa có thông tin')}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ padding: '16px 20px', borderTop: `1px solid ${border}`, display: 'flex', justifyContent: 'flex-end' }}>
          <button onClick={onClose} style={{ padding: '8px 20px', fontSize: 13, fontWeight: 700, borderRadius: 6, cursor: 'pointer', background: '#3b82f6', border: 'none', color: '#fff' }}>
            {t('admin.common.close', 'Đóng')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function TeamPage() {
  const { isDark } = useAdminTheme();
  const { t } = useTranslation();
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState<TeamMember[]>([]);
  const [formOpen, setFormOpen] = useState(false);
  const [editItem, setEditItem] = useState<TeamMember | null>(null);
  const [detailItem, setDetailItem] = useState<TeamMember | null>(null);
  const [deleteItem, setDeleteItem] = useState<TeamMember | null>(null);

  const { canDo } = useAdminAuth();

  const canCreate = canDo('TEAM', 'CREATE');
  const canUpdate = canDo('TEAM', 'UPDATE');
  const canDelete = canDo('TEAM', 'DELETE');

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
      const res = await fetch(`/api/admin/team?${params.toString()}`, { cache: 'no-store' });
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

  const handleAdd = async (f: Omit<TeamMember, 'id'>) => { await fetch('/api/admin/team', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(f) }); await fetchData(); };
  const handleEdit = async (f: Omit<TeamMember, 'id'>) => {
    if (!editItem) return;
    const res = await fetch(`/api/admin/team/${editItem.id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(f), cache: 'no-store' });
    const d = await res.json();
    if (res.ok) {
      setRows(prev => prev.map(item => item.id === editItem.id ? d : item));
    }
    await fetchData();
  };
  const handleDelete = async () => { if (!deleteItem) return; await fetch(`/api/admin/team/${deleteItem.id}`, { method: 'DELETE' }); await fetchData(); };

  const columns: DataTableColumn<TeamMember>[] = useMemo(() => [
    {
      key: 'name', header: t('admin.team.name'), flexGrow: 1,
      render: r => (
        <div className="flex items-center gap-2 h-full">
          <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>{r.name[0]}</div>
          <div><p className="text-xs font-semibold">{r.name}</p><p className="text-[10px] text-blue-500">{r.roleEn}</p></div>
        </div>
      ),
    },
    { key: 'roleVn', header: t('admin.team.roleVn'), flexGrow: 1, render: r => <span className="text-xs">{r.roleVn}</span> },
    { key: 'level', header: t('admin.team.order'), width: 100, align: 'center', render: r => <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${r.level === 1 ? 'bg-amber-500/10 text-amber-500' : r.level === 2 ? 'bg-blue-500/10 text-blue-500' : 'bg-slate-500/10 text-slate-400'}`}>L{r.level}</span> },
    { key: 'avatar', header: t('admin.team.image'), width: 100, render: r => <span className="text-xs text-slate-400 truncate block max-w-[88px]">{r.avatar || '—'}</span> },
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
              onClick: () => setDetailItem(r) 
            },
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
  ], [isDark, t, rows, canUpdate, canDelete]);

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <DataManagementLayout
        searchTerm={search} onSearchTermChange={setSearch} onSearch={handleSearch}
        advancedOpen={false} onToggleAdvanced={() => {}} searchPlaceholder={t('admin.team.search')} controlSize="sm" isDark={isDark}
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
          classNamePrefix="team-grid"
          isDark={isDark}
          loading={loading}
          emptyText={t('admin.team.empty')}
          // Pagination
          page={page}
          limit={limit}
          total={total}
          onChangePage={setPage}
          onChangeLimit={setLimit}
        />
      </DataManagementLayout>

      <TeamModal open={formOpen} onClose={() => { setFormOpen(false); setEditItem(null); }} onSave={editItem ? handleEdit : handleAdd} item={editItem} isDark={isDark} />
      
      <TeamDetailModal 
        open={Boolean(detailItem)} 
        onClose={() => setDetailItem(null)} 
        item={detailItem} 
        isDark={isDark} 
      />
      
      <AdminConfirmDeleteModal
        open={Boolean(deleteItem)}
        onClose={() => setDeleteItem(null)}
        onConfirm={handleDelete}
        itemLabel={deleteItem?.name ?? ''}
        isDark={isDark}
        title={t('admin.team.confirmDeleteTitle')}
        description={t('admin.team.confirmDeleteDesc')}
      />
    </div>
  );
}
