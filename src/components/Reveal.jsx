'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useMounted } from '../hooks/useMounted.js'

// Generic scroll-in reveal. ease-out on enter; respects reduced motion.
export default function Reveal({
  children,
  as = 'div',
  y = 28,
  delay = 0,
  duration = 0.7,
  amount = 0.3,
  className,
  ...rest
}) {
  // Gate the reduced-motion branch behind mount so SSR and first client
  // render match (avoids hydration mismatch when the user prefers reduced motion).
  const reduce = useReducedMotion()
  const mounted = useMounted()
  const prefersReduced = reduce && mounted
  const MotionTag = motion[as] || motion.div

  if (prefersReduced) {
    const Tag = as
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    )
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
