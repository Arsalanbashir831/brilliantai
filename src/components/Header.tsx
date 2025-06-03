// components/Header.tsx
"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, ArrowRight } from "lucide-react";
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

  useEffect(() => {
    // Update hash when it changes
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
      // Only active if pathname is "/" and there's no hash
      return pathname === "/" && hash === "";
    }
    if (href.startsWith("/#")) {
      // Only active if hash matches
      return pathname === "/" && hash === href.replace("/", "");
    }
    // For other links (e.g., /about)
    return pathname === href;
  };

  return (
    <nav className="relative z-10 bg-[#011010] border-b border-[#C3FFFF]">
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
          <BrilliantButton className="px-4 py-2 text-sm" variant="white">
            Book a Call
          </BrilliantButton>
        )}

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Slide‐Down Menu */}
      <AnimatePresence initial={false}>
        {mobileOpen && isMobile && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-[#011010] border-t border-[#C3FFFF]"
          >
            <div className="flex flex-col space-y-6 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-lg ${
                    isActive(item.href)
                      ? "text-cyan-400 font-semibold"
                      : "text-white hover:text-cyan-300"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <Button
                className="flex items-center justify-center bg-white text-teal-900 hover:bg-gray-100 rounded-full px-6 py-3"
                onClick={() => setMobileOpen(false)}
              >
                Book a Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
