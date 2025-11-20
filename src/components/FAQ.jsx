import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'What is an Active SOP?',
    a: 'An Active SOP is a living workflow that executes steps automatically using integrated tools and data, rather than a static document.'
  },
  {
    q: 'Can InneraAI integrate with my stack?',
    a: 'Yes. We support common CRM, help desk, calendar, and email providers via secure integrations.'
  },
  {
    q: 'Is my data secure?',
    a: 'We follow industry best practices including encryption at rest and in transit, role-based permissions, and audit logs.'
  },
]

function Item({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl bg-white/5 backdrop-blur-xl border border-white/10">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left">
        <span className="text-white/90">{q}</span>
        <ChevronDown className={`w-5 h-5 text-white/70 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 text-white/70 text-sm">
          {a}
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center"
          style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((f) => (
            <Item key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
