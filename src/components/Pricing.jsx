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
              initial={{ opacity: 0, y: 20, scale: tier.highlight ? 0.98 : 1 }}
              whileInView={{ opacity: 1, y: 0, scale: tier.highlight ? 1 : 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.12 }}
              className={`rounded-2xl border p-6 relative overflow-hidden`}
              style={{ background: 'rgba(255,255,255,0.07)', WebkitBackdropFilter: 'blur(10px)', backdropFilter: 'blur(10px)', borderColor: 'rgba(255,255,255,0.1)' }}
            >
              {tier.highlight && (
                <div className="absolute -inset-1 rounded-2xl pointer-events-none" style={{ background: 'radial-gradient(120px 120px at 80% 20%, rgba(255,255,255,0.35), transparent 60%), radial-gradient(200px 200px at -20% 120%, rgba(140,82,255,0.35), transparent 60%)' }} />
              )}
              <div className="relative">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-white text-2xl font-semibold" style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}>{tier.name}</h3>
                  <span className={`text-sm px-2 py-1 rounded-full border ${tier.highlight ? 'border-white/30 text-white' : 'border-white/10 text-white/70'}`}>{tier.highlight ? 'Most Popular' : ' '}</span>
                </div>
                <p className="mt-4 text-4xl text-white font-bold">{tier.price}</p>
                <ul className="mt-6 space-y-3 relative z-10">
                  {tier.features.map((f) => (
                    <li key={f} className="text-white/85 text-sm flex items-center gap-2">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#EC06BE] shadow-[0_0_10px_rgba(236,6,190,0.9)]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 w-full rounded-lg py-3 font-semibold relative overflow-hidden text-[#0B0B13]`}
                >
                  <span className="absolute inset-0" style={{ background: 'linear-gradient(90deg, #ffffff 0%, #8C52FF 60%)' }} />
                  <span className="relative z-10 mix-blend-difference text-white">{tier.cta}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
