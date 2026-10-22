import React from 'react';
import { IconYouTube, IconInstagram, IconCheck, IconArrowRight } from '../components/Icons';
import { FOUNDERS, TEAM_MEMBERS } from '../data/beastbrosData';

export const About = ({ setActivePage }) => {
  return (
    <div className="page-about" style={{ paddingTop: 'calc(var(--nav-height) + 40px)', paddingBottom: '100px' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header" style={{ marginBottom: '50px' }}>

          <h1 className="section-title">
            OUR <span className="text-gradient-red">STORY</span>
          </h1>
          <p className="section-description">

          </p>
        </div>

        {/* Narrative Box */}
        <div
          style={{
            maxWidth: '920px',
            margin: '0 auto 80px',
            background: 'linear-gradient(180deg, #151515 0%, #101010 100%)',
            border: '1px solid #242424',
            borderRadius: 'var(--radius-md)',
            padding: '48px 40px',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.6)',
            position: 'relative'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '3px',
              background: 'var(--gradient-red)'
            }}
          />

          <p style={{ fontSize: '1.05rem', color: '#E0E0E0', lineHeight: 1.8, marginBottom: '24px' }}>
            BeastBros Entertainment was founded in 2025 by <strong>Harry</strong>, <strong>Pritha Roy</strong>, and <strong>Arush Verma</strong>, bringing together a shared passion for filmmaking, creativity, and digital content.
          </p>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '24px' }}>
            What started as a shared vision grew into a video production company focused on helping creators and brands with professional pre-production and post-production services. From planning and scriptwriting to video editing, thumbnail design, and poster creation, we work on every part of the creative process.
          </p>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '32px' }}>
            At BeastBros Entertainment, we provide creative services for content creators and work with talented freelancers to produce engaging content. From video editing and graphic design to scriptwriting and production, we bring creators and creative minds together. Our goal is to help content creators grow, improve their content, and reach their full potential.
          </p>

          <div
            style={{

            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '0.78rem',
                fontWeight: 800,
                letterSpacing: '0.15em',
                color: '#FF4444',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '6px'
              }}
            >

            </span>
            <p
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.4rem',
                fontWeight: 900,
                color: '#FFFFFF',
                lineHeight: 1.3
              }}
            >

            </p>
          </div>
        </div>

        {/* SECTION: OUR BEASTS (FOUNDERS) */}
        <section style={{ marginBottom: '80px' }}>
          <div className="section-header" style={{ marginBottom: '40px' }}>

            <h2 className="section-title">
              OUR <span className="text-gradient-red">BEASTS</span>
            </h2>
            <p className="section-description">

            </p>
          </div>

          <div className="grid-3">
            {FOUNDERS.map((founder, idx) => (
              <div
                key={idx}
                className="card-surface"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '36px 28px',
                  border: '1px solid #252525'
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '18px'
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: 800,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-pill)',
                        background: 'rgba(255, 32, 32, 0.12)',
                        color: '#FF4444',
                        border: '1px solid rgba(255, 32, 32, 0.3)'
                      }}
                    >
                      {founder.badge}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      Co-Founder
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.6rem', color: '#FFFFFF', marginBottom: '4px' }}>
                    {founder.name}
                  </h3>

                  <span
                    style={{
                      fontSize: '0.84rem',
                      color: '#FF5555',
                      fontWeight: 600,
                      display: 'block',
                      marginBottom: '16px'
                    }}
                  >
                    {founder.role}
                  </span>

                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                    {founder.bio}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    paddingTop: '20px',
                    borderTop: '1px solid #202020'
                  }}
                >
                  <a
                    href={founder.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '8px 14px',
                      borderRadius: '6px',
                      background: '#181818',
                      border: '1px solid #2a2a2a',
                      color: '#FFFFFF',
                      fontSize: '0.8rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#FF2020';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#2a2a2a';
                    }}
                  >
                    <IconYouTube size={16} /> YouTube
                  </a>

                  <a
                    href={founder.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '8px 14px',
                      borderRadius: '6px',
                      background: '#181818',
                      border: '1px solid #2a2a2a',
                      color: '#FFFFFF',
                      fontSize: '0.8rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#FF2020';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#2a2a2a';
                    }}
                  >
                    <IconInstagram size={16} /> Instagram
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: OUR TEAMMATES */}
        <section style={{ marginBottom: '80px' }}>
          <div className="section-header" style={{ marginBottom: '40px' }}>

            <h2 className="section-title">
              OUR <span className="text-gradient-red">TEAMMATES</span>
            </h2>
            <p className="section-description">

            </p>
          </div>

          <div className="grid-4">
            {TEAM_MEMBERS.map((member, idx) => (
              <div
                key={idx}
                className="card-surface"
                style={{
                  padding: '30px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: member.isGlitch ? '1px dashed rgba(255, 50, 50, 0.4)' : '1px solid #242424',
                  backgroundColor: member.isGlitch ? '#140c0c' : 'var(--bg-card)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: member.isGlitch ? '#FF3333' : '#A0A0A0'
                      }}
                    >
                      {member.role}
                    </span>
                    {member.isGlitch && (
                      <span
                        style={{
                          fontSize: '0.68rem',
                          padding: '2px 8px',
                          background: 'rgba(255, 32, 32, 0.2)',
                          color: '#FF4444',
                          borderRadius: '4px',
                          fontWeight: 800
                        }}
                      >
                        404
                      </span>
                    )}
                  </div>

                  <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', marginBottom: '10px' }}>
                    {member.name}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.88rem',
                      color: member.isGlitch ? '#FF8888' : 'var(--text-secondary)',
                      lineHeight: 1.5,
                      fontFamily: member.isGlitch ? 'monospace' : 'inherit'
                    }}
                  >
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: WHY WORK WITH US */}
        <section
          style={{
            padding: '50px 36px',
            backgroundColor: '#111111',
            borderRadius: 'var(--radius-md)',
            border: '1px solid #222222'
          }}
        >
          <div className="section-header" style={{ marginBottom: '40px' }}>
            <h2 className="section-title" style={{ fontSize: '2rem' }}>
              WHY CHOOSE US
            </h2>
          </div>

          <div className="grid-3">
            <div style={{ padding: '16px' }}>

              <h3 style={{ fontSize: '1.15rem', color: '#FFFFFF', marginBottom: '8px' }}>
                End-to-End Pipeline
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                No disconnected handoffs. We handle creative concepting, scriptwriting, scene recording, visual thumbnails, and final video editing under one unified vision.
              </p>
            </div>

            <div style={{ padding: '16px' }}>

              <h3 style={{ fontSize: '1.15rem', color: '#FFFFFF', marginBottom: '8px' }}>
                Storytelling & Retention
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                We don't just cut clips; we craft narrative momentum with custom sound design, pacing, and visual hooks engineered for peak retention.
              </p>
            </div>

            <div style={{ padding: '16px' }}>

              <h3 style={{ fontSize: '1.15rem', color: '#FFFFFF', marginBottom: '8px' }}>
                Talent & Freelancer Hub
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                We bring elite freelance video editors, designers, and Minecraft camera specialists together to scale creative output without compromising quality.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
