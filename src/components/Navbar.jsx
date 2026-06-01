import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-navy/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="mailto:hello@trytragent.com?subject=Tragent%20early%20access" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center flex-shrink-0">
              <span className="text-brand-navy font-black text-sm leading-none">T</span>
            </div>
            <span className="text-white font-extrabold text-xl tracking-tight">Tragent</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-white/60 hover:text-white text-sm font-medium transition-colors">
              How It Works
            </a>
            <a href="#features" className="text-white/60 hover:text-white text-sm font-medium transition-colors">
              Features
            </a>
            <a href="#testimonials" className="text-white/60 hover:text-white text-sm font-medium transition-colors">
              Reviews
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-5">
            <a href="mailto:hello@trytragent.com?subject=Tragent%20early%20access" className="text-white/60 hover:text-white text-sm font-medium transition-colors">
              Log in
            </a>
            <a
              href="mailto:hello@trytragent.com?subject=Tragent%20early%20access"
              className="bg-white text-brand-navy text-sm font-bold px-5 py-2.5 rounded-md hover:bg-brand-gray transition-colors"
            >
              Join early access
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-1.5 -mr-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
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

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-brand-navy-mid border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            <a
              href="#how-it-works"
              className="text-white/70 hover:text-white text-sm font-medium py-2.5 px-3 rounded-md hover:bg-white/5 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#features"
              className="text-white/70 hover:text-white text-sm font-medium py-2.5 px-3 rounded-md hover:bg-white/5 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-white/70 hover:text-white text-sm font-medium py-2.5 px-3 rounded-md hover:bg-white/5 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Reviews
            </a>
            <div className="pt-3 mt-1 border-t border-white/10">
              <a
                href="mailto:hello@trytragent.com?subject=Tragent%20early%20access"
                className="block bg-white text-brand-navy text-sm font-bold px-5 py-3 rounded-md text-center hover:bg-brand-gray transition-colors"
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
