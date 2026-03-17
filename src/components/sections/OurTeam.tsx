'use client';

import React from 'react';
import { Grid, Row, Col } from 'rsuite';
import { mockData } from '@/data/mockData';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import teamMembersData from '@/data/teamMembers.json';

const teamMembers = teamMembersData;

const TeamMobileList = () => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = React.useState(false);
  
  // Leads (Level 1 & 2)
  const leadMembers = teamMembers
    .filter(member => member.level <= 2)
    .sort((a, b) => a.level - b.level);
    
  // Support Team (Level 3)
  const supportMembers = teamMembers
    .filter(member => member.level === 3);
  
  return (
    <div className="flex flex-col gap-5 w-full lg:hidden px-4 md:px-0">
      {/* Leads Section */}
      {leadMembers.map((member, idx) => {
        const mobileSize = member.level === 1 ? 95 : 85;
        
        return (
          <div 
            key={`lead-${idx}`} 
            className="flex items-center gap-6 bg-bg-card/50 p-3 rounded-[2rem] border border-white/10 backdrop-blur-md shadow-2xl"
          >
            <div 
              style={{ width: mobileSize, height: mobileSize }}
              className={`
                shrink-0 rounded-full overflow-hidden border-2 shadow-lg
                ${member.level === 1 ? 'border-primary/60 ring-4 ring-primary/10' : 'border-white/20'}
              `}
            >
              <img 
                src="/images/avatar-1.png" 
                alt={member.name} 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="flex flex-col justify-center overflow-hidden">
              <span className={`font-bold text-white mb-1 ${member.level === 1 ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'}`}>
                {member.name}
              </span>
              <span className={`text-text-muted font-semibold tracking-wide uppercase ${member.level === 1 ? 'text-xs md:text-sm' : 'text-[10px] md:text-xs'}`}>
                {member.role}
              </span>
            </div>
          </div>
        );
      })}

      {/* Expandable Support Team */}
      <motion.div 
        initial={false}
        animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
        className="overflow-hidden flex flex-col gap-4"
      >
        {supportMembers.map((member, idx) => (
          <div 
            key={`support-${idx}`} 
            className="flex items-center gap-5 bg-bg-card/30 p-4 rounded-3xl border border-white/5 backdrop-blur-sm"
          >
             {/* Slightly smaller avatar for Level 3 */}
            <div 
              className="w-16 h-16 shrink-0 rounded-full overflow-hidden border border-white/10"
            >
              <img 
                src="/images/avatar-1.png" 
                alt={member.name} 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="flex flex-col justify-center overflow-hidden">
              <span className="font-bold text-white text-base">
                {member.name}
              </span>
              <span className="text-text-muted text-[11px] font-medium uppercase tracking-wider">
                {member.role}
              </span>
            </div>
          </div>
        ))}
      </motion.div>

      {/* See More Toggle */}
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-center gap-2 py-4 text-primary font-bold hover:text-accent transition-colors group"
      >
        <span>
          {isExpanded ? t('ourTeam.seeLess') : t('ourTeam.seeMore')}
        </span>
        <motion.span
          animate={{ rotate: isExpanded ? 180 : 0 }}
          className="text-lg"
        >
          ↓
        </motion.span>
      </button>
    </div>
  );
};

const TeamAvatarCloud = () => {

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none z-0">
      <div className="container mx-auto h-full relative">
        {teamMembers.map((member, idx) => (
          <motion.div
            key={idx}
            style={{
              position: 'absolute',
              top: member.top,
              right: member.right,
              zIndex: 100 - (member.level * 10) + idx
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ 
              opacity: 1, 
              scale: 1,
            }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ 
              duration: 0.6, 
              delay: member.delay,
              ease: "easeOut"
            }}
            className="group/member flex flex-col items-center gap-3"
          >
            {/* Avatar Container with Bubble Loop Animation */}
            <motion.div
              animate={{
                y: [0, -25, 0],
                x: [0, idx % 2 === 0 ? 10 : -10, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: member.delay // Using entrance delay as start offset
              }}
              style={{ width: member.size, height: member.size }}
              className={`
                relative rounded-full overflow-hidden border-2 shadow-2xl backdrop-blur-sm transition-all duration-500
                ${member.level === 1 ? 'border-primary/60 ring-4 ring-primary/10' : 'border-white/10'}
                group-hover/member:border-primary group-hover/member:scale-110 group-hover/member:shadow-primary/30
                brightness-90 group-hover/member:brightness-105
              `}
            >
              <img 
                src={`/images/avatar-1.png`} 
                alt={member.name} 
                className="w-full h-full object-cover transition-all duration-700"
              />
            </motion.div>

            {/* LabelBadge - Moves in sync, larger text */}
            <div className={`
               flex flex-col items-center text-center whitespace-nowrap px-5 py-2.5 rounded-2xl bg-bg-card/70 border border-white/5 backdrop-blur-md shadow-xl
               transition-all duration-300 group-hover/member:border-primary/40 group-hover/member:bg-bg-card/90 group-hover/member:translate-y-[-8px]
            `}>
              <span className={`font-bold text-white transition-colors duration-300 group-hover/member:text-primary ${member.level === 1 ? 'text-sm md:text-base' : 'text-xs md:text-sm'}`}>
                {member.name}
              </span>
              <span className={`text-text-muted font-medium transition-colors duration-300 group-hover/member:text-white/80 ${member.level === 1 ? 'text-xs md:text-sm' : 'text-[10px] md:text-xs'}`}>
                {member.role}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Atmospheric backgrounds spread across the section */}
      <div className="absolute top-1/4 right-[5%] w-96 h-96 bg-primary/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-1/4 left-[5%] w-80 h-80 bg-accent/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/3 rounded-full blur-[100px] -z-10" />
    </div>
  );
};

const OurTeam = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [0, 50]); 
  const yContent = useTransform(scrollYProgress, [0, 1], [25, -25]);

  return (
    <section ref={ref} className="py-24 bg-transparent overflow-hidden relative" id="team">
      {/* Desktop Cloud Background - Visible only on LG */}
      <div className="hidden lg:block">
        <TeamAvatarCloud />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pointer-events-none">
          <Grid fluid className="p-0!">
            <Row gutter={40} className="items-center">
              {/* Text Section */}
              <Col xs={24} lg={10} className="mb-10 lg:mb-0 pointer-events-auto">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="lg:pr-8"
                >
                   {/* Decorative Line */}
                   <div className="w-20 h-1 bg-primary mb-6 md:mb-8 rounded-full"></div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight font-display">
                    {t('ourTeam.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">{t('ourTeam.highlight')}</span>
                  </h2>
                  <p className="text-base sm:text-lg text-text-muted leading-relaxed mb-6">
                    {t('ourTeam.description')}
                  </p>
                </motion.div>
              </Col>

              {/* Responsive Content: Cloud Placeholder (Desktop) or List (Mobile) */}
              <Col xs={24} lg={14} className="pointer-events-auto lg:pointer-events-none">
                 {/* Mobile List View */}
                 <TeamMobileList />
                 
                 {/* Desktop Spacing Placeholder */}
                 <div className="hidden lg:block h-[600px] w-full"></div>
              </Col>
            </Row>
          </Grid>
      </div>
    </section>
  );
};

export default OurTeam;
