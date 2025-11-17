import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Starter',
    price: '$799',
    desc: '1–3 page professional website for new businesses.',
    features: ['Custom design', 'Mobile‑friendly', 'Basic SEO', 'Contact form', '1 revision round'],
  },
  {
    name: 'Business',
    price: '$1,999',
    desc: '5–10 page business website built to scale.',
    features: ['Custom design + CMS', 'Advanced SEO', 'Blog setup', 'Speed optimized', '2 revision rounds'],
    highlight: true,
  },
  {
    name: 'E‑Commerce',
    price: '$3,499',
    desc: 'Sell products with a modern online store.',
    features: ['Product catalog', 'Payment gateway', 'Checkout & cart', 'Analytics', 'Training & support'],
  },
  {
    name: 'Custom App',
    price: 'Get a quote',
    desc: 'Tailored web application for your unique needs.',
    features: ['React frontend', 'FastAPI backend', 'Auth & dashboard', 'APIs & DB', 'Scalable infra'],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-blue-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Pricing</h2>
          <p className="mt-3 text-slate-600">Clear packages for affordable websites and business websites. Choose what fits, or request a custom quote.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`rounded-2xl p-6 ring-1 ring-blue-100 shadow-sm bg-white ${p.highlight ? 'border-2 border-blue-600 shadow-blue-100' : ''}`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
                <span className="text-2xl font-bold text-blue-700">{p.price}</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {p.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-blue-600 text-white px-4 py-2 font-semibold shadow hover:bg-blue-700 transition">
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
