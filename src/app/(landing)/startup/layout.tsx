import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "AI Product Engineering for Startups",
	description:
		"We help founders bring AI ideas to life. From focused MVPs to complete, scalable platforms, we deliver intelligent systems built for performance, speed and long-term growth.",
	openGraph: {
		title: "AI Product Engineering for Startups - Brilliant AI",
		description:
			"We help founders bring AI ideas to life. From focused MVPs to complete, scalable platforms, we deliver intelligent systems built for performance, speed and long-term growth.",
		url: process.env.NEXT_PUBLIC_FRONTEND_URL + "/startup",
	},
	twitter: {
		title: "AI Product Engineering for Startups - Brilliant AI",
		description:
			"We help founders bring AI ideas to life. From focused MVPs to complete, scalable platforms, we deliver intelligent systems built for performance, speed and long-term growth.",
	},
};

export default function StartupLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
