import React from 'react';
import { IconClose } from './Icons';

export const VideoModal = ({ video, onClose }) => {
  if (!video) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '880px' }}
      >
        <div className="modal-header">
          <div>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#FF4444',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}
            >
              Video Editing Showcase
            </span>
            <h3 style={{ fontSize: '1.25rem', marginTop: '2px' }}>{video.title}</h3>
          </div>
          <button onClick={onClose} className="modal-close-btn" aria-label="Close">
            <IconClose size={20} />
          </button>
        </div>

        <div className="modal-body">
          {/* 16:9 Video Embed Player */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              paddingTop: '56.25%',
              backgroundColor: '#000000',
              borderRadius: 'var(--radius-sm)',
              overflow: 'hidden',
              border: '1px solid #282828',
              boxShadow: '0 8px 30px rgba(0,0,0,0.8)',
              marginBottom: '16px'
            }}
          >
            <iframe
              src={video.videoUrl}
              title={video.title}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 0
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '8px' }}>
                {video.description}
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {video.tags?.map((tag, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.75rem',
                      padding: '4px 10px',
                      background: '#161616',
                      borderRadius: '4px',
                      color: '#A0A0A0',
                      border: '1px solid #282828'
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <span
              style={{
                fontSize: '0.8rem',
                color: '#FF4444',
                fontWeight: 600,
                background: 'rgba(255, 32, 32, 0.1)',
                padding: '6px 12px',
                borderRadius: '6px',
                border: '1px solid rgba(255, 32, 32, 0.25)'
              }}
            >
              Duration: {video.duration}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
