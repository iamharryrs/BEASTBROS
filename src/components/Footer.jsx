import React from 'react';
import { IconYouTube, IconInstagram, IconDiscord, IconMail } from './Icons';
import { COMPANY_INFO, SERVICES } from '../data/beastbrosData';

export const Footer = ({ setActivePage }) => {
  const handleNav = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#0a0a0a',
        borderTop: '1px solid #1a1a1a',
        padding: '80px 0 36px',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '48px',
            marginBottom: '60px'
          }}
        >
          {/* Brand Col */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                marginBottom: '18px',
                cursor: 'pointer'
              }}
              onClick={() => handleNav('home')}
            >
              <img
                src="/logo.png"
                alt="Logo"
                style={{ height: '80px', width: 'auto', filter: 'drop-shadow(0 2px 10px rgba(255, 32, 32, 0.4))' }}
              />
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '20px', maxWidth: '300px' }}>
              From pre-production to post-production. Powering next-generation creators and brands with cinematic video editing, thumbnail design, and story-driven scripts.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href={COMPANY_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  background: '#161616',
                  border: '1px solid #242424',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#FF2020';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#242424';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                aria-label="Official YouTube"
              >
                <IconYouTube size={18} />
              </a>

              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  background: '#161616',
                  border: '1px solid #242424',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#FF2020';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#242424';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                aria-label="Official Instagram"
              >
                <IconInstagram size={18} />
              </a>

              <a
                href={COMPANY_INFO.socials.discord}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  background: '#161616',
                  border: '1px solid #242424',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#FF2020';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#242424';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                aria-label="Official Discord"
              >
                <IconDiscord size={18} />
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  background: '#161616',
                  border: '1px solid #242424',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#FF2020';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#242424';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                aria-label="Official Email"
              >
                <IconMail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4
              style={{
                fontSize: '0.88rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '18px',
                color: '#FFFFFF'
              }}
            >
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['services', 'portfolio', 'about', 'jobs', 'handles', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNav(item)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      textTransform: 'uppercase',
                      padding: 0,
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#FFFFFF')}
                    onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Summary */}
          <div>
            <h4
              style={{
                fontSize: '0.88rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '18px',
                color: '#FFFFFF'
              }}
            >
              Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => handleNav('services')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      textAlign: 'left',
                      padding: 0,
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#FFFFFF')}
                    onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                  >
                    {s.title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleNav('jobs')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#FF4444',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    padding: 0
                  }}
                >
                  Join Freelancer Roster →
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <h4
              style={{
                fontSize: '0.88rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '18px',
                color: '#FFFFFF'
              }}
            >
              Direct Contact
            </h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>
              Inquiries & Client Bookings:
            </p>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              style={{
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '0.92rem',
                display: 'block',
                marginBottom: '12px',
                wordBreak: 'break-all'
              }}
            >
              {COMPANY_INFO.email}
            </a>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
              Instagram: {COMPANY_INFO.socials.instagramHandle}
            </p>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
              Discord: Community & Creator Network
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid #1a1a1a',
            paddingTop: '28px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px'
          }}
        >
          <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
            © 2025–2026 BeastBros Entertainment. All rights reserved.
          </p>
          <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
            Bring Every Creator to <span style={{ color: '#FF2020', fontWeight: 700 }}>Beast Level</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};
