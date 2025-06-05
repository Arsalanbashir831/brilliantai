"use client";

import React, { useState } from "react";
import MarkdownEditor from "@/components/admin/MdEditor";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const AddBlogPage = () => {
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setThumbnail(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ title, description, thumbnail });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-2">📝 Add New Blog</h1>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Thumbnail */}
        <div className="space-y-2">
          <label className="block font-semibold text-gray-700">Thumbnail Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleThumbnailChange}
            className="block w-full text-sm text-gray-600
                       file:mr-4 file:py-2 file:px-4
                       file:rounded file:border-0
                       file:text-sm file:font-semibold
                       file:bg-blue-50 file:text-blue-700
                       hover:file:bg-blue-100"
          />
          {preview && (
            <Image
              src={preview}
              alt="Thumbnail Preview"
              width={400}
              height={225}
              className="rounded-md border mt-3 object-cover"
            />
          )}
        </div>

        {/* Title */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">Title</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">Description (Markdown)</label>
          <div className="bg-white border rounded-md shadow-sm">
            <MarkdownEditor value={description} onChange={(val) => setDescription(val || "")} />
          </div>
        </div>

        {/* Submit */}
        <div className="pt-4">
          <Button type="submit" className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md">
            Publish Blog
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddBlogPage;
