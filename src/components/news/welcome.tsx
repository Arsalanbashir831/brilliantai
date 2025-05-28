// components/Hero.tsx
'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Welcome() {
    return (
        <section className="bg-[linear-gradient(111deg,rgba(77,77,77,0.12)_1.21%,rgba(151,151,151,0.02)_100%)] shadow-[inset_-20px_4px_120px_-80px_rgba(31,187,187,0.14)] backdrop-blur-[15px] flex h-[209px] p-8 justify-center items-center gap-2.5 self-stretch">
            {/* left */}
            <div className="flex-1">
                <p className="text-sm text-teal-400 mb-1">Welcome to Our News Hub</p>
                <h1 className="text-4xl sm:text-4xl font-bold text-white">Discover the World of Headlines</h1>
            </div>

            {/* right */}
            <div className="flex-1 flex justify-end">
                <Button variant="outline" className='bg-[#141414] border-[#262626] text-white' asChild>
                    <a href="/news" className="flex items-center">
                        View All News<ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                </Button>
            </div>
        </section>
    );
}
