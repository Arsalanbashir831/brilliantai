import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				hostname: "plus.unsplash.com",
				protocol: "https",
			},
			{
				hostname: "images.unsplash.com",
				protocol: "https",
			},
			{
				hostname: "storage.googleapis.com",
				protocol: "https",
			},
		],
	},
};

export default nextConfig;
