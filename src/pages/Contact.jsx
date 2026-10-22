import React, { useState } from 'react';
import { IconMail, IconInstagram, IconDiscord, IconCheck, IconCopy, IconArrowRight } from '../components/Icons';
import { COMPANY_INFO, FOUNDERS } from '../data/beastbrosData';

export const Contact = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Video Editing',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const constructEmailBody = () => {
    return `PROJECT INQUIRY FOR BEASTBROS ENTERTAINMENT
Service: ${formData.service}

--- CLIENT DETAILS ---
Name: ${formData.name}
Email: ${formData.email}

--- PROJECT DETAILS & BRIEF ---
${formData.details}

---
Sent via BeastBros Entertainment Contact Portal`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.details) {
      if (onShowToast) onShowToast('Please fill in all required fields.');
      return;
    }

    const subject = encodeURIComponent(`BeastBros Inquiry: ${formData.service} - ${formData.name}`);
    const body = encodeURIComponent(constructEmailBody());
    const mailtoUrl = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);

    if (onShowToast) {
      onShowToast(`Opening mail client to send to ${COMPANY_INFO.email}`);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(constructEmailBody());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
    if (onShowToast) onShowToast('Project brief copied to clipboard!');
  };

  return (
    <div className="page-contact" style={{ paddingTop: 'calc(var(--nav-height) + 40px)', paddingBottom: '100px' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header" style={{ marginBottom: '50px' }}>
          <span className="section-tag">
            <span className="section-tag-dot"></span>
            GET IN TOUCH
          </span>
          <h1 className="section-title">
            LET'S CREATE <span className="text-gradient-red">SOMETHING GREAT</span>
          </h1>
          <p className="section-description">
            Have a project in mind? Tell us what you're working on, and let's bring your vision to life.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '40px',
            alignItems: 'start',
            marginBottom: '80px'
          }}
          className="contact-layout"
        >
          {/* Form Surface */}
          <div
            className="card-surface"
            style={{
              padding: '40px',
              border: '1px solid #242424',
              background: 'linear-gradient(180deg, #151515 0%, #0e0e0e 100%)'
            }}
          >
            <h3 style={{ fontSize: '1.4rem', textTransform: 'uppercase', marginBottom: '8px', color: '#FFFFFF' }}>
              PROJECT INQUIRY FORM
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '28px' }}>
              Fill in your details below. Submissions are addressed to <span style={{ color: '#FF4444' }}>{COMPANY_INFO.email}</span>.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Harry Miller"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Your Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@domain.com"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Service Needed</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="Video Editing">Video Editing (Long-form / Shorts)</option>
                    <option value="Thumbnail & Poster Design">Thumbnail & Poster Design</option>
                    <option value="Scriptwriting">Scriptwriting & Concept Development</option>
                    <option value="Full Production Pipeline">Full Pre-to-Post Production Pipeline</option>
                    <option value="Minecraft Scene & Replay Editing">Minecraft Scene & Replay Editing</option>
                    <option value="Custom Collaboration">Custom Collaboration / Brand Deal</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Project Details & Requirements *</label>
                  <textarea
                    name="details"
                    required
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Describe your channel/brand, target delivery date, references, style preference, or links to raw footage..."
                    className="form-textarea"
                    style={{ minHeight: '140px' }}
                  />
                </div>

                <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ flex: 1 }}
                  >
                    SEND INQUIRY <IconArrowRight size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="btn btn-secondary"
                    title="Copy formatted brief"
                  >
                    {copied ? <IconCheck size={18} /> : <IconCopy size={18} />}
                    {copied ? "COPIED" : "COPY BRIEF"}
                  </button>
                </div>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '30px 0' }}>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'rgba(255, 32, 32, 0.15)',
                    border: '2px solid #FF2020',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 18px',
                    color: '#FF2020'
                  }}
                >
                  <IconCheck size={28} />
                </div>
                <h4 style={{ fontSize: '1.35rem', marginBottom: '8px' }}>
                  INQUIRY GENERATED
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '24px' }}>
                  Your email client has been triggered to send directly to <strong style={{ color: '#FFFFFF' }}>{COMPANY_INFO.email}</strong>.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
                  <button onClick={handleCopy} className="btn btn-secondary">
                    {copied ? "COPIED" : "COPY BRIEF DETAILS"}
                  </button>
                  <button onClick={() => setSubmitted(false)} className="btn btn-primary">
                    NEW MESSAGE
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Direct Channels Surface */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Email Card */}
            <div
              style={{
                padding: '28px',
                backgroundColor: '#141414',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid #242424'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                <div style={{ color: '#FF2020' }}>
                  <IconMail size={22} />
                </div>
                <h4 style={{ fontSize: '1.1rem', color: '#FFFFFF' }}>Studio Email</h4>
              </div>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                Direct client queries, proposals, and project briefs:
              </p>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                style={{
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  wordBreak: 'break-all'
                }}
              >
                {COMPANY_INFO.email}
              </a>
            </div>

            {/* Discord Community */}
            <div
              style={{
                padding: '28px',
                backgroundColor: '#141414',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid #242424'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                <div style={{ color: '#FFFFFF' }}>
                  <IconDiscord size={22} />
                </div>
                <h4 style={{ fontSize: '1.1rem', color: '#FFFFFF' }}>Official Discord</h4>
              </div>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginBottom: '14px' }}>
                Connect with our team, editors, and fellow creators on our Discord server:
              </p>
              <a
                href={COMPANY_INFO.socials.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-red"
                style={{ fontSize: '0.8rem', padding: '8px 18px' }}
              >
                JOIN BEASTBROS DISCORD
              </a>
            </div>

            {/* Studio Instagram */}
            <div
              style={{
                padding: '28px',
                backgroundColor: '#141414',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid #242424'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                <div style={{ color: '#FFFFFF' }}>
                  <IconInstagram size={22} />
                </div>
                <h4 style={{ fontSize: '1.1rem', color: '#FFFFFF' }}>Official Instagram</h4>
              </div>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginBottom: '14px' }}>
                Follow our official updates and creative releases:
              </p>
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ fontSize: '0.8rem', padding: '8px 18px' }}
              >
                {COMPANY_INFO.socials.instagramHandle}
              </a>
            </div>
          </div>
        </div>

        {/* Founders IG Showcase (Requested explicitly in Section 8) */}
        <div
          style={{
            borderTop: '1px solid #222222',
            paddingTop: '40px'
          }}
        >
          <div style={{ marginBottom: '24px' }}>
            <span style={{ fontSize: '0.74rem', color: '#FF4444', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              DIRECT REACHOUT
            </span>
            <h3 style={{ fontSize: '1.4rem', textTransform: 'uppercase', color: '#FFFFFF' }}>
              FOUNDERS' INSTAGRAM PROFILES
            </h3>
          </div>

          <div className="grid-3">
            {FOUNDERS.map((founder, idx) => (
              <a
                key={idx}
                href={founder.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '20px 24px',
                  backgroundColor: '#131313',
                  border: '1px solid #222222',
                  borderRadius: 'var(--radius-sm)',
                  color: '#FFFFFF',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#FF2020';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#222222';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '2px' }}>{founder.name}</h4>
                  <span style={{ fontSize: '0.78rem', color: '#FF5555' }}>{founder.role}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <IconInstagram size={20} />
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{founder.instagramHandle}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
