'use client';

import '@/i18n';
import React from 'react';
import { CustomProvider } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { usePathname } from 'next/navigation';
import Preloader from '@/components/common/Preloader';
import CustomCursor from '@/components/common/CustomCursor';
import { useTranslation } from 'react-i18next';
import NextTopLoader from 'nextjs-toploader';

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
    
    if (!savedLang) {
      // 1. Check timezone (Asia/Ho_Chi_Minh is standard for VN)
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz === 'Asia/Ho_Chi_Minh') {
        i18n.changeLanguage('vn');
      } 
      // 2. Fallback to server-detected language (Vercel x-vercel-ip-country)
      else if (detectedLang) {
        i18n.changeLanguage(detectedLang);
      }
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

  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith('/admin') || pathname?.startsWith('/admin-lucidtech');

  return (
    <CustomProvider theme="dark">
      <NextTopLoader 
        color="linear-gradient(to right, #4FA3D1, #8DC63F, #F7941D)"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={false}
        easing="ease"
        speed={200}
        shadow="0 0 10px #4FA3D1,0 0 5px #8DC63F"
      />
      <CustomCursor />
      {!isAdminPage && <Preloader />}
      {children}
    </CustomProvider>
  );
}
