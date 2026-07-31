import React, { useState } from 'react';
import { ModalType } from '../types';
import { Compass, Shield, Info, ArrowRight, Sun, Moon, Menu, X, Sparkles, LogIn } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { LuukrLogo } from './LuukrLogo';

interface NavbarProps {
  onOpenModal: (type: ModalType) => void;
  onLaunchWeb?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal, onLaunchWeb }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <header className={`sticky top-0 z-50 w-full px-4 sm:px-8 lg:px-12 transition-all duration-200 backdrop-blur-md ${
      isDark 
        ? 'bg-[#0B0F19]/85 border-b border-slate-800/80 text-white glass-nav shadow-lg shadow-black/40' 
        : 'bg-white/85 border-b border-slate-200/80 text-slate-900 glass-nav shadow-md shadow-slate-200/60'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 sm:h-20 px-1">
        {/* Brand Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer select-none group h-full py-1" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <LuukrLogo className="h-12 sm:h-16 max-h-full w-auto object-contain group-hover:scale-105 transition-transform" />
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Desktop Quick Links */}
          <div className="hidden md:flex gap-6 items-center pr-2">
            <button
              onClick={() => onOpenModal('terms')}
              className={`text-sm font-semibold transition-colors cursor-pointer ${
                isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              About
            </button>
            <button
              onClick={() => onOpenModal('privacy')}
              className={`text-sm font-semibold transition-colors cursor-pointer ${
                isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Safety
            </button>
            {onLaunchWeb && (
              <button
                onClick={onLaunchWeb}
                className="flex items-center gap-1.5 text-sm font-bold text-pink-500 hover:text-pink-400 transition-colors cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Web App</span>
              </button>
            )}
            <button
              onClick={() => onOpenModal('login')}
              className={`px-5 py-2 rounded-full font-bold text-sm transition-all cursor-pointer active:scale-95 ${
                isDark
                  ? 'border-2 border-white/80 text-white hover:bg-white hover:text-slate-900'
                  : 'border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white'
              }`}
            >
              Log In
            </button>
          </div>

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
            <div className={`flex items-center justify-between pb-3 border-b ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-pink-500">Navigation</span>
                <span className="text-[10px] font-extrabold bg-pink-500/10 text-pink-500 px-2 py-0.5 rounded-full border border-pink-500/20">
                  {theme.toUpperCase()} MODE
                </span>
              </div>
              <button 
                onClick={() => setIsMenuOpen(false)} 
                className={`p-1 rounded-lg transition-colors cursor-pointer ${isDark ? 'hover:bg-slate-800 text-slate-400' : 'hover:bg-slate-100 text-slate-500'}`}
              >
                <X className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

            {onLaunchWeb && (
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onLaunchWeb();
                }}
                className="flex items-center gap-3 p-3.5 rounded-xl pink-gradient text-white font-bold text-sm shadow-md hover:opacity-95 transition-opacity cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Launch Web Discovery App</span>
                <ArrowRight className="w-4 h-4 ml-auto" />
              </button>
            )}

            <button
              onClick={() => {
                setIsMenuOpen(false);
                onOpenModal('login');
              }}
              className={`flex items-center gap-3 p-3 rounded-xl font-bold text-sm transition-colors cursor-pointer ${
                isDark ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
              }`}
            >
              <LogIn className="w-4 h-4 text-pink-500" />
              <span>Log In / Sign Up</span>
              <ArrowRight className="w-4 h-4 ml-auto opacity-60" />
            </button>

            <button
              onClick={() => {
                setIsMenuOpen(false);
                onOpenModal('terms');
              }}
              className={`flex items-center gap-3 p-3 rounded-xl font-semibold text-sm transition-colors cursor-pointer text-left ${
                isDark ? 'hover:bg-slate-800/80 text-slate-200' : 'hover:bg-slate-100 text-slate-800'
              }`}
            >
              <Info className="w-4 h-4 text-slate-400" />
              <span>About Luukr</span>
            </button>

            <button
              onClick={() => {
                setIsMenuOpen(false);
                onOpenModal('privacy');
              }}
              className={`flex items-center gap-3 p-3 rounded-xl font-semibold text-sm transition-colors cursor-pointer text-left ${
                isDark ? 'hover:bg-slate-800/80 text-slate-200' : 'hover:bg-slate-100 text-slate-800'
              }`}
            >
              <Shield className="w-4 h-4 text-slate-400" />
              <span>Safety & Security</span>
            </button>

            <button
              onClick={() => {
                setIsMenuOpen(false);
                onOpenModal('download');
              }}
              className={`flex items-center gap-3 p-3 rounded-xl font-semibold text-sm transition-colors cursor-pointer text-left ${
                isDark ? 'hover:bg-slate-800/80 text-slate-200' : 'hover:bg-slate-100 text-slate-800'
              }`}
            >
              <Compass className="w-4 h-4 text-slate-400" />
              <span>Get Mobile App</span>
            </button>

            {/* Quick Theme Switch inside menu as well */}
            <div className={`pt-3 border-t flex items-center justify-between ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
              <span className="text-xs font-medium text-slate-400">Appearance Mode</span>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg border border-pink-500/30 text-pink-500 hover:bg-pink-500/10 cursor-pointer"
              >
                {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
                <span>{isDark ? 'Light Theme' : 'Dark Theme'}</span>
              </button>
            </div>

            <div className="pt-2 text-center">
              <p className="text-[11px] text-slate-500">Luukr Global Inc. © 2026. All rights reserved.</p>
            </div>
          </div>
        </>
      )}
    </header>
  );
};



