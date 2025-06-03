// components/Newsletter.tsx
'use client';

import { FormEvent, useState } from 'react';
import { ShineBorder } from '../magicui/shine-border';
import useMobile from '@/hook/useMobile';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const isMobile = useMobile()

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Subscribing:', email);
        setEmail('');
        alert('Thanks for subscribing!');
    };

    return (
        <section className="py-16  flex items-center justify-center">
            {/* 
        px-4 on mobile (16px each side), px-14 on ≥sm (56px each side). 
        That way the card never touches the very edge on phones, but still has plenty of gutter. 
      */}
            <div className="relative w-full max-w-7xl">
                <div
                    className="
            relative w-full max-w-7xl bg-teal-950 bg-opacity-40 rounded-0 md:rounded-xl lg:rounded-xl p-14 text-center overflow-hidden
          "
                >
                    {/* 1) The shine border around the card */}
                    {!isMobile && (<>
                    
                    <ShineBorder shineColor={['#23D5D5', '#00FFFF']} />
                    </>)}

                    {/* 2) Semi-transparent black overlay so text is always readable */}
                    <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />

                    {/* 3) Actual content (above overlay, z-10) */}
                    <div className="relative z-10 space-y-6 text-center">
                        {/* Heading */}
                        <h2 className=" text-xl md:text-2xl  font-semibold text-white leading-tight">
                            Stay Updated with Brilliant AI
                        </h2>

                        {/* Description */}
                        <p className="text-[17px] md:text-[14px] text-gray-300 mx-auto max-w-xs sm:max-w-xl">
                            Subscribe to our newsletter for the latest AI insights, product updates, and industry news
                            delivered straight to your inbox.
                        </p>

                        {/* 
              FORM: 
              - On mobile: flex-row, input + button remain side-by-side. 
              - We constrain the total width to max-w-md so it doesn’t become too wide on phones.
              - On ≥sm, it still remains inline (as in your desktop design) but expands a bit.
            */}
                        <form
                            onSubmit={handleSubmit}
                            className="flex items-center justify-center mx-auto max-w-md w-full"
                        >
                            {/* INPUT */}
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                className="
                  w-full sm:w-auto
                  flex-grow
                  bg-transparent
                  border border-gray-600
                  border-r-0
                  px-4
                  py-3
                  rounded-l-lg
                  text-white
                  placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent
                  transition
                "
                            />

                            {/* SUBSCRIBE BUTTON */}
                            <button
                                type="submit"
                                className="
                  px-5
                  py-3
                  bg-teal-900
                  border border-gray-600
                  border-l-0
                  rounded-r-lg
                  text-white
                  font-medium
                  hover:opacity-90
                  transition
                "
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
