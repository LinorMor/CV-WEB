'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useLang } from '../context/LanguageContext.jsx'
import { profile } from '../i18n/translations.js'
import Logo from './Logo.jsx'
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
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={roles[i]}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] } }}
          exit={{ opacity: 0, y: -10, transition: { duration: 0.24, ease: [0.4, 0, 1, 1] } }}
        >
          {roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default function Hero() {
  const { t, dir } = useLang()
  const prefersReduced = useReducedMotion()
  const { scrollY } = useScroll()

  // Parallax: photo drifts up/back, copy holds — a gentle front/back play.
  const yPhoto = useTransform(scrollY, [0, 700], [0, prefersReduced ? 0 : -70])
  const scalePhoto = useTransform(scrollY, [0, 700], [1, prefersReduced ? 1 : 1.05])
  const yCopy = useTransform(scrollY, [0, 700], [0, prefersReduced ? 0 : 40])
  const fade = useTransform(scrollY, [0, 520], [1, 0])

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
  }
  const item = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-aurora" />
        <div className="hero-grain" />
      </div>

      <div className="hero-stage">
        <motion.div
          className="hero-copy"
          style={{ y: yCopy }}
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="hero-logo">
            <Logo size={54} />
          </motion.div>

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
                  {idx < t.hero.openRoles.length - 1 && (
                    <span className="chip-dot" aria-hidden="true">·</span>
                  )}
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

        {/* Cutout to the side — full and unobscured, floating on the dark. */}
        <motion.div
          className="hero-photo"
          style={{ y: yPhoto, scale: scalePhoto }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
        >
          <div className="hero-photo-glow" aria-hidden="true" />
          <img src={profile.photoCutout} alt="Linor Mor" width="900" height="1695" loading="eager" />
        </motion.div>
      </div>

      <motion.a href="#about" className="hero-scroll" style={{ opacity: fade }} aria-label={t.hero.scroll}>
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
