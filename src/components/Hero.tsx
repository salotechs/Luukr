import React, { useState } from 'react';
import { User, Home, Car, Shirt, Watch, Sparkles, Gem, Compass, Music, Flame, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onLaunchWeb: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onLaunchWeb }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const heroImagePrimary = 'https://lh3.googleusercontent.com/d/1kEhcxAV3CGXCaXWIdr3Y2-ZGWIY77CIz';
  const heroImageFallback = 'https://drive.google.com/uc?export=view&id=1kEhcxAV3CGXCaXWIdr3Y2-ZGWIY77CIz';
  const [heroImgSrc, setHeroImgSrc] = useState(heroImagePrimary);
  const [heroImgFailed, setHeroImgFailed] = useState(false);

  const handleHeroImgError = () => {
    if (heroImgSrc === heroImagePrimary) {
      setHeroImgSrc(heroImageFallback);
    } else {
      setHeroImgFailed(true);
    }
  };

  const row1Categories = [
    { id: 'c1', name: 'People & Singles', icon: User },
    { id: 'c2', name: 'Homes & Penthouses', icon: Home },
    { id: 'c3', name: 'Vintage Cars', icon: Car },
    { id: 'c4', name: 'Designer & Archival', icon: Shirt },
    { id: 'c5', name: 'Watches & Timepieces', icon: Watch },
    { id: 'c6', name: 'Art & Collectibles', icon: Sparkles },
  ];

  const row2Categories = [
    { id: 'r1', name: 'Luxury Villas', icon: Home },
    { id: 'r2', name: 'Fine Jewelry', icon: Gem },
    { id: 'r3', name: '1974 Porsche 911', icon: Car },
    { id: 'r4', name: 'Yohji Yamamoto', icon: Shirt },
    { id: 'r5', name: 'Analog Audio', icon: Music },
    { id: 'r6', name: 'Hot Listings', icon: Flame },
    { id: 'r7', name: 'Global Singles', icon: Compass },
  ];

  return (
    <section className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-12 py-8 md:py-14 text-center max-w-5xl mx-auto my-auto w-full overflow-hidden">
      {/* Endless Loop Marquee Container */}
      <div className="w-full max-w-3xl space-y-3 mb-8 overflow-hidden pointer-events-none select-none mask-fade">
        {/* Row 1: Moving Endless Left */}
        <div className="overflow-hidden w-full flex">
          <div className="animate-marquee-left flex gap-3 pr-3">
            {[...row1Categories, ...row1Categories, ...row1Categories].map((cat, idx) => {
              const IconComponent = cat.icon;
              return (
                <div
                  key={`${cat.id}-${idx}`}
                  className="flex items-center gap-2 px-4 py-2 border rounded-full text-xs font-bold shadow-xs shrink-0 transition-colors bg-slate-900/90 border-slate-700/80 text-slate-200"
                >
                  <IconComponent className="w-3.5 h-3.5 text-pink-400" />
                  <span>{cat.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2: Moving Endless Right */}
        <div className="overflow-hidden w-full flex">
          <div className="animate-marquee-right flex gap-3 pr-3">
            {[...row2Categories, ...row2Categories, ...row2Categories].map((cat, idx) => {
              const IconComponent = cat.icon;
              return (
                <div
                  key={`${cat.id}-${idx}`}
                  className="flex items-center gap-2 px-4 py-2 border rounded-full text-xs font-bold shadow-xs shrink-0 transition-colors bg-slate-950/90 border-slate-800 text-slate-300"
                >
                  <IconComponent className="w-3.5 h-3.5 text-amber-400" />
                  <span>{cat.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="space-y-8 max-w-3xl flex flex-col items-center">
        {!heroImgFailed && (
          <div className="w-full flex justify-center -mb-2">
            <img 
              src={heroImgSrc} 
              alt="Luukr Badge" 
              onError={handleHeroImgError}
              className="h-28 sm:h-36 md:h-44 w-auto object-contain filter drop-shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        <h1 className={`text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-[0.95] select-none ${
          isDark ? 'text-white' : 'text-slate-950'
        }`}>
          Discover. Swipe.<br />
          <span className="pink-gradient-text">Everything.</span>
        </h1>

        <p className={`text-lg sm:text-xl font-semibold max-w-xl mx-auto leading-relaxed ${
          isDark ? 'text-slate-300' : 'text-slate-800'
        }`}>
          Find your next partner, your next penthouse, or your next vintage ride.
          Connecting humans with the things and people they love.
        </p>

        <div className="flex flex-col items-center gap-6 pt-4">
          <button
            onClick={onLaunchWeb}
            className="px-10 py-4 text-lg font-black rounded-full pink-gradient-glow text-white shadow-2xl shadow-pink-500/30 hover:scale-105 transition-all cursor-pointer active:scale-95 flex items-center gap-3 crisp-btn animate-shake"
          >
            <span>Launch Web App</span>
            <ArrowRight className="w-5 h-5" />
          </button>


        </div>
      </div>
    </section>
  );
};


