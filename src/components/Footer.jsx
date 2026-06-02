import React from 'react'
import LogoMark from './LogoMark'

const productLinks = [
  ['How It Works', '/#how-it-works'],
  ['Features', '/#features'],
  ['Customer stories', '/#testimonials'],
]

const companyLinks = [
  ['Contact', 'mailto:hello@trytragent.com'],
]

const legalLinks = [
  ['Privacy Policy', '/privacy'],
  ['Terms of Service', '/terms'],
]

export default function Footer() {
  return (
    <footer className="bg-brand-navy-dark text-white/50" style={{ backgroundColor: '#1A2038' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                <LogoMark className="w-10 h-10" variant="white" />
              </div>
              <span className="text-white font-extrabold text-xl tracking-tight">Tragent</span>
            </a>
            <p className="text-sm leading-relaxed text-white/40 max-w-xs">
              The AI admin assistant that handles your enquiries so you stop losing jobs and get your evenings back.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white text-sm font-bold mb-5 tracking-wide">Product</h4>
            <ul className="space-y-3">
              {productLinks.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-sm text-white/40 hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-sm font-bold mb-5 tracking-wide">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-sm text-white/40 hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white text-sm font-bold mb-5 tracking-wide">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-sm text-white/40 hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a
                href="mailto:hello@trytragent.com?subject=Tragent%20early%20access"
                className="inline-block bg-white text-brand-navy text-xs font-bold px-4 py-2.5 rounded-md hover:bg-brand-gray transition-colors"
              >
                Join early access
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} Tragent. All rights reserved.
          </p>
          <p className="text-xs text-white/25">
            Built for electricians, plumbers, builders, and every trade in between.
          </p>
        </div>
      </div>
    </footer>
  )
}
