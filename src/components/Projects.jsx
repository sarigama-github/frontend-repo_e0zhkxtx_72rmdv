export default function Projects() {
  const items = [
    {
      title: 'Neon Shop',
      tags: ['React', 'Tailwind', 'Stripe'],
      desc: 'E-commerce UI with smooth micro-interactions and checkout flow.',
      link: '#'
    },
    {
      title: 'Pulse Dashboard',
      tags: ['React', 'D3', 'Framer Motion'],
      desc: 'Analytics dashboard with live charts and cinematic motion.',
      link: '#'
    },
    {
      title: 'Studio Site',
      tags: ['Next.js', 'Sanity', 'Vercel'],
      desc: 'Content-driven portfolio with CMS and fast edge deploys.',
      link: '#'
    }
  ]

  return (
    <section id="projects" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/3 h-72 w-72 bg-gradient-to-tr from-fuchsia-200 to-indigo-200 blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Selected work</h2>
          <p className="text-slate-600 mt-2">A few recent projects that I loved building.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((p) => (
            <a key={p.title} href={p.link} className="group relative rounded-2xl border border-white/50 bg-white/60 backdrop-blur p-6 shadow-sm hover:shadow-xl transition-all">
              <div className="h-40 mb-4 rounded-xl bg-gradient-to-tr from-indigo-300 via-fuchsia-300 to-cyan-300 opacity-80 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{p.desc}</p>
              <div className="flex gap-2 mt-3">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] px-2 py-1 rounded-full bg-white border border-slate-200 text-slate-700">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
