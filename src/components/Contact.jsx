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

        <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6">
          <form className="grid gap-4">
            <div>
              <label className="block text-sm text-white/80 mb-1">Name</label>
              <input type="text" className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-sm text-white/80 mb-1">Email</label>
              <input type="email" className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]" placeholder="jane@company.com" />
            </div>
            <div>
              <label className="block text-sm text-white/80 mb-1">Message</label>
              <textarea rows="4" className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]" placeholder="Tell us about your use case..." />
            </div>
            <button type="submit" className="mt-2 inline-flex justify-center items-center rounded-lg bg-[#10B981] hover:bg-emerald-500 text-[#0F0F1A] font-semibold px-5 py-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
