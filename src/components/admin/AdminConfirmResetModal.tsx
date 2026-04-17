"use client";

import React, { useState, useEffect } from 'react';
import { X, Key, CheckCircle2, RotateCcw, Loader2, Clipboard, ClipboardCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface AdminConfirmResetModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => Promise<void>;
  username: string;
  isDark: boolean;
}

const AdminConfirmResetModal = ({
  open,
  onClose,
  onConfirm,
  username,
  isDark
}: AdminConfirmResetModalProps) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (open) {
      setSuccess(false);
      setCopied(false);
    }
  }, [open]);

  if (!open) return null;

  const defaultPassword = "123456";

  const handleCopy = () => {
    navigator.clipboard.writeText(defaultPassword);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Theme styles
  const bg = isDark ? 'bg-[#0f172a]' : 'bg-white';
  const border = isDark ? 'border-slate-800' : 'border-slate-200';
  const accentBorder = isDark ? 'border-amber-900/50' : 'border-amber-200';
  const text = isDark ? 'text-slate-200' : 'text-slate-900';
  const labelText = isDark ? 'text-slate-400' : 'text-slate-500';

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className={`relative ${bg} border-2 ${success ? 'border-emerald-500/50' : accentBorder} rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200`}>
        {/* Header */}
        <div className={`flex items-center justify-between px-5 py-4 border-b ${border}`}>
          <div className="flex items-center gap-3">
            <div className={`p-2 ${success ? 'bg-emerald-500/10' : 'bg-amber-500/10'} rounded-lg`}>
              {success ? (
                <CheckCircle2 size={18} className="text-emerald-500" />
              ) : (
                <RotateCcw size={18} className="text-amber-500" />
              )}
            </div>
            <h3 className={`text-sm font-bold ${success ? 'text-emerald-500' : 'text-amber-500'}`}>
              {success ? "Cấp lại thành công" : "Xác nhận cấp lại mật khẩu"}
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
        {!success ? (
          <div className="p-6 space-y-5">
            <p className={`text-xs leading-relaxed ${labelText}`}>
              Bạn có chắc chắn muốn cấp lại mật khẩu cho tài khoản <span className="font-bold text-blue-400">{username}</span>? 
              Mật khẩu mới sẽ được đặt thành giá trị mặc định bên dưới.
            </p>

            <div className={`${isDark ? 'bg-slate-800/50' : 'bg-amber-50/50'} border ${accentBorder} rounded-lg p-4 flex flex-col items-center gap-2`}>
              <span className={`text-[10px] font-bold uppercase tracking-widest ${labelText}`}>Mật khẩu mặc định</span>
              <span className={`font-mono text-xl font-bold tracking-widest ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>
                {defaultPassword}
              </span>
            </div>
          </div>
        ) : (
          <div className="p-6 space-y-5 text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center">
                <CheckCircle2 size={32} className="text-emerald-500" />
              </div>
              <div>
                <p className={`text-sm font-semibold ${text}`}>Đã cấp lại mật khẩu cho {username}</p>
                <p className={`text-xs mt-1 ${labelText}`}>Hãy cung cấp mật khẩu này cho người dùng</p>
              </div>
            </div>

            <div className={`${isDark ? 'bg-slate-800/50' : 'bg-emerald-50/50'} border border-emerald-500/20 rounded-lg p-4 flex items-center justify-between`}>
              <div className="flex flex-col items-start gap-1">
                <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-500/70">Mật khẩu mới</span>
                <span className={`font-mono text-lg font-bold tracking-widest ${text}`}>{defaultPassword}</span>
              </div>
              <button 
                onClick={handleCopy}
                className={`p-2 rounded-lg transition-all ${copied ? 'bg-emerald-500 text-white' : 'hover:bg-emerald-500/10 text-emerald-500'}`}
              >
                {copied ? <ClipboardCheck size={18} /> : <Clipboard size={18} />}
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className={`flex items-center justify-end gap-3 px-6 py-4 border-t ${border} bg-black/5`}>
          {!success ? (
            <>
              <button
                onClick={onClose}
                className={`px-4 py-2 text-xs font-semibold ${labelText} hover:${text} transition-colors`}
              >
                Hủy bỏ
              </button>
              <button
                disabled={loading}
                onClick={async () => {
                  setLoading(true);
                  try {
                    await onConfirm();
                    setSuccess(true);
                  } catch (error) {
                    console.error("Reset failed:", error);
                  } finally {
                    setLoading(false);
                  }
                }}
                className={`
                  flex items-center gap-2 px-6 py-2 rounded-lg text-xs font-bold text-white transition-all
                  bg-amber-500 hover:bg-amber-600 shadow-lg shadow-amber-500/20 active:scale-95
                  disabled:opacity-50 disabled:cursor-not-allowed
                `}
              >
                {loading ? <Loader2 size={14} className="animate-spin" /> : <RotateCcw size={14} />}
                Cấp lại ngay
              </button>
            </>
          ) : (
            <button
              onClick={onClose}
              className={`w-full py-2.5 rounded-lg text-xs font-bold text-white transition-all bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/20 active:scale-95`}
            >
              Hoàn tất
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminConfirmResetModal;
