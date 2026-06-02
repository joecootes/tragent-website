import React from 'react'

const trustPoints = [
  { value: 'Early access', label: 'Built for working tradespeople' },
  { value: 'Gmail first', label: 'Designed around real enquiry inboxes' },
  { value: 'Human control', label: 'Draft, edit, approve, or send yourself' },
  { value: 'Privacy-aware', label: 'Clear disconnect and account deletion flows' },
]

export default function TrustBar() {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8">
          {trustPoints.map((s, i) => (
            <div key={i} className="flex items-center gap-4">
              {i > 0 && <div className="hidden lg:block w-px h-8 bg-gray-150" style={{ backgroundColor: '#e8eaed' }} />}
              <div className="text-center lg:text-left">
                <div className="text-xl font-black text-brand-navy leading-none mb-0.5">{s.value}</div>
                <div className="text-xs text-gray-500 font-medium">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
