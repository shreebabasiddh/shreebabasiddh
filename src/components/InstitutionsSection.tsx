import React from 'react';
import { GraduationCap, School, BookOpen, ExternalLink, ShieldCheck } from 'lucide-react';
import { Language, Institution } from '../types';

interface InstitutionsProps {
  lang: Language;
  institutions: Institution[];
}

export const InstitutionsSection: React.FC<InstitutionsProps> = ({ lang, institutions }) => {
  return (
    <section id="institutions" className="py-20 bg-[#FAF7F2] text-[#2C221E] relative border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 border border-blue-300 text-blue-900 text-xs sm:text-sm font-semibold uppercase mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-blue-700" />
            <span>{lang === 'hi' ? 'आध्यात्मिक प्रेरणा से विद्या का प्रकाश' : 'Education & Heritage'}</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A8A] mb-4">
            📚 {lang === 'hi' ? 'बाबा सिद्ध जी के नाम से शिक्षा की पहचान' : 'Educational Legacy in Baba Siddh Ji’s Name'}
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent mx-auto rounded-full mb-6" />

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
            {lang === 'hi' ? (
              <>
                बाबा सिद्ध जी की आस्था का प्रभाव <strong>केवल मंदिर तक सीमित नहीं है</strong>। सोना अर्जुनपुर में शिक्षा के क्षेत्र में भी <strong>बाबा सिद्ध जी के नाम की विशेष पहचान</strong> दिखाई देती है।
              </>
            ) : (
              <>
                The profound influence of Baba Siddh ji’s sanctity is <strong>not confined solely to the temple</strong>. In the realm of learning and rural education as well, <strong>institutions bearing Baba Siddh ji’s revered name</strong> stand as beacons of knowledge in Sona Arjunpur.
              </>
            )}
          </p>
        </div>

        {/* 3 Prominent Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {institutions.map((inst, index) => (
            <div
              key={inst.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-800 flex items-center justify-center font-bold shadow-inner">
                    {index === 0 && <School className="w-6 h-6" />}
                    {index === 1 && <GraduationCap className="w-6 h-6" />}
                    {index === 2 && <BookOpen className="w-6 h-6" />}
                  </div>
                  <span className="text-[11px] font-semibold text-blue-900 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                    {lang === 'hi' ? inst.categoryHi : inst.categoryEn}
                  </span>
                </div>

                <h3 className="font-heading text-lg sm:text-xl font-bold text-stone-900 mb-2">
                  {lang === 'hi' ? inst.nameHi : inst.nameEn}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                  {lang === 'hi' ? inst.descHi : inst.descEn}
                </p>
              </div>

              {/* Status / Link Placeholder (Strictly authentic, no fabricated phone/websites) */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <span className="italic">
                  {lang === 'hi' ? inst.statusHi : inst.statusEn}
                </span>
                <span className="p-1 rounded bg-stone-100 text-stone-400">
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Authenticity Safeguard Note */}
        <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 text-xs text-stone-600 flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-blue-800 flex-shrink-0" />
          <p>
            {lang === 'hi'
              ? 'टिप्पणी: इन शिक्षण संस्थानों के आधिकारिक संपर्क सूत्र, प्रवेश विवरण एवं आधिकारिक वेबसाइट लिंक उपलब्ध होते ही यहां यथावत जोड़े जाएंगे।'
              : 'Note: Verified official contact links, admission guidelines, and portals for these institutions will be added as soon as confirmed by their administrations.'}
          </p>
        </div>
      </div>
    </section>
  );
};
