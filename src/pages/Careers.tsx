import React, { useState } from 'react';
import { Briefcase, Users, Heart, Zap, Send } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const Careers: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    position: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

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
      type: 'Full-time'
    },
    {
      title: 'Product Manager',
      location: 'San Francisco, CA',
      type: 'Full-time'
    },
    {
      title: 'Full Stack Engineer',
      location: 'Remote',
      type: 'Full-time'
    },
    {
      title: 'Design Lead',
      location: 'New York, NY',
      type: 'Full-time'
    },
    {
      title: 'Community Manager',
      location: 'Remote',
      type: 'Full-time'
    },
    {
      title: 'Data Analyst',
      location: 'Remote',
      type: 'Full-time'
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        position: '',
        phone: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
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

          {/* Application Form */}
          <section className="mb-12 space-y-6">
            <div>
              <h2 className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Join Our Team
              </h2>
              <p className={`text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Find a role below and submit your application. We review all qualified candidates.
              </p>
            </div>

            {submitted && (
              <div className={`p-4 rounded-lg ${isDark ? 'bg-emerald-950/40 border border-emerald-800' : 'bg-emerald-50 border border-emerald-200'}`}>
                <p className={`text-sm font-semibold ${isDark ? 'text-emerald-300' : 'text-emerald-900'}`}>
                  Thank you! We've received your application and will review it shortly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      isDark
                        ? 'bg-slate-900 border-slate-800 text-white placeholder-slate-500 focus:border-pink-500 focus:outline-none'
                        : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-pink-500 focus:outline-none'
                    }`}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      isDark
                        ? 'bg-slate-900 border-slate-800 text-white placeholder-slate-500 focus:border-pink-500 focus:outline-none'
                        : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-pink-500 focus:outline-none'
                    }`}
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Position *
                  </label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      isDark
                        ? 'bg-slate-900 border-slate-800 text-white focus:border-pink-500 focus:outline-none'
                        : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-pink-500 focus:outline-none'
                    }`}
                  >
                    <option value="">Select a position</option>
                    {openings.map((job, index) => (
                      <option key={index} value={job.title}>
                        {job.title} - {job.location}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      isDark
                        ? 'bg-slate-900 border-slate-800 text-white placeholder-slate-500 focus:border-pink-500 focus:outline-none'
                        : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-pink-500 focus:outline-none'
                    }`}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Message / Cover Letter *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors resize-none ${
                    isDark
                      ? 'bg-slate-900 border-slate-800 text-white placeholder-slate-500 focus:border-pink-500 focus:outline-none'
                      : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-pink-500 focus:outline-none'
                  }`}
                  placeholder="Tell us about yourself and why you'd like to join Luukr..."
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full pink-gradient-glow text-white font-bold py-3 px-6 rounded-lg transition-all hover:shadow-lg active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Submit Application
              </button>
            </form>

            <div className={`p-6 rounded-lg border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
              <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Open Positions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {openings.map((job, index) => (
                  <div key={index} className={`p-3 rounded border ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
                    <h4 className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {job.title}
                    </h4>
                    <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {job.location} • {job.type}
                    </p>
                  </div>
                ))}
              </div>
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
