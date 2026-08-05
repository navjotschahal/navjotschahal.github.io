import { Suspense, lazy } from 'react';
import { ProjectType } from '../types/project';
import projectsRaw from '../data/projects.json';
import { resolveUrl } from '../utils/resolveUrl';
import './PageCommon.css';

const MediaBlockComponent = lazy(() => import('../components/MediaBlock'));

const projectsData = projectsRaw as ProjectType[];

const statusColors: Record<string, string> = {
  'Completed': '#4caf50',
  'In Progress': '#ff9800',
  'Archived': '#9e9e9e',
};

const ProjectsComponent: React.FC = () => {
  return (
    <div className="page">
      <h2 className="page-title">Projects</h2>
      <p className="page-subtitle">A selection of personal and open-source projects.</p>
      <div className="card-list">
        {projectsData.map((item) => (
          <div key={item.id} className="card">
            {item.media && item.media.length > 0 && (
              <Suspense fallback={<div className="media-skeleton" />}>
                <MediaBlockComponent media={item.media} title={item.title} />
              </Suspense>
            )}
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
                {item.githubUrl && item.githubUrl !== '#' && (
                  <a href={resolveUrl(item.githubUrl)} target="_blank" rel="noopener noreferrer" className="link-btn">💻 GitHub</a>
                )}
                {item.liveUrl && item.liveUrl !== '#' && (
                  <a href={resolveUrl(item.liveUrl)} target="_blank" rel="noopener noreferrer" className="link-btn">🌐 Live</a>
                )}
                {item.reportUrl && item.reportUrl !== '#' && (
                  <a href={resolveUrl(item.reportUrl)} target="_blank" rel="noopener noreferrer" className="link-btn">📄 Report</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default ProjectsComponent;
