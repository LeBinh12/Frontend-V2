'use client';

import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { mockData } from '@/data/mockData';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Grid, Row, Col, Button, Divider } from 'rsuite';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, CheckCircle2, Target, Lightbulb } from 'lucide-react';
import SmoothScroll from '@/components/common/SmoothScroll';


import { useTranslation } from 'react-i18next';
import FooterCopy from '@/components/common/Footer-copy';
import { useContent } from '@/hooks/useContent';

const CaseStudyPage = () => {
  const { t, i18n } = useTranslation();
  const { id } = useParams();
  const router = useRouter();
  const { content } = useContent();
  const [mounted, setMounted] = React.useState(false);

  // Use window scroll — more stable than a targeted ref in SSR environments
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 0.3], [0, 60]);
  const scaleHero = useTransform(scrollYProgress, [0, 0.3], [1, 1.08]);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Data selection
  const projectsData = content?.portfolio && content.portfolio.length > 0 ? content.portfolio : mockData.portfolio;
  const project = projectsData.find(p => (p as any).key === id || (p as any).id === Number(id));
  const resultsList = t('portfolio.detail.results.list', { returnObjects: true }) as string[] || [];

  // Resolve category label — fall back to database name if translation is missing
  const categoryKey = (project as any)?.categoryKey || '';
  const categoryName = (project as any)?.categoryName || categoryKey;
  const categoryLabel = t(`portfolio.categories.${categoryKey.toLowerCase()}`, { defaultValue: categoryName });

  // Loading or Error States should come after hooks
  if (!mounted) return null;

  return (
    <SmoothScroll>
      <div className="flex flex-col min-h-screen bg-bg-dark">
        <Header />
        
        <main className="flex-grow pt-32 pb-24 overflow-hidden">
          {!project ? (
            <div className="flex flex-col items-center justify-center p-6 text-center">
              <h1 className="text-4xl font-display font-bold mb-4">{t('portfolio.detail.notFound.title')}</h1>
              <p className="text-text-muted mb-8">{t('portfolio.detail.notFound.description')}</p>
              <Link href="/portfolio">
                  <Button appearance="primary" size="lg" className="rounded-full font-bold">{t('portfolio.detail.notFound.backButton')}</Button>
              </Link>
            </div>
          ) : (
            <>
              {/* Navigation & Header */}
              <div className="container mx-auto px-6">
                <button 
                  onClick={() => router.back()} 
                  className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors mb-8 group"
                >
                  <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
                  <span className="font-bold">{t('portfolio.detail.back')}</span>
                </button>

                <motion.div
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transformStyle: 'preserve-3d'
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <span className="text-primary text-sm uppercase font-bold tracking-[0.3em] mb-4 block">{categoryLabel}</span>
                  <h1 className="text-5xl md:text-8xl mb-5 text-white">{project.title}</h1>
                </motion.div>
              </div>

              {/* Hero Image */}
              <div className="w-full relative px-3 z-0">
                <motion.div
                  style={{ 
                    y: yHero, 
                    scale: scaleHero,
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transformStyle: 'preserve-3d'
                  }}
                  className="w-full"
                >
                    <motion.img 
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "circOut" }}
                    src={project.image || "/images/placeholder.jpg"} 
                    alt={project.title}
                    className="w-full aspect-video object-contain rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-dark rounded-3xl mx-6" />
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="container mx-auto px-6 relative z-10 bg-bg-dark pt-20 -mt-20 rounded-t-[3rem]">
                <Grid fluid className="p-0!">
                  <Row gutter={60}>
                    <Col xs={24} lg={16}>
                      {/* Case Study Content from DB */}
                      {(project.contentEn || project.contentVn) ? (
                        <div className="mb-20">
                          <h2 className="text-4xl font-display font-bold mb-10 text-white flex items-center gap-4">
                            <span className="w-8 h-1 bg-primary rounded-full"></span>
                            {t('portfolio.detail.projectDetailHeader', 'Project Case Study')}
                          </h2>
                          <div 
                            className="prose prose-xl prose-invert max-w-none break-words overflow-hidden
                              prose-headings:font-display prose-headings:font-bold prose-headings:text-white
                              prose-p:text-text-muted prose-p:leading-relaxed
                              prose-li:text-text-muted
                              prose-img:rounded-3xl prose-img:shadow-2xl prose-img:border prose-img:border-white/5
                              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                              prose-strong:text-white"
                            dangerouslySetInnerHTML={{ 
                              __html: (i18n.language === 'en' ? (project.contentEn || project.contentVn) : (project.contentVn || project.contentEn)) || '' 
                            }}
                          />
                        </div>
                      ) : (
                        <div className="mb-20">
                          <h2 className="text-3xl font-display font-bold mb-6 flex items-center gap-4 text-white">
                            <Target className="text-primary" /> {t('portfolio.detail.challenge.title')}
                          </h2>
                          <p className="text-xl text-text-muted leading-relaxed">
                            {t('portfolio.detail.challenge.description', { title: project.title })}
                          </p>
                        </div>
                      )}
                    </Col>

                    <Col xs={24} lg={8}>
                      <div className="bg-bg-card border border-white/5 p-8 rounded-3xl sticky top-32">
                        <h4 className="text-sm uppercase tracking-widest text-text-muted mb-6">{t('portfolio.detail.technologies')}</h4>
                        <div className="flex flex-wrap gap-2 mb-10">
                          {(project.technologies || ["Next.js", "Three.js", "Tailwind", "Framer Motion", "WebGL"]).map(tech => (
                            <span key={tech} className="px-4 py-1.5 bg-white/5 rounded-full text-sm text-white border border-white/10">{tech}</span>
                          ))}
                        </div>

                        <Divider className="bg-white/5! mb-8" />
                        
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-xs uppercase tracking-widest text-text-muted mb-2">{t('portfolio.detail.duration')}</h4>
                            <p className="text-white font-bold">
                              {(() => {
                                const dur = (project as any).duration;
                                if (!dur) return t('portfolio.detail.durationValue');
                                const parts = dur.split(' ');
                                if (parts.length === 2) {
                                  const u = parts[1].toLowerCase();
                                  if (['day', 'ngày', 'days'].includes(u)) return `${parts[0]} ${t('portfolio.units.day')}`;
                                  if (['month', 'tháng', 'months'].includes(u)) return `${parts[0]} ${t('portfolio.units.month')}`;
                                  if (['year', 'năm', 'years', 'nằm'].includes(u)) return `${parts[0]} ${t('portfolio.units.year')}`;
                                }
                                return dur;
                              })()}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-xs uppercase tracking-widest text-text-muted mb-2">{t('portfolio.detail.service')}</h4>
                            <div className="flex items-center justify-between mb-3">
                              <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs uppercase font-bold tracking-wider">{categoryLabel}</span>
                            </div>
                          </div>
                        </div>

                        <Link href="/contact">
                          <Button appearance="primary" block size="lg" className="rounded-xl font-bold mt-10">{t('portfolio.detail.startProject')}</Button>
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </Grid>
              </div>
            </>
          )}
        </main>
      
        <FooterCopy />
      </div>
    </SmoothScroll>
  );
};

export default CaseStudyPage;
