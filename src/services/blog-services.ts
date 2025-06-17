// services/blog-services.ts

import { v4 as uuidv4 } from "uuid";
import type { Blog } from "@/types/blog";
import { db, bucket } from "@/firebase/admin";

// — simple slugifier —
function slugifyTitle(title: string): string {
  return title
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "");
}

// Helper: upload a File (Buffer) to Storage and return { publicUrl, pathInBucket }
async function uploadThumbnail(
  fileName: string,
  buffer: Buffer,
  mimeType: string
): Promise<{ publicUrl: string; pathInBucket: string }> {
  const uniqueId = uuidv4();
  const extension = fileName.split(".").pop();
  const pathInBucket = `blogs/${uniqueId}.${extension}`;
  const fileRef = bucket.file(pathInBucket);

  await fileRef.save(buffer, {
    contentType: mimeType,
    resumable: false,
  });
  await fileRef.makePublic();

  const publicUrl = `https://storage.googleapis.com/${bucket.name}/${pathInBucket}`;
  return { publicUrl, pathInBucket };
}

// Create a new blog record:
// 1) Atomically claim the slug under /blogTitles
// 2) Upload thumbnail to Storage
// 3) Write the blog under /blogs/{blogId}
// 4) Roll back slug claim if anything fails
export async function createBlog(
  title: string,
  description: string,
  fileName: string,
  fileBuffer: Buffer,
  mimeType: string
): Promise<Blog> {
  const slug     = slugifyTitle(title);
  const blogId   = uuidv4();
  const titleRef = db.ref(`blogTitles/${slug}`);

  // 1) Claim the slug (transaction will abort if already exists)
  const tx = await titleRef.transaction(current => {
    if (current !== null) return;     // abort
    return blogId;                    // claim it
  });
  if (!tx.committed) {
    throw new Error("TITLE_EXISTS");
  }

  // 2) Upload & 3) Write blog inside try/catch
  let publicUrl: string;
  let pathInBucket: string;
  let publishedDate: string;

  try {
    ({ publicUrl, pathInBucket } = await uploadThumbnail(
      fileName, fileBuffer, mimeType
    ));
    publishedDate = new Date().toISOString();

    const blogData = {
      title,
      description,
      thumbnailUrl:  publicUrl,
      thumbnailPath: pathInBucket,
        publishedDate,
      slug,
    };
    await db.ref(`blogs/${blogId}`).set(blogData);
  } catch (err) {
    // 4) Rollback slug claim on any failure
    await titleRef.remove();
    throw err;
  }

  // 5) Return a full Blog object
  return {
    id:             blogId,
    title,
    description,
    thumbnailUrl:   publicUrl,
    thumbnailPath:  pathInBucket,
      publishedDate,
    slug,
  };
}

// List all blogs
export async function listBlogs(): Promise<Blog[]> {
  const snapshot = await db.ref("blogs").once("value");
  const raw: Record<string, Omit<Blog, "id">> = snapshot.val() || {};
  return Object.entries(raw).map(([id, data]) => ({
    id,
    ...data,
  } as Blog));
}

// Get a single blog by id
export async function getBlogById(id: string): Promise<Blog | null> {
  const snapshot = await db.ref(`blogs/${id}`).once("value");
  const data = snapshot.val();
  if (!data) return null;
  return { id, ...(data as Omit<Blog, "id">) } as Blog;
}

// Update an existing blog (no slug‐change logic here)
export async function updateBlog(
  id: string,
  title: string,
  description: string,
  newFile?: {
    fileName: string;
    buffer: Buffer;
    mimeType: string;
  }
): Promise<Blog | null> {
    const blogSnapshot = await db.ref(`blogs/${id}`).once("value");
    const raw = blogSnapshot.val();
    if (!raw) return null;

 

    const existing = raw as {
        title: string;
        description: string;
        thumbnailUrl: string;
        thumbnailPath: string;
        publishedDate: string;
        slug: string;
        [key: string]: unknown;
    };
    
  let thumbnailUrl  = existing.thumbnailUrl;
  let thumbnailPath = existing.thumbnailPath;

  if (newFile) {
    // Delete old
    if (thumbnailPath) {
      try {
        await bucket.file(thumbnailPath).delete();
      } catch {
        /* ignore */}
    }
    // Upload new
    const uploadRes = await uploadThumbnail(
      newFile.fileName,
      newFile.buffer,
      newFile.mimeType
    );
    thumbnailUrl  = uploadRes.publicUrl;
    thumbnailPath = uploadRes.pathInBucket;
  }

  const updatedData: Partial<Omit<Blog, "id">> = {
    title,
    description,
    thumbnailUrl,
    thumbnailPath,
    // keep existing.publishedDate
  };
  await db.ref(`blogs/${id}`).update(updatedData);

  return {
    id,
    title,
    description,
    thumbnailUrl,
    thumbnailPath,
      publishedDate: existing.publishedDate,
      slug: existing.slug,
  };
}

// Delete a blog
export async function deleteBlog(id: string): Promise<boolean> {
  const blog = await getBlogById(id);
  if (!blog) return false;

  // Delete thumbnail
  if (blog.thumbnailPath) {
    try {
      await bucket.file(blog.thumbnailPath).delete();
    } catch {
      /* ignore */}
  }

  // Remove blog record
  await db.ref(`blogs/${id}`).remove();
  return true;
}
