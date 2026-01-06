'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

type FAQItem = {
  question: string
  answer: string
}

type FAQCategory = {
  icon: string
  title: string
  questions: FAQItem[]
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null)

  const categories: FAQCategory[] = [
    {
      icon: '📋',
      title: 'Logistics & Operations',
      questions: [
        {
          question: 'What are your minimum order quantities?',
          answer:
            'Minimum orders vary by product: 2 containers for pomegranates and grapes, 1 container for bananas, 5 containers for red onions. These minimums ensure we can maintain proper quality control and cold chain integrity throughout the shipment process.',
        },
        {
          question: 'What are typical lead times from order to delivery?',
          answer:
            'Lead times range from 10-25 days depending on the product and destination. Bananas ship fastest (14 days), while coconuts require 25 days. We provide week-numbered harvest windows so you can plan precisely—for example, &ldquo;Week 8 pomegranates&rdquo; means harvest during Feb 19-25, container departure by March 5.',
        },
        {
          question: 'What payment terms do you offer?',
          answer:
            'We work on standard export payment terms including LC (Letter of Credit) and advance payment. Specific terms are discussed during our initial conversation based on order volume and partnership history.',
        },
        {
          question: 'Which ports do you ship from?',
          answer:
            'Primary export port is JNPT (Jawaharlal Nehru Port, Mumbai). We can arrange shipments from other Indian ports based on product location and buyer requirements.',
        },
        {
          question: 'Do you handle all export documentation?',
          answer:
            'Yes, we manage all export documentation including phytosanitary certificates, commercial invoices, packing lists, and certificates of origin. You receive complete documentation with each shipment.',
        },
      ],
    },
    {
      icon: '✓',
      title: 'Quality & Consistency',
      questions: [
        {
          question: 'How do you ensure quality consistency across shipments?',
          answer:
            'Three-layer system: (1) Scientific grading at farm gate with Brix testing and internal sampling, (2) Cold storage monitoring with digital temperature/humidity loggers, (3) Pre-loading inspection where we reject containers that don&rsquo;t meet standards. We reject approximately 30% of harvested produce before it reaches the container.',
        },
        {
          question: 'What happens if a shipment doesn&rsquo;t meet specifications?',
          answer:
            'If quality issues arise at destination, we investigate immediately. If our grading failed, we work with you to resolve it—whether that&rsquo;s credit, replacement, or other solutions. However, our rejection rate at source means quality claims are rare.',
        },
        {
          question: 'How do you handle seasonal quality variation?',
          answer:
            'We&rsquo;re transparent about it. Pomegranates in November differ from March pomegranates—both meet specs but have slight variations. We provide harvest window updates showing current Brix ranges and quality characteristics, so you know exactly what you&rsquo;re getting each week.',
        },
        {
          question: 'Can I inspect your facilities before ordering?',
          answer:
            'Yes. Serious buyers are welcome to visit our operations in Nashik and inspect farm partnerships, packing facilities, and quality control processes. We prefer facility visits happen during harvest season so you can see the full process in action.',
        },
      ],
    },
    {
      icon: '🤝',
      title: 'Relationship & Commitment',
      questions: [
        {
          question: 'Do you require long-term contracts?',
          answer:
            'We don&rsquo;t require multi-year contracts upfront. We start with sample shipments, then move to seasonal planning. Most partnerships naturally evolve into ongoing relationships because the model works—but there&rsquo;s no forced commitment.',
        },
        {
          question: 'Do you work with exclusive buyers in each market?',
          answer:
            'No exclusivity agreements. We typically work with 10-15 committed buyers globally. You might share a market with another partner, but our allocation system ensures consistent supply for everyone.',
        },
        {
          question: 'What if my volume needs change?',
          answer:
            'Seasonal planning includes flexibility ranges. If you typically order 10 containers/month, we plan for 8-12. Sudden drops below your baseline affect future allocations, but we understand business fluctuates. Communication is key.',
        },
        {
          question: 'Can I order spot containers outside seasonal planning?',
          answer:
            'Rarely. Our model is allocation-based, not spot market. If you&rsquo;re in our partnership network and we have surplus capacity, we may offer additional containers—but don&rsquo;t rely on spot availability.',
        },
      ],
    },
    {
      icon: '📊',
      title: 'Process & Transparency',
      questions: [
        {
          question: 'How often do you provide harvest updates?',
          answer:
            'Weekly during peak season, bi-weekly during slower periods. Updates include current Brix ranges, volume availability, and any quality observations. You always know what&rsquo;s coming before you commit to an order.',
        },
        {
          question: 'Can I track my shipment?',
          answer:
            'Yes. You receive container numbers, vessel schedules, and expected arrival dates. We can also provide temperature log data from the cold chain if requested.',
        },
        {
          question: 'Do you offer sample shipments before full orders?',
          answer:
            'Absolutely. We encourage sample shipments for new partnerships. Typically a single container at standard pricing so you can evaluate quality, communication, and documentation process before committing to larger volumes.',
        },
      ],
    },
    {
      icon: '💰',
      title: 'Pricing & Economics',
      questions: [
        {
          question: 'How is pricing determined?',
          answer:
            'Pricing is set seasonally based on harvest costs, market conditions, and quality tier. We don&rsquo;t negotiate per-container—rates are fixed for the season. This allows farmers to receive stable income and buyers to plan budgets without constant price changes.',
        },
        {
          question: 'Why are your prices higher than other Indian exporters?',
          answer:
            'Our pricing reflects our rejection rate and quality system. When we reject 30% of the harvest, that cost is distributed across the 70% we ship. You&rsquo;re paying for consistency—not just the produce, but the assurance that every container meets specifications.',
        },
        {
          question: 'Do prices vary by destination?',
          answer:
            'Base product pricing is consistent, but freight and logistics costs vary by destination. We provide all-in FOB pricing so you can accurately calculate your landed costs.',
        },
      ],
    },
    {
      icon: '⚡',
      title: 'Differentiation',
      questions: [
        {
          question: 'How are you different from commission-based exporters?',
          answer:
            'Commission exporters connect farmers to buyers and take a percentage—they&rsquo;re incentivized by volume. We buy directly from farmers at fixed rates and handle quality control ourselves. Our incentive is reputation and repeat partnerships, not transaction count.',
        },
      ],
    },
  ]

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`
    setOpenIndex((prev) => (prev === key ? null : key))
  }

  return (
    <div className="min-h-screen bg-base-black text-type-primary">
      <section className="border-b border-type-tertiary py-16 text-center">
        <div className="section-container space-y-4">
          <h1 className="text-display-xl">Frequently Asked Questions</h1>
          <p className="mx-auto max-w-3xl text-body-lg text-type-secondary">
            Everything you need to know about working with us, quality standards, and our partnership model.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="section-container">
          <div className="mx-auto max-w-4xl space-y-16">
            {categories.map((category, catIndex) => (
              <div key={category.title} className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{category.icon}</span>
                  <h2 className="text-display-sm">{category.title}</h2>
                </div>
                <div className="space-y-4">
                  {category.questions.map((item, qIndex) => {
                    const key = `${catIndex}-${qIndex}`
                    const isOpen = openIndex === key
                    return (
                      <div key={item.question} className="card-base overflow-hidden">
                        <button
                          type="button"
                          onClick={() => toggleQuestion(catIndex, qIndex)}
                          className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors hover:bg-olive-900/10"
                        >
                          <span className="text-body-lg font-semibold">{item.question}</span>
                          <ChevronDown
                            className={`h-5 w-5 flex-shrink-0 text-olive-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-6">
                            <p className="text-body-md text-type-secondary leading-relaxed">{item.answer}</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-base-off-black py-16">
        <div className="section-container">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-display-md">Still Have Questions?</h2>
            <p className="text-body-lg text-type-secondary">
              We&rsquo;re happy to answer any questions about our partnership model, quality standards, or sourcing process.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a href="/work-with-us" className="btn-primary px-8 py-4 text-lg">
                Start a Conversation
              </a>
              <a href="mailto:partnerships@farmtotabletrading.com" className="btn-secondary px-8 py-4 text-lg">
                Email Us Directly
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
