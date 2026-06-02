import React from 'react'

export default function FinalCTA() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden bg-brand-navy">
      <div className="absolute inset-0 bg-grid-white pointer-events-none opacity-70" />
      <div className="absolute left-1/2 top-10 h-px w-[70vw] -translate-x-1/2 bg-white/10" />

      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/8 border border-white/12 rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
          <span className="text-white/60 text-xs font-semibold tracking-wide">Built for busy trades</span>
        </div>

        <h2 className="text-4xl lg:text-5xl xl:text-[56px] font-black text-white leading-tight tracking-[-0.04em] mb-5">
          Ready to make enquiry admin feel lighter?
        </h2>

        <p className="text-lg text-white/50 leading-relaxed mb-10 max-w-xl mx-auto">
          Join early access and help shape Tragent around the way real trade businesses actually work.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-9">
          <a href="mailto:hello@trytragent.com?subject=Tragent%20early%20access" className="bg-white text-brand-text font-bold text-base px-10 py-4 rounded-full hover:bg-brand-gray transition-all">
            Join early access
          </a>
          <a href="#how-it-works" className="bg-white/8 border border-white/15 text-white font-semibold text-base px-10 py-4 rounded-full hover:bg-white/12 transition-colors">
            See how it works
          </a>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-7 gap-y-2">
          {['Gmail-first', 'Human approval', 'Clear disconnect', 'Account deletion supported'].map((item) => (
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
