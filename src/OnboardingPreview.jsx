/**
 * PREVIEW ONLY — Remove before production build.
 * Swap App import in main.jsx to this file to preview the onboarding screen.
 */
import React, { useState } from 'react'
import ReplyStyleCalibration from './components/onboarding/ReplyStyleCalibration'

const TRADES = [
  { key: 'electrician', label: 'Electrician' },
  { key: 'plumber', label: 'Plumber' },
  { key: 'builder', label: 'Builder' },
  { key: 'hvac', label: 'HVAC' },
  { key: 'painter', label: 'Painter' },
]

export default function OnboardingPreview() {
  const [trade, setTrade] = useState('electrician')
  const [result, setResult] = useState(null)

  if (result) {
    return (
      <div className="min-h-screen bg-brand-gray flex items-center justify-center p-8">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-black/[0.05] max-w-md w-full">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center mb-5">
            <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-xl font-black text-brand-text mb-2">Style saved</h2>
          <p className="text-gray-500 text-sm mb-5">Tragent will now reply in your selected style from day one.</p>
          <pre className="bg-brand-gray rounded-xl p-4 text-xs text-gray-600 overflow-auto">
            {JSON.stringify(result, null, 2)}
          </pre>
          <button
            onClick={() => setResult(null)}
            className="mt-4 w-full py-3 bg-brand-navy text-white rounded-xl font-bold text-sm hover:bg-brand-navy-dark transition-colors"
          >
            Back to preview
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      {/* Trade switcher for preview */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white border border-black/[0.08] rounded-full px-3 py-2 shadow-sm flex items-center gap-2">
        <span className="text-xs text-gray-400 font-medium mr-1">Preview trade:</span>
        {TRADES.map((t) => (
          <button
            key={t.key}
            onClick={() => setTrade(t.key)}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
              trade === t.key
                ? 'bg-brand-navy text-white'
                : 'text-gray-500 hover:bg-gray-100'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <ReplyStyleCalibration
        trade={trade}
        onComplete={(pref) => setResult(pref)}
        onSkip={(pref) => setResult({ ...pref, skipped: true })}
      />
    </div>
  )
}
