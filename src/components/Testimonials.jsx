import React from 'react'

const audienceNotes = [
  {
    title: 'For electricians',
    body: 'Keep quote requests, follow-ups, and customer replies organised while you are on site.',
    initials: 'EL',
    trade: 'Electrical',
  },
  {
    title: 'For plumbers',
    body: 'Turn scattered messages into clear next actions, without spending every evening catching up.',
    initials: 'PL',
    trade: 'Plumbing',
  },
  {
    title: 'For builders',
    body: 'Stay on top of enquiries, booked work, and customer details before a good lead goes cold.',
    initials: 'BD',
    trade: 'Building',
  },
]

function CheckIcon() {
  return (
    <div className="w-8 h-8 rounded-full bg-brand-navy/8 flex items-center justify-center mb-5">
      <svg className="w-4 h-4 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
      </svg>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-brand-gray py-24 lg:py-32" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-brand-navy text-xs font-bold uppercase tracking-widest mb-5">
            <div className="w-5 h-px bg-brand-navy/40" />
            Built for trades
            <div className="w-5 h-px bg-brand-navy/40" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-brand-text leading-tight mb-4">
            Made for the way trade enquiries actually arrive.
          </h2>
          <p className="text-gray-500 text-lg">
            Tragent is in early access. The goal is simple: help busy tradespeople reply faster, stay organised, and stop good enquiries slipping away.
          </p>
        </div>

        {/* Audience cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {audienceNotes.map((t, i) => (
            <div key={i} className="card-premium flex flex-col">
              <CheckIcon />
              <h3 className="text-brand-text text-lg font-black mb-3">{t.title}</h3>
              <p className="text-gray-500 text-base leading-relaxed flex-1 mb-6">
                {t.body}
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">{t.initials}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold text-brand-text">Trade-focused workflow</div>
                  <div className="text-xs text-gray-400 mt-0.5">Built around real customer messages</div>
                </div>
                <span className="flex-shrink-0 text-[10px] font-bold text-brand-navy bg-brand-navy/8 px-2 py-1 rounded-lg">
                  {t.trade}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust strip */}
        <div className="bg-white rounded-2xl px-8 py-7 shadow-card border border-black/[0.04] flex flex-wrap justify-center gap-x-0 gap-y-6 lg:divide-x divide-gray-100">
          {[
            { value: 'Early access', label: 'Private beta in progress' },
            { value: 'Trade-first', label: 'Built for enquiries and follow-ups' },
            { value: 'You approve', label: 'AI drafts stay under your control' },
            { value: 'Clear exit', label: 'Disconnect and deletion supported' },
          ].map((stat, i) => (
            <div key={i} className="text-center px-8">
              <div className="text-2xl font-black text-brand-navy mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
