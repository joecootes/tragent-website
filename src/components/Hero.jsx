import React from 'react'

const trustChips = [
  'Works with Gmail',
  'You approve replies',
  'Built for trades',
  'Automatic follow-ups',
]

export default function Hero() {
  return (
    <section className="bg-[#F3F5F8] pt-28 pb-16 lg:pt-32 lg:pb-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.45]" style={{ backgroundImage: 'linear-gradient(rgba(30,36,64,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(30,36,64,0.035) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 border border-brand-navy/10 bg-white/65 rounded-full px-4 py-1.5 mb-8 shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-navy/100" />
            <span className="text-brand-text/60 text-xs font-semibold tracking-wide">AI enquiry assistant for tradespeople</span>
          </div>

          <h1 className="text-[48px] sm:text-6xl xl:text-[78px] font-black text-brand-text leading-[0.98] tracking-[-0.05em] mb-7 text-balance">
            Never miss another enquiry.
          </h1>

          <p className="text-lg sm:text-xl text-brand-text/60 leading-relaxed mb-9 max-w-2xl">
            Tragent replies instantly when customers contact you and automatically follows up on quotes, so more enquiries turn into booked jobs.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a href="#early-access" className="bg-brand-navy text-white font-bold text-base px-8 py-4 rounded-full hover:bg-brand-navy-dark transition-all shadow-sm text-center">
              Join early access
            </a>
            <a href="#product" className="flex items-center justify-center gap-2 bg-white/55 border border-brand-navy/10 text-brand-text font-semibold text-base px-8 py-4 rounded-full hover:bg-white transition-colors text-center">
              See how it works
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {trustChips.map((item) => (
              <div key={item} className="flex items-center gap-1.5 text-brand-text/45 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-navy/35" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
