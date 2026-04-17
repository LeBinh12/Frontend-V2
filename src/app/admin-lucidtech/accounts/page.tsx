"use client";

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useAdminTheme } from '../layout';
import { ShieldCheck, ShieldAlert, UserCog, Crown, Loader2, X, Plus, Edit2, Trash2, Save, Key, Mail, User, RotateCcw, MoreVertical } from 'lucide-react';
import DataManagementLayout from '@/components/admin/DataManagementLayout';
import DataTable, { DataTableColumn } from '@/components/admin/DataTable';
import AdminConfirmDeleteModal from '@/components/admin/AdminConfirmDeleteModal';
import AdminConfirmResetModal from '@/components/admin/AdminConfirmResetModal';
import { Button, Dropdown, Whisper, Popover } from 'rsuite';
import { useTranslation } from 'react-i18next';
import ActionMenu from '@/components/admin/ActionMenu';

interface Manager {
  id: string;
  username: string;
  fullName: string | null;
  email: string | null;
  role: 'ADMIN' | 'MANAGER' | 'STAFF';
  createdAt: string;
}

const ROLE_META: Record<string, { label: string; color: string; Icon: typeof Crown | typeof ShieldCheck | typeof ShieldAlert }> = {
  ADMIN:   { label: 'Admin',   color: '#f59e0b', Icon: Crown },
  MANAGER: { label: 'Manager', color: '#3b82f6', Icon: ShieldCheck },
  STAFF:   { label: 'Staff',   color: '#64748b', Icon: ShieldAlert },
};

const EMPTY_FORM = {
  username: '',
  password: '',
  fullName: '',
  email: '',
  role: 'STAFF' as 'ADMIN' | 'MANAGER' | 'STAFF'
};

