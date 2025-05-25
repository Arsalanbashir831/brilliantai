// components/Header.tsx
import { Button } from "@/components/ui/button"
import { Menu, ArrowRight } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

export default function Header() {
    return (
        <nav className="relative z-10 flex items-center bg-[#011010] border-b border-[#C3FFFF]  justify-between p-4 lg:px-20 lg:py-6">
           
           <Image height={150} width={150} src="/logo.svg" alt="Logo" className="h-8 lg:h-10" />

           
            <div className="hidden lg:flex items-center space-x-8">
                <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">Home</a>
                <a href="#" className="text-white hover:text-cyan-300 transition-colors">Services</a>
                <a href="#" className="text-white hover:text-cyan-300 transition-colors">Startup</a>
                <a href="#" className="text-white hover:text-cyan-300 transition-colors">News</a>
                <a href="#" className="text-white hover:text-cyan-300 transition-colors">Company</a>
                <a href="#" className="text-white hover:text-cyan-300 transition-colors">Contact Us</a>
            </div>

          
            <Button className="hidden lg:flex bg-white text-teal-900 hover:bg-gray-100 rounded-xl px-6">
                Book a call
                <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            {/* Mobile Menu */}
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="lg:hidden text-white">
                        <Menu className="h-6 w-6" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-teal-900 border-teal-700">
                    <div className="flex flex-col space-y-6 mt-8">
                        <a href="#" className="text-cyan-400 text-lg">Home</a>
                        <a href="#" className="text-white text-lg hover:text-cyan-300">Services</a>
                        <a href="#" className="text-white text-lg hover:text-cyan-300">Startup</a>
                        <a href="#" className="text-white text-lg hover:text-cyan-300">News</a>
                        <a href="#" className="text-white text-lg hover:text-cyan-300">Company</a>
                        <a href="#" className="text-white text-lg hover:text-cyan-300">Contact Us</a>
                        <Button className="bg-white text-teal-900 hover:bg-gray-100 rounded-full px-6 mt-4">
                            Book a call
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>
        </nav>
    )
}
