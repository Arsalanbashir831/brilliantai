// components/BackToTop.tsx
"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

interface BackToTopProps {
  /** How many pixels scrolled before showing */
  threshold?: number;
}

export default function BackToTop({ threshold = 300 }: BackToTopProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.pageYOffset > threshold);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 z-50 p-3 rounded-full  bg-teal-700 text-white hover:bg-teal-500 transition cursor-pointer    
       bg-[radial-gradient(circle_at_center,rgba(35,213,213,0.6)_0%,rgba(35,213,213,0.1)_0%,rgba(35,213,213,0.04)_100%)]
            bg-opacity-10
            backdrop-blur-[30px]
      shadow-[inset_-20px_4px_120px_-80px_rgba(31,187,187,0.14)]"
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
