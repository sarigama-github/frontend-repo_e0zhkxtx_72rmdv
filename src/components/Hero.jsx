import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-gradient-to-tr from-indigo-200 via-fuchsia-200 to-cyan-200 blur-3xl opacity-60 pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-cyan-200 via-emerald-200 to-indigo-200 blur-3xl opacity-60 pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-600 bg-white/60 border border-white/40 rounded-full px-3 py-1 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for work
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
            Building modern, playful and interactive web experiences
          </h1>
          <p className="text-slate-600 text-lg max-w-prose">
            I’m a frontend engineer focused on delightful interfaces, crisp motion, and solid engineering. Explore selected projects and get in touch.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center rounded-full bg-slate-900 text-white px-5 py-3 text-sm hover:bg-slate-800 transition-colors">View projects</a>
            <a href="#contact" className="inline-flex items-center rounded-full bg-white text-slate-900 px-5 py-3 text-sm border border-slate-200 hover:bg-slate-50 transition-colors">Contact me</a>
          </div>
        </div>

        <div className="relative aspect-square">
          <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/50 shadow-xl bg-white/30">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
