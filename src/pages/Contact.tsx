import React, { useState } from 'react';
import { Send, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const COUNTRY_CODES = [
  { name: 'United States', code: '+1' },
  { name: 'Canada', code: '+1' },
  { name: 'Mexico', code: '+52' },
  { name: 'United Kingdom', code: '+44' },
  { name: 'Ireland', code: '+353' },
  { name: 'Germany', code: '+49' },
  { name: 'France', code: '+33' },
  { name: 'Spain', code: '+34' },
  { name: 'Italy', code: '+39' },
  { name: 'Netherlands', code: '+31' },
  { name: 'Belgium', code: '+32' },
  { name: 'Switzerland', code: '+41' },
  { name: 'Sweden', code: '+46' },
  { name: 'Norway', code: '+47' },
  { name: 'Denmark', code: '+45' },
  { name: 'Finland', code: '+358' },
  { name: 'Poland', code: '+48' },
  { name: 'Czech Republic', code: '+420' },
  { name: 'Austria', code: '+43' },
  { name: 'Portugal', code: '+351' },
  { name: 'Greece', code: '+30' },
  { name: 'Russia', code: '+7' },
  { name: 'Ukraine', code: '+380' },
  { name: 'Turkey', code: '+90' },
  { name: 'Israel', code: '+972' },
  { name: 'Saudi Arabia', code: '+966' },
  { name: 'United Arab Emirates', code: '+971' },
  { name: 'India', code: '+91' },
  { name: 'Pakistan', code: '+92' },
  { name: 'Bangladesh', code: '+880' },
  { name: 'China', code: '+86' },
  { name: 'Japan', code: '+81' },
  { name: 'South Korea', code: '+82' },
  { name: 'Thailand', code: '+66' },
  { name: 'Vietnam', code: '+84' },
  { name: 'Singapore', code: '+65' },
  { name: 'Malaysia', code: '+60' },
  { name: 'Indonesia', code: '+62' },
  { name: 'Philippines', code: '+63' },
  { name: 'Hong Kong', code: '+852' },
  { name: 'Taiwan', code: '+886' },
  { name: 'Australia', code: '+61' },
  { name: 'New Zealand', code: '+64' },
  { name: 'South Africa', code: '+27' },
  { name: 'Egypt', code: '+20' },
  { name: 'Nigeria', code: '+234' },
  { name: 'Kenya', code: '+254' },
  { name: 'Brazil', code: '+55' },
  { name: 'Argentina', code: '+54' },
  { name: 'Chile', code: '+56' },
  { name: 'Colombia', code: '+57' },
  { name: 'Peru', code: '+51' }
];

export const Contact: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    countryCode: '+1',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useDocumentTitle(
    'Contact Luukr - Get in Touch',
    'Have questions or feedback? Contact the Luukr team. We\'d love to hear from you!'
  );

  const handleLaunchWeb = () => {
    window.location.href = 'https://app.luukr.com';
  };

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
        countryCode: '+1',
        phone: '',
        subject: '',
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
              Get in Touch
            </h1>
            <p className={`text-lg font-semibold max-w-2xl ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              Have a question or feedback? We&apos;d love to hear from you. Reach out to us anytime.
            </p>
          </div>

          {/* Support Email */}
          <div className={`mb-12 p-6 rounded-lg border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
            <div className="flex items-center gap-3 mb-3">
              <Mail className="w-6 h-6 text-pink-500" />
              <h2 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Email Support
              </h2>
            </div>
            <p className={`text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              For support inquiries, please email us at{' '}
              <a 
                href="mailto:support@luukr.com" 
                className="text-pink-500 hover:text-pink-400 font-semibold transition-colors"
              >
                support@luukr.com
              </a>
            </p>
          </div>

          {/* Contact Form */}
          <section className="space-y-6">
            <div>
              <h2 className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Send us a Message
              </h2>
              <p className={`text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>
            </div>

            {submitted && (
              <div className={`p-4 rounded-lg ${isDark ? 'bg-emerald-950/40 border border-emerald-800' : 'bg-emerald-50 border border-emerald-200'}`}>
                <p className={`text-sm font-semibold ${isDark ? 'text-emerald-300' : 'text-emerald-900'}`}>
                  Thank you! We&apos;ve received your message and will get back to you soon.
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
                    placeholder="Enter full name"
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
                    placeholder="Enter Email address"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Phone Number
                  </label>
                  <div className="flex gap-2">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className={`px-4 py-3 rounded-lg border transition-colors ${
                        isDark
                          ? 'bg-slate-900 border-slate-800 text-white focus:border-pink-500 focus:outline-none'
                          : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-pink-500 focus:outline-none'
                      }`}
                    >
                      {COUNTRY_CODES.map((country, index) => (
                        <option key={index} value={country.code}>
                          {country.name} {country.code}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`flex-1 px-4 py-3 rounded-lg border transition-colors ${
                        isDark
                          ? 'bg-slate-900 border-slate-800 text-white placeholder-slate-500 focus:border-pink-500 focus:outline-none'
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-pink-500 focus:outline-none'
                      }`}
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      isDark
                        ? 'bg-slate-900 border-slate-800 text-white placeholder-slate-500 focus:border-pink-500 focus:outline-none'
                        : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-pink-500 focus:outline-none'
                    }`}
                    placeholder="How can we help?"
                  />
                </div>
              </div>

              <div>
                <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Message *
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
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full pink-gradient-glow text-white font-bold py-3 px-6 rounded-lg transition-all hover:shadow-lg active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </section>
        </article>
      </main>

      <Footer onLaunchWeb={handleLaunchWeb} />
    </div>
  );
};
