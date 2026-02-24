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
              { category: 'Languages', items: ['Python', 'Java', 'Scala', 'C++', 'JavaScript', 'TypeScript'] },
              { category: 'Robotics & ML', items: ['ROS2', 'OpenCV', 'PyTorch', 'TensorRT', 'CVXPY', 'OSQP', 'YOLO'] },
              { category: 'Backend', items: ['Spring Boot', 'Play Framework', 'Node.js', 'Express', 'Angular', 'React'] },
              { category: 'Tools & Infra', items: ['MongoDB', 'Git', 'Jetson NX', 'ONNX', 'Linux', 'Docker'] },
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
                  <h4 className="card-title">Engineering — Robotics &amp; Autonomous Systems</h4>
                  <p className="edu-institution">University of Pennsylvania</p>
                </div>
                <span className="card-year">2024 – Present</span>
              </div>
              <p className="card-desc">Focus areas: Robotics, Control Systems, Machine Learning, Deep Neural Networks, Quantum Algorithms. Coursework includes ESE 615 (F1Tenth Autonomous Racing) and advanced ML.</p>
            </div>
          </div>

          <h3 className="resume-section-heading">Certifications &amp; Resources</h3>
          <div className="resources-list">
            {[
              { name: 'Effective Scala — EPFL (Coursera)', url: 'https://github.com/navjotschahal/scala-json-coder' },
              { name: 'Cracking the Coding Interview — Scala Solutions', url: 'https://github.com/navjotschahal/CtCI-6th-Edition-Scala' },
              { name: 'MEAN Stack — Udemy (Maximilian Schwarzmüller)', url: 'https://github.com/navjotschahal/Posts-Proj-angular-MEAN-practice' },
            ].map((r) => (
              <a key={r.name} href={r.url} target="_blank" rel="noopener noreferrer" className="resource-item">
                📎 {r.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
