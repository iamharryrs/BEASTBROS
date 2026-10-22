import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Portfolio } from './pages/Portfolio';
import { About } from './pages/About';
import { Jobs } from './pages/Jobs';
import { Handles } from './pages/Handles';
import { Contact } from './pages/Contact';
import { EnrollModal } from './components/EnrollModal';
import { ToastNotification } from './components/ToastNotification';

export function App() {
  // Support hash-based deep linking for smooth navigation & back button support
  const getInitialPage = () => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const validPages = ['home', 'services', 'portfolio', 'about', 'jobs', 'handles', 'contact'];
    return validPages.includes(hash) ? hash : 'home';
  };

  const [activePage, setActivePage] = useState(getInitialPage);
  const [enrollRole, setEnrollRole] = useState(null); // When open, shows EnrollModal
  const [toastMessage, setToastMessage] = useState(null);

  // Sync hash with state
  useEffect(() => {
    const handleHashChange = () => {
      const page = getInitialPage();
      setActivePage(page);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handlePageChange = (page) => {
    setActivePage(page);
    window.location.hash = page === 'home' ? '' : page;
  };

  const handleShowToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3500);
  };

  const renderActivePage = () => {
    switch (activePage) {
      case 'services':
        return <Services setActivePage={handlePageChange} />;
      case 'portfolio':
        return <Portfolio />;
      case 'about':
        return <About setActivePage={handlePageChange} />;
      case 'jobs':
        return <Jobs onOpenEnroll={(role) => setEnrollRole(role)} />;
      case 'handles':
        return <Handles />;
      case 'contact':
        return <Contact onShowToast={handleShowToast} />;
      case 'home':
      default:
        return (
          <Home
            setActivePage={handlePageChange}
            onOpenEnroll={(role) => setEnrollRole(role)}
          />
        );
    }
  };

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Subtle Ambient Red Glow Effects in background */}
      <div className="ambient-glow-top" />
      <div className="ambient-glow-corner" />

      {/* Global Navigation */}
      <Navbar activePage={activePage} setActivePage={handlePageChange} />

      {/* Main Page Content */}
      <main style={{ flex: 1 }}>
        {renderActivePage()}
      </main>

      {/* Global Footer */}
      <Footer setActivePage={handlePageChange} />

      {/* Dedicated Freelancer Enrollment Modal */}
      {enrollRole && (
        <EnrollModal
          selectedRole={enrollRole}
          onClose={() => setEnrollRole(null)}
          onShowToast={handleShowToast}
        />
      )}

      {/* Feedback Toast */}
      {toastMessage && (
        <ToastNotification
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      )}
    </div>
  );
}

export default App;
