"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import MarkdownEditor from "@/components/admin/MdEditor";
import { Button } from "@/components/ui/button";

// Mock for editing scenario — replace with actual API fetch
const MOCK_HEADLINE = {
  id: "1",
  title: "Breaking: React 19 Released",
  description: "## This is a sample headline content in markdown format.",
};

const HeadlineFormPage = () => {
  const { id } = useParams(); // Optional: only used if you're editing
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (id) {
      // Fetch headline by ID here
      setTitle(MOCK_HEADLINE.title);
      setDescription(MOCK_HEADLINE.description);
    }
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ title, description });
    // TODO: Send to API
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-2">
        {id ? "✏️ Edit Headline" : "➕ Add New Headline"}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
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

        {/* Description */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">Content (Markdown)</label>
          <MarkdownEditor
            value={description}
            onChange={(val) => setDescription(val || "")}
          />
        </div>

        {/* Submit */}
        <div className="pt-4">
          <Button type="submit" className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md">
            {id ? "Update Headline" : "Publish Headline"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default HeadlineFormPage;
