import React from 'react';
import { ShieldCheck, Lock, AlertCircle, Users } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const Safety: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useDocumentTitle(
    'Safety & Security - Luukr',
    'Discover Luukr\'s comprehensive security measures including identity verification, encrypted communications, fraud prevention, and 24/7 trust & safety team.'
  );

  const handleLaunchWeb = () => {
    window.location.href = 'https://app.luukr.com';
  };

  return (
    <div className={`min-h-screen w-full relative flex flex-col font-sans transition-colors duration-200 ${
      isDark 
        ? 'bg-[#060911] text-slate-100' 
        : 'bg-white text-slate-900'
    }`}>
      <Navbar onLaunchWeb={handleLaunchWeb} />

      <main className="flex-1 w-full">
        <article className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-24">
          {/* Page Header */}
          <div className="mb-12 space-y-4">
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-black tracking-tight ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}>
              Safety & Security
            </h1>
            <p className={`text-lg font-semibold max-w-2xl ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              Your safety and security are our highest priorities. We implement comprehensive security measures across our platform.
            </p>
          </div>

          {/* Main Content */}
          <div className={`space-y-8`}>
            {/* Our Commitment */}
            <section>
              <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Our Commitment to Safety
              </h2>
              <p className={`text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                At Luukr, we prioritize user safety and have implemented industry-leading security protocols to protect our community. Every aspect of our platform is designed with security, privacy, and user protection in mind.
              </p>
            </section>

            {/* Security Standards */}
            <section>
              <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Our Security Standards
              </h2>
              <div className="space-y-4">
                <div className={`p-6 rounded-lg border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="flex gap-4">
                    <ShieldCheck className="w-8 h-8 text-pink-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        Identity Verification
                      </h3>
                      <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        All users undergo verified identity checks to prevent fraud, impersonation, and ensure community trust. We use advanced verification methods to confirm user authenticity.
                      </p>
                    </div>
                  </div>
                </div>

                <div className={`p-6 rounded-lg border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="flex gap-4">
                    <Lock className="w-8 h-8 text-pink-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        Encrypted Communications
                      </h3>
                      <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        All messages and transactions are encrypted end-to-end for maximum privacy and security. Your data remains protected from unauthorized access.
                      </p>
                    </div>
                  </div>
                </div>

                <div className={`p-6 rounded-lg border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="flex gap-4">
                    <AlertCircle className="w-8 h-8 text-pink-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        Fraud Prevention
                      </h3>
                      <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        Advanced AI systems monitor activity continuously to detect and prevent fraudulent behavior, protecting all platform users.
                      </p>
                    </div>
                  </div>
                </div>

                <div className={`p-6 rounded-lg border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="flex gap-4">
                    <Users className="w-8 h-8 text-pink-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        24/7 Trust & Safety Team
                      </h3>
                      <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        Our dedicated team is available around the clock to respond to reports and ensure community standards are maintained.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Community Guidelines */}
            <section>
              <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Community Guidelines
              </h2>
              <p className={`text-base leading-relaxed mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                We maintain strict community standards to keep Luukr safe and welcoming for everyone. Users must adhere to the following:
              </p>
              <ul className={`list-disc list-inside space-y-3 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                <li>Be at least 18 years old to use the platform</li>
                <li>Provide accurate and truthful information</li>
                <li>Respect all other users and refrain from harassment</li>
                <li>No discrimination, hate speech, or illegal content</li>
                <li>Report suspicious activity immediately</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
              <p className={`text-base leading-relaxed mt-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                Violations of these guidelines result in immediate account suspension and may lead to legal action.
              </p>
            </section>

            {/* Reporting */}
            <section className={`pt-8 border-t ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
              <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Report Safety Issues
              </h2>
              <p className={`text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                If you encounter any suspicious activity, harassment, or safety concerns, please report it immediately to our Trust & Safety team. Your reports help us maintain a secure community for everyone. Contact us at <a href="mailto:support@luukr.com" className="text-pink-500 hover:text-pink-400 transition-colors">support@luukr.com</a>.
              </p>
            </section>
          </div>
        </article>
      </main>

      <Footer onLaunchWeb={handleLaunchWeb} />
    </div>
  );
};
