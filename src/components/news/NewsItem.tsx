// app/news/page.tsx
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface NewsItem {
    id: number;
    title: string;
    description?: string;
    category: string;
    publicationDate?: string;
    author?: string;
    imageUrl: string;
    link: string;
}

const news: NewsItem[] = [
    {
        id: 1,
        title: 'Global Climate Summit Addresses Urgent Climate Action',
        description:
            'World leaders gathered at the Global Climate Summit to discuss urgent climate action, emissions reductions, and renewable energy targets.',
        category: 'AI Innovations',
        publicationDate: 'October 10, 2023',
        author: 'Jane Smith',
        imageUrl: '/news/Image1.png',
        link: '/news/1',
    },
    {
        id: 2,
        title: 'A Decisive Victory for Progressive Policies',
        category: 'Politics',
        imageUrl: '/news/Image2.png',
        link: '/news/2',
    },
    {
        id: 3,
        title: 'Tech Giants Unveil Cutting-Edge AI Innovations',
        category: 'Technology',
        imageUrl: '/news/Image3.png',
        link: '/news/3',
    },
    {
        id: 4,
        title: 'COVID-19 Variants',
        category: 'Health',
        imageUrl: '/news/Image4.png',
        link: '/news/4',
    },
];

export default function NewsItem() {
    const [featured, ...others] = news;

    return (
        <section className="mx-auto max-w-7xl px-4 py-12 text-white">
            {/* ====================
          Featured Article
          ==================== */}
            <div className="
        border-y border-gray-800 
        py-16 
        flex flex-col md:flex-row gap-8 
        mb-12 
        px-4 sm:px-20
      ">
                {/* Image – full width on mobile, half on desktop */}
                <div className="relative w-full md:w-1/2 h-64 sm:h-80 rounded-lg overflow-hidden">
                    <Image
                        src={featured.imageUrl}
                        alt={featured.title}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Text content – full width on mobile (beneath), half on desktop */}
                <div className="flex flex-col justify-center w-full md:w-1/2">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                        {featured.title}
                    </h2>
                    <p className="mb-6 text-gray-400">
                        {featured.description}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-6 text-white">
                        <div>
                            <span className="text-sm text-gray-400 font-semibold block">Category</span>
                            <span className="text-sm">{featured.category}</span>
                        </div>
                        <div>
                            <span className="text-sm text-gray-400 font-semibold block">Publication Date</span>
                            <span className="text-sm">{featured.publicationDate}</span>
                        </div>
                        <div>
                            <span className="text-sm text-gray-400 font-semibold block">Author</span>
                            <span className="text-sm">{featured.author}</span>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <Button className="border bg-[#141414] border-[#262626]">
                            <a href={featured.link} className="flex items-center">
                                Read More
                                <ArrowRight className="ml-2 w-4 h-4 text-[#23D5D5] -rotate-45" />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>

            {/* ====================
          Grid of Other Articles
          ==================== */}
            <div className="pt-12 px-0 md:px-12 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {others.map(item => (
                    <div key={item.id} className="flex flex-col rounded-lg overflow-hidden">
                        <div className="relative h-62 md:h-40 lg:h-40 w-full">
                            <Image
                                src={item.imageUrl}
                                alt={item.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-4 flex-1 flex flex-col justify-between">
                            <div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-400 mb-4">{item.category}</p>
                            </div>
                            <div className="w-full flex justify-end">
                                <Button className="border bg-[#141414] border-[#262626] w-40">
                                    <a href={item.link} className="flex items-center justify-center">
                                        Read More
                                        <ArrowRight className="ml-2 w-4 h-4 text-[#23D5D5] -rotate-45" />
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
