import aboutData from '../data/about.json';
import './Home.css';

const iconMap = {
  github: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.25.78-.55v-2.03c-3.19.69-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.27-5.23-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.97 10.97 0 0 1 5.74 0c2.19-1.49 3.14-1.18 3.14-1.18.63 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.37-5.25 5.65.41.36.78 1.06.78 2.13v3.16c0 .3.2.66.79.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/>
    </svg>
  ),
  linkedin: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM3.56 20.45h3.56V9H3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z"/>
    </svg>
  ),
  twitter: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
  scholar: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M12 3 1 9l4 2.18V17c0 1.1 3.13 3 7 3s7-1.9 7-3v-5.82L23 9zm0 2.18L19.39 9 12 12.82 4.61 9zm5 10.32c0 .5-2.24 2-5 2s-5-1.5-5-2v-4.39l5 2.73 5-2.73z"/>
    </svg>
  ),
};

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-hero">
        <div className="home-avatar-placeholder">
          {aboutData.avatar ? (
            <img src={aboutData.avatar} alt={aboutData.name} />
          ) : (
            <span>{aboutData.name.split(' ').map(w => w[0]).join('')}</span>
          )}
        </div>
        <div className="home-intro">
          <h1>{aboutData.name}</h1>
          <h2>{aboutData.title}</h2>
          <p className="home-tagline">{aboutData.tagline}</p>
          <p className="home-bio">{aboutData.bio}</p>
          <div className="home-meta">
            <span>📍 {aboutData.location}</span>
            <span>✉️ <a href={`mailto:${aboutData.email}`}>{aboutData.email}</a></span>
          </div>
          <div className="home-social">
            {aboutData.social.map((s) => (
              <a
                key={s.platform}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title={s.platform}
              >
                {iconMap[s.icon] || s.platform}
                <span>{s.platform}</span>
              </a>
            ))}
          </div>
          <a href={aboutData.resumeUrl} className="btn-resume" download>
            ⬇ Download Resume
          </a>
        </div>
      </div>

      <section className="home-highlights">
        <h3>What I Do</h3>
        <div className="highlights-grid">
          <div className="highlight-card">
            <div className="highlight-icon">🔬</div>
            <h4>Research</h4>
            <p>Publishing at top venues in NLP, code intelligence, and ML systems.</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">🛠️</div>
            <h4>Engineering</h4>
            <p>Building scalable, production-grade software and distributed systems.</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">📖</div>
            <h4>Open Source</h4>
            <p>Contributing to and maintaining open-source tools used by the community.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
