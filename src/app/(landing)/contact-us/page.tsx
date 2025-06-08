'use client';

import React from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/contact-us/hero-section";
import { ContactForm } from "@/components/contact-us/contact-form";
import { StatsSection } from "@/components/contact-us/stats-section";
import { ProcessSection } from "@/components/contact-us/process-section";
import { TrustSection } from "@/components/contact-us/trust-section";
import FAQ from "@/components/contact-us/faq";
import CTA from "@/components/contact-us/cta";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 40,  // more “float”
      damping: 14,    // gentler settle
      mass: 0.6,      // adds a bit of weight
      ease: [0.42, 0, 0.58, 1], // smooth fallback
    },
  },
};

const AnimatedSection = ({ children }: { children: React.ReactNode }) => (
  <motion.section
    variants={sectionVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    {children}
  </motion.section>
);

export default function Page() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <AnimatedSection><HeroSection /></AnimatedSection>
      <AnimatedSection><ContactForm /></AnimatedSection>
      <AnimatedSection><StatsSection /></AnimatedSection>
      <AnimatedSection><ProcessSection /></AnimatedSection>
      <AnimatedSection><TrustSection /></AnimatedSection>
      <AnimatedSection><FAQ /></AnimatedSection>
      <AnimatedSection><CTA /></AnimatedSection>
    </motion.div>
  );
}
