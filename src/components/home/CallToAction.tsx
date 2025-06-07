// components/CallToAction.tsx
import Image from "next/image";
import BrilliantButton from "../widgets/BrilliantButtons";
import useMobile from "@/hook/useMobile";
import { useRouter } from "next/navigation";

export default function CallToAction() {
	const isMobile = useMobile();
	const router = useRouter()
	return (
		<section className="relative  w-full  flex items-center justify-center overflow-hidden bg-[#011010] px-4 py-24 md:h-[600px] md:py-0">
			{/* Background SVG (Grid Border) */}
			<Image
				src="/home/border.svg"
				alt="Grid Background"
				fill
				className={`px-1 ${
					isMobile ? "object-cover" : "object-contain"
				} pointer-events-none h-[300px] w-[200px]`}
			/>

			{/* Content */}
			<div className="relative z-10 text-center md:max-w-[60%] w-auto">
				<h2 className="text-[27px] sm:text-2xl md:text-5xl font-light text-white leading-snug">
					Ready to build what’s next?
					<span className="text-[28px] md:md:text-5xl">
						{" "}
						We’re here to make it happen.{" "}
					</span>
				</h2>
				<BrilliantButton onClick={()=>router.push('/contact-us')} className="mt-5 px-6 py-3 text-sm md:text-base">
					Get In Touch
				</BrilliantButton>
			</div>
		</section>
	);
}
