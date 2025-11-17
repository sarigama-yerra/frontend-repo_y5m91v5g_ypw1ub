import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#top" className="text-xl font-semibold tracking-tight text-blue-700">
            <span className="font-black">Blue</span>Studio
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            <a href="#services" className="hover:text-blue-700 transition">Services</a>
            <a href="#portfolio" className="hover:text-blue-700 transition">Portfolio</a>
            <a href="#why" className="hover:text-blue-700 transition">Why Me</a>
            <a href="#testimonials" className="hover:text-blue-700 transition">Testimonials</a>
            <a href="#pricing" className="hover:text-blue-700 transition">Pricing</a>
            <a href="#contact" className="ml-2 inline-flex items-center justify-center rounded-md bg-blue-600 text-white px-4 py-2 font-medium shadow hover:bg-blue-700 transition">
              Get a Quote
            </a>
          </nav>
          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-blue-50 text-blue-700">
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>
  )
}
