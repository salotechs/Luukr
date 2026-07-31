import React from 'react';
import { Cookie } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const Cookies: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useDocumentTitle(
    'Cookie Policy - Luukr',
    'Learn about how Luukr uses cookies and similar technologies. Information about your privacy preferences and cookie management.'
  );

  const handleLaunchWeb = () => {
    window.location.href = 'https://app.luukr.com';
  };

  return (
    <div className={`flex flex-col min-h-screen ${
      isDark 
        ? 'bg-[#060911] text-slate-100' 
        : 'bg-white text-slate-900'
    }`}>
      <Navbar onLaunchWeb={handleLaunchWeb} />

      <main className="flex-1 w-full">
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Cookie className="w-8 h-8 text-pink-500" />
              <h1 className={`text-4xl font-black tracking-tight ${isDark ? 'text-white' : 'text-black'}`}>
                Cookie Policy
              </h1>
            </div>

            <div className={`prose ${isDark ? 'prose-invert' : ''} max-w-none`}>
              <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                <strong>Last Updated: July 2026</strong>
              </p>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                1. What Are Cookies?
              </h2>
              <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                Cookies are small text files stored on your device that help us provide a better user experience. They contain information about your preferences, browsing history, and interactions with Luukr.
              </p>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                2. Types of Cookies We Use
              </h2>
              <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                <strong>Essential Cookies:</strong> Required for platform functionality, authentication, and security.
              </p>
              <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                <strong>Performance Cookies:</strong> Help us understand how users interact with Luukr to improve our services.
              </p>
              <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                <strong>Preference Cookies:</strong> Remember your settings and preferences across sessions.
              </p>
              <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                <strong>Marketing Cookies:</strong> Used to deliver personalized content and track marketing effectiveness.
              </p>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                3. Third-Party Cookies
              </h2>
              <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                We work with trusted partners who may place cookies on your device for analytics, advertising, and social media integration. These partners operate under their own privacy policies.
              </p>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                4. Managing Your Cookie Preferences
              </h2>
              <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                You can control cookie settings through your browser preferences. Most browsers allow you to:
              </p>
              <ul className={`list-disc pl-6 mb-6 space-y-2 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                <li>Block certain types of cookies</li>
                <li>Delete existing cookies</li>
                <li>Receive alerts when cookies are being set</li>
                <li>Opt-out of tracking cookies</li>
              </ul>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                5. Data Retention
              </h2>
              <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                Cookies are retained for different durations depending on their function. Essential cookies persist for the duration of your session, while preference cookies may be retained for up to 2 years.
              </p>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                6. Privacy & Security
              </h2>
              <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                Your cookie data is protected by encryption and secure protocols. We do not share cookie data with unauthorized third parties and comply with all applicable privacy regulations.
              </p>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                7. Contact Us
              </h2>
              <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                For questions about our cookie practices, please contact: support@luukr.com
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer onLaunchWeb={handleLaunchWeb} />
    </div>
  );
};
