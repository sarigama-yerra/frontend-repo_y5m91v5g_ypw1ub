import { Code2, ShoppingCart, Rocket, Layout } from 'lucide-react'
import { motion } from 'framer-motion'

const packages = [
  {
    icon: Layout,
    title: 'Starter Website',
    subtitle: '1–3 pages',
    bullets: [
      'Custom design',
      'Mobile-friendly',
      'Basic SEO setup',
      '1 round of revisions',
      'Contact form',
    ],
  },
  {
    icon: Rocket,
    title: 'Business Website',
    subtitle: '5–10 pages',
    bullets: [
      'Custom design + CMS',
      'Advanced SEO setup',
      'Performance optimized',
      '2 rounds of revisions',
      'Blog & integrations',
    ],
  },
  {
    icon: ShoppingCart,
    title: 'E‑Commerce Website',
    subtitle: 'Sell online',
    bullets: [
      'Product pages & cart',
      'Secure checkout',
      'Inventory management',
      'Payment gateways',
      'Analytics & tracking',
    ],
  },
  {
    icon: Code2,
    title: 'Custom Web App',
    subtitle: 'Tailored solution',
    bullets: [
      'React/Next.js frontend',
      'FastAPI backend',
      'Auth & dashboards',
      'APIs & databases',
      'Scalable architecture',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-blue-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Services</h2>
          <p className="mt-3 text-slate-600">Affordable websites crafted for growth: professional website design, custom web design, and business websites that convert.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl bg-white shadow-sm ring-1 ring-blue-100/70 p-6 hover:shadow-md transition"
            >
              <div className="h-11 w-11 rounded-lg bg-blue-600/10 text-blue-700 flex items-center justify-center">
                <pkg.icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{pkg.title}</h3>
              <p className="text-sm text-blue-700 font-medium">{pkg.subtitle}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {pkg.bullets.map((b) => (
                  <li key={b} className="">• {b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
