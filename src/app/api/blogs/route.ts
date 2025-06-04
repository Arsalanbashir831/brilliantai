import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createBlog, getAllBlogs, BlogWithContent } from "@/lib/blog-utils";

export async function GET() {
	try {
		const allBlogs: BlogWithContent[] = await getAllBlogs();
		return NextResponse.json(allBlogs, { status: 200 });
	} catch (err: unknown) {
		console.error("Error fetching all blogs:", err);
		return NextResponse.json(
			{ error: err instanceof Error ? err.message : "Server error." },
			{ status: 500 }
		);
	}
}

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const { title, publishedDate, thumbnail, content, category, author } = body;

		if (!title || !content || !category || !author) {
			return NextResponse.json(
				{ error: "Title, content, category, and author are required." },
				{ status: 400 }
			);
		}

		const newId = await createBlog({
			title,
			publishedDate,
			thumbnail,
			content,
			category,
			author,
		});
		return NextResponse.json({ id: newId }, { status: 201 });
	} catch (err: unknown) {
		console.error("Error creating blog:", err);
		return NextResponse.json(
			{ error: err instanceof Error ? err.message : "Server error." },
			{ status: 500 }
		);
	}
}
