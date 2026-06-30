import { useLang } from '../context/LanguageContext.jsx'
import Reveal from './Reveal.jsx'

export default function Skills() {
  const { t } = useLang()

  return (
    <section className="section skills" id="skills">
      <div className="section-shell">
        <Reveal as="p" className="section-label">
          {t.skills.label}
        </Reveal>
        <Reveal as="h2" className="section-title display" delay={0.05}>
          {t.skills.title}
        </Reveal>

        <div className="skills-grid">
          {t.skills.groups.map((group, gi) => (
            <Reveal key={group.name} className="skill-group" delay={0.06 * gi}>
              <h3 className="skill-group-name">{group.name}</h3>
              <ul className="skill-list">
                {group.items.map((item) => (
                  <li key={item} className="skill-pill">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
