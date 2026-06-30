import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext.jsx'
import { profile } from '../i18n/translations.js'
import { Download, Chevron } from './icons.jsx'

// Download button that opens a small EN / HE language picker.
export default function ResumeMenu({ variant = 'solid' }) {
  const { t, dir } = useLang()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const onDocClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onDocClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  const options = [
    { href: profile.resumeEn, label: t.resume.en, file: 'Linor-Mor-CV-EN.pdf' },
    { href: profile.resumeHe, label: t.resume.he, file: 'Linor-Mor-CV-HE.pdf' },
  ]

  return (
    <div className="resume-menu" ref={ref}>
      <button
        type="button"
        className={`btn ${variant === 'solid' ? 'btn-gold' : 'btn-ghost'} resume-trigger`}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <Download width={18} height={18} />
        <span>{t.resume.menuLabel}</span>
        <Chevron
          width={16}
          height={16}
          style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="resume-dropdown"
            role="menu"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
            style={{ [dir === 'rtl' ? 'left' : 'right']: 0 }}
          >
            {options.map((opt) => (
              <a
                key={opt.href}
                href={opt.href}
                download={opt.file}
                role="menuitem"
                className="resume-option"
                onClick={() => setOpen(false)}
              >
                <Download width={16} height={16} />
                {opt.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
