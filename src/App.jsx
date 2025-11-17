import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-fuchsia-50">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Projects />
        <About />
        <Contact />
        <footer className="py-10 text-center text-slate-500">© {new Date().getFullYear()} Your Name — All rights reserved.</footer>
      </main>
    </div>
  )
}

export default App
