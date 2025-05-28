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
            {/* Featured */}
            <div className="flex flew-row gap-8 mb-12 px-20">
                <div className="relative h-64 sm:h-80 w-9/10 rounded-lg overflow-hidden">
                    <Image src={featured.imageUrl} alt={featured.title} fill className="object-cover" />
                </div>
                <div className="flex flex-col justify-center w-full">
                    <h2 className="text-xl font-bold mb-4">{featured.title}</h2>
                    <p className="mb-6 text-gray-400">{featured.description}</p>
                    <div className="flex  gap-4 mb-6 text-white">
                        <div><span className="text-sm text-gray-400 font-semibold block">Category</span><span className="text-sm">{featured.category}</span></div>
                        <div><span className="text-sm font-semibold block text-gray-400">Publication Date</span><span className="text-sm">{featured.publicationDate}</span></div>
                        <div><span className="text-sm font-semibold block text-gray-400">Author</span><span className="text-sm">{featured.author}</span></div>
                    </div>
                    <div className='flex justify-end '>
                        <Button className='border bg-[#141414] border-[#262626]' asChild><a href={featured.link}>Read More</a></Button>
                    
                    </div>
                </div>
            </div>

            {/* Grid of other articles */}
            <div className="border-t border-gray-800 pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {others.map(item => (
                    <div key={item.id} className="flex flex-col  rounded-lg overflow-hidden">
                        <div className="relative h-40 w-full">
                            <Image src={item.imageUrl} alt={item.title} fill className="object-cover" />
                        </div>
                        <div className="p-4 flex-1 flex flex-col justify-between">
                            <div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-400 mb-4">{item.category}</p>
                            </div>
                            <div className='w-full   flex justify-end'>
                                <Button className='border bg-[#141414] border-[#262626] w-40' > <a href={item.link} className="flex items-center justify-center">
                                    Read More<ArrowRight className="ml-2 w-4 h-4 text-[#23D5D5] -rotate-45" />
                                </a></Button>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
