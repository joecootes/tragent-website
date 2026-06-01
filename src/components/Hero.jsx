import React from 'react'

function MockPanel() {
  return (
    <div className="relative">
      {/* Glow */}
      <div className="absolute -inset-6 bg-white/6 rounded-3xl blur-3xl pointer-events-none" />

      <div className="relative bg-white rounded-2xl shadow-panel overflow-hidden ring-1 ring-white/10">
        {/* Browser bar */}
        <div className="bg-brand-navy-mid px-4 py-3 flex items-center gap-3 border-b border-white/5">
          <div className="flex gap-1.5 flex-shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/15" />
          </div>
          <div className="flex-1 bg-brand-navy/50 rounded px-3 py-1 flex items-center gap-2 max-w-[240px]">
            <div className="w-2 h-2 rounded-full bg-white/20 flex-shrink-0" />
            <span className="text-white/35 text-[11px]">app.tragent.io/enquiries</span>
          </div>
        </div>

        <div className="flex" style={{ minHeight: '340px' }}>
          {/* Enquiry list */}
          <div className="w-[42%] border-r border-gray-100 flex flex-col">
            <div className="px-3 py-2.5 bg-brand-gray/70 border-b border-gray-100 flex items-center justify-between">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Inbox</span>
              <span className="bg-brand-navy text-white text-[9px] font-black px-2 py-0.5 rounded-full">3 new</span>
            </div>
            <div className="flex-1 divide-y divide-gray-50/80">
              {[
                { i: 'MT', name: 'Mark Thompson', msg: 'Need a quote for rewiring...', t: '2m', tag: 'New', c: 'bg-emerald-100 text-emerald-700', active: true },
                { i: 'SW', name: 'Sarah Williams', msg: 'Any slots next week for boiler...', t: '18m', tag: 'New', c: 'bg-emerald-100 text-emerald-700', active: false },
                { i: 'JP', name: 'James Patel', msg: 'Following up on the quote...', t: '1h', tag: 'Follow-up', c: 'bg-amber-100 text-amber-700', active: false },
                { i: 'LR', name: 'Lisa Roberts', msg: 'When can you start the bathroom?', t: '3h', tag: 'Booked', c: 'bg-blue-100 text-blue-700', active: false },
              ].map((item, idx) => (
                <div key={idx} className={`px-3 py-2.5 cursor-pointer ${item.active ? 'bg-brand-navy/5 border-l-[3px] border-brand-navy' : 'hover:bg-gray-50/80'}`}>
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-brand-navy flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-[9px] font-bold">{item.i}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="text-[11px] font-semibold text-gray-800 truncate">{item.name}</span>
                        <span className="text-[9px] text-gray-400 flex-shrink-0">{item.t}</span>
                      </div>
                      <p className="text-[10px] text-gray-500 truncate">{item.msg}</p>
                      <span className={`inline-block mt-1 text-[9px] font-semibold px-1.5 py-0.5 rounded-full ${item.c}`}>{item.tag}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI reply panel */}
          <div className="flex-1 flex flex-col min-w-0">
            <div className="px-4 py-2.5 bg-brand-gray/50 border-b border-gray-100 flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-brand-navy flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[10px] font-bold">MT</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-bold text-gray-900">Mark Thompson</div>
                <div className="text-[10px] text-gray-400">via Web Form · 2 min ago</div>
              </div>
              <span className="text-[9px] bg-emerald-100 text-emerald-700 font-bold px-2 py-0.5 rounded-full flex-shrink-0">Replied ✓</span>
            </div>

            <div className="flex-1 p-4 flex flex-col gap-3">
              <div>
                <div className="text-[10px] text-gray-400 font-medium mb-1.5">Original enquiry</div>
                <div className="bg-brand-gray rounded-xl p-3 border border-gray-100">
                  <p className="text-[11px] text-gray-600 leading-relaxed">Hi, looking for a quote on rewiring a 3-bed semi in Manchester. Available weekdays.</p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1.5 mb-1.5">
                  <div className="w-4 h-4 bg-brand-navy rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-[8px] font-black">T</span>
                  </div>
                  <span className="text-[10px] font-bold text-brand-navy">Tragent drafted a reply</span>
                  <div className="ml-auto flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[9px] text-gray-400">AI</span>
                  </div>
                </div>
                <div className="bg-brand-navy/5 border border-brand-navy/10 rounded-xl p-3">
                  <p className="text-[11px] text-gray-700 leading-relaxed">Hi Mark, thanks for getting in touch! We'd love to help with your rewiring. I'll pass your details to the team — someone will call shortly to arrange a free site visit. Best number to reach you?</p>
                </div>
              </div>
              <div className="flex gap-2 mt-auto">
                <button className="flex-1 bg-brand-navy text-white text-[11px] font-bold py-2 rounded-lg">Send Reply</button>
                <button className="px-3 border border-gray-200 text-gray-500 text-[11px] py-2 rounded-lg">Edit</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating stat */}
      <div className="absolute -bottom-3 -right-3 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-navy flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        Replied in 47 seconds
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="bg-brand-navy min-h-screen flex items-center pt-20 pb-24 relative overflow-hidden">
      {/* Depth layers */}
      <div className="absolute inset-0 bg-grid-white pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-brand-navy-mid/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Left: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white/75 text-xs font-semibold tracking-wide">AI Admin Assistant for Tradespeople</span>
            </div>

            <h1 className="text-[42px] sm:text-5xl xl:text-[60px] font-black text-white leading-[1.04] tracking-tight mb-6">
              Stop losing jobs<br />
              because you didn't<br />
              <span className="text-white/50">reply fast enough.</span>
            </h1>

            <p className="text-lg text-white/55 leading-relaxed mb-9 max-w-[460px]">
              Tragent handles your enquiries and admin so you win more work —
              without spending every evening on your phone.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a href="mailto:hello@trytragent.com?subject=Tragent%20early%20access" className="bg-white text-brand-navy font-bold text-base px-8 py-4 rounded-xl hover:bg-brand-gray transition-all hover:shadow-navy text-center">
                Join early access
              </a>
              <a href="#how-it-works" className="flex items-center justify-center gap-2 bg-white/8 border border-white/15 text-white font-semibold text-base px-8 py-4 rounded-xl hover:bg-white/12 transition-colors text-center">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                See How It Works
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {['No setup fees', '14-day free trial', 'Cancel anytime'].map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-white/35 text-sm">
                  <svg className="w-3.5 h-3.5 text-white/50 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product mock */}
          <div className="relative hidden lg:block">
            <MockPanel />
          </div>
        </div>
      </div>
    </section>
  )
}
