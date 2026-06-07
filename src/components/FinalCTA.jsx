import React, { useState } from 'react'

export default function FinalCTA() {
  const [email, setEmail] = useState('')
  const [trade, setTrade] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()

    const subject = encodeURIComponent('Tragent early access')
    const body = encodeURIComponent(
      `Please add me to the Tragent early access list.\n\nEmail: ${email}\nTrade: ${trade || 'Not provided'}`
    )

    window.location.href = `mailto:hello@trytragent.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <section id="early-access" className="relative py-20 lg:py-24 overflow-hidden bg-brand-navy">
      <div className="absolute inset-0 bg-grid-white pointer-events-none opacity-70" />

      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/8 border border-white/12 rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-white/60 text-xs font-semibold tracking-wide">Private beta · Now accepting applications</span>
        </div>

        <h2 className="text-4xl lg:text-5xl xl:text-[56px] font-black text-white leading-tight tracking-[-0.04em] mb-5">
          Get early access to Tragent.
        </h2>

        <p className="text-lg text-white/55 leading-relaxed mb-8 max-w-xl mx-auto">
          Apply for the private beta and we'll send you access details
          as soon as your spot is confirmed.
        </p>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid sm:grid-cols-[1fr_0.75fr_auto] gap-3 mb-5">
          <label className="sr-only" htmlFor="early-access-email">Email address</label>
          <input
            id="early-access-email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email address"
            className="w-full rounded-full border border-white/15 bg-white/10 px-5 py-4 text-white placeholder:text-white/35 outline-none focus:border-white/35 focus:bg-white/12"
          />
          <label className="sr-only" htmlFor="early-access-trade">Trade</label>
          <input
            id="early-access-trade"
            type="text"
            value={trade}
            onChange={(event) => setTrade(event.target.value)}
            placeholder="Trade"
            className="w-full rounded-full border border-white/15 bg-white/10 px-5 py-4 text-white placeholder:text-white/35 outline-none focus:border-white/35 focus:bg-white/12"
          />
          <button type="submit" className="bg-white text-brand-text font-bold text-base px-8 py-4 rounded-full hover:bg-brand-gray transition-all whitespace-nowrap">
            Apply now
          </button>
        </form>

        {/* What happens next */}
        <p className="text-sm text-white/35 mb-10">
          What happens next: we'll email you access details within 48 hours.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-x-7 gap-y-2">
          {['Gmail integration', 'You approve every reply', 'Built for trades'].map((item) => (
            <div key={item} className="flex items-center gap-1.5 text-white/32 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-white/35" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
