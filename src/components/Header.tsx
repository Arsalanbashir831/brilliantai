"use client";

import { usePathname, useRouter } from "next/navigation";

import { Menu, X as Close, } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BrilliantButton from "./widgets/BrilliantButtons";
import { useEffect, useState } from "react";
import useMobile from "@/hook/useMobile";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const isMobile = useMobile();
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Startup", href: "/startup" },
    { name: "News", href: "/news" },
    { name: "Company", href: "/about" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" && hash === "";
    }
    if (href.startsWith("/#")) {
      return pathname === "/" && hash === href.replace("/", "");
    }
    return pathname === href;
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#011010] border-b border-[#C3FFFF]">
      <div className="flex items-center justify-between p-4 lg:px-20 lg:py-3">
        <Image
          height={150}
          width={150}
          src="/logo.svg"
          alt="Logo"
          className="h-8 lg:h-10"
        />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`transition-colors ${
                isActive(item.href)
                  ? "text-cyan-400 font-semibold"
                  : "text-white hover:text-cyan-300"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop “Book a Call” */}
        {!isMobile && (
          <BrilliantButton
          onClick={()=>router.push('/contact-us#contact-form')}
            className="px-4 py-2 text-sm"
            variant="white"
          >
            Book a Call
          </BrilliantButton>
        )}

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Glassy Overlay Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && isMobile && (
          <motion.div
            key="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-[#00000069] bg-opacity-80 backdrop-blur-md flex flex-col"
          >
            <div className="flex justify-end p-4">
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <Close className="h-6 w-6 text-white" />
              </button>
            </div>
            <div className="flex-grow flex flex-col items-center justify-center space-y-8 px-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-2xl font-medium ${
                    isActive(item.href)
                      ? "text-cyan-400"
                      : "text-white hover:text-cyan-300"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            
              <BrilliantButton onClick={()=>router.push('/contact-us#contact-form')} className="w-full">
              Book a Call
              </BrilliantButton>
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
