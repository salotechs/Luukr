import React from 'react';
import { ModalType } from '../types';
import { X, QrCode, ArrowRight, Smartphone, ShieldCheck, Globe, Users, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ModalsProps {
  activeModal: ModalType;
  onClose: () => void;
}

export const Modals: React.FC<ModalsProps> = ({ activeModal, onClose }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  if (!activeModal) return null;

  const handleBackButton = () => {
    window.history.back();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
      <div className={`rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl border transition-colors duration-200 animate-in fade-in zoom-in duration-200 ${
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

        {activeModal === 'about' && (
          <div className="space-y-6 text-left">
            <div className="flex items-center gap-3">
              <Globe className="w-8 h-8 text-pink-500" />
              <h3 className={`text-3xl font-black tracking-tight ${isDark ? 'text-white' : 'text-black'}`}>About Luukr</h3>
            </div>

            <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
              Luukr is the spatial marketplace and social network connecting people with high-value listings worldwide. We believe that discovering meaningful connections and premium experiences should be seamless, secure, and sophisticated.
            </p>

            <div className="space-y-4 pt-2">
              <h4 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-black'}`}>Our Mission</h4>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
                To create the world&apos;s most trusted marketplace for luxury real estate, penthouses, luxury cars, timepieces, and meaningful social connections. We empower users to discover, connect, and transact with confidence.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <h4 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-black'}`}>What We Offer</h4>
              <ul className={`text-sm leading-relaxed space-y-2 ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
                <li className="flex gap-2"><span className="text-pink-500 font-bold">•</span> Discovery marketplace for luxury properties and items</li>
                <li className="flex gap-2"><span className="text-pink-500 font-bold">•</span> Real-time messaging and social networking features</li>
                <li className="flex gap-2"><span className="text-pink-500 font-bold">•</span> Verified user profiles with identity verification</li>
                <li className="flex gap-2"><span className="text-pink-500 font-bold">•</span> Secure transaction infrastructure</li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800/30">
              <p className={`text-xs font-medium ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
                Luukr Global Inc. © 2026. All rights reserved.
              </p>
            </div>
          </div>
        )}

        {activeModal === 'safety' && (
          <div className="space-y-6 text-left">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-pink-500" />
              <h3 className={`text-3xl font-black tracking-tight ${isDark ? 'text-white' : 'text-black'}`}>Safety & Security</h3>
            </div>

            <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
              At Luukr, your safety and security are our highest priorities. We implement comprehensive security measures across our platform to protect users and ensure trust.
            </p>

            <div className="space-y-4 pt-2">
              <h4 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-black'}`}>Our Security Standards</h4>
              <ul className={`text-sm leading-relaxed space-y-3 ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
                <li className="flex gap-3">
                  <span className="text-pink-500 font-bold mt-1">✓</span>
                  <div>
                    <p className="font-semibold">Identity Verification</p>
                    <p className="text-xs opacity-80">All users undergo verified identity checks to prevent fraud and impersonation.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-pink-500 font-bold mt-1">✓</span>
                  <div>
                    <p className="font-semibold">Encrypted Communications</p>
                    <p className="text-xs opacity-80">All messages and transactions are encrypted end-to-end for maximum privacy.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-pink-500 font-bold mt-1">✓</span>
                  <div>
                    <p className="font-semibold">Fraud Prevention</p>
                    <p className="text-xs opacity-80">Advanced AI systems monitor activity to detect and prevent fraudulent behavior.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-pink-500 font-bold mt-1">✓</span>
                  <div>
                    <p className="font-semibold">24/7 Trust & Safety Team</p>
                    <p className="text-xs opacity-80">Our dedicated team responds to reports and ensures community standards are maintained.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-4 pt-2">
              <h4 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-black'}`}>Community Guidelines</h4>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
                We maintain strict community standards prohibiting harassment, discrimination, illegal activity, and misrepresentation. Violations result in immediate account suspension.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/30">
              <p className={`text-xs font-medium ${isDark ? 'text-slate-400' : 'text-gray-500'}`}>
                For safety concerns, please contact our Trust & Safety team.
              </p>
            </div>
          </div>
        )}

        {activeModal === 'mobile' && (
          <div className="space-y-6 text-left">
            <div className="flex items-center gap-3">
              <Smartphone className="w-8 h-8 text-pink-500" />
              <h3 className={`text-3xl font-black tracking-tight ${isDark ? 'text-white' : 'text-black'}`}>Get Luukr Mobile App</h3>
            </div>

            <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
              Experience Luukr on the go with our mobile apps for iOS and Android. Discover luxury listings, connect with others, and manage your account seamlessly.
            </p>

            <div className="space-y-4 pt-4">
              <h4 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-black'}`}>App Features</h4>
              <ul className={`text-sm leading-relaxed space-y-2 ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
                <li className="flex gap-2"><span className="text-pink-500 font-bold">•</span> Real-time discovery notifications for new listings</li>
                <li className="flex gap-2"><span className="text-pink-500 font-bold">•</span> Push notifications for messages and matches</li>
                <li className="flex gap-2"><span className="text-pink-500 font-bold">•</span> Biometric login for enhanced security</li>
                <li className="flex gap-2"><span className="text-pink-500 font-bold">•</span> Location-based discovery matching</li>
                <li className="flex gap-2"><span className="text-pink-500 font-bold">•</span> Video call integration for secure connections</li>
              </ul>
            </div>

            <div className={`border-2 border-dashed rounded-2xl p-6 shadow-inner ${
              isDark ? 'bg-slate-900 border-slate-700' : 'bg-gray-50 border-gray-200'
            }`}>
              <div className="text-center">
                <p className={`text-sm font-bold mb-3 ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
                  Scan this QR code to download
                </p>
                <div className="w-40 h-40 bg-white p-3 rounded-lg border border-gray-200 shadow-sm flex items-center justify-center mx-auto">
                  <QrCode className="w-28 h-28 text-black" />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                onClick={() => window.open('https://apps.apple.com/app/luukr', '_blank')}
                className="flex-1 px-4 py-3 pink-gradient text-white text-sm font-bold rounded-xl hover:opacity-90 transition-opacity cursor-pointer shadow-md"
              >
                App Store
              </button>
              <button
                onClick={() => window.open('https://play.google.com/store/apps/details?id=com.luukr', '_blank')}
                className={`flex-1 px-4 py-3 text-sm font-bold rounded-xl border transition-colors cursor-pointer ${
                  isDark ? 'bg-slate-800 border-slate-700 text-white hover:bg-slate-700' : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                Google Play
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

