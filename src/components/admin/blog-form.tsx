"use client";

import React, { useState, useRef } from "react";
import type EditorJS from "@editorjs/editorjs";
import Editor from "./Editor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export type EJOutputData = import("@editorjs/editorjs").OutputData;

export type BlogFormValues = {
	title: string;
	publishedDate: string;
	thumbnailFile: File | null;
	content: EJOutputData;
	category: string;
	author: string;
};

export type BlogInitialData = {
	title: string;
	publishedDate: string;
	thumbnailUrl: string;
	content: EJOutputData;
	category: string;
	author: string;
};

interface BlogFormProps {
	initialValues?: BlogInitialData;
	onSubmit: (values: BlogFormValues) => Promise<void> | void;
	submitLabel: string;
	isSubmitting?: boolean;
}

export default function BlogForm({
	initialValues,
	onSubmit,
	submitLabel,
	isSubmitting = false,
}: BlogFormProps) {
	const [title, setTitle] = useState(initialValues?.title || "");
	const [publishedDate, setPublishedDate] = useState(
		initialValues?.publishedDate || new Date().toISOString().substring(0, 10)
	);
	const [category, setCategory] = useState(initialValues?.category || "");
	const [author, setAuthor] = useState(initialValues?.author || "");

	const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
	const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(
		initialValues?.thumbnailUrl || null
	);

	const [contentData, setContentData] = useState<EJOutputData>(
		initialValues?.content || { time: Date.now(), blocks: [], version: "" }
	);

	const editorInstanceRef = useRef<EditorJS | null>(null);

	const handleEditorChange = (data: EJOutputData) => {
		setContentData(data);
	};

	const handleEditorInitialize = (instance: EditorJS) => {
		editorInstanceRef.current = instance;
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0] ?? null;
		setThumbnailFile(file);
		if (file) {
			const reader = new FileReader();
			reader.onload = () => setThumbnailPreview(reader.result as string);
			reader.readAsDataURL(file);
		} else {
			setThumbnailPreview(initialValues?.thumbnailUrl || null);
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		let finalContent = contentData;
		if (editorInstanceRef.current) {
			finalContent = await editorInstanceRef.current.save();
		}

		if (!title.trim() || !finalContent.blocks.length) {
			alert("Title and body are required.");
			return;
		}

		await onSubmit({
			title: title.trim(),
			publishedDate,
			thumbnailFile,
			content: finalContent,
			category,
			author,
		});
	};

	return (
		<Card className="max-w-3xl mx-auto p-6 shadow-lg bg-white">
			<CardHeader>
				<CardTitle>{submitLabel}</CardTitle>
			</CardHeader>
			<CardContent>
				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<Label htmlFor="title">Title</Label>
						<Input
							id="title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							required
						/>
					</div>

					<div>
						<Label htmlFor="publishedDate">Published Date</Label>
						<Input
							type="date"
							id="publishedDate"
							value={publishedDate}
							onChange={(e) => setPublishedDate(e.target.value)}
						/>
					</div>

					<div>
						<Label htmlFor="category">Category</Label>
						<Input
							id="category"
							value={category}
							onChange={(e) => setCategory(e.target.value)}
							required
						/>
					</div>

					<div>
						<Label htmlFor="author">Author Name</Label>
						<Input
							id="author"
							value={author}
							onChange={(e) => setAuthor(e.target.value)}
							required
						/>
					</div>

					<div>
						<Label htmlFor="thumbnailFile">Thumbnail</Label>
						<Input
							type="file"
							id="thumbnailFile"
							accept="image/*"
							onChange={handleFileChange}
						/>
						{thumbnailPreview && (
							<Image
								src={thumbnailPreview}
								alt="Thumbnail preview"
								width={150}
								height={150}
								className="mt-2 rounded border object-cover"
							/>
						)}
					</div>

					<div>
						<Label>Content</Label>
						<Editor
							onChange={handleEditorChange}
							onInitialize={handleEditorInitialize}
							initialData={initialValues?.content}
						/>
					</div>

					<Button
						variant="outline"
						type="submit"
						disabled={isSubmitting}
						className="mt-4">
						{isSubmitting ? "Saving…" : submitLabel}
					</Button>
				</form>
			</CardContent>
		</Card>
	);
}
