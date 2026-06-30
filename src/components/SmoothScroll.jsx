'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import { useReducedMotion } from 'framer-motion'

// Wraps the app with Lenis smooth scrolling.
// Disabled entirely when the user prefers reduced motion.
export default function SmoothScroll({ children }) {
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (prefersReduced) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    let frame
    const raf = (time) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    // Anchor links scroll smoothly through Lenis.
    const onAnchorClick = (e) => {
      const link = e.target.closest('a[href^="#"]')
      if (!link) return
      const id = link.getAttribute('href')
      if (!id || id === '#') return
      const el = document.querySelector(id)
      if (!el) return
      e.preventDefault()
      lenis.scrollTo(el, { offset: -72 })
    }
    document.addEventListener('click', onAnchorClick)

    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener('click', onAnchorClick)
      lenis.destroy()
    }
  }, [prefersReduced])

  return children
}
