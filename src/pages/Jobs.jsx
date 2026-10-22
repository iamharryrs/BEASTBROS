import React from 'react';
import { IconInstagram, IconArrowRight, IconSparkles } from '../components/Icons';
import { RECRUITMENT_ROLES, COMPANY_INFO, FOUNDERS } from '../data/beastbrosData';

export const Jobs = ({ onOpenEnroll }) => {
  return (
    <div className="page-jobs" style={{ paddingTop: 'calc(var(--nav-height) + 40px)', paddingBottom: '100px' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header" style={{ marginBottom: '50px' }}>

          <h1 className="section-title">
            BE THE <span className="text-gradient-red"> BEAST</span>
          </h1>
          <p className="section-description">
            We're always looking for creative minds who are passionate about their craft. If you have the skills, the vision, and the drive, we'd love to hear from you.
          </p>
        </div>

        {/* 6 Recruitment Cards */}
        <div className="grid-3" style={{ marginBottom: '80px' }}>
          {RECRUITMENT_ROLES.map((role) => (
            <div
              key={role.id}
              className="card-surface"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '34px 28px',
                border: '1px solid #242424',
                background: 'linear-gradient(180deg, #151515 0%, #0e0e0e 100%)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#FF2020',
                      boxShadow: '0 0 8px #FF2020'
                    }}
                  />
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#FF5555'
                    }}
                  >
                    APPLICATIONS OPEN
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', marginBottom: '12px', color: '#FFFFFF' }}>
                  {role.title}
                </h3>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '22px' }}>
                  {role.description}
                </p>

                {/* Skill Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
                  {role.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '0.74rem',
                        padding: '4px 10px',
                        background: '#1a1a1a',
                        borderRadius: '4px',
                        color: '#A0A0A0',
                        border: '1px solid #282828'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* ENROLL NOW Button */}
              <button
                onClick={() => onOpenEnroll(role)}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  fontSize: '0.86rem',
                  letterSpacing: '0.08em'
                }}
              >
                JOIN NOW <IconArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* ========================================================
            INSTAGRAM SECTION
            ======================================================== */}
        <section
          style={{
            padding: '60px 40px',
            backgroundColor: '#111111',
            borderRadius: 'var(--radius-md)',
            border: '1px solid #222222',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '-100px',
              right: '-100px',
              width: '400px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(255, 32, 32, 0.08) 0%, transparent 70%)',
              pointerEvents: 'none'
            }}
          />

          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="section-tag" style={{ marginBottom: '12px' }}>
              <span className="section-tag-dot"></span>
              COMMUNITY & CREATIVE JOURNEY
            </span>
            <h2 className="section-title" style={{ fontSize: '2.2rem' }}>
              FOLLOW OUR <span className="text-gradient-red">JOURNEY</span>
            </h2>
            <p style={{ maxWidth: '580px', margin: '0 auto 28px', color: 'var(--text-secondary)', fontSize: '0.98rem' }}>
              Behind-the-scenes editing breakdowns, thumbnail concepts, production stories, and studio announcements.
            </p>

            <a
              href={COMPANY_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px 36px',
                fontSize: '0.92rem'
              }}
            >
              <IconInstagram size={22} /> FOLLOW US ON INSTAGRAM ({COMPANY_INFO.socials.instagramHandle})
            </a>
          </div>

          {/* 3 Dedicated Founder Instagram Sections */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
              marginTop: '40px',
              borderTop: '1px solid #222222',
              paddingTop: '36px'
            }}
          >
            {FOUNDERS.map((founder, idx) => (
              <div
                key={idx}
                style={{
                  padding: '24px',
                  background: '#161616',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid #262626',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px'
                }}
              >
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: '#FFFFFF', marginBottom: '4px' }}>
                    {founder.name}
                  </h4>
                  <span style={{ fontSize: '0.78rem', color: '#FF5555', display: 'block', marginBottom: '4px' }}>
                    {founder.role}
                  </span>
                  <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                    {founder.instagramHandle}
                  </span>
                </div>

                <a
                  href={founder.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{
                    padding: '8px 14px',
                    fontSize: '0.78rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <IconInstagram size={16} /> FOLLOW
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
