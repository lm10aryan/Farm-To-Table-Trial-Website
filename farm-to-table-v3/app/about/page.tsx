export default function AboutPage() {
  return (
    <div className="min-h-screen bg-base-black">
      <section className="py-24 border-b border-type-tertiary">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-display-xl text-type-primary">
              Built on Expertise,
              <br />
              Driven by Relationships
            </h1>
            <p className="text-body-xl text-type-secondary">
              Farm to Table Trading LLP was founded in 2025 by a team who saw the gap between India's world-class produce and its inconsistent export reputation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="section-container">
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-display-md text-type-primary">
                Expert Team, New Company
              </h2>
              <p className="text-body-lg text-type-secondary max-w-3xl mx-auto">
                Our founders bring decades of combined experience in agriculture, quality systems, and international trade.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="card-base p-6 space-y-4">
                <div className="w-24 h-24 rounded-full bg-olive-900/30 border border-olive-600 flex items-center justify-center mx-auto">
                  <span className="text-4xl">👩‍🌾</span>
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-body-xl text-type-primary font-semibold">
                    Shruti Thepade
                  </h3>
                  <p className="text-body-sm text-olive-400">Co-Founder</p>
                </div>
                <p className="text-body-sm text-type-secondary text-center">
                  Agricultural systems expertise. Deep understanding of tropical climate variability and seasonal quality patterns.
                </p>
              </div>

              <div className="card-base p-6 space-y-4">
                <div className="w-24 h-24 rounded-full bg-olive-900/30 border border-olive-600 flex items-center justify-center mx-auto">
                  <span className="text-4xl">👨‍💼</span>
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-body-xl text-type-primary font-semibold">
                    Piyush Tidke
                  </h3>
                  <p className="text-body-sm text-olive-400">Co-Founder</p>
                </div>
                <p className="text-body-sm text-type-secondary text-center">
                  International trade and logistics. Built relationships with premium buyers across Middle East and Europe.
                </p>
              </div>

              <div className="card-base p-6 space-y-4">
                <div className="w-24 h-24 rounded-full bg-olive-900/30 border border-olive-600 flex items-center justify-center mx-auto">
                  <span className="text-4xl">👨‍🔬</span>
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-body-xl text-type-primary font-semibold">
                    Dr Kedar Thepade
                  </h3>
                  <p className="text-body-sm text-olive-400">Co-Founder</p>
                </div>
                <p className="text-body-sm text-type-secondary text-center">
                  Quality systems and scientific grading. Specialized in identifying internal defects other exporters miss.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-base-off-black">
        <div className="section-container">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-display-md text-type-primary">
                What Makes Us Different
              </h2>
            </div>

            <div className="space-y-8">
              <div className="card-base p-8 space-y-4">
                <h3 className="text-body-xl text-olive-400 font-semibold">
                  We're not commission-based exporters
                </h3>
                <p className="text-body-md text-type-secondary">
                  Most Indian exporters work on commission - they connect farmers to buyers and take a cut. Their incentive is volume. Our model is premium-focused: we buy directly from farmers at stable rates, handle quality control, and only ship what meets our standards.
                </p>
              </div>

              <div className="card-base p-8 space-y-4">
                <h3 className="text-body-xl text-olive-400 font-semibold">
                  We reject shipments rather than compromise
                </h3>
                <p className="text-body-md text-type-secondary">
                  30% of harvested produce doesn't meet our standards. We reject it at the gate. Commission-based exporters ship everything that passes minimum export requirements. We ship only what passes our standards.
                </p>
              </div>

              <div className="card-base p-8 space-y-4">
                <h3 className="text-body-xl text-olive-400 font-semibold">
                  We focus on partnerships, not transactions
                </h3>
                <p className="text-body-md text-type-secondary">
                  We work with 10-15 committed buyers. Not hundreds of one-off orders. This allows us to understand your specific requirements, plan harvest windows around your needs, and build relationships that work for both sides.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-display-md text-type-primary">
              Based in Nashik, Maharashtra
            </h2>
            <p className="text-body-lg text-type-secondary">
              India's fruit export capital. Direct access to Maharashtra's premium growing regions for pomegranates, grapes, and onions. Established relationships with farms in Tamil Nadu (bananas), Kerala (coconuts), and Gujarat (melons).
            </p>
            <div className="card-base p-8 inline-block">
              <p className="text-body-md text-type-primary font-mono">
                Farm to Table Trading LLP
                <br />
                Nashik, Maharashtra 422003
                <br />
                India
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
