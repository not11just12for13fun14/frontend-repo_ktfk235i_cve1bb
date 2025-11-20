import { motion } from 'framer-motion'
import { Timer, Rocket, Scale } from 'lucide-react'

const items = [
  { icon: Timer, title: 'Save Time', desc: 'Automate repetitive SOP tasks and reclaim your team’s focus.' },
  { icon: Rocket, title: 'Increase Leads', desc: 'Activate follow-ups and nurturing flows that convert more prospects.' },
  { icon: Scale, title: 'Scale Effortlessly', desc: 'Grow operations without adding manual overhead or headcount.' },
]

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-10"
          style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}
        >
          Benefits
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#4F46E5]/20 to-[#10B981]/20 text-white">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-white text-xl font-semibold" style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}>{item.title}</h3>
              <p className="mt-2 text-white/80 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
