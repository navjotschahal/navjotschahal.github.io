import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Research from './pages/Research';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Resume from './pages/Resume';
import aboutData from './data/about.json';
import { resolveUrl } from './utils/resolveUrl';
import './App.css';

function isSafeUrl(url) {
  try {
    const parsed = new URL(url, window.location.href);
    return parsed.protocol === 'https:' || parsed.protocol === 'http:';
  } catch {
    return false;
  }
}

function App() {
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
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
