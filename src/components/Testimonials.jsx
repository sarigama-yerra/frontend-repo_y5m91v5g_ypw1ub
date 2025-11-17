import { motion } from 'framer-motion'

const testimonials = [
  { name: 'Alex P.', role: 'Startup Founder', quote: 'Loved the clean, modern design. Our sign‑ups doubled within a month!' },
  { name: 'Priya S.', role: 'Consultant', quote: 'Fast delivery and great communication. The site looks amazing on mobile.' },
  { name: 'Jordan M.', role: 'E‑commerce Owner', quote: 'SEO improvements boosted our traffic. Smooth checkout increased conversions.' },
  { name: 'Diego L.', role: 'Agency Partner', quote: 'Reliable and professional. My go‑to for custom web apps.' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Testimonials</h2>
          <p className="mt-3 text-slate-600">What happy clients say about my professional website and custom web design work.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl bg-white shadow-sm ring-1 ring-blue-100 p-6"
            >
              <blockquote className="text-slate-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-500">— {t.name}, {t.role}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
