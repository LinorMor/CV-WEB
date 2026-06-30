import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

// Counts from 0 -> target once `active` becomes true.
// Respects prefers-reduced-motion (jumps straight to the value).
export function useCountUp(target, { duration = 1600, active = false } = {}) {
  const prefersReduced = useReducedMotion()
  const [value, setValue] = useState(0)
  const startedRef = useRef(false)
  const rafRef = useRef(null)

  useEffect(() => {
    if (!active || startedRef.current) return
    startedRef.current = true

    if (prefersReduced) {
      setValue(target)
      return
    }

    const start = performance.now()
    // easeOutExpo — fast then gently settles, feels "alive"
    const ease = (x) => (x === 1 ? 1 : 1 - Math.pow(2, -10 * x))

    const tick = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      setValue(target * ease(progress))
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setValue(target)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [active, target, duration, prefersReduced])

  return value
}
