'use client'

import { useEffect, useState } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useLang } from '../context/LanguageContext.jsx'
import { profile } from '../i18n/translations.js'
import ResumeMenu from './ResumeMenu.jsx'
import { ArrowDown, ArrowRight, MapPin } from './icons.jsx'

// Rotating role word under the name.
function RotatingRole({ roles }) {
  const [i, setI] = useState(0)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (prefersReduced || roles.length <= 1) return
    const id = setInterval(() => setI((p) => (p + 1) % roles.length), 2600)
    return () => clearInterval(id)
  }, [roles, prefersReduced])

  return (
    <span className="hero-role-rotator" aria-live="polite">
      <motion.span
        key={roles[i]}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -14 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {roles[i]}
      </motion.span>
    </span>
  )
}

export default function Hero() {
  const { t, dir } = useLang()
  const prefersReduced = useReducedMotion()
  const { scrollY } = useScroll()

  // Subtle parallax on the portrait + headline.
  const yPhoto = useTransform(scrollY, [0, 600], [0, prefersReduced ? 0 : 80])
  const yText = useTransform(scrollY, [0, 600], [0, prefersReduced ? 0 : -40])
  const opacity = useTransform(scrollY, [0, 480], [1, 0])

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.2 } },
  }
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-aurora" />
        <div className="hero-grain" />
      </div>

      <div className="hero-inner section-shell">
        <motion.div
          className="hero-content"
          style={{ y: yText }}
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p className="hero-eyebrow" variants={item}>
            <MapPin width={15} height={15} />
            {t.hero.eyebrow}
          </motion.p>

          <motion.h1 className="hero-name" variants={item}>
            {t.hero.name}
          </motion.h1>

          <motion.div className="hero-role" variants={item}>
            <RotatingRole roles={t.hero.roles} />
          </motion.div>

          <motion.p className="hero-tagline" variants={item}>
            {t.hero.tagline}
          </motion.p>

          <motion.div className="hero-open" variants={item}>
            <span className="hero-open-label">
              <span className="dot-pulse" aria-hidden="true" />
              {t.hero.openTo}
            </span>
            <span className="hero-open-roles">
              {t.hero.openRoles.map((r, idx) => (
                <span key={r} className="hero-chip">
                  {r}
                  {idx < t.hero.openRoles.length - 1 && <span className="chip-dot" aria-hidden="true">·</span>}
                </span>
              ))}
            </span>
          </motion.div>

          <motion.div className="hero-cta" variants={item}>
            <a href="#contact" className="btn btn-gold">
              {t.hero.ctaContact}
              <ArrowRight width={18} height={18} className={dir === 'rtl' ? 'flip-x' : ''} />
            </a>
            <ResumeMenu variant="ghost" />
          </motion.div>
        </motion.div>

        <motion.div className="hero-portrait" style={{ y: yPhoto }} variants={item} initial="hidden" animate="show">
          <div className="portrait-frame">
            <img
              src={profile.photo}
              alt="Linor Mor"
              loading="eager"
              width="440"
              height="540"
              onError={(e) => {
                if (profile.photoFallback && e.currentTarget.src !== window.location.origin + profile.photoFallback) {
                  e.currentTarget.src = profile.photoFallback
                }
              }}
            />
            <div className="portrait-ring" aria-hidden="true" />
          </div>
        </motion.div>
      </div>

      <motion.a href="#about" className="hero-scroll" style={{ opacity }} aria-label={t.hero.scroll}>
        <span>{t.hero.scroll}</span>
        <motion.span
          className="hero-scroll-icon"
          animate={prefersReduced ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown width={18} height={18} />
        </motion.span>
      </motion.a>
    </section>
  )
}
