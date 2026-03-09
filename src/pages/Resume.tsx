import aboutData from '../data/about.json';
import './PageCommon.css';
import './Resume.css';
import { resolveUrl } from '../utils/resolveUrl';

export default const Resume: React.FC = () => {
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
            <a href={resolveUrl(aboutData.resumeUrl)} className="btn-resume-dl" download>
              ⬇ Download PDF
            </a>
          </div>
        </div>

        <div className="resume-preview">
          <h3>Skills</h3>
          <div className="skills-grid">
            {[
              { category: 'Languages', items: ['C', 'C++', 'CUDA', 'Python', 'Bash', 'Scala', 'Java', 'MATLAB', 'SystemVerilog'] },
              { category: 'Frameworks', items: ['ROS2', 'PyTorch', 'TensorFlow', 'Keras', 'TensorRT', 'OpenCV', 'OpenCL'] },
              { category: 'Tools', items: ['NVIDIA Jetson', 'Isaac Sim/Gym', 'RViz', 'Docker', 'Git', 'Linux', 'GDB', 'Vitis HLS'] },
              { category: 'Embedded / Robotics', items: ['LiDAR', 'Depth Camera', 'IMU', 'Radar', 'MPC', 'SLAM', 'Localization', 'RTOS', 'Xilinx FPGA'] },
              { category: 'Concepts', items: ['Deep Neural Networks', 'Image Processing', 'Physics Simulation', 'Thread/Process/Memory Sync', 'Optimization', 'Cloud (Azure, AWS, Docker)'] },
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
                  <h4 className="card-title">Master of Science — Electrical Engineering (SEAS)</h4>
                  <p className="edu-institution">University of Pennsylvania, Philadelphia, PA, USA</p>
                </div>
                <span className="card-year">2024 – Jun 2026</span>
              </div>
              <p className="card-desc">GPA: 3.49 / 4.0 · Focus: Robotics, Autonomous Systems, Machine Learning, Deep Neural Networks, Quantum Algorithms, FPGA & Embedded Systems.</p>
            </div>
          </div>
          <div className="card" style={{ marginTop: '0.75rem' }}>
            <div className="card-body">
              <div className="card-header-row">
                <div>
                  <h4 className="card-title">Bachelor of Technology — Electronics &amp; Communications Engineering</h4>
                  <p className="edu-institution">Kurukshetra University, Kurukshetra, India</p>
                </div>
                <span className="card-year">Jun 2019</span>
              </div>
              <p className="card-desc">GPA: 4.0 / 4.0</p>
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
