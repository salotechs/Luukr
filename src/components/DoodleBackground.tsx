import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const DoodleBackground: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        {/* SVG Background with responsive scaling */}
        <svg
          viewBox="0 0 300 200"
          className={`w-[240%] h-[240%] sm:w-[280%] sm:h-[280%] max-w-none max-h-none object-cover object-center transition-all duration-300 ${
            isDark ? 'opacity-45 brightness-110 contrast-110' : 'opacity-40 brightness-125 contrast-90'
          }`}
          style={{
            filter: isDark 
              ? 'drop-shadow(0 0 2px rgba(255,255,255,0.1))' 
              : 'drop-shadow(0 0 2px rgba(0,0,0,0.05))'
          }}
        >
          <image href="/doodle-bg.svg" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
        </svg>
        
        {/* Soft ambient gradient overlay allowing background to show edge-to-edge */}
        <div className={`absolute inset-0 transition-colors duration-300 ${
          isDark 
            ? 'bg-gradient-to-b from-[#060911]/60 via-[#060911]/40 to-[#060911]/70' 
            : 'bg-gradient-to-b from-slate-50/70 via-slate-100/40 to-white/60'
        }`} />
      </div>

      {/* Top overlay: fades from background color to transparent */}
      <div className={`fixed top-0 left-0 right-0 h-24 sm:h-32 md:h-40 lg:h-48 pointer-events-none transition-colors duration-300 z-10 ${
        isDark 
          ? 'bg-gradient-to-b from-[#060911] via-[#060911]/40 to-transparent'
          : 'bg-gradient-to-b from-slate-50 via-slate-50/40 to-transparent'
      }`} />

      {/* Bottom overlay: fades from transparent to background color */}
      <div className={`fixed bottom-0 left-0 right-0 h-24 sm:h-32 md:h-40 lg:h-48 pointer-events-none transition-colors duration-300 z-10 ${
        isDark 
          ? 'bg-gradient-to-t from-[#060911] via-[#060911]/40 to-transparent'
          : 'bg-gradient-to-t from-slate-50 via-slate-50/40 to-transparent'
      }`} />
    </div>
  );
};
