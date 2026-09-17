import React from 'react';
import { Calendar, Users, Award, Sparkles, BookOpen, ChevronRight, PlusCircle } from 'lucide-react';
import { Language } from '../types';

interface SantSammelanProps {
  lang: Language;
  onOpenAdmin: () => void;
}

export const SantSammelanSection: React.FC<SantSammelanProps> = ({ lang, onOpenAdmin }) => {
  return (
    <section id="sant-sammelan" className="py-20 bg-[#FAF7F2] text-[#2C221E] relative border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs sm:text-sm font-semibold uppercase mb-3">
            <Users className="w-3.5 h-3.5 text-amber-700" />
            <span>{lang === 'hi' ? 'साधु-संत समागम एवं प्रवचन' : 'Spiritual Congregation'}</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#422006] mb-4">
            🕉️ {lang === 'hi' ? 'संत सम्मेलन' : 'Sant Sammelan'}
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto rounded-full mb-6" />

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
            {lang === 'hi' ? (
              <>
                बाबा सिद्ध मंदिर में समय-समय पर <strong>धार्मिक एवं संत सम्मेलनों</strong> का आयोजन भी होता रहा है। वर्ष 2026 में यहां <strong>52वें विराट संत सम्मेलन</strong> के आयोजन का उल्लेख उपलब्ध स्रोतों में मिलता है।
              </>
            ) : (
              <>
                Spiritual gatherings and <strong>Sant Sammelans (assemblies of revered saints)</strong> have been traditionally hosted at Shri Baba Siddh Mandir from time to time. Available records note the organization of the <strong>52nd Virat Sant Sammelan in the year 2026</strong>.
              </>
            )}
          </p>
        </div>

        {/* Featured 52nd Virat Sant Sammelan Card */}
        <div className="bg-gradient-to-br from-[#2E160E] via-[#451F14] to-[#2E160E] text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-amber-500/40 mb-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-400/30">
                <Award className="w-4 h-4 text-amber-400" />
                <span>{lang === 'hi' ? 'ऐतिहासिक उपलब्धि • वर्ष 2026' : 'Historical Milestone • Year 2026'}</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-100 mb-4">
                {lang === 'hi' ? '52वां विराट संत सम्मेलन' : '52nd Virat Sant Sammelan'}
              </h3>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6">
                {lang === 'hi'
                  ? 'यह विराट संत सम्मेलन क्षेत्र की आध्यात्मिक चेतना, सनातन संस्कृति, नैतिक उत्थान तथा साधु-संतों के अमृत वचनों का महाकुंभ है। संतों के सान्निध्य में भक्तों को धर्म, अध्यात्म और मानव सेवा की प्रेरणा मिलती है।'
                  : 'This historic grand conference stands as a magnificent assembly celebrating Sanatan values, moral upliftment, and the divine wisdom of revered saints. Pilgrims receive inspiring discourses on selfless service, spirituality, and societal harmony.'}
              </p>

              <div className="flex flex-wrap gap-4 text-xs">
                <div className="flex items-center gap-2 bg-amber-950/70 border border-amber-600/30 px-3.5 py-2 rounded-xl text-amber-200">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span>{lang === 'hi' ? 'आयोजन वर्ष: 2026' : 'Year: 2026'}</span>
                </div>
                <div className="flex items-center gap-2 bg-amber-950/70 border border-amber-600/30 px-3.5 py-2 rounded-xl text-amber-200">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>{lang === 'hi' ? '52वां संस्करण' : '52nd Edition'}</span>
                </div>
                <div className="flex items-center gap-2 bg-amber-950/70 border border-amber-600/30 px-3.5 py-2 rounded-xl text-amber-200">
                  <BookOpen className="w-4 h-4 text-amber-400" />
                  <span>{lang === 'hi' ? 'प्रवचन एवं आशीर्वचन' : 'Spiritual Discourses'}</span>
                </div>
              </div>
            </div>

            <div className="bg-amber-950/80 rounded-2xl p-6 border border-amber-500/30 text-center">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center mx-auto mb-3 text-2xl font-bold border border-amber-400/40">
                🕉️
              </div>
              <h4 className="font-bold text-amber-100 text-base mb-1">
                {lang === 'hi' ? 'संत वाणी एवं सत्संग' : 'Saintly Blessings'}
              </h4>
              <p className="text-xs text-amber-200/80 leading-relaxed mb-4">
                {lang === 'hi'
                  ? 'आगामी संत सम्मेलनों की तिथियां एवं पूज्य संतों के आगमन का कार्यक्रम समिति द्वारा समय-समय पर अद्यतन किया जाता है।'
                  : 'Future conference schedules and saintly visit programs are regularly announced by the temple committee.'}
              </p>

              <button
                onClick={onOpenAdmin}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-md transition cursor-pointer"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>{lang === 'hi' ? 'नया आयोजन जोड़ें' : 'Add Future Event'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Future Events Placeholder Area */}
        <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-stone-100">
            <h4 className="font-bold text-stone-800 text-sm sm:text-base flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-700" />
              <span>{lang === 'hi' ? 'आगामी धार्मिक कार्यक्रम एवं सम्मेलन' : 'Upcoming Spiritual Gatherings'}</span>
            </h4>
            <span className="text-xs text-stone-500">
              {lang === 'hi' ? 'समिति द्वारा गतिशील अद्यतन' : 'Dynamically Updated'}
            </span>
          </div>

          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="text-xs font-semibold text-amber-800 mb-0.5">
                  {lang === 'hi' ? 'वार्षिक सत्संग एवं भजन संध्या' : 'Annual Satsang & Bhajan Sandhya'}
                </div>
                <div className="text-xs text-stone-600">
                  {lang === 'hi'
                    ? 'मेला अवधि के दौरान विशेष धार्मिक सभाएं एवं संत सान्निध्य।'
                    : 'Special spiritual assemblies and kirtan evenings during the mela period.'}
                </div>
              </div>
              <span className="inline-flex items-center text-xs font-semibold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full self-start sm:self-auto">
                {lang === 'hi' ? 'नियमित परंपरा' : 'Regular Tradition'}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="text-xs font-semibold text-amber-900 mb-0.5">
                  {lang === 'hi' ? 'भावी संत सम्मेलन (प्रस्तावित)' : 'Future Sant Sammelan (Proposed)'}
                </div>
                <div className="text-xs text-stone-600">
                  {lang === 'hi'
                    ? 'समिति द्वारा आगामी तिथि एवं रूपरेखा निर्धारित होते ही यहां प्रकाशित की जाएगी।'
                    : 'Dates and program schedules will be officially published here once finalized by the committee.'}
                </div>
              </div>
              <span className="inline-flex items-center text-xs font-semibold text-amber-900 bg-amber-100 px-3 py-1 rounded-full self-start sm:self-auto">
                {lang === 'hi' ? 'प्रतीक्षारत' : 'To Be Announced'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
