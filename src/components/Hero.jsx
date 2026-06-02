import React from 'react'
import LogoMark from './LogoMark'

const flowItems = [
  { label: 'Gmail', side: 'left', y: '22%' },
  { label: 'Customer', side: 'left', y: '50%' },
  { label: 'Quote', side: 'left', y: '78%' },
  { label: 'Draft reply', side: 'right', y: '22%' },
  { label: 'Job card', side: 'right', y: '50%' },
  { label: 'Follow-up', side: 'right', y: '78%' },
]

function FlowDiagram() {
  return (
    <div className="relative mx-auto max-w-[620px] h-[360px] sm:h-[420px]" aria-label="Tragent workflow diagram">
      <div className="absolute inset-0 opacity-[0.09]" style={{ backgroundImage: 'radial-gradient(rgba(30,36,64,0.22) 1px, transparent 1px)', backgroundSize: '13px 13px' }} />
      <div className="absolute left-1/2 top-1/2 w-28 h-28 sm:w-36 sm:h-36 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] bg-white border border-brand-navy/10 shadow-card flex items-center justify-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
          <LogoMark className="w-16 h-16 sm:w-20 sm:h-20" />
        </div>
      </div>

      {flowItems.map((item) => {
        const isLeft = item.side === 'left'
        return (
          <div key={item.label} className="absolute flex items-center gap-3" style={{ top: item.y, [isLeft ? 'left' : 'right']: 0, transform: 'translateY(-50%)' }}>
            {isLeft && <span className="hidden sm:block w-24 lg:w-32 h-px bg-brand-navy/10" />}
            <span className="rounded-full border border-brand-navy/10 bg-[#FFFFFF]/90 px-3 py-1 text-[11px] font-semibold text-brand-text/65 shadow-sm whitespace-nowrap">{item.label}</span>
            {!isLeft && <span className="hidden sm:block w-24 lg:w-32 h-px bg-brand-navy/10" />}
          </div>
        )
      })}

      <div className="absolute left-1/2 top-[12%] bottom-[12%] w-px -translate-x-1/2 bg-brand-navy/5" />
      <div className="absolute left-[13%] right-[13%] top-1/2 h-px -translate-y-1/2 bg-brand-navy/5" />
    </div>
  )
}

export default function Hero() {
  return (
    <section className="bg-[#F3F5F8] flex items-start lg:items-center pt-28 pb-16 lg:pt-24 lg:pb-20 lg:min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.45]" style={{ backgroundImage: 'linear-gradient(rgba(30,36,64,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(30,36,64,0.035) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
      <div className="absolute -top-32 right-[-180px] w-[520px] h-[520px] rounded-full blur-[120px] bg-white/70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 xl:gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 border border-brand-navy/10 bg-white/60 rounded-full px-4 py-1.5 mb-8 shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-navy/100" />
              <span className="text-brand-text/60 text-xs font-semibold tracking-wide">AI admin assistant for tradespeople</span>
            </div>

            <h1 className="text-[44px] sm:text-6xl xl:text-[72px] font-black text-brand-text leading-[0.98] tracking-[-0.05em] mb-7 text-balance">
              Stop losing jobs
              <span className="block text-brand-text/35">because you replied too late.</span>
            </h1>

            <p className="text-lg text-brand-text/58 leading-relaxed mb-9 max-w-[520px]">
              Tragent watches your enquiries, drafts replies, and keeps jobs organised while you’re on site — calm admin without another system to babysit.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a href="mailto:hello@trytragent.com?subject=Tragent%20early%20access" className="bg-brand-navy text-white font-bold text-base px-8 py-4 rounded-full hover:bg-brand-navy transition-all shadow-sm text-center">
                Join early access
              </a>
              <a href="#how-it-works" className="flex items-center justify-center gap-2 bg-white/55 border border-brand-navy/10 text-brand-text font-semibold text-base px-8 py-4 rounded-full hover:bg-white transition-colors text-center">
                See how it works
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {['Early access', 'Gmail-first', 'You stay in control'].map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-brand-text/40 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-navy/30" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden sm:block">
            <FlowDiagram />
          </div>
        </div>
      </div>
    </section>
  )
}
