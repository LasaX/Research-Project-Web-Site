import { siteData } from '../data'
import './Footer.css'

export default function Footer() {
  const { footer, project, team } = siteData

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-icon">D</span>
              <div>
                <h3 className="footer__project-name">{project.title}</h3>
                <p className="footer__project-sub">{project.subtitle}</p>
              </div>
            </div>
            <p className="footer__desc">
              {project.degree}, {project.year}
            </p>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Supervisors</h4>
            {team.supervisors.map((s, i) => (
              <p key={i} className="footer__col-text">{s.name}</p>
            ))}
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Research Team</h4>
            {team.members.map((m, i) => (
              <p key={i} className="footer__col-text">{m.name}</p>
            ))}
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Resources</h4>
            {footer.links.map((link, i) => (
              <a key={i} href={link.href} className="footer__link" target={link.href.startsWith('/') ? '_blank' : undefined} rel="noopener noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__uni">
            <span className="footer__uni-logo">USJP</span>
            <span>{project.university}</span>
          </div>
          <p className="footer__copy">&copy; {footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
