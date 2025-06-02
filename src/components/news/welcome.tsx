// components/Hero.tsx
'use client';

import BrilliantButton from '../widgets/BrilliantButtons';

export function Welcome() {
    return (
        <section className="bg-[linear-gradient(111deg,rgba(77,77,77,0.12)_1.21%,rgba(151,151,151,0.02)_100%)] shadow-[inset_-20px_4px_120px_-80px_rgba(31,187,187,0.14)] backdrop-blur-[15px] flex flex-col md:flex-row lg:flex-row h-[209px] p-8 justify-center items-center gap-2.5 self-stretch px-28">
            {/* left */}
            <div className="flex flex-col  w-[400px] md:w-[900px] lg:w-[900px]  rounded-lg p-6">
                <p className="text-sm text-teal-400 mb-1">Welcome to Our News Hub</p>
                <h1 className="text-xl md:text-4xl lg:text-4xl font-bold text-white">Discover the World of Headlines</h1>
            </div>

            {/* right */}
            <div className="flex-1 flex justify-end">

                <BrilliantButton variant='white'
                    className="bg-[#141414] hover:bg-[#141414]  border-[#262626] text-white"
                >
                    View All News
                </BrilliantButton>
            </div>
        </section>
    );
}
