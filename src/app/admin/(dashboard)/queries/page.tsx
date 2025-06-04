// File: app/admin/queries/page.tsx
"use client";

import React, { useState, useMemo } from "react";
import DataTable from "@/components/admin/Datatable";
import { Button } from "@/components/ui/button";
import { Trash2, Reply } from "lucide-react";

interface Query {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  submittedAt: string;
  [key: string]: unknown;
}

const AdminQueriesPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleDelete = (query: Query) => {
    if (
      typeof window !== "undefined" &&
      window.confirm(`Are you sure you want to delete the query from "${query.name}"?`)
    ) {
      console.log(`Deleted query:`, query);
      // TODO: call API to delete this query
    }
  };

//   const handleReply = (query: Query) => {
//     // Example: open mail client with prefilled subject and body
//     const mailto = `mailto:${query.email}?subject=Re: ${encodeURIComponent(
//       query.subject
//     )}&body=${encodeURIComponent(`Hello ${query.name},%0D%0A%0D%0A`)}`;
//     window.location.href = mailto;
//   };

  const columns = useMemo(
    () => [
      {
        accessor: "name",
        header: "Name",
        cell: ({ getValue }: { row: Query; getValue: () => unknown }) => (
          <span className="font-medium text-gray-800">{getValue() as string}</span>
        ),
      },
      {
        accessor: "email",
        header: "Email",
        cell: ({ getValue }: { row: Query; getValue: () => unknown }) => (
          <span className="text-gray-600">{getValue() as string}</span>
        ),
      },
      {
        accessor: "subject",
        header: "Subject",
        cell: ({ getValue }: { row: Query; getValue: () => unknown }) => (
          <span className="text-gray-600">{getValue() as string}</span>
        ),
      },
      {
        accessor: "message",
        header: "Message",
        cell: ({ getValue }: { row: Query; getValue: () => unknown }) => (
          <span className="text-gray-700 line-clamp-2">{getValue() as string}</span>
        ),
      },
      {
        accessor: "submittedAt",
        header: "Submitted At",
        cell: ({ getValue }: { row: Query; getValue: () => unknown }) => (
          <span className="text-gray-500">{getValue() as string}</span>
        ),
      },
      {
        accessor: "actions",
        header: "Actions",
        cell: ({ row }: { row: Query }) => (
          <div className="flex space-x-2">
            <Button
            className="cursor-pointer"
              variant="secondary"
              size="icon"
              onClick={() => {}}
              aria-label="Reply to Query"
            >
              <Reply className="h-4 w-4 text-green-600" />
            </Button>
            <Button
              variant="destructive"
              size="icon"
              onClick={() => handleDelete(row)}
              aria-label="Delete Query"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ),
      },
    ],
    []
  );

  // Replace this with data fetched from your backend
  const allQueries: Query[] = [
    {
      id: "q1",
      name: "Alice Johnson",
      email: "alice@example.com",
      subject: "Pricing Inquiry",
      message: "Hi, I'd like to know more about your premium plan pricing.",
      submittedAt: "2025-06-02 14:15",
    },
    {
      id: "q2",
      name: "Bob Singh",
      email: "bob.singh@example.com",
      subject: "Technical Issue",
      message:
        "I'm having trouble logging in with my existing account. It keeps saying 'Invalid credentials'.",
      submittedAt: "2025-06-03 09:47",
    },
    {
      id: "q3",
      name: "Fatima Ali",
      email: "fatima.ali@example.com",
      subject: "Feature Request",
      message: "Could you add dark-mode support to the dashboard? It would be very helpful.",
      submittedAt: "2025-06-04 11:30",
    },
  ];

  const filteredQueries = useMemo(() => {
    if (!searchTerm) return allQueries;
    const lower = searchTerm.toLowerCase();
    return allQueries.filter(
      (q) =>
        q.name.toLowerCase().includes(lower) || q.email.toLowerCase().includes(lower)
    );
  }, [searchTerm]);

  return (
    <div className="py-6">
      <h1 className="text-2xl font-semibold mb-4">Contact Form Submissions</h1>

      <div className="mb-4 flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search by name or email…"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full max-w-xs"
        />
      </div>

      <DataTable columns={columns} data={filteredQueries} />
    </div>
  );
};

export default AdminQueriesPage;
