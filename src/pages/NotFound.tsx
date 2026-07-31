import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function NotFound() {
  useDocumentTitle('404 - Page Not Found | Luukr');
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen flex flex-col ${isDark ? 'bg-[#060911]' : 'bg-white'}`}>
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-md mx-auto">
          {/* 404 Icon/Number */}
          <div className={`mb-8 text-9xl font-black bg-gradient-to-br from-pink-500 to-purple-600 bg-clip-text text-transparent`}>
            404
          </div>

          {/* Heading */}
          <h1 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Page Not Found
          </h1>

          {/* Description */}
          <p className={`text-lg mb-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                isDark
                  ? 'bg-pink-600 text-white hover:bg-pink-700 shadow-lg hover:shadow-xl'
                  : 'bg-pink-500 text-white hover:bg-pink-600 shadow-lg hover:shadow-xl'
              }`}
            >
              <Home className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>

            <button
              onClick={() => window.history.back()}
              className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all border-2 ${
                isDark
                  ? 'border-slate-700 text-slate-300 hover:bg-slate-900 hover:border-slate-600'
                  : 'border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </button>
          </div>

          {/* Additional Info */}
          <div className={`mt-12 p-6 rounded-lg ${isDark ? 'bg-slate-900/50 border border-slate-800' : 'bg-slate-50 border border-slate-200'}`}>
            <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Need help? Visit our <Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="text-pink-500 hover:text-pink-400 transition-colors font-semibold">Contact page</Link> or email us at <a href="mailto:support@luukr.com" className="text-pink-500 hover:text-pink-400 transition-colors font-semibold">support@luukr.com</a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
