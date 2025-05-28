// components/Footer.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Linkedin, X } from "lucide-react";
import BrilliantButton from "./widgets/BrilliantButtons";

export default function Footer() {
    return (
        <footer
            className="
        relative overflow-hidden text-white
        pb-2 pt-32 lg:pt-48
        bg-[url('/home/Ellipse.png')] bg-no-repeat bg-center
      "
        >
            {/* → Glow rings (always present) */}
            <div
                className="
          absolute top-1/2 right-0
          transform -translate-y-1/2 translate-x-1/2
          w-[1600px] h-[1600px]
          rounded-full border-[24px] border-[#23D5D5]
          filter blur-[300px]
        "
            />
            <div
                className="
          absolute top-1/2 right-0
          transform -translate-y-1/2 translate-x-1/2
          w-[1100px] h-[1100px]
          rounded-full border-[16px] border-[#23D5D5]
          filter blur-[200px]
        "
            />

            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
                {/* ─── Mobile Stack ─────────────────────────────────────────────── */}
                <div className="flex flex-col items-center text-center space-y-6 lg:hidden">
                    {/* Logo + tagline */}
                    <Image src="/logo.svg" alt="Brilliant AI" width={160} height={64} />
                    <p className="text-sm leading-relaxed max-w-xs">
                        Brilliant AI is a specialist artificial intelligence engineering company focused on
                        designing, building and deploying custom AI systems for real-world impact.
                    </p>

                    {/* CTA button */}
                    <BrilliantButton variant="white">Get in touch →</BrilliantButton>

                    {/* Nav links */}
                    <nav>
                        <ul className="flex flex-wrap justify-center gap-4 text-md">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/startup">Startup</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                            <li><Link href="/company">Company</Link></li>
                            <li><Link href="/news">News</Link></li>
                        </ul>
                    </nav>

                    {/* Social icons */}
                    <div className="flex space-x-4">
                        <div className="border rounded-full p-2">
                            <X className="hover:text-gray-300 cursor-pointer" />
                        </div>
                        <div className="border rounded-full p-2">
                            <Linkedin className="hover:text-gray-300 cursor-pointer" />
                        </div>
                        <div className="border rounded-full p-2">
                            <Mail className="hover:text-gray-300 cursor-pointer" />
                        </div>
                    </div>
                </div>

                {/* ─── Desktop Grid ────────────────────────────────────────────── */}
                <div className="hidden lg:grid grid-cols-4 gap-12">
                    {/* Logo + Description */}
                    <div className="space-y-6">
                        <Image src="/logo.svg" alt="Brilliant AI" width={200} height={80} />
                        <p className="text-sm leading-relaxed">
                            Brilliant AI is a specialist artificial intelligence engineering company focused on
                            designing, building and deploying custom AI systems for real-world impact.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-xl mb-4">Quick Links</h3>
                        <ul className="space-y-3 text-md">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/startup">Startup</Link></li>
                            <li><Link href="/news">News</Link></li>
                            <li><Link href="/company">Company</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Policies */}
                    <div>
                        <h3 className="font-semibold text-xl mb-4">Our Policies</h3>
                        <ul className="space-y-3 text-md">
                            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link href="/cookies-policy">Cookies Policy</Link></li>
                            <li><Link href="/terms">Terms &amp; Conditions</Link></li>
                        </ul>
                    </div>

                    {/* Contact CTA + icons */}
                    <div className="space-y-6">
                        <div className="flex space-x-4">
                            <div className="border rounded-full p-2">
                                <X className="hover:text-gray-300 cursor-pointer" />
                            </div>
                            <div className="border rounded-full p-2">
                                <Linkedin className="hover:text-gray-300 cursor-pointer" />
                            </div>
                            <div className="border rounded-full p-2">
                                <Mail className="hover:text-gray-300 cursor-pointer" />
                            </div>
                        </div>
                        <h3 className="font-semibold text-2xl">
                            We’d Love to Hear <br />
                            from You!
                        </h3>
                        <BrilliantButton variant="outline">Get in Touch</BrilliantButton>
                    </div>
                </div>
            </div>

            {/* ─── Bottom bar ─────────────────────────────────────────────────────── */}
            {/* <div className="relative z-10 mt-16 w-full border-t border-gray-700 pt-8 px-6 sm:px-20 lg:px-20 text-center">
                <h6 className="text-sm leading-relaxed">
                    Copyright © 2025 Brilliant AI Ltd. All rights reserved. Brilliant AI Ltd is a company
                    registered in England and Wales (Company No: 16134527). Brilliant AI Ltd operates in
                    accordance with applicable UK laws and regulations.
                </h6>
            </div> */}
            <div className="relative z-10 mt-16 w-full border-t border-gray-700 pt-8 px-6 sm:px-20 lg:px-20 flex justify-center ">
                <h6 className="text-sm text-center text-white lg:w-[60%] w-full">
                    Copyright © 2025 Brilliant AI Ltd. All rights reserved. Brilliant AI Ltd is a company
                    registered in England and Wales (Company No: 16134527). Brilliant AI Ltd operates in
                    accordance with applicable UK laws and regulations.
                </h6>
            </div>
        </footer>
    );
}
