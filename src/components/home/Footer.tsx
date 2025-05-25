// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import { Mail, Linkedin, X } from "lucide-react";

export default function Footer() {
    return (
        <footer
            className="text-white  "
            style={{
                backgroundImage: "url('/home/Ellipse.png)",
                
            }}
        >
            <div className="max-w-7xl mx-20 px-6 py-20 flex justify-between items-top gap-10">
                {/* Logo and Description */}
                <div>
                    <Image src="/logo.svg" alt="Brilliant AI" width={200} height={80} />
                    <p className="mt-4 text-sm max-w-xs">
                        Brilliant AI is a specialist artificial intelligence engineering company focused on designing, building and deploying custom AI systems for real-world impact.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold text-xl mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-md">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/startup">Startup</Link></li>
                        <li><Link href="/news">News</Link></li>
                        <li><Link href="/company">Company</Link></li>
                        <li><Link href="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Policies */}
                <div>
                    <h3 className="font-semibold text-xl mb-3">Our Policies</h3>
                    <ul className="space-y-2  text-md">
                        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link href="/cookies-policy">Cookies Policy</Link></li>
                        <li><Link href="/terms">Terms & Condition</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <div className="flex space-x-4 mb-4">
                        <div className=" border rounded-full p-2">
                            <X className="hover:text-gray-300 cursor-pointer" />
                        </div>

                        <div className=" border rounded-full p-2">
                            <Linkedin className="hover:text-gray-300 cursor-pointer" />
                        </div>

                        <div className=" border rounded-full p-2">
                            <Mail className="hover:text-gray-300 cursor-pointer " />
                        </div>
                    </div>
                    <h3 className="font-semibold text-2xl mb-3">We’d Love to Hear <br /> from You!</h3>
                    <Link href="/contact">
                        <button className="px-5 py-2 border border-teal-400 rounded-full text-teal-400 hover:bg-teal-500 hover:text-white transition">
                            Get in Touch
                        </button>
                    </Link>
                </div>
            </div>

            <div className="w-full    flex justify-center items-center   text-xs  px-20">
                <div className="border-t flex justify-center items-center border-gray-700 py-4  px-4 w-full ">

                    <p className="max-w-3xl text-center" >

                        Copyright © 2025 Brilliant AI Ltd. All rights reserved. Brilliant AI Ltd is a company registered in England and Wales (Company No: 16134527). Brilliant AI Ltd operates in accordance with applicable UK laws and regulations.
                    </p>
                </div>
            </div>
        </footer>
    );
}
