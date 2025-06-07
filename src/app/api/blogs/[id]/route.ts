// src/app/api/blogs/[id]/route.ts
import { NextResponse } from "next/server";
import { getBlogById, updateBlog, deleteBlog } from "@/services/blog-services";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const id = params.id as string;
  try {
    const blog = await getBlogById(id);
    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json(blog, { status: 200 });
  } catch (err) {
    console.error(`GET /api/blogs/${id} error:`, err);
    return NextResponse.json({ error: "Failed to fetch blog" }, { status: 500 });
  }
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const id = params.id as string;
  try {
    const formData = await req.formData();
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const file = formData.get("thumbnail") as File | null;

    if (!title || !description) {
      return NextResponse.json(
        { error: "Missing title or description" },
        { status: 400 }
      );
    }

    let newFileBuffer:
      | { fileName: string; buffer: Buffer; mimeType: string }
      | undefined;

    if (file && file.size > 0) {
      const arrayBuffer = await file.arrayBuffer();
      newFileBuffer = {
        fileName: file.name,
        buffer: Buffer.from(arrayBuffer),
        mimeType: file.type,
      };
    }

    const updated = await updateBlog(id, title, description, newFileBuffer);
    if (!updated) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(updated, { status: 200 });
  } catch (err) {
    console.error(`PATCH /api/blogs/${id} error:`, err);
    return NextResponse.json({ error: "Failed to update blog" }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const id = params.id as string;
  try {
    const success = await deleteBlog(id);
    if (!success) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Deleted successfully" }, { status: 200 });
  } catch (err) {
    console.error(`DELETE /api/blogs/${id} error:`, err);
    return NextResponse.json({ error: "Failed to delete blog" }, { status: 500 });
  }
}
