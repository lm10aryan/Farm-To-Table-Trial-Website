'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Map, Microscope, Users } from 'lucide-react'

export function SystemFinal() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const cards = [
    {
      icon: Map,
      title: "Knowledge-Driven Sourcing",
      points: [
        "Partner with growers across multiple regions",
        "Years of relationship capital, not transactional spot buying",
        "Track seasonal patterns, quality shifts week-by-week",
        "Know which farms produce what quality, when"
      ]
    },
    {
      icon: Microscope,
      title: "Scientific Quality Control",
      points: [
        "Brix testing, internal sampling, pressure testing",
        "Skilled team—same people for years, not seasonal contractors",
        "30% rejection rate at source, not at your port",
        "Three-layer inspection before container loading"
      ]
    },
    {
      icon: Users,
      title: "Everyone Wins",
      points: [
        "Farmers: Stable pricing above market rates",
        "Workers: Year-round employment, fair wages",
        "Team: Invested in quality, not volume quotas",
        "Buyers: Consistent specs, transparent process"
      ]
    }
  ]

  return (
    <section ref={sectionRef} className="py-section bg-base-black">
      <div className="section-container">
        <div className="max-w-7xl mx-auto space-y-container-gap">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center space-y-4"
          >
            <h2 className="font-display text-display-md text-type-primary">
              Our System: Built to Handle Complexity
            </h2>
            <p className="text-body-lg text-type-secondary max-w-3xl mx-auto">
              We&apos;ve spent years building deep expertise in India&apos;s agricultural landscape. Same team. Scientific protocols. Direct farm relationships.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {cards.map((card, index) => {
              const Icon = card.icon

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="relative group"
                >
                  <motion.div
                    animate={{
                      y: hoveredCard === index ? -8 : 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25
                    }}
                    className="h-full rounded-2xl p-12 transition-all duration-400"
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      backdropFilter: 'blur(20px)',
                      border: hoveredCard === index
                        ? '1px solid rgba(139, 148, 95, 0.3)'
                        : '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: hoveredCard === index
                        ? '0 32px 80px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(139, 148, 95, 0.2) inset'
                        : '0 20px 60px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(139, 148, 95, 0.1) inset'
                    }}
                  >
                    {/* Icon */}
                    <div className="mb-6">
                      <div
                        className="inline-flex p-4 rounded-xl"
                        style={{
                          background: 'rgba(139, 148, 95, 0.1)',
                          border: '1px solid rgba(139, 148, 95, 0.2)'
                        }}
                      >
                        <Icon className="w-8 h-8 text-olive-400" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-display-sm text-type-primary mb-6">
                      {card.title}
                    </h3>

                    {/* Bullets */}
                    <ul className="space-y-4">
                      {card.points.map((point, pointIndex) => (
                        <motion.li
                          key={pointIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.15 + pointIndex * 0.1 + 0.3,
                            ease: [0.22, 1, 0.36, 1]
                          }}
                          className="flex items-start gap-3"
                        >
                          <span className="text-olive-400 mt-1 flex-shrink-0">•</span>
                          <span className="text-body-md text-type-secondary">
                            {point}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Card number */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.15 + 0.5,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center font-mono font-bold text-olive-400"
                    style={{
                      background: 'rgba(45, 49, 32, 0.8)',
                      border: '2px solid rgba(139, 148, 95, 0.4)',
                      backdropFilter: 'blur(10px)'
                    }}
                  >
                    {index + 1}
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-body-lg text-type-secondary text-center max-w-3xl mx-auto pt-stack-lg"
          >
            You have fixed schedules and enough stress already. We handle the chaos so you can focus on your business.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
