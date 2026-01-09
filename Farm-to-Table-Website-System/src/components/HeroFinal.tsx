'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

import { PomegranateIcon } from '@/components/icons/PomegranateIcon'
import { MelonIcon } from '@/components/icons/MelonIcon'

export function HeroFinal() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const fruits = [
    { icon: <PomegranateIcon className="h-20 w-20" />, name: 'Pomegranate', delay: 0 },
    { icon: '🍌', name: 'Banana', delay: 0.15 },
    { icon: '🍇', name: 'Grapes', delay: 0.3 },
    { icon: '🧅', name: 'Onion', delay: 0.45 },
    { icon: '🥥', name: 'Coconut', delay: 0.6 },
    { icon: <MelonIcon className="h-20 w-20 text-black" />, name: 'Melon', delay: 0.75 },
  ]

  const dataPoints = [
    { label: '30% Rejection', value: 'At Source' },
    { label: '6 Products', value: 'Premium Quality' },
    { label: '10-15 Partners', value: 'Global' },
  ]

  return (
    <section className="relative min-h-screen flex items-center py-section bg-base-black overflow-hidden">

      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(139, 148, 95, 0.15) 0%, transparent 60%)'
        }}
      />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

          {/* Left: Content */}
          <div className="space-y-stack-lg">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="font-display text-display-xl text-type-primary mb-6">
                Premium Indian Produce.
                <br />
                <span
                  className="inline-block mt-2"
                  style={{
                    background: 'linear-gradient(135deg, #8B945F 0%, #a8b574 50%, #c5d18f 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Engineered for Consistency.
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-body-xl text-type-secondary max-w-[65ch]"
            >
              We handle the chaos of Indian sourcing so you get reliable quality, season after season.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-body-lg text-type-tertiary max-w-[65ch]"
            >
              Two brands. Six products. Zero compromise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href="/products"
                className="px-8 py-4 text-lg font-medium text-white rounded-lg transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #6b7447 0%, #8B945F 100%)',
                  boxShadow: '0 4px 16px rgba(139, 148, 95, 0.3)'
                }}
              >
                View Products
              </a>

              <a
                href="#"
                className="px-8 py-4 text-lg font-medium text-type-primary rounded-lg border border-olive-600/30 hover:border-olive-600 hover:bg-olive-900/10 transition-all duration-300"
              >
                Download Product Specs
              </a>
            </motion.div>

            {/* Data points */}
            <div className="grid grid-cols-3 gap-6 pt-stack-md">
              {dataPoints.map((point, index) => (
                <motion.div
                  key={point.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="p-4 rounded-lg border border-olive-600/20 bg-olive-900/5"
                >
                  <div className="font-mono text-data-sm text-olive-400 mb-1">
                    {point.label}
                  </div>
                  <div className="text-body-sm text-type-secondary">
                    {point.value}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Fruit drop animation */}
          <div className="relative hidden lg:flex items-center justify-center h-[600px]">
            <div className="relative w-full max-w-lg">

              {/* Fruits dropping */}
              <div className="grid grid-cols-3 gap-8">
                {fruits.map((fruit) => (
                  <motion.div
                    key={fruit.name}
                    initial={{ y: -200, opacity: 0, scale: 0.5, rotate: -180 }}
                    animate={isLoaded ? {
                      y: 0,
                      opacity: 1,
                      scale: 1,
                      rotate: 0
                    } : {}}
                    transition={{
                      duration: 0.8,
                      delay: fruit.delay,
                      ease: [0.34, 1.56, 0.64, 1], // Bouncy easing
                      opacity: { duration: 0.3, delay: fruit.delay }
                    }}
                    className="flex flex-col items-center gap-2"
                  >
                    <motion.div
                      animate={isLoaded ? {
                        y: [0, -10, 0],
                      } : {}}
                      transition={{
                        duration: 2,
                        delay: fruit.delay + 1,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="flex h-28 w-28 items-center justify-center text-7xl"
                      style={{
                        filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))'
                      }}
                    >
                      {typeof fruit.icon === 'string' ? <span>{fruit.icon}</span> : fruit.icon}
                    </motion.div>
                    <div className="text-body-sm text-type-secondary">{fruit.name}</div>
                  </motion.div>
                ))}
              </div>

              {/* Subtle glow beneath */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 rounded-full blur-3xl"
                style={{
                  background: 'radial-gradient(ellipse, rgba(139, 148, 95, 0.4) 0%, transparent 70%)'
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
