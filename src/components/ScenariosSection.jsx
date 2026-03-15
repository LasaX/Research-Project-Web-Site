import { siteData } from '../data'
import './ScenariosSection.css'

export default function ScenariosSection() {
  const { scenarios } = siteData

  return (
    <section id="scenarios" className="section scenarios">
      <div className="container">
        <span className="section-label">{scenarios.label}</span>
        <h2 className="section-title">{scenarios.title}</h2>
        <p className="section-subtitle">{scenarios.description}</p>

        <div className="scenarios__grid">
          {scenarios.items.map((s) => (
            <div key={s.id} className="scenarios__card">
              <div className="scenarios__card-head">
                <span className="scenarios__icon">{s.icon}</span>
                <span className="scenarios__id">Scenario {s.id}</span>
              </div>
              <h3 className="scenarios__card-title">{s.title}</h3>
              <p className="scenarios__card-text">{s.description}</p>
              <div className="scenarios__metric">
                <span className="scenarios__metric-label">Success Metric</span>
                <p className="scenarios__metric-text">{s.metric}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
