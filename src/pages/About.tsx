import React from 'react';
import { Globe, Users, Zap, Shield } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const About: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useDocumentTitle(
    'About Luukr - The Spatial Marketplace & Social Network',
    'Learn about Luukr, the trusted platform connecting people with luxury listings, penthouses, cars, and timepieces worldwide.'
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
              About Luukr
            </h1>
            <p className={`text-lg font-semibold max-w-2xl ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              The spatial marketplace and social network connecting people with high-value listings worldwide.
            </p>
          </div>

          {/* Main Content */}
          <div className={`prose prose-lg max-w-none space-y-8 ${
            isDark ? 'prose-invert' : 'prose'
          }`}>
            {/* Mission Section */}
            <section>
              <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Our Mission
              </h2>
              <p className={`text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                To create the world's most trusted marketplace for luxury real estate, penthouses, luxury cars, timepieces, and meaningful social connections. We empower users to discover, connect, and transact with confidence.
              </p>
            </section>

            {/* About Section */}
            <section>
              <h2 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Who We Are
              </h2>
              <p className={`text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                Luukr is the spatial marketplace and social network connecting people with high-value listings worldwide. We believe that discovering meaningful connections and premium experiences should be seamless, secure, and sophisticated. Our platform revolutionizes how individuals discover, connect with, and transact for luxury items and experiences.
              </p>
            </section>

            {/* What We Offer */}
            <section>
              <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                What We Offer
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={`p-6 rounded-lg border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <Globe className="w-8 h-8 text-pink-500 mb-3" />
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Discovery Marketplace
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Premium listings for luxury properties, vehicles, timepieces, and exclusive items
                  </p>
                </div>

                <div className={`p-6 rounded-lg border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <Users className="w-8 h-8 text-pink-500 mb-3" />
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Social Networking
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Real-time messaging and connections with like-minded individuals worldwide
                  </p>
                </div>

                <div className={`p-6 rounded-lg border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <Shield className="w-8 h-8 text-pink-500 mb-3" />
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Verified Profiles
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Identity verification and community safety standards
                  </p>
                </div>

                <div className={`p-6 rounded-lg border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <Zap className="w-8 h-8 text-pink-500 mb-3" />
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Secure Transactions
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Safe and secure transaction infrastructure for peace of mind
                  </p>
                </div>
              </div>
            </section>


          </div>
        </article>
      </main>

      <Footer onLaunchWeb={handleLaunchWeb} />
    </div>
  );
};
