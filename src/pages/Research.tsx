import { Research } from '../types/research';
import researchData from '../data/research.json';
import MediaBlock from '../components/MediaBlock';
import { resolveUrl } from '../utils/resolveUrl';
import './PageCommon.css';

const Research: React.FC = () => {
  return (
    <div className="page">
      <h2 className="page-title">Research</h2>
      <p className="page-subtitle">Publications and ongoing research projects.</p>
      <div className="card-list">
        {researchData.map((item) => (
          <div key={item.id} className="card">
            <MediaBlock media={item.media} title={item.title} />
            <div className="card-body">
              <div className="card-header-row">
                <h3 className="card-title">{item.title}</h3>
                <span className="card-year">{item.year}</span>
              </div>
              {item.badge && <span className="badge-highlight">{item.badge}</span>}
              <p className="card-venue">{item.venue}</p>
              <p className="card-authors">{item.authors.join(', ')}</p>
              <p className="card-desc">{item.description}</p>
              <details className="card-abstract">
                <summary>Abstract</summary>
                <p>{item.abstract}</p>
              </details>
              <div className="tag-list">
                {item.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <div className="card-links">
                {item.paperUrl && item.paperUrl !== '#' && (
                  <a href={resolveUrl(item.paperUrl)} target="_blank" rel="noopener noreferrer" className="link-btn">📄 Paper</a>
                )}
                {item.codeUrl && (
                  <a href={resolveUrl(item.codeUrl)} target="_blank" rel="noopener noreferrer" className="link-btn">💻 Code</a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Research;
