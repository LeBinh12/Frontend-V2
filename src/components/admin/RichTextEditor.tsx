"use client";

import React, { useMemo } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill-new/dist/quill.snow.css';

interface RichTextEditorProps {
  value: string;
  onChange: (content: string) => void;
  label?: string;
  isDark?: boolean;
  placeholder?: string;
}

const ReactQuill = dynamic(() => import('react-quill-new'), { 
  ssr: false,
  loading: () => <div className="h-40 w-full animate-pulse bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-xs text-slate-400">Loading editor...</div>
});

export default function RichTextEditor({ value, onChange, label, isDark, placeholder }: RichTextEditorProps) {

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ color: [] }, { background: [] }],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet',
    'color', 'background',
    'link', 'image',
  ];

  const borderColor = isDark ? '#1e293b' : '#e2e8f0';
  const labelColor = isDark ? '#94a3b8' : '#64748b';

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: labelColor }}>
          {label}
        </label>
      )}
      <div 
        className={`quill-container ${isDark ? 'dark-editor' : ''}`}
        style={{
          border: `1px solid ${borderColor}`,
          borderRadius: '8px',
          overflow: 'hidden',
          background: isDark ? '#0f172a' : '#fff'
        }}
      >
        <style jsx global>{`
          .dark-editor .ql-toolbar {
            background: #1e293b;
            border-color: #334155 !important;
          }
          .dark-editor .ql-container {
            border-color: #334155 !important;
            color: #e2e8f0;
            background: #0f172a;
            font-size: 13px;
          }
          .dark-editor .ql-stroke {
            stroke: #94a3b8 !important;
          }
          .dark-editor .ql-fill {
            fill: #94a3b8 !important;
          }
          .dark-editor .ql-picker {
            color: #94a3b8 !important;
          }
          .dark-editor .ql-picker-options {
            background: #1e293b !important;
            border-color: #334155 !important;
          }
          .quill-container .ql-editor {
            min-height: 200px;
            max-height: 500px;
            overflow-y: auto;
          }
           /* Word-like image experience */
          .quill-container .ql-editor img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
            margin: 10px 0;
          }
        `}</style>
        <ReactQuill
          theme="snow"
          value={value}
          onChange={onChange}
          modules={modules}
          formats={formats}
          placeholder={placeholder || "Start typing project details..."}
        />
      </div>
    </div>
  );
}
