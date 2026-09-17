import React from 'react';
import { Sparkles, ShieldCheck, HeartHandshake, Eye, Award } from 'lucide-react';
import { Language } from '../types';

interface AboutSectionProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  return (
    <section id="about" className="py-20 bg-[#FAF7F2] text-[#2C221E] relative border-b border-stone-200/80">
      {/* Decorative background motifs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading Badge */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>{lang === 'hi' ? 'आध्यात्मिक एवं ऐतिहासिक पृष्ठभूमि' : 'Spiritual & Historical Background'}</span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold text-[#422006] mb-4">
            {lang === 'hi' ? 'श्री बाबा सिद्ध मंदिर — एक प्राचीन तपोस्थली' : 'Shri Baba Siddh Mandir — An Ancient Sacred Taposthali'}
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto rounded-full" />
        </div>

        {/* Narrative Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-amber-200/70 mb-12 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-36 h-36 bg-amber-100/50 rounded-full pointer-events-none" />

          {/* Quotation Frame */}
          <div className="relative z-10 space-y-5 text-base sm:text-lg text-stone-700 leading-relaxed">
            <p className="first-letter:text-4xl first-letter:font-bold first-letter:text-amber-800 first-letter:mr-2">
              {lang === 'hi' ? (
                <>
                  सहारनपुर जनपद के सोना अर्जुनपुर गांव में स्थित <strong>श्री बाबा सिद्ध मंदिर</strong> एक प्राचीन धार्मिक एवं आस्थास्थल है। <strong>स्थानीय मान्यता के अनुसार</strong>, बहुत समय पहले गुरु गोरखनाथ जी के शिष्य/परंपरा से जुड़े बाबा सिद्ध जी इस स्थान पर आए और यहां रहकर तपस्या एवं साधना की।
                </>
              ) : (
                <>
                  Located in village Sona Arjunpur of Saharanpur district, <strong>Shri Baba Siddh Mandir</strong> is an ancient spiritual sanctuary. <strong>According to local tradition</strong>, a long time ago Baba Siddh ji, revered in connection with the lineage and discipleship of Guru Gorakhnath ji, arrived at this holy place and performed intense spiritual penance and sadhana.
                </>
              )}
            </p>

            <p>
              {lang === 'hi' ? (
                <>
                  <strong>स्थानीय परंपरा में बताया जाता है कि</strong> बाबा सिद्ध जी ने अपने जीवन का महत्वपूर्ण समय इसी स्थान पर बिताया और शरीर त्यागने के बाद उनकी समाधि इसी पवित्र भूमि पर बनाई गई। आज उसी समाधि स्थल पर श्री बाबा सिद्ध मंदिर श्रद्धालुओं की आस्था का प्रमुख केंद्र है।
                </>
              ) : (
                <>
                  <strong>As local belief recounts</strong>, Baba Siddh ji spent a significant and transformative period of his mortal life here. Following his mahasamadhi, his sacred shrine was enshrined on this sanctified ground. Today, at this very samadhi sthal, Shri Baba Siddh Mandir stands as a vibrant beacon of faith for devotees.
                </>
              )}
            </p>

            <p>
              {lang === 'hi' ? (
                <>
                  देश के विभिन्न क्षेत्रों से श्रद्धालु यहां <strong>दर्शन, पूजा, मनौती और आध्यात्मिक शांति</strong> के लिए आते हैं।
                </>
              ) : (
                <>
                  Pilgrims and devotees from various regions travel here seeking <strong>sacred darshan, devotional prayers, fulfillment of vows (manokamna), and profound spiritual peace</strong>.
                </>
              )}
            </p>
          </div>

          {/* Factual Authenticity Notice Pill */}
          <div className="mt-8 pt-6 border-t border-amber-100 flex items-start gap-3 bg-amber-50/70 p-4 rounded-xl border border-amber-200/50 text-xs sm:text-sm text-amber-900">
            <ShieldCheck className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
            <p>
              <strong>{lang === 'hi' ? 'प्रमाणिक प्रस्तुति:' : 'Authentic Presentation:'} </strong>
              {lang === 'hi'
                ? 'यह विवरण क्षेत्रीय एवं स्थानीय धार्मिक परंपरा व पीढ़ी-दर-पीढ़ी चली आ रही मान्यताओं पर आधारित है। मंदिर प्रशासन धार्मिक आस्था का पूरा सम्मान करते हुए इसे तटस्थ व पारदर्शी रूप से प्रस्तुत करता है।'
                : 'This narrative reflects oral heritage and local spiritual tradition passed down across generations. The temple administration presents these sacred traditions with transparency and deep respect.'}
            </p>
          </div>
        </div>

        {/* 4 Pillars of Devotion Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-3">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-stone-900 mb-1">
              {lang === 'hi' ? 'तपोभूमि एवं साधना' : 'Sacred Tapobhoomi'}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {lang === 'hi'
                ? 'गुरु गोरखनाथ परंपरा के सिद्ध संत की पावन तपस्या स्थली के रूप में पूजित।'
                : 'Venerated as the sanctified realm of penance in the lineage of Guru Gorakhnath.'}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-800 flex items-center justify-center mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-stone-900 mb-1">
              {lang === 'hi' ? 'पावन समाधि स्थल' : 'Revered Samadhi Shrine'}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {lang === 'hi'
                ? 'बाबा सिद्ध जी के शरीर त्याग उपरांत स्थापित समाधि, जहां भक्त नतमस्तक होते हैं।'
                : 'The sacred shrine established after Baba Siddh ji entered mahasamadhi.'}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 rounded-xl bg-yellow-100 text-yellow-800 flex items-center justify-center mb-3">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-stone-900 mb-1">
              {lang === 'hi' ? 'अखंड दर्शन व शांति' : 'Peace & Darshan'}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {lang === 'hi'
                ? 'शांत, प्राकृतिक एवं सात्विक वातावरण जो अंतर्मन को शांति प्रदान करता है।'
                : 'A serene, peaceful natural atmosphere inspiring inner contemplation and calm.'}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm hover:shadow-md transition">
            <div className="w-10 h-10 rounded-xl bg-red-100 text-red-800 flex items-center justify-center mb-3">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-stone-900 mb-1">
              {lang === 'hi' ? 'मनौती और भंडारा' : 'Vows & Community Seva'}
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              {lang === 'hi'
                ? 'ध्वजारोहण, मनोकामना पूर्ति एवं सामाजिक सद्भाव हेतु भंडारे की परंपरा।'
                : 'Offering sacred flags, community feasts, and prayers of gratitude.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
