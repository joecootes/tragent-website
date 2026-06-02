import React from 'react'

const solutions = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    headline: 'Every enquiry gets a fast, professional reply.',
    body: 'Tragent picks up new enquiries and sends a reply within minutes — even when you\'re on site. No more leads going cold because you didn\'t see the message.',
    stat: 'Reply in minutes, not hours',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
    headline: 'All your jobs and messages in one place.',
    body: 'No more switching between WhatsApp, notes, and email. Tragent keeps every job, conversation, and follow-up in a single organised view.',
    stat: 'One place. No chaos',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    headline: 'Leads get followed up automatically.',
    body: 'Sent a quote and heard nothing? Tragent follows up at the right time — so you stop losing jobs you already quoted for.',
    stat: 'Stop losing jobs you quoted',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
    headline: 'Switch off at the end of the day.',
    body: 'When you\'re done working, you\'re actually done. Tragent handles the admin flow so your evenings aren\'t spent chasing messages or worrying what you\'ve missed.',
    stat: 'Evenings back. Head clear',
  },
]

export default function Solution() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#F3F5F8]">
      <div className="absolute inset-0 bg-grid-white pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(74,84,120,0.5) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(30,36,64,0.8) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 text-brand-navy/45 text-xs font-bold uppercase tracking-widest mb-5">
            <div className="w-5 h-px bg-brand-navy/35" />
            How Tragent fixes it
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-brand-text leading-tight mb-4">
            Handles the stuff<br />that's costing you jobs.
          </h2>
          <p className="text-brand-text/55 text-lg leading-relaxed">
            No complicated setup. No AI jargon. Just a system that replies fast,
            keeps things organised, and follows up so you don't have to.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-5">
          {solutions.map((s, i) => (
            <div key={i} className="group bg-white/70 border border-brand-navy/10 rounded-3xl p-8 hover:bg-white hover:border-brand-navy/15 transition-all duration-200">
              <div className="w-11 h-11 bg-brand-navy border border-brand-navy/10 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:bg-brand-navy transition-colors">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-text mb-3 leading-snug">{s.headline}</h3>
              <p className="text-brand-text/55 text-sm leading-relaxed mb-5">{s.body}</p>
              <div className="flex items-center gap-2 pt-4 border-t border-brand-navy/10">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-navy/40 flex-shrink-0" />
                <span className="text-brand-text/60 text-sm font-semibold">{s.stat}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
