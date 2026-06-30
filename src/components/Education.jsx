import { useLang } from '../context/LanguageContext.jsx'
import Reveal from './Reveal.jsx'

export default function Education() {
  const { t } = useLang()

  return (
    <section className="section education" id="education">
      <div className="section-shell">
        <Reveal as="p" className="section-label">
          {t.education.label}
        </Reveal>
        <Reveal as="h2" className="section-title display" delay={0.05}>
          {t.education.title}
        </Reveal>

        <div className="education-list">
          {t.education.items.map((edu, i) => (
            <Reveal key={edu.school} className="education-item" delay={0.06 * i}>
              <div className="education-year">{edu.year}</div>
              <div className="education-detail">
                <h3 className="education-school">{edu.school}</h3>
                <p className="education-degree">{edu.degree}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
