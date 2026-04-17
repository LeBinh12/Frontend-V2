'use client';

import React, { useState, useRef, useId, useImperativeHandle, forwardRef } from 'react';
import { Upload, X, CheckCircle2, AlertCircle, Loader2, Image as ImageIcon } from 'lucide-react';

interface ImageUploaderProps {
  value: string;
  onChange: (path: string) => void;
  label?: string;
  isDark: boolean;
  subDir?: string;
  placeholder?: string;
  id?: string;
  hideTrigger?: boolean;
}

/** Public API exposed via ref for parent to call before saving */
export interface ImageUploaderRef {
  /** True if user selected a file but hasn't uploaded it yet */
  hasPendingFile: boolean;
  /**
   * Upload the pending file (if any) before parent saves.
   * Returns:
   *  - uploaded path (string)  → success, use this as image value
   *  - 'NO_PENDING'            → no file was pending, proceed as normal
   *  - null                   → upload failed or user cancelled overwrite
   */
  uploadIfPending: () => Promise<string | 'NO_PENDING' | null>;
}

const ImageUploader = forwardRef<ImageUploaderRef, ImageUploaderProps>((props, ref) => {
  const { value, onChange, label, isDark, subDir, placeholder = "/images/...", id: externalId, hideTrigger = false } = props;

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [showOverwriteConfirm, setShowOverwriteConfirm] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const generatedId = useId();
  const inputId = externalId || generatedId;

  // Keep refs so they're always fresh inside closures / useImperativeHandle
  const selectedFileRef = useRef<File | null>(null);
  const pendingResolveRef = useRef<((result: string | 'NO_PENDING' | null) => void) | null>(null);

  React.useEffect(() => {
    selectedFileRef.current = selectedFile;
  }, [selectedFile]);

  // ─── Core upload helper ────────────────────────────────────────────────────
  const doUpload = async (file: File, overwrite: boolean): Promise<string | 'CONFLICT'> => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('overwrite', overwrite.toString());
    if (subDir) formData.append('subDir', subDir);

    const response = await fetch('/api/upload', { method: 'POST', body: formData });
    const data = await response.json();

    if (response.status === 409 && data.code === 'FILE_EXISTS') return 'CONFLICT';
    if (!response.ok) throw new Error(data.error || `Lỗi ${response.status}`);
    return data.path as string;
  };

  // ─── Upload logic (shared by button click and auto-upload-on-save) ─────────
  const runUpload = async (file: File, overwrite: boolean) => {
    setUploading(true);
    setError(null);

    try {
      const result = await doUpload(file, overwrite);

      if (result === 'CONFLICT') {
        setShowOverwriteConfirm(true);
        setUploading(false);
        // Promise is parked — will be resolved by overwrite confirm/cancel
        return;
      }

      // ✅ Success
      onChange(result);
      setSelectedFile(null);
      selectedFileRef.current = null;
      setShowOverwriteConfirm(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);

      if (pendingResolveRef.current) {
        pendingResolveRef.current(result);
        pendingResolveRef.current = null;
      }
    } catch (err: any) {
      const msg = err.message || 'Tải ảnh thất bại';
      setError(msg);
      if (pendingResolveRef.current) {
        pendingResolveRef.current(null);
        pendingResolveRef.current = null;
      }
    } finally {
      setUploading(false);
    }
  };

  // ─── Manual upload button ──────────────────────────────────────────────────
  const handleManualUpload = () => {
    if (selectedFile) runUpload(selectedFile, false);
  };

  // ─── Overwrite dialog handlers ─────────────────────────────────────────────
  const handleOverwriteConfirm = async () => {
    setShowOverwriteConfirm(false);
    const file = selectedFileRef.current;
    if (file) await runUpload(file, true);
  };

  const handleOverwriteCancel = () => {
    setShowOverwriteConfirm(false);
    if (pendingResolveRef.current) {
      pendingResolveRef.current(null); // abort parent save
      pendingResolveRef.current = null;
    }
  };

  // ─── Expose API to parent ──────────────────────────────────────────────────
  useImperativeHandle(ref, () => ({
    get hasPendingFile() {
      return selectedFileRef.current !== null;
    },
    uploadIfPending(): Promise<string | 'NO_PENDING' | null> {
      const file = selectedFileRef.current;
      if (!file) return Promise.resolve('NO_PENDING');

      return new Promise((resolve) => {
        pendingResolveRef.current = resolve;
        runUpload(file, false);
      });
    },
  }));

  // ─── Styles ────────────────────────────────────────────────────────────────
  const border = isDark ? '#1e293b' : '#e2e8f0';
  const text = isDark ? '#e2e8f0' : '#1e293b';
  const mutedText = isDark ? '#94a3b8' : '#64748b';
  const inputBg = isDark ? '#1e293b' : '#f8fafc';
  const cardBg = isDark ? '#0f172a' : '#ffffff';

  // ─── Render ────────────────────────────────────────────────────────────────
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 4 }}>
      {label && !hideTrigger && (
        <span style={{ fontSize: 11, fontWeight: 600, color: mutedText, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {label}
        </span>
      )}

      {/* URL Input + Choose button */}
      {!hideTrigger ? (
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <input
              style={{
                background: inputBg, border: `1px solid ${border}`, borderRadius: 4,
                padding: '6px 10px', paddingRight: value ? '32px' : '10px',
                fontSize: 12, color: text, outline: 'none', width: '100%', boxSizing: 'border-box'
              }}
              value={value}
              placeholder={placeholder}
              onChange={(e) => onChange(e.target.value)}
            />
            {(value || success) && (
              <div style={{ position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)', color: '#22c55e' }}>
                <CheckCircle2 size={12} />
              </div>
            )}
          </div>

          {/* label-based file picker — most browser-compatible approach */}
          <label
            htmlFor={inputId}
            style={{
              padding: '6px 12px', fontSize: 11, fontWeight: 700, borderRadius: 4,
              cursor: 'pointer', background: isDark ? '#334155' : '#f1f5f9',
              border: `1px solid ${border}`, color: text,
              display: 'flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap',
              userSelect: 'none', flexShrink: 0
            }}
          >
            <ImageIcon size={12} /> Chọn ảnh
          </label>
        </div>
      ) : null}

      <input
        id={inputId}
        type="file"
        style={{ display: 'none' }}
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) { setSelectedFile(file); setError(null); setSuccess(false); }
          e.target.value = ''; // reset so same file can be re-selected
        }}
      />

      {/* Pending file preview */}
      {selectedFile && (
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '6px 10px',
          background: isDark ? 'rgba(59,130,246,0.1)' : 'rgba(59,130,246,0.05)',
          borderRadius: 4, border: '1px dashed #3b82f6'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, overflow: 'hidden', minWidth: 0 }}>
            <Upload size={12} color="#3b82f6" style={{ flexShrink: 0 }} />
            <span style={{ fontSize: 11, color: text, textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
              {selectedFile.name}
              <span style={{ color: mutedText }}> ({(selectedFile.size / 1024).toFixed(1)} KB)</span>
            </span>
          </div>
          <div style={{ display: 'flex', gap: 6, flexShrink: 0, marginLeft: 8 }}>
            <button type="button" onClick={() => setSelectedFile(null)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ef4444', padding: 2, display: 'flex', alignItems: 'center' }}>
              <X size={14} />
            </button>
            <button type="button" onClick={handleManualUpload} disabled={uploading}
              style={{
                background: uploading ? '#6b7280' : '#3b82f6', color: '#fff', border: 'none',
                padding: '4px 10px', borderRadius: 3, fontSize: 10, fontWeight: 700,
                cursor: uploading ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', gap: 4
              }}>
              {uploading
                ? <><Loader2 size={10} style={{ animation: 'spin 1s linear infinite' }} /> Đang tải...</>
                : <><Upload size={10} /> Tải lên</>}
            </button>
          </div>
        </div>
      )}

      {/* Error */}
      {error && (
        <div style={{
          display: 'flex', alignItems: 'flex-start', gap: 6, color: '#ef4444',
          fontSize: 11, marginTop: 2, background: 'rgba(239,68,68,0.06)',
          padding: '6px 8px', borderRadius: 4, border: '1px solid rgba(239,68,68,0.2)'
        }}>
          <AlertCircle size={12} style={{ flexShrink: 0, marginTop: 1 }} />
          <span>{error}</span>
        </div>
      )}

      {/* Success */}
      {success && !selectedFile && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#22c55e', fontSize: 11, marginTop: 2 }}>
          <CheckCircle2 size={12} /> Tải ảnh thành công!
        </div>
      )}

      {/* Overwrite confirmation */}
      {showOverwriteConfirm && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 10001, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.6)' }}>
          <div style={{ background: cardBg, border: `1px solid ${border}`, borderRadius: 10, padding: 24, width: 360, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{ background: 'rgba(234,179,8,0.1)', padding: 8, borderRadius: '50%', flexShrink: 0 }}>
                <AlertCircle size={20} color="#eab308" />
              </div>
              <h4 style={{ margin: 0, color: text, fontSize: 14, fontWeight: 700 }}>Ảnh đã tồn tại</h4>
            </div>
            <p style={{ fontSize: 12, color: mutedText, marginBottom: 20, lineHeight: 1.6 }}>
              Tệp <strong style={{ color: text }}>{selectedFile?.name}</strong> đã tồn tại trong thư mục.
              Bạn có muốn <strong>ghi đè</strong> ảnh cũ không?
            </p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
              <button type="button" onClick={handleOverwriteCancel}
                style={{ padding: '7px 16px', fontSize: 12, borderRadius: 4, cursor: 'pointer', background: 'transparent', border: `1px solid ${border}`, color: mutedText }}>
                Hủy
              </button>
              <button type="button" onClick={handleOverwriteConfirm} disabled={uploading}
                style={{ padding: '7px 16px', fontSize: 12, borderRadius: 4, cursor: 'pointer', background: '#3b82f6', border: 'none', color: '#fff', fontWeight: 700 }}>
                {uploading ? 'Đang ghi đè...' : 'Ghi đè'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

ImageUploader.displayName = 'ImageUploader';
export default ImageUploader;
