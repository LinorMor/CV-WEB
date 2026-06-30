'use client'

import { useLang } from '../context/LanguageContext.jsx'
import { profile } from '../i18n/translations.js'
import Reveal from './Reveal.jsx'
import ResumeMenu from './ResumeMenu.jsx'
import { Mail, LinkedIn, MapPin, ArrowRight } from './icons.jsx'

export default function Contact() {
  const { t, dir } = useLang()
  const year = new Date().getFullYear()

  return (
    <section className="section contact" id="contact">
      <div className="contact-glow" aria-hidden="true" />
      <div className="section-shell">
        <Reveal as="p" className="section-label">
          {t.contact.label}
        </Reveal>
        <Reveal as="h2" className="contact-title display" delay={0.05}>
          {t.contact.title}
        </Reveal>
        <Reveal as="p" className="contact-body" delay={0.1}>
          {t.contact.body}
        </Reveal>

        <Reveal className="contact-actions" delay={0.16}>
          <a href={`mailto:${profile.email}`} className="btn btn-gold">
            <Mail width={18} height={18} />
            {t.contact.emailCta}
            <ArrowRight width={16} height={16} className={dir === 'rtl' ? 'flip-x' : ''} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <LinkedIn width={17} height={17} />
            {t.contact.linkedinCta}
          </a>
          <ResumeMenu variant="ghost" />
        </Reveal>

        <Reveal className="contact-meta" delay={0.22}>
          <a href={`mailto:${profile.email}`} className="contact-meta-item">
            <Mail width={16} height={16} />
            {profile.email}
          </a>
          <span className="contact-meta-item">
            <MapPin width={16} height={16} />
            {profile.location}
          </span>
        </Reveal>
      </div>

      <footer className="footer">
        <span>© {year} Linor Mor</span>
        <span className="footer-dot" aria-hidden="true">·</span>
        <span>{t.contact.footer}</span>
      </footer>
    </section>
  )
}
