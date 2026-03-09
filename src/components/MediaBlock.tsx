import React from 'react';
import { MediaItemType } from '../types/media';
import { resolveUrl } from '../utils/resolveUrl';
import './MediaBlock.css'; // Make sure this matches your existing CSS import

// 1. Define the props for the component
interface MediaBlockProps {
  media: MediaItemType[];
}

// 2. Apply the React.FC (Functional Component) type and pass the props
const MediaBlockComponent: React.FC<MediaBlockProps> = ({ media }) => {
  if (!media || media.length === 0) {
    return null;
  }

  return (
    <div className="media-container">
      {media.map((item, index) => {
        // Only use resolveUrl for relative paths like your assets folder
        const isAbsoluteUrl = item.url.startsWith('http') || item.url.startsWith('//');
        const finalUrl = isAbsoluteUrl ? item.url : resolveUrl(`../${item.url}`);

        switch (item.type) {
          case 'image':
            return (
              <img 
                key={index} 
                src={finalUrl} 
                alt={`Media item ${index}`} 
                className="media-image" 
              />
            );
          case 'youtube':
            return (
              <iframe
                key={index}
                src={item.url} // YouTube URLs are absolute
                title={`YouTube video ${index}`}
                className="media-youtube"
                allowFullScreen
              />
            );
          case 'video':
            return (
              <video key={index} controls className="media-video">
                <source src={finalUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            );
          default:
            return null; // Ignore unknown media types
        }
      })}
    </div>
  );
};

export default MediaBlockComponent;