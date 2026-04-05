import { useState, useEffect } from 'react'
import { siteData } from '../data'
import './EnvironmentSection.css'

export default function EnvironmentSection() {
  const { environment } = siteData
  const [currentIdx, setCurrentIdx] = useState(0)

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % environment.images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [environment.images.length])

  return (
    <section id="environment" className="section env">
      <div className="container">

        <h2 className="section-title">{environment.title}</h2>
        <p className="section-subtitle">{environment.description}</p>

        <div className="env__slideshow">
          <div className="env__slides">
            {environment.images.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`Environment slide ${i + 1}`}
                className={`env__slide ${i === currentIdx ? 'active' : ''}`}
                loading={i === 0 ? "eager" : "lazy"}
              />
            ))}
          </div>
          <div className="env__controls">
            {environment.images.map((_, i) => (
              <button
                key={i}
                className={`env__dot ${i === currentIdx ? 'active' : ''}`}
                onClick={() => setCurrentIdx(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
