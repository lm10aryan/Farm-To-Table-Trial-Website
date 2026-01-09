'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function ChaosFinal() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const problems = [
    "Thousands of small, fragmented farms across regions",
    "Quality varies by location, by week, even by farm",
    "Tropical climate creates unpredictable seasonal swings",
    "Internal defects invisible to the eye until destination",
    "Most exporters lack scientific grading equipment",
    "Commission-based models incentivize volume, not quality"
  ]

  // 12 circles representing produce quality
  const qualityIndicators = [
    'bad', 'bad', 'questionable', 'bad', 'questionable',
    'good', 'questionable', 'bad', 'questionable', 'good',
    'questionable', 'good'
  ]

  const getCircleColor = (status: string) => {
    switch(status) {
      case 'bad': return '#ef4444'
      case 'questionable': return '#f59e0b'
      case 'good': return '#22c55e'
      default: return '#666'
    }
  }

  return (
    <section ref={sectionRef} className="py-section bg-base-off-black">
      <div className="section-container">
        <div className="max-w-7xl mx-auto space-y-container-gap">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center space-y-4"
          >
            <h2 className="font-display text-display-md text-type-primary">
              Why Indian Exports Are Difficult
            </h2>
            <p className="text-body-lg text-type-secondary max-w-[65ch] mx-auto">
              India grows world-class produce. Getting it consistently to international markets is chaos.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left: Quality visualization */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-8"
            >
              <div className="text-center">
                <h3 className="font-display text-display-sm text-type-primary mb-2">
                  Typical Shipment Quality
                </h3>
                <p className="text-body-md text-type-tertiary">
                  Can you tell which ones meet your specs?
                </p>
              </div>

              <div className="grid grid-cols-4 gap-6">
                {qualityIndicators.map((status, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + index * 0.05,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="w-16 h-16 rounded-full border-4 flex items-center justify-center"
                    style={{
                      borderColor: getCircleColor(status),
                      backgroundColor: `${getCircleColor(status)}20`,
                      boxShadow: `0 4px 12px ${getCircleColor(status)}40`
                    }}
                  >
                    <div
                      className="w-6 h-6 rounded-full"
                      style={{ backgroundColor: getCircleColor(status) }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Problem list */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl p-12"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)'
              }}
            >
              <h3 className="font-display text-display-sm text-type-primary mb-8">
                The Reality of Indian Sourcing:
              </h3>

              <ul className="space-y-4 mb-8">
                {problems.map((problem, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: 0.5 + index * 0.08,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="flex items-start gap-3"
                  >
                    <span className="text-red-400 mt-1 flex-shrink-0">•</span>
                    <span className="text-body-md text-type-secondary">{problem}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="pt-8 border-t border-type-tertiary"
              >
                <p className="text-body-lg text-type-primary font-medium">
                  Result: Surprise rejections at port. Inconsistent specs. Communication breakdowns. Lost trust. Buyers doing damage control instead of running their business.
                </p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
