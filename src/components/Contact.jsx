import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', details: '', budget: '' })
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      // In a real project, post to backend API endpoint
      await new Promise((r) => setTimeout(r, 800))
      setStatus('Thanks! I will get back within 24 hours.')
      setForm({ name: '', email: '', details: '', budget: '' })
    } catch (e) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Contact</h2>
          <p className="mt-3 text-slate-600">Tell me about your project and budget. I’ll send a custom proposal.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-8">
          <form onSubmit={submit} className="rounded-2xl bg-white shadow-sm ring-1 ring-blue-100 p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input required value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input required type="email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" placeholder="you@example.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-700">Project details</label>
              <textarea required value={form.details} onChange={(e)=>setForm({...form,details:e.target.value})} rows={5} className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500" placeholder="What do you need?" />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-700">Preferred budget</label>
              <select value={form.budget} onChange={(e)=>setForm({...form,budget:e.target.value})} className="mt-1 w-full rounded-md border-slate-300 focus:border-blue-500 focus:ring-blue-500">
                <option value="">Select a range</option>
                <option>$500–$1,000</option>
                <option>$1,000–$3,000</option>
                <option>$3,000–$6,000</option>
                <option>$6,000+</option>
              </select>
            </div>
            <button className="mt-6 inline-flex items-center justify-center rounded-md bg-blue-600 text-white px-6 py-3 font-semibold shadow hover:bg-blue-700 transition">Send Request</button>
            {status && <p className="mt-3 text-sm text-slate-600">{status}</p>}
          </form>

          <div className="rounded-2xl bg-blue-600 text-white p-8">
            <h3 className="text-2xl font-semibold">Let’s build something great</h3>
            <p className="mt-2 text-blue-100">Custom web design and professional websites tailored to your goals. I create affordable websites that look great and drive results.</p>
            <ul className="mt-6 space-y-2 text-blue-100/90 text-sm">
              <li>• Mobile‑first, SEO‑optimized</li>
              <li>• Performance and accessibility focused</li>
              <li>• Clear communication and ongoing support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
