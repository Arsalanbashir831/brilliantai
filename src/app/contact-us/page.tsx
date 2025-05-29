"use client";

import React from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/contact-us/hero-section";
import { ContactForm } from "@/components/contact-us/contact-form";
import { StatsSection } from "@/components/contact-us/stats-section";
import { ProcessSection } from "@/components/contact-us/process-section";
import { TrustSection } from "@/components/contact-us/trust-section";
import FAQ from "@/components/contact-us/faq";
import CTA from "@/components/contact-us/cta";

const sectionVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0 },
};

const transition = {
	duration: 0.6,
	ease: "easeOut",
};

const AnimatedSection = ({ children }: { children: React.ReactNode }) => (
	<motion.section
		initial="hidden"
		whileInView="visible"
		viewport={{ once: true, amount: 0.2 }}
		variants={sectionVariants}
		transition={transition}>
		{children}
	</motion.section>
);

const Page = () => {
	return (
		<div>
			<AnimatedSection>
				<HeroSection />
			</AnimatedSection>
			<AnimatedSection>
				<ContactForm />
			</AnimatedSection>
			<AnimatedSection>
				<StatsSection />
			</AnimatedSection>
			<AnimatedSection>
				<ProcessSection />
			</AnimatedSection>
			<AnimatedSection>
				<TrustSection />
			</AnimatedSection>
			<AnimatedSection>
				<FAQ />
			</AnimatedSection>
			<AnimatedSection>
				<CTA />
			</AnimatedSection>
		</div>
	);
};

export default Page;
