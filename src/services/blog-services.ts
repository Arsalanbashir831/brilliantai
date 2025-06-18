import { v4 as uuidv4 } from "uuid";
import type { Blog } from "@/types/blog";
import { db, bucket } from "@/firebase/admin";

import slugify from "slugify";

// Helper: upload a File (Buffer) to Storage and return { publicUrl, pathInBucket }
async function uploadThumbnail(
	fileName: string,
	buffer: Buffer,
	mimeType: string
): Promise<{ publicUrl: string; pathInBucket: string }> {
	// Choose a path like 'blogs/<uuid>_<originalname>'
	const uniqueId = uuidv4();
	const extension = fileName.split(".").pop();
	const pathInBucket = `blogs/${uniqueId}.${extension}`;
	const fileRef = bucket.file(pathInBucket);

	// Upload data
	await fileRef.save(buffer, {
		contentType: mimeType,
		resumable: false,
	});

	// Make publicly readable
	await fileRef.makePublic();

	// Construct public URL
	const publicUrl = `https://storage.googleapis.com/${bucket.name}/${pathInBucket}`;

	return { publicUrl, pathInBucket };
}
// function getFormattedTimestamp(): string {
// 	const now = new Date();
// 	const pad = (n: number) => n.toString().padStart(2, "0");

// 	const year = now.getFullYear();
// 	const month = pad(now.getMonth() + 1);
// 	const day = pad(now.getDate());

// 	return `${day}-${month}-${year}`;
// }

// Create a new blog record:
// - Upload thumbnail to Storage
// - Push a new record under /blogs in Realtime DB
export async function createBlog(
	title: string,
	description: string,
	fileName: string,
	fileBuffer: Buffer,
	mimeType: string
): Promise<Blog> {
	// 1. Upload thumbnail to Firebase Storage
	const { publicUrl, pathInBucket } = await uploadThumbnail(
		fileName,
		fileBuffer,
		mimeType
	);

	// 2. Generate a slug from the title (timestamp makes it unique)
	const baseSlug = slugify(title, { lower: true, strict: true });
	const slug = `${baseSlug}`;
	// 3. Compose blog data
	const publishedDate = new Date().toISOString();
	const blogData: Blog = {
		id: slug,
		slug,
		title,
		description,
		thumbnailUrl: publicUrl,
		thumbnailPath: pathInBucket,
		publishedDate,
	};

	// 4. Save to Firebase Realtime DB
	await db.ref(`blogs/${slug}`).set(blogData);

	return blogData;
}
// List all blogs (returns array of Blog)
export async function listBlogs(): Promise<Blog[]> {
	const snapshot = await db.ref("blogs").once("value");
	const raw: Record<string, Omit<Blog, "id">> = snapshot.val() || {};
	return Object.entries(raw).map(
		([id, data]) =>
			({
				id,
				...data,
			}) as Blog
	);
}

// Get a single blog by id
export async function getBlogById(id: string): Promise<Blog | null> {
	const snapshot = await db.ref(`blogs/${id}`).once("value");
	const data = snapshot.val();
	if (!data) return null;

	// Assert that the spread object now fully satisfies Blog
	return { id, ...(data as Omit<Blog, "id">) } as Blog;
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
	const snapshot = await db.ref(`blogs/${slug}`).once("value");
	const data = snapshot.val();
	if (!data) return null;

	// Assert that the spread object now fully satisfies Blog
	return { slug, ...(data as Omit<Blog, "slug">) } as Blog;
}

// Update an existing blog:
// - If new thumbnailBuffer is provided, delete the old file from Storage, upload new one, update fields
// - Otherwise, only update title/description
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
	const existing: Omit<Blog, "id"> | null = blogSnapshot.val();
	if (!existing) return null;

	let thumbnailUrl = existing.thumbnailUrl;
	let thumbnailPath = existing.thumbnailPath;

	if (newFile) {
		// 1) Delete old thumbnail from Storage
		if (typeof thumbnailPath === "string" && thumbnailPath.length > 0) {
			try {
				await bucket.file(thumbnailPath).delete();
			} catch (err) {
				console.warn("Could not delete old thumbnail:", err);
			}
		}

		// 2) Upload new thumbnail
		const uploadRes = await uploadThumbnail(
			newFile.fileName,
			newFile.buffer,
			newFile.mimeType
		);
		thumbnailUrl = uploadRes.publicUrl;
		thumbnailPath = uploadRes.pathInBucket;
	}

	// 3) Update the DB record
	const updatedData: Partial<Omit<Blog, "id">> = {
		title,
		description,
		thumbnailUrl,
		thumbnailPath,
		// We typically don’t overwrite publishedDate on edit; keep original.
	};
	await db.ref(`blogs/${id}`).update(updatedData);

	return {
		id,
		title,
		description,
		slug: existing.slug as string, // slug should not change
		thumbnailUrl: thumbnailUrl as string,
		thumbnailPath: thumbnailPath as string,
		publishedDate: existing.publishedDate as string,
	};
}

// Delete a blog:
// - Delete thumbnail from Storage
// - Remove record from Realtime DB
export async function deleteBlog(id: string): Promise<boolean> {
	// 1) Fetch existing record
	const blog = await getBlogById(id);
	if (!blog) return false;

	// 2) Delete thumbnail
	if (blog.thumbnailPath) {
		try {
			await bucket.file(blog.thumbnailPath).delete();
		} catch (err) {
			console.warn("Error deleting thumbnail:", err);
		}
	}

	// 3) Remove from Realtime DB
	await db.ref(`blogs/${id}`).remove();
	return true;
}

export async function updateBlogWithSlugChange(
	oldSlug: string,
	newSlug: string,
	title: string,
	description: string,
	newFileBuffer?: { fileName: string; buffer: Buffer; mimeType: string }
): Promise<Blog | null> {
	const blogSnap = await db.ref(`blogs/${oldSlug}`).get();
	if (!blogSnap.exists()) return null;

	const oldBlog = blogSnap.val() as Blog;

	let thumbnailUrl = oldBlog.thumbnailUrl;
	let thumbnailPath = oldBlog.thumbnailPath;

	// Re-upload thumbnail if new one is given
	if (newFileBuffer) {
		const { publicUrl, pathInBucket } = await uploadThumbnail(
			newFileBuffer.fileName,
			newFileBuffer.buffer,
			newFileBuffer.mimeType
		);
		thumbnailUrl = publicUrl;
		thumbnailPath = pathInBucket;
	}

	const updatedBlog: Blog = {
		id: newSlug,
		slug: newSlug,
		title,
		description,
		thumbnailUrl,
		thumbnailPath,
		publishedDate: oldBlog.publishedDate,
	};

	// Save to new slug
	await db.ref(`blogs/${newSlug}`).set(updatedBlog);

	// Delete old entry
	await db.ref(`blogs/${oldSlug}`).remove();

	return updatedBlog;
}
