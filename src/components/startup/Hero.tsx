'use client';

import React from 'react';


export default function Hero() {
    return (
        <section className="bg-[url('/startup/22.svg')] ">
            {/* Hero overlay */}
            <div className="">
                <div className="max-w-4xl mx-auto px-6 py-40 text-center text-white">
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium">
                        AI Product Engineering  <br /> for{' '}
                        <span
                            className="bg-gradient-to-r from-[#00AEFF] via-[#00DE94] to-[#00FF52] bg-clip-text text-transparent"
                            style={{
                                background: "linear-gradient(90deg, #00AEFF 16.33%, #00DE94 45.1%, #00FF52 73.68%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Startups




                        </span>
                    </h1>
                    <p className="mt-4 text-md sm:text-lg  max-w-4xl mx-auto">
                        We help founders bring AI ideas to life. From focused MVPs to
                        complete, scalable platforms, we deliver intelligent systems
                        built for performance, speed and long-term growth.
                    </p>
                </div>
            </div>

            {/* Content + Stats */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="flex flex-col md:flex-row justify-center px-20 gap-12">
                    {/* Left text */}
                    <div className="md:w-1/2  space-y-6 text-white">
                        <h2 className="text-3xl sm:text-4xl font-semibold">
                            AI-Powered Solutions for Startup Success
                        </h2>
                        <p className="text-gray-100">
                            Brilliant AI is your dedicated technology partner, focused on
                            delivering AI-powered product development for startups. Whether
                            you’re building an MVP or scaling your core platform, we bring
                            the technical expertise to turn ambitious ideas into
                            investor-ready, real-world solutions.
                        </p>
                        <p className="text-gray-200">
                            We cover the entire delivery pipeline, including machine learning,
                            web development, automation, and system integration. Our
                            structured, results-driven approach ensures every product is
                            built for speed, quality, and long-term growth.
                        </p>
                        <p className="text-gray-300">
                            Looking to validate an idea, accelerate development, or launch a
                            complete AI product? We’re ready when you are.
                        </p>
                    </div>

                    {/* Right stats grid */}
                    <div className="md:w-1/2 flex justify-center">
                        <div
                            className="
                            w-[500px] flex flex-col flex-shrink-0
                            rounded-[10px] bg-[rgba(0,0,0,0.7)] overflow-hidden
                            "
                        >
                            {/* Stat 1 */}
                            <div className="flex-1 flex flex-col justify-center px-6 py-4">
                                <p className="text-5xl  font-normal text-white">
                                    130+
                                </p>
                                <p className="text-md leading-[28px] font-normal text-[#E0E0E0] ">
                                    AI solutions successfully delivered
                                </p>
                            </div>
                            <div
                                className="h-[1px] w-full
        bg-[linear-gradient(90deg,_#00AEFF_16.33%,_#00DE94_45.1%,_#00FF52_73.68%)]"
                            />

                            <div className="flex-1 flex flex-col justify-center px-6 py-4">
                                <p className="text-5xl  font-normal text-white">
                                    98%
                                </p>
                                <p className="text-md leading-[28px] font-normal text-[#E0E0E0] ">
                                    Internal quality assurance success rate
                                </p>
                            </div>
                            <div
                                className="h-[1px] w-full
        bg-[linear-gradient(90deg,_#00AEFF_16.33%,_#00DE94_45.1%,_#00FF52_73.68%)]"
                            />

                            {/* Stat 3 */}
                            <div className="flex-1 flex flex-col justify-center px-6 py-4">
                                <p className="text-5xl  font-normal text-white">
                                    40%
                                </p>
                                <p className="text-md leading-[28px] font-normal text-[#E0E0E0] ">
                                    Year over year team growth and capability
                                </p>
                            </div>
                            <div
                                className="h-[1px] w-full
        bg-[linear-gradient(90deg,_#00AEFF_16.33%,_#00DE94_45.1%,_#00FF52_73.68%)]"
                            />

                            {/* Stat 4 */}
                            <div className="flex-1 flex flex-col justify-center px-6 py-4">
                                <p className="text-5xl  font-normal text-white">
                                    5
                                </p>
                                <p className="text-md leading-[28px] font-normal text-[#E0E0E0] ">
                                    Supporting startup teams from idea to launch
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
