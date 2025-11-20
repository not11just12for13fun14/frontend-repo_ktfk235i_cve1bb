import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Benefits from './components/Benefits'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Contact from './components/Contact'

function App() {
  return (
    <div
      className="min-h-screen text-white"
      style={{
        backgroundImage:
          'radial-gradient(circle at top left, #FFFFFF 0%, #1B10F3 40%, #EC06BE 70%, #8C52FF 100%)',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Subtle dark veil to keep contrast high on bright radial center */}
      <div className="fixed inset-0 -z-[1]" aria-hidden>
        <div className="absolute inset-0 bg-[#0B0B13]/70" />
      </div>

      <Navbar />

      <main className="relative">
        <Hero />
        <HowItWorks />
        <Benefits />
        <Pricing />
        <FAQ />
        <Contact />
      </main>

      <footer className="relative py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white/70 text-sm">
            <p>© {new Date().getFullYear()} InneraAI. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
