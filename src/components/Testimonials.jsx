import React from 'react'

const testimonials = [
  {
    quote: "Used to lose leads all the time when I was on site. Now they get a reply before I even check my phone. Won three new jobs in the first week alone.",
    name: 'Gary Mitchell',
    role: 'Electrician · Self-employed',
    initials: 'GM',
    trade: 'Electrical',
  },
  {
    quote: "I'm not spending my evenings chasing messages anymore. I finish the job, go home, and Tragent's already handled everything. It's actually changed how I feel after work.",
    name: 'Dan Hollis',
    role: 'Plumber · DH Plumbing',
    initials: 'DH',
    trade: 'Plumbing',
  },
  {
    quote: "It's like having a receptionist without the cost. Professional replies going out instantly, jobs getting organised — I just show up and do the work.",
    name: 'Kev Tanner',
    role: 'Builder · Tanner & Sons',
    initials: 'KT',
    trade: 'Building',
  },
]

function Stars() {
  return (
    <div className="flex gap-1 mb-5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-brand-navy" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
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
            What tradespeople say
            <div className="w-5 h-px bg-brand-navy/40" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-brand-text leading-tight mb-4">
            Real people. Real results.
          </h2>
          <p className="text-gray-500 text-lg">
            From electricians to builders — tradespeople using Tragent every day to win more work with less hassle.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {testimonials.map((t, i) => (
            <div key={i} className="card-premium flex flex-col">
              <Stars />
              <blockquote className="text-brand-text text-base leading-relaxed flex-1 mb-6">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">{t.initials}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold text-brand-text">{t.name}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{t.role}</div>
                </div>
                <span className="flex-shrink-0 text-[10px] font-bold text-brand-navy bg-brand-navy/8 px-2 py-1 rounded-lg">
                  {t.trade}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div className="bg-white rounded-2xl px-8 py-7 shadow-card border border-black/[0.04] flex flex-wrap justify-center gap-x-0 gap-y-6 lg:divide-x divide-gray-100">
          {[
            { value: '2,400+', label: 'Tradespeople on Tragent' },
            { value: '94%', label: 'Report fewer missed leads' },
            { value: '3.1 hrs', label: 'Admin saved per week' },
            { value: '4.9 / 5', label: 'Average review score' },
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
