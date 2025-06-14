// src/components/admin/Sidebar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BookOpen, Newspaper, Users2 } from "lucide-react";
import LogoutButton from "./LogoutButton";

interface NavLinkProps {
	href: string;
	icon: React.ElementType;
	label: string;
	isActive?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({
	href,
	icon: Icon,
	label,
	isActive,
}) => (
	<Link
		href={href}
		className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
			isActive
				? "bg-gray-800 text-white"
				: "text-gray-400 hover:text-white hover:bg-gray-700"
		}`}>
		<Icon className="h-5 w-5" />
		<span className="text-sm font-medium">{label}</span>
	</Link>
);

export function Sidebar() {
	const currentPath = usePathname();

	const navItems = [
		{ href: "/admin?blogs", icon: BookOpen, label: "Blogs" },
		{ href: "/admin/headlines", icon: Newspaper, label: "Headlines" },
		{ href: "/admin/subscriptions", icon: Users2, label: "Subscriptions" },
	];

	return (
		<aside className="flex flex-col w-64 bg-gray-900 h-screen sticky top-0">
			{/* Logo Section */}
			<div className="flex h-16 items-center border-b border-gray-800 px-6 shrink-0">
				<Link href="/" className="flex items-center gap-2">
					<Image
						src="/logo.svg"
						alt="Brilliant AI Logo"
						width={132}
						height={132}
						onError={(e) => {
							(e.target as HTMLImageElement).style.display = "none";
						}}
					/>
				</Link>
			</div>

			{/* Navigation Links */}
			<nav className="flex-1 overflow-auto py-4 px-4 space-y-1">
				{navItems.map((item) => {
					const isBlogsLink = item.href === "/admin?blogs";
					const isActive =
						(isBlogsLink &&
							(currentPath === "/admin" ||
								currentPath.startsWith(item.href))) ||
						(!isBlogsLink && currentPath.startsWith(item.href));

					return (
						<NavLink
							key={item.href}
							href={item.href}
							icon={item.icon}
							label={item.label}
							isActive={isActive}
						/>
					);
				})}
			</nav>

			{/* Logout Button */}
			<div className="px-4 py-4 border-t border-gray-800 mt-auto">
				<LogoutButton />
			</div>
		</aside>
	);
}
