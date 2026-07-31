import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Shield, Info, ArrowRight, Menu, X, Sparkles, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { LuukrLogo } from './LuukrLogo';

interface NavbarProps {
  onLaunchWeb?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onLaunchWeb }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <header className={`sticky top-0 z-50 w-full px-4 sm:px-8 lg:px-12 transition-all duration-200 ${
      isDark 
        ? 'bg-[#0B0F19] border-b border-slate-800/80 text-white glass-nav shadow-lg shadow-black/40' 
        : 'bg-white border-b border-slate-200/80 text-slate-900 glass-nav shadow-md shadow-slate-200/60'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 sm:h-20 px-1">
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          className="flex items-center gap-2 cursor-pointer select-none group h-full py-1"
        >
          <LuukrLogo className="h-12 sm:h-16 max-h-full w-auto object-contain group-hover:scale-105 transition-transform" />
        </Link>

        {/* Navigation Controls */}
        <div className="flex items-center gap-2 sm:gap-4">

          {/* Dark / Light Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark and light theme"
            title={`Switch to ${isDark ? 'Light' : 'Dark'} mode`}
            className={`w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-xl border transition-all cursor-pointer crisp-btn active:scale-90 ${
              isDark
                ? 'bg-slate-800/90 border-slate-700 text-amber-400 hover:bg-slate-700'
                : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {isDark ? <Sun className="w-5 h-5 stroke-[2.2]" /> : <Moon className="w-5 h-5 stroke-[2.2]" />}
          </button>

          {/* Crisp, Non-blurring Hamburger / Menu Close Toggle */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            className={`w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-xl border transition-all cursor-pointer crisp-btn active:scale-90 relative z-50 ${
              isDark
                ? isMenuOpen 
                  ? 'bg-pink-600 border-pink-500 text-white shadow-lg shadow-pink-500/30' 
                  : 'bg-slate-800/90 border-slate-700 text-white hover:bg-slate-700'
                : isMenuOpen
                  ? 'bg-slate-900 border-slate-900 text-white shadow-md'
                  : 'bg-slate-100 border-slate-200 text-slate-900 hover:bg-slate-200'
            }`}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 stroke-[2.5]" />
            ) : (
              <Menu className="w-6 h-6 stroke-[2.2]" />
            )}
          </button>
        </div>
      </div>

      {/* Slide-out Mobile & Desktop Dropdown Menu Modal */}
      {isMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className={`absolute top-18 sm:top-22 right-3 left-3 sm:left-auto sm:right-8 lg:right-12 sm:w-88 max-w-[calc(100vw-1.5rem)] rounded-2xl shadow-2xl p-5 z-50 animate-in fade-in slide-in-from-top-2 duration-200 flex flex-col gap-3 border ${
            isDark 
              ? 'bg-[#111827] border-slate-800 text-white shadow-black/80' 
              : 'bg-white border-slate-200 text-slate-900 shadow-slate-300/50'
          }`}>


            {onLaunchWeb && (
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onLaunchWeb();
                }}
                className="flex items-center gap-3 p-3.5 rounded-xl pink-gradient text-white font-bold text-sm shadow-md hover:opacity-95 transition-opacity cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Launch Web App</span>
                <ArrowRight className="w-4 h-4 ml-auto" />
              </button>
            )}

            <Link
              to="/about"
              onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}
              className={`flex items-center gap-3 p-3 rounded-xl font-semibold text-sm transition-colors cursor-pointer text-left ${
                isDark ? 'hover:bg-slate-800/80 text-slate-200' : 'hover:bg-slate-100 text-slate-800'
              }`}
            >
              <Info className="w-4 h-4 text-slate-400" />
              <span>About Luukr</span>
            </Link>

            <Link
              to="/safety"
              onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}
              className={`flex items-center gap-3 p-3 rounded-xl font-semibold text-sm transition-colors cursor-pointer text-left ${
                isDark ? 'hover:bg-slate-800/80 text-slate-200' : 'hover:bg-slate-100 text-slate-800'
              }`}
            >
              <Shield className="w-4 h-4 text-slate-400" />
              <span>Safety & Security</span>
            </Link>

            <Link
              to="/mobile"
              onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}
              className={`flex items-center gap-3 p-3 rounded-xl font-semibold text-sm transition-colors cursor-pointer text-left ${
                isDark ? 'hover:bg-slate-800/80 text-slate-200' : 'hover:bg-slate-100 text-slate-800'
              }`}
            >
              <Compass className="w-4 h-4 text-slate-400" />
              <span>Get Mobile App</span>
            </Link>


          </div>
        </>
      )}
    </header>
  );
};



