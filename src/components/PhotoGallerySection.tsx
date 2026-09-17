import React, { useState } from 'react';
import { Camera, Filter, Plus, Maximize2, Tag, ShieldCheck } from 'lucide-react';
import { GalleryCategory, GalleryItem, Language } from '../types';

interface PhotoGalleryProps {
  lang: Language;
  galleryItems: GalleryItem[];
  onOpenLightbox: (title: string, desc: string, category: string, imageUrl?: string) => void;
  onOpenAdmin: () => void;
}

export const PhotoGallerySection: React.FC<PhotoGalleryProps> = ({
  lang,
  galleryItems,
  onOpenLightbox,
  onOpenAdmin,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('all');

  const categories: { key: GalleryCategory; labelHi: string; labelEn: string }[] = [
    { key: 'all', labelHi: 'सभी दर्शन', labelEn: 'All Photos' },
    { key: 'mandir', labelHi: 'मंदिर', labelEn: 'Mandir' },
    { key: 'baba_siddh', labelHi: 'बाबा सिद्ध जी', labelEn: 'Baba Siddh Ji' },
    { key: 'sarovar', labelHi: 'सरोवर', labelEn: 'Sarovar' },
    { key: 'fish_turtles', labelHi: 'मछलियां और कछुए', labelEn: 'Fish & Turtles' },
    { key: 'chandan_mitti', labelHi: 'चंदन मिट्टी', labelEn: 'Chandan Mitti' },
    { key: 'mela', labelHi: 'मेला', labelEn: 'Mela' },
    { key: 'sant_sammelan', labelHi: 'संत सम्मेलन', labelEn: 'Sant Sammelan' },
    { key: 'devotees', labelHi: 'श्रद्धालु', labelEn: 'Devotees' },
    { key: 'sona_arjunpur', labelHi: 'सोना अर्जुनपुर', labelEn: 'Sona Arjunpur' },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-[#FAF7F2] text-[#2C221E] relative border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs sm:text-sm font-semibold uppercase mb-3">
            <Camera className="w-3.5 h-3.5 text-amber-700" />
            <span>{lang === 'hi' ? 'चित्र वीथिका एवं पावन दर्शन' : 'Visual Gallery & Darshan'}</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#422006] mb-4">
            📸 {lang === 'hi' ? 'बाबा सिद्ध मंदिर दर्शन' : 'Baba Siddh Mandir Darshan'}
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto rounded-full mb-4" />

          <p className="text-xs sm:text-sm text-stone-600">
            {lang === 'hi'
              ? 'आधिकारिक व सत्यापित छायाचित्र वीथिका। वास्तविक मंदिर छायाचित्र अपलोड करने हेतु समर्पित स्लॉट।'
              : 'Official gallery layout. Curated photo slots designated for verified temple photography.'}
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center justify-start sm:justify-center gap-1.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.key
                  ? 'bg-amber-800 text-white shadow-md'
                  : 'bg-white hover:bg-amber-50 text-stone-700 border border-stone-200'
              }`}
            >
              {lang === 'hi' ? cat.labelHi : cat.labelEn}
            </button>
          ))}
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() =>
                onOpenLightbox(
                  lang === 'hi' ? item.titleHi : item.titleEn,
                  lang === 'hi' ? item.descriptionHi : item.descriptionEn,
                  item.category,
                  item.imageUrl
                )
              }
              className="group bg-white rounded-3xl border border-stone-200 shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col cursor-pointer"
            >
              {/* Photo Area or Clearly Marked Placeholder */}
              <div className="h-52 bg-gradient-to-br from-amber-50 via-stone-100 to-amber-100/60 relative overflow-hidden flex flex-col items-center justify-center p-6 text-center border-b border-stone-100">
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={lang === 'hi' ? item.titleHi : item.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                ) : (
                  <div className="space-y-2">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-amber-200 text-amber-700 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                      <Camera className="w-6 h-6" />
                    </div>
                    <div className="inline-block text-[11px] font-bold text-amber-900 bg-amber-100 px-3 py-0.5 rounded-full border border-amber-300">
                      {lang === 'hi' ? item.placeholderLabelHi : item.placeholderLabelEn}
                    </div>
                    <div className="text-[10px] text-stone-500 italic block">
                      {lang === 'hi' ? '[सत्यापित मंदिर छायाचित्र हेतु आरक्षित]' : '[Verified Photo Placeholder]'}
                    </div>
                  </div>
                )}

                {/* Magnify hover icon */}
                <div className="absolute top-3 right-3 p-2 rounded-full bg-black/40 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-amber-700 mb-1.5 uppercase">
                    <Tag className="w-3 h-3" />
                    <span>
                      {categories.find((c) => c.key === item.category)?.[lang === 'hi' ? 'labelHi' : 'labelEn'] ||
                        item.category}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base text-stone-900 mb-1.5 group-hover:text-amber-800 transition-colors">
                    {lang === 'hi' ? item.titleHi : item.titleEn}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {lang === 'hi' ? item.descriptionHi : item.descriptionEn}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-amber-800 font-semibold">
                  <span>{lang === 'hi' ? 'बड़ा देखें' : 'Click to preview'}</span>
                  <span>🔍</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Admin Action & Authenticity Notice */}
        <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs text-stone-600">
            <ShieldCheck className="w-5 h-5 text-amber-700 flex-shrink-0" />
            <span>
              {lang === 'hi'
                ? 'तथ्यनिष्ठ नियम: यहां कोई भी काल्पनिक अथवा कृत्रिम ऐतिहासिक फोटो नहीं बनाई गई है। मंदिर प्रबंधन समिति सत्यापित वास्तविक फोटो अपलोड कर सकती है।'
                : 'Factual policy: No fabricated or artificially generated historical photographs are used. The temple administration can directly upload verified authentic pictures.'}
            </span>
          </div>

          <button
            onClick={onOpenAdmin}
            className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-800 hover:bg-amber-700 text-white font-semibold text-xs shadow-sm transition cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'प्रबंधन: फोटो जोड़ें / बदलें' : 'Manage Gallery'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
