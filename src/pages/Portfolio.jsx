import React, { useState } from 'react';
import { IconImage, IconPlay, IconFilm, IconSparkles } from '../components/Icons';
import { THUMBNAIL_ITEMS, VIDEO_PROJECTS } from '../data/beastbrosData';
import { LightboxModal } from '../components/LightboxModal';
import { VideoModal } from '../components/VideoModal';

export const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'thumbnails' | 'videos'
  const [thumbnails, setThumbnails] = useState(THUMBNAIL_ITEMS);
  const [selectedThumbnail, setSelectedThumbnail] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleUpdateImage = (id, newImageUrl) => {
    setThumbnails((prev) =>
      prev.map((item) => (item.id === id ? { ...item, image: newImageUrl } : item))
    );
    if (selectedThumbnail && selectedThumbnail.id === id) {
      setSelectedThumbnail((prev) => ({ ...prev, image: newImageUrl }));
    }
  };

  return (
    <div className="page-portfolio" style={{ paddingTop: 'calc(var(--nav-height) + 40px)', paddingBottom: '100px' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header" style={{ marginBottom: '40px' }}>

          <h1 className="section-title">
            <span className="text-gradient-red">PORTFOLIO</span>
          </h1>
          <p className="section-description">
            Explore a collection of eye-catching thumbnails, stunning posters, and cinematic video edits crafted to grab attention and keep viewers hooked.
          </p>

          {/* Quick Filter Tabs */}
          <div
            style={{
              display: 'inline-flex',
              background: '#141414',
              padding: '6px',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid #242424',
              marginTop: '30px',
              gap: '6px'
            }}
          >
            <button
              onClick={() => setActiveTab('all')}
              style={{
                background: activeTab === 'all' ? 'var(--gradient-red)' : 'transparent',
                color: activeTab === 'all' ? '#FFFFFF' : 'var(--text-secondary)',
                border: 'none',
                padding: '8px 20px',
                borderRadius: 'var(--radius-pill)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.82rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              ALL WORK
            </button>
            <button
              onClick={() => setActiveTab('thumbnails')}
              style={{
                background: activeTab === 'thumbnails' ? 'var(--gradient-red)' : 'transparent',
                color: activeTab === 'thumbnails' ? '#FFFFFF' : 'var(--text-secondary)',
                border: 'none',
                padding: '8px 20px',
                borderRadius: 'var(--radius-pill)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.82rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              THUMBNAILS
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              style={{
                background: activeTab === 'videos' ? 'var(--gradient-red)' : 'transparent',
                color: activeTab === 'videos' ? '#FFFFFF' : 'var(--text-secondary)',
                border: 'none',
                padding: '8px 20px',
                borderRadius: 'var(--radius-pill)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.82rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              VIDEO EDITING
            </button>
          </div>
        </div>

        {/* ========================================================
            SECTION A: THUMBNAILS & POSTERS (10 16:9 SLOTS)
            ======================================================== */}
        {(activeTab === 'all' || activeTab === 'thumbnails') && (
          <section style={{ marginBottom: '80px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid #222222',
                paddingBottom: '16px',
                marginBottom: '32px'
              }}
            >
              <div>
                <span style={{ fontSize: '0.78rem', color: '#FF4444', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  SECTION A
                </span>
                <h2 style={{ fontSize: '1.6rem', textTransform: 'uppercase', color: '#FFFFFF' }}>
                  THUMBNAILS
                </h2>
              </div>
              <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>

              </span>
            </div>

            {/* Grid of 10 16:9 Thumbnail Slots */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '24px'
              }}
            >
              {thumbnails.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedThumbnail(item)}
                  className="card-surface"
                  style={{
                    padding: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  {/* 16:9 Ratio Container */}
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      paddingTop: '56.25%', // 16:9 aspect ratio
                      backgroundColor: '#0f0f0f',
                      borderRadius: 'var(--radius-sm)',
                      overflow: 'hidden',
                      border: '1px solid #222222'
                    }}
                  >
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          position: 'absolute',
                          inset: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '14px',
                          textAlign: 'center',
                          background: 'radial-gradient(circle, rgba(255, 32, 32, 0.05) 0%, rgba(15, 15, 15, 1) 75%)'
                        }}
                      >
                        <div
                          style={{
                            width: '42px',
                            height: '42px',
                            borderRadius: '50%',
                            background: '#181818',
                            border: '1px solid #2a2a2a',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '8px',
                            color: '#FF3333'
                          }}
                        >
                          <IconImage size={20} />
                        </div>
                        <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#FFFFFF' }}>
                          Slot #{index + 1 < 10 ? '0' + (index + 1) : index + 1}
                        </span>
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                          16:9 Thumbnail Artwork
                        </span>
                      </div>
                    )}

                    {/* Hover Overlay Hint */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.45)',
                        opacity: 0,
                        transition: 'opacity 0.2s',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                      className="thumb-hover-hint"
                    >
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-heading)',
                          fontWeight: 700,
                          color: '#FFFFFF',
                          background: 'rgba(255, 32, 32, 0.9)',
                          padding: '6px 14px',
                          borderRadius: '4px'
                        }}
                      >
                        CLICK TO ENLARGE
                      </span>
                    </div>
                  </div>

                  <div style={{ marginTop: '12px', padding: '4px 6px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <h4 style={{ fontSize: '0.92rem', color: '#FFFFFF' }}>{item.title}</h4>
                      <span style={{ fontSize: '0.72rem', color: '#FF4444', fontWeight: 600 }}>16:9</span>
                    </div>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{item.category}</span>
                  </div>
                </div>
              ))}
            </div>

            <style>{`
              .card-surface:hover .thumb-hover-hint {
                opacity: 1 !important;
              }
            `}</style>
          </section>
        )}

        {/* ========================================================
            SECTION B: VIDEO EDITING
            ======================================================== */}
        {(activeTab === 'all' || activeTab === 'videos') && (
          <section>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid #222222',
                paddingBottom: '16px',
                marginBottom: '32px'
              }}
            >
              <div>
                <span style={{ fontSize: '0.78rem', color: '#FF4444', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  SECTION B
                </span>
                <h2 style={{ fontSize: '1.6rem', textTransform: 'uppercase', color: '#FFFFFF' }}>
                  VIDEO EDITING SHOWCASE
                </h2>
              </div>
              <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>

              </span>
            </div>

            <div className="grid-2">
              {VIDEO_PROJECTS.map((video) => (
                <div
                  key={video.id}
                  className="card-surface"
                  style={{
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  {/* Video Thumbnail with Play Button */}
                  <div
                    onClick={() => setSelectedVideo(video)}
                    style={{
                      position: 'relative',
                      width: '100%',
                      paddingTop: '56.25%',
                      backgroundColor: '#121212',
                      borderRadius: 'var(--radius-sm)',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      border: '1px solid #252525',
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)'
                    }}
                  >
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(135deg, rgba(255, 32, 32, 0.12) 0%, rgba(10, 10, 10, 0.9) 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {/* Play Button */}
                      <div
                        style={{
                          width: '64px',
                          height: '64px',
                          borderRadius: '50%',
                          background: 'var(--gradient-red)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#FFFFFF',
                          boxShadow: '0 4px 20px rgba(255, 32, 32, 0.5)',
                          transition: 'transform 0.25s ease'
                        }}
                        className="play-pulse-btn"
                      >
                        <div style={{ marginLeft: '4px' }}>
                          <IconPlay size={24} />
                        </div>
                      </div>
                    </div>

                    {/* Duration badge */}
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '12px',
                        right: '12px',
                        background: 'rgba(0, 0, 0, 0.85)',
                        color: '#FFFFFF',
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        padding: '4px 8px',
                        borderRadius: '4px',
                        border: '1px solid #333333'
                      }}
                    >
                      {video.duration}
                    </span>
                  </div>

                  {/* Project Details */}
                  <div style={{ marginTop: '18px', padding: '0 6px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          color: '#FF5555',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em'
                        }}
                      >
                        {video.category}
                      </span>
                    </div>

                    <h3
                      onClick={() => setSelectedVideo(video)}
                      style={{
                        fontSize: '1.25rem',
                        marginBottom: '8px',
                        cursor: 'pointer',
                        color: '#FFFFFF'
                      }}
                    >
                      {video.title}
                    </h3>

                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: 1.5 }}>
                      {video.description}
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        {video.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            style={{
                              fontSize: '0.72rem',
                              padding: '3px 8px',
                              background: '#161616',
                              borderRadius: '4px',
                              color: '#A0A0A0',
                              border: '1px solid #242424'
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => setSelectedVideo(video)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#FF3333',
                          fontFamily: 'var(--font-heading)',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        WATCH <IconPlay size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedThumbnail && (
        <LightboxModal
          item={selectedThumbnail}
          onClose={() => setSelectedThumbnail(null)}
          onUpdateImage={handleUpdateImage}
        />
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </div>
  );
};
