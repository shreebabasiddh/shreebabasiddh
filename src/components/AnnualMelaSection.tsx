import React from 'react';
import { Calendar, Tent, Clock, MapPin, Sparkles, Users, Info, Settings } from 'lucide-react';
import { Language } from '../types';

interface AnnualMelaProps {
  lang: Language;
  melaTimingsHi: string;
  melaTimingsEn: string;
  onOpenAdmin: () => void;
}

export const AnnualMelaSection: React.FC<AnnualMelaProps> = ({
  lang,
  melaTimingsHi,
  melaTimingsEn,
  onOpenAdmin,
}) => {
  return (
    <section id="mela" className="py-20 bg-gradient-to-b from-[#FFFBEB] via-[#FAF7F2] to-[#FFFBEB] text-[#2C221E] relative border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-200/80 border border-amber-400 text-amber-900 text-xs sm:text-sm font-semibold uppercase mb-3">
            <Tent className="w-3.5 h-3.5 text-amber-800" />
            <span>{lang === 'hi' ? 'सांस्कृतिक एवं धार्मिक महोत्सव' : 'Cultural & Spiritual Festival'}</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#78350F] mb-4">
            🎪 {lang === 'hi' ? 'वार्षिक मेला' : 'Annual Sacred Mela'}
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto rounded-full mb-6" />

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
            {lang === 'hi' ? (
              <>
                हर वर्ष <strong>आषाढ़ और सावन</strong> के दौरान <strong>शनिवार और रविवार</strong> को यहां मेला आयोजित होने की परंपरा है। इस अवसर पर दूर-दूर से श्रद्धालु सोना अर्जुनपुर पहुंचते हैं और बाबा सिद्ध जी के दर्शन करते हैं। मेला इस प्राचीन धार्मिक स्थल की <strong>आध्यात्मिक और सामाजिक पहचान</strong> का महत्वपूर्ण हिस्सा है।
              </>
            ) : (
              <>
                By tradition, a grand pilgrimage fair is held every year during the holy months of <strong>Ashadha and Sawan</strong>, specifically on <strong>Saturdays and Sundays</strong>. Pilgrims travel from across the region to Sona Arjunpur to pay homage. The mela forms a vital cornerstone of the spiritual and communal identity of this ancient holy sanctuary.
              </>
            )}
          </p>
        </div>

        {/* Festival Highlights & Timing Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Info Card */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 border border-amber-300 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-amber-100">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                  {lang === 'hi' ? 'पारंपरिक मेला समय चक्र' : 'Traditional Period'}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                  {lang === 'hi' ? 'आषाढ़ — सावन मास' : 'Ashadha — Sawan Months'}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3">
                {lang === 'hi'
                  ? 'प्रत्येक शनिवार एवं रविवार का पावन समागम'
                  : 'Sacred Weekend Congregation (Sat & Sun)'}
              </h3>

              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                {lang === 'hi'
                  ? 'मेले के पावन दिनों में मंदिर परिसर में विशेष पूजा, अखंड भजन-कीर्तन, श्रद्धालुओं के लिए भंडारा, तथा स्थानीय ग्रामीण हस्तशिल्प और धार्मिक पूजन सामग्री की दुकानें सजती हैं।'
                  : 'During these auspicious fair days, the premises host special worship, devotional kirtan, community bhandaras, and traditional rural stalls offering sacred puja items.'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200">
                  <Calendar className="w-5 h-5 text-amber-700 mb-1.5" />
                  <div className="text-xs font-bold text-stone-900">{lang === 'hi' ? 'अवधि' : 'Schedule'}</div>
                  <div className="text-xs text-stone-600">{lang === 'hi' ? 'शनिवार व रविवार' : 'Saturdays & Sundays'}</div>
                </div>

                <div className="p-3.5 rounded-xl bg-orange-50/80 border border-orange-200">
                  <Users className="w-5 h-5 text-orange-700 mb-1.5" />
                  <div className="text-xs font-bold text-stone-900">{lang === 'hi' ? 'समागम' : 'Gathering'}</div>
                  <div className="text-xs text-stone-600">{lang === 'hi' ? 'क्षेत्रीय श्रद्धालु' : 'Regional Pilgrims'}</div>
                </div>

                <div className="p-3.5 rounded-xl bg-yellow-50/80 border border-yellow-200">
                  <MapPin className="w-5 h-5 text-yellow-700 mb-1.5" />
                  <div className="text-xs font-bold text-stone-900">{lang === 'hi' ? 'स्थान' : 'Venue'}</div>
                  <div className="text-xs text-stone-600">{lang === 'hi' ? 'मंदिर व सरोवर परिसर' : 'Mandir & Sarovar'}</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <span className="flex items-center gap-1.5">
                <Info className="w-4 h-4 text-amber-600" />
                {lang === 'hi'
                  ? 'सटीक वार्षिक तिथियां स्थानीय पंचांग अनुसार समिति द्वारा घोषित की जाती हैं।'
                  : 'Exact calendar dates are confirmed per the traditional Panchang by the committee.'}
              </span>
            </div>
          </div>

          {/* Upcoming Mela Dates (Admin Editable Area) */}
          <div className="bg-gradient-to-br from-[#78350F] via-[#92400E] to-[#451A03] text-amber-50 rounded-3xl p-6 sm:p-8 shadow-lg border border-amber-600/50 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-widest flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-amber-400" />
                  {lang === 'hi' ? 'आगामी मेला तिथियां' : 'Upcoming Mela Schedule'}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-amber-900/80 text-amber-200 border border-amber-600/40">
                  {lang === 'hi' ? 'प्रशासन द्वारा अद्यतन' : 'Admin Updatable'}
                </span>
              </div>

              <h4 className="text-lg font-bold text-white mb-2">
                {lang === 'hi' ? 'वर्तमान आधिकारिक निर्धारण:' : 'Official Schedule:'}
              </h4>

              <div className="p-4 rounded-2xl bg-amber-950/60 border border-amber-700/50 mb-4 text-sm leading-relaxed text-amber-100">
                {lang === 'hi' ? melaTimingsHi : melaTimingsEn}
              </div>

              <p className="text-xs text-amber-200/80 leading-relaxed mb-4">
                {lang === 'hi'
                  ? 'समिति द्वारा जब भी विशिष्ट तिथियां, भंडारे का समय अथवा विशेष आयोजन घोषित किए जाते हैं, वे इस अनुभाग में तुरंत प्रदर्शित होते हैं।'
                  : 'Whenever specific dates, bhandara timings, or special arrangements are announced by the committee, they are reflected here.'}
              </p>
            </div>

            <button
              onClick={onOpenAdmin}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-md transition cursor-pointer"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? 'मेला तिथियां अपडेट करें' : 'Update Mela Dates (Admin)'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
