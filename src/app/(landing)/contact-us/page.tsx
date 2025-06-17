'use client';

import React, { useEffect, useRef } from "react";
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
      stiffness: 40,
      damping: 14,
      mass: 0.6,
      ease: [0.42, 0, 0.58, 1],
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
  const contactFormRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash === "#contact-form" && contactFormRef.current) {
        setTimeout(() => {
          const offset = 80; // adjust this value as needed
          const elementRect = contactFormRef.current?.getBoundingClientRect();
          if (!elementRect) return;
          const elementPosition = elementRect.top + window.pageYOffset;
          const scrollTo = elementPosition - offset;
  
          window.scrollTo({
            top: scrollTo,
            behavior: "smooth",
          });
        }, 100); // delay to ensure DOM is rendered
      }
    }
  }, []);
  

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <AnimatedSection><HeroSection onScrollToContact={() => {
    if (contactFormRef.current) {
      const offset = 80;
      const top = contactFormRef.current.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }}/></AnimatedSection>

      <AnimatedSection >
        <div ref={contactFormRef}>
          <ContactForm />
        </div>
      </AnimatedSection>

      <AnimatedSection><StatsSection /></AnimatedSection>
      <AnimatedSection><ProcessSection /></AnimatedSection>
      <AnimatedSection><TrustSection /></AnimatedSection>
      <AnimatedSection><FAQ /></AnimatedSection>
      <AnimatedSection><CTA /></AnimatedSection>
    </motion.div>
  );
}
