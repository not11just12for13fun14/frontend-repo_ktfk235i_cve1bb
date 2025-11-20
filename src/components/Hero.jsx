import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-28" id="hero">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B13]/60 via-transparent to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
            style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}
          >
            Smarter SOPs, Better Leads, Powered By AI
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-lg text-white/80"
          >
            InneraAI turns your standard operating procedures into living, automated pipelines that nurture leads and scale your operations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#product" className="px-5 py-3 rounded-lg bg-[#4F46E5] text-white font-medium shadow-[0_10px_30px_rgba(79,70,229,0.35)] hover:bg-indigo-500">See How It Works</a>
            <a href="#pricing" className="px-5 py-3 rounded-lg bg-white/5 text-white border border-white/10 backdrop-blur hover:bg-white/10">View Pricing</a>
          </motion.div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[580px] rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0F0F1A]/40" />
        </div>
      </div>
    </section>
  )
}
