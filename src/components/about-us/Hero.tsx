'use client';

import React from 'react';


export default function Hero() {
    return (
        <section className="bg-[url('/startup/22.svg')] bg-center bg-no-repeat ">
            {/* Hero overlay */}
            <div className="">
                <div className="max-w-4xl mx-auto px-6 pt-40 pb-20 text-center text-white">
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium">
                        Driving Innovation with Scalable AI Solutions.

                    </h1>

                </div>
            </div>

            {/* Content + Stats */}
            <div className="max-w-7xl mx-auto  flex flex-col md:flex-row justify-center  gap-12 pb-20">
                <div className=" border-[1px] w-4/5 h-80 rounded-3xl border-gray-400 flex justify-center items-center">
                    <div className='bg-teal-950 w-full m-6 h-72 rounded-3xl flex flex-col gap-8 justify-center items-center p-6 text-white'>
                        <div className='text-center'>Brilliant AI is an artificial intelligence engineering company built for the future of business. Headquartered in the UK, we are the most cost effective AI partner in the market, trusted by startups, law firms, and forward thinking companies that want to build smart and move fast. We were founded to break away from the outdated agency model. No bloated teams, no recycled solutions, no empty promises. Just real engineering, real outcomes, and real collaboration.
                        </div>
                        <div className='text-center'>We design and build custom AI systems that are practical, powerful, and ready to scale. From GPT powered tools and intelligent process automation to full stack AI products, we focus on making complex technology simple and valuable. Our team is made up of senior AI engineers, product strategists, and automation specialists who work directly with clients to turn bold ideas into working solutions. Our process is lean, transparent, and built for speed. Brilliant AI is not just our name. It is the standard we hold ourselves to on every project. </div>
                    </div>

                </div>
            </div>
        </section>
    );
}






