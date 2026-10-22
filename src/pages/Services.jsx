import React from 'react';
import { IconFilm, IconImage, IconPen, IconCheck, IconArrowRight } from '../components/Icons';
import { SERVICES } from '../data/beastbrosData';

export const Services = ({ setActivePage }) => {
  const navigateToContact = () => {
    setActivePage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getServiceIcon = (index) => {
    switch (index) {
      case 0:
        return <IconFilm size={28} />;
      case 1:
        return <IconImage size={28} />;
      case 2:
      default:
        return <IconPen size={28} />;
    }
  };

  return (
    <div className="page-services" style={{ paddingTop: 'calc(var(--nav-height) + 40px)', paddingBottom: '100px' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header" style={{ marginBottom: '60px' }}>

          <h1 className="section-title">
            OUR <span className="text-gradient-red">SERVICES</span>
          </h1>
          <p className="section-description">
            BeastBros Entertainment provides all creative services from pre-production through post-production. We turn your concepts into cinematic, high-retention content tailored for maximum audience impact.
          </p>
        </div>

        {/* 3 Dedicated Service Cards */}
        <div className="grid-3" style={{ marginBottom: '70px' }}>
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="card-surface"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '38px 30px',
                border: '1px solid #202020',
                background: 'linear-gradient(180deg, #161616 0%, #101010 100%)'
              }}
            >
              <div>
                {/* Icon & Number */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '28px'
                  }}
                >
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '14px',
                      background: 'rgba(255, 32, 32, 0.1)',
                      border: '1px solid rgba(255, 32, 32, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FF3333',
                      boxShadow: '0 4px 18px rgba(255, 32, 32, 0.15)'
                    }}
                  >
                    {getServiceIcon(index)}
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.2rem',
                      fontWeight: 800,
                      color: '#444444'
                    }}
                  >
                    {service.number}
                  </span>
                </div>

                {/* Title */}
                <h2
                  style={{
                    fontSize: '1.45rem',
                    marginBottom: '14px',
                    color: '#FFFFFF'
                  }}
                >
                  {service.title}
                </h2>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.94rem',
                    lineHeight: 1.6,
                    color: 'var(--text-secondary)',
                    marginBottom: '28px'
                  }}
                >
                  {service.description}
                </p>

                {/* Service Offerings Checklist */}
                <div style={{ marginBottom: '32px' }}>
                  <h4
                    style={{
                      fontSize: '0.78rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#FF5555',
                      marginBottom: '14px'
                    }}
                  >
                    Key Deliverables
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {service.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        style={{
                          fontSize: '0.88rem',
                          color: '#DDDDDD',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px'
                        }}
                      >
                        <span
                          style={{
                            color: '#FF2020',
                            marginTop: '2px',
                            display: 'flex',
                            alignItems: 'center'
                          }}
                        >
                          <IconCheck size={16} />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Inquiry Action */}
              <button
                onClick={navigateToContact}
                className="btn btn-outline-red"
                style={{ width: '100%', fontSize: '0.82rem' }}
              >
                BOOK THIS SERVICE
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Inquiry CTA Card */}
        <div
          style={{
            padding: '50px 36px',
            borderRadius: 'var(--radius-md)',
            backgroundColor: '#121212',
            border: '1px solid rgba(255, 32, 32, 0.3)',
            boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '400px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(255, 32, 32, 0.12) 0%, transparent 70%)',
              pointerEvents: 'none'
            }}
          />
          <h2 style={{ fontSize: '1.9rem', textTransform: 'uppercase', marginBottom: '12px', position: 'relative' }}>
            UNLEASH YOUR <span className="text-gradient-red">BEAST</span>
          </h2>
          <p
            style={{
              maxWidth: '580px',
              margin: '0 auto 28px',
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              position: 'relative'
            }}
          >
            Looking for top-quality video editing, thumbnails, or scripts? Partner with BeastBros Entertainment and take your content to Beast Level.
          </p>
          <button
            onClick={navigateToContact}
            className="btn btn-primary"
            style={{
              padding: '16px 36px',
              fontSize: '0.92rem',
              position: 'relative'
            }}
          >
            BOOK NOW <IconArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
