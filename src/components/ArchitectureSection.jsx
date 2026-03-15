import { siteData } from '../data'
import './ArchitectureSection.css'

export default function ArchitectureSection() {
  const { architecture } = siteData

  return (
    <section id="architecture" className="section arch">
      <div className="container">
        <span className="section-label">{architecture.label}</span>
        <h2 className="section-title">{architecture.title}</h2>
        <p className="section-subtitle">{architecture.description}</p>

        <div className="arch__layers">
          {architecture.layers.map((layer, i) => (
            <div key={i} className="arch__layer">
              <div className="arch__layer-icon">
                <span>{i + 1}</span>
              </div>
              <div>
                <h3 className="arch__layer-title">{layer.title}</h3>
                <p className="arch__layer-sub">{layer.subtitle}</p>
                <p className="arch__layer-text">{layer.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="arch__pipeline">
          <h3 className="arch__pipeline-title">{architecture.pipeline.title}</h3>
          <div className="arch__steps">
            {architecture.pipeline.steps.map((step, i) => (
              <div key={i} className="arch__step">
                <div className="arch__step-num">{i + 1}</div>
                <div className="arch__step-content">
                  <h4 className="arch__step-name">{step.name}</h4>
                  <p className="arch__step-detail">{step.detail}</p>
                </div>
                {i < architecture.pipeline.steps.length - 1 && (
                  <div className="arch__step-connector" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="arch__stack">
          <h3 className="arch__stack-title">Technology Stack</h3>
          <div className="arch__stack-grid">
            {architecture.techStack.map((item, i) => (
              <div key={i} className="arch__stack-item">
                <span className="arch__stack-label">{item.label}</span>
                <span className="arch__stack-value">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
