import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import WhyMe from './components/WhyMe'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <WhyMe />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <footer className="py-10 border-t border-blue-100 bg-gradient-to-b from-white to-blue-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} BlueStudio — Professional websites & custom web design</p>
          <a href="#top" className="text-sm text-blue-700 hover:underline">Back to top</a>
        </div>
      </footer>
    </div>
  )
}

export default App
