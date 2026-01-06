'use client'

import { motion } from 'framer-motion'
import {
  Microscope,
  Users,
  BarChart,
  Shield,
  Handshake,
  Factory
} from 'lucide-react'

// Card data with icons and content
const proofPoints = [
  {
    icon: Microscope,
    title: 'Scientific Grading',
    description: 'Brix testing, soil analysis, moisture monitoring—measurable standards, not assumptions.',
    data: 'Example: Watermelons tested for 14-16° Brix before harvest approval.',
  },
  {
    icon: Users,
    title: '10-Year Quality Team',
    description: 'Same people, same standards, for over a decade. No churn, no retraining, no surprises.',
    data: 'Continuity is how we maintain quality as we scale.',
  },
  {
    icon: BarChart,
    title: 'Monthly Harvest Updates',
    description: 'We send buyers monthly updates on Brix levels, color variations, and harvest windows.',
    data: 'Plan operations in advance—no guessing.',
  },
  {
    icon: Shield,
    title: 'Quality Filtering',
    description: 'We reject shipments that don\'t meet standards. Products below export grade go to Indian market.',
    data: 'We never compromise buyer reputation.',
  },
  {
    icon: Handshake,
    title: 'Not Commission-Based',
    description: 'We succeed when you succeed. Long-term partnerships over quick transactions.',
    data: 'No pressure to ship marginal-quality produce.',
  },
  {
    icon: Factory,
    title: 'Packhouse Ownership',
    description: 'We own the packhouse. We\'re at the harvest. We grade, pack, and dispatch.',
    data: 'Not brokers passing along problems.',
  },
]

// Animation variants for stagger effect
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

export default function ProofPoints() {
  return (
    <section className="py-[120px] bg-white">
      <div className="max-w-[1200px] mx-auto px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-[#6B7A52] mb-3">
            PROOF OF SYSTEM
          </p>
          <h2 className="text-5xl font-bold text-[#2C2416]">
            Why Buyers Choose Us
          </h2>
        </div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {proofPoints.map((point, index) => {
            const Icon = point.icon

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-[#F9F7F4] p-10 rounded-2xl hover:-translate-y-[6px] hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <Icon
                  className="w-14 h-14 text-[#6B7A52] mb-5"
                  strokeWidth={2}
                  aria-hidden="true"
                />

                {/* Title */}
                <h3 className="text-2xl font-semibold text-[#2C2416] mb-4">
                  {point.title}
                </h3>

                {/* Description */}
                <p className="text-base text-[#5A4F3D] leading-relaxed mb-4">
                  {point.description}
                </p>

                {/* Data Example */}
                <p className="text-sm text-[#6B7A52] italic">
                  {point.data}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
