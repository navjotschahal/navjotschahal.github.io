import './MediaBlock.css';
import { resolveUrl } from '../utils/resolveUrl';

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
