import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext.jsx'
import { useCountUp } from '../hooks/useCountUp.js'

function StatItem({ stat, active, index }) {
  const value = useCountUp(stat.value, { active, duration: 1500 + index * 120 })
  const display = Number.isInteger(stat.value) ? Math.round(value) : value.toFixed(1)

  return (
    <motion.div
      className="stat-item"
      initial={{ opacity: 0, y: 24 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="stat-value">
        <span className="stat-prefix">{stat.prefix}</span>
        <span className="stat-number">{display}</span>
        <span className="stat-suffix">{stat.suffix}</span>
      </div>
      <div className="stat-label">{stat.label}</div>
    </motion.div>
  )
}

export default function StatsBand() {
  const { t } = useLang()
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.35 })

  return (
    <section className="stats" ref={ref} aria-label={t.stats.label}>
      <div className="section-shell">
        <p className="stats-label">{t.stats.label}</p>
        <div className="stats-grid">
          {t.stats.items.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} active={inView} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
