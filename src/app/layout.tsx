import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { Metadata } from "next";

import FaviconSwitcher from "@/components/FaviconSwitcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brilliant AI",
  description:
    "We take you from idea to execution by building AI web apps, developing machine learning solutions and implementing AI-driven processes that power scalable products and smarter operations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <FaviconSwitcher />
        {children}

       
      </body>
    </html>
  );
}
