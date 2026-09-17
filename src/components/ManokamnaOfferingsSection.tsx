import React from 'react';
import { Flag, Utensils, Eye, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';

interface ManokamnaOfferingsProps {
  lang: Language;
}

export const ManokamnaOfferingsSection: React.FC<ManokamnaOfferingsProps> = ({ lang }) => {
  const cards = [
    {
      id: 'manauti',
      titleHi: 'मनौती (Manauti)',
      titleEn: 'Sacred Vows (Manauti)',
      descHi: 'श्रद्धालु मन में शुद्धि और निष्ठा के साथ बाबा सिद्ध जी के सम्मुख अपनी मनोकामना व संकल्प व्यक्त करते हैं।',
      descEn: 'Devotees present their heartfelt prayers and vows before Baba Siddh ji with sincerity and faith.',
      icon: 'sparkles',
      accentColor: 'from-amber-500 to-amber-700',
    },
    {
      id: 'dhwaj',
      titleHi: 'पावन ध्वज अर्पण (Dhwaj)',
      titleEn: 'Offering Sacred Flag (Dhwaj)',
      descHi: 'मनौती पूर्ण होने पर अथवा श्रद्धाभाव से मंदिर शिखर पर लाल-केसरिया पवित्र ध्वज चढ़ाने की मंगल परंपरा है।',
      descEn: 'Upon fulfillment of prayers, pilgrims joyfully offer sacred saffron/red devotional flags.',
      icon: 'flag',
      accentColor: 'from-red-500 to-rose-700',
    },
    {
      id: 'bhandara',
      titleHi: 'भंडारा व प्रसाद सेवा (Bhandara)',
      titleEn: 'Community Bhandara (Prasad Seva)',
      descHi: 'श्रद्धालु अपने सामर्थ्य अनुसार भंडारे का आयोजन कर साधु-संतों, भक्तों एवं जरूरतमंदों को भोजन कराते हैं।',
      descEn: 'Pilgrims organize benevolent community meals to feed sadhus, devotees and visitors in gratitude.',
      icon: 'utensils',
      accentColor: 'from-orange-500 to-amber-700',
    },
    {
      id: 'darshan',
      titleHi: 'समाधि दर्शन (Darshan)',
      titleEn: 'Holy Samadhi Darshan',
      descHi: 'गर्भगृह एवं समाधि स्थल पर शीश नवाकर आशीर्वाद प्राप्त करना तथा आध्यात्मिक शांति की अनुभूति करना।',
      descEn: 'Bowing with folded hands at the sanctum shrine, experiencing serenity and divine grace.',
      icon: 'eye',
      accentColor: 'from-yellow-600 to-amber-800',
    },
    {
      id: 'aashirwad',
      titleHi: 'कृपा एवं आशीर्वाद (Aashirwad)',
      titleEn: 'Divine Grace & Blessing',
      descHi: 'बाबा की कृपा से जीवन में सुख, शांति, निरोगी काया और सद्भाव की निरंतर प्राप्ति का अटूट विश्वास।',
      descEn: 'Unyielding belief in receiving lasting peace, health, harmony and spiritual protection.',
      icon: 'blessing',
      accentColor: 'from-emerald-600 to-teal-800',
    },
  ];

  return (
    <section id="offerings" className="py-20 bg-[#FAF7F2] text-[#2C221E] relative border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs sm:text-sm font-semibold uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>{lang === 'hi' ? 'भक्ति, समर्पण एवं कृतज्ञता' : 'Devotion & Offerings'}</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#422006] mb-4">
            🙏 {lang === 'hi' ? 'मनौती और श्रद्धा' : 'Manokamna & Sacred Offerings'}
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto rounded-full mb-6" />

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-amber-200/80 shadow-sm text-stone-700 text-base sm:text-lg leading-relaxed">
            <p className="mb-4">
              {lang === 'hi' ? (
                <>
                  <strong>श्री बाबा सिद्ध जी के दरबार में</strong> श्रद्धालु अपनी मनोकामनाएं लेकर आते हैं। कोई मनौती का ध्वज चढ़ाता है, कोई भंडारा करता है, कोई बाबा से अपनी इच्छा पूरी होने की प्रार्थना करता है, और मनोकामना पूरी होने के बाद अनेक श्रद्धालु दोबारा कृतज्ञता पूर्वक दर्शन करने आते हैं।
                </>
              ) : (
                <>
                  <strong>At the sacred court of Shri Baba Siddh Ji</strong>, devotees arrive carrying their deepest prayers and wishes. Some offer a devotional flag (dhwaj), others organize a community feast (bhandara), while many pray for peace and well-being. Once their prayers are fulfilled, devotees return to offer heartfelt gratitude.
                </>
              )}
            </p>
            <p className="text-amber-900 font-semibold text-sm sm:text-base italic">
              {lang === 'hi'
                ? '“यह स्थान हजारों श्रद्धालुओं के विश्वास, आस्था और जीवन के अटूट संकल्प से जुड़ा हुआ है।”'
                : '“This sacred sanctuary is intrinsically woven with the faith, hope, and sincere devotion of countless pilgrims.”'}
            </p>
          </div>
        </div>

        {/* 5 Distinct Visual Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {cards.map((c) => (
            <div
              key={c.id}
              className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm hover:shadow-md hover:border-amber-400/80 transition-all flex flex-col justify-between group"
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.accentColor} text-white flex items-center justify-center shadow-md mb-4 group-hover:scale-110 transition-transform`}
                >
                  {c.icon === 'sparkles' && <Sparkles className="w-6 h-6" />}
                  {c.icon === 'flag' && <Flag className="w-6 h-6" />}
                  {c.icon === 'utensils' && <Utensils className="w-6 h-6" />}
                  {c.icon === 'eye' && <Eye className="w-6 h-6" />}
                  {c.icon === 'blessing' && <HeartHandshake className="w-6 h-6" />}
                </div>

                <h3 className="font-bold text-base text-stone-900 mb-2 group-hover:text-amber-800 transition-colors">
                  {lang === 'hi' ? c.titleHi : c.titleEn}
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {lang === 'hi' ? c.descHi : c.descEn}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-1.5 text-[11px] text-amber-700 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                <span>{lang === 'hi' ? 'परंपरागत अनुष्ठान' : 'Sacred Tradition'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
