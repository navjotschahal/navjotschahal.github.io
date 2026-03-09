import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import HomeComponent from './pages/Home';
import ResearchComponent from './pages/Research';
import ProjectsComponent from './pages/Projects';
import ExperienceComponent from './pages/Experience';
import ResumeComponent from './pages/Resume';
import aboutData from './data/about.json';
import { resolveUrl } from './utils/resolveUrl';
import './App.css';

function isSafeUrl(url: string) {
  try {
    const parsed = new URL(url, window.location.href);
    return parsed.protocol === 'https:' || parsed.protocol === 'http:';
  } catch {
    return false;
  }
}

const AppComponent: React.FC = () => {
  const safeBackground = aboutData.backgroundImage && isSafeUrl(resolveUrl(aboutData.backgroundImage))
    ? resolveUrl(aboutData.backgroundImage)
    : null;

  const appStyle = safeBackground
    ? {
        backgroundImage: `url(${safeBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }
    : {};

  return (
    <HashRouter>
      <div className="app-root" style={appStyle}>
        {safeBackground && <div className="app-bg-overlay" />}
        <NavbarComponent />
        <main>
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/research" element={<ResearchComponent />} />
            <Route path="/projects" element={<ProjectsComponent />} />
            <Route path="/experience" element={<ExperienceComponent />} />
            <Route path="/resume" element={<ResumeComponent />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default AppComponent;
