'use client'

import { Geist, Geist_Mono } from "next/font/google";
import '@/app/globals.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { usePathname } from "next/navigation";
import { useAnalytics } from "@/hook/useAnalytics";
import { useEffect } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname();
  const { trackPageview } = useAnalytics();

  useEffect(() => {
    
    trackPageview(pathname);
  }, [pathname,trackPageview]);

  return (
    <html lang="en">
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
        <BackToTop threshold={300} />
        <Footer/>
      </body>
    </html>
  );
}
