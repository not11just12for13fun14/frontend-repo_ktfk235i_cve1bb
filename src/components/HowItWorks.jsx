import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { Mail, Calendar, KeyRound, CheckCircle2 } from 'lucide-react'

const steps = [
  { icon: Mail, label: 'Send Email' },
  { icon: Calendar, label: 'Schedule Call' },
  { icon: KeyRound, label: 'Provision Access' },
  { icon: CheckCircle2, label: 'Go Live' },
]

export default function HowItWorks() {
  const controls = useAnimation()

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ width: '25%' })
      await controls.start({ width: '50%' })
      await controls.start({ width: '75%' })
      await controls.start({ width: '100%' })
    }
    sequence()
  }, [controls])

  return (
    <section id="product" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-10"
          style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}
        >
          The Automated Workflow
        </motion.h2>

        <div className="rounded-2xl border border-white/10 p-6" style={{ background: 'rgba(255,255,255,0.07)', WebkitBackdropFilter: 'blur(10px)', backdropFilter: 'blur(10px)' }}>
          <p className="text-white/85 mb-6">Client Onboarding Pipeline</p>

          <div className="relative">
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-white via-[#8C52FF] to-[#EC06BE]"
                initial={{ width: 0 }}
                animate={controls}
                transition={{ duration: 2.6, ease: 'easeInOut' }}
              />
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.15 }}
                  className="flex flex-col items-center text-center rounded-full px-4 py-3 border border-white/10"
                  style={{ background: 'rgba(255,255,255,0.07)', WebkitBackdropFilter: 'blur(10px)', backdropFilter: 'blur(10px)' }}
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-white/20 to-[#8C52FF]/30 text-white">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <p className="mt-3 text-white/90 text-sm">{step.label}</p>
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.5 + idx * 0.2 }}
                    className="mt-2 inline-flex items-center gap-1 text-xs text-white/80"
                  >
                    <span className="inline-block w-2 h-2 rounded-full bg-[#EC06BE] shadow-[0_0_12px_rgba(236,6,190,0.9)]" />
                    Ready
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
