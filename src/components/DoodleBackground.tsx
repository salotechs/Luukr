import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

export const DoodleBackground: React.FC = () => {
  const primaryBgUrl = 'https://lh3.googleusercontent.com/d/1yXNDspW4pAlrvmBanljQL7ogSTHGmuUL';
  const fallbackBgUrl = 'https://drive.google.com/uc?export=view&id=1yXNDspW4pAlrvmBanljQL7ogSTHGmuUL';
  const [bgSrc, setBgSrc] = useState(primaryBgUrl);
  const [bgFailed, setBgFailed] = useState(false);
  const [maskStyle, setMaskStyle] = useState<React.CSSProperties>({});
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleError = () => {
    if (bgSrc === primaryBgUrl) {
      setBgSrc(fallbackBgUrl);
    } else {
      setBgFailed(true);
    }
  };

  // Calculate responsive mask based on viewport dimensions - smart and adaptive
  useEffect(() => {
    const calculateMask = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Adaptive blend percentages based on screen size
      let topPercent = 20;    // mobile
      let bottomPercent = 20; // mobile
      
      if (width >= 1024) {
        // Desktop: smaller blend needed
        topPercent = 12;
        bottomPercent = 12;
      } else if (width >= 768) {
        // Tablet: medium blend
        topPercent = 16;
        bottomPercent = 16;
      }
      
      // Create a mask that fades out at top and bottom
      const gradient = `linear-gradient(to bottom, 
        transparent 0%, 
        black ${topPercent}%, 
        black ${100 - bottomPercent}%, 
        transparent 100%)`;
      
      setMaskStyle({
        maskImage: gradient,
        WebkitMaskImage: gradient,
        maskSize: '100% 100%',
        WebkitMaskSize: '100% 100%',
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
      });
    };

    calculateMask();
    window.addEventListener('resize', calculateMask);
    return () => window.removeEventListener('resize', calculateMask);
  }, []);

  return (
    <div 
      className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden"
      style={maskStyle}
    >
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
    </div>
  );
};
