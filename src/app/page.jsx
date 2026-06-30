'use client'

import { LanguageProvider, useLang } from '../context/LanguageContext.jsx'
import SmoothScroll from '../components/SmoothScroll.jsx'
import ScrollProgress from '../components/ScrollProgress.jsx'
import FloatingControls from '../components/FloatingControls.jsx'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import StatsBand from '../components/StatsBand.jsx'
import Timeline from '../components/Timeline.jsx'
import Skills from '../components/Skills.jsx'
import Education from '../components/Education.jsx'
import Contact from '../components/Contact.jsx'

function Site() {
  const { lang } = useLang()

  return (
    <SmoothScroll>
      <ScrollProgress />
      <FloatingControls />
      {/* key=lang lets entrance animations replay on language switch */}
      <main key={lang}>
        <Hero />
        <About />
        <StatsBand />
        <Timeline />
        <Skills />
        <Education />
        <Contact />
      </main>
    </SmoothScroll>
  )
}

export default function Page() {
  return (
    <LanguageProvider>
      <Site />
    </LanguageProvider>
  )
}
