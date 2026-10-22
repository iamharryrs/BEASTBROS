import React, { useState } from 'react';
import { IconClose, IconImage } from './Icons';

export const LightboxModal = ({ item, onClose, onUpdateImage }) => {
  const [testUrl, setTestUrl] = useState('');

  if (!item) return null;

  const handleApplyUrl = (e) => {
    e.preventDefault();
    if (testUrl.trim() && onUpdateImage) {
      onUpdateImage(item.id, testUrl.trim());
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file && onUpdateImage) {
      const url = URL.createObjectURL(file);
      onUpdateImage(item.id, url);
    }
  };

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
              Portfolio Enlarged View (16:9)
            </span>
            <h3 style={{ fontSize: '1.25rem', marginTop: '2px' }}>{item.title}</h3>
          </div>
          <button onClick={onClose} className="modal-close-btn" aria-label="Close">
            <IconClose size={20} />
          </button>
        </div>

        <div className="modal-body">
          {/* 16:9 Container */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              paddingTop: '56.25%', // 16:9 Aspect Ratio
              backgroundColor: '#0d0d0d',
              borderRadius: 'var(--radius-sm)',
              overflow: 'hidden',
              border: '1px solid #282828',
              boxShadow: '0 8px 30px rgba(0,0,0,0.6)',
              marginBottom: '20px'
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
                  padding: '24px',
                  textAlign: 'center',
                  background: 'radial-gradient(circle at center, rgba(255, 32, 32, 0.08) 0%, rgba(13, 13, 13, 1) 70%)'
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: '#161616',
                    border: '1px solid #282828',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '14px',
                    color: '#FF3333'
                  }}
                >
                  <IconImage size={28} />
                </div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '6px', color: '#FFFFFF' }}>
                  16:9 Thumbnail Slot Ready
                </h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', maxWidth: '420px' }}>
                  This slot is reserved for BeastBros thumbnail or poster artwork. You can test live by uploading an image below or pasting an image URL.
                </p>
                <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      padding: '4px 10px',
                      background: '#1a1a1a',
                      borderRadius: '4px',
                      color: '#A0A0A0',
                      border: '1px solid #2a2a2a'
                    }}
                  >
                    Aspect Ratio: 16:9 (1920x1080)
                  </span>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      padding: '4px 10px',
                      background: '#1a1a1a',
                      borderRadius: '4px',
                      color: '#FF4444',
                      border: '1px solid rgba(255,32,32,0.3)'
                    }}
                  >
                    High CTR Design
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Quick upload / paste image url for instant test */}
          <div
            style={{
              padding: '16px',
              backgroundColor: '#121212',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid #222222',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px'
            }}
          >
            <div>
              <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#FFFFFF', display: 'block' }}>
                Preview your artwork here:
              </span>
              <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>
                Test any image or paste an image link to preview how your thumbnail looks in 16:9.
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <label
                className="btn btn-secondary"
                style={{
                  padding: '8px 16px',
                  fontSize: '0.78rem',
                  cursor: 'pointer'
                }}
              >
                Choose Local File
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
              </label>

              {item.image && (
                <button
                  type="button"
                  onClick={() => onUpdateImage(item.id, null)}
                  className="btn btn-outline-red"
                  style={{ padding: '8px 14px', fontSize: '0.78rem' }}
                >
                  Reset Slot
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
