import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center"
          style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}
        >
          Contact Us
        </motion.h2>

        <div className="rounded-2xl border border-white/10 p-6" style={{ background: 'rgba(255,255,255,0.07)', WebkitBackdropFilter: 'blur(10px)', backdropFilter: 'blur(10px)' }}>
          <form className="grid gap-4">
            <div>
              <label className="block text-sm text-white/85 mb-1">Name</label>
              <input type="text" className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#8C52FF]" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-sm text-white/85 mb-1">Email</label>
              <input type="email" className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#8C52FF]" placeholder="jane@company.com" />
            </div>
            <div>
              <label className="block text-sm text-white/85 mb-1">Message</label>
              <textarea rows="4" className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#8C52FF]" placeholder="Tell us about your use case..." />
            </div>
            <button type="submit" className="mt-2 inline-flex justify-center items-center rounded-lg font-semibold px-5 py-3 relative overflow-hidden group text-[#0B0B13]">
              <span className="absolute inset-0 bg-gradient-to-r from-white via-white to-[#8C52FF] group-hover:from-[#8C52FF] group-hover:via-[#8C52FF] group-hover:to-white transition-all duration-300" />
              <span className="relative z-10 mix-blend-difference text-white">Submit</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
