import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import LanguageToggle from './LanguageToggle.jsx'

// Minimal floating language toggle (replaces the nav bar).
// Fades in after the first scroll so the hero stays clean.
export default function FloatingControls() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Always visible, but lift slightly once scrolling starts for a "settled" feel.
    const onScroll = () => setVisible(true)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.div
      className="floating-controls"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: visible ? 1 : 0, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
    >
      <LanguageToggle />
    </motion.div>
  )
}
