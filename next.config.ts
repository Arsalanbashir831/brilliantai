import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		domains: [
			"plus.unsplash.com",
			"images.unsplash.com",
			"storage.googleapis.com",
		],
	},
};

export default nextConfig;
