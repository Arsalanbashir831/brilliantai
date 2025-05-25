// components/Hero.tsx
import { Button } from "@/components/ui/button"

export default function Hero() {
    return (
        <main className="relative   flex flex-col items-center justify-center min-h-[calc(105vh-120px)] px-4 text-center">
            <div
                className="
                absolute -top-150 left-1/2                    
                -translate-x-1/2                          
                w-[1000px] h-[850px]                     
                rounded-full
                filter blur-[70px]                      
                "
                style={{
                    background:
                        "radial-gradient(circle at center, #00FFFF 0%, transparent 100%)",
                }}
            />
            <div className="max-w-4xl mx-auto">
                {/* Heading */}
                <h1 className="text-4xl z-20 relative md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-tight mb-8">
                    Unlock Your Vision With{" "}
                    <span
                        className="bg-gradient-to-r from-[#00AEFF] via-[#00DE94] to-[#00FF52] bg-clip-text text-transparent"
                        style={{
                            background: "linear-gradient(90deg, #00AEFF 16.33%, #00DE94 45.1%, #00FF52 73.68%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        Transformative
                    </span>{" "}
                    AI
                </h1>

                {/* Description */}
                <p className="text-gray-300 text-md md:text-md lg:text-xl  mx-auto mb-12 ">
                    We take you from idea to execution by building AI web apps, developing machine learning solutions and
                    implementing AI-driven processes that power scalable products and smarter operations.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-xl px-4 py-3 text-lg font-medium">
                        Get in touch →
                    </Button>
                    <Button variant="ghost" className="text-white hover:text-cyan-300 rounded-full px-8 py-3 text-lg font-medium">
                        Learn more →
                    </Button>
                </div>
            </div>
        </main>
    )
}
