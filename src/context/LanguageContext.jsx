import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { translations } from '../i18n/translations.js'

const LanguageContext = createContext(null)

const STORAGE_KEY = 'linor-cv-lang'

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'en'
    return window.localStorage.getItem(STORAGE_KEY) || 'en'
  })

  const t = translations[lang]

  // Keep <html> lang/dir in sync so RTL + fonts cascade correctly.
  useEffect(() => {
    const root = document.documentElement
    root.lang = t.locale
    root.dir = t.dir
    root.setAttribute('data-lang', lang)
    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang, t])

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'he' : 'en'))
  }, [])

  return (
    <LanguageContext.Provider value={{ lang, dir: t.dir, t, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within a LanguageProvider')
  return ctx
}
