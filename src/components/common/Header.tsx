'use client';

import React, { useState } from 'react';
import { Nav, Navbar, Drawer } from 'rsuite';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { mockData } from '@/data/mockData';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const { t, i18n } = useTranslation();
  const pathname = usePathname();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const menuItems = [
    { label: t('nav.services'), href: '/#services' },
    { label: t('nav.portfolio'), href: '/#portfolio' },
    { label: t('nav.team'), href: '/#team' },
    { label: t('nav.about'), href: '/#about' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Only smooth scroll if we are on the home page
    if (pathname === '/' && href.startsWith('/#')) {
      e.preventDefault();
      const id = href.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setMobileOpen(false);
        // Optional: Update URL hash without reload
        window.history.pushState(null, '', href);
      }
    }
    // If not on home page, allow default Link behavior to /#section
  };

  return (
    <>
      <motion.header 
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled || mobileOpen ? 'bg-bg-dark/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}
      >
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <Navbar appearance="subtle" className="bg-transparent! flex items-center">
            <div className="flex-1">
              <Navbar.Brand as={Link} href="/" className="p-0!">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-center gap-2 lg:gap-3"
                >
                  {/* Logo */}
                    <motion.div 
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 lg:w-14 lg:h-14 flex items-center justify-center relative"
                    >
                      <Image 
                        src="/images/logo-05-none-text-removebg-preview.png" 
                        alt="Logo" 
                        width={48}
                        height={48}
                        className="object-contain filter drop-shadow-[0_0_14px_rgba(255,255,255,0.7)]"
                        priority
                        fetchPriority="high"
                      />
                    </motion.div>

                  {/* Brand Text */}
                  <div className="leading-none hidden sm:block flex-shrink-0 whitespace-nowrap">
                    {/* Brand Name */}
                    <div className="font-['Orbitron',sans-serif] font-bold text-xl lg:text-2xl tracking-tighter">
                      <span className="text-[#4FA3D1] ">LUCID</span>
                      <span className="text-[#F7941D]"> TECHNOLOGY</span>
                    </div>
                    {/* Tagline */}
                    <div className="font-['Orbitron',sans-serif] font-bold uppercase tracking-[0.1em] lg:tracking-[0.2em] text-[10px] lg:text-xs text-[#8DC63F] mt-0.5">
                      MAKE DIGITAL TOGETHER
                    </div>
                  </div>

                </motion.div>
              </Navbar.Brand>

            </div>
            
            <div className="hidden md:flex justify-center flex-2">
              <Nav className="flex items-center text-lg">
                <Nav.Item suppressHydrationWarning as={Link} href="/#services" onClick={(e: any) => handleScroll(e, '/#services')}>{t('nav.services')}</Nav.Item>
                <Nav.Item suppressHydrationWarning as={Link} href="/#portfolio" onClick={(e: any) => handleScroll(e, '/#portfolio')}>{t('nav.portfolio')}</Nav.Item>
                <Nav.Item suppressHydrationWarning as={Link} href="/#team" onClick={(e: any) => handleScroll(e, '/#team')}>{t('nav.team')}</Nav.Item>
                <Nav.Item suppressHydrationWarning as={Link} href="/#about" onClick={(e: any) => handleScroll(e, '/#about')}>{t('nav.about')}</Nav.Item>               
              </Nav>
            </div>
            
            <div className="flex-1 flex justify-end items-center gap-4">
              <div className="hidden md:flex items-center gap-4">
                <LanguageSwitcher />
                <Link href="/contact" className="rs-btn rs-btn-primary rs-btn-md font-bold px-6 rounded-full transition-transform active:scale-95">
                  {t('nav.contact')}
                </Link>
              </div>
              <button 
                className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </Navbar>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <Drawer 
        placement="right" 
        open={mobileOpen} 
        onClose={() => setMobileOpen(false)} 
        className="bg-bg-dark! text-white! md:hidden"
        size="full"
      >
        <Drawer.Header className="border-b border-white/5! p-6!">
          <Drawer.Title className="text-white! font-display font-bold">{t('nav.menu')}</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body className="p-6! bg-bg-dark">
          <div className="flex flex-col gap-6 mt-8">
            <div className="flex justify-between items-center mb-4">
               <span className="text-text-muted text-sm font-bold uppercase tracking-widest">Select Language</span>
               <LanguageSwitcher />
            </div>
            {menuItems.map((item) => (
              <Link 
                key={item.label} 
                href={item.href} 
                className="text-2xl font-display font-medium text-text-muted hover:text-primary transition-colors"
                onClick={(e) => handleScroll(e, item.href)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-8 pt-8 border-t border-white/5">
              <Link 
                href="/contact" 
                className="rs-btn rs-btn-primary rs-btn-lg w-full font-bold rounded-xl"
                onClick={() => setMobileOpen(false)}
              >
                {t('nav.contact')}
              </Link>
            </div>
          </div>
        </Drawer.Body>
      </Drawer>

      {/* Scroll To Top Button */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            key="scroll-top"
            initial={{ opacity: 0, scale: 0.5, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 30 }}
            transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
            className="fixed bottom-2 right-5 z-50 w-14 h-14 flex items-center justify-center rounded-full"
          >
            {/* Pulsing glow ring with 3-color mix - uses rounded-full and blur */}
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.2, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full blur-lg"
              style={{
                backgroundImage: 'linear-gradient(135deg, #4FA3D1, #8DC63F, #F7941D)',
              }}
            />

            {/* Button Container - ensure circularity with overflow-hidden */}
            <motion.button
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.88 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="relative rounded-full shadow-2xl flex items-center justify-center group overflow-hidden border border-white/10"
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '9999px',        // ← force override mọi CSS khác
                backgroundImage: 'linear-gradient(135deg, #4FA3D1 0%, #8DC63F 50%, #F7941D 100%)',
              }}
              aria-label="Scroll to top"
            >
              {/* Shine overlay on hover */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300 rounded-full" />

              {/* Arrow icon */}
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="relative z-10"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <path d="M12 19V5M5 12l7-7 7 7"/>
              </motion.svg>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
