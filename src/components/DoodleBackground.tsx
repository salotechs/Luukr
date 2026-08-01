import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

export const DoodleBackground: React.FC = () => {
  const primaryBgUrl = 'https://lh3.googleusercontent.com/d/1yXNDspW4pAlrvmBanljQL7ogSTHGmuUL';
  const fallbackBgUrl = 'https://drive.google.com/uc?export=view&id=1yXNDspW4pAlrvmBanljQL7ogSTHGmuUL';
  const [bgSrc, setBgSrc] = useState(primaryBgUrl);
  const [bgFailed, setBgFailed] = useState(false);
  const [maskGradient, setMaskGradient] = useState('');
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleError = () => {
    if (bgSrc === primaryBgUrl) {
      setBgSrc(fallbackBgUrl);
    } else {
      setBgFailed(true);
    }
  };

  // Calculate responsive mask gradient based on viewport height
  useEffect(() => {
    const calculateMaskGradient = () => {
      const viewportHeight = window.innerHeight;
      // Mobile: blend ~15% top/bottom, Tablet: ~12%, Desktop: ~10%
      let topBlendPercent = 15;
      let bottomBlendPercent = 15;

      if (window.innerWidth >= 1024) {
        topBlendPercent = 10;
        bottomBlendPercent = 10;
      } else if (window.innerWidth >= 768) {
        topBlendPercent = 12;
        bottomBlendPercent = 12;
      }

      const topStop = topBlendPercent;
      const bottomStart = 100 - bottomBlendPercent;

      const gradient = `linear-gradient(to bottom, 
        transparent 0%, 
        rgba(0, 0, 0, 1) ${topStop}%, 
        rgba(0, 0, 0, 1) ${bottomStart}%, 
        transparent 100%)`;

      setMaskGradient(gradient);
    };

    calculateMaskGradient();
    window.addEventListener('resize', calculateMaskGradient);
    return () => window.removeEventListener('resize', calculateMaskGradient);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
      {!bgFailed ? (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          {/* Full responsive background image enlarged and centered to cover the body area */}
          <img
            src={bgSrc}
            alt=""
            onError={handleError}
            style={{
              maskImage: maskGradient,
              WebkitMaskImage: maskGradient,
            }}
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
    </div>
  );
};
