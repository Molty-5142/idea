export default function STRCmplyLanding() {
  return (
    <div className="bg-gray-950 text-white font-sans">

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-24">
        <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-4">For Airbnb & VRBO Hosts</span>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-4xl mb-6">
          Your city is using AI to catch you.<br />
          <span className="text-emerald-400">Now you have AI too.</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mb-10">
          STR Comply monitors local regulations, tracks permit deadlines, and alerts you before you get fined — so you can focus on hosting, not bureaucracy.
        </p>
        <a
          href="mailto:hello@strcomply.com?subject=Early Access Request"
          className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-8 py-4 rounded-xl text-lg transition mb-4"
        >
          Get Free Compliance Check →
        </a>
        <p className="text-gray-600 text-sm">No credit card. Free for your city. Takes 60 seconds.</p>
      </section>

      {/* Fear bar */}
      <section className="bg-red-950/40 border-y border-red-900/50 py-10 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-red-400">$20,000</div>
            <div className="text-gray-400 mt-1">max fine for operating without a permit in Portland</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-red-400">400+</div>
            <div className="text-gray-400 mt-1">US cities now require STR permits — growing by 50/year</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-red-400">$0</div>
            <div className="text-gray-400 mt-1">tools available to help hosts track these regulations. Until now.</div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">How STR Comply works</h2>
          <p className="text-gray-400 text-center mb-16">Three steps. No compliance headaches.</p>
          <div className="space-y-10">
            {[
              {
                n: 1,
                title: 'Enter your property address',
                desc: "We identify your jurisdiction and pull every applicable regulation — city, county, and state — that applies to your rental.",
              },
              {
                n: 2,
                title: 'Get your compliance status instantly',
                desc: 'See exactly what permits you need, which deadlines are coming up, and whether your listing is currently at risk of a fine.',
              },
              {
                n: 3,
                title: 'Get alerted when rules change',
                desc: 'Local ordinances change constantly. STR Comply monitors them 24/7 and notifies you the moment something affects your property.',
              },
            ].map(({ n, title, desc }) => (
              <div key={n} className="flex gap-6 items-start">
                <div className="bg-emerald-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shrink-0 text-lg">{n}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{title}</h3>
                  <p className="text-gray-400">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof / pain points */}
      <section className="bg-gray-900 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12 text-gray-300">Real hosts. Real fines.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "I had no idea Portland required a permit. Got hit with a $5,000 fine on my first month. Nobody told me.",
                location: "Portland, OR",
              },
              {
                quote: "NYC changed the rules overnight. My listing disappeared from Airbnb with zero warning. Lost $18,000 in bookings.",
                location: "New York, NY",
              },
              {
                quote: "My permit expired and I didn't notice. The city sent an inspector. $3,200 fine. Would have paid $29/month to avoid that.",
                location: "Nashville, TN",
              },
            ].map(({ quote, location }) => (
              <div key={location} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <p className="text-gray-300 text-sm italic mb-4">&ldquo;{quote}&rdquo;</p>
                <p className="text-emerald-400 text-xs font-semibold">— Host in {location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Everything you need to stay legal</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "🗺️", title: "400+ cities covered", desc: "From Nashville to New Orleans to NYC. If your city has STR rules, we track them." },
              { icon: "⏰", title: "Permit deadline alerts", desc: "Never miss a renewal. Get notified 30, 14, and 7 days before deadlines." },
              { icon: "🔔", title: "Regulation change monitoring", desc: "Ordinances change constantly. We catch every update and tell you what it means for your listing." },
              { icon: "📋", title: "Compliance checklist per property", desc: "See exactly what you need for each property — permits, licenses, inspections, taxes." },
              { icon: "🏘️", title: "Multi-property support", desc: "Running a portfolio? Track compliance across all your properties in one dashboard." },
              { icon: "🤖", title: "AI-native from day one", desc: "Built to synthesize complex regulatory language into plain English you can actually act on." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-4 bg-gray-900 rounded-xl p-5 border border-gray-800">
                <span className="text-2xl shrink-0">{icon}</span>
                <div>
                  <h3 className="font-semibold text-white mb-1">{title}</h3>
                  <p className="text-gray-400 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-900 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Simple pricing</h2>
          <p className="text-gray-400 text-center mb-16">One fine pays for years of STR Comply. Do the math.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Solo",
                price: "$29",
                period: "/month",
                desc: "1 property. Full compliance monitoring.",
                features: ["1 property", "All markets covered", "Permit deadline alerts", "Regulation change alerts"],
                highlight: false,
              },
              {
                name: "Growth",
                price: "$79",
                period: "/month",
                desc: "Up to 5 properties.",
                features: ["5 properties", "All markets covered", "Permit deadline alerts", "Regulation change alerts", "Priority support"],
                highlight: true,
              },
              {
                name: "Portfolio",
                price: "$199",
                period: "/month",
                desc: "Up to 20 properties. Team access.",
                features: ["20 properties", "All markets covered", "Team access", "CSV exports", "White-glove onboarding"],
                highlight: false,
              },
            ].map(({ name, price, period, desc, features, highlight }) => (
              <div key={name} className={`rounded-2xl p-6 border ${highlight ? 'border-emerald-500 bg-emerald-950/30' : 'border-gray-700 bg-gray-800'}`}>
                {highlight && <div className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">Most Popular</div>}
                <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-white">{price}</span>
                  <span className="text-gray-400 text-sm">{period}</span>
                </div>
                <p className="text-gray-400 text-sm mb-5">{desc}</p>
                <ul className="space-y-2 mb-6">
                  {features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-emerald-400">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:hello@strcomply.com?subject=Early Access Request"
                  className={`block text-center py-2 rounded-lg text-sm font-semibold transition ${highlight ? 'bg-emerald-500 hover:bg-emerald-400 text-white' : 'bg-gray-700 hover:bg-gray-600 text-white'}`}
                >
                  Get Early Access
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Stop guessing. Start complying.</h2>
        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
          Join the waitlist and get a free compliance check for your city when we launch.
        </p>
        <a
          href="mailto:hello@strcomply.com?subject=Early Access Request"
          className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-10 py-4 rounded-xl text-lg transition"
        >
          Get Free Compliance Check →
        </a>
      </section>

      <footer className="text-center text-gray-700 text-sm py-8 border-t border-gray-900">
        © 2026 STR Comply. Built by TheScratchpad.
      </footer>

    </div>
  );
}
