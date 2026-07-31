import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const COUNTRY_DATA = [
  { name: 'United States', code: '+1', flag: '🇺🇸' },
  { name: 'Canada', code: '+1', flag: '🇨🇦' },
  { name: 'Mexico', code: '+52', flag: '🇲🇽' },
  { name: 'United Kingdom', code: '+44', flag: '🇬🇧' },
  { name: 'Ireland', code: '+353', flag: '🇮🇪' },
  { name: 'Germany', code: '+49', flag: '🇩🇪' },
  { name: 'France', code: '+33', flag: '🇫🇷' },
  { name: 'Spain', code: '+34', flag: '🇪🇸' },
  { name: 'Italy', code: '+39', flag: '🇮🇹' },
  { name: 'Netherlands', code: '+31', flag: '🇳🇱' },
  { name: 'Belgium', code: '+32', flag: '🇧🇪' },
  { name: 'Switzerland', code: '+41', flag: '🇨🇭' },
  { name: 'Sweden', code: '+46', flag: '🇸🇪' },
  { name: 'Norway', code: '+47', flag: '🇳🇴' },
  { name: 'Denmark', code: '+45', flag: '🇩🇰' },
  { name: 'Finland', code: '+358', flag: '🇫🇮' },
  { name: 'Poland', code: '+48', flag: '🇵🇱' },
  { name: 'Czech Republic', code: '+420', flag: '🇨🇿' },
  { name: 'Austria', code: '+43', flag: '🇦🇹' },
  { name: 'Portugal', code: '+351', flag: '🇵🇹' },
  { name: 'Greece', code: '+30', flag: '🇬🇷' },
  { name: 'Russia', code: '+7', flag: '🇷🇺' },
  { name: 'Ukraine', code: '+380', flag: '🇺🇦' },
  { name: 'Turkey', code: '+90', flag: '🇹🇷' },
  { name: 'Israel', code: '+972', flag: '🇮🇱' },
  { name: 'Saudi Arabia', code: '+966', flag: '🇸🇦' },
  { name: 'United Arab Emirates', code: '+971', flag: '🇦🇪' },
  { name: 'India', code: '+91', flag: '🇮🇳' },
  { name: 'Pakistan', code: '+92', flag: '🇵🇰' },
  { name: 'Bangladesh', code: '+880', flag: '🇧🇩' },
  { name: 'China', code: '+86', flag: '🇨🇳' },
  { name: 'Japan', code: '+81', flag: '🇯🇵' },
  { name: 'South Korea', code: '+82', flag: '🇰🇷' },
  { name: 'Thailand', code: '+66', flag: '🇹🇭' },
  { name: 'Vietnam', code: '+84', flag: '🇻🇳' },
  { name: 'Singapore', code: '+65', flag: '🇸🇬' },
  { name: 'Malaysia', code: '+60', flag: '🇲🇾' },
  { name: 'Indonesia', code: '+62', flag: '🇮🇩' },
  { name: 'Philippines', code: '+63', flag: '🇵🇭' },
  { name: 'Hong Kong', code: '+852', flag: '🇭🇰' },
  { name: 'Taiwan', code: '+886', flag: '🇹🇼' },
  { name: 'Australia', code: '+61', flag: '🇦🇺' },
  { name: 'New Zealand', code: '+64', flag: '🇳🇿' },
  { name: 'South Africa', code: '+27', flag: '🇿🇦' },
  { name: 'Egypt', code: '+20', flag: '🇪🇬' },
  { name: 'Nigeria', code: '+234', flag: '🇳🇬' },
  { name: 'Kenya', code: '+254', flag: '🇰🇪' },
  { name: 'Brazil', code: '+55', flag: '🇧🇷' },
  { name: 'Argentina', code: '+54', flag: '🇦🇷' },
  { name: 'Chile', code: '+56', flag: '🇨🇱' },
  { name: 'Colombia', code: '+57', flag: '🇨🇴' },
  { name: 'Peru', code: '+51', flag: '🇵🇪' }
];

interface PhoneInputProps {
  countryCode: string;
  phone: string;
  onCountryCodeChange: (code: string) => void;
  onPhoneChange: (phone: string) => void;
  isDark: boolean;
}

export const PhoneInput: React.FC<PhoneInputProps> = ({
  countryCode,
  phone,
  onCountryCodeChange,
  onPhoneChange,
  isDark
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedCountry = COUNTRY_DATA.find(c => c.code === countryCode) || COUNTRY_DATA[0];
  
  const filteredCountries = COUNTRY_DATA.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.code.includes(searchTerm)
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const handleSelectCountry = (code: string) => {
    onCountryCodeChange(code);
    setIsOpen(false);
    setSearchTerm('');
  };

  return (
    <div className="relative flex items-stretch gap-3">
      {/* Main input button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between gap-3 px-4 py-3 rounded-lg border-2 transition-all text-left min-w-fit ${
          isDark
            ? 'bg-slate-900 border-slate-800 text-white hover:border-pink-500 focus:border-pink-500'
            : 'bg-slate-50 border-slate-200 text-slate-900 hover:border-pink-500 focus:border-pink-500'
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="text-lg">{selectedCountry.flag}</span>
          <span className="font-semibold whitespace-nowrap">{selectedCountry.code}</span>
        </div>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Phone input */}
      <input
        type="tel"
        value={phone}
        onChange={(e) => onPhoneChange(e.target.value)}
        placeholder="Enter your phone number"
        className={`flex-1 px-4 py-3 rounded-lg border transition-colors ${
          isDark
            ? 'bg-slate-900 border-slate-800 text-white placeholder-slate-500 focus:border-pink-500 focus:outline-none'
            : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400 focus:border-pink-500 focus:outline-none'
        }`}
      />

      {/* Dropdown menu */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className={`absolute top-full left-0 right-0 mt-2 rounded-lg border-2 shadow-lg z-50 ${
            isDark
              ? 'bg-slate-900 border-slate-800'
              : 'bg-white border-slate-200'
          }`}
        >
          {/* Search input */}
          <div className="p-3 border-b border-pink-500">
            <input
              type="text"
              placeholder="Search countries..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
              className={`w-full px-4 py-2 rounded-lg border-2 border-pink-500 transition-all ${
                isDark
                  ? 'bg-slate-800 text-white placeholder-slate-500 focus:outline-none'
                  : 'bg-white text-slate-900 placeholder-slate-400 focus:outline-none'
              }`}
            />
          </div>

          {/* Country list */}
          <div className={`max-h-64 overflow-y-auto`}>
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country, index) => (
                <button
                  key={index}
                  onClick={() => handleSelectCountry(country.code)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-pink-500 hover:text-white ${
                    country.code === countryCode
                      ? 'bg-pink-500 text-white'
                      : isDark
                      ? 'text-white hover:bg-pink-500'
                      : 'text-slate-900 hover:bg-pink-500'
                  }`}
                >
                  <span className="text-lg">{country.flag}</span>
                  <span className="flex-1">{country.name}</span>
                  <span className="font-semibold">{country.code}</span>
                  {country.code === countryCode && <span className="text-lg">✓</span>}
                </button>
              ))
            ) : (
              <div className={`px-4 py-3 text-center text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                No countries found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
