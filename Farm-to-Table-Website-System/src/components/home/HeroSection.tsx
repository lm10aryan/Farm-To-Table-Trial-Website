'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'

export function HeroSection() {
  return (
    <Section
      variant="default"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[rgba(250,250,248,0.95)] to-[rgba(250,250,248,0.85)]"
    >
      {/* Background image - subtle packhouse photo with overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <Container className="relative z-10">
        <div className="max-w-[900px] mx-auto text-center">

          {/* Headline */}
          <motion.h1
            className="font-bold mb-6"
            style={{
              fontSize: 'clamp(3rem, 5vw, 4.5rem)',
              lineHeight: '1.2',
              color: 'var(--color-dark-text)',
              letterSpacing: '-0.02em',
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Premium Fresh Produce Export
            <br />
            <span style={{ color: 'var(--color-olive)' }}>
              Where Everyone Wins
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="mb-8"
            style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
              lineHeight: '1.8',
              color: 'var(--color-medium-gray)',
              maxWidth: '720px',
              margin: '0 auto 2rem',
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Most export models force a choice: squeeze farmers for lower prices,
            cut corners on quality, or compromise your margins. We've built a
            premium supply chain where farmers thrive, quality stays consistent,
            and buyers get what they actually paid for.
          </motion.p>

          {/* Supporting statement */}
          <motion.p
            className="mb-10"
            style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
              lineHeight: '1.6',
              color: 'var(--color-dark-text)',
              fontWeight: '500',
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Scientific grading. Transparent timelines. A 10-year quality team.
            Two brands built for different segments. This is how we engineer
            consistency in an unpredictable industry.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              variant="primary"
              size="lg"
              className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-8 py-4 text-lg font-semibold rounded-lg"
            >
              Request Partnership Discussion →
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-olive)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </motion.div>
          </motion.div>

        </div>
      </Container>
    </Section>
  )
}
