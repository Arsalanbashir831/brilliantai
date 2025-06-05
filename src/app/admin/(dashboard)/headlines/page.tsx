"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import DataTable from "@/components/admin/Datatable";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, Plus } from "lucide-react";
import type { Headline } from "@/types/headline";

export default function HeadlinesPage() {
	const router = useRouter();
	const [headlines, setHeadlines] = useState<Headline[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchHeadlines() {
			try {
				const res = await fetch("/api/headlines");
				if (!res.ok) throw new Error("Failed to fetch headlines");
				const data: Headline[] = await res.json();
				setHeadlines(data);
			} catch (err) {
				console.error(err);
				alert("Error loading headlines");
			} finally {
				setLoading(false);
			}
		}
		fetchHeadlines();
	}, []);

	const handleAdd = () => {
		router.push("/admin/headlines/new");
	};

	const handleEdit = (headline: Headline) => {
		router.push(`/admin/headlines/${headline.id}/`);
	};

	const handleDelete = async (headline: Headline) => {
		if (
			confirm(
				`Are you sure you want to delete "${headline.title}"? This action cannot be undone.`
			)
		) {
			try {
				const res = await fetch(`/api/headlines/${headline.id}`, {
					method: "DELETE",
				});
				if (!res.ok) throw new Error("Delete failed");
				setHeadlines((prev) => prev.filter((h) => h.id !== headline.id));
			} catch (err) {
				console.error(err);
				alert("Error deleting headline");
			}
		}
	};

	const columns = [
		{
			accessor: "title",
			header: "Title",
			cell: ({ getValue }: { getValue: () => unknown }) => (
				<span className="font-medium text-gray-800">{String(getValue())}</span>
			),
		},
		{
			accessor: "description",
			header: "Description",
			cell: ({ getValue }: { getValue: () => unknown }) => (
				<span
					className="font-medium text-gray-800 truncate max-w-[300px] block"
					title={String(getValue())}>
					{String(getValue())}
				</span>
			),
		},
		{
			accessor: "publishedDate",
			header: "Published Date",
			cell: ({ getValue }: { getValue: () => unknown }) => (
				<span className="text-gray-600">
					{new Date(String(getValue())).toLocaleDateString()}
				</span>
			),
		},
		{
			accessor: "actions",
			header: "Actions",
			cell: ({ row }: { row: Headline }) => (
				<div className="flex space-x-2">
					<Button
						variant="ghost"
						size="icon"
						onClick={() => handleEdit(row)}
						aria-label="Edit Headline">
						<Edit className="h-4 w-4 text-blue-600" />
					</Button>
					<Button
						variant="destructive"
						size="icon"
						onClick={() => handleDelete(row)}
						aria-label="Delete Headline">
						<Trash2 className="h-4 w-4" />
					</Button>
				</div>
			),
		},
	];

	return (
		<div className="p-4 md:p-8 min-h-screen">
			<div className="flex items-center justify-between mb-6">
				<h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
					Headlines
				</h1>
				<Button className="bg-blue-700 hover:bg-blue-800" onClick={handleAdd}>
					<Plus className="w-4 h-4 mr-2" />
					Add New Headline
				</Button>
			</div>

			{loading ? (
				<div>Loading…</div>
			) : (
				<div className="bg-white shadow rounded-lg overflow-hidden">
					<DataTable<Headline> columns={columns} data={headlines} />
				</div>
			)}
		</div>
	);
}
