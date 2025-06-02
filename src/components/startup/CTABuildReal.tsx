// components/CTABuildReal.tsx
"use client";

import React from "react";
import BrilliantButton from "../widgets/BrilliantButtons";
import { ShineBorder } from "../magicui/shine-border";

export default function CTABuildReal() {
	return (
		<section className="relative w-full py-20 px-0 md:px-32  lg:px-32">
			{/* 
        On mobile (below sm), this container is full‐width (edge to edge of its parent Section),
        but we wrap it in px-4 so there’s 16px of breathing room on either side.
        On sm+ (640px+), we give the Section px-32, so the inner card shrinks to sm:max-w-7xl.
      */}
			<div
				className="
          relative
          w-full
          sm:max-w-7xl
          mx-auto
          overflow-hidden
            rounded-0          
            md:rounded-[16px]  lg:rounded-[16px]
          bg-[linear-gradient(111deg,rgba(77,77,77,0.24)_1.21%,rgba(151,151,151,0.04)_100%)]
          shadow-[inset_-20px_4px_120px_-80px_rgba(31,187,187,0.14)]
          backdrop-blur-[15px]
        ">
				{/* The “shine” border effect */}
				<ShineBorder shineColor={["#23D5D5", "#00FFFF"]} />

				{/* 
          Content wrapper: 
          - On mobile: padding left/right = 24px (px-6), vertical padding = 40px (py-10) 
          - On sm+: padding left/right = 120px (px-[120px]), vertical padding = 40px (py-10)
        */}
				<div className="relative flex flex-col items-center px-6 sm:px-[120px] py-10">
					{/* Title */}
					<h2 className="text-[28px] leading-[48px] font-semibold text-white text-center">
						Let’s Build Something Real
					</h2>

					{/* Subtitle / Paragraph */}
					<p className="mt-4 text-[18px] leading-[28px] text-[#E0E0E0] text-center">
						Your idea deserves more than just a plan. Let’s turn it into a
						working AI product.
					</p>

					{/* Button */}
					<div className="mt-8">
						<BrilliantButton variant="white">
							Talk to Our Team →
						</BrilliantButton>
					</div>
				</div>
			</div>
		</section>
	);
}
