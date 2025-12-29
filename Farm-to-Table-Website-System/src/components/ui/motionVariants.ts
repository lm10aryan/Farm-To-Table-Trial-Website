import type { MotionProps } from 'framer-motion'

export const heroFade = (delay = 0): MotionProps => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: 'easeOut', delay },
})

export const fadeInUp = (delay = 0): MotionProps => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.35 },
  transition: { duration: 0.7, ease: 'easeOut', delay },
})
