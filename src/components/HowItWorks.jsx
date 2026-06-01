import React from 'react'

const steps = [
  {
    step: '01',
    headline: 'Connect your enquiries.',
    body: 'Link your website form, WhatsApp number, or email. Takes minutes. No technical knowledge needed.',
    note: 'Works with your existing setup — no new numbers, no disruption.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    step: '02',
    headline: 'Tragent handles the first response and admin flow.',
    body: 'New enquiry comes in. Tragent replies fast, creates a job record, and keeps track of the conversation. Quotes, follow-ups, scheduling — handled.',
    note: 'Sounds like you. Professional, warm, and to the point.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    step: '03',
    headline: 'You step in only when it\'s time to do the work.',
    body: 'You\'ll only deal with a lead when it\'s ready — confirmed, qualified, and organised. No back-and-forth. Just show up and do the job.',
    note: 'You stay in control. Tragent does the legwork.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-brand-gray py-24 lg:py-32" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-xl mb-16">
          <div className="inline-flex items-center gap-2 text-brand-navy text-xs font-bold uppercase tracking-widest mb-5">
            <div className="w-5 h-px bg-brand-navy/40" />
            How It Works
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-brand-text leading-tight mb-4">
            Three steps.<br />
            Less hassle from day one.
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Built to fit around how you already work. Not some complicated system you need to learn.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid lg:grid-cols-3 gap-5 mb-12">
          {steps.map((s, i) => (
            <div key={i} className="card-premium relative">
              {/* Step connector line for desktop */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-3 w-6 h-px bg-gray-200 z-10" />
              )}

              {/* Step number badge */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-navy flex items-center justify-center text-white flex-shrink-0">
                  {s.icon}
                </div>
                <span className="text-[11px] font-black text-brand-navy/35 uppercase tracking-widest">Step {s.step}</span>
              </div>

              <h3 className="text-lg font-bold text-brand-text mb-3 leading-snug">{s.headline}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{s.body}</p>

              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-brand-navy flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs text-gray-500 font-medium">{s.note}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="#" className="inline-flex items-center gap-2 bg-brand-navy text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-navy-dark transition-colors shadow-navy">
            Get Started Free
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="text-sm text-gray-400 mt-3">No card required. Up and running in minutes.</p>
        </div>
      </div>
    </section>
  )
}
