'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {
  CheckCircle,
  AlertCircle,
  XCircle,
  Mail,
  MessageCircle,
  MapPin,
  Loader2,
} from 'lucide-react'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

// Self-assessment criteria
const assessmentCriteria = [
  {
    id: 'item1',
    label: 'I plan programs 3-6 months ahead',
    explanation:
      'Not spot buyers looking for immediate shipments. You understand seasonal cycles and want to lock in quality windows early.',
  },
  {
    id: 'item2',
    label: 'I value consistency over rock-bottom pricing',
    explanation:
      'You&apos;re willing to pay for quality systems, scientific grading, and honest communication. Cheapest price isn&apos;t your only metric.',
  },
  {
    id: 'item3',
    label: 'I recognize quality requires investment',
    explanation:
      'Premium produce requires investment in testing, filtering, and continuity. You recognize the value of a 10-year quality team and packhouse ownership.',
  },
  {
    id: 'item4',
    label: 'I want transparent communication',
    explanation:
      'You want monthly harvest updates, transparent timelines, and proactive problem-solving—not surprises or excuses.',
  },
  {
    id: 'item5',
    label: 'I&apos;m open to 2-3 trial shipments first',
    explanation:
      'You&apos;re open to trial shipments to validate quality and fit before committing to long-term programs.',
  },
]

// Partnership phases
const partnershipPhases = [
  {
    number: '01',
    title: 'Discovery',
    duration: 'Weeks 1-2',
    description:
      'We share harvest realities, you share quality needs. No sales pressure, no generic pitch—just honest assessment of fit.',
    whatYouGet: [
      'Sample harvest update',
      'Quality testing overview',
      'Seasonal availability',
      'Packhouse tour video',
    ],
    whatWeNeed: ['Volume forecast', 'Quality requirements', 'Timeline needs', 'Market segment'],
    commitment: 'No cost. No commitment.',
  },
  {
    number: '02',
    title: 'Spec Alignment',
    duration: 'Weeks 3-4',
    description:
      'We align on exact specs, packaging, and pricing structure. You see if our quality discipline matches your standards.',
    whatYouGet: [
      'Product specs',
      'Pricing structure',
      'Packaging options',
      'Sample harvest update',
    ],
    whatWeNeed: [
      'Confirmation of specs',
      'Packaging preferences',
      'Delivery timeline',
      'Certifications needed',
    ],
    commitment: 'No cost. No commitment.',
  },
  {
    number: '03',
    title: 'Trial Containers',
    duration: 'Months 1-3',
    description:
      '2-3 trial shipments to test operational fit. Real-time quality updates, post-shipment debrief, direct WhatsApp line.',
    whatYouGet: [
      '2-3 trial shipments',
      'Real-time quality updates',
      'Post-shipment debrief',
      'Direct WhatsApp line',
    ],
    whatWeNeed: [
      'Feedback on shipments',
      'Operational fit confirmation',
      'Willingness to iterate',
    ],
    commitment: 'No cost. No commitment.',
    pricingNote:
      'Trial containers priced at standard program rates (no markup). Volume discounts start at 10+ containers/month.',
  },
  {
    number: '04',
    title: 'Program Planning',
    duration: 'Month 4+',
    description:
      'Reserved allocation, quarterly reviews, multi-product flexibility. You become a preferred partner with dedicated support.',
    whatYouGet: [
      'Reserved allocation',
      'Quarterly reviews',
      'Multi-product flexibility',
      'Preferred partner status',
    ],
    whatWeNeed: ['3-6 month commitments', 'Seasonal forecasts', 'Open communication'],
    commitment: 'No cost. No commitment.',
    pricingNote:
      'Volume discounts available at 10+ containers/month. Pricing locked for season.',
  },
  {
    number: '05',
    title: 'Ongoing Partnership',
    duration: 'Long-term',
    description:
      'Monthly harvest intelligence, quality filtering, proactive problem-solving. We grow together—your success is our success.',
    whatYouGet: [
      'Monthly harvest intelligence',
      'Quality filtering',
      'Proactive problem-solving',
      'Multi-year mindset',
    ],
    whatWeNeed: ['Honest feedback', 'Reasonable flexibility', 'Long-term thinking'],
    commitment: 'No contracts. No lock-ins. Built on mutual trust and results.',
  },
]

