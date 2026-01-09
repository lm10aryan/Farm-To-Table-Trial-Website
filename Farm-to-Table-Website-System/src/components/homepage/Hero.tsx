'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="py-[120px] md:py-[60px] bg-white">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20">

          {/* LEFT COLUMN - Text Content */}
          <motion.div
            className="flex-1 w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Eyebrow */}
            <p className="text-xs uppercase tracking-widest text-[#6B7A52] mb-4">
              Serving premium buyers globally
            </p>

            {/* Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.05] tracking-[-0.02em] text-[#2C2416] mb-6 max-w-[600px] mx-auto lg:mx-0">
              Premium Fresh Produce Export Where Everyone Wins
            </h1>

            {/* Subheadline */}
            <p className="text-lg leading-relaxed text-[#5A4F3D] mb-8 max-w-[560px] mx-auto lg:mx-0">
              India grows exceptional produce. The supply chain is unpredictable. We&apos;ve built a system where farmers thrive, quality stays consistent, and buyers get what they paid for.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 mb-6 justify-center lg:justify-start">
              <a
                href="#contact"
                className="bg-[#6B7A52] text-white px-8 py-4 rounded-lg hover:bg-[#4F5A3D] transition-all duration-300 font-semibold text-center"
                aria-label="Request partnership discussion"
              >
                Request Partnership Discussion
              </a>
              <a
                href="#process"
                className="border-2 border-[#6B7A52] text-[#6B7A52] px-8 py-4 rounded-lg hover:bg-[#F9F7F4] hover:border-[#6B7A52] transition-all duration-300 font-semibold text-center"
                aria-label="See our process"
              >
                See Our Process
              </a>
            </div>

            {/* Tagline */}
            <p className="text-sm text-[#8C7D68] mt-4">
              Process-first. Honest communication. No surprises.
            </p>
          </motion.div>

          {/* RIGHT COLUMN - Visual Placeholder */}
          <motion.div
            className="flex-1 w-full lg:w-1/2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="w-full rounded-3xl border border-dashed border-[#E8E5E0]/50 bg-[#F9F7F4] flex flex-col items-center justify-center p-12 text-center"
              style={{ aspectRatio: '16/10' }}
            >
              <p className="text-2xl font-bold text-[#2C2416] mb-4">
                REAL PHOTO NEEDED
              </p>
              <p className="text-lg text-[#5A4F3D]">
                Hands sorting fruit on packhouse table
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
