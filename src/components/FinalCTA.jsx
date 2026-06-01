import React from 'react'

export default function FinalCTA() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden" style={{ background: 'linear-gradient(160deg, #2B3252 0%, #1A2038 100%)' }}>
      <div className="absolute inset-0 bg-grid-white pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[120px] pointer-events-none opacity-50" style={{ background: 'radial-gradient(circle, rgba(74,84,120,0.6) 0%, transparent 70%)' }} />

      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white/70 text-xs font-semibold tracking-wide">14-day free trial · No card required</span>
        </div>

        <h2 className="text-4xl lg:text-5xl xl:text-[56px] font-black text-white leading-tight tracking-tight mb-5">
          Ready to stop losing<br />
          <span className="text-white/45">jobs to slow replies?</span>
        </h2>

        <p className="text-lg text-white/50 leading-relaxed mb-10 max-w-xl mx-auto">
          Join thousands of tradespeople who've won more work, cut their evening admin,
          and actually switched off at the end of the day.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-9">
          <a href="#" className="bg-white text-brand-navy font-bold text-base px-10 py-4 rounded-xl hover:bg-brand-gray transition-all hover:shadow-navy">
            Start Free Trial
          </a>
          <a href="#how-it-works" className="bg-white/8 border border-white/15 text-white font-semibold text-base px-10 py-4 rounded-xl hover:bg-white/12 transition-colors">
            See How It Works
          </a>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-7 gap-y-2">
          {['No setup fees', 'No contracts', 'Cancel anytime', 'Works in minutes'].map((item) => (
            <div key={item} className="flex items-center gap-1.5 text-white/30 text-sm">
              <svg className="w-3.5 h-3.5 text-white/45 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
