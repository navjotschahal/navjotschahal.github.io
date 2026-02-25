import './MediaBlock.css';

function resolveUrl(url) {
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
    return url; // It's a full URL but not YouTube embed
  } catch { 
    // It's a relative path
    // If it doesn't start with / and is not an external URL, prepend base
    if (!url.startsWith('/') && !url.startsWith('http')) {
      return `${import.meta.env.BASE_URL}${url}`;
    }
  }
  return url;
}

export default function MediaBlock({ media, title }) {
  if (!media || media.length === 0) return null;
  const items = media.filter((m) => m && m.url);
  if (items.length === 0) return null;

  console.log('MediaBlock items:', items);

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
                  src={resolveUrl(item.url)}
                  title={`${title} — media ${i + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <img src={resolveUrl(item.url)} alt={`${title} — media ${i + 1}`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
