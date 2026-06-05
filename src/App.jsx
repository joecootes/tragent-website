import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductVisual from './components/ProductVisual'
import HowTragentHelps from './components/HowTragentHelps'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import { PrivacyPolicy, TermsOfService } from './components/LegalPage'

function LandingPage() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Hero />
      <ProductVisual />
      <HowTragentHelps />
      <FinalCTA />
      <Footer />
    </div>
  )
}

function NotFoundPage() {
  return (
    <div className="font-sans antialiased bg-brand-navy min-h-screen text-white flex flex-col">
      <Navbar variant="solid" />
      <main className="flex-1 flex items-center justify-center px-6 pt-28 pb-16">
        <div className="max-w-lg text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4">404</p>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-5">Page not found.</h1>
          <p className="text-white/55 text-lg leading-relaxed mb-8">
            That page does not exist, or it may have moved. Head back to Tragent and we’ll get you pointed the right way.
          </p>
          <a href="/" className="inline-flex bg-white text-brand-navy font-bold px-7 py-3.5 rounded-xl hover:bg-brand-gray transition-colors">
            Back to homepage
          </a>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  const path = window.location.pathname

  if (path === '/') return <LandingPage />
  if (path === '/privacy') return <PrivacyPolicy />
  if (path === '/terms') return <TermsOfService />

  return <NotFoundPage />
}
