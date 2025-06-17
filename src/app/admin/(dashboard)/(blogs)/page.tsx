"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import DataTable from "@/components/admin/Datatable";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Edit, Trash2, Plus } from "lucide-react";
import { Blog } from "@/types/blog";

export default function BlogsPage() {
	const router = useRouter();
	const [blogs, setBlogs] = useState<Blog[]>([]);
	const [loading, setLoading] = useState(true);

	// Fetch list on mount
	useEffect(() => {
		async function fetchBlogs() {
			try {
				const res = await fetch("/api/blogs");
				if (!res.ok) throw new Error("Failed to fetch");
				const data: Blog[] = await res.json();
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

	// Delete handler
	const handleDelete = async (blog: Blog) => {
		if (
			confirm(
				`Are you sure you want to delete "${blog.title}"? This cannot be undone.`
			)
		) {
			try {
				const res = await fetch(`/api/blogs/${blog.id}`, {
					method: "DELETE",
				});
				if (!res.ok) throw new Error("Delete failed");
				// Remove from state
				setBlogs((prev) => prev.filter((b) => b.id !== blog.id));
			} catch (err) {
				console.error(err);
				alert("Error deleting blog");
			}
		}
	};

	const handleEdit = (blog: Blog) => {
		router.push(`/admin/${blog.id}`);
	};

	const handleAddNew = () => {
		router.push("/admin/new"); // match your route
	};

	const columns = [
		{
			accessor: "thumbnailUrl",
			header: "Thumbnail",
			cell: ({ getValue }: { getValue: () => unknown }) => (
				<div className="w-24 h-14 relative">
					<Image
						src={getValue() as string}
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
			cell: ({ getValue }: { getValue: () => unknown }) => (
				<span className="font-medium text-gray-800">
					{getValue() as string}
				</span>
			),
		},
		{
			accessor: "description",
			header: "Content",
			cell: ({ getValue }: { getValue: () => unknown }) => (
				<span
					className="font-medium text-gray-800 truncate max-w-[300px] block"
					title={getValue() as string}>
					{getValue() as string}
				</span>
			),
		},
		{
			accessor: "publishedDate",
			header: "Published Date",
			cell: ({ getValue }: { getValue: () => unknown }) => (
				<span className="text-gray-600">
					{new Date(getValue() as string).toLocaleDateString()}
				</span>
			),
		},
		{
			accessor: "actions",
			header: "Actions",
			cell: ({ row }: { row: Blog }) => (
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
				<Button
					className="bg-blue-700 hover:bg-blue-900"
					onClick={handleAddNew}>
					<Plus className="w-4 h-4 mr-2" />
					Add New Blog
				</Button>
			</div>
			{loading ? (
				<div>Loading…</div>
			) : (
				<div className="bg-white shadow rounded-lg overflow-hidden">
					<DataTable<Blog> columns={columns} data={blogs} />
				</div>
			)}
		</div>
	);
}
