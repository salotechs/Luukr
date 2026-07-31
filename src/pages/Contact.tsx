import React, { useState } from 'react';
import { Send, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { PhoneInput } from '../components/PhoneInput';



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
                  <PhoneInput
                    countryCode={formData.countryCode}
                    phone={formData.phone}
                    onCountryCodeChange={(code) => setFormData({ ...formData, countryCode: code })}
                    onPhoneChange={(phone) => setFormData({ ...formData, phone })}
                    isDark={isDark}
                  />
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
