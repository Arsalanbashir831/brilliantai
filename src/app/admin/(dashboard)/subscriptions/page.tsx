"use client";

import React, { useState, useEffect } from 'react';

interface Subscriber {
  id: string;
  email: string;
}

const SubscribeListPage: React.FC = () => {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedEmails, setSelectedEmails] = useState<string[]>([]);
  const [allChecked, setAllChecked] = useState(false);

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const res = await fetch('/api/subscription');
        if (!res.ok) throw new Error(`Error ${res.status}`);
        const data: Subscriber[] = await res.json();
        setSubscribers(data);
      } catch (err) {
        setError('Failed to load subscriber list.'+err);
      } finally {
        setLoading(false);
      }
    };
    fetchSubscribers();
  }, []);

  const handleSelect = (email: string, checked: boolean) => {
    setSelectedEmails(prev =>
      checked ? [...prev, email] : prev.filter(e => e !== email)
    );
  };

  const toggleAll = (checked: boolean) => {
    setAllChecked(checked);
    setSelectedEmails(checked ? subscribers.map(s => s.email) : []);
  };

  const sendBulkEmail = () => {
    if (!selectedEmails.length) return;
    const toList = selectedEmails.join(',');
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(
      toList
    )}`;
    window.open(gmailUrl, '_blank');
  };

  if (loading) return <div className="p-4 text-center">Loading subscribers…</div>;
  if (error) return <div className="p-4 text-center text-red-500">{error}</div>;

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Subscriber Emails ({subscribers.length})</h1>
        <button
          onClick={sendBulkEmail}
          disabled={!selectedEmails.length}
          className={`px-4 py-2 rounded focus:outline-none ${
            selectedEmails.length
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-400 text-gray-700 cursor-not-allowed'
          }`}
        >
          Send Emails ({selectedEmails.length})
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2">
                <input
                  type="checkbox"
                  checked={allChecked}
                  onChange={e => toggleAll(e.target.checked)}
                  className="cursor-pointer"
                />
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Sr No</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Email</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {subscribers.map((subscriber, idx) => (
              <tr key={subscriber.id} className="hover:bg-gray-50">
                <td className="px-4 py-2">
                  <input
                    type="checkbox"
                    checked={selectedEmails.includes(subscriber.email)}
                    onChange={e => handleSelect(subscriber.email, e.target.checked)}
                    className="cursor-pointer"
                  />
                </td>
                <td className="px-4 py-2 text-sm text-gray-800">{idx + 1}</td>
                <td className="px-4 py-2 text-sm text-gray-800">{subscriber.email}</td>
              </tr>
            ))}
            {subscribers.length === 0 && (
              <tr>
                <td colSpan={3} className="px-4 py-2 text-center text-gray-500">
                  No subscribers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubscribeListPage;
