'use client';

import React from 'react';
import { Grid, Row, Col } from 'rsuite';
import { mockData } from '@/data/mockData';
import { motion, useScroll, useTransform, useMotionValue, useAnimationFrame } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useContent } from '@/hooks/useContent';

import teamMembersData from '@/data/teamMembers.json';
import Image from 'next/image';

const getInitials = (name: string) => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
};

const TeamMemberCard = ({ member }: { member: any }) => {
  return (
    <div className="group/item flex flex-row items-center gap-4 px-4 py-3 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md hover:bg-white/10 hover:border-primary/30 transition-all duration-300 w-full mb-3">
      {/* Avatar */}
      <div 
        className="w-11 h-11 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-sm shadow-md border border-white/15 bg-gradient-to-br from-primary/25 to-accent/20"
        style={{ color: '#fff' }}
      >
        {getInitials(member.name)}
      </div>
      {/* Text */}
      <div className="flex flex-col min-w-0">
        <span className="text-[18px] font-bold text-white leading-snug truncate group-hover/item:text-primary transition-colors">{member.name}</span>
        <span className="text-[14px] text-text-muted mt-0.5 truncate">{member.role}</span>
      </div>
    </div>
  );
};

const TeamMarqueeColumn = ({ members, speed = 0.3, reverse = false }: { members: any[], speed?: number, reverse?: boolean }) => {
  const totalList = [...members, ...members];
  const y = useMotionValue(0);
  const isDragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll loop — runs every frame, pauses while dragging
  useAnimationFrame(() => {
    if (isDragging.current) return;
    if (!innerRef.current) return;

    const halfHeight = innerRef.current.scrollHeight / 2;
    const direction = reverse ? 1 : -1;
    const newY = y.get() + direction * speed;

    // Seamless wrap-around
    if (!reverse && newY <= -halfHeight) {
      y.set(newY + halfHeight);
    } else if (reverse && newY >= 0) {
      y.set(newY - halfHeight);
    } else {
      y.set(newY);
    }
  });

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden h-full w-full cursor-grab active:cursor-grabbing select-none"
    >
      <motion.div
        ref={innerRef}
        style={{ y }}
        drag="y"
        dragConstraints={{ top: -Infinity, bottom: Infinity }}
        dragMomentum={false}
        dragElastic={0}
        onDragStart={() => { isDragging.current = true; }}
        onDragEnd={() => {
          isDragging.current = false;
          // Wrap after drag ends to keep seamless loop
          if (!innerRef.current) return;
          const halfHeight = innerRef.current.scrollHeight / 2;
          const cur = y.get();
          if (cur <= -halfHeight) y.set(cur + halfHeight);
          else if (cur >= 0 && reverse) y.set(cur - halfHeight);
        }}
        className="flex flex-col will-change-transform"
      >
        {totalList.map((member, idx) => (
          <TeamMemberCard key={`${idx}-${member.name}`} member={member} />
        ))}
      </motion.div>
    </div>
  );
};

const OurTeam = () => {
  const { t } = useTranslation();
  const { content } = useContent();
  const ref = useRef(null);

  // Use team data from BE if available, otherwise fallback to teamMembersData
  const teamMembers = content?.team && content.team.length > 0 ? content.team : teamMembersData;

  // Split team members into 2 groups for the 2 columns
  const midPoint = Math.ceil(teamMembers.length / 2);
  const leftColMembers = teamMembers.slice(0, midPoint);
  const rightColMembers = teamMembers.slice(midPoint);

  return (
    <section ref={ref} className="py-8 lg:py-10 bg-transparent overflow-hidden relative" id="team">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <Grid fluid className="p-0!">
          <Row gutter={30} className="items-start">
            {/* Text Section - Left Column */}
            <Col xs={24} lg={10}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {/* Decorative Line */}
                <div className="w-20 h-1 bg-primary mb-6 rounded-full"></div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight font-display font-bold">
                  {t('ourTeam.title')} <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    {t('ourTeam.highlight')}
                  </span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-text-muted leading-relaxed max-w-lg">
                  {t('ourTeam.description')}
                </p>
              </motion.div>
            </Col>

            {/* Dual Marquee Section - Right Column */}
            <Col xs={24} lg={14} className="mt-8 lg:mt-0">
              <div className="relative w-full h-[450px] overflow-hidden pointer-events-auto">
                
                {/* Gradient Fades */}
                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-bg-dark to-transparent z-10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-bg-dark to-transparent z-10 pointer-events-none" />

                <div className="grid grid-cols-2 gap-4 lg:gap-6 px-4 h-full">
                  {/* Column 1: Scrolls Down */}
                  <TeamMarqueeColumn 
                    members={leftColMembers} 
                    speed={0.3} 
                    reverse={false} 
                  />
                  {/* Column 2: Scrolls Up */}
                  <TeamMarqueeColumn 
                    members={rightColMembers} 
                    speed={0.35} 
                    reverse={true} 
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>

      {/* Atmospheric Backgrounds */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/3 rounded-full blur-[100px] -z-10" />
    </section>
  );
};

export default OurTeam;
