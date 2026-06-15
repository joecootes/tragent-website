import React from 'react'
import HeroWorkflow from './HeroWorkflow'

const trustChips = [
  'Gmail integration',
  'You approve every reply',
  'Built for trades',
]

export default function Hero() {
  return (
    <section className="bg-[#F3F5F8] pt-28 pb-16 lg:pt-32 lg:pb-20 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-70"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='220' viewBox='0 0 320 220'%3E%3Cg fill='none' stroke='%231E2440' stroke-opacity='.04' stroke-width='1'%3E%3Cpath d='M0 62h104c12 0 12 24 24 24h192'/%3E%3Cpath d='M190 0v58c0 12 12 12 12 24v138'/%3E%3C/g%3E%3Cg fill='%231E2440' fill-opacity='.07'%3E%3Ccircle cx='128' cy='86' r='2'/%3E%3Ccircle cx='202' cy='82' r='2'/%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: '320px 220px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-start">

          {/* Left: Text */}
          <div className="lg:col-span-5 lg:pt-6">

            {/* Launch status */}
            <div className="inline-flex items-center gap-2 border border-brand-navy/10 bg-white/65 rounded-full px-4 py-1.5 mb-8 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-brand-text/60 text-xs font-semibold tracking-wide">Private beta · Now accepting applications</span>
            </div>

            <h1 className="text-[48px] sm:text-6xl xl:text-[68px] font-black text-brand-text leading-[0.97] tracking-[-0.05em] mb-7 text-balance">
              Never miss another enquiry.
            </h1>

            <p className="text-lg sm:text-xl text-brand-text/60 leading-relaxed mb-9 max-w-md">
              Reply in seconds. Follow up automatically.
              More enquiries become booked jobs.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="#early-access"
                className="bg-brand-navy text-white font-bold text-base px-8 py-4 rounded-full hover:bg-brand-navy-dark transition-all shadow-sm text-center"
              >
                Join early access
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

          {/* Right: Animated workflow — desktop only */}
          <div className="hidden lg:flex lg:col-span-7 justify-center lg:justify-end pt-2">
            <HeroWorkflow />
          </div>

        </div>
      </div>
    </section>
  )
}
