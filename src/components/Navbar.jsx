import React, { useState, useEffect } from 'react';
import { IconMenu, IconClose, IconDiscord, IconInstagram, IconYouTube } from './Icons';
import { COMPANY_INFO } from '../data/beastbrosData';

export const Navbar = ({ activePage, setActivePage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'services', label: 'SERVICES' },
    { id: 'portfolio', label: 'PORTFOLIO' },
    { id: 'about', label: 'ABOUT' },
    { id: 'jobs', label: 'JOBS' },
    { id: 'handles', label: 'HANDLES' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 'var(--nav-height)',
          zIndex: 900,
          transition: 'all 0.3s ease',
          backgroundColor: scrolled ? 'rgba(8, 8, 8, 0.94)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%'
          }}
        >
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '4px 0',
              textAlign: 'left'
            }}
            aria-label="Home"
          >
            <img
              src="/logo.png"
              alt="Logo"
              style={{
                height: '100px',
                width: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 2px 14px rgba(255, 32, 32, 0.45))'
              }}
            />
          </button>

          {/* Desktop Navigation */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '32px'
            }}
            className="desktop-nav"
          >
            {navLinks.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    color: isActive ? '#FFFFFF' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    position: 'relative',
                    padding: '8px 0',
                    transition: 'color 0.2s ease',
                    textTransform: 'uppercase'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.target.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.target.style.color = 'var(--text-secondary)';
                  }}
                >
                  {item.label}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: 'var(--gradient-red)',
                        boxShadow: '0 0 10px rgba(255, 32, 32, 0.8)',
                        borderRadius: '2px'
                      }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Quick Discord & Apply CTA (Desktop) */}
          <div
            className="nav-actions-desktop"
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '14px'
            }}
          >
            <a
              href={COMPANY_INFO.socials.discord}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord Server"
              style={{
                color: 'var(--text-secondary)',
                display: 'flex',
                alignItems: 'center',
                padding: '8px',
                borderRadius: '8px',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              <IconDiscord size={20} />
            </a>
            <button
              onClick={() => handleNavClick('jobs')}
              className="btn btn-outline-red"
              style={{
                padding: '8px 18px',
                fontSize: '0.78rem',
                borderRadius: 'var(--radius-sm)'
              }}
            >
              JOIN TEAM
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            style={{
              display: 'flex',
              background: 'transparent',
              border: 'none',
              color: '#FFFFFF',
              cursor: 'pointer',
              padding: '8px'
            }}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <IconClose size={26} /> : <IconMenu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 'var(--nav-height)',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(8, 8, 8, 0.98)',
            backdropFilter: 'blur(20px)',
            zIndex: 890,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '36px 24px',
            animation: 'fadeIn 0.25s ease'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <button
              onClick={() => handleNavClick('home')}
              style={{
                background: 'none',
                border: 'none',
                textAlign: 'left',
                fontFamily: 'var(--font-heading)',
                fontSize: '1.2rem',
                fontWeight: 700,
                color: activePage === 'home' ? '#FF2020' : '#FFFFFF',
                cursor: 'pointer'
              }}
            >
              HOME
            </button>
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: activePage === item.id ? '#FF2020' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  padding: '8px 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div style={{ paddingTop: '24px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
              <a
                href={COMPANY_INFO.socials.youtube}
                target="_blank"
                rel="noreferrer"
                style={{ color: '#FFF', padding: '10px', background: '#151515', borderRadius: '8px' }}
              >
                <IconYouTube size={20} />
              </a>
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                style={{ color: '#FFF', padding: '10px', background: '#151515', borderRadius: '8px' }}
              >
                <IconInstagram size={20} />
              </a>
              <a
                href={COMPANY_INFO.socials.discord}
                target="_blank"
                rel="noreferrer"
                style={{ color: '#FFF', padding: '10px', background: '#151515', borderRadius: '8px' }}
              >
                <IconDiscord size={20} />
              </a>
            </div>
            <button
              onClick={() => handleNavClick('contact')}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              START A PROJECT
            </button>
          </div>
        </div>
      )}

      {/* Desktop Responsive CSS override */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .nav-actions-desktop {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
