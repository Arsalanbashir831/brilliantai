// app/news/[id]/page.tsx or wherever your route file is
'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';

import CtaSection from '@/components/news/CtaSection';
import NewsArticle from '@/components/news/NewsArticle';
import NewsItem from '@/components/news/NewsItem';
import Newsletter from '@/components/news/Newsletter';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const transition = {
  duration: 0.6,
  ease: 'easeOut',
};

const AnimatedSection = ({ children }: { children: React.ReactNode }) => (
  <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={sectionVariants}
    transition={transition}
  >
    {children}
  </motion.section>
);

interface Blog {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  publishedDate: string;
}

const Page = () => {
  const { id } = useParams() as { id: string };

  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError('No ID provided');
      setLoading(false);
      return;
    }

    async function fetchBlog() {
      try {
        const res = await fetch(`/api/blogs/${id}`);
        if (res.status === 404) {
          setError('Article not found');
          return;
        }
        if (!res.ok) throw new Error('Fetch failed');
        const data: Blog = await res.json();
        setBlog(data);
      } catch (err:unknown) {
        setError('Error loading article'+err);
      } finally {
        setLoading(false);
      }
    }

    fetchBlog();
  }, [id]);

  return (
    <div>
      <AnimatedSection>
        <NewsArticle blog={blog} loading={loading} error={error} />
      </AnimatedSection>
      <AnimatedSection>
        <CtaSection />
      </AnimatedSection>
      <AnimatedSection>
        <NewsItem />
      </AnimatedSection>
      <AnimatedSection>
        <Newsletter />
      </AnimatedSection>
    </div>
  );
};

export default Page;
