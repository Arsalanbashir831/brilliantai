// components/ServicesTabs.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Service {
    id: string;
    title: string;
    icon: string;
    detailImage: string;
    detailTitle: string;
    detailText: string;
}

const SERVICES: Service[] = [
    {
        id: 'web',
        title: 'AI Web Applications',
        icon: '/startup/icon1.svg',
        detailImage: '/startup/img1.svg',
        detailTitle: 'Intelligent platforms built for growth',
        detailText:
            'We build AI-powered web applications that combine seamless user experience with robust backend intelligence. Whether it is a customer platform, internal tool or an entirely new product, we create scalable systems with real artificial intelligence built in from the beginning.',
    },
    {
        id: 'mvp',
        title: 'MVPs That Actually Work',
        icon: '/startup/icon2.svg',
        detailImage: '/startup/img2.svg',
        detailTitle: 'Fast to market, ready to scale',
        detailText:
            'Your minimum viable product should do more than just function. It should deliver value to users, prove your concept and set the foundation for scale. We build MVPs that are fast, stable and built with long-term vision in mind.',
    },
    {
        id: 'guide',
        title: 'Technical Guidance',
        icon: '/startup/icon3.svg',
        detailImage: '/startup/img3.svg',
        detailTitle: 'The clarity to move with confidence',
        detailText:
            'You may not need a full-time technical lead, but you do need the right advice at the right time. We support you with early architecture decisions, data strategy, AI implementation and product planning, helping you stay focused while we handle the build.',
    },
    {
        id: 'integrate',
        title: 'Seamless Integration',
        icon: '/startup/icon4.svg',
        detailImage: '/startup/img4.svg',
        detailTitle: 'Connect everything that matters',
        detailText:
            'We connect your product to the tools and services your team and users already rely on. From payment providers and communication platforms to custom APIs and AI models, we make everything work together efficiently and reliably.',
    },
    {
        id: 'cloud',
        title: 'Cloud Ready Deployment',
        icon: '/startup/icon5.svg',
        detailImage: '/startup/img5.svg',
        detailTitle: 'Stable, secure and built to grow',
        detailText:
            'We deploy every product using trusted cloud infrastructure such as AWS, Azure and Hostinger. Your platform will be secure, fast and able to scale as demand increases. No overengineering, no unnecessary complexity.',
    },
    {
        id: 'ml',
        title: 'Applied Machine Learning',
        icon: '/startup/icon6.svg',
        detailImage: '/startup/img6.svg',
        detailTitle: 'Real models delivering real value',
        detailText:
            'We develop and integrate machine learning models that solve specific problems in your business. From language models to predictive analytics, we help you use AI in ways that are practical, accurate and measurable.',
    },
    {
        id: 'growth',
        title: 'Post Launch Growth Support',
        icon: '/startup/icon7.svg',
        detailImage: '/startup/img7.svg',
        detailTitle: 'Ongoing improvement without disruption',
        detailText:
            'We continue working with you beyond launch. From feature rollouts to performance improvements, our team ensures your product evolves as your business grows. You focus on scaling; we ensure your technology keeps up.',
    },
];

export default function ServicesTabs() {
    const [selectedId, setSelectedId] = useState<string>(SERVICES[0].id);
    const active = SERVICES.find((s) => s.id === selectedId)!;

    return (
        <section className="max-w-7xl mx-auto px-24 py-16  8  rounded-[16px]">
            {/* Header */}
            <div className="text-center mb-16">
                <h2 className="text-[40px] leading-normal text-white font-semibold">What We Deliver For Startups</h2>
                <p className="mt-2 text-[18px] leading-[28px] text-[#E0E0E0]">
                    We know what it takes to launch in the early stages—speed without compromise, flexibility without confusion, and expert execution. Brilliant AI turns ideas into fully functional products with precision and structure.
                </p>
            </div>

            <div className='bg-transparent border border-gray-400 rounded-2xl p-8'>
                {/* Tabs */}
                <div className="overflow-x-auto  rounded-[16px]">
                    <div className="flex space-x-4 pb-4">
                        {SERVICES.map((svc) => {
                            const isActive = svc.id === selectedId;
                            return (
                                <button
                                    key={svc.id}
                                    onClick={() => setSelectedId(svc.id)}
                                    className={`
                    flex flex-col items-center flex-shrink-0 w-32 h-32 p-4 m-2
                    rounded-[16px]
                    bg-[linear-gradient(111deg,_rgba(77,77,77,0.12)_1.21%,_rgba(151,151,151,0.02)_100%)]
                    
                    ${isActive
                                            ? 'ring-2 ring-teal-400 bg-[linear-gradient(111deg,_rgba(77,77,77,0.24)_1.21%,_rgba(151,151,151,0.04)_100%)]'
                                            : 'hover:bg-[rgba(77,77,77,0.16)]'}
                    `}
                                >
                                    <Image src={svc.icon} alt={svc.title} width={48} height={48} className="mb-3" />
                                    <span className="text-white text-[11px]  ">{svc.title}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Detail Panel */}
                <div className="mt- p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left: image */}
                    <div className="flex justify-center">
                        <Image src={active.detailImage} alt={active.detailTitle} width={300} height={300} className="rounded-[8px]" />
                    </div>
                    {/* Right: vertical line + text */}
                    <div className="flex">
                        
                        <div className='flex flex-col gap-4'>
                            <h4 className="text-md uppercase tracking-[1px] text-teal-400 mb-2">{active.title}</h4>
                            <h3 className="text-4xl font-semibold text-white mb-4">{active.detailTitle}</h3>
                            <p className="text-[18px] w-max-2xl leading-[28px] text-[#E0E0E0]">{active.detailText}</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
