import React from 'react'

const problems = [
  {
    number: '01',
    headline: 'You miss enquiries while you\'re on site.',
    body: 'A customer messages while you\'re on a job. By the time you reply — three hours later — they\'ve booked someone else. You didn\'t even know the lead existed.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: '02',
    headline: 'Admin eats your evenings.',
    body: 'Quotes to write. Messages to chase. Jobs to schedule. By the time you\'re done, it\'s late and you haven\'t switched off. The business is running you.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: '03',
    headline: 'Everything is scattered across five apps.',
    body: 'WhatsApp. Missed calls. Instagram DMs. Sticky notes. Email. Your jobs, quotes, and conversations are spread everywhere and you can\'t keep track.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: '04',
    headline: 'Leads go cold and you lose work you never meant to lose.',
    body: 'You send a quote and hear nothing. You mean to follow up but forget. They hire someone else — and the referrals that would have come with it are gone too.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
      </svg>
    ),
  },
]

export default function Problems() {
  return (
    <section className="bg-white py-24 lg:py-32" id="features">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-brand-navy text-xs font-bold uppercase tracking-widest mb-5">
            <div className="w-5 h-px bg-brand-navy/40" />
            Sound familiar?
            <div className="w-5 h-px bg-brand-navy/40" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-brand-text leading-tight mb-4">
            Most tradespeople are losing jobs<br className="hidden sm:block" /> before the work even starts.
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Not because of the quality of their work. Because of what happens — or doesn't — when a lead comes in.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {problems.map((p, i) => (
            <div key={i} className="card-premium group">
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-gray rounded-xl flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-all duration-200">
                  {p.icon}
                </div>
                <div className="flex-1">
                  <div className="text-[10px] font-black text-brand-navy/35 uppercase tracking-widest mb-2">{p.number}</div>
                  <h3 className="text-base font-bold text-brand-text mb-2.5 leading-snug">{p.headline}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
