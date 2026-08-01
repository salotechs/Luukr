import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export const DoodleBackground: React.FC = () => {
  const primaryBgUrl = 'https://lh3.googleusercontent.com/d/1yXNDspW4pAlrvmBanljQL7ogSTHGmuUL';
  const fallbackBgUrl = 'https://drive.google.com/uc?export=view&id=1yXNDspW4pAlrvmBanljQL7ogSTHGmuUL';
  const [bgSrc, setBgSrc] = useState(primaryBgUrl);
  const [bgFailed, setBgFailed] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleError = () => {
    if (bgSrc === primaryBgUrl) {
      setBgSrc(fallbackBgUrl);
    } else {
      setBgFailed(true);
    }
  };

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
      {!bgFailed ? (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          {/* Full responsive background image enlarged and centered to cover the body area */}
          <img
            src={bgSrc}
            alt=""
            onError={handleError}
            className={`w-[240%] h-[240%] sm:w-[280%] sm:h-[280%] max-w-none max-h-none object-cover object-center transition-all duration-300 ${
              isDark ? 'opacity-60 brightness-100 contrast-125' : 'opacity-75 brightness-105 contrast-105'
            }`}
          />
          {/* Soft ambient gradient overlay allowing background people image to show edge-to-edge */}
          <div className={`absolute inset-0 transition-colors duration-300 ${
            isDark 
              ? 'bg-gradient-to-b from-[#060911]/50 via-[#060911]/30 to-[#060911]/65' 
              : 'bg-gradient-to-b from-white/40 via-white/15 to-white/50'
          }`} />
        </div>
      ) : (
        <div className={`w-full h-full ${
          isDark 
            ? 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-900/30 via-slate-950 to-slate-950' 
            : 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-100/60 via-slate-50 to-slate-100'
        }`} />
      )}

      {/* Top overlay: fades from background color to transparent */}
      <div className={`fixed top-0 left-0 right-0 h-24 sm:h-32 md:h-40 lg:h-48 pointer-events-none transition-colors duration-300 z-10 ${
        isDark 
          ? 'bg-gradient-to-b from-[#060911] via-[#060911]/50 to-transparent'
          : 'bg-gradient-to-b from-white via-white/60 to-transparent'
      }`} />

      {/* Bottom overlay: fades from transparent to background color */}
      <div className={`fixed bottom-0 left-0 right-0 h-24 sm:h-32 md:h-40 lg:h-48 pointer-events-none transition-colors duration-300 z-10 ${
        isDark 
          ? 'bg-gradient-to-t from-[#060911] via-[#060911]/50 to-transparent'
          : 'bg-gradient-to-t from-white via-white/60 to-transparent'
      }`} />
    </div>
  );
};
