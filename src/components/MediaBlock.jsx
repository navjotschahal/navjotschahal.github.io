import './MediaBlock.css';

export default function MediaBlock({ image, videoUrl, title }) {
  if (!image && !videoUrl) return null;

  return (
    <div className="media-block">
      {videoUrl && (
        <div className="media-video">
          <iframe
            src={videoUrl}
            title={title}
            style={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
      {!videoUrl && image && (
        <div className="media-image">
          <img src={image} alt={title} />
        </div>
      )}
    </div>
  );
}
