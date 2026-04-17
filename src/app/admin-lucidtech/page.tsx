"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { 
  Users, 
  MousePointer2, 
  BarChart3, 
  Globe, 
  ArrowUpRight,
  FileText,
  ChevronRight,
  Loader2
} from 'lucide-react';
import { useAdminTheme } from './layout';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';

interface DashboardStats {
  totalVisits: number;
  activeUsers: number;
  contentItems: number;
  languages: number;
}

export default function AdminDashboardPage() {
  const { isDark } = useAdminTheme();
  const { t } = useTranslation();
  const router = useRouter();
  
  const [data, setData] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch('/api/admin/dashboard/summary');
        const d = await res.json();
        setData(d);
      } catch (e) {
        console.error("Failed to fetch dashboard stats:", e);
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  const stats = useMemo(() => [
    { name: t('admin.dashboard.stats.visits'),   value: data?.totalVisits.toLocaleString() ?? '0', change: '+12.5%', icon: MousePointer2, color: 'text-blue-400',    iconBg: isDark ? 'bg-blue-900/20'    : 'bg-blue-50'    },
    { name: t('admin.dashboard.stats.users'),    value: data?.activeUsers.toLocaleString() ?? '0', change: '+5.2%',  icon: Users,         color: 'text-emerald-400', iconBg: isDark ? 'bg-emerald-900/20' : 'bg-emerald-50' },
    { name: t('admin.dashboard.stats.content'),  value: data?.contentItems.toLocaleString() ?? '0', change: '+2',     icon: BarChart3,      color: 'text-orange-400', iconBg: isDark ? 'bg-orange-900/20'  : 'bg-orange-50'  },
    { name: t('admin.dashboard.stats.languages'),value: data?.languages.toLocaleString() ?? '2', change: 'En/Vn',  icon: Globe,          color: 'text-purple-400', iconBg: isDark ? 'bg-purple-900/20'  : 'bg-purple-50'  },
  ], [data, isDark, t]);

  // Style tokens based on theme
  const headingColor   = isDark ? 'text-white'     : 'text-slate-900';
  const subText        = isDark ? 'text-slate-500'  : 'text-slate-400';
  const cardBg         = isDark ? 'bg-[#030816] border-slate-800 hover:border-blue-500/50' : 'bg-white border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-md';
  const statLabel      = isDark ? 'text-slate-500'  : 'text-slate-400';
  const badgeBg        = isDark ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-500';
  const activityHover  = isDark ? 'hover:bg-slate-800/20 hover:border-slate-700' : 'hover:bg-slate-50 hover:border-slate-200';
  const activityIconBg = isDark ? 'bg-slate-900' : 'bg-blue-50';
  const activityTitle  = isDark ? 'text-white'    : 'text-slate-800';
  const activityMeta   = isDark ? 'text-slate-500' : 'text-slate-400';
  const chevronColor   = isDark ? 'text-slate-600' : 'text-slate-300';
  const qaBtn          = isDark
    ? 'bg-slate-900/50 border-slate-800 hover:border-blue-500 hover:bg-blue-500/5 text-slate-300 hover:text-white'
    : 'bg-slate-50 border-slate-200 hover:border-blue-400 hover:bg-blue-50 text-slate-600 hover:text-blue-700';

  const quickActions = [
    { label: t('admin.dashboard.quickActions.hero'), href: '/admin-lucidtech/content' },
    { label: t('admin.dashboard.quickActions.addService'), href: '/admin-lucidtech/services' },
    { label: t('admin.dashboard.quickActions.refreshTeam'), href: '/admin-lucidtech/team' },
    { label: t('admin.dashboard.quickActions.backup'), href: '/admin-lucidtech/accounts' },
  ];

  return (
    <div className="space-y-8 px-6 py-6 transition-colors duration-300">

      {/* Page Header */}
      <div className="flex items-end justify-between">
        <div className="text-right pb-1">
          <div className={`${subText} text-sm`}>{t('admin.dashboard.lastUpdate')}: {new Date().toLocaleDateString('vi-VN', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className={`border p-6 rounded-2xl transition-all duration-200 hover:-translate-y-1 group ${cardBg}`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl ${stat.iconBg} ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-blue-500/10 text-blue-500' : badgeBg}`}>
                {stat.change}
              </span>
            </div>
            <div className={`${statLabel} text-xs font-medium uppercase tracking-wider mb-1`}>{stat.name}</div>
            <div className={`text-2xl font-bold ${headingColor}`}>
              {loading ? <Loader2 size={24} className="animate-spin opacity-20" /> : stat.value}
            </div>
          </div>
        ))}
      </div>

      {/* Panels Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Recent Activity */}
        <div className={`lg:col-span-2 border rounded-3xl p-8 transition-colors duration-300 ${cardBg}`}>
          <div className="flex items-center justify-between mb-8">
            <div className={`text-xl font-bold ${headingColor}`}>{t('admin.dashboard.activity.title')}</div>
            <button 
              onClick={() => router.push('/admin-lucidtech/portfolio')}
              className="text-blue-500 text-sm font-medium hover:underline flex items-center gap-1 group"
            >
              {t('admin.dashboard.activity.viewAll')}
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          <div className="space-y-4">
            {[
              { title: 'PetroPoint TMS content updated',    meta: 'Modified by Henry • 2 hours ago', href: '/admin-lucidtech/portfolio' },
              { title: 'New portfolio item added (BuyAWG)', meta: 'Modified by Sarah • 5 hours ago',  href: '/admin-lucidtech/portfolio' },
              { title: 'Team Member bio refreshed',         meta: 'Modified by Leo • 1 day ago',     href: '/admin-lucidtech/team'      },
            ].map((item, i) => (
              <div
                key={i}
                onClick={() => router.push(item.href)}
                className={`flex items-center gap-4 p-4 rounded-2xl transition-all cursor-pointer border border-transparent ${activityHover}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-blue-500 ${activityIconBg}`}>
                  <FileText size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`text-sm font-semibold ${activityTitle} truncate`}>{item.title}</div>
                  <div className={`text-xs ${activityMeta}`}>{item.meta}</div>
                </div>
                <div className={chevronColor}>
                  <ChevronRight size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className={`border rounded-3xl p-8 transition-colors duration-300 ${cardBg}`}>
          <div className={`text-xl font-bold ${headingColor} mb-6`}>{t('admin.dashboard.quickActions.title')}</div>
          <div className="space-y-3">
            {quickActions.map((action) => (
              <button
                key={action.label}
                onClick={() => router.push(action.href)}
                className={`w-full text-left p-4 rounded-2xl border transition-all text-sm font-medium ${qaBtn}`}
              >
                {action.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
