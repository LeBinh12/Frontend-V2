import { Metadata } from 'next';
import React from 'react';
import './globals.css';
import RootClientLayout from './RootClientLayout';
import { Inter, Outfit, Orbitron, Geist, Geist_Mono } from 'next/font/google';
import { headers } from 'next/headers';

// Declare ALL fonts here in the Server Component so Next.js generates <link rel="preload"> in the HTML <head>
const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans', display: 'swap' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', display: 'swap' });
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron', display: 'swap' });

export const metadata: Metadata = {
  title: 'Lucid Technology - Tiên phong trong Biên giới kỹ thuật số',
  description: 'Lucid Technology là công ty công nghệ chuyên về phát triển phần mềm, chuyển đổi số và dịch vụ tư vấn công nghệ. Chúng tôi tập trung xây dựng các hệ thống an toàn, có khả năng mở rộng và chất lượng cao, giúp các doanh nghiệp tối ưu hóa hoạt động và nâng cao lợi thế cạnh tranh trong kỷ nguyên số.',
  keywords: ['software development', 'digital transformation', 'IT consulting', 'Lucid Technology', 'phát triển phần mềm', 'chuyển đổi số'],
  authors: [{ name: 'Lucid Technology Team' }],
  openGraph: {
    title: 'Lucid Technology - Tiên phong trong Biên giới kỹ thuật số',
    description: 'Xây dựng tương lai & Thúc đẩy đổi mới kỹ thuật số với Lucid Technology.',
    url: 'https://lucidtech.vn',
    siteName: 'Lucid Technology',
    images: [
      {
        url: '/images/logo-none.png',
        width: 1200,
        height: 630,
        alt: 'Lucid Technology Logo',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucid Technology - Tiên phong trong Biên giới kỹ thuật số',
    description: 'Xây dựng tương lai & Thúc đẩy đổi mới kỹ thuật số với Lucid Technology.',
    images: ['/images/logo-none.png'],
  },
  icons: {
    icon: '/images/logo-05-none-text-removebg-preview.png',
    apple: '/images/logo-05-none-text-removebg-preview.png',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const country = headersList.get('x-vercel-ip-country');
  const detectedLang = country === 'VN' ? 'vn' : 'en';

  const fontClasses = `${inter.variable} ${outfit.variable} ${orbitron.variable} ${geistSans.variable} ${geistMono.variable} ${geistSans.className}`;

  return (
    <html lang="en" className={fontClasses} suppressHydrationWarning={true}>
      <body className="antialiased font-sans">
        <RootClientLayout detectedLang={detectedLang}>
          {children}
        </RootClientLayout>
      </body>
    </html>
  );
}
