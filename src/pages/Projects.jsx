import projectsData from '../data/projects.json';
import MediaBlock from '../components/MediaBlock';
import { resolveUrl } from '../utils/resolveUrl';
import './PageCommon.css';

const statusColors = {
  'Completed': '#4caf50',
  'In Progress': '#ff9800',
  'Archived': '#9e9e9e',
};

export default function Projects() {
  return (
    <div className="page">
      <h2 className="page-title">Projects</h2>
      <p className="page-subtitle">A selection of personal and open-source projects.</p>
      <div className="card-list">
        {projectsData.map((item) => (
          <div key={item.id} className="card">
            <MediaBlock media={item.media} title={item.title} />
            <div className="card-body">
              <div className="card-header-row">
                <h3 className="card-title">{item.title}</h3>
                <span
                  className="card-status"
                  style={{ color: statusColors[item.status] || '#ccc' }}
                >
                  ● {item.status}
                </span>
              </div>
              {item.badge && <span className="badge-highlight">{item.badge}</span>}
              <p className="card-desc">{item.description}</p>
              {item.highlights && item.highlights.length > 0 && (
                <ul className="card-highlights">
                  {item.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              )}
              <div className="tag-list">
                {item.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <div className="card-links">
                {item.githubUrl && (
                  <a href={resolveUrl(item.githubUrl)} target="_blank" rel="noopener noreferrer" className="link-btn">💻 GitHub</a>
                )}
                {item.liveUrl && item.liveUrl !== '#' && (
                  <a href={resolveUrl(item.liveUrl)} target="_blank" rel="noopener noreferrer" className="link-btn">🌐 Live</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
