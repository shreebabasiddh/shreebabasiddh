import React from 'react';
import { ArrowUp, MapPin, Heart, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const links = [
    { href: '#', labelHi: 'होम', labelEn: 'Home' },
    { href: '#about', labelHi: 'मंदिर के बारे में', labelEn: 'About Mandir' },
    { href: '#sarovar', labelHi: 'बाबा सिद्ध सरोवर', labelEn: 'Baba Siddh Sarovar' },
    { href: '#chandan-mitti', labelHi: 'चंदन मिट्टी', labelEn: 'Chandan Mitti' },
    { href: '#mela', labelHi: 'मेला', labelEn: 'Annual Fair' },
    { href: '#sant-sammelan', labelHi: 'संत सम्मेलन', labelEn: 'Sant Sammelan' },
    { href: '#institutions', labelHi: 'शिक्षा संस्थान', labelEn: 'Institutions' },
    { href: '#gallery', labelHi: 'फोटो गैलरी', labelEn: 'Photo Gallery' },
    { href: '#how-to-reach', labelHi: 'कैसे पहुंचें', labelEn: 'How to Reach' },
    { href: '#contact', labelHi: 'संपर्क', labelEn: 'Contact' },
  ];

  return (
    <footer className="bg-[#190E08] text-stone-300 pt-16 pb-8 border-t border-amber-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-stone-800/80">
          {/* Identity Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-amber-100 font-bold text-2xl shadow-lg border-2 border-amber-300/40">
                🕉️
              </div>
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-amber-100">
                  {lang === 'hi' ? 'श्री बाबा सिद्ध मंदिर' : 'Shri Baba Siddh Mandir'}
                </h3>
                <p className="text-xs text-amber-300/90 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  <span>
                    {lang === 'hi'
                      ? 'सोना अर्जुनपुर, सहारनपुर, उत्तर प्रदेश'
                      : 'Sona Arjunpur, Saharanpur, Uttar Pradesh'}
                  </span>
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 max-w-md leading-relaxed">
              {lang === 'hi'
                ? '“आस्था, तपस्या और विश्वास की प्राचीन धरती — जहाँ सदियों पुरानी परंपराएं आज भी जीवंत हैं।”'
                : '“The ancient land of faith, penance, and sacred trust — where timeless spiritual traditions remain vibrant.”'}
            </p>

            <div className="pt-2 text-xs text-amber-200/80">
              <span className="font-semibold text-amber-400">
                {lang === 'hi' ? 'सोना अर्जुनपुर की पहचान' : 'Village Identity'}:
              </span>{' '}
              {lang === 'hi'
                ? 'श्री बाबा सिद्ध जी की पवित्र तपोस्थली।'
                : 'The sacred taposthali of Shri Baba Siddh Ji.'}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-6">
            <h4 className="font-heading text-sm font-bold text-amber-200 uppercase tracking-widest mb-4">
              {lang === 'hi' ? 'महत्वपूर्ण कड़ियां (Quick Links)' : 'Quick Links'}
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs sm:text-sm">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="py-1 text-stone-400 hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <span className="text-amber-600 text-xs">›</span>
                  <span>{lang === 'hi' ? link.labelHi : link.labelEn}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p className="text-stone-400 text-center sm:text-left">
            © 2026 Shri Baba Siddh Mandir, Sona Arjunpur. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              id="scroll-to-top-button"
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-stone-900 hover:bg-stone-800 text-amber-300 border border-amber-500/30 transition text-xs cursor-pointer"
            >
              <span>{lang === 'hi' ? 'शीर्ष पर जाएं' : 'Back to Top'}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
