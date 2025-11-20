import { motion } from 'framer-motion'

function Node({ delay, x, y }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0.2, 1, 0.2] }}
      transition={{ duration: 2.5, delay, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute w-2 h-2 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]"
      style={{ left: x, top: y }}
    />
  )
}

function Beam({ x1, y1, x2, y2, delay }) {
  const dx = x2 - x1
  const dy = y2 - y1
  const length = Math.hypot(dx, dy)
  const angle = Math.atan2(dy, dx) * (180 / Math.PI)
  return (
    <div
      className="absolute"
      style={{ left: x1, top: y1, width: length, height: 2, transform: `rotate(${angle}deg)`, transformOrigin: '0 0' }}
    >
      <div className="relative w-full h-full bg-white/20">
        <motion.span
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: length, opacity: [0, 1, 0] }}
          transition={{ duration: 2.2, delay, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-[3px] block h-[8px] w-[40px] rounded-full bg-[#EC06BE] shadow-[0_0_24px_rgba(236,6,190,0.9)]"
        />
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative pt-28" id="hero">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="space-y-3">
            {['Automate Workflows', 'Activate Your SOPs', 'Accelerate Growth'].map((line, i) => (
              <motion.h1
                key={line}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 * i }}
                className={`block text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight ${i === 0 ? 'text-white' : 'text-white/90'}`}
                style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}
              >
                {line}
              </motion.h1>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-5 text-lg text-white/85"
          >
            InneraAI transforms static SOPs into live, automated systems that route data, trigger actions, and close loops—so your team can focus on impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#product" className="px-5 py-3 rounded-lg bg-white text-[#0B0B13] font-medium shadow-[0_10px_30px_rgba(255,255,255,0.25)] hover:bg-white/90">See How It Works</a>
            <a href="#pricing" className="px-5 py-3 rounded-lg bg-[rgba(255,255,255,0.07)] text-white border border-white/10" style={{ WebkitBackdropFilter: 'blur(10px)', backdropFilter: 'blur(10px)' }}>View Pricing</a>
          </motion.div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[580px] rounded-2xl overflow-hidden border border-white/10" style={{ background: 'rgba(255,255,255,0.07)', WebkitBackdropFilter: 'blur(10px)', backdropFilter: 'blur(10px)' }}>
          {/* Abstract network canvas */}
          <div className="absolute inset-0">
            {/* Nodes */}
            <Node delay={0.1} x={40} y={60} />
            <Node delay={0.3} x={160} y={40} />
            <Node delay={0.6} x={260} y={120} />
            <Node delay={0.9} x={120} y={200} />
            <Node delay={1.1} x={300} y={260} />
            <Node delay={1.3} x={80} y={300} />
            <Node delay={1.6} x={220} y={360} />

            {/* Links with flowing pulses */}
            <Beam x1={40} y1={60} x2={160} y2={40} delay={0.2} />
            <Beam x1={160} y1={40} x2={260} y2={120} delay={0.5} />
            <Beam x1={120} y1={200} x2={260} y2={120} delay={0.8} />
            <Beam x1={120} y1={200} x2={300} y2={260} delay={1.1} />
            <Beam x1={80} y1={300} x2={220} y2={360} delay={1.3} />
            <Beam x1={260} y1={120} x2={300} y2={260} delay={1.5} />
          </div>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
        </div>
      </div>
    </section>
  )
}
