"use client";

import React, { useState, useEffect } from 'react';
import { X, AlertTriangle, Trash2, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface AdminConfirmDeleteModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => Promise<void>;
  title?: string;
  description?: string;
  itemLabel: string;
  isDark: boolean;
}

const AdminConfirmDeleteModal = ({
  open,
  onClose,
  onConfirm,
  title = "Xác nhận xóa",
  description = "Hành động này không thể hoàn tác. Dữ liệu sẽ bị xóa vĩnh viễn khỏi hệ thống.",
  itemLabel,
  isDark
}: AdminConfirmDeleteModalProps) => {
  const { t } = useTranslation();
  const [typed, setTyped] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (open) setTyped('');
  }, [open]);

  if (!open) return null;

  const canDelete = typed === itemLabel;

  // Theme styles
  const bg = isDark ? 'bg-[#0f172a]' : 'bg-white';
  const border = isDark ? 'border-slate-800' : 'border-slate-200';
  const dangerBorder = isDark ? 'border-red-900/50' : 'border-red-200';
  const inputBg = isDark ? 'bg-[#030816]' : 'bg-slate-50';
  const text = isDark ? 'text-slate-200' : 'text-slate-900';
  const labelText = isDark ? 'text-slate-400' : 'text-slate-500';
  const confirmBg = isDark ? 'bg-slate-800' : 'bg-red-50';
  const confirmText = isDark ? 'text-red-400' : 'text-red-600';

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className={`relative ${bg} border-2 ${dangerBorder} rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200`}>
        {/* Header */}
        <div className={`flex items-center justify-between px-5 py-4 border-b ${border}`}>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-500/10 rounded-lg">
              <AlertTriangle size={18} className="text-red-500" />
            </div>
            <h3 className={`text-sm font-bold ${isDark ? 'text-red-400' : 'text-red-600'}`}>
              {title || t('admin.common.confirmDeleteTitle')}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className={`${labelText} hover:${text} transition-colors focus:outline-none`}
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          <p className={`text-xs leading-relaxed ${labelText}`}>
            {description || t('admin.common.confirmDeleteDesc')}
          </p>

          <div className={`${confirmBg} border ${dangerBorder} rounded-lg p-3.5 text-center`}>
            <span className={`font-mono text-sm font-bold tracking-tight ${confirmText}`}>
              {itemLabel}
            </span>
          </div>

          <div className="space-y-2">
            <label className={`block text-[10px] font-bold uppercase tracking-wider ${labelText}`}>
              {t('admin.common.typeToConfirm', { label: itemLabel })}
            </label>
            <input
              autoFocus
              type="text"
              value={typed}
              onChange={(e) => setTyped(e.target.value)}
              placeholder={itemLabel}
              className={`w-full px-4 py-3 rounded-lg ${inputBg} border ${border} ${text} text-sm font-mono focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition-all placeholder:opacity-30`}
            />
          </div>
        </div>

        {/* Footer */}
        <div className={`flex items-center justify-end gap-3 px-6 py-4 border-t ${border} bg-black/5`}>
          <button
            onClick={onClose}
            className={`px-4 py-2 text-xs font-semibold ${labelText} hover:${text} transition-colors`}
          >
            {t('admin.common.cancel')}
          </button>
          <button
            disabled={!canDelete || loading}
            onClick={async () => {
              setLoading(true);
              try {
                await onConfirm();
                onClose();
              } catch (error) {
                console.error("Delete failed:", error);
              } finally {
                setLoading(false);
              }
            }}
            className={`
              flex items-center gap-2 px-6 py-2 rounded-lg text-xs font-bold text-white transition-all
              ${canDelete 
                ? 'bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/20 active:scale-95' 
                : 'bg-slate-400 cursor-not-allowed opacity-50'}
            `}
          >
            {loading ? <Loader2 size={14} className="animate-spin" /> : <Trash2 size={14} />}
            {t('admin.common.delete')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminConfirmDeleteModal;
