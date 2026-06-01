import React from 'react'

function InboxPanel() {
  const items = [
    { initials: 'MT', name: 'Mark Thompson', msg: 'Thanks, looking forward to the visit', time: '2m', status: 'Replied', statusColor: 'text-emerald-600 bg-emerald-50' },
    { initials: 'SW', name: 'Sarah Williams', msg: "Hi, need a quote for a new boiler...", time: '11m', status: 'New', statusColor: 'text-brand-navy bg-brand-navy/8' },
    { initials: 'RB', name: 'Rob Baker', msg: 'Can you fit me in this week?', time: '34m', status: 'New', statusColor: 'text-brand-navy bg-brand-navy/8' },
    { initials: 'CL', name: 'Carol Lawson', msg: 'Quote accepted — when can you start?', time: '1h', status: 'Confirmed', statusColor: 'text-purple-600 bg-purple-50' },
    { initials: 'DH', name: 'David Hughes', msg: 'Just following up on the estimate...', time: '2h', status: 'Chasing', statusColor: 'text-amber-600 bg-amber-50' },
  ]

  return (
    <div className="bg-white rounded-xl border border-gray-150 shadow-lg overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between bg-brand-gray/60">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
          <span className="text-xs font-bold text-brand-text">Enquiry Inbox</span>
        </div>
        <span className="bg-brand-navy text-white text-[10px] font-black px-2 py-0.5 rounded-full">2 unread</span>
      </div>
      <div className="divide-y divide-gray-50">
        {items.map((item, i) => (
          <div key={i} className={`px-4 py-3 flex items-center gap-3 hover:bg-brand-gray/40 transition-colors cursor-pointer ${i < 2 ? 'bg-brand-navy/3' : ''}`}>
            <div className="w-8 h-8 rounded-full bg-brand-navy flex items-center justify-center flex-shrink-0">
              <span className="text-white text-[10px] font-bold">{item.initials}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-xs font-semibold text-brand-text truncate">{item.name}</span>
                <span className="text-[10px] text-gray-400 flex-shrink-0 ml-2">{item.time}</span>
              </div>
              <p className="text-[11px] text-gray-500 truncate">{item.msg}</p>
            </div>
            <span className={`flex-shrink-0 text-[9px] font-bold px-2 py-0.5 rounded-full ${item.statusColor}`}>
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ReplyPanel() {
  return (
    <div className="bg-white rounded-xl border border-gray-150 shadow-lg overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-100 bg-brand-gray/60 flex items-center gap-2">
        <div className="w-5 h-5 bg-brand-navy rounded flex items-center justify-center">
          <span className="text-white text-[9px] font-black">T</span>
        </div>
        <span className="text-xs font-bold text-brand-text">AI Suggested Reply</span>
        <div className="ml-auto flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] text-gray-400">Live</span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-7 h-7 rounded-full bg-brand-navy flex items-center justify-center">
            <span className="text-white text-[10px] font-bold">SW</span>
          </div>
          <div>
            <div className="text-xs font-semibold text-brand-text">Sarah Williams</div>
            <div className="text-[10px] text-gray-400">New enquiry · via web form</div>
          </div>
        </div>
        <div className="bg-brand-gray border border-gray-100 rounded-lg p-3 mb-3">
          <p className="text-[11px] text-gray-600 leading-relaxed">
            Hi there, I need a quote for a new boiler. 3-bed house, current one is 12 years old. Looking to get done asap.
          </p>
        </div>
        <div className="bg-brand-navy/5 border border-brand-navy/10 rounded-lg p-3 mb-3">
          <p className="text-[11px] text-gray-700 leading-relaxed">
            Hi Sarah, thanks for getting in touch! A boiler replacement sounds straightforward — we can definitely help. I'll have someone call you in the next hour to get a few more details and get you booked in for a free survey. What's the best number?
          </p>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 bg-brand-navy text-white text-[11px] font-bold py-2 rounded-md">
            Send Reply
          </button>
          <button className="px-3 border border-gray-200 text-gray-500 text-[11px] py-2 rounded-md">
            Edit
          </button>
        </div>
      </div>
    </div>
  )
}

function JobBoard() {
  const jobs = [
    { name: 'Mark Thompson', job: 'Full rewire — 3 bed semi', date: 'Mon 27 Jan', status: 'Confirmed', color: 'bg-emerald-100 text-emerald-700' },
    { name: 'Carol Lawson', job: 'Consumer unit upgrade', date: 'Tue 28 Jan', status: 'Confirmed', color: 'bg-emerald-100 text-emerald-700' },
    { name: 'James Patel', job: 'Boiler service + flush', date: 'Wed 29 Jan', status: 'Quoted', color: 'bg-brand-navy/10 text-brand-navy' },
    { name: 'Lisa Roberts', job: 'Bathroom rewire', date: 'Thu 30 Jan', status: 'Pending', color: 'bg-amber-100 text-amber-700' },
    { name: 'David Hughes', job: 'EV charger installation', date: 'Fri 31 Jan', status: 'Quoted', color: 'bg-brand-navy/10 text-brand-navy' },
  ]

  return (
    <div className="bg-white rounded-xl border border-gray-150 shadow-lg overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-100 bg-brand-gray/60 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4 text-brand-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <span className="text-xs font-bold text-brand-text">Job Overview</span>
        </div>
        <span className="text-[10px] text-gray-400 font-medium">Week of Jan 27</span>
      </div>
      <div className="divide-y divide-gray-50">
        {jobs.map((job, i) => (
          <div key={i} className="px-4 py-3 flex items-center gap-3 hover:bg-brand-gray/40 cursor-pointer transition-colors">
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold text-brand-text mb-0.5">{job.name}</div>
              <div className="text-[11px] text-gray-500 truncate">{job.job}</div>
            </div>
            <div className="text-[10px] text-gray-400 flex-shrink-0">{job.date}</div>
            <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${job.color}`}>
              {job.status}
            </span>
          </div>
        ))}
      </div>
      <div className="px-4 py-3 border-t border-gray-100 bg-brand-gray/30 flex items-center justify-between">
        <span className="text-[11px] text-gray-500">5 jobs this week</span>
        <div className="flex items-center gap-3 text-[10px] text-gray-400">
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />2 confirmed</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-brand-navy inline-block" />2 quoted</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />1 pending</span>
        </div>
      </div>
    </div>
  )
}

export default function ProductVisual() {
  return (
    <section className="bg-brand-navy-dark py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: '#1A2038' }}>
      <div className="absolute inset-0 bg-grid-white pointer-events-none opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-navy/60 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-white/40 text-xs font-bold uppercase tracking-widest mb-4">
            <div className="w-6 h-px bg-white/30" />
            The Dashboard
            <div className="w-6 h-px bg-white/30" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight mb-4">
            Everything in one place.
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">
            Your enquiries, replies, jobs, and follow-ups — all organised and under control.
            No more switching between apps wondering what you've missed.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <InboxPanel />
          <ReplyPanel />
          <JobBoard />
        </div>
      </div>
    </section>
  )
}
