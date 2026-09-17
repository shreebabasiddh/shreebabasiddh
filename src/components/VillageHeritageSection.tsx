import React from 'react';
import { Home, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { Language, TimelineMilestone } from '../types';

interface VillageHeritageProps {
  lang: Language;
  timeline: TimelineMilestone[];
}

export const VillageHeritageSection: React.FC<VillageHeritageProps> = ({ lang, timeline }) => {
  return (
    <section id="heritage" className="py-20 bg-gradient-to-b from-[#F7F3EB] via-[#FAF7F2] to-[#F7F3EB] text-[#2C221E] relative border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-stone-200/80 border border-stone-300 text-stone-800 text-xs sm:text-sm font-semibold uppercase mb-3">
            <Home className="w-3.5 h-3.5 text-stone-700" />
            <span>{lang === 'hi' ? 'ग्राम्य गौरव एवं सांस्कृतिक ताना-बाना' : 'Village & Cultural Tapestry'}</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#422006] mb-4">
            🏡 {lang === 'hi' ? 'सोना अर्जुनपुर — बाबा सिद्ध जी की धरती' : 'Sona Arjunpur — The Sacred Land of Baba Siddh Ji'}
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto rounded-full mb-6" />

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
            {lang === 'hi' ? (
              <>
                सोना अर्जुनपुर की पहचान <strong>बाबा सिद्ध जी की पवित्र तपोस्थली से गहराई से जुड़ी हुई है</strong>। मंदिर, सरोवर, वार्षिक मेला और बाबा सिद्ध जी के नाम से जुड़े शिक्षण संस्थान इस गांव की <strong>धार्मिक एवं सामाजिक पहचान का महत्वपूर्ण हिस्सा</strong> हैं।
              </>
            ) : (
              <>
                The profound identity of <strong>Sona Arjunpur is inextricably rooted in the sacred taposthali of Baba Siddh Ji</strong>. The ancient temple, the serene sarovar, the joyous annual fair, and the academic institutions in his name form the living heartbeat of this village’s spiritual and communal heritage.
              </>
            )}
          </p>
        </div>

        {/* Visual Timeline Flow Summary */}
        <div className="bg-amber-950 text-amber-100 rounded-3xl p-6 sm:p-8 shadow-xl mb-14 border border-amber-600/40">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-300 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              {lang === 'hi' ? 'विरासत का अविरल प्रवाह' : 'Living Heritage Continuum'}
            </span>
            <span className="text-xs text-amber-300/80 hidden sm:inline">
              {lang === 'hi' ? 'तपस्या से आधुनिक शिक्षा तक' : 'From Penance to Modern Enlightenment'}
            </span>
          </div>

          {/* Connected Flow Line */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { num: '01', titleHi: 'बाबा की तपस्या', titleEn: 'Penance' },
              { num: '02', titleHi: 'पावन समाधि', titleEn: 'Samadhi' },
              { num: '03', titleHi: 'मंदिर प्रतिष्ठा', titleEn: 'Mandir' },
              { num: '04', titleHi: 'सरोवर परंपरा', titleEn: 'Sarovar' },
              { num: '05', titleHi: 'वार्षिक मेले', titleEn: 'Annual Fair' },
              { num: '06', titleHi: 'शिक्षा संस्थान', titleEn: 'Education' },
            ].map((node, i) => (
              <div
                key={node.num}
                className="bg-amber-900/60 border border-amber-500/30 rounded-2xl p-3.5 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-amber-400 font-mono">{node.num}</span>
                  {i < 5 && <ArrowRight className="w-3.5 h-3.5 text-amber-500/50 hidden lg:block" />}
                </div>
                <div className="font-bold text-xs sm:text-sm text-amber-100">
                  {lang === 'hi' ? node.titleHi : node.titleEn}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Vertical / Stepped Timeline */}
        <div className="relative pl-6 sm:pl-10 space-y-8 before:content-[''] before:absolute before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-amber-600 before:via-amber-400 before:to-stone-300">
          {timeline.map((item) => (
            <div key={item.step} className="relative group">
              {/* Dot marker */}
              <div className="absolute -left-[30px] sm:-left-[46px] top-1.5 w-6 h-6 rounded-full bg-amber-600 text-white font-bold text-[11px] flex items-center justify-center border-4 border-[#FAF7F2] shadow-sm group-hover:scale-125 transition-transform">
                {item.step}
              </div>

              {/* Card content */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200/90 shadow-sm hover:shadow-md transition">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="font-heading text-base sm:text-lg font-bold text-stone-900">
                    {lang === 'hi' ? item.titleHi : item.titleEn}
                  </h3>
                  <span className="text-xs font-semibold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                    {lang === 'hi' ? item.subtitleHi : item.subtitleEn}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {lang === 'hi' ? item.descHi : item.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
