'use client';

import React from 'react';
import { motion } from 'framer-motion';

import AiFeaturesCarousel from '@/components/about-us/AiFeaturesCarousel';
import ApproachSection from '@/components/about-us/ApproachSection';
import ContactCta from '@/components/about-us/ContactCta';
import Hero from '@/components/about-us/Hero';
import MissionSection from '@/components/about-us/MissionSection';
import OurPeopleSection from '@/components/about-us/OurPeopleSection';
import StorySection from '@/components/about-us/StorySection';
import TrustedSection from '@/components/about-us/TrustedSection';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const transition = {
  duration: 0.6,
  ease: 'easeOut',
};

const AnimatedSection = ({ children }: { children: React.ReactNode }) => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={sectionVariants}
    transition={transition}
  >
    {children}
  </motion.section>
);

const Page = () => {
  return (
    <div>
      <AnimatedSection><Hero /></AnimatedSection>
      <AnimatedSection><AiFeaturesCarousel /></AnimatedSection>
      <AnimatedSection><StorySection /></AnimatedSection>
      <AnimatedSection><MissionSection /></AnimatedSection>
      <AnimatedSection><TrustedSection /></AnimatedSection>
      <AnimatedSection><ApproachSection /></AnimatedSection>
      <AnimatedSection><OurPeopleSection /></AnimatedSection>
      <AnimatedSection><ContactCta /></AnimatedSection>
    </div>
  );
};

export default Page;
