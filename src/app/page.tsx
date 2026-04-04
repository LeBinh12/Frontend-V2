'use client';

import Header from '@/components/common/Header';
import Hero from '@/components/sections/Hero';
import dynamic from 'next/dynamic';
import SmoothScroll from '@/components/common/SmoothScroll';

// GlobalScene (Three.js) - client only, no SSR
const GlobalScene = dynamic(() => import('@/components/canvas/GlobalScene'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-bg-dark -z-10" />,
});

// Below-the-fold sections - lazy loaded for better FCP/LCP
const Overview = dynamic(() => import('@/components/sections/Overview'));
const Services = dynamic(() => import('@/components/sections/Services'));
const OurTeam = dynamic(() => import('@/components/sections/OurTeam'));
const Portfolio = dynamic(() => import('@/components/sections/Portfolio'));
const Technologies = dynamic(() => import('@/components/sections/Technologies'));
const FooterCopy = dynamic(() => import('@/components/common/Footer-copy'));

export default function Home() {
  return (
    <SmoothScroll>
      <div className="flex flex-col min-h-screen w-full">
        <GlobalScene />
        <Header />
        <main className="flex-grow w-full overflow-x-hidden">
          <Hero />
          <Overview />
          <Services />
          <OurTeam />
          <Portfolio />
          <Technologies />
        </main>
        <FooterCopy />
      </div>
    </SmoothScroll>
  );
}
