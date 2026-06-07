import React from 'react'
import LogoMark from './LogoMark'

function JobCreatedVisual() {
  return (
    <div className="mt-5 bg-white rounded-xl border border-brand-navy/10 shadow-card overflow-hidden max-w-sm">
      <div className="px-4 py-2.5 border-b border-gray-100 bg-brand-gray/50 flex items-center justify-between">
        <span className="text-[11px] font-bold text-brand-text">New job created</span>
        <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">Just now</span>
      </div>
      <div className="p-4">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-full bg-brand-navy flex items-center justify-center flex-shrink-0">
            <span className="text-white text-[11px] font-bold">SW</span>
          </div>
          <div className="flex-1">
            <div className="text-sm font-bold text-brand-text mb-0.5">Sarah Williams</div>
            <div className="text-[12px] text-brand-text/50 mb-3">Boiler replacement — 3-bed house</div>
            <div className="flex flex-wrap gap-1.5">
              <span className="text-[10px] font-semibold text-brand-navy bg-brand-navy/8 px-2.5 py-1 rounded-full">Job created</span>
              <span className="text-[10px] font-semibold text-brand-navy bg-brand-navy/8 px-2.5 py-1 rounded-full">Contact created</span>
              <span className="text-[10px] font-semibold text-brand-navy bg-brand-navy/8 px-2.5 py-1 rounded-full">Conversation attached</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ReplyVisual() {
  return (
    <div className="mt-5 bg-white rounded-xl border border-brand-navy/10 shadow-card overflow-hidden max-w-sm">
      <div className="px-4 py-2.5 border-b border-gray-100 bg-brand-gray/50 flex items-center gap-2">
        <LogoMark className="w-4 h-4" />
        <span className="text-[11px] font-bold text-brand-text">Tragent replied</span>
        <span className="ml-auto text-[10px] text-brand-text/35">0 seconds ago</span>
      </div>
      <div className="p-4 space-y-2.5">
        <div className="bg-brand-gray rounded-lg p-3">
          <p className="text-[11px] text-brand-text/60 leading-relaxed">
            Hi there, I need a quote for a new boiler. 3-bed house, current one is 12 years old.
          </p>
        </div>
        <div className="bg-brand-navy/6 border border-brand-navy/10 rounded-lg p-3">
          <p className="text-[11px] text-brand-text/75 leading-relaxed">
            Hi Sarah, thanks for getting in touch! A boiler replacement sounds straightforward — we can definitely help. What's the best number to reach you on?
          </p>
        </div>
      </div>
    </div>
  )
}

function ApprovalVisual() {
  return (
    <div className="mt-5 bg-white rounded-xl border border-brand-navy/10 shadow-card overflow-hidden max-w-sm">
      <div className="px-4 py-2.5 border-b border-gray-100 bg-brand-gray/50 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-brand-navy/50 animate-pulse" />
        <span className="text-[11px] font-bold text-brand-text">AI suggested reply — awaiting approval</span>
      </div>
      <div className="p-4">
        <div className="bg-brand-navy/6 border border-brand-navy/10 rounded-lg p-3 mb-3">
          <p className="text-[11px] text-brand-text/70 leading-relaxed">
            That works for us — I'll pencil you in for Thursday morning and send over a confirmation shortly.
          </p>
        </div>
        <div className="flex gap-2" aria-hidden="true">
          <div className="flex-1 bg-brand-navy text-white text-[11px] font-bold py-2.5 rounded-lg text-center select-none">
            Send Reply
          </div>
          <div className="px-4 border border-gray-200 text-gray-500 text-[11px] py-2.5 rounded-lg text-center select-none">
            Edit
          </div>
        </div>
      </div>
    </div>
  )
}

const steps = [
  {
    number: '01',
    label: 'Customer enquiry',
    headline: 'A customer gets in touch.',
    copy: "An enquiry lands in your inbox — email, web form, or message. You're on a job. You haven't seen it yet.",
    Visual: null,
  },
  {
    number: '02',
    label: 'Job created',
    headline: 'A job appears in Tragent.',
    copy: "Tragent detects the enquiry and creates a job immediately. Customer record created. Conversation attached. Everything in one place — before you've seen the message.",
    Visual: JobCreatedVisual,
  },
  {
    number: '03',
    label: 'Instant reply',
    headline: 'The customer hears back in seconds.',
    copy: "Tragent sends the first reply before you've had a chance to see the message. The customer knows someone's on it.",
    Visual: ReplyVisual,
  },
  {
    number: '04',
    label: "You're in control",
    headline: 'Every draft. Your approval.',
    copy: "Every AI reply is a suggestion. You see the message, you see the draft, you approve or edit before anything sends. You own the conversation.",
    Visual: ApprovalVisual,
  },
  {
    number: '05',
    label: 'The outcome',
    headline: 'More enquiries become booked jobs.',
    copy: "That's the whole workflow. From first message to booked job.",
    Visual: null,
  },
]

export default function HowTragentHelps() {
  return (
    <section id="how-it-helps" className="bg-[#F3F5F8] py-20 lg:py-24 border-y border-brand-navy/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="max-w-2xl mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 text-brand-text/45 text-xs font-bold uppercase tracking-widest mb-4">
            <div className="w-5 h-px bg-brand-navy/20" />
            The Tragent workflow
          </div>
          <h2 className="text-3xl lg:text-5xl font-black text-brand-text leading-tight tracking-[-0.04em] mb-4">
            Here's what happens when a customer gets in touch.
          </h2>
          <p className="text-lg text-brand-text/55 leading-relaxed">
            Most tradespeople lose jobs because they reply too late or forget to follow up. Tragent handles both.
          </p>
        </div>

        <div className="max-w-xl lg:max-w-2xl">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1
            return (
              <div key={step.number} className="flex gap-6">

                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-9 h-9 rounded-full bg-brand-navy flex items-center justify-center flex-shrink-0 z-10">
                    <span className="text-white text-[11px] font-black tracking-tight">{step.number}</span>
                  </div>
                  {!isLast && (
                    <div className="w-px flex-1 bg-brand-navy/15 my-2" />
                  )}
                </div>

                <div className={`${isLast ? 'pb-0' : 'pb-10 lg:pb-12'} min-w-0`}>
                  <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-brand-navy/45 mb-2 pt-1.5">
                    {step.label}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-black text-brand-text tracking-[-0.02em] mb-2">
                    {step.headline}
                  </h3>
                  <p className="text-brand-text/55 leading-relaxed">
                    {step.copy}
                  </p>
                  {step.Visual && <step.Visual />}
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
