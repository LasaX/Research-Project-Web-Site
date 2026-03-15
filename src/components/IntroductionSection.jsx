import { siteData } from '../data'
import './IntroductionSection.css'

export default function IntroductionSection() {
  const { introduction } = siteData

  return (
    <section id="introduction" className="section intro">
      <div className="container">
        <span className="section-label">{introduction.label}</span>
        <h2 className="section-title">{introduction.title}</h2>
        <p className="section-subtitle">{introduction.description}</p>

        <div className="intro__problem">
          <div className="intro__problem-label">Core Research Problem</div>
          <p className="intro__problem-text">{introduction.problem}</p>
        </div>

        <div className="intro__challenges">
          <h3 className="intro__challenges-title">Key Challenges in 3D Agent Embodiment</h3>
          <div className="intro__grid">
            {introduction.challenges.map((c, i) => (
              <div key={i} className="intro__card">
                <span className="intro__card-num">{String(i + 1).padStart(2, '0')}</span>
                <h4 className="intro__card-title">{c.title}</h4>
                <p className="intro__card-text">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
