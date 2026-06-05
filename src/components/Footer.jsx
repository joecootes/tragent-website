import React from 'react'
import LogoMark from './LogoMark'
import LogoWordmark from './LogoWordmark'

const productLinks = [
  ['Product preview', '/#product'],
  ['How it helps', '/#how-it-helps'],
  ['Early access', '/#early-access'],
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
    <footer className="bg-brand-gray text-brand-text">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                <LogoMark className="w-10 h-10" />
              </div>
              <LogoWordmark className="h-[22px] w-auto" />
            </a>
            <p className="text-sm leading-relaxed text-brand-text/60 max-w-xs">
              Tragent replies to enquiries and follows up on quotes so more jobs keep moving.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-brand-text text-sm font-bold mb-5 tracking-wide">Product</h4>
            <ul className="space-y-3">
              {productLinks.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-sm text-brand-text/55 hover:text-brand-navy transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-brand-text text-sm font-bold mb-5 tracking-wide">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-sm text-brand-text/55 hover:text-brand-navy transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-brand-text text-sm font-bold mb-5 tracking-wide">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-sm text-brand-text/55 hover:text-brand-navy transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a
                href="/#early-access"
                className="inline-block bg-brand-navy text-white text-xs font-bold px-4 py-2.5 rounded-md hover:bg-brand-navy-dark transition-colors"
              >
                Join early access
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-navy/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-text/45">
            &copy; {new Date().getFullYear()} Tragent. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
