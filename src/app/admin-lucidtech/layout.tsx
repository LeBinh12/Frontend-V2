"use client";

import React, { useEffect, useState, createContext, useContext } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Sun, Moon, Globe, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Sidebar from '@/components/admin/Sidebar';
import { AdminAuthProvider } from '@/context/AdminAuthContext';
import PermissionGuard from '@/components/admin/PermissionGuard';

// Theme context to share dark/light mode state
export const ThemeContext = createContext<{
  isDark: boolean;
  toggleTheme: () => void;
}>({ isDark: true, toggleTheme: () => {} });

export const useAdminTheme = () => useContext(ThemeContext);

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    // Restore theme preference
    const savedTheme = localStorage.getItem('adminTheme');
    if (savedTheme === 'light') setIsDark(false);

    // Simulated session check
    const isLoggedIn = localStorage.getItem('adminLoggedIn');
    if (isLoggedIn === 'true') {
      setIsAuthorized(true);
    } else {
      router.push('/admin/login');
    }
  }, [router]);

  const getPageTitle = (path: string) => {
    const titles: Record<string, string> = {
      '/admin-lucidtech': t('admin.menu.dashboard'),
      '/admin-lucidtech/contacts': t('admin.menu.contacts'),
      '/admin-lucidtech/content': t('admin.menu.content'),
      '/admin-lucidtech/services': t('admin.menu.services'),
      '/admin-lucidtech/portfolio': t('admin.menu.portfolio'),
      '/admin-lucidtech/team': t('admin.menu.team'),
      '/admin-lucidtech/stats': t('admin.menu.stats'),
      '/admin-lucidtech/technologies': t('admin.menu.tech'),
      '/admin-lucidtech/company': t('admin.menu.company'),
      '/admin-lucidtech/accounts': t('admin.menu.accounts'),
      '/admin-lucidtech/roles': t('admin.menu.roles'),
      '/admin-lucidtech/modules': t('admin.menu.modules'),
      '/admin-lucidtech/permissions-list': t('admin.menu.permissionsList'),
      '/admin-lucidtech/permissions': t('admin.menu.permissions'),
    };
    return titles[path] || t('admin.menu.dashboard');
  };

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem('adminTheme', next ? 'dark' : 'light');
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
    setLangMenuOpen(false);
  };

  if (!isAuthorized) {
    return (
      <div className="h-screen w-full bg-[#020617] flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const bg         = isDark ? 'bg-[#020617]' : 'bg-slate-100';
  const headerBg   = isDark ? 'bg-[#030816]/30 border-slate-800/50' : 'bg-white/80 border-slate-200';
  const footerBg   = isDark ? 'bg-[#030816]/10 border-slate-800/30' : 'bg-white/40 border-slate-200/60';
  const headerText = isDark ? 'text-slate-500' : 'text-slate-400';
  const contentBg  = isDark ? '' : 'bg-slate-100';

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <AdminAuthProvider>
        <div className={`flex h-screen ${bg} ${isDark ? 'text-white' : 'text-slate-900'} overflow-hidden font-sans transition-colors duration-300`}>

          {/* Sidebar - Fixed width */}
          <Sidebar isDark={isDark} />

          {/* Main Content Area */}
          <main className={`flex-1 flex flex-col min-w-0 overflow-hidden relative ${contentBg}`}>

            {/* Top Header */}
            <header className={`h-12 border-b flex items-center justify-between px-4 ${headerBg} backdrop-blur-sm z-40 transition-colors duration-300`}>
              <div className="flex items-center gap-2">
                <span className={`${headerText} font-medium text-sm`}>{getPageTitle(pathname)}</span>
              </div>
              <div className="flex items-center gap-4">
                {/* Theme Toggle Button */}
                <button
                  onClick={toggleTheme}
                  className={`
                    relative flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold
                    transition-all duration-300 border
                    ${isDark 
                      ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700 hover:border-blue-500/50' 
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 shadow-sm'}
                  `}
                  title="Toggle dark/light mode"
                >
                  {isDark ? (
                    <>
                      <Sun size={14} className="text-amber-400" />
                      <span>{t('admin.header.lightMode')}</span>
                    </>
                  ) : (
                    <>
                      <Moon size={14} className="text-indigo-500" />
                      <span>{t('admin.header.darkMode')}</span>
                    </>
                  )}
                </button>

                {/* Language Selector */}
                <div className="relative">
                  <button
                    onClick={() => setLangMenuOpen(!langMenuOpen)}
                    className={`
                      flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold
                      transition-all duration-300 border
                      ${isDark 
                        ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700' 
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 shadow-sm'}
                    `}
                  >
                    <Globe size={14} className="text-blue-500" />
                    <span>{i18n.language === 'en' ? 'English' : 'Tiếng Việt'}</span>
                  </button>

                  {langMenuOpen && (
                    <div className={`
                      absolute right-0 mt-2 w-40 rounded-xl border shadow-xl z-50 overflow-hidden
                      ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}
                    `}>
                      {[
                        { code: 'vn', label: 'Tiếng Việt' },
                        { code: 'en', label: 'English' }
                      ].map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className={`
                            w-full flex items-center justify-between px-4 py-2.5 text-xs font-medium transition-colors
                            ${isDark ? 'hover:bg-slate-700/50 text-slate-300' : 'hover:bg-slate-50 text-slate-700'}
                            ${i18n.language === lang.code ? (isDark ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600') : ''}
                          `}
                        >
                          {lang.label}
                          {i18n.language === lang.code && <Check size={12} />}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className={`h-8 w-px ${isDark ? 'bg-slate-800' : 'bg-slate-200'} mx-2`} />
                <div className="text-right">
                  <p className={`text-xs font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>{t('admin.header.systemOnline')}</p>
                  <p className="text-[10px] text-blue-500 uppercase font-mono tracking-tighter">{t('admin.header.production')}</p>
                </div>
              </div>
            </header>

            {/* Protected Page Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar transition-colors duration-300">
              <div className="w-full mx-auto animate-in fade-in slide-in-from-bottom-2 duration-500">
                <PermissionGuard>
                  {children}
                </PermissionGuard>
              </div>
            </div>

            {/* Global Footer */}
            <footer className={`h-8 border-t flex items-center px-4 ${footerBg} transition-colors duration-300`}>
              <p className={`text-[10px] ${isDark ? 'text-slate-600' : 'text-slate-400'} uppercase tracking-widest`}>
                © 2026 Lucid Technology. {t('admin.footer.moduleInfo')} v1.0.0
              </p>
            </footer>
          </main>
        </div>
      </AdminAuthProvider>
    </ThemeContext.Provider>
  );
}
