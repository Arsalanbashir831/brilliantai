// app/new/page.tsx
'use client';


export default function Hero() {
    return (
        <section className="relative w-full h-screen flex items-center justify-center bg-[url('/news/HeroNews.svg')] bg-cover bg-center text-white">
            {/* dark overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* content */}
            <div className="relative z-10 max-w-4xl text-center px-4">
                <h1 className="text-6xl font-semibold mb-4">News, insights and more</h1>
                <p className="mb-6 text-lg">Dive into our newsletter for expert insights, tips, and industry trends to elevate <br />your project management journey.</p>
              
            </div>
        </section>
    );
}
