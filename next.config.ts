import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// Enable compression for smaller bundle sizes
	compress: true,
	poweredByHeader: false,

	// Optimize images
	images: {
		formats: ["image/avif", "image/webp"],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920],
		imageSizes: [16, 32, 48, 64, 96, 128, 256],
		minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days cache
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

	// Production optimizations
	productionBrowserSourceMaps: false,

	// Turbopack configuration for faster builds
	turbopack: {
		// Configure Turbopack root directory
		root: process.cwd(),
	},

	// Experimental performance features
	experimental: {
		optimizeCss: true,
		serverActions: {
			bodySizeLimit: '2mb',
		},
		// Optimize package imports for faster builds and smaller bundles
		optimizePackageImports: [
			'lucide-react',
			'framer-motion',
			'@radix-ui/react-checkbox',
			'@radix-ui/react-dialog',
			'@radix-ui/react-dropdown-menu',
			'@radix-ui/react-label',
			"@radix-ui/react-radio-group",
			'@radix-ui/react-select',
			'@radix-ui/react-slot',
			'@radix-ui/react-tooltip',
		],
	},

	async headers() {
		return [
			// Hashed Next.js build assets (immutable)
			{
				source: '/_next/static/:path*',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=31536000, immutable',
					},
				],
			},

			// Next.js image optimizer endpoint
			{
				source: '/_next/image',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=86400',
					},
				],
			},

			// Public images
			{
				source: '/images/:path*',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=31536000, immutable',
					},
				],
			},

			// SVGs anywhere
			{
				source: '/:path*.svg',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=31536000, immutable',
					},
				],
			},
		];
	},
};

export default nextConfig;
