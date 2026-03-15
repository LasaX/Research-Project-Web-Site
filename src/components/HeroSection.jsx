import { siteData } from '../data'
import './HeroSection.css'

export default function HeroSection() {
  const { hero, project } = siteData

  const handleScroll = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero">
      <div className="hero__bg">
        <div className="hero__grid" />
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
      </div>
      <div className="hero__content container">
        <div className="hero__text">
          <span className="hero__badge">{hero.tagline}</span>
          <p className="hero__university">
            {project.university} &middot; {project.faculty}
          </p>
          <h1 className="hero__title">{hero.headline}</h1>
          <p className="hero__description">{hero.description}</p>
          <div className="hero__actions">
            <a
              href={hero.ctaPrimary.href}
              className="btn btn-primary"
              onClick={(e) => handleScroll(e, hero.ctaPrimary.href)}
            >
              {hero.ctaPrimary.label}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <a
              href={hero.ctaSecondary.href}
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              {hero.ctaSecondary.label}
            </a>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__card">
            <div className="hero__card-header">
              <span className="hero__card-dot" />
              <span className="hero__card-dot" />
              <span className="hero__card-dot" />
            </div>
            <div className="hero__card-body">
              <div className="hero__diagram">
                <div className="hero__node hero__node--agent">Agent</div>
                <div className="hero__arrow">&#8594;</div>
                <div className="hero__node hero__node--llm">LLM</div>
                <div className="hero__arrow">&#8594;</div>
                <div className="hero__node hero__node--world">3D World</div>
              </div>
              <div className="hero__code">
                <code>
                  <span className="code-kw">const</span> agent = <span className="code-kw">new</span> <span className="code-fn">Agent</span>({'{'}<br />
                  &nbsp;&nbsp;model: <span className="code-str">"llama-4-maverick"</span>,<br />
                  &nbsp;&nbsp;capabilities: [walk, explore, interact],<br />
                  &nbsp;&nbsp;spatialOracle: <span className="code-fn">YukaOracle</span>,<br />
                  {'}'});
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
