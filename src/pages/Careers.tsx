import React from 'react';
import { Briefcase, Users, Heart, Zap, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const Careers: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useDocumentTitle(
    'Careers at Luukr - Join Our Team',
    'Join the Luukr team and help us build the world\'s most trusted marketplace for luxury listings and meaningful connections.'
  );

  const handleLaunchWeb = () => {
    window.location.href = 'https://app.luukr.com';
  };

  const openings = [
    {
      title: 'Senior Backend Engineer',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build scalable backend systems for our marketplace platform.'
    },
    {
      title: 'Product Manager',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Lead product strategy and drive user-centric innovation.'
    },
    {
      title: 'Full Stack Engineer',
      location: 'Remote',
      type: 'Full-time',
      description: 'Develop and maintain our web and mobile applications.'
    },
    {
      title: 'Design Lead',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Shape the visual identity and UX of our platform.'
    },
    {
      title: 'Community Manager',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build and nurture our community of users worldwide.'
    },
    {
      title: 'Data Analyst',
      location: 'Remote',
      type: 'Full-time',
      description: 'Extract insights and drive data-informed decisions.'
    }
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
              Careers at Luukr
            </h1>
            <p className={`text-lg font-semibold max-w-2xl ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              Join a global team building the future of luxury marketplace discovery and social networking.
            </p>
          </div>

          {/* Why Join Section */}
          <section className="mb-12 space-y-6">
            <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Why Join Luukr?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`p-6 rounded-lg border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                <Heart className="w-8 h-8 text-pink-500 mb-3" />
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Meaningful Impact
                </h3>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Build products that connect people with high-value experiences and create lasting relationships.
                </p>
              </div>

              <div className={`p-6 rounded-lg border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                <Users className="w-8 h-8 text-pink-500 mb-3" />
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Global Team
                </h3>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Collaborate with talented individuals from around the world in a diverse, inclusive environment.
                </p>
              </div>

              <div className={`p-6 rounded-lg border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                <Briefcase className="w-8 h-8 text-pink-500 mb-3" />
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Growth Opportunities
                </h3>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Grow your skills and advance your career in a fast-paced, innovative company.
                </p>
              </div>

              <div className={`p-6 rounded-lg border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                <Zap className="w-8 h-8 text-pink-500 mb-3" />
                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Competitive Benefits
                </h3>
                <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  We offer competitive salaries, equity, health insurance, and flexible work arrangements.
                </p>
              </div>
            </div>
          </section>

          {/* Open Positions */}
          <section className="mb-12 space-y-6">
            <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Open Positions
            </h2>
            <div className="space-y-4">
              {openings.map((job, index) => (
                <div 
                  key={index}
                  className={`p-6 rounded-lg border cursor-pointer transition-all hover:shadow-md ${
                    isDark 
                      ? 'bg-slate-900 border-slate-800 hover:border-slate-700' 
                      : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className={`text-lg font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {job.title}
                      </h3>
                      <p className={`text-sm font-medium mb-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        {job.location} • {job.type}
                      </p>
                      <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        {job.description}
                      </p>
                    </div>
                    <ArrowRight className={`w-5 h-5 flex-shrink-0 mt-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Culture Section */}
          <section className="space-y-6">
            <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Our Culture
            </h2>
            <div className={`p-8 rounded-lg border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
              <p className={`text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                At Luukr, we believe in building a culture that values innovation, collaboration, and integrity. We're committed to fostering an environment where every team member can thrive, grow, and make a meaningful impact. We celebrate diversity, encourage creative thinking, and support each other in achieving our goals.
              </p>
              <p className={`text-base leading-relaxed mt-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                If you're passionate about technology, user experience, and building products that matter, we'd love to hear from you. Send your resume and a brief note about why you're interested in joining Luukr to careers@luukr.com.
              </p>
            </div>
          </section>
        </article>
      </main>

      <Footer onLaunchWeb={handleLaunchWeb} />
    </div>
  );
};