function AccountModal({ open, onClose, onSave, item, isDark }: {
  open: boolean; onClose: () => void; onSave: (d: typeof EMPTY_FORM) => Promise<void>; item: Manager | null; isDark: boolean;
}) {
  const { t } = useTranslation();
  const [form, setForm] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => { 
    if (open) {
      setForm(item ? { 
        username: item.username, 
        password: '', 
        fullName: item.fullName || '', 
        email: item.email || '', 
        role: item.role 
      } : EMPTY_FORM);
      setError(null);
    }
  }, [item, open]);

  if (!open) return null;

  const bg = isDark ? '#0f172a' : '#ffffff', border = isDark ? '#1e293b' : '#e2e8f0';
  const input = isDark ? '#1e293b' : '#f8fafc', text = isDark ? '#e2e8f0' : '#1e293b', label = isDark ? '#94a3b8' : '#64748b';
  const inp: React.CSSProperties = { background: input, border: `1px solid ${border}`, borderRadius: 4, padding: '8px 12px', fontSize: 13, color: text, outline: 'none', width: '100%', transition: 'all 0.2s' };
  
  const F = (lbl: string, el: React.ReactNode, sub?: string) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <label style={{ fontSize: 11, fontWeight: 700, color: label, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{lbl}</label>
        {sub && <span style={{ fontSize: 10, color: '#94a3b8', fontStyle: 'italic' }}>{sub}</span>}
      </div>
      {el}
    </div>
  );

  const handleAction = async () => {
    setSaving(true);
    setError(null);
    try {
      await onSave(form);
      onClose();
    } catch (e: any) {
      setError(e.message || 'An error occurred');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}>
      <div style={{ background: bg, border: `1px solid ${border}`, borderRadius: 12, width: 480, maxHeight: '90vh', overflowY: 'auto', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: `1px solid ${border}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ padding: 6, background: 'rgba(59,130,246,0.1)', borderRadius: 8 }}>
              <UserCog size={18} color="#3b82f6" />
            </div>
            <span style={{ fontSize: 15, fontWeight: 700, color: text }}>{item ? t('admin.accounts.editTitle') : t('admin.accounts.addTitle')}</span>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: label, padding: 4 }}><X size={18} /></button>
        </div>
        
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: 18 }}>
          {error && (
            <div style={{ padding: '10px 14px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 6, color: '#ef4444', fontSize: 12, fontWeight: 600 }}>
              {error}
            </div>
          )}

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {F(t('admin.accounts.username'), 
              <div style={{ position: 'relative' }}>
                <User size={14} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: label, opacity: 0.5 }} />
                <input style={{ ...inp, paddingLeft: 32, fontFamily: 'monospace', opacity: item ? 0.6 : 1 }} value={form.username} readOnly={!!item} placeholder="e.g. admin" onChange={e => setForm(f => ({ ...f, username: e.target.value }))} />
              </div>
            )}
            {F(t('admin.accounts.role'), 
              <select style={inp} value={form.role} onChange={e => setForm(f => ({ ...f, role: e.target.value as any }))}>
                <option value="ADMIN">{t('admin.accounts.roleAdmin')}</option>
                <option value="MANAGER">{t('admin.accounts.roleManager')}</option>
                <option value="STAFF">{t('admin.accounts.roleStaff')}</option>
              </select>
            )}
          </div>

          {F(t('admin.accounts.fullName'), 
            <input style={inp} value={form.fullName} placeholder="Full name" onChange={e => setForm(f => ({ ...f, fullName: e.target.value }))} />
          )}

          {F(t('admin.accounts.email'), 
             <div style={{ position: 'relative' }}>
                <Mail size={14} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: label, opacity: 0.5 }} />
                <input style={{ ...inp, paddingLeft: 32 }} type="email" value={form.email} placeholder="email@example.com" onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
             </div>
          )}

          {F(t('admin.accounts.password'), 
            <div style={{ position: 'relative' }}>
              <Key size={14} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: label, opacity: 0.5 }} />
              <input style={{ ...inp, paddingLeft: 32 }} type="password" value={form.password} placeholder={item ? "Leave blank to keep current" : "Enter password"} onChange={e => setForm(f => ({ ...f, password: e.target.value }))} />
            </div>,
            item ? "Optional" : undefined
          )}
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, padding: '16px 20px', borderTop: `1px solid ${border}` }}>
          <button onClick={onClose} style={{ padding: '8px 18px', fontSize: 13, fontWeight: 600, borderRadius: 8, cursor: 'pointer', background: 'transparent', border: `1px solid ${border}`, color: label, transition: 'all 0.2s' }}>{t('admin.common.cancel')}</button>
          <button 
            disabled={!form.username.trim() || (!item && !form.password) || saving} 
            onClick={handleAction}
            style={{ 
              padding: '8px 24px', fontSize: 13, fontWeight: 700, borderRadius: 8, cursor: (saving || !form.username.trim()) ? 'not-allowed' : 'pointer', 
              background: '#3b82f6', border: 'none', color: '#fff', display: 'flex', alignItems: 'center', gap: 8,
              boxShadow: '0 4px 12px rgba(59,130,246,0.3)', transition: 'all 0.2s'
            }}>
            {saving ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />} {item ? t('admin.common.save') : t('admin.common.add')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AdminAccountsPage() {
  const { isDark } = useAdminTheme();
  const { t } = useTranslation();
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState<Manager[]>([]);
  const [formOpen, setFormOpen] = useState(false);
  const [editItem, setEditItem] = useState<Manager | null>(null);
  const [deleteItem, setDeleteItem] = useState<Manager | null>(null);
  const [resetItem, setResetItem] = useState<Manager | null>(null);

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
      const res = await fetch(`/api/admin/accounts?${params.toString()}`);
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

  const handleAdd = useCallback(async (f: typeof EMPTY_FORM) => {
    const res = await fetch('/api/admin/accounts', { 
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify(f) 
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || 'Failed to add account');
    }
    await fetchData();
  }, [fetchData]);

  const handleEdit = useCallback(async (f: typeof EMPTY_FORM) => {
    if (!editItem) return;
    const res = await fetch(`/api/admin/accounts/${editItem.id}`, { 
      method: 'PUT', 
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify(f) 
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || 'Failed to update account');
    }
    await fetchData();
  }, [editItem, fetchData]);

  const handleDelete = useCallback(async () => {
    if (!deleteItem) return;
    const res = await fetch(`/api/admin/accounts/${deleteItem.id}`, { method: 'DELETE' });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || 'Failed to delete account');
    }
    await fetchData();
  }, [deleteItem, fetchData]);

  const handleResetPassword = useCallback(async () => {
    if (!resetItem) return;
    
    const res = await fetch(`/api/admin/accounts/${resetItem.id}`, { method: 'PATCH' });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || 'Failed to reset password');
    }
  }, [resetItem]);

  const columns: DataTableColumn<Manager>[] = useMemo(() => [
    {
      key: 'username', header: t('admin.accounts.username'), flexGrow: 1,
      render: r => (
        <div className="flex items-center gap-2 h-full">
          <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${isDark ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>
            {(r.fullName ?? r.username)[0]?.toUpperCase()}
          </div>
          <div>
            <p className="text-xs font-semibold">{r.fullName ?? r.username}</p>
            <p className="text-[10px] text-slate-400 font-mono">@{r.username}</p>
          </div>
        </div>
      ),
    },
    { key: 'email', header: t('admin.accounts.email'), flexGrow: 1, render: r => <span className="text-[11px] text-slate-400">{r.email ?? '—'}</span> },
    {
      key: 'role', header: t('admin.accounts.role'), width: 110, align: 'center',
      render: r => {
        const m = ROLE_META[r.role] ?? ROLE_META.STAFF;
        const Icon = m.Icon;
        return (
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] font-bold" style={{ background: `${m.color}18`, color: m.color }}>
            <Icon size={9} /> {m.label}
          </div>
        );
      },
    },
    {
      key: 'createdAt', header: t('admin.common.createdAt'), width: 120,
      render: r => <span className="text-[10px] text-slate-400">{new Date(r.createdAt).toLocaleDateString('vi-VN')}</span>,
    },
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
              label: t('admin.accounts.resetPassword', 'Reset Password'), 
              icon: <RotateCcw size={14} className="text-amber-500" />, 
              eventKey: 'reset', 
              onClick: () => setResetItem(r) 
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
        advancedOpen={false} onToggleAdvanced={() => {}} searchPlaceholder={t('admin.accounts.search')} controlSize="sm" isDark={isDark}
        searchBarExtras={
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-sm text-[10px] font-bold" style={{ background: isDark ? '#1e293b' : '#f1f5f9', color: isDark ? '#94a3b8' : '#64748b', height: 28 }}>
              {loading ? <Loader2 size={10} className="animate-spin" /> : <ShieldCheck size={10} />}
              {total} {t('admin.accounts.role')}
            </div>
            <Button size="sm" appearance="primary" color="blue" onClick={() => { setEditItem(null); setFormOpen(true); }} className="!flex !items-center !gap-1.5 !px-3 !py-1 !rounded-sm !text-[10px] !font-bold">
              <Plus size={14} /> {t('admin.common.addNew')}
            </Button>
          </div>
        }
      >
        <DataTable
          data={rows}
          columns={columns}
          rowKey="id"
          gridHeight="calc(100vh - 148px)"
          classNamePrefix="accounts-grid"
          isDark={isDark}
          loading={loading}
          emptyText={t('admin.accounts.empty')}
          // Pagination
          page={page}
          limit={limit}
          total={total}
          onChangePage={setPage}
          onChangeLimit={setLimit}
        />
      </DataManagementLayout>

      <AccountModal 
        open={formOpen} 
        onClose={() => { setFormOpen(false); setEditItem(null); }} 
        onSave={editItem ? handleEdit : handleAdd} 
        item={editItem} 
        isDark={isDark} 
      />
      
      <AdminConfirmDeleteModal
        open={Boolean(deleteItem)}
        onClose={() => setDeleteItem(null)}
        onConfirm={handleDelete}
        itemLabel={deleteItem?.username ?? ''}
        isDark={isDark}
        title={t('admin.accounts.confirmDeleteTitle') || t('admin.common.confirmDeleteTitle')}
        description={t('admin.accounts.confirmDeleteDesc') || t('admin.common.confirmDeleteDesc')}
      />

      <AdminConfirmResetModal
        open={Boolean(resetItem)}
        onClose={() => setResetItem(null)}
        onConfirm={handleResetPassword}
        username={resetItem?.username ?? ''}
        isDark={isDark}
      />
    </div>
  );
}
