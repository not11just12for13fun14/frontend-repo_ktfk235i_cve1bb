import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Basic',
    price: '$29/mo',
    features: ['1 Active SOP', 'Email automations', 'Basic analytics'],
    cta: 'Select Plan',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$99/mo',
    features: ['5 Active SOPs', 'Multi-channel automations', 'Advanced analytics', 'Priority support'],
    cta: 'Select Plan',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['Unlimited SOPs', 'SSO & security', 'Custom integrations', 'Dedicated success'],
    cta: 'Contact Sales',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-10"
          style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}
        >
          Pricing
        </motion.h2>

        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`rounded-2xl border p-6 backdrop-blur-xl ${
                tier.highlight
                  ? 'bg-gradient-to-b from-[#4F46E5]/20 to-[#10B981]/10 border-white/20 shadow-[0_10px_40px_rgba(79,70,229,0.35)]'
                  : 'bg-white/5 border-white/10'
              }`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-white text-2xl font-semibold" style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}>{tier.name}</h3>
                <span className={`text-sm px-2 py-1 rounded-full border ${tier.highlight ? 'border-white/30 text-white' : 'border-white/10 text-white/70'}`}>{tier.highlight ? 'Most Popular' : ' '}</span>
              </div>
              <p className="mt-4 text-4xl text-white font-bold">{tier.price}</p>
              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="text-white/80 text-sm flex items-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-8 w-full rounded-lg py-3 font-medium transition-colors ${
                tier.highlight ? 'bg-[#4F46E5] hover:bg-indigo-500 text-white' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
              }`}>
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
