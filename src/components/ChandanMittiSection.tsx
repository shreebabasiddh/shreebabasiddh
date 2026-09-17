import React from 'react';
import { Leaf, AlertTriangle, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface ChandanMittiProps {
  lang: Language;
}

export const ChandanMittiSection: React.FC<ChandanMittiProps> = ({ lang }) => {
  return (
    <section id="chandan-mitti" className="py-20 bg-[#FAF7F2] text-[#2C221E] relative border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Badge */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs sm:text-sm font-semibold uppercase mb-3">
            <Leaf className="w-3.5 h-3.5 text-emerald-700" />
            <span>{lang === 'hi' ? 'स्थानीय पारंपरिक आस्था' : 'Local Traditional Belief'}</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14532D] mb-4">
            🌿 {lang === 'hi' ? 'सरोवर की “चंदन” मिट्टी' : 'Sacred "Chandan" Mitti of the Sarovar'}
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-emerald-600 to-transparent mx-auto rounded-full" />
        </div>

        {/* Core Tradition Story Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-emerald-200/80 shadow-md mb-8">
          <div className="space-y-5 text-base sm:text-lg text-stone-700 leading-relaxed">
            <p>
              {lang === 'hi' ? (
                <>
                  स्थानीय श्रद्धालु सरोवर की मिट्टी को आदरपूर्वक <strong>‘चंदन’</strong> के नाम से जानते हैं। यहां आने वाले श्रद्धालु इस मिट्टी का शरीर पर लेप करते हैं और उसके बाद सरोवर में पवित्र स्नान करते हैं।
                </>
              ) : (
                <>
                  Local devotees reverently refer to the sacred pond clay as <strong>‘Chandan’</strong> (sandalwood soil). Visiting pilgrims apply this natural clay paste over the body and subsequently take a holy bath in the sarovar waters.
                </>
              )}
            </p>

            <p className="bg-amber-50/60 p-4 rounded-2xl border border-amber-200 text-amber-950 font-normal">
              {lang === 'hi' ? (
                <>
                  <strong>स्थानीय मान्यता के अनुसार</strong>, बाबा सिद्ध जी ने शरीर त्यागने से पहले कहा था कि जो भी भक्त सच्चे मन और श्रद्धा से यहां आएगा, उसे <em>गठिया-बाय एवं कुछ अन्य शारीरिक व्याधियों में लाभ मिलेगा</em>।
                </>
              ) : (
                <>
                  <strong>According to local belief and oral traditions</strong>, before entering mahasamadhi, Baba Siddh ji expressed that devotees coming with genuine faith, devotion, and a sincere heart would find relief from <em>joint ailments, rheumatism, and bodily distress</em>.
                </>
              )}
            </p>

            <p>
              {lang === 'hi' ? (
                <>
                  इसी गहरी आस्था और विश्वास के कारण दूर-दूर से श्रद्धालु सोना अर्जुनपुर की इस पवित्र तपोस्थली पर खिंचे चले आते हैं।
                </>
              ) : (
                <>
                  Drawn by this enduring faith and spiritual reverence, pilgrims from distant towns and villages travel to this ancient shrine.
                </>
              )}
            </p>
          </div>

          {/* Steps of the Tradition Visual Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-stone-100">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-center">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mx-auto mb-2">
                1
              </div>
              <h4 className="font-bold text-stone-900 text-sm mb-1">
                {lang === 'hi' ? 'सरोवर मिट्टी अर्पण' : 'Sacred Clay'}
              </h4>
              <p className="text-xs text-stone-600">
                {lang === 'hi' ? 'सरोवर तट से शुद्ध मिट्टी ग्रहण करना' : 'Reverently gathering the sacred pond clay'}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-center">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mx-auto mb-2">
                2
              </div>
              <h4 className="font-bold text-stone-900 text-sm mb-1">
                {lang === 'hi' ? 'शरीर पर लेप' : 'Clay Application'}
              </h4>
              <p className="text-xs text-stone-600">
                {lang === 'hi' ? 'श्रद्धापूर्वक शरीर पर चंदन रूपी लेप' : 'Applying the soothing paste with devotion'}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-center">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center mx-auto mb-2">
                3
              </div>
              <h4 className="font-bold text-stone-900 text-sm mb-1">
                {lang === 'hi' ? 'पवित्र स्नान व दर्शन' : 'Holy Dip & Prayer'}
              </h4>
              <p className="text-xs text-stone-600">
                {lang === 'hi' ? 'स्नान उपरांत बाबा के दरबार में प्रार्थना' : 'Taking holy ablution followed by temple darshan'}
              </p>
            </div>
          </div>
        </div>

        {/* MANDATORY MEDICAL DISCLAIMER BOX */}
        <div className="bg-amber-50 rounded-2xl p-5 sm:p-6 border-2 border-amber-300 shadow-sm flex items-start gap-4">
          <div className="p-2 rounded-xl bg-amber-200/80 text-amber-900 flex-shrink-0 mt-0.5">
            <AlertTriangle className="w-5 h-5 text-amber-800" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-amber-950 uppercase tracking-wide mb-1 flex items-center gap-1.5">
              <span>{lang === 'hi' ? 'महत्वपूर्ण विधिक एवं स्वास्थ्य सूचना (Medical Disclaimer)' : 'Important Disclaimer'}</span>
            </h4>
            <p className="text-xs sm:text-sm text-amber-950 leading-relaxed font-medium">
              {lang === 'hi'
                ? '“यह विवरण स्थानीय धार्मिक मान्यता पर आधारित है। इसे चिकित्सकीय उपचार या वैज्ञानिक रूप से प्रमाणित इलाज का विकल्प न माना जाए।”'
                : '“This account is based purely on local religious tradition and devotee belief. It should NOT be construed as a medical treatment or scientifically proven medical therapy.”'}
            </p>
            <p className="text-[11px] text-amber-800 mt-2">
              {lang === 'hi'
                ? 'किसी भी स्वास्थ्य समस्या के लिए कृपया योग्य एवं पंजीकृत चिकित्सक से चिकित्सकीय परामर्श अवश्य लें।'
                : 'Please consult qualified medical professionals for any medical symptoms or diagnosis.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
