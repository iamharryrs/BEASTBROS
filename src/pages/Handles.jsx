import React from 'react';
import { IconYouTube, IconInstagram, IconDiscord, IconMail, IconExternalLink } from '../components/Icons';
import { COMPANY_INFO, FOUNDERS } from '../data/beastbrosData';

export const Handles = () => {
  return (
    <div className="page-handles" style={{ paddingTop: 'calc(var(--nav-height) + 40px)', paddingBottom: '100px' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header" style={{ marginBottom: '50px' }}>

          <h1 className="section-title">
            ALL SOCIAL <span className="text-gradient-red">HANDLES</span>
          </h1>
          <p className="section-description">
            Connect with BeastBros Entertainment and our founding team across YouTube, Instagram, and Discord.
          </p>
        </div>

        {/* 1. Official BeastBros Entertainment Hub */}
        <div
          style={{
            padding: '40px',
            background: 'linear-gradient(180deg, #181212 0%, #100e0e 100%)',
            border: '1px solid rgba(255, 32, 32, 0.4)',
            borderRadius: 'var(--radius-md)',
            marginBottom: '60px',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.7), var(--glow-subtle)'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
              borderBottom: '1px solid #282020',
              paddingBottom: '20px',
              marginBottom: '28px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <img
                src="/logo.png"
                alt="Logo"
                style={{ height: '40px', width: 'auto' }}
              />
              <div>
                <h2 style={{ fontSize: '1.45rem', textTransform: 'uppercase', color: '#FFFFFF' }}>
                  BEASTBROS ENTERTAINMENT
                </h2>
                <span style={{ fontSize: '0.82rem', color: '#FF5555', fontWeight: 600 }}>
                  Official Production Network
                </span>
              </div>
            </div>


          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '18px'
            }}
          >
            {/* YouTube */}
            <a
              href={COMPANY_INFO.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '18px 20px',
                backgroundColor: '#141414',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid #282828',
                color: '#FFFFFF',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#FF2020';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#282828';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: '#201515',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF'
                }}
              >
                <IconYouTube size={22} />
              </div>
              <div style={{ flex: 1 }}>
                <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)', display: 'block' }}>YouTube Channel</span>
                <strong style={{ fontSize: '0.92rem' }}>{COMPANY_INFO.socials.youtubeHandle}</strong>
              </div>
              <IconExternalLink size={16} className="text-secondary" />
            </a>

            {/* Instagram */}
            <a
              href={COMPANY_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '18px 20px',
                backgroundColor: '#141414',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid #282828',
                color: '#FFFFFF',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#FF2020';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#282828';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: '#201515',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF'
                }}
              >
                <IconInstagram size={22} />
              </div>
              <div style={{ flex: 1 }}>
                <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)', display: 'block' }}>Instagram</span>
                <strong style={{ fontSize: '0.92rem' }}>{COMPANY_INFO.socials.instagramHandle}</strong>
              </div>
              <IconExternalLink size={16} className="text-secondary" />
            </a>

            {/* Discord */}
            <a
              href={COMPANY_INFO.socials.discord}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '18px 20px',
                backgroundColor: '#141414',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid #282828',
                color: '#FFFFFF',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#FF2020';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#282828';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: '#201515',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF'
                }}
              >
                <IconDiscord size={22} />
              </div>
              <div style={{ flex: 1 }}>
                <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)', display: 'block' }}>Discord Community</span>
                <strong style={{ fontSize: '0.92rem' }}>BeastBros Community</strong>
              </div>
              <IconExternalLink size={16} className="text-secondary" />
            </a>

            {/* Email */}
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '18px 20px',
                backgroundColor: '#141414',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid #282828',
                color: '#FFFFFF',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#FF2020';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#282828';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: '#201515',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF'
                }}
              >
                <IconMail size={22} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)', display: 'block' }}>Official Mail</span>
                <strong style={{ fontSize: '0.86rem', display: 'block', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                  {COMPANY_INFO.email}
                </strong>
              </div>
              <IconExternalLink size={16} className="text-secondary" />
            </a>
          </div>
        </div>

        {/* 2. Founders Individual Channels & Handles */}
        <div>
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.4rem', textTransform: 'uppercase', color: '#FFFFFF' }}>
              FOUNDING TEAM <span className="text-gradient-red">CHANNELS</span>
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Follow Harry, Pritha Roy, and Arush Verma on their personal YouTube channels and Instagram profiles.
            </p>
          </div>

          <div className="grid-3">
            {FOUNDERS.map((founder, idx) => (
              <div
                key={idx}
                className="card-surface"
                style={{
                  padding: '30px 24px',
                  border: '1px solid #242424',
                  background: '#121212'
                }}
              >
                <div style={{ marginBottom: '18px' }}>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      color: '#FF5555',
                      letterSpacing: '0.08em',
                      display: 'block',
                      marginBottom: '4px'
                    }}
                  >
                    {founder.role}
                  </span>
                  <h4 style={{ fontSize: '1.4rem', color: '#FFFFFF' }}>{founder.name}</h4>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {/* YouTube Link */}
                  <a
                    href={founder.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 16px',
                      backgroundColor: '#181818',
                      borderRadius: '8px',
                      border: '1px solid #282828',
                      color: '#FFFFFF',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#FF2020';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#282828';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ color: '#FFFFFF' }}>
                        <IconYouTube size={18} />
                      </div>
                      <span style={{ fontSize: '0.86rem', fontWeight: 600 }}>{founder.youtubeHandle}</span>
                    </div>
                    <IconExternalLink size={14} className="text-muted" />
                  </a>

                  {/* Instagram Link */}
                  <a
                    href={founder.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 16px',
                      backgroundColor: '#181818',
                      borderRadius: '8px',
                      border: '1px solid #282828',
                      color: '#FFFFFF',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#FF2020';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#282828';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{ color: '#FFFFFF' }}>
                        <IconInstagram size={18} />
                      </div>
                      <span style={{ fontSize: '0.86rem', fontWeight: 600 }}>{founder.instagramHandle}</span>
                    </div>
                    <IconExternalLink size={14} className="text-muted" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
