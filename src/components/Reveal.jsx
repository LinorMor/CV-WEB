'use client'

import { motion, useReducedMotion } from 'framer-motion'

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
  const prefersReduced = useReducedMotion()
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
