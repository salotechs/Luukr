import React from 'react';
import { Download, Mail, FileText, Image } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const Press: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useDocumentTitle(
    'Press & Media Kit - Luukr',
    'Access Luukr press releases, brand guidelines, logos, and media resources. Contact our press team for interviews and media inquiries.'
  );

  const handleLaunchWeb = () => {
    window.location.href = 'https://app.luukr.com';
  };

  const downloads = [
    {
      title: 'Brand Guidelines',
      description: 'Complete brand guidelines including logo usage, color palette, and typography.',
      icon: FileText,
      size: '4.2 MB'
    },
    {
      title: 'Logo Pack',
      description: 'High-resolution logos in various formats (PNG, SVG, PDF) for different use cases.',
      icon: Image,
      size: '12.8 MB'
    },
    {
      title: 'Press Kit (PDF)',
      description: 'Complete press kit with company information, key facts, and media assets.',
      icon: Download,
      size: '8.5 MB'
    },
  ];

  const pressReleases = [
    {
      date: 'July 15, 2026',
      title: 'Luukr Launches Revolutionary Luxury Marketplace Platform',
      excerpt: 'Luukr announces the official launch of its spatial marketplace connecting people with high-value listings worldwide.'
    },
    {
      date: 'June 20, 2026',
      title: 'Luukr Secures Series A Funding to Expand Global Operations',
      excerpt: 'The company raises $25 million in Series A funding to accelerate platform development and international expansion.'
    },
    {
      date: 'May 10, 2026',
      title: 'Luukr Named Top 10 Emerging Fintech Startups',
      excerpt: 'Luukr recognized by TechCrunch as one of the most innovative emerging fintech platforms of 2026.'
    },
  ];

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
              Press & Media Kit
            </h1>
            <p className={`text-lg font-semibold max-w-2xl ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              Access official Luukr brand resources, press releases, and media information.
            </p>
          </div>

          {/* Media Contact */}
          <section className="mb-12">
            <div className={`p-8 rounded-lg border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
              <h2 className={`text-2xl font-bold mb-4 flex items-center gap-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                <Mail className="w-6 h-6 text-pink-500" />
                Media Contact
              </h2>
              <div className={`space-y-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                <p className="font-semibold">Luukr Press Team</p>
                <p>Email: <a href="mailto:support@luukr.com" className="text-pink-500 hover:text-pink-400 transition-colors">support@luukr.com</a></p>
                <p>For media inquiries, interviews, and partnership opportunities, please reach out to our press team.</p>
              </div>
            </div>
          </section>

          {/* Media Downloads */}
          <section className="mb-12 space-y-6">
            <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Brand Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {downloads.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className={`p-6 rounded-lg border cursor-pointer transition-all hover:shadow-md ${
                      isDark 
                        ? 'bg-slate-900 border-slate-800 hover:border-slate-700' 
                        : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <Icon className="w-8 h-8 text-pink-500 mb-3" />
                    <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {item.description}
                    </p>
                    <p className={`text-xs font-medium ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                      {item.size}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Press Releases */}
          <section className="space-y-6">
            <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Latest Press Releases
            </h2>
            <div className="space-y-4">
              {pressReleases.map((release, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-lg border cursor-pointer transition-all hover:shadow-md ${
                    isDark 
                      ? 'bg-slate-900 border-slate-800 hover:border-slate-700' 
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <p className="text-pink-500 text-sm font-bold mb-1">{release.date}</p>
                  <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {release.title}
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {release.excerpt}
                  </p>
                </div>
              ))}
            </div>
          </section>


        </article>
      </main>

      <Footer onLaunchWeb={handleLaunchWeb} />
    </div>
  );
};
