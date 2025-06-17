import { v4 as uuidv4 } from "uuid";
import type { Blog } from "@/types/blog";
import { db, bucket } from "@/firebase/admin";

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
	// 1) Upload to Storage
	const { publicUrl, pathInBucket } = await uploadThumbnail(
		fileName,
		fileBuffer,
		mimeType
	);

	// 2) Push to Realtime DB under /blogs
	const blogRef = db.ref("blogs").push();
	const id = blogRef.key!; // generated key
	const publishedDate = new Date().toISOString();

	const blogData: Omit<Blog, "id"> = {
		title,
		description,
		thumbnailUrl: publicUrl,
		thumbnailPath: pathInBucket,
		publishedDate,
	};

	await blogRef.set(blogData);

	return { id, ...blogData } as Blog;
}

// List all blogs (returns array of Blog)
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
  
	// Assert that the spread object now fully satisfies Blog
	return { id, ...(data as Omit<Blog, "id">) } as Blog;
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
		if (typeof thumbnailPath === 'string' && thumbnailPath.length > 0) {
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
