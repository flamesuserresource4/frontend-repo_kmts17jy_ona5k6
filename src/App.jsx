import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Capabilities from './components/Capabilities'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* background subtle grid */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(168,85,247,0.12),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.12),transparent_40%)]" />
      <div className="pointer-events-none fixed inset-0 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:24px_24px]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Capabilities />
        <Work />
        <Contact />
        <footer className="border-t border-white/10 py-10 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Blue Ad Co. All rights reserved.
        </footer>
      </main>
    </div>
  )
}

export default App
