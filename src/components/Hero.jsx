import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative pt-24 md:pt-28 lg:pt-32">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900"
          >
            Professional websites that convert
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg text-slate-600 max-w-xl"
          >
            I design and build affordable websites for startups and businesses — fast, SEO-optimized, and mobile-first.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#pricing" className="inline-flex items-center justify-center rounded-md bg-blue-600 text-white px-6 py-3 font-semibold shadow hover:bg-blue-700 transition">
              Get Pricing
            </a>
            <a href="#portfolio" className="inline-flex items-center justify-center rounded-md bg-white text-blue-700 px-6 py-3 font-semibold ring-1 ring-inset ring-blue-200 hover:ring-blue-300 transition">
              See Work
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 grid grid-cols-2 gap-3 text-sm text-slate-600"
          >
            <li className="flex items-center gap-2">• SEO-optimized</li>
            <li className="flex items-center gap-2">• Mobile-first design</li>
            <li className="flex items-center gap-2">• Fast turnaround</li>
            <li className="flex items-center gap-2">• Ongoing support</li>
          </motion.ul>
        </div>

        <div className="relative order-1 lg:order-2 h-[420px] md:h-[520px] lg:h-[560px] rounded-2xl overflow-hidden">
          <div className="absolute inset-0">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
        </div>
      </div>
    </section>
  )
}
