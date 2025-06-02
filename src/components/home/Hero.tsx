// components/Hero.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, MotionProps } from "framer-motion";
import BrilliantButton from "../widgets/BrilliantButtons";
import useMobile from "@/hook/useMobile";

// Array of keywords to loop through
const LOOP_WORDS = ["Transformative", "Unstoppable", "Limitless"];

// Corresponding widths for each keyword
// const WIDTHS: Record<string, string> = {
//   Transformative: "12ch",
//   Unstoppable: "10ch",
//   Limitless: "6.5ch",
// };

// Base gradient‐text style (only applies to the looped word)
const gradientTextStyle: React.CSSProperties = {
	background:
		"linear-gradient(90deg, #00AEFF 16.33%, #00DE94 45.1%, #00FF52 73.68%)",
	WebkitBackgroundClip: "text",
	WebkitTextFillColor: "transparent",
	backgroundClip: "text",
	backgroundSize: "200% 200%",
	animation: "gradientShift 3s ease infinite",
};

const rotateMotionProps: MotionProps = {
	initial: { opacity: 0, y: -50 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: 50 },
	transition: { duration: 0.25, ease: "easeOut" },
};

export default function Hero() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const isMobile = useMobile();
	// Cycle through words every 2 seconds
	useEffect(() => {
		const id = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % LOOP_WORDS.length);
		}, 2000);
		return () => clearInterval(id);
	}, []);

	const currentWord = LOOP_WORDS[currentIndex];
	// const containerWidth = WIDTHS[currentWord];
	return (
		<>
			{/* Keyframes for gradient‐shift animation */}
			<style jsx>{`
				@keyframes gradientShift {
					0% {
						background-position: 0% 50%;
					}
					50% {
						background-position: 100% 50%;
					}
					100% {
						background-position: 0% 50%;
					}
				}
			`}</style>

			<div className="relative md:top-[-30px] top-[0px] flex flex-col items-center justify-center pt-20 pb-20  md:py-42 px-4 text-center overflow-hidden">
				{/* Blurred radial gradient background */}
				<div
					className="absolute inset-0 top-[-100px] md:top-[-300px] filter blur-3xl"
					style={{
						background: !isMobile
							? `
              radial-gradient(
                circle 800px at 50% -50px,
                #23D5D5CC 80%,
                transparent 60%
              ),
              #011010
            `
							: ` radial-gradient(
                circle 600px at 50% -50px,
                #23D5D5CC 0%,
                transparent 60%
              ),
              #011010`,
					}}
				/>
				{/* mobile  style={{
            background: `
              radial-gradient(
                circle 600px at 50% -50px,
                #23D5D5CC 0%,
                transparent 60%
              ),
              #011010
            `,
          }} */}
				{/* Content on top of blurred background */}
				<main className="relative z-10 max-w-full  md:mx-auto">
					{/* Static heading */}
					<h1 className="w-full text-[33px] font-light text-white leading-tight md:text-5xl lg:text-6xl xl:text-[86px] ">
						Unlock Your Vision With
					</h1>

					{/* Looping word + “AI” (animated together) */}
					<div className="flex items-center justify-center w-full m-auto mb-8">
						<h1 className="inline-flex items-center text-[35px] font-light text-white leading-tight md:text-5xl lg:text-6xl xl:text-[86px]">
							<AnimatePresence mode="wait">
								<motion.span
									key={currentWord}
									style={gradientTextStyle}
									{...rotateMotionProps}
									className="block whitespace-nowrap">
									{currentWord}
								</motion.span>
							</AnimatePresence>

							{/* “AI” in plain white, animates in sync */}
							<AnimatePresence mode="wait">
								<motion.span
									key={`${currentWord}-AI`}
									{...rotateMotionProps}
									className="ml-3 inline-flex items-center text-3xl font-light text-white leading-tight md:text-5xl lg:text-6xl xl:text-7xl">
									AI
								</motion.span>
							</AnimatePresence>
						</h1>
					</div>

					{/* Description */}
					<motion.p
						// initial={{ opacity: 0, y: 20 }}
						// animate={{ opacity: 1, y: 0 }}
						// transition={{ delay: 1, duration: 0.4, ease: "easeOut" }}
						className="mx-auto mb-5 md:mb-12 md:text-[14px] text-[17px] text-gray-300 md:text-md lg:text-xl md:max-w-[73%] max-w-[90%] ">
						We take you from idea to execution by building AI web apps,
						developing machine learning solutions and implementing AI-driven
						processes that power scalable products and smarter operations.
					</motion.p>

					{/* Buttons */}
					<motion.div
						className="flex gap-5 flex-wrap  justify-center items-center pb-5 md:pb-0"
						// initial={{ opacity: 0, y: 20 }}
						// animate={{ opacity: 1, y: 0 }}
						// transition={{ delay: 1.3, duration: 0.4, ease: "easeOut" }}
					>
						<BrilliantButton variant="gradient">Get in Touch</BrilliantButton>
						<BrilliantButton variant="transparent">Learn More</BrilliantButton>
					</motion.div>
				</main>
			</div>
		</>
	);
}
