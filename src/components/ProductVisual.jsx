import React from 'react'

/*
 * SCREENSHOTS — /public/screenshots/
 *   conversation.png   Dan Holloway conversation thread
 *   today.png          Today screen (Tragent Active, Today's Brief, Needs attention, New enquiries)
 *   new-enquiry.png    Jobs list with New Enquiry bottom sheet overlay
 *
 * All at 1206×2622px (iPhone 3x retina).
 * imgTop is negative = pan down into the image.
 * containerHeight defines the visible crop window.
 */

function Crop({ src, alt, containerWidth, containerHeight, imgWidth, imgTop = 0 }) {
  return (
    <div
      className="relative overflow-hidden flex-shrink-0 select-none"
      style={{
        width: containerWidth,
        height: containerHeight,
        borderRadius: 24,
        boxShadow: '0 32px 80px rgba(0,0,0,0.55), 0 8px 24px rgba(0,0,0,0.3)',
      }}
    >
      <img
        src={src}
        alt={alt}
        draggable={false}
        style={{
          position: 'absolute',
          width: imgWidth ?? containerWidth,
          top: imgTop,
          left: 0,
          display: 'block',
        }}
      />
    </div>
  )
}

function Label({ children }) {
  return (
    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/30 mb-4">
      {children}
    </p>
  )
}

function Headline({ children }) {
  return (
    <h3 className="text-[38px] lg:text-[48px] font-black text-white leading-[1.03] tracking-[-0.035em] mb-4 text-balance">
      {children}
    </h3>
  )
}

function Sub({ children }) {
  return (
    <p className="text-white/50 text-lg leading-relaxed max-w-[340px]">
      {children}
    </p>
  )
}

function Divider() {
  return <div className="w-full h-px bg-white/[0.07]" />
}

export default function ProductVisual() {
  return (
    <section id="product" className="relative overflow-hidden" style={{ backgroundColor: '#1A2038' }}>
      <div className="absolute inset-0 bg-grid-white pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 pt-20">

        {/* ── Block 1: Never miss a lead ────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pb-20">

          {/* Text */}
          <div className="flex flex-col justify-center">
            <Label>AI replies instantly</Label>
            <Headline>Never miss a lead.</Headline>
            <Sub>
              Tragent replies instantly, gathers the information you need,
              and drafts the next response for your approval.
            </Sub>
          </div>

          {/* Screenshot: conversation thread */}
          <div className="flex justify-center lg:justify-end lg:-mr-6">
            <Crop
              src="/screenshots/conversation.png"
              alt="Tragent conversation showing enquiry, auto-reply, customer response and draft ready"
              containerWidth={295}
              containerHeight={590}
              imgWidth={295}
              imgTop={0}
            />
          </div>

        </div>

        <Divider />

        {/* ── Block 2: Your daily view ──────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20">

          {/* Screenshot: Today's Brief → New enquiries (combined tall crop) */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <Crop
              src="/screenshots/today.png"
              alt="Tragent Today screen showing Today's Brief, Needs attention and New enquiries"
              containerWidth={320}
              containerHeight={555}
              imgWidth={320}
              imgTop={-110}
            />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <Label>Your daily view</Label>
            <Headline>See what needs you. Ignore the rest.</Headline>
            <Sub>
              Every morning, Tragent gives you a clear picture — what needs
              your attention, and what it's already handling.
            </Sub>
          </div>

        </div>

        <Divider />

        {/* ── Block 3: Phone calls & referrals ─────────────────── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-20 pb-20">

          {/* Text */}
          <div className="flex flex-col justify-center">
            <Label>Phone calls &amp; referrals</Label>
            <Headline>Someone called. Don't lose the lead.</Headline>
            <Sub>
              Log calls, referrals and walk-ins in seconds.
              Tragent keeps everything in one place alongside email enquiries.
            </Sub>
          </div>

          {/* Screenshot: New Enquiry bottom sheet */}
          <div className="flex justify-center lg:justify-end lg:-mr-6">
            <Crop
              src="/screenshots/new-enquiry.png"
              alt="New Enquiry form with customer name, email and phone fields"
              containerWidth={295}
              containerHeight={430}
              imgWidth={295}
              imgTop={-230}
            />
          </div>

        </div>

      </div>
    </section>
  )
}
