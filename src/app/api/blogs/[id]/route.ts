import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
	getBlogById,
	updateBlog,
	deleteBlog,
	BlogWithContent,
} from "@/lib/blog-utils";

export async function GET(
	request: NextRequest,
	{ params }: { params: { id: string } }
) {
	const { id } = params;
	try {
		const blog: BlogWithContent | null = await getBlogById(id);
		if (!blog) {
			return NextResponse.json({ error: "Blog not found." }, { status: 404 });
		}
		return NextResponse.json(blog, { status: 200 });
	} catch (err: unknown) {
		console.error("Error fetching blog:", err);
		return NextResponse.json(
			{ error: err instanceof Error ? err.message : "Server error." },
			{ status: 500 }
		);
	}
}

export async function PUT(
	request: NextRequest,
	{ params }: { params: { id: string } }
) {
	const { id } = params;
	try {
		const body = await request.json();
		const { title, publishedDate, thumbnail, content, category, author } = body;

		if (!title || !content || !category || !author) {
			return NextResponse.json(
				{ error: "Title, content, category, and author are required." },
				{ status: 400 }
			);
		}

		await updateBlog(id, {
			title,
			publishedDate,
			thumbnail,
			content,
			category,
			author,
		});
		return NextResponse.json({ message: "Blog updated." }, { status: 200 });
	} catch (err: unknown) {
		console.error("Error updating blog:", err);
		return NextResponse.json(
			{ error: err instanceof Error ? err.message : "Server error." },
			{ status: 500 }
		);
	}
}

export async function DELETE(
	request: NextRequest,
	{ params }: { params: { id: string } }
) {
	const { id } = params;
	try {
		await deleteBlog(id);
		return NextResponse.json({ message: "Blog deleted." }, { status: 200 });
	} catch (err: unknown) {
		console.error("Error deleting blog:", err);
		return NextResponse.json(
			{ error: err instanceof Error ? err.message : "Server error." },
			{ status: 500 }
		);
	}
}
