import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Product', href: '#product' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-xl bg-white/5 border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#4F46E5] to-[#10B981] shadow-[0_0_30px_rgba(79,70,229,0.5)]"></div>
            <span className="text-white font-semibold tracking-wide text-lg" style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}>InneraAI</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg bg-[#4F46E5] hover:bg-indigo-500 text-white px-4 py-2 text-sm font-medium shadow-[0_10px_30px_rgba(79,70,229,0.35)]"
            >
              Get Started
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2 rounded-lg bg-white/5 backdrop-blur border border-white/10">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg text-white/90 hover:bg-white/10">
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="mt-1 inline-flex justify-center items-center rounded-lg bg-[#4F46E5] text-white px-4 py-2 text-sm font-medium">
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
