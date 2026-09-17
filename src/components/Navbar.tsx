import React, { useState } from 'react';
import { Bell, Menu, X, Globe, Settings, MapPin } from 'lucide-react';
import { Language } from '../types';
import { playTempleBell } from '../utils/audio';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang, onOpenAdmin }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bellRinging, setBellRinging] = useState(false);

  const handleRingBell = () => {
    setBellRinging(true);
    playTempleBell();
    setTimeout(() => setBellRinging(false), 850);
  };

  const navLinks = [
    { href: '#about', labelHi: 'मंदिर परिचय', labelEn: 'About' },
    { href: '#sarovar', labelHi: 'पवित्र सरोवर', labelEn: 'Sarovar' },
    { href: '#chandan-mitti', labelHi: 'चंदन मिट्टी', labelEn: 'Chandan Mitti' },
    { href: '#offerings', labelHi: 'मनौती व श्रद्धा', labelEn: 'Offerings' },
    { href: '#mela', labelHi: 'वार्षिक मेला', labelEn: 'Annual Fair' },
    { href: '#sant-sammelan', labelHi: 'संत सम्मेलन', labelEn: 'Sant Sammelan' },
    { href: '#institutions', labelHi: 'शिक्षा संस्थान', labelEn: 'Institutions' },
    { href: '#how-to-reach', labelHi: 'कैसे पहुंचें', labelEn: 'How to Reach' },
    { href: '#gallery', labelHi: 'दर्शन गैलरी', labelEn: 'Gallery' },
    { href: '#manokamna', labelHi: 'मनोकामना', labelEn: 'Prayer Wall' },
    { href: '#contact', labelHi: 'संपर्क', labelEn: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#21130D]/95 text-[#FDFBF7] backdrop-blur-md border-b border-[#D97706]/30 shadow-md">
      {/* Top sacred mini-strip */}
      <div className="bg-gradient-to-r from-[#7A2814] via-[#B45309] to-[#7A2814] px-4 py-1 text-xs text-amber-100 flex items-center justify-between border-b border-amber-600/40">
        <div className="flex items-center gap-2 mx-auto sm:mx-0 font-medium">
          <span className="text-amber-300">🕉️</span>
          <span>{lang === 'hi' ? '॥ ॐ नमो श्री बाबा सिद्धाय नमः ॥' : '|| Om Namo Shri Baba Siddhaya Namah ||'}</span>
          <span className="hidden md:inline text-amber-200/70">•</span>
          <span className="hidden md:inline text-amber-200">
            {lang === 'hi' ? 'सोना अर्जुनपुर, सहारनपुर (उ.प्र.)' : 'Sona Arjunpur, Saharanpur (U.P.)'}
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-3 text-xs">
          <button
            onClick={handleRingBell}
            id="nav-bell-button-top"
            className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-900/60 hover:bg-amber-800 text-amber-200 border border-amber-500/30 transition-all cursor-pointer"
            title={lang === 'hi' ? 'मंदिर की घंटी बजाएं' : 'Ring Temple Bell'}
          >
            <Bell className={`w-3.5 h-3.5 text-amber-400 ${bellRinging ? 'animate-bell-ring' : ''}`} />
            <span>{lang === 'hi' ? 'घंटी बजाएं' : 'Ring Bell'}</span>
          </button>

          <button
            onClick={onOpenAdmin}
            id="admin-panel-top-trigger"
            className="flex items-center gap-1 px-2 py-0.5 rounded hover:bg-amber-800/60 text-amber-200/80 hover:text-amber-200 transition-colors cursor-pointer"
            title={lang === 'hi' ? 'प्रबंधन पोर्टल' : 'Admin Portal'}
          >
            <Settings className="w-3 h-3" />
            <span>{lang === 'hi' ? 'प्रबंधन' : 'Admin'}</span>
          </button>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo & Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-500 via-amber-600 to-amber-800 flex items-center justify-center shadow-lg border-2 border-amber-300/40 text-amber-100 font-bold text-xl group-hover:scale-105 transition-transform">
              🕉️
            </div>
            <div>
              <div className="font-heading text-lg sm:text-xl font-bold tracking-tight text-amber-100 leading-tight">
                {lang === 'hi' ? 'श्री बाबा सिद्ध मंदिर' : 'Shri Baba Siddh Mandir'}
              </div>
              <div className="text-xs text-amber-300/90 font-medium flex items-center gap-1">
                <MapPin className="w-3 h-3 text-amber-400 inline" />
                <span>{lang === 'hi' ? 'सोना अर्जुनपुर, सहारनपुर' : 'Sona Arjunpur, Saharanpur'}</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-2.5 py-1.5 rounded-md text-xs lg:text-sm font-medium text-stone-200 hover:text-amber-300 hover:bg-amber-900/40 transition-colors"
              >
                {lang === 'hi' ? link.labelHi : link.labelEn}
              </a>
            ))}
          </nav>

          {/* Language Toggle & Actions */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={onToggleLang}
              id="language-toggle-btn"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-amber-500/40 bg-amber-950/60 hover:bg-amber-900 text-amber-200 text-xs font-semibold shadow-inner transition cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{lang === 'hi' ? 'English' : 'हिन्दी'}</span>
            </button>

            <a
              href="#how-to-reach"
              id="reach-cta-btn"
              className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white text-xs font-semibold shadow-md transition cursor-pointer"
            >
              {lang === 'hi' ? 'दर्शन हेतु पहुंचें' : 'Plan Visit'}
            </a>
          </div>

          {/* Mobile hamburger & bell */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={handleRingBell}
              id="mobile-bell-btn"
              className="p-2 rounded-lg bg-amber-900/50 text-amber-300 hover:bg-amber-800 border border-amber-600/30"
              title="Ring Bell"
            >
              <Bell className={`w-5 h-5 ${bellRinging ? 'animate-bell-ring' : ''}`} />
            </button>

            <button
              onClick={onToggleLang}
              className="px-2.5 py-1 text-xs rounded-full border border-amber-500/40 bg-amber-950/80 text-amber-200"
            >
              {lang === 'hi' ? 'EN' : 'हिन्दी'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-nav-toggle"
              className="p-2 rounded-lg text-amber-200 hover:bg-amber-900/60 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#1D100A] border-t border-amber-900/60 px-4 pt-3 pb-6 space-y-1 shadow-2xl">
          <div className="grid grid-cols-2 gap-1 mb-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded text-sm text-stone-200 hover:text-amber-300 hover:bg-amber-950/80 transition"
              >
                {lang === 'hi' ? link.labelHi : link.labelEn}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-amber-900/50 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmin();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded bg-amber-950/70 hover:bg-amber-900 text-amber-200 text-xs border border-amber-700/40 cursor-pointer"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? 'मंदिर प्रबंधन पोर्टल (Admin)' : 'Temple Admin Portal'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
