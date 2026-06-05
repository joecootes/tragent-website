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
      <div
        className="absolute inset-0 pointer-events-none opacity-70"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='120' viewBox='0 0 180 120'%3E%3Cg fill='none' stroke='%231E2440' stroke-opacity='.045' stroke-width='1'%3E%3Cpath d='M0 30h68c8 0 8 18 16 18h96'/%3E%3Cpath d='M0 86h42c10 0 10-18 20-18h118'/%3E%3Cpath d='M118 0v30c0 8 8 8 8 16v74'/%3E%3C/g%3E%3Cg fill='%231E2440' fill-opacity='.08'%3E%3Ccircle cx='68' cy='30' r='2'/%3E%3Ccircle cx='84' cy='48' r='2'/%3E%3Ccircle cx='62' cy='68' r='2'/%3E%3Ccircle cx='126' cy='46' r='2'/%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: '180px 120px',
        }}
      />

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
