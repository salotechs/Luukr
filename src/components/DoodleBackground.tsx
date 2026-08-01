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
        <div 
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{
            backgroundImage: `url('${bgSrc}')`,
            backgroundSize: 'auto',
            backgroundPosition: 'top left',
            backgroundRepeat: 'repeat',
          }}
        >
          {/* Soft ambient gradient overlay allowing background people image to show edge-to-edge */}
          <div className={`absolute inset-0 w-full h-full transition-colors duration-300 ${
            isDark 
              ? 'bg-gradient-to-b from-[#060911]/50 via-[#060911]/30 to-[#060911]/65' 
              : 'bg-gradient-to-b from-white/40 via-white/15 to-white/50'
          }`} />
          
          {/* Fallback image element for cases where CSS background fails */}
          <img
            src={bgSrc}
            alt=""
            onError={handleError}
            className="hidden"
          />
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
