"use client";

import React from "react";
import { useRouter } from "next/navigation";
import DataTable from "@/components/admin/Datatable";
import { Button } from "@/components/ui/button";
import { Edit, Trash2, Plus } from "lucide-react";

interface Headline {
  id: string;
  title: string;
  publishedDate: string;
  description: string;
  [key: string]: unknown;
}

const HeadlinesPage = () => {
  const router = useRouter();

  const handleEdit = (headline: Headline) => {
    console.log("Edit headline:", headline);
    alert(`Edit: ${headline.title}`);
  };

  const handleDelete = (headline: Headline) => {
    if (
      typeof window !== "undefined" &&
      window.confirm(`Are you sure you want to delete "${headline.title}"?`)
    ) {
      console.log(`Deleted headline: ${headline.title}`);
      // TODO: perform deletion logic here
    }
  };

  const handleAdd = () => {
    router.push("/admin/headlines/new");
  };

  const columns = [
    {
      accessor: "title",
      header: "Title",
      cell: ({ getValue }: { getValue: () => unknown }) => (
        <span className="font-medium text-gray-800">{getValue() as string}</span>
      ),
    },
    {
      accessor: "description",
      header: "Description",
      cell: ({ getValue }: { getValue: () => unknown }) => (
        <span
          className="font-medium text-gray-800 truncate max-w-[300px] block"
          title={getValue() as string}
        >
          {getValue() as string}
        </span>
      ),
    },
    {
      accessor: "publishedDate",
      header: "Published Date",
      cell: ({ getValue }: { getValue: () => unknown }) => (
        <span className="text-gray-600">{getValue() as string}</span>
      ),
    },
    {
      accessor: "actions",
      header: "Actions",
      cell: ({ row }: { row: Headline }) => (
        <div className="flex space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleEdit(row)}
            aria-label="Edit Headline"
          >
            <Edit className="h-4 w-4 text-blue-600" />
          </Button>
          <Button
            variant="destructive"
            size="icon"
            onClick={() => handleDelete(row)}
            aria-label="Delete Headline"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ),
    },
  ];

  const data: Headline[] = [
    {
      id: "1",
      title: "Breaking News: React 19 Released",
      description: "React 19 introduces exciting new features and improvements to the React ecosystem.",
      publishedDate: "2025-05-20",
    },
    {
      id: "2",
      title: "Next.js 15 Beta – What’s New?",
      description: "React 19 introduces exciting new features and improvements to the React ecosystem.",
      publishedDate: "2025-05-28",
    },
  ];

  return (
    <div className="p-4 md:p-8 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Headlines
        </h1>
        <Button className="bg-blue-700 hover:bg-blue-800 cursor-pointer" onClick={handleAdd}>
          <Plus className="w-4 h-4 mr-2" />
          Add New Headline
        </Button>
      </div>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <DataTable<Headline> columns={columns} data={data} />
      </div>
    </div>
  );
};

export default HeadlinesPage;
