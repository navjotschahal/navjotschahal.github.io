import { Experience } from '../types/experience';
import experienceData from '../data/experience.json';
import MediaBlock from '../components/MediaBlock';
import './PageCommon.css';
import './Experience.css';

export default const Experience: React.FC = () => {
  return (
    <div className="page">
      <h2 className="page-title">Experience</h2>
      <p className="page-subtitle">Professional and academic roles.</p>
      <div className="timeline">
        {experienceData.map((item) => (
          <div key={item.id} className="timeline-item">
            <div className="timeline-dot" />
            <div className="card">
              <MediaBlock media={item.media} title={item.role} />
              <div className="card-body">
                <div className="card-header-row">
                  <div>
                    {item.badge && (
                      <span className="badge-highlight">{item.badge}</span>
                    )}
                    <h3 className="card-title">{item.role}</h3>
                    <p className="exp-company">{item.company} — <span className="exp-location">{item.location}</span></p>
                  </div>
                  <div className="exp-dates">
                    <span className="card-year">{item.startDate} – {item.endDate}</span>
                    <span className="exp-type">{item.type}</span>
                  </div>
                </div>
                <p className="card-desc">{item.description}</p>
                {item.highlights && (
                  <ul className="card-highlights">
                    {item.highlights.map((h, i) => <li key={i}>{h}</li>)}
                  </ul>
                )}
                <div className="tag-list">
                  {item.technologies.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
