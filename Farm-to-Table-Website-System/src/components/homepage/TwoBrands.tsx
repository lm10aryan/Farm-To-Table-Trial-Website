'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function TwoBrands() {
  return (
    <section className="py-[120px] bg-white">
      <div className="max-w-[1000px] mx-auto px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-[#6B7A52] mb-3">
            SYSTEM OUTPUT
          </p>
          <h2 className="text-5xl font-bold text-[#2C2416] mb-6">
            Two Brands, One Standard
          </h2>
          <p className="text-lg text-[#5A4F3D] max-w-2xl mx-auto">
            We operate two brands for different market segments—both built on the same quality discipline and grading systems.
          </p>
        </div>

        {/* Two Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">

          {/* LEFT COLUMN: RED LADY */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold tracking-wide text-[#2C2416] mb-2">
              RED LADY
            </h3>

            <p className="text-lg font-semibold text-[#6B7A52] mb-6">
              Premium Retail
            </p>

            <p className="text-base text-[#5A4F3D] leading-relaxed mb-5">
              For premium retailers who demand the highest standards. Every piece hand-graded, Brix-tested, lot-traced.
            </p>

            <p className="text-base text-[#5A4F3D] leading-relaxed mb-6">
              We've refused shipments of Red Lady produce rather than compromise—that's why the brand has earned trust with premium buyers across Middle East, Europe, and Southeast Asia.
            </p>

            <Link
              href="/products?brand=red-lady"
              className="text-[#6B7A52] font-semibold hover:underline inline-flex items-center transition-all duration-200"
            >
              View Red Lady Products →
            </Link>
          </motion.div>

          {/* RIGHT COLUMN: NUTRIGO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold tracking-wide text-[#2C2416] mb-2">
              NUTRIGO
            </h3>

            <p className="text-lg font-semibold text-[#6B7A52] mb-6">
              Volume-Quality Wholesale
            </p>

            <p className="text-base text-[#5A4F3D] leading-relaxed mb-5">
              For wholesalers seeking reliable quality at scale. Consistent grading, transparent specs, dependable supply.
            </p>

            <p className="text-base text-[#5A4F3D] leading-relaxed mb-6">
              Built for program planning with buyers who understand that 'volume-quality' doesn't mean compromising standards—it means scaling them.
            </p>

            <Link
              href="/products?brand=nutrigo"
              className="text-[#6B7A52] font-semibold hover:underline inline-flex items-center transition-all duration-200"
            >
              View Nutrigo Products →
            </Link>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
