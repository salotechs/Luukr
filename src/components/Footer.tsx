import React from 'react';
import { ModalType } from '../types';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Facebook, Instagram } from 'lucide-react';
import { LuukrLogo } from './LuukrLogo';

interface FooterProps {
  onLaunchWeb?: () => void;
  onScrollToSection?: (section: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToSection }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <footer className={`relative z-10 border-t transition-colors duration-200 w-full overflow-hidden ${
      isDark 
        ? 'bg-[#090D16]/90 border-slate-800/80 text-slate-300' 
        : 'bg-white/90 border-slate-200/80 text-slate-700'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-10 md:py-16">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-10 border-b border-slate-800/20">
          {/* Brand Column (Spans 2 columns on desktop/tablet) */}
          <div className="sm:col-span-2 space-y-3.5 text-left">
            <div className="flex items-center">
              <LuukrLogo className="h-12 sm:h-16 lg:h-20 w-auto object-contain" />
            </div>

            <p className={`text-xs sm:text-sm leading-relaxed max-w-sm font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              The spatial marketplace and social network connecting people with high value listings, penthouses, luxury cars, timepieces, and meaningful connections worldwide.
            </p>
          </div>

          {/* Company */}
          <div className="text-left space-y-3">
            <h4 className={`text-xs font-black uppercase tracking-wider ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Company
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <button 
                  onClick={() => onScrollToSection?.('about')} 
                  className="hover:text-pink-500 transition-colors cursor-pointer text-left"
                >
                  About Luukr
                </button>
              </li>
              <li>
                <a 
                  href="#careers"
                  className="hover:text-pink-500 transition-colors cursor-pointer text-left inline-flex items-center gap-1.5 flex-wrap"
                >
                  <span>Careers</span>
                  <span className="px-1.5 py-0.5 text-[9px] bg-pink-500 text-white rounded font-bold">HIRING</span>
                </a>
              </li>
              <li>
                <a 
                  href="#press"
                  className="hover:text-pink-500 transition-colors cursor-pointer text-left"
                >
                  Press & Media Kit
                </a>
              </li>
              <li>
                <button 
                  onClick={() => onScrollToSection?.('safety')} 
                  className="hover:text-pink-500 transition-colors cursor-pointer text-left"
                >
                  Trust & Safety
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="text-left space-y-3">
            <h4 className={`text-xs font-black uppercase tracking-wider ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Legal & Safety
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a 
                  href="#privacy"
                  className="hover:text-pink-500 transition-colors cursor-pointer text-left"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="#terms"
                  className="hover:text-pink-500 transition-colors cursor-pointer text-left"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a 
                  href="#cookies"
                  className="hover:text-pink-500 transition-colors cursor-pointer text-left"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a 
                  href="#community"
                  className="hover:text-pink-500 transition-colors cursor-pointer text-left"
                >
                  Community Guidelines
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar Section */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-slate-500 text-center sm:text-left">
            <p>© 2026 Luukr Global Inc. All rights reserved.</p>
          </div>

          {/* Social Icons & Theme Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-4 text-slate-400">
              <a href="#facebook" aria-label="Facebook" className="p-1 hover:text-pink-500 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#x" aria-label="X" className="p-1 hover:text-pink-500 transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#instagram" aria-label="Instagram" className="p-1 hover:text-pink-500 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            <div className="h-4 w-px bg-slate-800/80 hidden sm:block" />

            {/* Quick Footer Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-bold transition-all cursor-pointer ${
                isDark 
                  ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800' 
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
              <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

