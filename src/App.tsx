import React, { useState } from 'react';
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

  const handleLaunchWeb = () => {
    window.location.href = 'https://app.luukr.com';
  };

  return (
    <div className={`min-h-screen w-full relative flex flex-col font-sans transition-colors duration-200 overflow-x-clip justify-between ${
      isDark 
        ? 'bg-[#060911] text-slate-100 selection:bg-pink-500 selection:text-white' 
        : 'bg-white text-slate-900 selection:bg-black selection:text-white'
    }`}>
      {/* Header Navigation */}
      <Navbar onOpenModal={(type) => setActiveModal(type)} onLaunchWeb={handleLaunchWeb} />

      {/* Main Landing Content with background image restricted to body section */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center w-full min-h-[calc(100vh-5rem)] overflow-hidden">
        <DoodleBackground />
        <Hero
          onOpenModal={(type) => setActiveModal(type)}
          onLaunchWeb={handleLaunchWeb}
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenModal={(type) => setActiveModal(type)} 
        onLaunchWeb={handleLaunchWeb}
      />

      {/* Auth & Info Modals */}
      <Modals activeModal={activeModal} onClose={() => setActiveModal(null)} />
    </div>
  );
}


