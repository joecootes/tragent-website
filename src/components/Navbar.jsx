import React, { useState, useEffect } from 'react'
import LogoMark from './LogoMark'
import LogoWordmark from './LogoWordmark'

export default function Navbar({ variant = 'light' }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isSolid = variant === 'solid'
  const useDarkText = !isSolid
  const navShell = isSolid
    ? 'bg-brand-navy/95 backdrop-blur-md shadow-lg shadow-black/20'
    : scrolled
      ? 'bg-[#F3F5F8]/92 backdrop-blur-md border-b border-brand-navy/10'
      : 'bg-transparent'
  const navText = useDarkText ? 'text-brand-text/60 hover:text-brand-text' : 'text-white/60 hover:text-white'
  const logoVariant = useDarkText ? 'navy' : 'white'
  const ctaClass = useDarkText
    ? 'bg-brand-navy text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-brand-navy transition-colors'
    : 'bg-white text-brand-navy text-sm font-bold px-5 py-2.5 rounded-full hover:bg-brand-gray transition-colors'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navShell}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="/" className="flex items-center gap-[7px]">
            <div className="h-[31px] flex items-center justify-center flex-shrink-0 translate-y-[-1px]">
              <LogoMark className="h-[31px] w-auto" variant={logoVariant} />
            </div>
            <LogoWordmark className="h-[22.5px] w-auto" variant={logoVariant} />
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="/#how-it-works" className={`${navText} text-sm font-medium transition-colors`}>How It Works</a>
            <a href="/#features" className={`${navText} text-sm font-medium transition-colors`}>Features</a>
            <a href="/#testimonials" className={`${navText} text-sm font-medium transition-colors`}>Reviews</a>
          </div>

          <div className="hidden md:flex items-center gap-5">
            <a href="mailto:hello@trytragent.com?subject=Tragent%20early%20access" className={ctaClass}>
              Join early access
            </a>
          </div>

          <button
            className={`md:hidden p-1.5 -mr-1.5 ${useDarkText ? 'text-brand-text' : 'text-white'}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={`${isSolid ? 'bg-brand-navy-mid border-white/10' : 'bg-[#F3F5F8] border-brand-navy/10'} md:hidden border-t`}>
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {[
              ['How It Works', '/#how-it-works'],
              ['Features', '/#features'],
              ['Reviews', '/#testimonials'],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className={`${isSolid ? 'text-white/70 hover:text-white hover:bg-white/5' : 'text-brand-text/70 hover:text-brand-text hover:bg-brand-navy/5'} text-sm font-medium py-2.5 px-3 rounded-md transition-colors`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <div className={`${isSolid ? 'border-white/10' : 'border-brand-navy/10'} pt-3 mt-1 border-t`}>
              <a
                href="mailto:hello@trytragent.com?subject=Tragent%20early%20access"
                className={`${isSolid ? 'bg-white text-brand-navy hover:bg-brand-gray' : 'bg-brand-navy text-white hover:bg-brand-navy'} block text-sm font-bold px-5 py-3 rounded-full text-center transition-colors`}
              >
                Join early access
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
