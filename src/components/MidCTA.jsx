import React from 'react'

export default function MidCTA() {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden bg-[#F3F5F8] border-y border-brand-navy/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="quiet-card px-8 py-8 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-brand-text/45 text-xs font-bold uppercase tracking-widest mb-4">
              <div className="w-5 h-px bg-brand-navy/20" />
              Early access
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-brand-text leading-tight mb-3 tracking-[-0.03em]">
              Keep the job warm while you’re still on site.
            </h2>
            <p className="text-brand-text/55 text-lg leading-relaxed">
              Tragent helps you respond, organise, and follow up without turning every evening into admin time.
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-end gap-3 flex-shrink-0">
            <a
              href="mailto:hello@trytragent.com?subject=Tragent%20early%20access"
              className="bg-brand-navy text-white font-bold text-base px-9 py-4 rounded-full hover:bg-brand-navy transition-all whitespace-nowrap"
            >
              Join early access
            </a>
            <span className="text-brand-text/35 text-sm">Private beta places opening soon.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
