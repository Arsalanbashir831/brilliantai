"use client";

import React, { useState } from "react";
import MarkdownEditor from "@/components/admin/MdEditor";
import { Button } from "@/components/ui/button";

const AddHeadlinePage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newHeadline = {
      title,
      description,
    };

    console.log("Submitting new headline:", newHeadline);
    // TODO: Replace with your POST API call
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-2">
        ➕ Add New Headline
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title Input */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">Title</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter headline title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Description Editor */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">Content (Markdown)</label>
          <MarkdownEditor
            value={description}
            onChange={(val) => setDescription(val || "")}
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <Button type="submit" className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md">
            Publish Headline
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddHeadlinePage;
