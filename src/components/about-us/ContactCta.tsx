// app/components/ContactCta.tsx
"use client";

import BrilliantButton from "../widgets/BrilliantButtons";

export default function ContactCta() {
	return (
		<section className=" md:-mb-12 ">
			<div className="max-w-[930px] mx-auto px-5 md:px-6">
				{/* outer wrapper: gradient border + glow */}
				<div
					className="
            rounded-xl bg-black shadow-[0px_0px_27px_0px_#23D5D57A]
          ">
					{/* inner panel: solid dark */}
					<div
						className="
              bg-black
              rounded-xl
              flex flex-col sm:flex-row
              items-center justify-between
              px-8 py-6
              md:gap-6
            ">
						<h3 className="text-white text-lg text-center mb-2 md:mb-0 md:text-4xl font-medium">
							Ready to start the conversation?
						</h3>

						<BrilliantButton
							variant="white"
							className="flex items-center  text-[#23D5D5] bg-gradient-to-b from-[#23D5D546] to-[#1eb2b246] text-xs h-fit py-2 rounded-lg md:text-xl">
							Book a call
						</BrilliantButton>
					</div>
				</div>
			</div>
		</section>
	);
}
