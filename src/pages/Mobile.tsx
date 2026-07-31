import React from 'react';
import { Smartphone, Bell, Fingerprint, MapPin, Video, QrCode } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const Mobile: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useDocumentTitle(
    'Get Luukr Mobile App - iOS & Android',
    'Download the Luukr mobile app for iOS and Android. Discover luxury listings, connect with others, and manage your account with real-time notifications and biometric login.'
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
              Get Luukr Mobile App
            </h1>
            <p className={`text-lg font-semibold max-w-2xl ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              Experience Luukr on the go with our mobile apps for iOS and Android.
            </p>
          </div>

          {/* Main Content */}
          <div className={`space-y-8`}>
            {/* Introduction */}
            <section>
              <p className={`text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                Download the Luukr app and discover luxury listings, connect with others, and manage your account seamlessly from anywhere, anytime. Our mobile app is optimized for speed, security, and an exceptional user experience.
              </p>
            </section>

            {/* App Features */}
            <section>
              <h2 className={`text-3xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                App Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={`p-6 rounded-lg border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <Bell className="w-8 h-8 text-pink-500 mb-3" />
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Real-Time Notifications
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Get instant notifications for new listings, messages, and matches
                  </p>
                </div>

                <div className={`p-6 rounded-lg border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <Fingerprint className="w-8 h-8 text-pink-500 mb-3" />
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Biometric Login
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Secure access with Face ID and fingerprint authentication
                  </p>
                </div>

                <div className={`p-6 rounded-lg border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <MapPin className="w-8 h-8 text-pink-500 mb-3" />
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Location Discovery
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Find luxury items and connections based on your location
                  </p>
                </div>

                <div className={`p-6 rounded-lg border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <Video className="w-8 h-8 text-pink-500 mb-3" />
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Video Calls
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Integrated video calling for secure and direct communication
                  </p>
                </div>

                <div className={`p-6 rounded-lg border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <Smartphone className="w-8 h-8 text-pink-500 mb-3" />
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Offline Mode
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Browse and read messages even without an internet connection
                  </p>
                </div>

                <div className={`p-6 rounded-lg border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <MapPin className="w-8 h-8 text-pink-500 mb-3" />
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Smart Filters
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Advanced filtering to find exactly what you're looking for
                  </p>
                </div>
              </div>
            </section>

            {/* Download Section */}
            <section className={`py-8 rounded-lg border-2 ${isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
              <div className="px-6 space-y-6">
                <div className="text-center">
                  <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Download Now
                  </h2>
                  <p className={`text-base ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Available on iOS and Android
                  </p>
                </div>

                {/* QR Code */}
                <div className="flex justify-center">
                  <div className={`border-2 border-dashed rounded-lg p-6 ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-300'}`}>
                    <div className={`w-48 h-48 flex items-center justify-center rounded-lg border ${isDark ? 'bg-white border-slate-600' : 'bg-white border-slate-200'}`}>
                      <QrCode className="w-32 h-32 text-slate-400" />
                    </div>
                    <p className={`text-center text-xs font-bold uppercase mt-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      Scan to download
                    </p>
                  </div>
                </div>

                {/* Download Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://apps.apple.com/app/luukr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-3 px-6 py-3 rounded-lg font-bold text-sm transition-all cursor-pointer shadow-md hover:shadow-lg ${
                      isDark
                        ? 'bg-white text-black hover:bg-slate-100'
                        : 'bg-black text-white hover:bg-slate-900'
                    }`}
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .76-3.27.82-1.31.05-2.31-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.23-1.93 1.09-3.04-1.01.04-2.2.61-2.91 1.4-.63.71-1.2 1.83-1.05 2.9 1.12.09 2.19-.51 2.87-1.26z" />
                    </svg>
                    App Store
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.luukr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-3 px-6 py-3 rounded-lg font-bold text-sm transition-all cursor-pointer shadow-md hover:shadow-lg ${
                      isDark
                        ? 'bg-white text-black hover:bg-slate-100'
                        : 'bg-black text-white hover:bg-slate-900'
                    }`}
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L18.66,14.05C20.44,13.03 20.44,10.97 18.66,9.95L16.81,8.88L14.4,11.29L16.81,15.12M13.69,12L16.03,14.34L14.4,15.22L4.54,21.1L13.69,12M4.54,2.9L14.4,8.78L16.03,9.66L13.69,12L4.54,2.9Z" />
                    </svg>
                    Google Play
                  </a>
                </div>
              </div>
            </section>

            {/* System Requirements */}
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                System Requirements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>iOS</h3>
                  <ul className={`text-sm space-y-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    <li>iOS 14.0 or later</li>
                    <li>iPhone 8 and newer</li>
                    <li>iPad (5th generation or later)</li>
                  </ul>
                </div>
                <div>
                  <h3 className={`font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Android</h3>
                  <ul className={`text-sm space-y-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    <li>Android 10.0 or later</li>
                    <li>2GB RAM minimum</li>
                    <li>50MB storage space</li>
                  </ul>
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
