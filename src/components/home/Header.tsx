// components/Header.tsx
import { Button } from "@/components/ui/button"
import { Menu, ArrowRight, Link } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import Image from "next/image"
import { useRouter } from "next/navigation"


export default function Header() {
const router = useRouter()
    return (
        <nav className="relative z-10 flex items-center bg-[#011010] border-b border-[#C3FFFF]  justify-between p-4 lg:px-20 lg:py-6">
           
           <Image height={150} width={150} src="/logo.svg" alt="Logo" className="h-8 lg:h-10" />

           
            <div className="hidden lg:flex items-center space-x-8">
                <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">Home</Link>
                <Link href="/#services" className="text-white hover:text-cyan-300 transition-colors">Services</Link>
                <Link href="/startup" className="text-white hover:text-cyan-300 transition-colors">Startup</Link>
                <Link href="/news" className="text-white hover:text-cyan-300 transition-colors">News</Link>
                <Link href="/about" className="text-white hover:text-cyan-300 transition-colors">Company</Link>
                <Link href="/contact-us" className="text-white hover:text-cyan-300 transition-colors">Contact Us</Link>
            </div>

          
            <Button onClick={()=>router.push('/contact-us#contact-form')} className="hidden lg:flex bg-white text-teal-900 hover:bg-gray-100 rounded-xl px-6">
                Book a Call
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
                    <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">Home</Link>
                <Link href="/#services" className="text-white hover:text-cyan-300 transition-colors">Services</Link>
                <Link href="/startup" className="text-white hover:text-cyan-300 transition-colors">Startup</Link>
                <Link href="/news" className="text-white hover:text-cyan-300 transition-colors">News</Link>
                <Link href="/about" className="text-white hover:text-cyan-300 transition-colors">Company</Link>
                <Link href="/contact-us" className="text-white hover:text-cyan-300 transition-colors">Contact Us</Link>
                        <Button onClick={()=>router.push('/contact-us#contact-form')} className="bg-white text-teal-900 hover:bg-gray-100 rounded-full px-6 mt-4">
                            Book a Call
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>
        </nav>
    )
}
