// components/GradientCTA.tsx
import BrilliantButton from "../widgets/BrilliantButtons";
import { ShineBorder } from "../magicui/shine-border";
import { useRouter } from "next/navigation";

export default function GradientCTA() {
	const router = useRouter();
	return (
		<section className="w-full flex justify-center px-0 md:px-32 py-24">
			<div
				className="relative w-full h-[300px] max-w-6xl md:h-[220px] rounded-none md:rounded-xl overflow-hidden flex items-center justify-between px-6 sm:px-10 text-white"
				style={{
					background: `linear-gradient(90deg, #1dbab6 0%, #b5fdf6 50%, #00e0d0 100%)`,
				}}
			>
				<ShineBorder shineColor={["#23D5D5", "#00FFFF"]} />
				{/* Black overlay */}
				<div className="absolute inset-0 md:bg-black/70 bg-[#001112]/80 z-0" />

				{/* Overlay Content */}
				<div className="relative z-10 w-full flex flex-col sm:flex-row items-start sm:items-center justify-between px-3">
					<div className="mb-4 sm:mb-0">
						<h3 className="text-3xl text-center md:text-left font-bold mb-1">
							Want to explore what AI can do for you?
						</h3>
						<p className="text-md text-center md:text-left text-white/80 w-full md:max-w-[73%]">
							We’re dedicated to delivering impactful solutions that drive value
							and elevate the experience for every client.
						</p>
					</div>
					<div className="m-auto md:m-0">
						<BrilliantButton onClick={()=>router.push('/contact-us#contact-form')} variant="white" className="px-4">
							Get in Touch
						</BrilliantButton>
					</div>
				</div>
			</div>
		</section>
	);
}
