'use client'

import { useLang } from '../context/LanguageContext.jsx'
import { Globe } from './icons.jsx'

// EN / HE pill toggle.
export default function LanguageToggle() {
  const { lang, toggleLang, t } = useLang()

  return (
    <button
      type="button"
      className="lang-toggle"
      onClick={toggleLang}
      aria-label={t.a11y.toggleLanguage}
      title={t.a11y.toggleLanguage}
    >
      <Globe width={16} height={16} />
      <span className={lang === 'en' ? 'active' : ''}>EN</span>
      <span className="lang-sep" aria-hidden="true">/</span>
      <span className={lang === 'he' ? 'active' : ''}>עב</span>
    </button>
  )
}
