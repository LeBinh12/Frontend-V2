'use client';

import React, { useState } from 'react';
import { Grid, Row, Col } from 'rsuite';
import { mockData } from '@/data/mockData';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

const Overview = () => {
  const { t } = useTranslation();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [0, 50]); 
  const yContent = useTransform(scrollYProgress, [0, 1], [25, -25]);

  return (
    <section ref={ref} className="py-24 bg-bg-dark overflow-hidden" id="about">
      <div className="container mx-auto px-4 sm:px-6">
        <Grid fluid className="p-0!">
          <Row gutter={60} className="items-center">
            <Col xs={24} lg={12} className="mb-8 sm:mb-10 lg:mb-0">
              <motion.div 
                style={{ 
                  y: yContent, 
                  willChange:'transform',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transformStyle: 'preserve-3d'
                }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.3, once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative h-full"
              >
                <div className="h-full flex flex-col gap-6 p-6 sm:p-10 rounded-2xl bg-bg-card border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden group">
                  {/* Decorative background gradient */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl -ml-24 -mb-24 pointer-events-none" />
                  
                  {/* Vision Section */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-4 flex items-center gap-3">
                       <span className="w-10 h-[2px] bg-primary rounded-full"></span>
                       {t('overview.vision.title')}
                    </h3>
                    <p className="text-text-muted italic leading-relaxed text-sm sm:text-base md:text-lg">
                      {t('overview.vision.description')}
                    </p>
                  </div>

                  
                  {/* Guidelines Section */}
                  <div className="flex-grow py-4">
                    <h3 className="text-lg font-display font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-3">
                      <span className="w-10 h-[2px] bg-primary rounded-full"></span>
                      {t('overview.guidelines.title')}
                    </h3>
                    <ul className="space-y-5">
                      {(t('overview.guidelines.items', { returnObjects: true }) as any[]).map((item: any, idx: number) => (
                        <li 
                          key={idx}
                          onMouseEnter={() => setHoveredIdx(idx)}
                          onMouseLeave={() => setHoveredIdx(null)}
                          className="pl-4 transition-all duration-300"
                        >
                          <div className="flex items-start gap-4 group/item py-1">
                            <span className={`
                              flex-shrink-0 mt-2 w-2 h-2 rounded-full transition-all duration-300
                              ${hoveredIdx === idx ? 'bg-primary shadow-[0_0_12px_rgba(0,194,255,0.4)]' : 'bg-primary/40'}
                            `}></span>
                            <span className={`
                              text-sm sm:text-base transition-colors duration-300 font-medium
                              ${hoveredIdx === idx ? 'text-white' : 'text-text-muted'}
                            `}>
                              {item.label}
                            </span>
                          </div>
                          <motion.div
                            initial={false}
                            animate={{ 
                              height: hoveredIdx === idx ? 'auto' : 0,
                              opacity: hoveredIdx === idx ? 1 : 0
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden ml-2 pl-4"
                          >
                            <div className="pl-2 py-2 border-l-2 border-primary rounded-l-lg">
                              <p className="text-sm text-text-muted leading-relaxed max-w-[90%] font-light">
                                {item.description}
                              </p>
                            </div>
                          </motion.div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </Col>
            
            <Col xs={24} lg={12}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 md:mb-8 leading-tight">
                  {t('overview.title')} <span className="text-primary">{t('overview.highlight')}</span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-text-muted mb-6 sm:mb-8 leading-relaxed">
                  {t('overview.description')}
                </p>
                
                <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-12">
                  {mockData.company.stats.map((stat, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ amount: 0.3 }}
                      transition={{ delay: 0.1 + i * 0.1, duration: 0.6 }}
                      className="border-l-2 border-primary/30 pl-6"
                    >
                      <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</p>
                      <p className="text-xs sm:text-sm text-text-muted uppercase tracking-widest">{t(`stats.${(stat as any).labelKey}`)}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Col>
          </Row>
        </Grid>
      </div>
    </section>
  );
};

export default Overview;
