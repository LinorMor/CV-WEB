'use client'

import { useLang } from '../context/LanguageContext.jsx'
import Reveal from './Reveal.jsx'

export default function About() {
  const { t } = useLang()

  return (
    <section className="section about" id="about">
      <div className="section-shell">
        <Reveal as="p" className="section-label">
          {t.about.label}
        </Reveal>

        <Reveal as="h2" className="about-title display" delay={0.05}>
          {t.about.title}
        </Reveal>

        <div className="about-body">
          {t.about.body.map((para, i) => (
            <Reveal as="p" key={i} delay={0.1 + i * 0.08} className="about-para">
              {para}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
