"use client";

import Image from "next/image";
import BrilliantButton from "../widgets/BrilliantButtons";
// import { ShineBorder } from "../magicui/shine-border";

export default function MissionSection() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="w-full mx-auto px-0 flex flex-col items-center gap-2">
        <h2 className="text-4xl md:text-[64px] text-center font-bold text-white">
          Our Mission
        </h2>
        <p
          style={{
            fontFamily: "Lufga Regular",
          }}
          className="text-white text-center text-[20px] text-normal px-5 md:px-0 ">
          To turn ambitious ideas into high performing AI systems
        </p>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-4 mt-10 w-full pt-10 px-5 md:px-0">
          {/* — Left text block */}
          <div className="space-y-6 md:pr-[50px] text-white max-w-xl text-center md:text-left mx-auto md:mx-0">
            <div className="space-y-10">
              <p
                style={{
                  fontFamily: "Lufga Regular",
                }}>
                We help businesses turn concepts into reality with confidence,
                solving meaningful problems through intelligent and engineered
                solutions.
              </p>
              <p
                style={{
                  fontFamily: "Lufga Regular",
                }}>
                Beyond building AI products, we build trust through deep
                expertise, consistent delivery, and clear communication. Our
                work drives growth, improves efficiency, and keeps clients ahead
                in an increasingly intelligent world.
              </p>
              <p
                style={{
                  fontFamily: "Lufga Regular",
                }}>
                We are the most cost effective AI development partner in the UK,
                delivering enterprise level solutions with speed, precision, and
                focus without the unnecessary overhead.
              </p>
              <p
                style={{
                  fontFamily: "Lufga Regular",
                }}>
                Great ideas deserve exceptional execution. We make sure every
                project delivers on that promise.
              </p>
            </div>

            <BrilliantButton
              variant="white"
              className="mt-6 inline-block bg-white text-black font-medium px-2.5 md:px-6 py-3 rounded-xl hover:bg-gray-100 transition">
              Let's build what is next
            </BrilliantButton>
          </div>

          {/* — Right spacer block (keeps grid structure on md-xl only) */}
          <div className="hidden md:block 3xl:hidden"></div>

          {/* — Absolute Image Breakout (md-xl) */}
          <div className="hidden md:block 3xl:hidden absolute top-0 bottom-0 left-1/2 w-[50vw]">
            <div className="relative w-full h-full">
              <Image
                src="/about/mission.svg"
                alt="Workflow of planning, coding, testing, building, monitoring"
                fill
                className="object-contain object-right w-100%"
              />
            </div>
          </div>

          {/* — Centered Image (3xl+) */}
          <div className="hidden 3xl:flex justify-center w-full mt-10">
            <div className="relative w-full max-w-4xl h-[800px]">
              <Image
                src="/about/mission.svg"
                alt="Workflow of planning, coding, testing, building, monitoring"
                fill
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
