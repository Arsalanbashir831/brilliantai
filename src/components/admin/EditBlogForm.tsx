/* eslint-disable @typescript-eslint/no-explicit-any */
// File: src/components/admin/EditBlogForm.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Editor from './Editor';
import { Button } from '@/components/ui/button';
import type { OutputData } from '@editorjs/editorjs';

// The shape of the blog prop (from the server)
type BlogWithContent = {
  id: string;
  title: string;
  publishedDate: string;
  thumbnailUrl: string; // existing URL or base64
  content: OutputData;
};

type EditBlogFormProps = {
  blog: BlogWithContent;
};

const EditBlogForm: React.FC<EditBlogFormProps> = ({ blog }) => {
  const router = useRouter();

  // 1) Seed state from the blog prop
  const [title, setTitle] = useState(blog.title);
  const [publishedDate, setPublishedDate] = useState(blog.publishedDate);

  // Instead of only holding a URL, we now allow a File or fallback to URL
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);

  // The EditorJS content
  const [contentData, setContentData] = useState<OutputData>(blog.content);

  const [submitting, setSubmitting] = useState(false);

  // On first render, show the existing thumbnailUrl as the preview
  useEffect(() => {
    setThumbnailPreview(blog.thumbnailUrl || null);
  }, [blog.thumbnailUrl]);

  // Custom handler: whenever the Editor changes, update our state
  const handleEditorChange = (data: OutputData) => {
    setContentData(data);
  };

  // 2) When the user picks a new file, store it + show a preview
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setThumbnailFile(file);

    if (file) {
      // Convert the chosen File to a base64 data URL so we can preview it immediately
      const reader = new FileReader();
      reader.onload = () => {
        setThumbnailPreview(reader.result as string); // base64 URL
      };
      reader.readAsDataURL(file);
    } else {
      // If they cleared the file input, revert back to existing URL (or no preview)
      setThumbnailPreview(blog.thumbnailUrl || null);
    }
  };

  // 3) On form submit: if they've chosen a new file, convert it; otherwise send null
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !contentData) {
      alert('Title and body are required.');
      return;
    }

    setSubmitting(true);

    try {
      // If the user selected a new File, convert it to base64; else keep null
      let thumbnailDataUrl: string | null = null;
      if (thumbnailFile) {
        thumbnailDataUrl = await new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onload = () => {
            resolve(reader.result as string);
          };
          reader.readAsDataURL(thumbnailFile);
        });
      }

      // Build up the payload. If thumbnailDataUrl is null, your API can assume
      // “keep the old URL (blog.thumbnailUrl)”. If not null, the API will store the new base64.
      const payload = {
        id: blog.id,
        title,
        publishedDate,
        thumbnail: thumbnailDataUrl ?? blog.thumbnailUrl,
        // We always send something for thumbnail: either new base64 or original URL
        content: contentData,
      };

      const res = await fetch(`/api/blogs/${blog.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorResult = await res.json();
        throw new Error(errorResult.error || 'Failed to update blog');
      }

      // After a successful update, go back to the Blogs list
      router.push('/dashboard/blogs');
    } catch (err: any) {
      console.error('Error updating blog:', err);
      alert('Error updating blog: ' + (err.message || err));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Title */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter blog title"
          required
        />
      </div>

      {/* Published Date */}
      <div>
        <label htmlFor="publishedDate" className="block text-sm font-medium text-gray-700">
          Published Date
        </label>
        <input
          id="publishedDate"
          type="date"
          value={publishedDate}
          onChange={(e) => setPublishedDate(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      {/* Thumbnail File */}
      <div>
        <label htmlFor="thumbnailFile" className="block text-sm font-medium text-gray-700">
          Thumbnail
        </label>
        <input
          id="thumbnailFile"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mt-1 block w-full text-gray-700"
        />
        {/* Show a preview of either the old URL or the newly selected file */}
        {thumbnailPreview && (
          <img
            src={thumbnailPreview}
            alt="Thumbnail preview"
            className="mt-2 h-24 w-auto rounded border"
          />
        )}
      </div>

      {/* Editor.js for Body, seeded with blog.content */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Content
        </label>
        <div className="border rounded bg-white p-2">
          <Editor onChange={handleEditorChange} initialData={blog.content} />
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <Button type="submit" disabled={submitting}>
          {submitting ? 'Updating...' : 'Update Blog'}
        </Button>
      </div>
    </form>
  );
};

export default EditBlogForm;
