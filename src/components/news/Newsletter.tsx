// components/Newsletter.tsx
'use client';

import { FormEvent, useState } from 'react';
import { ShineBorder } from '../magicui/shine-border';
import useMobile from '@/hook/useMobile';

import SubscribeModal from '../SubscribeModal';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const isMobile = useMobile();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error('Subscription failed');
      // clear and show modal on success
      setEmail('');
      setModalOpen(true);
    } catch (err) {
      console.error('Subscription error:', err);
      alert('Failed to subscribe. Please try again.');
    }
  };

  return (
    <>
      <section className="py-16 flex items-center justify-center">
        <div className="relative w-full max-w-7xl">
          <div className="relative w-full bg-teal-950 bg-opacity-40 rounded-0 md:rounded-xl lg:rounded-xl p-14 text-center overflow-hidden">
            {!isMobile && (
              <ShineBorder shineColor={['#23D5D5', '#00FFFF']} />
            )}
            <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none shadow-[inset_-20px_4px_120px_-80px_rgb(31,187,187)]" />
            <div className="relative z-10 space-y-6 text-center">
              <h2 className="text-xl md:text-2xl font-semibold text-white leading-tight">
                Stay Updated with Brilliant AI
              </h2>
              <p className="text-[17px] md:text-[14px] text-gray-300 mx-auto max-w-xs sm:max-w-xl">
                Subscribe to our newsletter for the latest AI insights, product updates, and industry news delivered straight to your inbox.
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex items-center justify-center mx-auto max-w-md w-full"
              >
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full sm:w-auto flex-grow bg-transparent border border-gray-600 border-r-0 px-4 py-3 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                />
                <button
                  type="submit"
                  className="px-5 py-3 bg-teal-900 border border-gray-600 border-l-0 rounded-r-lg text-white font-medium hover:opacity-90 transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Render the modal */}
      <SubscribeModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
