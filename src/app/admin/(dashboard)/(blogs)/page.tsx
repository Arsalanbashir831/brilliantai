// File: src/app/admin/blogs/page.tsx  (or wherever your path is)
"use client";

import React, { useEffect, useState } from "react";
import DataTable from "@/components/admin/Datatable";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Edit, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import type { BlogWithContent } from "@/lib/blog-utils";

export default function BlogsPage() {
	const router = useRouter();

	// State for loaded blogs
	const [blogs, setBlogs] = useState<BlogWithContent[]>([]);
	const [loading, setLoading] = useState(true);

	// Fetch all blogs once on mount
	useEffect(() => {
		async function fetchBlogs() {
			try {
				const res = await fetch("/api/blogs");
				if (!res.ok) throw new Error("Failed to fetch blogs");
				const data: BlogWithContent[] = await res.json();
				setBlogs(data);
			} catch (err) {
				console.error(err);
				alert("Error loading blogs");
			} finally {
				setLoading(false);
			}
		}
		fetchBlogs();
	}, []);

	const handleNew = () => {
		router.push("/admin/new");
	};

	const handleEdit = (blog: BlogWithContent) => {
		router.push(`/admin/${blog.id}`);
	};

	// Delete a blog: confirm, call DELETE, then remove from state
	const handleDelete = async (blog: BlogWithContent) => {
		if (
			typeof window !== "undefined" &&
			window.confirm(`Are you sure you want to delete "${blog.title}"?`)
		) {
			try {
				const res = await fetch(`/api/blogs/${blog.id}`, {
					method: "DELETE",
				});
				if (!res.ok) {
					const errorResult = await res.json();
					throw new Error(errorResult.error || "Deletion failed");
				}
				// Remove from state
				setBlogs((prev) => prev.filter((b) => b.id !== blog.id));
			} catch (err: unknown) {
				console.error("Error deleting blog:", err);
				alert(
					"Error deleting blog: " + (err instanceof Error ? err.message : err)
				);
			}
		}
	};

	const columns = [
		{
			accessor: "thumbnailUrl",
			header: "Thumbnail",
			cell: ({
				getValue,
			}: {
				row: BlogWithContent;
				getValue: () => unknown;
			}) => (
				<div className="w-24 h-14 relative">
					<Image
						src={(getValue() as string) || "/placeholder.png"}
						alt="Blog thumbnail"
						fill
						style={{ objectFit: "cover" }}
						className="rounded"
					/>
				</div>
			),
		},
		{
			accessor: "title",
			header: "Title",
			cell: ({
				getValue,
			}: {
				row: BlogWithContent;
				getValue: () => unknown;
			}) => (
				<span className="font-medium text-gray-800">
					{getValue() as string}
				</span>
			),
		},
		{
			accessor: "publishedDate",
			header: "Published Date",
			cell: ({
				getValue,
			}: {
				row: BlogWithContent;
				getValue: () => unknown;
			}) => <span className="text-gray-600">{getValue() as string}</span>,
		},
		{
			accessor: "actions",
			header: "Actions",
			cell: ({ row }: { row: BlogWithContent }) => (
				<div className="flex space-x-2">
					<Button
						variant="ghost"
						size="icon"
						onClick={() => handleEdit(row)}
						aria-label="Edit Blog">
						<Edit className="h-4 w-4 text-blue-600" />
					</Button>
					<Button
						variant="destructive"
						size="icon"
						onClick={() => handleDelete(row)}
						aria-label="Delete Blog">
						<Trash2 className="h-4 w-4" />
					</Button>
				</div>
			),
		},
	];

	return (
		<div className="p-4 md:p-8 min-h-screen">
			<div className="flex justify-between items-center mb-6">
				<h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
					Blogs
				</h1>
				<Button className="border font-black text-black" onClick={handleNew}>
					Add Blog
				</Button>
			</div>

			{loading ? (
				<div className="text-center py-12 text-gray-500">Loading…</div>
			) : (
				<div className="bg-white shadow rounded-lg overflow-hidden">
					<DataTable<BlogWithContent> columns={columns} data={blogs} />
				</div>
			)}
		</div>
	);
}
