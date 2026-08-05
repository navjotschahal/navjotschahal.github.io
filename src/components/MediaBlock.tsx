import React, { useState, useRef } from 'react';
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
  title?: string;
}

const MediaBlockComponent: React.FC<MediaBlockProps> = ({ media }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  // Track which YouTube slides the user has activated (click-to-load, avoids
  // loading a heavy YouTube iframe for every card on mount).
  const [activatedYouTube, setActivatedYouTube] = useState<Record<number, boolean>>({});
  const mainSwiperRef = useRef<SwiperType | null>(null);

  if (!media || media.length === 0) {
    return null;
  }

  // Helper to format URLs
  const getUrl = (url: string) => {
    // If it's a remote URL, return as-is for non-YouTube links
    if (url.startsWith('http') || url.startsWith('//')) {
      return url;
    }

    // Otherwise resolve relative asset paths
    return resolveUrl(`../${url}`);
  };

  // Convert various YouTube URLs to an embeddable URL
  const getYouTubeEmbed = (url: string) => {
    try {
      // Strip params and handle short links
      if (url.includes('youtu.be/')) {
        const id = url.split('youtu.be/')[1].split(/[?&]/)[0];
        return `https://www.youtube.com/embed/${id}`;
      }

      // Full watch URL
      if (url.includes('youtube.com/watch')) {
        const params = new URL(url).searchParams;
        const id = params.get('v');
        if (id) return `https://www.youtube.com/embed/${id}`;
      }

      // Already an embed URL
      if (url.includes('/embed/')) return url;
    } catch (e) {
      // Fall back to the original URL on parse errors
      return url;
    }

    return url;
  };

  // Derive a lightweight YouTube thumbnail so we can defer the iframe.
  const getYouTubeThumb = (url: string) => {
    const embed = getYouTubeEmbed(url);
    const id = embed.split('/embed/')[1]?.split(/[?&]/)[0];
    return id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : '';
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
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        onSwiper={(s) => {
          mainSwiperRef.current = s;
          // Stop autoplay if initial slide is a video/youtube
          const idx = s.realIndex ?? 0;
          const current = media[idx];
          if (current && (current.type === 'video' || current.type === 'youtube')) {
            s.autoplay?.stop();
          } else {
            s.autoplay?.start();
          }
        }}
        onSlideChange={() => {
          const s = mainSwiperRef.current;
          if (!s) return;
          const idx = s.realIndex ?? 0;
          const current = media[idx];
          if (current && (current.type === 'video' || current.type === 'youtube')) {
            s.autoplay?.stop();
          } else {
            s.autoplay?.start();
          }
        }}
        loop={media.length > 1}
        className="main-swiper"
      >
        {media.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="media-content">
              {item.type === 'image' && (
                <>
                  {/* 1. The Blurred Background (reuses the same decoded image) */}
                  <img
                    src={getUrl(item.url)}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    decoding="async"
                    className="media-image-blur"
                  />
                  {/* 2. The Main Foreground Image */}
                  <img
                    src={getUrl(item.url)}
                    alt={`Media item ${index}`}
                    loading="lazy"
                    decoding="async"
                    className="media-image live-photo-effect"
                  />
                </>
              )}
              {item.type === 'youtube' && (
                activatedYouTube[index] ? (
                  <iframe
                    src={`${getYouTubeEmbed(item.url)}?autoplay=1`}
                    title={`YouTube video ${index}`}
                    className="media-youtube"
                    loading="lazy"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    className="media-youtube-poster"
                    onClick={() => setActivatedYouTube((s) => ({ ...s, [index]: true }))}
                    aria-label="Play video"
                    style={{ backgroundImage: `url(${getYouTubeThumb(item.url)})` }}
                  >
                    <span className="media-youtube-play" aria-hidden="true">▶</span>
                  </button>
                )
              )}
              {item.type === 'video' && (
                <video
                  controls
                  muted
                  playsInline
                  preload="none"
                  className="media-video"
                >
                  <source
                    src={getUrl(item.url)}
                    type={item.url.toLowerCase().endsWith('.mov') ? 'video/quicktime' : 'video/mp4'}
                  />
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
                  <img
                    src={getUrl(item.url)}
                    alt={`Thumbnail ${index}`}
                    loading="lazy"
                    decoding="async"
                  />
                ) : item.type === 'youtube' ? (
                  <img
                    src={getYouTubeThumb(item.url)}
                    alt={`Thumbnail ${index}`}
                    loading="lazy"
                    decoding="async"
                  />
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
