import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Problems from './components/Problems'
import Solution from './components/Solution'
import HowItWorks from './components/HowItWorks'
import ProductVisual from './components/ProductVisual'
import Benefits from './components/Benefits'
import MidCTA from './components/MidCTA'
import Testimonials from './components/Testimonials'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Hero />
      <TrustBar />
      <Problems />
      <Solution />
      <HowItWorks />
      <ProductVisual />
      <Benefits />
      <MidCTA />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  )
}
