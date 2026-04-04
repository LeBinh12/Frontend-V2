'use client';

import '@/i18n';
import React from 'react';
import { CustomProvider } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import Preloader from '@/components/common/Preloader';
import CustomCursor from '@/components/common/CustomCursor';
import { useTranslation } from 'react-i18next';

export default function RootClientLayout({
  children,
  detectedLang,
}: {
  children: React.ReactNode;
  detectedLang: string;
}) {
  const { i18n } = useTranslation();

  // Sync server-detected language with client-side i18n
  React.useEffect(() => {
    const savedLang = localStorage.getItem('lang') || localStorage.getItem('i18nextLng');
    if (!savedLang && detectedLang) {
      i18n.changeLanguage(detectedLang);
    }

    // Fix Back/Forward Cache (BFCache)
    // Ensure the page doesn't show stale/broken transition states on back navigation
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        // Option: window.location.reload(); 
        // Or simply force re-render/re-fetch if needed. 
        // Reload is safest for BFCache issues in heavy JS apps.
        window.location.reload();
      }
    };
    window.addEventListener('pageshow', handlePageShow);
    return () => window.removeEventListener('pageshow', handlePageShow);
  }, [detectedLang, i18n]);

  return (
    <CustomProvider theme="dark">
      <CustomCursor />
      <Preloader />
      {children}
    </CustomProvider>
  );
}
