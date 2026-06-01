import React from 'react'

export default function MidCTA() {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden" style={{ background: 'linear-gradient(160deg, #2B3252 0%, #1E2440 100%)' }}>
      <div className="absolute inset-0 bg-grid-white pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[300px] rounded-full blur-[100px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(74,84,120,0.4) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left text */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white/70 text-xs font-semibold">14-day free trial. No card required.</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-3">
              Still losing jobs to slow replies?
            </h2>
            <p className="text-white/50 text-lg leading-relaxed">
              Every hour you wait is another lead going to a competitor who replied first.
              Tragent fixes that from day one.
            </p>
          </div>

          {/* Right CTA */}
          <div className="flex flex-col items-center lg:items-end gap-3 flex-shrink-0">
            <a
              href="#"
              className="bg-white text-brand-navy font-bold text-base px-10 py-4 rounded-xl hover:bg-brand-gray transition-all hover:shadow-navy whitespace-nowrap"
            >
              Start Free Trial
            </a>
            <span className="text-white/35 text-sm">No contracts. Cancel anytime.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
