import React, { useState } from 'react';

interface LuukrLogoProps {
  className?: string;
  showText?: boolean;
}

export const LuukrLogo: React.FC<LuukrLogoProps> = ({ className = 'h-10 w-auto', showText = false }) => {
  const primaryLogoUrl = 'https://lh3.googleusercontent.com/d/1gOT2d5m6ZXW5rjc7ym1OAVpicTcZpje8';
  const fallbackLogoUrl = 'https://drive.google.com/uc?export=view&id=1gOT2d5m6ZXW5rjc7ym1OAVpicTcZpje8';
  const [imgSrc, setImgSrc] = useState(primaryLogoUrl);
  const [imgFailed, setImgFailed] = useState(false);

  const handleError = () => {
    if (imgSrc === primaryLogoUrl) {
      setImgSrc(fallbackLogoUrl);
    } else {
      setImgFailed(true);
    }
  };

  return (
    <div className="inline-flex items-center">
      {!imgFailed ? (
        <img
          src={imgSrc}
          alt="Luukr Logo"
          onError={handleError}
          className={`${className} object-contain`}
        />
      ) : (
        <div className="h-10 px-3 pink-gradient text-white rounded-xl flex items-center justify-center font-black text-lg shadow-md">
          Luukr
        </div>
      )}
      {showText && (
        <span className="ml-2 text-2xl font-black tracking-tight text-current">Luukr</span>
      )}
    </div>
  );
};


