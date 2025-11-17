import { motion } from 'framer-motion'

const projects = [
  { title: 'SaaS Landing', desc: 'Clean, conversion‑focused layout for a B2B SaaS.', img: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Modern Agency', desc: 'Minimal branding site with bold typography.', img: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop' },
  { title: 'E‑Commerce UI', desc: 'Elegant storefront with product grid and filters.', img: 'https://images.unsplash.com/photo-1542396601-dca920ea2807?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Startup Portfolio', desc: 'Personal founder site with blog and newsletter.', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop' },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Portfolio</h2>
          <p className="mt-3 text-slate-600">A few clean, modern layouts I can tailor to your brand and goals.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl overflow-hidden ring-1 ring-blue-100 bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
