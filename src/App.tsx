import React, { useState, useEffect } from 'react';
import { DoodleBackground } from './components/DoodleBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { Modals } from './components/Modals';
import { ModalType } from './types';
import { useTheme } from './context/ThemeContext';

export default function App() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Smart back button handling - push state when modal opens
  useEffect(() => {
    if (activeModal) {
      // Push a state entry so back button closes modal instead of navigating away
      window.history.pushState({ modal: activeModal }, '');
    }
  }, [activeModal]);

  // Handle browser back button
  useEffect(() => {
    const handlePopState = () => {
      setActiveModal(null);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleLaunchWeb = () => {
    window.location.href = 'https://app.luukr.com';
  };

  const handleScrollToSection = (section: string) => {
    // Map section names to modal types
    const modalMap: Record<string, ModalType> = {
      about: 'about',
      safety: 'safety',
      mobile: 'mobile',
    };

    const modal = modalMap[section];
    if (modal) {
      setActiveModal(modal);
    }
  };

  return (
    <div className={`min-h-screen w-full relative flex flex-col font-sans transition-colors duration-200 overflow-x-clip justify-between ${
      isDark 
        ? 'bg-[#060911] text-slate-100 selection:bg-pink-500 selection:text-white' 
        : 'bg-white text-slate-900 selection:bg-black selection:text-white'
    }`}>
      {/* Header Navigation */}
      <Navbar onLaunchWeb={handleLaunchWeb} onScrollToSection={handleScrollToSection} />

      {/* Main Landing Content with background image restricted to body section */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center w-full min-h-[calc(100vh-5rem)] overflow-hidden">
        <DoodleBackground />
        <Hero
          onLaunchWeb={handleLaunchWeb}
        />
      </main>

      {/* Footer */}
      <Footer 
        onLaunchWeb={handleLaunchWeb}
        onScrollToSection={handleScrollToSection}
      />

      {/* Auth & Info Modals */}
      <Modals activeModal={activeModal} onClose={() => setActiveModal(null)} />
    </div>
  );
}


