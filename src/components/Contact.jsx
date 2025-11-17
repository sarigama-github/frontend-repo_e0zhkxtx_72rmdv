import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // This is a frontend-only demo submit. Replace with your backend later.
    await new Promise((r) => setTimeout(r, 800))
    setStatus('Thanks! I will get back to you soon.')
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/50 bg-white/60 backdrop-blur p-6">
          <h3 className="text-2xl font-bold text-slate-900">Let’s build something great</h3>
          <p className="text-slate-600 mt-2">Tell me about your project, timeline, and goals.</p>

          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input required type="text" placeholder="Your name" className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900" />
              <input required type="email" placeholder="Email" className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900" />
            </div>
            <input type="text" placeholder="Company / Organization" className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900" />
            <textarea required rows={5} placeholder="Project details" className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-slate-900" />
            <div className="flex items-center gap-4">
              <button className="inline-flex items-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm hover:bg-slate-800 transition-colors">Send message</button>
              <span className="text-sm text-slate-600">{status}</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
