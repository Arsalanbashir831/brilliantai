// app/new/page.tsx
'use client';


export default function Hero() {
    return (
        <section className="relative w-full md:py-32 p-10  flex items-center justify-center bg-[url('/startup/hero.svg')] bg-cover bg-center text-white">
            {/* dark overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* content */}
            <div className="relative z-10 max-w-4xl text-center md:px-4 ">
                <h1 className="text-4xl md:text-7xl  font-md mb-4">News, insights and more</h1>
                <p className="mb-6 text-lg text-center">Dive into our newsletter for expert insights, tips, and industry trends to elevate <br />your project management journey.</p>
              
            </div>
        </section>
    );
}
