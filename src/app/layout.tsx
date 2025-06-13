import type { Metadata } from "next";
import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Brilliant AI</title>
        <meta name="description" content={metadata.description ?? ""} />
      
       
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <FaviconSwitcher />
        {children}
      </body>
    </html>
  );
}
