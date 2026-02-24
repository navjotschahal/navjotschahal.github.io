import aboutData from '../data/about.json';
import './PageCommon.css';
import './Resume.css';

export default function Resume() {
  return (
    <div className="page">
      <h2 className="page-title">Resume</h2>
      <p className="page-subtitle">My digital resume and downloadable resources.</p>

      <div className="resume-section">
        <div className="resume-download-card">
          <div className="resume-icon">📄</div>
          <div>
            <h3>Download Full Resume</h3>
            <p>Get my complete resume as a PDF document.</p>
            <a href={aboutData.resumeUrl} className="btn-resume-dl" download>
              ⬇ Download PDF
            </a>
          </div>
        </div>

        <div className="resume-preview">
          <h3>Skills</h3>
          <div className="skills-grid">
            {[
              { category: 'Languages', items: ['Python', 'Go', 'JavaScript', 'TypeScript', 'C++'] },
              { category: 'Frameworks', items: ['React', 'FastAPI', 'PyTorch', 'HuggingFace', 'Node.js'] },
              { category: 'Infra / Cloud', items: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'PostgreSQL', 'Redis'] },
              { category: 'Research', items: ['NLP', 'LLMs', 'Reinforcement Learning', 'Code Intelligence'] },
            ].map((group) => (
              <div key={group.category} className="skill-group">
                <h4>{group.category}</h4>
                <div className="tag-list">
                  {group.items.map((item) => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h3 className="resume-section-heading">Education</h3>
          <div className="card">
            <div className="card-body">
              <div className="card-header-row">
                <div>
                  <h4 className="card-title">Bachelor of Computer Science</h4>
                  <p className="edu-institution">University of Waterloo</p>
                </div>
                <span className="card-year">2019 – 2024</span>
              </div>
              <p className="card-desc">Specialization in Artificial Intelligence. Dean's Honour List.</p>
            </div>
          </div>

          <h3 className="resume-section-heading">Certifications &amp; Resources</h3>
          <div className="resources-list">
            {[
              { name: 'Deep Learning Specialization — Coursera', url: '#' },
              { name: 'AWS Certified Developer', url: '#' },
              { name: 'Research Poster – ICSE 2024', url: '#' },
            ].map((r) => (
              <a key={r.name} href={r.url} className="resource-item" download={r.url !== '#'}>
                📎 {r.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
