// /app/api/blogs/[id]/route.ts
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getBlogById, deleteBlog, updateBlogWithSlugChange } from "@/services/blog-services";
import slugify from "slugify";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
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
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const formData = await req.formData();
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const file = formData.get("thumbnail") as File | null;

    if (!title || !description) {
      return NextResponse.json({ error: "Missing title or description" }, { status: 400 });
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

    // 🧠 Step: auto-regenerate slug
    const baseSlug = slugify(title, { lower: true, strict: true });
    const newSlug = `${baseSlug}`; 

    const updated = await updateBlogWithSlugChange(id, newSlug, title, description, newFileBuffer);

    if (!updated) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(updated, { status: 200 });
  } catch (err) {
    console.error(`PATCH /api/blogs/${id} error:`, err);
    return NextResponse.json({ error: "Failed to update blog" }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
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
