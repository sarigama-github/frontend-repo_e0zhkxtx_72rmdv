export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
        <div className="rounded-2xl border border-white/50 bg-white/60 backdrop-blur p-6">
          <h3 className="text-2xl font-bold text-slate-900">About me</h3>
          <p className="text-slate-600 mt-3 leading-relaxed">
            I craft interfaces that feel alive. With a strong design sense and a love for performance, I focus on building accessible, fast, and fun products. I enjoy collaborating closely with design and product to ship meaningful work.
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-700">
            <li>• React, Next.js</li>
            <li>• TypeScript</li>
            <li>• Tailwind CSS</li>
            <li>• Framer Motion</li>
            <li>• Accessibility</li>
            <li>• Testing</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-white/50 bg-white/60 backdrop-blur p-6">
          <h3 className="text-2xl font-bold text-slate-900">Experience</h3>
          <ul className="mt-3 space-y-3 text-slate-700">
            <li>
              <div className="font-semibold">Senior Frontend Engineer — Freelance</div>
              <div className="text-sm">2022 — Present</div>
            </li>
            <li>
              <div className="font-semibold">Frontend Engineer — Studio XYZ</div>
              <div className="text-sm">2020 — 2022</div>
            </li>
            <li>
              <div className="font-semibold">UI Developer — Startup ABC</div>
              <div className="text-sm">2018 — 2020</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
