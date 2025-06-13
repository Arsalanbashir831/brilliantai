"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Linkedin, LucideArrowRight } from "lucide-react";
import BrilliantButton from "./widgets/BrilliantButtons";
import useMobile from "@/hook/useMobile";
import { useRouter } from "next/navigation";

export default function Footer() {
  const isMobile = useMobile();
const router = useRouter()
  // Shared elements
  const logo = <Image src="/logo.svg" alt="Brilliant AI" width={160} height={64} />;
  const description = (
    <p className="text-sm leading-relaxed max-w-xs">
      Brilliant AI is a specialist artificial intelligence engineering company focused on
      designing, building and deploying custom AI systems for real-world impact.
    </p>
  );

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/startup", label: "Startup" },
    { href: "/contact-us", label: "Contact Us" },
    { href: "/about", label: "Company" },
    { href: "/news", label: "News" },
  ];

  const socialIcons = (
    <div className="flex space-x-4">
      {/* <button aria-label="X Twitter" className="border rounded-full p-2 hover:text-gray-300">
        <X />
      </button> */}
      <button aria-label="LinkedIn" className="border rounded-full p-2 hover:text-gray-300">
        <Linkedin />
      </button>
      <button aria-label="Email" className="border rounded-full p-2 hover:text-gray-300">
        <Mail />
      </button>
    </div>
  );

  return (
    <footer
      className="relative overflow-hidden text-white pb-2 pt-10 md:pt-32 lg:pt-48 bg-[url('/home/Ellipse.png')] bg-repeat bg-center"
    >
      {/* Glow rings */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 w-[1600px] h-[1600px] rounded-full border-[24px] border-[#23D5D5] filter blur-[300px]" />
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 w-[1100px] h-[1100px] rounded-full border-[16px] border-[#23D5D5] filter blur-[200px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
        {isMobile ? (
          // Mobile View
          <>
          <div className="flex flex-col md:items-center md:text-center items-start text-left space-y-6">
            {logo}
            {description}

          
          </div>
          <div className="py-5 flex flex-col items-center space-y-4">
{/* <BrilliantButton variant="white"  hasArrow>
              Get in touch
            </BrilliantButton> */}
            <div onClick={()=>router.push('/contact-us#contact-form')} className="flex items-center justify-center gap-5 ">
                <div className="">

                <h2 className="text-2xl font-semibold text-white ">
                    Get In Touch
                </h2>
                </div>
                <div className="bg-gradient-to-b from-green-950 to-cyan-800 p-2 rounded-full px-4  ">
                <LucideArrowRight className="ml-2 text-white transform rotate-[-40deg]" />
                </div>
            </div>

            <nav>
              <ul className="flex flex-wrap justify-center gap-3 text-sm pt-5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-gray-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

         
</div>
          </>
          
        ) : (
          // Desktop View
          <div className="hidden lg:grid grid-cols-4 gap-12">
            <div className="space-y-6">
              {logo}
              <p className="text-sm leading-relaxed">
                Brilliant AI is a specialist artificial intelligence engineering company focused on designing,
                building and deploying custom AI systems for real-world impact.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-4">Quick Links</h3>
              <ul className="space-y-3 text-md">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-gray-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-4">Our Policies</h3>
              <ul className="space-y-3 text-md">
                <li><Link href="/policies/privacy" className="hover:text-gray-300">Privacy Policy</Link></li>
                <li><Link href="/policies/cookies" className="hover:text-gray-300">Cookies Policy</Link></li>
                <li><Link href="/policies/terms" className="hover:text-gray-300">Terms &amp; Conditions</Link></li>
              </ul>
            </div>

            <div className="space-y-6">
              {socialIcons}
              <h3 className="font-semibold text-2xl">
                We’d Love to Hear <br /> from You!
              </h3>
              <BrilliantButton onClick={()=>router.push('/contact-us')} variant="outline">Get in Touch</BrilliantButton>
            </div>
          </div>
        )}
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 mt-16 w-full border-t border-gray-700 pt-8 px-6 sm:px-20 lg:px-20 text-center">
        {isMobile &&(<>
        <div className="flex flex-col items-center mb-6">
            {socialIcons}
        </div>
        </>)}
        <h6 className="text-sm text-white lg:w-[60%] mx-auto">
          Copyright © 2025 Brilliant AI Ltd. All rights reserved. Brilliant AI Ltd is a company registered in
          England and Wales (Company No: 16134527). Brilliant AI Ltd operates in accordance with applicable UK
          laws and regulations.
        </h6>
      </div>
    </footer>
  );
}