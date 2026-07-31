import React, { useState } from 'react';
import { ModalType } from '../types';
import { X, CheckCircle2, ShieldCheck, QrCode, ArrowRight, Lock, Mail, Smartphone } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ModalsProps {
  activeModal: ModalType;
  onClose: () => void;
}

export const Modals: React.FC<ModalsProps> = ({ activeModal, onClose }) => {
  const [email, setEmail] = useState('');
  const [submittedLogin, setSubmittedLogin] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
      <div className={`rounded-3xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl border transition-colors duration-200 animate-in fade-in zoom-in duration-200 ${
        isDark ? 'bg-[#0B0F19] border-slate-800 text-white' : 'bg-white border-gray-100 text-slate-900'
      }`}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer crisp-btn ${
            isDark ? 'bg-slate-800 text-slate-300 hover:text-white' : 'bg-gray-100 text-black hover:bg-gray-200'
          }`}
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        {activeModal === 'login' && (
          <div className="space-y-6 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 pink-gradient text-white rounded-xl flex items-center justify-center font-black text-xl shadow-md">
                L
              </div>
              <div>
                <h3 className={`text-2xl font-black tracking-tight ${isDark ? 'text-white' : 'text-black'}`}>Welcome to Luukr</h3>
                <p className={`text-xs font-medium ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>Log in or create your account</p>
              </div>
            </div>

            {submittedLogin ? (
              <div className={`border rounded-2xl p-6 text-center space-y-3 ${
                isDark ? 'bg-emerald-950/40 border-emerald-800/80 text-emerald-300' : 'bg-emerald-50 border-emerald-200 text-emerald-900'
              }`}>
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h4 className="font-extrabold text-lg">Check your email</h4>
                <p className="text-xs leading-relaxed">
                  We sent a magic sign-in link to <strong>{email}</strong>. Click the link to complete authentication.
                </p>
                <button
                  onClick={() => setSubmittedLogin(false)}
                  className="text-xs font-bold underline cursor-pointer hover:opacity-80"
                >
                  Use another email address
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) setSubmittedLogin(true);
                }}
                className="space-y-4"
              >
                <div>
                  <label className={`block text-xs font-bold mb-1.5 uppercase tracking-wider ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                    Email address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@example.com"
                      className={`w-full pl-10 pr-4 py-3 border rounded-xl text-sm font-medium focus:outline-none focus:border-pink-500 ${
                        isDark ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500' : 'bg-gray-50 border-gray-200 text-black'
                      }`}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 pink-gradient-glow text-white text-sm font-bold rounded-xl shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-95"
                >
                  <span>Continue with Magic Link</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="relative flex py-2 items-center">
                  <div className={`flex-grow border-t ${isDark ? 'border-slate-800' : 'border-gray-200'}`} />
                  <span className="shrink mx-3 text-[11px] text-gray-400 font-bold uppercase">or</span>
                  <div className={`flex-grow border-t ${isDark ? 'border-slate-800' : 'border-gray-200'}`} />
                </div>

                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => setSubmittedLogin(true)}
                    className={`w-full py-3 border rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                      isDark ? 'border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-200' : 'border-gray-200 hover:bg-gray-50 text-gray-800'
                    }`}
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                    <span>Continue with Google</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSubmittedLogin(true)}
                    className={`w-full py-3 border rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                      isDark ? 'border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-200' : 'border-gray-200 hover:bg-gray-50 text-gray-800'
                    }`}
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .76-3.27.82-1.31.05-2.31-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.23-1.93 1.09-3.04-1.01.04-2.2.61-2.91 1.4-.63.71-1.2 1.83-1.05 2.9 1.12.09 2.19-.51 2.87-1.26z" />
                    </svg>
                    <span>Continue with Apple</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {activeModal === 'download' && (
          <div className="text-center space-y-6">
            <div className="w-12 h-12 pink-gradient text-white rounded-2xl mx-auto flex items-center justify-center font-black text-2xl shadow-md">
              L
            </div>
            <div>
              <h3 className={`text-2xl font-black ${isDark ? 'text-white' : 'text-black'}`}>Get Luukr Mobile App</h3>
              <p className={`text-xs font-medium mt-1 ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
                Scan with your phone camera to download instantly for iOS and Android
              </p>
            </div>

            {/* QR Code Container */}
            <div className={`border-2 border-dashed rounded-2xl p-6 inline-block mx-auto shadow-inner ${
              isDark ? 'bg-slate-900 border-slate-700' : 'bg-gray-50 border-gray-200'
            }`}>
              <div className="w-44 h-44 bg-white p-3 rounded-xl border border-gray-200 shadow-sm flex flex-col items-center justify-center gap-2">
                <QrCode className="w-32 h-32 text-black" />
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
                  SCAN TO DOWNLOAD
                </span>
              </div>
            </div>

            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={() => alert('Redirecting to Apple App Store...')}
                className="px-4 py-2 pink-gradient text-white text-xs font-bold rounded-xl hover:opacity-90 transition-opacity cursor-pointer shadow-md"
              >
                App Store
              </button>
              <button
                onClick={() => alert('Redirecting to Google Play Store...')}
                className={`px-4 py-2 text-xs font-bold rounded-xl border transition-colors cursor-pointer ${
                  isDark ? 'bg-slate-800 border-slate-700 text-white hover:bg-slate-700' : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                Google Play
              </button>
            </div>
          </div>
        )}

        {activeModal === 'privacy' && (
          <div className="text-left space-y-4 max-h-[70vh] overflow-y-auto pr-1">
            <h3 className={`text-2xl font-black ${isDark ? 'text-white' : 'text-black'}`}>Privacy Policy</h3>
            <p className={`text-xs leading-relaxed font-medium ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
              At Luukr, we prioritize your data privacy, safety, and security. We process user data strictly to operate our discovery matching platform, real-time messaging services, and account security.
            </p>
            <h4 className={`font-bold text-sm ${isDark ? 'text-white' : 'text-black'}`}>1. Data We Collect</h4>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
              Account credentials, location coordinates (if permitted for location-based matching), profile preferences, and communication logs.
            </p>
            <h4 className={`font-bold text-sm ${isDark ? 'text-white' : 'text-black'}`}>2. How We Use Data</h4>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
              Data is used exclusively to facilitate personalized matches, enforce community safety standards, and prevent fraudulent activity.
            </p>
            <p className="text-xs text-gray-400 pt-2 font-mono">Last updated: July 2026</p>
          </div>
        )}

        {activeModal === 'terms' && (
          <div className="text-left space-y-4 max-h-[70vh] overflow-y-auto pr-1">
            <h3 className={`text-2xl font-black ${isDark ? 'text-white' : 'text-black'}`}>Terms of Service</h3>
            <p className={`text-xs leading-relaxed font-medium ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
              By accessing or using the Luukr platform, app, or website, you agree to comply with our community standards and terms.
            </p>
            <h4 className={`font-bold text-sm ${isDark ? 'text-white' : 'text-black'}`}>1. User Verification & Conduct</h4>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
              Users must be at least 18 years old. Misrepresentation, spam, harassment, or unlawful trade on Luukr is strictly prohibited and results in immediate account suspension.
            </p>
            <h4 className={`font-bold text-sm ${isDark ? 'text-white' : 'text-black'}`}>2. Transactions & Communications</h4>
            <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
              Luukr provides discovery and communication tools. Users are encouraged to verify real estate, vehicle, and fashion items independently.
            </p>
            <p className="text-xs text-gray-400 pt-2 font-mono">© 2026 Luukr Global Inc.</p>
          </div>
        )}
      </div>
    </div>
  );
};

