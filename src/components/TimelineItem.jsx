'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useMediaQuery } from '../hooks/useMediaQuery.js'

// One role on the centered timeline. Cards alternate sides around the
// central axis; the node sits on the axis. On mobile everything collapses
// to a single column with the axis on the inline-start edge.
export default function TimelineItem({ item, index }) {
  const prefersReduced = useReducedMotion()
  const isMobile = useMediaQuery('(max-width: 980px)')
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 })

  const side = index % 2 === 0 ? 'left' : 'right'
  // Desktop: cards slide in from their side. Mobile (single column):
  // a clean upward slide, no horizontal offset.
  const dir = side === 'left' ? -1 : 1
  const offsetX = prefersReduced || isMobile ? 0 : dir * 56
  const offsetY = prefersReduced ? 0 : isMobile ? 28 : 14

  return (
    <li className={`timeline-item timeline-${side}`} ref={ref}>
      <div className="timeline-node-wrap">
        <motion.span
          className="timeline-node"
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease: 'backOut' }}
        >
          <span className="timeline-node-core" />
        </motion.span>
      </div>

      <motion.article
        className="timeline-card"
        initial={{ opacity: 0, x: offsetX, y: offsetY }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration: 0.75, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="timeline-period">{item.period}</div>

        <header className="timeline-head">
          <h3 className="timeline-company">
            {item.company}
            {item.acquired && <span className="timeline-acquired">{item.acquired}</span>}
          </h3>
          <p className="timeline-role">{item.role}</p>
        </header>

        <p className="timeline-summary">{item.summary}</p>

        <ul className="timeline-bullets">
          {item.bullets.map((b, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: prefersReduced || isMobile ? 0 : dir * 12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.06, ease: 'easeOut' }}
            >
              {b}
            </motion.li>
          ))}
        </ul>

        <div className="timeline-tags">
          {item.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </motion.article>
    </li>
  )
}
