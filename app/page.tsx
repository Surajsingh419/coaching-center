'use client'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Courses from './components/Courses'
import WhyChooseUs from './components/WhyChooseUs'
import Results from './components/Results'
import AdmissionForm from './components/AdmissionForm'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <WhyChooseUs />
      <Results />
      <AdmissionForm />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
