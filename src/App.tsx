import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Safety } from './pages/Safety';
import { Mobile } from './pages/Mobile';

export default function App() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`w-full font-sans transition-colors duration-200 overflow-x-clip ${
      isDark 
        ? 'bg-[#060911] text-slate-100 selection:bg-pink-500 selection:text-white' 
        : 'bg-white text-slate-900 selection:bg-black selection:text-white'
    }`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}


