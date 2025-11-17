import { ShieldCheck, Rocket, Smartphone, DollarSign, Headphones } from 'lucide-react'

const items = [
  { icon: Rocket, title: 'Fast delivery', desc: 'Launch quickly without sacrificing quality.' },
  { icon: ShieldCheck, title: 'SEO‑optimized', desc: 'Technical SEO best practices baked in.' },
  { icon: Smartphone, title: 'Mobile‑first design', desc: 'Looks perfect on every device.' },
  { icon: DollarSign, title: 'Affordable pricing', desc: 'Transparent packages for every stage.' },
  { icon: Headphones, title: 'Ongoing support', desc: 'I’m here to help even after launch.' },
]

export default function WhyMe() {
  return (
    <section id="why" className="py-20 bg-gradient-to-b from-blue-50/40 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why choose me</h2>
          <p className="mt-3 text-slate-600">Professional website design with a focus on results. I build affordable websites that drive leads and sales for growing businesses.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl bg-white shadow-sm ring-1 ring-blue-100/70 p-6">
              <div className="h-11 w-11 rounded-lg bg-blue-600/10 text-blue-700 flex items-center justify-center">
                <it.icon size={22} />
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">{it.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
