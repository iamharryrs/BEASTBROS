import React from 'react';
import { IconCheck } from './Icons';

export const ToastNotification = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        backgroundColor: '#181818',
        border: '1px solid #FF2020',
        borderRadius: 'var(--radius-sm)',
        padding: '14px 22px',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.7), 0 0 20px rgba(255, 32, 32, 0.25)',
        zIndex: 2000,
        animation: 'fadeIn 0.25s ease',
        fontFamily: 'var(--font-heading)',
        fontSize: '0.88rem',
        fontWeight: 600
      }}
    >
      <div
        style={{
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          background: 'var(--gradient-red)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFF'
        }}
      >
        <IconCheck size={14} />
      </div>
      <span>{message}</span>
    </div>
  );
};
