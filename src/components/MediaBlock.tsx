import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { MediaItemType } from '../types/media';
import { resolveUrl } from '../utils/resolveUrl';
import './MediaBlock.css';

interface MediaBlockProps {
  media: MediaItemType[];
}

const MediaBlockComponent: React.FC<MediaBlockProps> = ({ media }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  if (!media || media.length === 0) {
    return null;
  }

  // Helper to format URLs
  const getUrl = (url: string) => {
    return url.startsWith('http') || url.startsWith('//') ? url : resolveUrl(`../${url}`);
  };

  return (
    <div className="media-carousel-wrapper">
      {/* ── MAIN VIEWER ── */}
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        } as React.CSSProperties}
        modules={[Navigation, Thumbs, Autoplay]}
        navigation={media.length > 1}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={media.length > 1}
        className="main-swiper"
      >
        {media.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="media-content">
              {item.type === 'image' && (
                <>
                  {/* 1. The Blurred Background */}
                  <img 
                    src={getUrl(item.url)} 
                    alt="" 
                    className="media-image-blur" 
                  />
                  {/* 2. The Main Foreground Image */}
                  <img 
                    src={getUrl(item.url)} 
                    alt={`Media item ${index}`} 
                    className="media-image live-photo-effect" 
                  />
                </>
              )}
              {item.type === 'youtube' && (
                <iframe
                  src={item.url}
                  title={`YouTube video ${index}`}
                  className="media-youtube"
                  allowFullScreen
                />
              )}
              {item.type === 'video' && (
                <video controls muted className="media-video">
                  <source src={getUrl(item.url)} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ── THUMBNAILS STRIP (Only show if multiple items) ── */}
      {media.length > 1 && (
        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[Thumbs]}
          watchSlidesProgress
          slidesPerView="auto"
          spaceBetween={8}
          className="thumbs-swiper"
        >
          {media.map((item, index) => (
            <SwiperSlide key={index} className="thumbnail-slide">
              <div className="thumbnail-item">
                {item.type === 'image' ? (
                  <img src={getUrl(item.url)} alt={`Thumbnail ${index}`} />
                ) : (
                  <div className="thumbnail-placeholder">{item.type}</div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default MediaBlockComponent;