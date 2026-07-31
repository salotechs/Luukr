import React from 'react';
import { FileText } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const Terms: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useDocumentTitle(
    'Terms of Service - Luukr',
    'Read Luukr\'s Terms of Service. User verification, conduct standards, and transaction guidelines for the Luukr marketplace.'
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
              <FileText className="w-8 h-8 text-pink-500" />
              <h1 className={`text-4xl font-black tracking-tight ${isDark ? 'text-white' : 'text-black'}`}>
                Terms of Service
              </h1>
            </div>

            <div className={`prose ${isDark ? 'prose-invert' : ''} max-w-none`}>
              <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                <strong>Last Updated: July 2026</strong>
              </p>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                1. Acceptance of Terms
              </h2>
              <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                By accessing or using the Luukr platform, app, or website, you agree to comply with these Terms of Service and all applicable laws and regulations. If you do not agree with these terms, you may not use our services.
              </p>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                2. User Eligibility
              </h2>
              <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                Users must be at least 18 years old to use Luukr. By creating an account, you represent and warrant that you meet this age requirement and that all information you provide is accurate and complete.
              </p>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                3. User Conduct Standards
              </h2>
              <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                You agree not to engage in any of the following prohibited activities:
              </p>
              <ul className={`list-disc pl-6 mb-6 space-y-2 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                <li>Misrepresentation or identity deception</li>
                <li>Spam, harassment, or abusive communication</li>
                <li>Illegal activities or services</li>
                <li>Intellectual property violations</li>
                <li>Phishing, fraud, or scam attempts</li>
                <li>Harassment or discrimination</li>
              </ul>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                4. Account Suspension
              </h2>
              <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                Violations of these terms result in immediate account suspension or permanent termination. Luukr reserves the right to remove content and suspend or ban users at its discretion for violations.
              </p>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                5. Transactions & Liability
              </h2>
              <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                Luukr provides discovery and communication tools. Users are encouraged to verify real estate, vehicles, and items independently before transactions. Luukr is not liable for third-party actions or transaction disputes.
              </p>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                6. Intellectual Property
              </h2>
              <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                All content on Luukr, including text, graphics, logos, and software, is the property of Luukr Global Inc. or its content suppliers and is protected by international copyright laws. Unauthorized reproduction is prohibited.
              </p>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                7. Limitation of Liability
              </h2>
              <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                Luukr is provided "as is" without warranties. Luukr is not liable for indirect, incidental, special, or consequential damages arising from your use of the platform.
              </p>

              <h2 className={`text-2xl font-bold mt-8 mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                8. Changes to Terms
              </h2>
              <p className={`text-base leading-relaxed mb-6 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                Luukr reserves the right to modify these Terms of Service at any time. Continued use of the platform after changes constitutes acceptance of the updated terms.
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
