"use client";

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useAdminTheme } from '../layout';
import { Button, Tag, Stack } from 'rsuite';
import { useTranslation } from 'react-i18next';
import DataManagementLayout from '@/components/admin/DataManagementLayout';
import DataTable, { DataTableColumn } from '@/components/admin/DataTable';
import AdminConfirmDeleteModal from '@/components/admin/AdminConfirmDeleteModal';
import { 
  MessageSquare, Mail, Phone, Calendar, Trash2, Eye, ExternalLink, X,
  Loader2, CheckCircle2, CheckCircle, XCircle 
} from 'lucide-react';
import ActionMenu from '@/components/admin/ActionMenu';
import { useAdminAuth } from '@/context/AdminAuthContext';

interface ContactItem {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  subject: string | null;
  message: string;
  status: string;
  createdAt: string;
}

const STATUS_CONFIG: Record<string, { color: string, hex: string, icon: any }> = {
  pending:    { color: 'orange', hex: '#f97316', icon: Calendar },
  processing: { color: 'blue',   hex: '#3b82f6', icon: Loader2 },
  active:     { color: 'green',  hex: '#22c55e', icon: CheckCircle2 },
  completed:  { color: 'cyan',   hex: '#06b6d4', icon: CheckCircle },
  cancelled:  { color: 'red',    hex: '#ef4444', icon: XCircle },
};

function StatusBadge({ status, t }: { status: string, t: any }) {
  const config = STATUS_CONFIG[status] || STATUS_CONFIG.pending;
  const label = t(`admin.contacts.statuses.${status}`) || status;
  return (
    <Tag color={config.color as any} size="sm" className="!rounded-md !px-2 !py-0.5 !text-[10px] !font-bold !uppercase !tracking-wider">
      {label}
    </Tag>
  );
}

