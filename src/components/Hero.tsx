import React, { useState } from 'react';
import { ChevronDown, Sparkles, Bell, Flame, Navigation, BookOpen } from 'lucide-react';
import { Language } from '../types';
import { playTempleBell } from '../utils/audio';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const [diyaLit, setDiyaLit] = useState(true);
  const [bellTriggered, setBellTriggered] = useState(false);

  const handleRing = () => {
    setBellTriggered(true);
    playTempleBell();
    setTimeout(() => setBellTriggered(false), 850);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#21130D] via-[#311A11] to-[#1A0E08] text-white">
      {/* Devotional Sarovar & Temple Architectural Ambient Canvas */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1440 800">
          <defs>
            <linearGradient id="gradSky" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#EA580C" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1E1B4B" stopOpacity="0.8" />
            </linearGradient>
            <radialGradient id="sunGlow" cx="50%" cy="30%" r="50%">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#78350F" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="1440" height="800" fill="url(#gradSky)" />
          <circle cx="720" cy="240" r="380" fill="url(#sunGlow)" />
          {/* Temple Silhouette Profile */}
          <path
            d="M 520,550 L 560,400 L 590,320 L 610,260 L 620,220 L 625,180 L 630,220 L 640,260 L 660,320 L 690,400 L 730,550 Z"
            fill="#B45309"
            opacity="0.25"
          />
          <path
            d="M 680,550 L 710,430 L 730,360 L 745,290 L 750,250 L 755,290 L 770,360 L 790,430 L 820,550 Z"
            fill="#92400E"
            opacity="0.2"
          />
          {/* Water reflection ripples (Sarovar) */}
          <path
            d="M0,560 Q 360,575 720,560 T 1440,560 L 1440,800 L 0,800 Z"
            fill="#0F172A"
            opacity="0.85"
          />
          <path
            d="M 0,600 Q 360,615 720,600 T 1440,600"
            stroke="#F59E0B"
            strokeWidth="1.5"
            strokeOpacity="0.3"
            fill="none"
          />
          <path
            d="M 0,660 Q 360,670 720,660 T 1440,660"
            stroke="#F59E0B"
            strokeWidth="1"
            strokeOpacity="0.2"
            fill="none"
          />
        </svg>
      </div>

      {/* Decorative Traditional Indian Mandala Motif overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full border border-amber-500/10 pointer-events-none flex items-center justify-center">
        <div className="w-[560px] h-[560px] rounded-full border border-amber-500/10 flex items-center justify-center">
          <div className="w-[400px] h-[400px] rounded-full border border-amber-500/15" />
        </div>
      </div>

      {/* Hero Content Box */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center z-10">
        {/* Sacred Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-200 text-xs sm:text-sm font-medium tracking-wide mb-6 shadow-lg backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>
            {lang === 'hi'
              ? '“आस्था, तपस्या और विश्वास की प्राचीन धरती”'
              : '“The Ancient Land of Faith, Penance & Devotion”'}
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-100 drop-shadow-md mb-4 leading-tight">
          🙏 {lang === 'hi' ? 'श्री बाबा सिद्ध मंदिर' : 'Shri Baba Siddh Mandir'} 🙏
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-2xl md:text-3xl font-medium text-amber-300/95 max-w-3xl mx-auto mb-6 tracking-wide drop-shadow">
          {lang === 'hi'
            ? 'सोना अर्जुनपुर, जनपद सहारनपुर, उत्तर प्रदेश'
            : 'Sona Arjunpur, District Saharanpur, Uttar Pradesh'}
        </p>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg text-stone-200 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          {lang === 'hi'
            ? '“जहाँ सदियों पुरानी आस्था, तपस्या और विश्वास आज भी जीवंत है।”'
            : '“Where centuries-old faith, spiritual penance, and sacred devotion remain vibrant today.”'}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#about"
            id="hero-about-button"
            className="px-7 py-3.5 rounded-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-500 text-stone-900 font-bold text-sm sm:text-base shadow-xl hover:shadow-amber-500/20 transform hover:-translate-y-0.5 transition-all flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4 text-stone-900" />
            <span>{lang === 'hi' ? 'मंदिर के बारे में' : 'About the Temple'}</span>
          </a>

          <a
            href="#how-to-reach"
            id="hero-reach-button"
            className="px-7 py-3.5 rounded-full bg-[#3D2214]/80 hover:bg-[#4E2B1A] border-2 border-amber-500/60 text-amber-200 hover:text-white font-semibold text-sm sm:text-base shadow-lg transition-all flex items-center gap-2"
          >
            <Navigation className="w-4 h-4 text-amber-400" />
            <span>{lang === 'hi' ? 'कैसे पहुंचें' : 'How to Reach'}</span>
          </a>
        </div>

        {/* Devotional Interactive Bar: Diya & Temple Bell */}
        <div className="inline-flex flex-wrap items-center justify-center gap-4 p-3 rounded-2xl bg-amber-950/40 border border-amber-700/30 backdrop-blur-md text-xs sm:text-sm text-stone-300">
          <button
            onClick={() => setDiyaLit(!diyaLit)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-stone-900/60 hover:bg-stone-900 text-amber-300 border border-amber-500/30 transition cursor-pointer"
            title="Toggle Diya"
          >
            <Flame className={`w-4 h-4 ${diyaLit ? 'text-amber-400 animate-diya' : 'text-stone-500'}`} />
            <span>
              {diyaLit
                ? (lang === 'hi' ? 'पावन दीप प्रज्ज्वलित है 🪔' : 'Sacred Diya Lit 🪔')
                : (lang === 'hi' ? 'दीप जलाएं' : 'Light Diya')}
            </span>
          </button>

          <span className="text-amber-600 hidden sm:inline">|</span>

          <button
            onClick={handleRing}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-stone-900/60 hover:bg-stone-900 text-amber-300 border border-amber-500/30 transition cursor-pointer"
            title="Temple Bell"
          >
            <Bell className={`w-4 h-4 text-amber-400 ${bellTriggered ? 'animate-bell-ring' : ''}`} />
            <span>{lang === 'hi' ? 'मंदिर की घंटी बजाएं 🔔' : 'Ring Temple Bell 🔔'}</span>
          </button>

          <span className="text-amber-600 hidden md:inline">|</span>

          <span className="text-stone-300 text-xs hidden md:inline">
            {lang === 'hi'
              ? 'सहारनपुर–शामली–दिल्ली रेल मार्ग पर स्थित'
              : 'Located on Saharanpur–Shamli–Delhi rail line'}
          </span>
        </div>
      </div>

      {/* Subtle Scroll Down Animation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-amber-300/70 hover:text-amber-300 transition-colors pointer-events-auto">
        <a href="#about" aria-label="Scroll down to About section" className="flex flex-col items-center">
          <span className="text-[11px] font-medium tracking-widest uppercase">
            {lang === 'hi' ? 'दर्शन प्रारंभ' : 'Explore'}
          </span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
