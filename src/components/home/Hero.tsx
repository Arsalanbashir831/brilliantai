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
  <Button
    className="
      flex
      h-[52px]
      px-[32px] py-[13px]
      justify-center items-center
      gap-[10px]
      rounded-[16px]
      border-[0.7px] border-white/60
      bg-[radial-gradient(128.85%_128.85%_at_50.32%_-28.85%,_#56FFFF_0%,_#00B9B9_100%)]
      shadow-[0px_12px_112.4px_-12px_#23D5D5]
      text-lg font-medium text-white
      transition-opacity duration-200
      hover:opacity-90
    "
  >
    Get in touch →
  </Button>

  <Button
    variant="ghost"
    className="text-white hover:bg-transparent hover:text-white cursor-pointer  rounded-[16px]   h-[52px]
      px-[32px] py-[13px] text-lg font-medium"
  >
    Learn more →
  </Button>
</div>

            </div>
        </main>
    )
}
