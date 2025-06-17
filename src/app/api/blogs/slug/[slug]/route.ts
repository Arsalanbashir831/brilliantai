// /app/api/blogs/slug/[slug]/route.ts

import { NextRequest, NextResponse } from "next/server";
import { db } from "@/firebase/admin";

export async function GET(
    req: NextRequest,
    { params }: { params: { slug: string } }
) {
    const { slug } = params;

    // 1) Look up the blogId from the slug index
    const titleSnap = await db.ref(`blogTitles/${slug}`).once("value");
    const blogId = titleSnap.val() as string | null;

    if (!blogId) {
        return NextResponse.json(
            { error: "Blog not found" },
            { status: 404 }
        );
    }

    // 2) Fetch the actual blog record
    const blogSnap = await db.ref(`blogs/${blogId}`).once("value");
    const data = blogSnap.val();
    if (!data) {
        return NextResponse.json(
            { error: "Blog data missing" },
            { status: 404 }
        );
    }

    // 3) Combine id + data and return
    const blog = { id: blogId, ...(data as Record<string, unknown>) };
    return NextResponse.json(blog, { status: 200 });
}
