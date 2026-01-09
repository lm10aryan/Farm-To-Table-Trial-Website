'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export function RejectionSectionRevamped() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const [counter, setCounter] = useState(0)
  const [showVisualization, setShowVisualization] = useState(false)
  const [rejectedItems, setRejectedItems] = useState<number[]>([])

  // Counter animation
  useEffect(() => {
    if (isInView && counter < 30) {
      const timer = setTimeout(() => {
        setCounter(prev => Math.min(prev + 1, 30))
      }, 50) // 1.5 seconds total (30 steps × 50ms)
      return () => clearTimeout(timer)
    }

    if (counter === 30 && !showVisualization) {
      setTimeout(() => setShowVisualization(true), 300)
    }
  }, [isInView, counter, showVisualization])

  // Rejection animation
  useEffect(() => {
    if (showVisualization && rejectedItems.length < 3) {
      const timer = setTimeout(() => {
        const availableIndices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(i => !rejectedItems.includes(i))
        const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)]
        setRejectedItems(prev => [...prev, randomIndex])
      }, 600) // 0.6s between each rejection
      return () => clearTimeout(timer)
    }
  }, [showVisualization, rejectedItems])

  const items = Array.from({ length: 10 }, (_, i) => i)
  const processSteps = [
    {
      number: 1,
      title: "Visual inspection + internal sampling at farm gate",
      icon: "👁️"
    },
    {
      number: 2,
      title: "Brix testing and firmness validation at packing house",
      icon: "🔬"
    },
    {
      number: 3,
      title: "Final quality check before container loading",
      icon: "📦"
    }
  ]

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0A0A0B 0%, #1a1a1a 100%)'
      }}
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(139, 148, 95, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 148, 95, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="section-container relative z-10">

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-display-lg text-type-primary mb-4">
            We Reject 30% at the Gate
          </h2>
          <p className="text-body-lg text-type-secondary max-w-3xl mx-auto">
            On average, we reject more than 30% of the best-quality produce during grading—so you don't reject it at your port.
          </p>
        </motion.div>

        {/* Three-column layout */}
        <div className="grid lg:grid-cols-3 gap-12 items-start max-w-7xl mx-auto mb-16">

          {/* Column 1: Counter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center lg:items-start"
          >
            <div className="relative">
              <motion.div
                animate={counter > 0 ? { scale: [1, 1.05, 1] } : {}}
                transition={{ duration: 0.3 }}
                className="text-[8rem] lg:text-[12rem] font-bold leading-none"
                style={{
                  background: 'linear-gradient(135deg, #8B945F 0%, #a8b574 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 40px rgba(139, 148, 95, 0.3)'
                }}
              >
                {counter}%
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={counter === 30 ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
                className="font-mono text-data-sm tracking-widest text-type-tertiary mt-2"
              >
                REJECTION RATE
              </motion.div>
            </div>
          </motion.div>

          {/* Column 2: Visualization */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={showVisualization ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <div className="grid grid-cols-5 gap-4">
              {items.map((item, index) => {
                const isRejected = rejectedItems.includes(item)
                const isApproved = showVisualization && rejectedItems.length === 3 && !isRejected

                return (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="relative w-16 h-16 lg:w-20 lg:h-20"
                  >
                    {/* Circle */}
                    <motion.div
                      animate={{
                        filter: isRejected ? 'grayscale(100%)' : 'grayscale(0%)',
                        opacity: isRejected ? 0.4 : 1,
                        scale: isRejected ? 0.9 : 1
                      }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full rounded-full border-4 flex items-center justify-center"
                      style={{
                        borderColor: isRejected ? '#ef4444' : isApproved ? '#22c55e' : '#8B945F',
                        backgroundColor: isRejected ? '#1a1a1a' : 'rgba(139, 148, 95, 0.2)'
                      }}
                    >
                      {/* Inner circle/dot */}
                      <div
                        className="w-6 h-6 lg:w-8 lg:h-8 rounded-full"
                        style={{
                          backgroundColor: isRejected ? '#ef4444' : isApproved ? '#22c55e' : '#8B945F'
                        }}
                      />
                    </motion.div>

                    {/* Rejection X */}
                    {isRejected && (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <svg width="40" height="40" viewBox="0 0 40 40" className="text-red-500">
                          <path
                            d="M10 10 L30 30 M30 10 L10 30"
                            stroke="currentColor"
                            strokeWidth="4"
                            strokeLinecap="round"
                          />
                        </svg>
                      </motion.div>
                    )}

                    {/* Approval checkmark */}
                    {isApproved && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.1 }}
                        className="absolute -top-2 -right-2"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" className="text-green-500">
                          <path
                            d="M5 12 L10 17 L19 7"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                          />
                        </svg>
                      </motion.div>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Column 3: Process steps */}
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 50 }}
                animate={rejectedItems.length === 3 ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="flex items-start gap-4 p-4 rounded-lg"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(139, 148, 95, 0.2)'
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'rgba(139, 148, 95, 0.2)',
                    border: '2px solid rgba(139, 148, 95, 0.4)'
                  }}
                >
                  <span className="font-mono text-data-md text-olive-400 font-bold">
                    {step.number}
                  </span>
                </div>
                <p className="text-body-sm text-type-secondary pt-2">
                  {step.title}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={rejectedItems.length === 3 ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center"
        >
          <p className="text-body-lg text-type-primary max-w-3xl mx-auto">
            This is why we cost more than spot-market exporters. And why buyers come back season after season.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
