import './MediaBlock.css';

function toEmbedUrl(url) {
  try {
    const p = new URL(url);
    if (p.hostname === 'youtu.be') {
      return `https://www.youtube.com/embed${p.pathname}`;
    }
    if ((p.hostname === 'www.youtube.com' || p.hostname === 'youtube.com')) {
      if (p.pathname === '/watch') {
        const v = p.searchParams.get('v');
        if (v) return `https://www.youtube.com/embed/${v}`;
      }
      if (p.pathname.startsWith('/shorts/')) {
        return `https://www.youtube.com/embed${p.pathname.replace('/shorts', '')}`;
      }
    }
  } catch { /* already an embed URL or relative path */ }
  return url;
}

export default function MediaBlock({ media, title }) {
  if (!media || media.length === 0) return null;
  const items = media.filter((m) => m && m.url);
  if (items.length === 0) return null;

  return (
    <div className="media-block">
      <div className={`media-strip${items.length > 1 ? ' media-strip--multi' : ''}`}>
        {items.map((item, i) => (
          <div
            key={i}
            className={`media-item${item.type === 'video' ? ' media-item--video' : ' media-item--image'}`}
          >
            {item.type === 'video' ? (
              <div className="media-video-ratio">
                <iframe
                  src={toEmbedUrl(item.url)}
                  title={`${title} — media ${i + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <img src={item.url} alt={`${title} — media ${i + 1}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
