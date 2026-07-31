import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Safety } from './pages/Safety';
import { Mobile } from './pages/Mobile';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Cookies } from './pages/Cookies';
import { Community } from './pages/Community';
import { Careers } from './pages/Careers';
import { Press } from './pages/Press';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

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
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/press" element={<Press />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/community" element={<Community />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}


