export default function ClaimPilotLanding() {
  return (
    <div className="bg-gray-950 text-white font-sans">

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-24">
        <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">For Roofing & Restoration Contractors</span>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-3xl mb-6">
          Stop leaving money on the table every storm season.
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mb-8">
          ClaimPilot writes your Xactimate supplement letters in under 30 minutes — catching every missed line item your insurer&apos;s adjuster skipped. No more waiting 5 days for a human writer. No more $400/claim fees.
        </p>
        <a
          href="mailto:claimpilot@waitlist.com?subject=I want early access"
          className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-4 rounded-xl text-lg transition"
        >
          Join the Early Access Waitlist →
        </a>
        <p className="text-gray-600 text-sm mt-4">Free for the first 20 contractors. No credit card.</p>
      </section>

      {/* Stats */}
      <section className="bg-gray-900 py-12 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-400">$400</div>
            <div className="text-gray-400 mt-1">average cost of a human supplement writer per claim</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-400">3–5 days</div>
            <div className="text-gray-400 mt-1">average turnaround — useless during storm surges</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-400">20–30%</div>
            <div className="text-gray-400 mt-1">of claim value left on the table by incomplete supplements</div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">How ClaimPilot works</h2>
          <div className="space-y-10">
            {[
              { n: 1, title: "Upload the insurer's estimate + damage photos", desc: "Drop the adjuster's PDF and any photos from the job. That's all we need." },
              { n: 2, title: "AI finds every missed line item", desc: "ClaimPilot compares the estimate against regional Xactimate pricing benchmarks — flagging missing items like drip edge, ice/water shield, pipe boots, and code-required upgrades." },
              { n: 3, title: "Get a ready-to-submit supplement letter", desc: "Formatted with Xactimate codes, quantities, pricing, and photo references. Review it in 15 minutes. Submit it the same day." },
            ].map(({ n, title, desc }) => (
              <div key={n} className="flex gap-6 items-start">
                <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shrink-0">{n}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{title}</h3>
                  <p className="text-gray-400">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-900 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Why contractors use ClaimPilot</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "⚡", title: "Same-day turnaround", desc: "Human writers take 3–5 days. ClaimPilot takes 30 minutes. During storm season, speed is money." },
              { icon: "💰", title: "67% cheaper than human writers", desc: "$49/claim vs. $150–$400. A 50-claim season saves you over $5,000. Pay for the tool in the first week." },
              { icon: "🎯", title: "Catches what adjusters skip", desc: "AI trained on thousands of supplement patterns. Knows what line items adjusters consistently omit — by insurer, by region, by damage type." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-gray-800 rounded-2xl p-6">
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-gray-400 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to stop leaving money on the table?</h2>
        <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
          We&apos;re onboarding the first 20 roofing and restoration contractors for free. Get in early and help shape the product.
        </p>
        <a
          href="mailto:claimpilot@waitlist.com?subject=I want early access"
          className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-4 rounded-xl text-lg transition"
        >
          Get Early Access →
        </a>
      </section>

      <footer className="text-center text-gray-700 text-sm py-8">
        © 2026 ClaimPilot. Built by TheScratchpad.
      </footer>
    </div>
  );
}