// Social proof case studies (same as homepage)
const caseStudies = [
  {
    region: 'Middle East',
    businessType: 'Premium Retailer',
    duration: '3-year partnership',
    metrics: [
      '35 containers/month',
      'Pomegranates + Grapes',
      '14 consecutive months with zero quality disputes',
    ],
  },
  {
    region: 'Europe',
    businessType: 'Restaurant Group',
    duration: '18-month partnership',
    metrics: [
      'Seasonal menus',
      'Zero rejected shipments',
      'Direct farm-to-chef harvest updates',
    ],
  },
  {
    region: 'Southeast Asia',
    businessType: 'Wholesaler',
    duration: '2-year partnership',
    metrics: [
      '20 containers/month',
      'Monthly Brix reports',
      'Expanded from 2 to 4 products',
    ],
  },
]

// Type for checked items
type CheckedItemsType = {
  item1: boolean
  item2: boolean
  item3: boolean
  item4: boolean
  item5: boolean
}

export default function PartnershipPage() {
  const [checkedItems, setCheckedItems] = useState<CheckedItemsType>({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false,
  })
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showStickyCTA, setShowStickyCTA] = useState(false)
  const journeyRef = useRef(null)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const buyingProcess = watch('buyingProcess')
  const showUrgentWarning = buyingProcess === 'immediate'

  // Calculate fit score
  const score = Object.values(checkedItems).filter(Boolean).length
  const fitLevel =
    score === 5 ? 'perfect' : score >= 3 ? 'likely' : score > 0 ? 'poor' : 'none'

  // Sticky CTA logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowStickyCTA(!entry.isIntersecting && entry.boundingClientRect.top < 0)
      },
      { threshold: 0, rootMargin: '-100px' }
    )

    const currentRef = journeyRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  const handleCheckboxChange = (id: keyof CheckedItemsType) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const onSubmit = async (data: any) => {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log('Form submitted:', data)
    setShowSuccess(true)
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* SECTION 1: HERO - COMPRESSED */}
      <section className="py-[60px] bg-white">
        <div className="max-w-[850px] mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8C7D68] mb-4"
          >
            HOW WE PARTNER
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[46px] leading-[1.15] font-bold text-[#2C2416] mb-6"
          >
            Built for Strategic Partnerships, Not Transactional Volume
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-[#5A4F3D] leading-relaxed"
          >
            We work with 10-15 premium retailers and wholesalers who plan programs 3-6 months ahead
            and understand that quality has a cost.
          </motion.p>
        </div>
      </section>

      {/* SECTION 2: SELF-ASSESSMENT - NEW INTERACTIVE */}
      <section className="py-16 bg-[#F9F7F4]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8C7D68] mb-4">
              QUALIFYING QUESTIONS
            </p>
            <h2 className="text-[40px] font-bold text-[#2C2416] mb-4">Are We a Good Fit?</h2>
            <p className="text-lg text-[#5A4F3D] max-w-3xl mx-auto">
              Check the statements that describe your business. We&apos;ll give you instant feedback on
              partnership fit.
            </p>
          </motion.div>

          <div className="max-w-[700px] mx-auto">
            {/* Interactive Checkboxes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#F9F7F4] border border-[#E8E5E0] rounded-2xl p-8 mb-6"
            >
              <div className="space-y-6">
                {assessmentCriteria.map((criterion) => (
                  <div key={criterion.id} className="flex items-start gap-4">
                    <button
                      onClick={() => handleCheckboxChange(criterion.id as keyof CheckedItemsType)}
                      className={`flex-shrink-0 w-6 h-6 rounded border-2 transition-all duration-200 ${
                        checkedItems[criterion.id as keyof CheckedItemsType]
                          ? 'bg-[#6B7A52] border-[#6B7A52] scale-100'
                          : 'bg-white border-[#E8E5E0] hover:border-[#6B7A52]'
                      }`}
                      aria-label={criterion.label}
                      aria-pressed={checkedItems[criterion.id as keyof CheckedItemsType]}
                    >
                      {checkedItems[criterion.id as keyof CheckedItemsType] && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <CheckCircle className="w-5 h-5 text-white" strokeWidth={3} />
                        </motion.div>
                      )}
                    </button>
                    <div className="flex-1">
                      <p className="font-semibold text-[#2C2416] mb-1">{criterion.label}</p>
                      <p className="text-sm text-[#5A4F3D]">{criterion.explanation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Instant Feedback Panel */}
            {fitLevel !== 'none' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={`rounded-2xl p-6 border-2 ${
                  fitLevel === 'perfect'
                    ? 'bg-[#4A7C59] bg-opacity-10 border-[#4A7C59]'
                    : fitLevel === 'likely'
                    ? 'bg-[#D4AF37] bg-opacity-10 border-[#D4AF37]'
                    : 'bg-[#C84D3C] bg-opacity-10 border-[#C84D3C]'
                }`}
                role="status"
                aria-live="polite"
              >
                <div className="flex items-start gap-4">
                  {fitLevel === 'perfect' ? (
                    <CheckCircle className="w-8 h-8 text-[#4A7C59] flex-shrink-0" />
                  ) : fitLevel === 'likely' ? (
                    <AlertCircle className="w-8 h-8 text-[#D4AF37] flex-shrink-0" />
                  ) : (
                    <XCircle className="w-8 h-8 text-[#C84D3C] flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <h3
                      className={`text-xl font-bold mb-2 ${
                        fitLevel === 'perfect'
                          ? 'text-[#4A7C59]'
                          : fitLevel === 'likely'
                          ? 'text-[#D4AF37]'
                          : 'text-[#C84D3C]'
                      }`}
                    >
                      {fitLevel === 'perfect'
                        ? 'Perfect Fit'
                        : fitLevel === 'likely'
                        ? 'Likely a Fit—Let&apos;s Discuss'
                        : 'Might Not Be the Right Fit'}
                    </h3>
                    <p className="text-[#2C2416] mb-4">
                      {fitLevel === 'perfect'
                        ? 'Let&apos;s start the conversation below'
                        : fitLevel === 'likely'
                        ? 'Reach out below and we&apos;ll discuss how we can work together'
                        : 'Contact anyway if you think there&apos;s been a misunderstanding'}
                    </p>
                    <Link
                      href="#inquiry-form"
                      className="inline-block px-6 py-2 bg-[#6B7A52] text-white font-semibold rounded-lg hover:bg-[#5A6945] transition"
                    >
                      {fitLevel === 'perfect' || fitLevel === 'likely'
                        ? 'Start Conversation'
                        : 'Contact Anyway'}
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 3: PARTNERSHIP JOURNEY - CONSOLIDATED TIMELINE */}
      <section ref={journeyRef} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8C7D68] mb-4">
              THE PROCESS
            </p>
            <h2 className="text-[40px] font-bold text-[#2C2416] mb-4">Partnership Journey</h2>
            <p className="text-lg text-[#5A4F3D] max-w-3xl mx-auto">
              From first conversation to long-term program—here&apos;s what to expect at each phase,
              and what you&apos;ll get from us.
            </p>
          </motion.div>

          {/* Vertical Timeline */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-5xl mx-auto relative"
          >
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#E8E5E0] hidden lg:block"></div>

            {partnershipPhases.map((phase, index) => (
              <motion.div
                key={phase.number}
                variants={fadeInUp}
                className="relative mb-16 last:mb-0"
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-12">
                  {/* Left: Phase Info */}
                  <div className="relative">
                    {/* Numbered Circle */}
                    <div className="flex items-start gap-4 mb-6 lg:mb-0">
                      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#6B7A52] text-white flex items-center justify-center text-xl font-bold z-10 relative">
                        {phase.number}
                      </div>
                      <div className="flex-1 lg:hidden">
                        <h3 className="text-2xl font-bold text-[#2C2416] mb-1">{phase.title}</h3>
                        <p className="text-sm font-semibold text-[#8C7D68] mb-3">
                          {phase.duration}
                        </p>
                        <p className="text-[#5A4F3D] leading-relaxed">{phase.description}</p>
                      </div>
                    </div>

                    {/* Desktop: Phase Info */}
                    <div className="hidden lg:block lg:text-right lg:pr-12">
                      <h3 className="text-2xl font-bold text-[#2C2416] mb-1">{phase.title}</h3>
                      <p className="text-sm font-semibold text-[#8C7D68] mb-3">{phase.duration}</p>
                      <p className="text-[#5A4F3D] leading-relaxed">{phase.description}</p>
                    </div>
                  </div>

                  {/* Right: Deliverables */}
                  <div className="lg:pl-12">
                    <div className="bg-[#F9F7F4] border border-[#E8E5E0] rounded-xl p-6 mb-4">
                      <h4 className="text-sm font-bold uppercase tracking-wide text-[#2C2416] mb-3">
                        What You Get
                      </h4>
                      <ul className="space-y-2">
                        {phase.whatYouGet.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-[#5A4F3D]">
                            <CheckCircle className="w-4 h-4 text-[#6B7A52] flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-[#F9F7F4] border border-[#E8E5E0] rounded-xl p-6 mb-4">
                      <h4 className="text-sm font-bold uppercase tracking-wide text-[#2C2416] mb-3">
                        What We Need
                      </h4>
                      <ul className="space-y-2">
                        {phase.whatWeNeed.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-[#5A4F3D]">
                            <span className="text-[#6B7A52] font-bold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {phase.pricingNote && (
                      <div className="bg-[#F9F7F4] border-l-4 border-[#6B7A52] rounded-lg p-4 mb-4">
                        <p className="text-sm font-semibold text-[#2C2416]">{phase.pricingNote}</p>
                      </div>
                    )}

                    <p className="text-xs font-semibold text-[#8C7D68] uppercase tracking-wide">
                      Commitment: <span className="text-[#2C2416]">{phase.commitment}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-sm text-[#5A4F3D] max-w-2xl mx-auto mt-12 italic"
          >
            We&apos;re not perfect. Agriculture is unpredictable. But we&apos;re honest about challenges
            and disciplined about solutions.
          </motion.p>
        </div>
      </section>

      {/* SECTION 4: SOCIAL PROOF - CASE STUDIES */}
      <section className="py-16 bg-[#F9F7F4]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8C7D68] mb-4">
              CURRENT PARTNERSHIPS
            </p>
            <h2 className="text-[40px] font-bold text-[#2C2416] mb-4">
              What Partnerships Look Like
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white border border-[#E8E5E0] rounded-2xl p-8"
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wide text-[#8C7D68]">
                    {study.region}
                  </span>
                  <span className="text-xs text-[#5A4F3D]">•</span>
                  <span className="text-xs text-[#5A4F3D]">{study.businessType}</span>
                </div>
                <h3 className="text-lg font-bold text-[#2C2416] mb-4">{study.duration}</h3>
                <ul className="space-y-2">
                  {study.metrics.map((metric, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-[#5A4F3D]">
                      <CheckCircle className="w-4 h-4 text-[#6B7A52] flex-shrink-0 mt-0.5" />
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center text-xs text-[#5A4F3D] max-w-3xl mx-auto"
          >
            All partnerships are confidential. Metrics represent typical program buyers--results
            vary by season and product.
          </motion.p>
        </div>
      </section>

      {/* SECTION 5: PARTNERSHIP AVAILABILITY - NEW */}
      <section className="py-12 bg-white">
        <div className="max-w-[700px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="bg-white border-2 border-[#6B7A52] rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-[#2C2416] text-center mb-8">
              Partnership Status
            </h3>
            <div className="grid grid-cols-2 gap-8 mb-6">
              <div className="text-center">
                <p className="text-xs font-bold uppercase tracking-wide text-[#8C7D68] mb-2">
                  Current Partnerships
                </p>
                <p className="text-[32px] font-bold text-[#6B7A52] mb-1">12 active</p>
                <p className="text-sm text-[#5A4F3D]">Premium retailers & wholesalers</p>
              </div>
              <div className="text-center">
                <p className="text-xs font-bold uppercase tracking-wide text-[#8C7D68] mb-2">
                  Target
                </p>
                <p className="text-[32px] font-bold text-[#6B7A52] mb-1">15 by 2027</p>
                <p className="text-sm text-[#5A4F3D]">Deep partnerships, not 100 transactions</p>
              </div>
            </div>
            <p className="text-xs text-center text-[#5A4F3D] italic">
              Next partnership review: March 2026. We&apos;re selective about who we work with—quality
              of partnerships &gt; quantity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: INQUIRY FORM - SHORTENED */}
      <section id="inquiry-form" className="py-16 bg-white">
        <div className="max-w-[650px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8C7D68] mb-4">
              GET IN TOUCH
            </p>
            <h2 className="text-[40px] font-bold text-[#2C2416] mb-4">Start the Conversation</h2>
            <p className="text-lg text-[#5A4F3D]">
              Tell us about your needs and we&apos;ll get back to you within 24 hours.
            </p>
          </motion.div>

          {!showSuccess ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#F9F7F4] rounded-2xl p-8"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Field 1: Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-[#2C2416] mb-2"
                  >
                    Your Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 border border-[#E8E5E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B7A52]"
                    aria-required="true"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-sm text-[#C84D3C] mt-1">
                      {errors.email.message as string}
                    </p>
                  )}
                </div>

                {/* Field 2: Company Name */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold text-[#2C2416] mb-2"
                  >
                    Company Name *
                  </label>
                  <input
                    id="company"
                    type="text"
                    {...register('company', {
                      required: 'Company name is required',
                      minLength: { value: 2, message: 'Company name must be at least 2 characters' },
                    })}
                    placeholder="Premium Retail Ltd."
                    className="w-full px-4 py-3 border border-[#E8E5E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B7A52]"
                    aria-required="true"
                    aria-describedby={errors.company ? 'company-error' : undefined}
                  />
                  {errors.company && (
                    <p id="company-error" className="text-sm text-[#C84D3C] mt-1">
                      {errors.company.message as string}
                    </p>
                  )}
                </div>

                {/* Field 3: Buying Process */}
                <div>
                  <label
                    htmlFor="buyingProcess"
                    className="block text-sm font-semibold text-[#2C2416] mb-2"
                  >
                    Where are you in the buying process? *
                  </label>
                  <select
                    id="buyingProcess"
                    {...register('buyingProcess', { required: 'Please select an option' })}
                    className="w-full px-4 py-3 border border-[#E8E5E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B7A52]"
                    aria-required="true"
                    aria-describedby={errors.buyingProcess ? 'buying-process-error' : undefined}
                  >
                    <option value="">Select an option</option>
                    <option value="exploring">Just exploring options</option>
                    <option value="comparing">Comparing suppliers actively</option>
                    <option value="ready">Ready to test quality with trial containers</option>
                    <option value="problems">Currently sourcing but having problems</option>
                    <option value="immediate">Need immediate shipment (this week)</option>
                  </select>
                  {errors.buyingProcess && (
                    <p id="buying-process-error" className="text-sm text-[#C84D3C] mt-1">
                      {errors.buyingProcess.message as string}
                    </p>
                  )}

                  {/* Conditional Warning */}
                  {showUrgentWarning && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 bg-[#D4AF37] bg-opacity-10 border-l-4 border-[#D4AF37] rounded-lg p-4 flex items-start gap-3"
                    >
                      <AlertCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-[#2C2416]">
                        We&apos;re optimized for 1-3+ month planning cycles. For urgent needs, we can
                        try to help but that&apos;s not our strength. If your timeline is flexible,
                        select a different option above.
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* Field 4: Biggest Concern */}
                <div>
                  <label
                    htmlFor="concern"
                    className="block text-sm font-semibold text-[#2C2416] mb-2"
                  >
                    What&apos;s your biggest concern with Indian exporters? *
                  </label>
                  <textarea
                    id="concern"
                    {...register('concern', {
                      required: 'This field is required',
                      minLength: { value: 10, message: 'Please provide at least 10 characters' },
                    })}
                    placeholder="E.g., inconsistent quality, poor communication, hidden fees, lack of transparency..."
                    rows={5}
                    className="w-full px-4 py-3 border border-[#E8E5E0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B7A52] resize-y"
                    aria-required="true"
                    aria-describedby={errors.concern ? 'concern-error' : undefined}
                  />
                  {errors.concern && (
                    <p id="concern-error" className="text-sm text-[#C84D3C] mt-1">
                      {errors.concern.message as string}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#6B7A52] text-white py-4 rounded-lg font-semibold hover:bg-[#5A6945] transition-all hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Inquiry'
                  )}
                </button>
              </form>

              {/* Alternative Contact Methods */}
              <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[#E8E5E0]"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-[#F9F7F4] text-[#8C7D68] font-semibold">OR</span>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-[#5A4F3D]">
                    <Mail className="w-5 h-5 text-[#6B7A52]" />
                    <a
                      href="mailto:hello@farmtotable.example"
                      className="hover:text-[#6B7A52] transition"
                    >
                      hello@farmtotable.example
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#5A4F3D]">
                    <MessageCircle className="w-5 h-5 text-[#6B7A52]" />
                    <a
                      href="https://wa.me/910000000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#6B7A52] transition"
                    >
                      +91 0000000000 (WhatsApp)
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#5A4F3D]">
                    <MapPin className="w-5 h-5 text-[#6B7A52]" />
                    <span>Nashik, Maharashtra, India</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-[#5A4F3D]">
                    <span className="w-5 h-5 flex items-center justify-center text-[#6B7A52]">
                      🌍
                    </span>
                    <span>Regional Focus: Middle East, Europe & Southeast Asia</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-[#4A7C59] bg-opacity-10 border-2 border-[#4A7C59] rounded-2xl p-12 text-center"
            >
              <CheckCircle className="w-16 h-16 text-[#4A7C59] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#2C2416] mb-2">Inquiry Sent!</h3>
              <p className="text-lg text-[#5A4F3D] mb-6">
                We&apos;ll get back to you within 24 hours. Check your email for confirmation.
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="text-sm font-semibold text-[#6B7A52] hover:text-[#5A6945] transition"
              >
                Send another inquiry
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* STICKY CTA BAR */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-[#6B7A52] shadow-lg py-4 px-6 z-[1000]"
        animate={{ y: showStickyCTA ? 0 : 100 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p className="text-sm font-semibold text-[#2C2416]">
            Ready to start partnership process?
          </p>
          <Link
            href="#inquiry-form"
            className="px-6 py-2 bg-[#6B7A52] text-white font-semibold rounded-lg hover:bg-[#5A6945] transition"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
