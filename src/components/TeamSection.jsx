import { siteData } from '../data'
import './TeamSection.css'

export default function TeamSection() {
  const { team, project } = siteData

  return (
    <section id="team" className="section team">
      <div className="container">
        <span className="section-label">{team.label}</span>
        <h2 className="section-title">{team.title}</h2>

        <div className="team__university">
          <div className="team__uni-logo">USJP</div>
          <div>
            <h3 className="team__uni-name">{project.university}</h3>
            <p className="team__uni-dept">{project.department}</p>
            <p className="team__uni-faculty">{project.faculty}</p>
          </div>
        </div>

        <div className="team__groups">
          <div className="team__group">
            <h3 className="team__group-title">Supervisors</h3>
            <div className="team__cards">
              {team.supervisors.map((s, i) => (
                <div key={i} className="team__card team__card--supervisor">
                  <div className="team__avatar">{s.name.charAt(0)}{s.name.split(' ')[1]?.charAt(0) || ''}</div>
                  <h4 className="team__name">{s.name}</h4>
                  <p className="team__role">{s.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="team__group">
            <h3 className="team__group-title">Research Team</h3>
            <div className="team__cards">
              {team.members.map((m, i) => (
                <div key={i} className="team__card">
                  <div className="team__avatar team__avatar--member">{m.name.charAt(0)}{m.name.split(' ')[1]?.charAt(0) || ''}</div>
                  <h4 className="team__name">{m.name}</h4>
                  <p className="team__role">{m.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
