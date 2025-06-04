"use client";

import React from "react";
import { ShineBorder } from "../magicui/shine-border";
import useMobile from "@/hook/useMobile";

export default function Hero() {
	const isMobile = useMobile()
	// const positionBg= isMobile?{
	// 	background-position-x: '-450px',
	// 	background-position-y: '-115px'
	// }:{
	// 	backgroundPositionY:'-100px'
	// }
	return (
		<section style={{
			backgroundPositionX:!isMobile?'0px':'-375px',
			backgroundPositionY: !isMobile?'-100px':'-115px'
		}} className=" bg-[url('/about/image.png')] md:bg-[url('/about/Hero.png')] bg-cover  bg-no-repeat ">
			{/* Hero overlay */}
			<div className="">
				<div className="max-w-7xl mx-auto pt-[77px] pb-11 md:px-6 md:pt-40 md:pb-20 text-center text-white">
					<h1 className="text-3xl md:text-[86px] font-normal">
						Driving Innovation with Scalable AI Solutions.
					</h1>
				</div>
			</div>

			{/* Content + Stats */}
			<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-12 md:pb-20 px-3">
				<div className="relative w-full md:w-4/5 rounded-xl flex justify-center items-center">
					<ShineBorder
						shineColor={["#808080", "#23D5D5", "#23D5D51A", "#808080D9"]}
					/>
					<div
						style={{
							boxShadow: "inset -20px 4px 120px -80px #1FBBBB",
						}}
						className="w-full m-4 md:m-8 rounded-xl flex flex-col gap-8 justify-center items-center p-4 md:p-7 text-white text-xs md:text-lg bg-[radial-gradient(circle,#4d4d4d00,#9797971A)]">
						<div className="text-center">
							Brilliant AI is an artificial intelligence engineering company
							built for the future of business. Headquartered in the UK, we are
							the most cost effective AI partner in the market, trusted by
							startups, law firms, and forward thinking companies that want to
							build smart and move fast. We were founded to break away from the
							outdated agency model. No bloated teams, no recycled solutions, no
							empty promises. Just real engineering, real outcomes, and real
							collaboration.
						</div>
						<div className="text-center">
							We design and build custom AI systems that are practical,
							powerful, and ready to scale. From GPT powered tools and
							intelligent process automation to full stack AI products, we focus
							on making complex technology simple and valuable. Our team is made
							up of senior AI engineers, product strategists, and automation
							specialists who work directly with clients to turn bold ideas into
							working solutions. Our process is lean, transparent, and built for
							speed. Brilliant AI is not just our name. It is the standard we
							hold ourselves to on every project.{" "}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
