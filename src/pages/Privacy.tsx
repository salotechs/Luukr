import React from 'react';
import { Shield } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const Privacy: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useDocumentTitle(
    'Privacy Policy - Luukr',
    'Learn how Luukr collects, uses, and protects your data. We prioritize your privacy and security in the Luukr marketplace.'
  );

  const handleLaunchWeb = () => {
    window.location.href = 'https://app.luukr.com';
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onLaunchWeb={handleLaunchWeb} />

      <main className="flex-1 w-full">
        <section className={`py-16 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-slate-900' : 'bg-gray-50'}`}>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Shield className="w-8 h-8 text-pink-500" />
              <h1 className={`text-4xl font-black tracking-tight ${isDark ? 'text-white' : 'text-black'}`}>
                Privacy Policy
              </h1>
            </div>

            <div className={`prose ${isDark ? 'prose-invert' : ''} max-w-none`}>
              <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                <strong>Last Updated: July 2026</strong>
              </p>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                1. Introduction
              </h2>
              <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                At Luukr, we prioritize your data privacy, safety, and security. We process user data strictly to operate our discovery matching platform, real-time messaging services, and account security. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data.
              </p>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                2. Data We Collect
              </h2>
              <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                We collect the following information to provide our services:
              </p>
              <ul className={`list-disc pl-6 mb-6 space-y-2 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                <li>Account credentials and authentication information</li>
                <li>Location coordinates (if permitted for location-based matching)</li>
                <li>Profile preferences and user interests</li>
                <li>Communication logs and messages</li>
                <li>Transaction and payment information</li>
                <li>Device information and usage analytics</li>
              </ul>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                3. How We Use Your Data
              </h2>
              <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                Your data is used exclusively to:
              </p>
              <ul className={`list-disc pl-6 mb-6 space-y-2 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                <li>Facilitate personalized matches and discovery</li>
                <li>Operate real-time messaging services</li>
                <li>Enforce community safety standards</li>
                <li>Prevent fraudulent activity and abuse</li>
                <li>Process transactions and payments</li>
                <li>Send important service notifications</li>
              </ul>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                4. Data Security
              </h2>
              <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                We implement industry-standard security measures including encryption, secure authentication, and regular security audits to protect your data from unauthorized access, alteration, or disclosure.
              </p>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                5. Your Rights
              </h2>
              <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                You have the right to access, correct, or delete your personal data. You may also opt-out of certain communications and data processing activities. For privacy concerns, contact our Privacy Team at privacy@luukr.com.
              </p>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                6. Contact Us
              </h2>
              <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                For privacy-related questions or requests, please contact: privacy@luukr.com
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer onLaunchWeb={handleLaunchWeb} />
    </div>
  );
};
