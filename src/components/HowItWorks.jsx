import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { Mail, PhoneCall, KeyRound, BarChart3 } from 'lucide-react'

const steps = [
  { icon: Mail, label: 'Send Intro Email' },
  { icon: PhoneCall, label: 'Schedule Call' },
  { icon: KeyRound, label: 'Generate Access' },
  { icon: BarChart3, label: 'Automate Reporting' },
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
          How It Works
        </motion.h2>

        <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6">
          <p className="text-white/80 mb-6">Active SOP - Client Onboarding Pipeline</p>

          <div className="relative">
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#4F46E5] via-[#4F46E5] to-[#10B981]"
                initial={{ width: 0 }}
                animate={controls}
                transition={{ duration: 2.4, ease: 'easeInOut' }}
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
                  className="flex flex-col items-center text-center rounded-xl p-4 bg-white/5 border border-white/10"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-[#4F46E5]/20 to-[#10B981]/20 text-white">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <p className="mt-3 text-white/90 text-sm">{step.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
