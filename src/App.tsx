import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import HomeComponent from './pages/Home';
import aboutData from './data/about.json';
import { resolveUrl } from './utils/resolveUrl';
import './App.css';

// Route-level code splitting: keep the initial (Home) bundle small and load
// heavier pages — and Swiper, which only the media pages use — on demand.
const ResearchComponent = lazy(() => import('./pages/Research'));
const ProjectsComponent = lazy(() => import('./pages/Projects'));
const ExperienceComponent = lazy(() => import('./pages/Experience'));
const ResumeComponent = lazy(() => import('./pages/Resume'));

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

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="app-root">
        {/* Fixed background layer — avoids `background-attachment: fixed`,
            which repaints the whole background on every scroll frame. */}
        {safeBackground && (
          <>
            <div
              className="app-bg"
              style={{ backgroundImage: `url(${safeBackground})` }}
            />
            <div className="app-bg-overlay" />
          </>
        )}
        <NavbarComponent />
        <main>
          <Suspense fallback={<div className="route-fallback">Loading…</div>}>
            <Routes>
              <Route path="/" element={<HomeComponent />} />
              <Route path="/research" element={<ResearchComponent />} />
              <Route path="/projects" element={<ProjectsComponent />} />
              <Route path="/experience" element={<ExperienceComponent />} />
              <Route path="/resume" element={<ResumeComponent />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default AppComponent;
