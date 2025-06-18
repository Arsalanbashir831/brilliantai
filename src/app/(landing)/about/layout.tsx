import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About",
	description:
		"Brilliant AI is an artificial intelligence engineering company built for the future of business. Headquartered in the UK, we are the most cost effective AI partner in the market, trusted by startups, law firms, and forward thinking companies that want to build smart and move fast. We were founded to break away from the outdated agency model. No bloated teams, no recycled solutions, no empty promises. Just real engineering, real outcomes, and real collaboration.",
	openGraph: {
		title: "Driving Innovation with Scalable AI Solutions",
		description:
			"Brilliant AI is an artificial intelligence engineering company built for the future of business. Headquartered in the UK, we are the most cost effective AI partner in the market, trusted by startups, law firms, and forward thinking companies that want to build smart and move fast. We were founded to break away from the outdated agency model. No bloated teams, no recycled solutions, no empty promises. Just real engineering, real outcomes, and real collaboration.",
		url: process.env.NEXT_PUBLIC_FRONTEND_URL + "/about",
		images: [
			{
				url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/opengraph-image.png`,
				width: 1200,
				height: 630,
				alt: "Brilliant AI Logo",
			},
			{
				url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/opengraph-image.png`,
				width: 600,
				height: 315,
				alt: "Brilliant AI Logo",
			},
		],
	},
	twitter: {
		title: "Driving Innovation with Scalable AI Solutions",
		description:
			"Brilliant AI is an artificial intelligence engineering company built for the future of business. Headquartered in the UK, we are the most cost effective AI partner in the market, trusted by startups, law firms, and forward thinking companies that want to build smart and move fast. We were founded to break away from the outdated agency model. No bloated teams, no recycled solutions, no empty promises. Just real engineering, real outcomes, and real collaboration.",
	},
};

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
