import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import type { Metadata } from "next";
import ClientAnalytics from "@/components/home/client-analytics";

export const metadata: Metadata = {
	openGraph: {
		title: "Unlock Your Vision With Transformative AI",
		description:
			"We take you from idea to execution by building AI web apps, developing machine learning solutions and implementing AI-driven processes that power scalable products and smarter operations.",
		url: process.env.NEXT_PUBLIC_FRONTEND_URL + "/",
	},
	twitter: {
		title: "Unlock Your Vision With Transformative AI - Brilliant AI",
		description:
			"We take you from idea to execution by building AI web apps, developing machine learning solutions and implementing AI-driven processes that power scalable products and smarter operations.",
	},
};

export default function LandingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="antialiased">
				<Header />
				{/* Wrap the page content with the client-only analytics */}
				<ClientAnalytics>{children}</ClientAnalytics>
				<BackToTop threshold={300} />
				<Footer />
			</body>
		</html>
	);
}
