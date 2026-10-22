import React from 'react';
import { IconArrowRight, IconFilm, IconImage, IconPen, IconSparkles, IconDiscord } from '../components/Icons';
import { SERVICES, COMPANY_INFO, FOUNDERS } from '../data/beastbrosData';

export const Home = ({ setActivePage, onOpenEnroll }) => {
  const navigateTo = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="page-home" style={{ position: 'relative', zIndex: 1 }}>
      {/* Hero Section */}
      <section className="section-hero" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Ambient subtle red radial glow */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '650px',
            height: '450px',
            background: 'radial-gradient(circle, rgba(255, 32, 32, 0.16) 0%, rgba(8, 8, 8, 0) 70%)',
            filter: 'blur(40px)',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          {/* Subtle Tag badge */}


          {/* Main Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 6.2vw, 5.2rem)',
              fontWeight: 900,
              textTransform: 'uppercase',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              maxWidth: '1050px',
              margin: '0 auto 28px',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.7)'
            }}
          >
            WELCOME TO THE OF <br />
            <span className="text-gradient-red">ENTERTAINMENT
            </span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'var(--text-secondary)',
              maxWidth: '680px',
              margin: '0 auto 40px',
              lineHeight: 1.6
            }}
          >
          </p>

          {/* CTA Group with the requested Arrow Button */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '18px',
              flexWrap: 'wrap'
            }}
          >
            <button
              onClick={() => navigateTo('services')}
              className="btn btn-primary"
              style={{
                fontSize: '0.95rem',
                padding: '16px 34px'
              }}
            >
              EXPLORE OUR SERVICES
            </button>

            {/* Red Arrow Button linking to Services Page (Required in Section 3 & 9) */}
            <button
              onClick={() => navigateTo('services')}
              className="btn-arrow-circle"
              aria-label="Go to Services Page"
              title="Explore Services"
            >
              <IconArrowRight size={22} />
            </button>
          </div>


        </div>
      </section>

      {/* Services Overview Section */}
      <section className="section" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">

            <h2 className="section-title">
              WHAT WE <span className="text-gradient-red">DELIVER</span>
            </h2>
            <p className="section-description">
              We handle everything from planning creative ideas to final video editing, helping creators make engaging content and reach Beast Level.
            </p>
          </div>

          <div className="grid-3">
            {SERVICES.map((service, index) => {
              const IconComponent = index === 0 ? IconFilm : index === 1 ? IconImage : IconPen;
              return (
                <div
                  key={service.id}
                  className="card-surface"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '24px'
                      }}
                    >
                      <div
                        style={{
                          width: '52px',
                          height: '52px',
                          borderRadius: '12px',
                          background: 'rgba(255, 32, 32, 0.1)',
                          border: '1px solid rgba(255, 32, 32, 0.25)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#FF3333'
                        }}
                      >
                        <IconComponent size={24} />
                      </div>
                      <span
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '1.4rem',
                          fontWeight: 900,
                          color: '#222222'
                        }}
                      >
                        {service.number}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.35rem', marginBottom: '12px' }}>
                      {service.title}
                    </h3>

                    <p style={{ fontSize: '0.92rem', marginBottom: '20px', lineHeight: 1.6 }}>
                      {service.description}
                    </p>

                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '28px' }}>
                      {service.features.slice(0, 3).map((f, i) => (
                        <li key={i} style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ color: '#FF2020', fontSize: '1.1rem', lineHeight: 1 }}>•</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => navigateTo('services')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#FF4444',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '4px 0',
                      transition: 'gap 0.2s ease'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.gap = '12px')}
                    onMouseLeave={(e) => (e.currentTarget.style.gap = '8px')}
                  >
                    LEARN MORE <IconArrowRight size={16} />
                  </button>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <button
              onClick={() => navigateTo('services')}
              className="btn btn-secondary"
            >
              LEARN MORE
            </button>
          </div>
        </div>
      </section>

      {/* Mission Banner */}
      <section
        className="section"
        style={{
          background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)',
          textAlign: 'center',
          position: 'relative'
        }}
      >
        <div className="container">
          <div
            style={{
              padding: '60px 32px',
              borderRadius: 'var(--radius-lg)',
              background: 'radial-gradient(ellipse at center, rgba(255, 32, 32, 0.08) 0%, rgba(18, 18, 18, 0.95) 75%)',
              border: '1px solid rgba(255, 32, 32, 0.25)',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)'
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.8rem',
                fontWeight: 800,
                letterSpacing: '0.2em',
                color: '#FF4444',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '12px'
              }}
            >
              OUR MISSION
            </span>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 3.8vw, 3rem)',
                maxWidth: '800px',
                margin: '0 auto 18px',
                textTransform: 'uppercase'
              }}
            >
              BRING EVERY CREATOR TO <span className="text-gradient-red">BEAST LEVEL</span>
            </h2>
            <p
              style={{
                maxWidth: '620px',
                margin: '0 auto 32px',
                fontSize: '1rem',
                color: 'var(--text-secondary)'
              }}
            >
              Founded in 2025 by Harry, Pritha Roy, and Arush Verma, BeastBros Entertainment brings together elite freelancers and production standards to produce content that breaks the algorithm.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={() => navigateTo('about')}
                className="btn btn-primary"
              >
                ABOUT US
              </button>
              <button
                onClick={() => navigateTo('portfolio')}
                className="btn btn-secondary"
              >
                EXPLORE PORTFOLIO
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Teaser */}
      <section className="section" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '32px',
              padding: '48px',
              background: '#121212',
              border: '1px solid #222222',
              borderRadius: 'var(--radius-md)'
            }}
          >
            <div>

              <h3 style={{ fontSize: '1.8rem', textTransform: 'uppercase', marginBottom: '8px' }}>
                UNLEASH YOUR <span className="text-gradient-red">BEAST MODE</span>
              </h3>
              <p style={{ maxWidth: '540px', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                We're looking for talented video editors, thumbnail designers, scriptwriters, Minecraft players, and replay editors to join our team and work on exciting projects.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button
                onClick={() => navigateTo('jobs')}
                className="btn btn-primary"
              >
                ENROLL NOW
              </button>
              <a
                href={COMPANY_INFO.socials.discord}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                <IconDiscord size={18} /> JOIN DISCORD
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
