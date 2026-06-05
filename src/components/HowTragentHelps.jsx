import React from 'react'

const cards = [
  {
    title: 'Reply instantly',
    body: 'Customers hear back while you’re on site.',
  },
  {
    title: 'Follow up automatically',
    body: 'Quotes do not quietly disappear.',
  },
  {
    title: 'Stay in control',
    body: 'You approve replies before they go out.',
  },
]

export default function HowTragentHelps() {
  return (
    <section id="how-it-helps" className="bg-[#F3F5F8] py-20 lg:py-24 border-y border-brand-navy/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-2 text-brand-text/45 text-xs font-bold uppercase tracking-widest mb-4">
            <div className="w-5 h-px bg-brand-navy/20" />
            Win more work
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-brand-text leading-tight tracking-[-0.04em]">
            How Tragent helps you win more work
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-5">
          {cards.map((card, index) => (
            <article key={card.title} className="bg-white/72 border border-brand-navy/10 rounded-xl p-6 lg:p-7 shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-brand-navy text-white flex items-center justify-center text-sm font-black mb-6">
                {index + 1}
              </div>
              <h3 className="text-xl font-black text-brand-text tracking-[-0.02em] mb-3">
                {card.title}
              </h3>
              <p className="text-brand-text/58 leading-relaxed">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
