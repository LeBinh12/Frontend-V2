"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { 
  LayoutDashboard, 
  FileText, 
  Briefcase, 
  Image as ImageIcon, 
  Users, 
  Settings, 
  LogOut,
  UserCircle,
  BarChart2,
  Cpu,
  Building2,
  ArrowUpRight,
  Globe,
  MessageSquare,
} from 'lucide-react';

const navItems = [
  { name: 'dashboard',      href: '/admin-lucidtech',                 icon: LayoutDashboard },
    { name: 'contacts',       href: '/admin-lucidtech/contacts',        icon: MessageSquare },
  { name: 'content',        href: '/admin-lucidtech/content',         icon: FileText },
  { name: 'services',       href: '/admin-lucidtech/services',        icon: Briefcase },
  { name: 'portfolio',      href: '/admin-lucidtech/portfolio',       icon: ImageIcon },
  { name: 'team',           href: '/admin-lucidtech/team',            icon: Users },
  { name: 'stats',          href: '/admin-lucidtech/stats',           icon: BarChart2 },
  { name: 'tech',           href: '/admin-lucidtech/technologies',    icon: Cpu },
  { name: 'company',        href: '/admin-lucidtech/company',         icon: Building2 },
  { name: 'accounts',       href: '/admin-lucidtech/accounts',        icon: Settings },
];

interface SidebarProps {
  isDark: boolean;
}

const Sidebar = ({ isDark }: SidebarProps) => {
  const { t } = useTranslation();
  const pathname = usePathname();
  const router   = useRouter();

  const handleSignOut = () => {
    localStorage.removeItem('adminLoggedIn');
    router.push('/admin/login');
  };

  // Theme-aware style tokens
  const bg         = isDark ? 'bg-[#030816] border-slate-800'   : 'bg-slate-50 border-slate-200';
  const headerBdr  = isDark ? 'border-slate-800/50'             : 'border-slate-200';
  const labelColor = isDark ? 'text-slate-500'                  : '!text-black';
  const footerBg   = isDark ? 'border-slate-800 bg-[#020617]/50': 'border-slate-100 bg-slate-100/50';
  const userText   = isDark ? 'text-white'                      : '!text-black';
  const avatarBg   = isDark ? 'bg-slate-800 border-slate-700 text-slate-400' : 'bg-white border-slate-200 text-slate-500';

  const activeClass    = isDark
    ? 'bg-blue-500/10 !text-blue-500 font-semibold border-blue-500'
    : 'bg-blue-50 !text-black font-semibold border-blue-600';
  const inactiveClass  = isDark
    ? 'text-slate-400 hover:bg-slate-800/60 hover:text-white border-transparent hover:border-blue-500/50'
    : '!text-black hover:bg-white hover:text-black border-transparent hover:border-blue-600/50';
  const activeIconCls  = isDark ? 'text-blue-400' : 'text-blue-600';
  const inactiveIconCls = isDark ? 'text-slate-500 group-hover:text-slate-300' : 'text-black group-hover:text-black';

  return (
    <aside className={`w-64 h-full border-r flex flex-col z-50 transition-colors duration-300 ${bg}`}>

      {/* Sidebar Header - Logo */}
      <div className={`p-8 border-b ${headerBdr}`}>
        <Link href="/admin-lucidtech" className="block focus:outline-none">
          <Image
            src="/images/logo-none-bg.png"
            alt="Lucid Technology Logo"
            width={160}
            height={40}
            className="w-auto h-10 object-contain hover:opacity-80 transition-opacity"
            priority
          />
        </Link>
      </div>

      {/* Sidebar Navigation */}
      <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
        <p className={`px-4 text-[10px] font-bold ${labelColor} uppercase tracking-widest mb-4`}>
          {t('admin.menu.systemManagement')}
        </p>

        {navItems.map((item) => {
          const isActive = pathname === item.href || 
                           (item.href !== '/admin-lucidtech' && pathname?.startsWith(item.href));
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex items-center justify-between px-4 py-3 rounded-sm transition-all duration-200 group border-b-2
                ${isActive ? activeClass : inactiveClass}
              `}
            >
              <div className="flex items-center gap-3">
                <Icon 
                  size={20} 
                  className={isActive ? activeIconCls : inactiveIconCls} 
                />
                <span className="text-sm">{t(`admin.menu.${item.name}`)}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Sidebar Footer - User Info & LogOut */}
      <div className={`p-4 border-t ${footerBg} transition-colors duration-300 space-y-2`}>
        <a 
          href="/" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all group ${isDark ? 'text-blue-400 hover:bg-blue-500/10' : 'text-blue-600 hover:bg-blue-50'}`}
        >
          <Globe size={18} className={isDark ? 'text-blue-400' : 'text-blue-600'} />
          <span className="text-sm font-semibold">{t('admin.menu.viewSite')}</span>
          <ArrowUpRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>

        <div className="flex items-center gap-3 px-4 py-3 mb-1">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${avatarBg}`}>
            <UserCircle size={24} />
          </div>
          <div className="flex-1 min-w-0">
            <p className={`text-sm font-semibold ${userText} truncate`}>System Admin</p>
            <p className={`text-[10px] ${labelColor} uppercase tracking-wider`}>{t('admin.menu.userRole')}</p>
          </div>
        </div>

        <button
          onClick={handleSignOut}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${isDark ? 'text-slate-400 hover:text-red-500 hover:bg-red-50/10' : 'text-black hover:text-red-600 hover:bg-red-50'}`}
        >
          <LogOut size={20} className={`${isDark ? 'text-slate-400' : 'text-black'} group-hover:text-red-500 transition-colors`} />
          <span className="text-sm font-medium">{t('admin.header.signOut')}</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
