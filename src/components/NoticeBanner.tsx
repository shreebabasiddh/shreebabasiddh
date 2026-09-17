import React from 'react';
import { Megaphone, AlertCircle } from 'lucide-react';
import { Language } from '../types';

interface NoticeBannerProps {
  lang: Language;
  noticeHi: string;
  noticeEn: string;
}

export const NoticeBanner: React.FC<NoticeBannerProps> = ({ lang, noticeHi, noticeEn }) => {
  if (!noticeHi && !noticeEn) return null;

  return (
    <div className="bg-gradient-to-r from-[#92400E] via-[#B45309] to-[#92400E] text-amber-50 px-4 py-2.5 text-xs sm:text-sm border-b border-amber-500/40 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="flex-shrink-0 p-1 rounded bg-amber-950/40 text-amber-200">
            <Megaphone className="w-4 h-4 text-amber-300" />
          </span>
          <p className="truncate font-medium">
            <span className="font-semibold text-amber-200 mr-1.5">
              {lang === 'hi' ? 'महत्वपूर्ण सूचना:' : 'Notice:'}
            </span>
            {lang === 'hi' ? noticeHi : noticeEn}
          </p>
        </div>

        <a
          href="#mela"
          className="flex-shrink-0 text-xs font-semibold px-2.5 py-1 rounded bg-amber-950/60 hover:bg-amber-950 text-amber-200 border border-amber-400/30 transition whitespace-nowrap"
        >
          {lang === 'hi' ? 'मेला विवरण देखें' : 'View Mela Details'}
        </a>
      </div>
    </div>
  );
};
