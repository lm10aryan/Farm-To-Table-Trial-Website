'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

// Product data
const products = [
  {
    name: 'Pomegranates',
    badge: 'Peak Quality',
    badgeColor: 'bg-[#4A7C59]',
    specs: [
      '14-16° Brix (peak season)',
      'Week 48-14 availability',
      'Red Lady & Nutrigo',
    ],
  },
  {
    name: 'Grapes',
    badge: 'Peak Quality',
    badgeColor: 'bg-[#4A7C59]',
    specs: [
      '18mm+ bunches',
      '<2% defects',
      'Week 48-14',
    ],
  },
  {
    name: 'Melons',
    badge: 'Coming Soon',
    badgeColor: 'bg-[#4A7C9B]',
    specs: [
      'Brix tested',
      'Moisture controlled',
      'Summer season',
    ],
  },
  {
    name: 'Bananas',
    badge: 'Peak Quality',
    badgeColor: 'bg-[#4A7C59]',
    specs: [
      'Year-round supply',
      'Cavendish variety',
      'Green to yellow stages',
    ],
  },
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function ProductsTeaser() {
  return (
    <section className="py-[120px] bg-[#F9F7F4]">
      <div className="max-w-[1200px] mx-auto px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-[#6B7A52] mb-3">
            CURRENT SEASON
          </p>
          <h2 className="text-5xl font-bold text-[#2C2416] mb-6">
            What's Available Now
          </h2>
          <p className="text-lg text-[#5A4F3D] max-w-3xl mx-auto">
            Quality varies by season—we don't hide that. Here's what's at peak quality right now.
          </p>
        </div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white border border-[#E8E5E0] p-6 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div
                className="aspect-[4/3] rounded-lg bg-[#F9F7F4] border border-[#E8E5E0] mb-4 flex items-center justify-center"
                role="img"
                aria-label={`${product.name} product image placeholder`}
              >
                <span className="text-sm text-[#A39B8F]">[Product Photo]</span>
              </div>

              {/* Product Name */}
              <h3 className="text-2xl font-semibold text-[#2C2416] mb-3">
                {product.name}
              </h3>

              {/* Status Badge */}
              <span
                className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 text-white ${product.badgeColor}`}
              >
                {product.badge}
              </span>

              {/* Specs List */}
              <ul className="space-y-2 mb-4">
                {product.specs.map((spec, idx) => (
                  <li key={idx} className="text-base text-[#5A4F3D]">
                    • {spec}
                  </li>
                ))}
              </ul>

              {/* CTA Link */}
              <Link
                href="/products"
                className="text-[#6B7A52] font-semibold hover:underline inline-flex items-center"
              >
                View Full Specs →
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Content */}
        <div className="text-center">
          <p className="text-base text-[#5A4F3D] max-w-2xl mx-auto mb-10 leading-relaxed">
            We track seasonal variations in Brix levels, size calibers, and quality metrics.
            This depth of knowledge means you can plan programs with confidence—not hope.
          </p>

          <Link
            href="/products"
            className="inline-block border-2 border-[#6B7A52] text-[#6B7A52] px-8 py-3.5 rounded-lg hover:bg-[#F9F7F4] font-semibold transition-colors duration-300 mt-2"
          >
            View Full Product Range & Seasonal Calendar →
          </Link>
        </div>

      </div>
    </section>
  )
}
