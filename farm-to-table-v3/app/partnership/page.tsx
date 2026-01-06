export default function PartnershipPage() {
  return (
    <div className="min-h-screen bg-base-black">
      <section className="py-24 border-b border-type-tertiary">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-display-xl text-type-primary">
              Work With Us
            </h1>
            <p className="text-body-xl text-type-secondary">
              We're looking for committed buyers who value consistency over the cheapest price. Here's how we work together.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="section-container">
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-display-md text-type-primary">
                Partnership Model
              </h2>
              <p className="text-body-lg text-type-secondary">
                We work with 10-15 deep partnerships. Not transactional ordering.
              </p>
            </div>

            <div className="space-y-8">
              <div className="card-base p-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-olive-900/50 border border-olive-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-olive-400 font-mono font-bold">1</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-body-xl text-type-primary font-semibold">
                      Initial Conversation
                    </h3>
                    <p className="text-body-md text-type-secondary">
                      Tell us about your business: volume requirements, quality standards, destination markets, frequency. We'll share our current capacity and see if there's a fit.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-base p-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-olive-900/50 border border-olive-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-olive-400 font-mono font-bold">2</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-body-xl text-type-primary font-semibold">
                      Sample Shipment
                    </h3>
                    <p className="text-body-md text-type-secondary">
                      Start with a trial container. You evaluate quality, we evaluate communication and payment reliability. No long-term commitment until both sides are satisfied.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-base p-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-olive-900/50 border border-olive-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-olive-400 font-mono font-bold">3</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-body-xl text-type-primary font-semibold">
                      Seasonal Planning
                    </h3>
                    <p className="text-body-md text-type-secondary">
                      Once the partnership is established, we plan harvest windows together. You get allocation during peak season. We get stable offtake that lets us commit to farmers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-base-off-black">
        <div className="section-container">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-display-md text-type-primary">
                Who We Work With
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="card-base p-6 space-y-4">
                <h3 className="text-body-xl text-status-success font-semibold">
                  ✓ Good Fit
                </h3>
                <ul className="space-y-2 text-body-sm text-type-secondary">
                  <li>• Premium retailers and specialty grocers</li>
                  <li>• High-end restaurant groups</li>
                  <li>• Quality-focused distributors</li>
                  <li>• Industrial processors with consistent specs</li>
                  <li>• Buyers who value relationships over spot prices</li>
                </ul>
              </div>

              <div className="card-base p-6 space-y-4 border-status-error/30">
                <h3 className="text-body-xl text-status-error font-semibold">
                  ✗ Probably Not a Fit
                </h3>
                <ul className="space-y-2 text-body-sm text-type-secondary">
                  <li>• Spot market buyers chasing cheapest price</li>
                  <li>• Buyers who need immediate shipments (no planning)</li>
                  <li>• Orders below our MOQs</li>
                  <li>• Buyers who negotiate on every container</li>
                  <li>• Buyers who only contact us when desperate</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-display-md text-type-primary">
              Ready to Start?
            </h2>
            <p className="text-body-lg text-type-secondary">
              Partnership inquiries typically receive response within 48 hours.
            </p>
            <button className="btn-primary text-lg px-8 py-4">
              Request Product Allocation
            </button>
            <p className="text-body-sm text-type-tertiary">
              Or email us directly: partnerships@farmtotabletrading.com
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
