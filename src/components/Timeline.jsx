'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { useLang } from '../context/LanguageContext.jsx'
import Reveal from './Reveal.jsx'
import TimelineItem from './TimelineItem.jsx'

export default function Timeline() {
  const { t } = useLang()
  const containerRef = useRef(null)

  // Drive the gold fill line from the container's scroll progress.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 60%'],
  })
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 28, restDelta: 0.001 })

  return (
    <section className="section timeline-section" id="work">
      <div className="section-shell">
        <Reveal as="p" className="section-label">
          {t.work.label}
        </Reveal>
        <Reveal as="h2" className="section-title display" delay={0.05}>
          {t.work.title}
        </Reveal>

        <div className="timeline" ref={containerRef}>
          <div className="timeline-track" aria-hidden="true">
            <motion.div className="timeline-fill" style={{ scaleY: fill }} />
          </div>

          <ol className="timeline-list">
            {t.work.items.map((item, i) => (
              <TimelineItem key={item.id} item={item} index={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
