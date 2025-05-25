// components/Footer.tsx

import Image from "next/image";
import Link from "next/link";
import { Mail, Linkedin, X } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#0A1F1E] text-white
        pb-2 pt-48
        bg-[url('/ringbg.png')]
        bg-no-repeat
        bg-bottom
        bg-center
      "
    >
     
      <div
       
      />

      <div/>


      <div
        className="
          absolute
          top-1/2 right-0
          transform -translate-y-1/2 translate-x-1/2
          w-[1600px] h-[1600px]
          rounded-full
          border-[24px] border-[#23D5D5]
          filter blur-[300px]
        "
      />

      {/* → Right inner half-ring */}
      <div
        className="
          absolute
          top-1/2 right-0
          transform -translate-y-1/2 translate-x-1/2
          w-[1100px] h-[1100px]
          rounded-full
          border-[16px] border-[#23D5D5]
          filter blur-[200px]
        "
      />

      {/* ─── Content ───────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-20 px-6 flex justify-between items-start gap-16">
        {/* Logo + Description */}
        <div>
          <Image src="/logo.svg" alt="Brilliant AI" width={200} height={80} />
          <p className="mt-6 text-sm max-w-xs">
            Brilliant AI is a specialist artificial intelligence engineering company focused on designing,
            building and deploying custom AI systems for real-world impact.
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

        {/* Our Policies */}
        <div>
          <h3 className="font-semibold text-xl mb-4">Our Policies</h3>
          <ul className="space-y-3 text-md">
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/cookies-policy">Cookies Policy</Link></li>
            <li><Link href="/terms">Terms &amp; Conditions</Link></li>
          </ul>
        </div>

        {/* Contact CTA */}
        <div>
          <div className="flex space-x-4 mb-6">
            <div className="border rounded-full p-2"><X className="hover:text-gray-300 cursor-pointer" /></div>
            <div className="border rounded-full p-2"><Linkedin className="hover:text-gray-300 cursor-pointer" /></div>
            <div className="border rounded-full p-2"><Mail className="hover:text-gray-300 cursor-pointer" /></div>
          </div>
          <h3 className="font-semibold text-2xl mb-4">
            We’d Love to Hear<br />from You!
          </h3>
          <Link href="/contact">
            <button className="px-6 py-3 border border-teal-400 rounded-full text-teal-400 hover:bg-teal-500 hover:text-white transition">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>

      {/* ─── Bottom bar ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 mt-16 w-full border-t border-gray-700 pt-8 px-20 flex justify-center ">
        <h6 className="text-sm text-center text-white w-[60%]">
          Copyright © 2025 Brilliant AI Ltd. All rights reserved. Brilliant AI Ltd is a company
          registered in England and Wales (Company No: 16134527). Brilliant AI Ltd operates in
          accordance with applicable UK laws and regulations.
        </h6>
      </div>
    </footer>
  );
}
