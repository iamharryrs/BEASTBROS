import React, { useState } from 'react';
import { IconClose, IconCheck, IconCopy, IconMail } from './Icons';
import { COMPANY_INFO, RECRUITMENT_ROLES } from '../data/beastbrosData';

export const EnrollModal = ({ selectedRole, onClose, onShowToast }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: selectedRole?.title || 'Video Editors',
    portfolioUrl: '',
    experience: '1-3 years',
    introduction: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const constructEmailBody = () => {
    return `APPLICATION FOR BEASTBROS ENTERTAINMENT
Role: ${formData.role}

--- APPLICANT DETAILS ---
Full Name: ${formData.fullName}
Email Address: ${formData.email}
Portfolio / Reel: ${formData.portfolioUrl || 'N/A'}
Experience Level: ${formData.experience}

--- SHORT INTRODUCTION & BACKGROUND ---
${formData.introduction}

---
Submitted via BeastBros Entertainment Portal`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) {
      if (onShowToast) onShowToast('Please fill in required fields (Name & Email).');
      return;
    }

    const subject = encodeURIComponent(`BeastBros Application: ${formData.role} - ${formData.fullName}`);
    const body = encodeURIComponent(constructEmailBody());
    const mailtoUrl = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;

    // Open mail client
    window.location.href = mailtoUrl;
    setSubmitted(true);

    if (onShowToast) {
      onShowToast(`Application prepared for ${COMPANY_INFO.email}`);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(constructEmailBody());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
    if (onShowToast) onShowToast('Application text copied to clipboard!');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '640px' }}
      >
        <div className="modal-header">
          <div>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#FF4444'
              }}
            >
              Freelancer Recruitment
            </span>
            <h3 style={{ fontSize: '1.4rem', marginTop: '4px' }}>
              JOIN THE <span className="text-gradient-red">BEASTBROS</span> TEAM
            </h3>
          </div>
          <button
            onClick={onClose}
            className="modal-close-btn"
            aria-label="Close modal"
          >
            <IconClose size={20} />
          </button>
        </div>

        <div className="modal-body">
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  padding: '12px 16px',
                  backgroundColor: 'rgba(255, 32, 32, 0.08)',
                  border: '1px solid rgba(255, 32, 32, 0.25)',
                  borderRadius: 'var(--radius-sm)',
                  marginBottom: '20px',
                  fontSize: '0.88rem',
                  color: 'var(--text-secondary)'
                }}
              >
                Applying for: <strong style={{ color: '#FFFFFF' }}>{formData.role}</strong>. Applications are sent directly to <span style={{ color: '#FF5555' }}>{COMPANY_INFO.email}</span>.
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Alex Miller"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@gmail.com"
                    className="form-input"
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Selected Role</label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="form-select"
                  >
                    {RECRUITMENT_ROLES.map((r) => (
                      <option key={r.id} value={r.title}>
                        {r.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Experience Level</label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="Less than 1 year">Less than 1 year</option>
                    <option value="1-3 years">1 - 3 years</option>
                    <option value="3-5 years">3 - 5 years</option>
                    <option value="5+ years / Veteran">5+ years / Veteran</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Portfolio / Showreel / Google Drive Link</label>
                <input
                  type="url"
                  name="portfolioUrl"
                  value={formData.portfolioUrl}
                  onChange={handleChange}
                  placeholder="https://behance.net/yourprofile or YouTube / Drive link"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Introduction & What Drives You</label>
                <textarea
                  name="introduction"
                  value={formData.introduction}
                  onChange={handleChange}
                  placeholder="Tell us about your style, your software proficiency, past projects, or why you want to join BeastBros Entertainment..."
                  className="form-textarea"
                  style={{ minHeight: '100px' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ flex: 1 }}
                >
                  <IconMail size={18} /> SUBMIT APPLICATION
                </button>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="btn btn-secondary"
                  title="Copy details to clipboard"
                >
                  {copied ? <IconCheck size={18} /> : <IconCopy size={18} />}
                  {copied ? "COPIED" : "COPY DETAILS"}
                </button>
              </div>

              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '12px', textAlign: 'center' }}>
                Submitting opens your default email client to send to {COMPANY_INFO.email}. You can also copy the details to paste in Discord or webmail.
              </p>
            </form>
          ) : (
            <div style={{ textAlign: 'center', padding: '24px 0' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(255, 32, 32, 0.15)',
                  border: '2px solid #FF2020',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  color: '#FF2020'
                }}
              >
                <IconCheck size={32} />
              </div>
              <h4 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>
                APPLICATION READY!
              </h4>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', maxWidth: '480px', margin: '0 auto 24px' }}>
                Your email client was opened addressed to <strong style={{ color: '#FFFFFF' }}>{COMPANY_INFO.email}</strong>. Please ensure the email is sent from your mail app.
              </p>

              <div style={{ display: 'flex', justifyContent: 'center', gap: '14px' }}>
                <button
                  onClick={handleCopy}
                  className="btn btn-secondary"
                >
                  {copied ? <IconCheck size={18} /> : <IconCopy size={18} />}
                  {copied ? "COPIED TO CLIPBOARD" : "COPY DETAILS"}
                </button>
                <button
                  onClick={onClose}
                  className="btn btn-primary"
                >
                  DONE
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
