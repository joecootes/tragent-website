import React, { useState, useEffect, useRef } from 'react'

// Phase timing (ms): how long to stay on each phase before advancing
const DELAYS = [
  900,   // 0 → 1: customer message arrives
  1400,  // 1 → 2: auto-reply sent label
  900,   // 2 → 3: Tragent typing indicator
  1700,  // 3 → 4: typing resolves to message
  2200,  // 4 → 5: customer replies
  1100,  // 5 → 6: draft ready appears
  3800,  // 6 → 7: hold so user can read
  700,   // 7 → 0: reset (messages fade out, cycle restarts)
]

function Avatar({ initials, dark = false }) {
  return (
    <div
      className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${dark ? 'bg-brand-navy' : 'bg-gray-200'}`}
    >
      <span className={`text-[10px] font-black ${dark ? 'text-white' : 'text-gray-500'}`}>
        {initials}
      </span>
    </div>
  )
}

function FadeItem({ show, children }) {
  return (
    <div
      className={`transition-all duration-500 ease-out ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
    >
      {children}
    </div>
  )
}

function TypingDots() {
  return (
    <div className="flex gap-1 items-center" style={{ height: 14 }}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-brand-navy/35 animate-bounce"
          style={{ animationDelay: `${i * 150}ms`, animationDuration: '800ms' }}
        />
      ))}
    </div>
  )
}

export default function HeroWorkflow() {
  const [phase, setPhase] = useState(0)
  const timer = useRef(null)

  useEffect(() => {
    const next = phase < DELAYS.length - 1 ? phase + 1 : 0
    timer.current = setTimeout(() => setPhase(next), DELAYS[phase])
    return () => clearTimeout(timer.current)
  }, [phase])

  const show = (n) => phase >= n

  return (
    <div className="relative select-none">
      {/* Status label above panel */}
      <div className="flex items-center gap-2 mb-3 px-1">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-xs text-brand-text/40 font-medium">Tragent is monitoring your inbox</span>
      </div>

      {/* Conversation panel */}
      <div
        className="bg-white rounded-2xl overflow-hidden border border-black/[0.06]"
        style={{
          width: 360,
          boxShadow: '0 20px 60px rgba(30,36,64,0.14), 0 4px 16px rgba(30,36,64,0.08)',
        }}
      >
        {/* Nav bar */}
        <div className="relative flex items-center px-4 py-3 border-b border-gray-100">
          <div className="flex items-center gap-1 text-brand-text/35">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            <span className="text-xs font-medium">Jobs</span>
          </div>
          <div className="absolute inset-x-0 text-center pointer-events-none">
            <div className="text-sm font-bold text-brand-text leading-tight">Sarah Reeves</div>
            <div className="text-[10px] text-brand-text/35">Full rewire · 3-bed house</div>
          </div>
          <div className="ml-auto">
            <span className="text-[10px] font-semibold text-orange-500 bg-orange-50 px-2 py-0.5 rounded-full">
              Needs reply
            </span>
          </div>
        </div>

        {/* Messages */}
        <div className="px-4 pt-4 pb-3 flex flex-col gap-3" style={{ minHeight: 296 }}>

          {/* Date separator */}
          <div className="flex items-center gap-2">
            <div className="flex-1 h-px bg-gray-100" />
            <span className="text-[10px] text-brand-text/25 font-medium">TODAY</span>
            <div className="flex-1 h-px bg-gray-100" />
          </div>

          {/* 1 — Customer initial enquiry */}
          <FadeItem show={show(1)}>
            <div className="flex items-end gap-2">
              <Avatar initials="SR" />
              <div>
                <div className="text-[10px] text-brand-text/30 mb-1 ml-0.5">Sarah Reeves · 4:55 pm</div>
                <div className="bg-gray-100 rounded-2xl rounded-bl-sm px-3 py-2" style={{ maxWidth: 196 }}>
                  <p className="text-[12px] text-gray-700 leading-relaxed">
                    Hi, looking for a quote on a full rewire for my 3-bed house.
                  </p>
                </div>
              </div>
            </div>
          </FadeItem>

          {/* 2 — Auto-reply sent */}
          <FadeItem show={show(2)}>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-px bg-gray-100" />
              <span className="text-[10px] text-brand-text/28 whitespace-nowrap">Auto-reply sent · 4:55 pm</span>
              <div className="flex-1 h-px bg-gray-100" />
            </div>
          </FadeItem>

          {/* 3 — Tragent typing → 4 — Tragent message */}
          <FadeItem show={show(3)}>
            <div className="flex items-end gap-2 flex-row-reverse">
              <Avatar initials="T" dark />
              <div
                className="rounded-2xl rounded-br-sm px-3 py-2 border border-brand-navy/10"
                style={{ backgroundColor: 'rgba(43,50,82,0.06)', maxWidth: 200 }}
              >
                {phase === 3 ? (
                  <TypingDots />
                ) : (
                  <p className="text-[12px] text-brand-text/75 leading-relaxed">
                    Hi Sarah! Happy to help. Could you share your postcode and when suits you for a visit?
                  </p>
                )}
              </div>
            </div>
          </FadeItem>

          {/* 5 — Customer reply */}
          <FadeItem show={show(5)}>
            <div className="flex items-end gap-2">
              <Avatar initials="SR" />
              <div>
                <div className="text-[10px] text-brand-text/30 mb-1 ml-0.5">Sarah Reeves · 6:40 pm</div>
                <div className="bg-gray-100 rounded-2xl rounded-bl-sm px-3 py-2" style={{ maxWidth: 188 }}>
                  <p className="text-[12px] text-gray-700 leading-relaxed">
                    SW12 8LP — Thursday morning works best.
                  </p>
                </div>
              </div>
            </div>
          </FadeItem>

        </div>

        {/* Draft ready footer */}
        <div
          className={`border-t border-gray-100 px-4 py-3 flex items-center gap-2.5 transition-all duration-400 ${show(6) ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-brand-navy animate-pulse" />
          <span className="text-[12px] font-semibold text-brand-text flex-1">
            Draft ready · awaiting your approval
          </span>
          <button className="bg-brand-navy text-white text-[11px] font-bold px-3 py-1.5 rounded-full pointer-events-none">
            Send
          </button>
          <button className="border border-gray-200 text-gray-400 text-[11px] px-3 py-1.5 rounded-full pointer-events-none">
            Edit
          </button>
        </div>
      </div>
    </div>
  )
}
