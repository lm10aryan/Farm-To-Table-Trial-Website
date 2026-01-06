'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PartnershipCTA() {
  return (
    <section className="py-[160px] bg-[#F9F7F4]">
      <div className="max-w-[800px] mx-auto px-8 text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Eyebrow */}
          <p className="text-xs uppercase tracking-widest text-[#6B7A52] mb-3">
            NEXT STEPS
          </p>

          {/* Headline */}
          <h2 className="text-5xl font-bold text-[#2C2416] mb-8">
            Built for Strategic Partnerships
          </h2>

          {/* Body Paragraph */}
          <p className="text-lg text-[#5A4F3D] leading-relaxed max-w-[650px] mx-auto mb-12">
            We work with premium buyers who value consistency over cheapest price.
            Trial containers first, long-term programs after. If you're planning 3-6 month
            programs and quality matters more than rock-bottom pricing, let's talk.
          </p>

          {/* CTA Button */}
          <Link
            href="/partnership"
            className="inline-block bg-[#6B7A52] text-white px-12 py-4 rounded-lg hover:bg-[#4F5A3D] hover:scale-105 text-lg font-semibold transition-all duration-300"
          >
            Start the Conversation
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
