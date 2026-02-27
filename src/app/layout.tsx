import { Metadata } from 'next';
import React from 'react';
import './globals.css';
import RootClientLayout from './RootClientLayout';

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RootClientLayout>
      {children}
    </RootClientLayout>
  );
}
