import React from 'react';
import { X, Image as ImageIcon, Sparkles, Tag } from 'lucide-react';
import { Language } from '../types';

interface LightboxModalProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
  title: string;
  desc: string;
  category: string;
  imageUrl?: string;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  lang,
  isOpen,
  onClose,
  title,
  desc,
  category,
  imageUrl,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="bg-[#1C130D] text-white rounded-3xl max-w-3xl w-full border border-amber-500/40 overflow-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-amber-200 hover:text-white flex items-center justify-center transition cursor-pointer"
          aria-label="Close Preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image or Respectful Placeholder Stage */}
        <div className="h-72 sm:h-96 bg-stone-950 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="space-y-4 max-w-md">
              <div className="w-16 h-16 rounded-3xl bg-amber-500/20 text-amber-300 flex items-center justify-center mx-auto border border-amber-400/30">
                <ImageIcon className="w-8 h-8" />
              </div>
              <div className="inline-block text-xs font-bold text-amber-300 bg-amber-950/80 px-3.5 py-1 rounded-full border border-amber-500/40">
                {lang === 'hi' ? 'सत्यापित मंदिर छायाचित्र स्लॉट' : 'Verified Temple Photo Slot'}
              </div>
              <p className="text-xs text-stone-400 leading-relaxed">
                {lang === 'hi'
                  ? 'यह स्लॉट वास्तविक, उच्च-गुणवत्ता वाले प्रमाणित मंदिर छायाचित्र हेतु आरक्षित है। कोई भी काल्पनिक कृत्रिम चित्र प्रदर्शित नहीं किया जाता।'
                  : 'This slot is reserved for verified authentic temple photography. Fabricated images are avoided to preserve historical accuracy.'}
              </p>
            </div>
          )}
        </div>

        {/* Information Meta Bar */}
        <div className="p-6 bg-[#26170E] border-t border-amber-900/60">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
            <Tag className="w-3.5 h-3.5" />
            <span>{category}</span>
          </div>

          <h3 className="font-heading font-bold text-xl sm:text-2xl text-amber-100 mb-2">{title}</h3>

          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">{desc}</p>

          <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
            <span className="flex items-center gap-1.5 text-amber-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              {lang === 'hi' ? 'श्री बाबा सिद्ध मंदिर, सोना अर्जुनपुर' : 'Shri Baba Siddh Mandir, Sona Arjunpur'}
            </span>
            <button
              onClick={onClose}
              className="text-xs font-semibold px-3 py-1 rounded-lg bg-amber-900/60 hover:bg-amber-800 text-amber-200 transition"
            >
              {lang === 'hi' ? 'बंद करें' : 'Close'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