function ContactDetailModal({ 
  open, 
  onClose, 
  item, 
  isDark, 
  onUpdateStatus 
}: { 
  open: boolean, 
  onClose: () => void, 
  item: ContactItem | null, 
  isDark: boolean,
  onUpdateStatus: (id: number, status: string) => Promise<void>
}) {
  const { t } = useTranslation();
  const [updating, setUpdating] = useState(false);
  
  if (!open || !item) return null;

  const bg = isDark ? '#0f172a' : '#ffffff', border = isDark ? '#1e293b' : '#e2e8f0';
  const text = isDark ? '#e2e8f0' : '#1e293b', label = isDark ? '#94a3b8' : '#64748b';
  const sectionBg = isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)';

  const Field = ({ icon: Icon, labelText, value, fullWidth = false }: { icon: any, labelText: string, value: string | null, fullWidth?: boolean }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, gridColumn: fullWidth ? '1 / -1' : 'auto' }}>
      <p style={{ fontSize: 10, fontWeight: 700, color: label, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: 6 }}>
        <Icon size={12} className="text-blue-500" />
        {labelText}
      </p>
      <div style={{ 
        padding: '12px 14px', 
        borderRadius: 8, 
        background: sectionBg, 
        border: `1px solid ${border}`,
        fontSize: 13,
        color: text,
        minHeight: 40,
        whiteSpace: 'pre-wrap',
        lineHeight: 1.6
      }}>
        {value || '—'}
      </div>
    </div>
  );

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}>
      <div style={{ background: bg, border: `1px solid ${border}`, borderRadius: 16, width: 650, maxHeight: '90vh', overflowY: 'auto', boxShadow: '0 24px 64px rgba(0,0,0,0.5)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: `1px solid ${border}`, position: 'sticky', top: 0, background: bg, zIndex: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Eye size={18} className="text-blue-500" />
            <span style={{ fontSize: 14, fontWeight: 700, color: text }}>{t('admin.contacts.detailTitle', 'Chi tiết liên hệ')}</span>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: label }}><X size={20} /></button>
        </div>
        
        <div style={{ padding: '24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <Field icon={MessageSquare} labelText={t('admin.contacts.name')} value={item.name} />
          <Field icon={Mail} labelText={t('admin.contacts.email')} value={item.email} />
          <Field icon={Phone} labelText={t('admin.contacts.phone')} value={item.phone} />
          <Field icon={Calendar} labelText={t('admin.contacts.time')} value={new Date(item.createdAt).toLocaleString('vi-VN')} />
          <div style={{ gridColumn: '1 / -1', marginTop: 8 }}>
             <p style={{ fontSize: 10, fontWeight: 700, color: label, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 8 }}>{t('admin.contacts.status')}</p>
             <div className="flex flex-wrap gap-2">
                {Object.keys(STATUS_CONFIG).map(s => {
                  const isActive = item.status === s;
                  const config = STATUS_CONFIG[s];
                  return (
                    <button
                      key={s}
                      disabled={updating}
                      onClick={async () => {
                        setUpdating(true);
                        await onUpdateStatus(item.id, s);
                        setUpdating(false);
                      }}
                      className={`
                        flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all text-[11px] font-bold uppercase tracking-wider
                        ${isActive 
                          ? `bg-${config.color}-500/20 border-${config.color}-500/40 text-${config.color}-500` 
                          : 'bg-transparent border-slate-700 text-slate-500 hover:border-slate-500'
                        }
                      `}
                    >
                      {isActive && updating ? <Loader2 size={12} className="animate-spin" /> : <config.icon size={12} />}
                      {t(`admin.contacts.statuses.${s}`)}
                    </button>
                  );
                })}
             </div>
          </div>
          <Field icon={Eye} labelText={t('admin.contacts.subject')} value={item.subject} fullWidth />
          <Field icon={MessageSquare} labelText={t('admin.contacts.message')} value={item.message} fullWidth />
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

function StatusUpdateModal({ 
  open, 
  onClose, 
  item, 
  isDark, 
  onUpdateStatus 
}: { 
  open: boolean, 
  onClose: () => void, 
  item: ContactItem | null, 
  isDark: boolean,
  onUpdateStatus: (id: number, status: string) => Promise<void>
}) {
  const { t } = useTranslation();
  const [updating, setUpdating] = useState<string | null>(null);

  if (!open || !item) return null;

  const bg = isDark ? '#0f172a' : '#ffffff', border = isDark ? '#1e293b' : '#e2e8f0';
  const text = isDark ? '#e2e8f0' : '#1e293b', label = isDark ? '#94a3b8' : '#64748b';

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}>
      <div style={{ background: bg, border: `1px solid ${border}`, borderRadius: 16, width: 450, boxShadow: '0 24px 64px rgba(0,0,0,0.5)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: `1px solid ${border}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Calendar size={18} className="text-blue-500" />
            <span style={{ fontSize: 14, fontWeight: 700, color: text }}>{t('admin.contacts.statusUpdateTitle', 'Cập nhật trạng thái')}</span>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: label }}><X size={20} /></button>
        </div>
        
        <div style={{ padding: '24px' }}>
          <p style={{ fontSize: 12, color: label, marginBottom: 16 }}>
            {t('admin.contacts.updateStatusFor', 'Cập nhật trạng thái cho khách hàng:')} <strong style={{ color: text }}>{item.name}</strong>
          </p>
          
          <div className="flex flex-col gap-2">
            {Object.keys(STATUS_CONFIG).map(s => {
              const isActive = item.status === s;
              const config = STATUS_CONFIG[s];
              return (
                <button
                  key={s}
                  disabled={!!updating}
                  onClick={async () => {
                    setUpdating(s);
                    await onUpdateStatus(item.id, s);
                    setUpdating(null);
                    onClose();
                  }}
                  className={`
                    flex items-center justify-between px-4 py-3 rounded-xl border transition-all text-xs font-bold uppercase tracking-wider
                    ${isActive 
                      ? `bg-${config.color}-500/10 border-${config.color}-500/30 text-${config.color}-500` 
                      : 'bg-transparent border-slate-700/50 text-slate-500 hover:border-slate-500 hover:text-slate-300'
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <config.icon size={14} />
                    {t(`admin.contacts.statuses.${s}`)}
                  </div>
                  {updating === s ? <Loader2 size={14} className="animate-spin" /> : isActive && <CheckCircle size={14} />}
                </button>
              );
            })}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '16px 20px', borderTop: `1px solid ${border}` }}>
          <button onClick={onClose} style={{ padding: '8px 24px', fontSize: 12, fontWeight: 700, borderRadius: 8, cursor: 'pointer', background: 'transparent', border: `1px solid ${border}`, color: label }}>
            {t('admin.common.cancel')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ContactManagementPage() {
  const { isDark } = useAdminTheme();
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [rowData, setRowData] = useState<ContactItem[]>([]);
  const [deleteItem, setDeleteItem] = useState<ContactItem | null>(null);
  const [detailItem, setDetailItem] = useState<ContactItem | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  
  const [statusModalItem, setStatusModalItem] = useState<ContactItem | null>(null);
  const [statusModalOpen, setStatusModalOpen] = useState(false);
  const { canDo } = useAdminAuth();

  const canUpdate = canDo('CONTACTS', 'UPDATE');
  const canDelete = canDo('CONTACTS', 'DELETE');

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
        _t: Date.now().toString()
      });
      const res = await fetch(`/api/admin/contacts?${params.toString()}`, { cache: 'no-store' });
      const data = await res.json();
      setRowData(data.items || []);
      setTotal(data.total || 0);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [page, limit, searchQuery]);

  useEffect(() => {
    fetchData();
  }, [page, limit]);

  const handleSearch = useCallback(() => {
    setPage(1);
    fetchData();
  }, [fetchData]);

  const handleDelete = useCallback(async () => {
    if (!deleteItem) return;
    try {
      const res = await fetch(`/api/admin/contacts?id=${deleteItem.id}`, { method: 'DELETE' });
      if (res.ok) {
        await fetchData();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setDeleteItem(null);
    }
  }, [deleteItem, fetchData]);

  const handleUpdateStatus = useCallback(async (id: number, status: string) => {
    try {
      const res = await fetch('/api/admin/contacts', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      });
      if (res.ok) {
        setRowData(prev => prev.map(item => item.id === id ? { ...item, status } : item));
        if (detailItem?.id === id) {
          setDetailItem({ ...detailItem, status });
        }
        if (statusModalItem?.id === id) {
          setStatusModalItem({ ...statusModalItem, status });
        }
      }
    } catch (e) {
      console.error(e);
    }
  }, [detailItem, statusModalItem, fetchData]);

  const columns: DataTableColumn<ContactItem>[] = useMemo(() => [
    {
      key: 'name', 
      header: t('admin.contacts.name'), 
      flexGrow: 1,
      render: (row) => (
        <div className="flex flex-col justify-center h-full">
          <span className={`text-xs font-bold leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>{row.name}</span>
          <div className="flex items-center gap-2 mt-1 opacity-60">
            <Mail size={10} />
            <span className="text-[10px]">{row.email}</span>
          </div>
        </div>
      ),
    },
    { 
      key: 'contact', 
      header: t('admin.contacts.phone'), 
      width: 150,
      render: (row) => (
        <div className="flex flex-col justify-center h-full">
          {row.phone ? (
            <div className="flex items-center gap-2 opacity-80">
              <Phone size={12} className="text-blue-500" />
              <span className="text-xs">{row.phone}</span>
            </div>
          ) : (
            <span className="text-xs italic opacity-40">-</span>
          )}
        </div>
      )
    },
    {
      key: 'status',
      header: t('admin.contacts.status'),
      width: 120,
      render: (row) => <StatusBadge status={row.status} t={t} />
    },
    { 
      key: 'subject', 
      header: t('admin.contacts.subject'), 
      flexGrow: 1, 
      render: (row) => (
        <div className="flex flex-col justify-center h-full">
          <span className="text-xs font-medium leading-tight line-clamp-1">{row.subject || t('admin.contacts.noSubject', 'Không có chủ đề')}</span>
        </div>
      )
    },
    {
      key: 'createdAt', 
      header: t('admin.contacts.time'), 
      width: 150,
      render: (row) => (
        <div className="flex flex-col justify-center h-full opacity-60">
          <div className="flex items-center gap-1.5">
            <Calendar size={12} />
            <span className="text-xs">{new Date(row.createdAt).toLocaleDateString('vi-VN')}</span>
          </div>
          <span className="text-[10px] ml-4.5">{new Date(row.createdAt).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      ),
    },
    {
      key: 'actions', 
      header: t('admin.common.actions'), 
      width: 80, 
      align: 'right', 
      fixed: 'right',
      render: (row) => (
        <ActionMenu 
          isDark={isDark}
          items={[
            { 
              label: t('admin.common.view', 'Xem chi tiết'), 
              icon: <Eye size={14} />, 
              eventKey: 'view', 
              onClick: () => {
                setDetailItem(row);
                setDetailOpen(true);
              } 
            },
            ...(canUpdate ? [{ 
              label: t('admin.contacts.changeStatus', 'Thay đổi trạng thái'), 
              icon: <Calendar size={14} />, 
              eventKey: 'status', 
              onClick: () => {}, // Handled by children
              children: Object.keys(STATUS_CONFIG).map(s => {
                const config = STATUS_CONFIG[s];
                return {
                  label: t(`admin.contacts.statuses.${s}`),
                  icon: <config.icon size={14} />,
                  eventKey: `status-${row.id}-${s}`,
                  active: row.status === s,
                  activeColor: config.hex,
                  onClick: () => handleUpdateStatus(row.id, s)
                };
              })
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
  ], [isDark, t, handleUpdateStatus, rowData, canUpdate, canDelete]);

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <DataManagementLayout
        searchTerm={searchQuery} 
        onSearchTermChange={setSearchQuery} 
        onSearch={handleSearch}
        advancedOpen={false} 
        onToggleAdvanced={() => {}}
        searchPlaceholder={t('admin.contacts.search')} 
        controlSize="sm" 
        isDark={isDark}
        searchBarExtras={
          <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <MessageSquare size={14} className="text-blue-500" />
            <span className="text-[10px] font-bold text-blue-500 uppercase tracking-wider">
              {total} {t('admin.menu.contacts')}
            </span>
          </div>
        }
      >
        <DataTable
          data={rowData}
          columns={columns}
          rowKey="id"
          gridHeight="calc(100vh - 148px)"
          classNamePrefix="contacts-grid"
          isDark={isDark}
          loading={loading}
          emptyText={t('admin.contacts.empty')}
          // Pagination
          page={page}
          limit={limit}
          total={total}
          onChangePage={setPage}
          onChangeLimit={setLimit}
        />
      </DataManagementLayout>

      <ContactDetailModal
        open={detailOpen}
        onClose={() => { setDetailOpen(false); setDetailItem(null); }}
        item={detailItem}
        isDark={isDark}
        onUpdateStatus={handleUpdateStatus}
      />

      <AdminConfirmDeleteModal
        open={Boolean(deleteItem)}
        onClose={() => setDeleteItem(null)}
        onConfirm={handleDelete}
        itemLabel={deleteItem?.name ?? ''}
        isDark={isDark}
        title={t('admin.contacts.confirmDeleteTitle')}
        description={t('admin.contacts.confirmDeleteDesc')}
      />
    </div>
  );
}
