import React from 'react';
import { Users, Heart, AlertCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const Community: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useDocumentTitle(
    'Community Guidelines - Luukr',
    'Learn about Luukr\'s community standards. Our guidelines ensure a safe, respectful, and trustworthy marketplace for all users.'
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
              <Users className="w-8 h-8 text-pink-500" />
              <h1 className={`text-4xl font-black tracking-tight ${isDark ? 'text-white' : 'text-black'}`}>
                Community Guidelines
              </h1>
            </div>

            <div className={`prose ${isDark ? 'prose-invert' : ''} max-w-none`}>
              <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                <strong>Last Updated: July 2026</strong>
              </p>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                1. Our Community Standards
              </h2>
              <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                Luukr is built on trust, respect, and integrity. Our community guidelines establish standards that all members must follow to maintain a safe and welcoming environment for everyone.
              </p>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                2. Respectful Communication
              </h2>
              <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                We encourage authentic conversations while prohibiting:
              </p>
              <ul className={`list-disc pl-6 mb-6 space-y-2 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                <li>Harassment, bullying, or threatening language</li>
                <li>Discrimination based on protected characteristics</li>
                <li>Hate speech or dehumanizing language</li>
                <li>Sexual harassment or inappropriate content</li>
                <li>Spam or repetitive unwanted messages</li>
              </ul>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                3. Authentic Representation
              </h2>
              <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                Users must represent themselves honestly:
              </p>
              <ul className={`list-disc pl-6 mb-6 space-y-2 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                <li>Use accurate profile information</li>
                <li>Post genuine photos and descriptions</li>
                <li>Avoid catfishing or identity deception</li>
                <li>Disclose relevant information about items for sale</li>
              </ul>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                4. Legal & Safe Transactions
              </h2>
              <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                All activities on Luukr must comply with local and international laws:
              </p>
              <ul className={`list-disc pl-6 mb-6 space-y-2 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                <li>No illegal goods or services</li>
                <li>No counterfeit or stolen items</li>
                <li>No weapons or dangerous materials</li>
                <li>No money laundering or financial fraud</li>
                <li>Transactions must be conducted safely and transparently</li>
              </ul>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                5. Content Standards
              </h2>
              <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                Users may not post:
              </p>
              <ul className={`list-disc pl-6 mb-6 space-y-2 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                <li>Explicit or NSFW content</li>
                <li>Violent or graphic imagery</li>
                <li>Copyrighted content without permission</li>
                <li>Personal information of others without consent</li>
                <li>Spam or misleading promotional content</li>
              </ul>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                6. Fraud Prevention
              </h2>
              <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                Luukr has zero tolerance for:
              </p>
              <ul className={`list-disc pl-6 mb-6 space-y-2 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                <li>Scams or fraudulent schemes</li>
                <li>Phishing attempts</li>
                <li>Extortion or blackmail</li>
                <li>Fake payment claims</li>
                <li>Unauthorized account access</li>
              </ul>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                7. Reporting & Enforcement
              </h2>
              <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                If you witness a violation of these guidelines:
              </p>
              <ul className={`list-disc pl-6 mb-6 space-y-2 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                <li>Use the report feature on the platform</li>
                <li>Contact our Trust & Safety team</li>
                <li>Provide as much detail as possible</li>
              </ul>
              <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                Violations may result in warnings, content removal, temporary suspension, or permanent ban from the platform.
              </p>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                8. Appeals Process
              </h2>
              <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                If your account has been suspended, you may appeal to our Trust & Safety team with evidence that you did not violate these guidelines. We will review your appeal within 7 business days.
              </p>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                9. Contact Trust & Safety
              </h2>
              <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                For safety concerns or to report violations: trust-safety@luukr.com
              </p>

              <p className={`text-base leading-relaxed mt-8 ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
                © 2026 Luukr Global Inc. All rights reserved.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer onLaunchWeb={handleLaunchWeb} />
    </div>
  );
};
