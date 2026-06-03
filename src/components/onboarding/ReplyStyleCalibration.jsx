import React, { useState } from 'react'
import LogoMark from '../LogoMark'
import LogoWordmark from '../LogoWordmark'
import { getCalibrationData, saveStylePreference } from '../../logic/onboardingCalibration'

/**
 * ReplyStyleCalibration
 *
 * Props:
 *   trade       — string: selected trade key (e.g. "electrician")
 *   onComplete  — fn(preference): called when user picks a style
 *   onSkip      — fn(): called if user skips (defaults to style B)
 */
export default function ReplyStyleCalibration({ trade = 'electrician', onComplete, onSkip }) {
  const [selected, setSelected] = useState(null)
  const { enquiry, styles } = getCalibrationData(trade)

  function handleConfirm() {
    if (!selected) return
    const preference = saveStylePreference(selected)
    onComplete?.(preference)
  }

  function handleSkip() {
    // Default to B (warm but efficient) if skipped
    const preference = saveStylePreference('B')
    onSkip?.(preference)
  }

  return (
    <div className="min-h-screen bg-brand-gray flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-2xl">

        {/* Progress indicator */}
        <div className="flex items-center gap-2 mb-10">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className={`h-1 rounded-full flex-1 transition-all ${
                n <= 2 ? 'bg-brand-navy' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
              <LogoMark className="w-10 h-10" />
            </div>
            <LogoWordmark className="h-5 w-auto" />
          </div>

          <h1 className="text-2xl font-black text-brand-text leading-tight mb-2">
            Which reply sounds most like you?
          </h1>
          <p className="text-gray-500 text-base leading-relaxed">
            Tragent will use your style when replying to new enquiries.
            Pick the one that feels most natural.
          </p>
        </div>

        {/* Example enquiry */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-black/[0.05] mb-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
              <svg className="w-3 h-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">New enquiry</span>
          </div>
          <p className="text-brand-text text-sm leading-relaxed">
            {enquiry.enquiry}
          </p>
        </div>

        {/* Style options */}
        <div className="flex flex-col gap-3 mb-8">
          {styles.map((style) => (
            <button
              key={style.id}
              onClick={() => setSelected(style.id)}
              className={`w-full text-left rounded-2xl border p-5 transition-all duration-150 ${
                selected === style.id
                  ? 'bg-brand-navy border-brand-navy shadow-navy'
                  : 'bg-white border-black/[0.06] shadow-sm hover:border-brand-navy/40 hover:shadow-md'
              }`}
            >
              <div className="flex items-start gap-4">
                {/* Radio indicator */}
                <div className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                  selected === style.id
                    ? 'border-white bg-white'
                    : 'border-gray-300'
                }`}>
                  {selected === style.id && (
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-navy" />
                  )}
                </div>

                <div className="flex-1">
                  <div className={`text-[11px] font-bold uppercase tracking-widest mb-2 ${
                    selected === style.id ? 'text-white/50' : 'text-gray-400'
                  }`}>
                    Option {style.id}
                  </div>
                  <p className={`text-sm leading-relaxed font-medium ${
                    selected === style.id ? 'text-white' : 'text-brand-text'
                  }`}>
                    "{style.reply}"
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Info note */}
        <div className="flex items-start gap-2.5 bg-white border border-black/[0.05] rounded-xl px-4 py-3 mb-7 shadow-sm">
          <svg className="w-4 h-4 text-brand-navy flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-xs text-gray-500 leading-relaxed">
            Your style affects tone and phrasing only. Tragent's reply logic — what it asks and when — stays the same regardless of which option you choose.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <button
            onClick={handleConfirm}
            disabled={!selected}
            className={`w-full py-4 rounded-xl font-bold text-base transition-all ${
              selected
                ? 'bg-brand-navy text-white hover:bg-brand-navy-dark shadow-navy'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {selected ? `Use this style` : 'Pick an option above'}
          </button>

          <button
            onClick={handleSkip}
            className="w-full py-3 text-gray-400 text-sm font-medium hover:text-gray-600 transition-colors"
          >
            Skip for now — I'll set this later
          </button>
        </div>
      </div>
    </div>
  )
}
