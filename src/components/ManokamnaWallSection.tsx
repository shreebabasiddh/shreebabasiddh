import React, { useState } from 'react';
import { Heart, Send, CheckCircle, Clock, ShieldCheck, Sparkles, MessageSquareHeart } from 'lucide-react';
import { Language, ManokamnaPrayer } from '../types';

interface ManokamnaWallProps {
  lang: Language;
  prayers: ManokamnaPrayer[];
  onSubmitPrayer: (name: string, villageCity: string, prayer: string) => void;
}

export const ManokamnaWallSection: React.FC<ManokamnaWallProps> = ({
  lang,
  prayers,
  onSubmitPrayer,
}) => {
  const [name, setName] = useState('');
  const [villageCity, setVillageCity] = useState('');
  const [prayer, setPrayer] = useState('');
  const [submittedStatus, setSubmittedStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !villageCity.trim() || !prayer.trim()) return;

    onSubmitPrayer(name.trim(), villageCity.trim(), prayer.trim());

    setName('');
    setVillageCity('');
    setPrayer('');
    setSubmittedStatus('success');

    setTimeout(() => {
      setSubmittedStatus(null);
    }, 6000);
  };

  const approvedPrayers = prayers.filter((p) => p.approved);

  return (
    <section id="manokamna" className="py-20 bg-[#FAF7F2] text-[#2C221E] relative border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs sm:text-sm font-semibold uppercase mb-3">
            <MessageSquareHeart className="w-3.5 h-3.5 text-amber-700" />
            <span>{lang === 'hi' ? 'श्रद्धा एवं पावन प्रार्थना पटल' : 'Devotional Prayer Wall'}</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#422006] mb-4">
            🙏 {lang === 'hi' ? 'बाबा सिद्ध जी के चरणों में आपकी मनोकामना' : 'Your Prayers at Baba Siddh Ji’s Lotus Feet'}
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto rounded-full mb-6" />

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
            {lang === 'hi'
              ? 'सच्चे मन और निष्कपट भाव से बाबा सिद्ध जी के दरबार में अपनी प्रार्थना व मंगल कामना समर्पित करें।'
              : 'Submit your heartfelt prayer, blessings, and sacred wishes with sincerity at the sanctum of Baba Siddh Ji.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Submission Form */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-amber-200 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>{lang === 'hi' ? 'मनोकामना संदेश भेजें' : 'Submit Devotional Prayer'}</span>
              </div>

              <h3 className="font-heading font-bold text-xl text-stone-900 mb-4">
                {lang === 'hi' ? 'पावन चरणों में वंदन' : 'Offer Your Prayer'}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {lang === 'hi' ? 'आपका शुभ नाम *' : 'Your Full Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={lang === 'hi' ? 'उदा. राकेश कुमार' : 'e.g. Rakesh Kumar'}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 bg-stone-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {lang === 'hi' ? 'गांव / नगर एवं जनपद *' : 'Village / City & District *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={villageCity}
                    onChange={(e) => setVillageCity(e.target.value)}
                    placeholder={lang === 'hi' ? 'उदा. सोना अर्जुनपुर / सहारनपुर' : 'e.g. Sona Arjunpur / Saharanpur'}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 bg-stone-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {lang === 'hi' ? 'आपकी मनोकामना / श्रद्धा संदेश *' : 'Your Prayer Message *'}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={prayer}
                    onChange={(e) => setPrayer(e.target.value)}
                    placeholder={
                      lang === 'hi'
                        ? 'बाबा सिद्ध जी के चरणों में अपनी प्रार्थना लिखें...'
                        : 'Write your heartfelt prayer to Baba Siddh Ji...'
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 bg-stone-50"
                  />
                </div>

                {/* Privacy & Moderation Notice */}
                <div className="bg-amber-50 rounded-xl p-3 border border-amber-200/80 text-[11px] text-amber-900 flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                  <p>
                    {lang === 'hi'
                      ? 'सुरक्षा व मर्यादा: कोई भी फोन नंबर अथवा व्यक्तिगत संपर्क विवरण प्रकाशित नहीं किया जाता। संदेश समिति के अनुमोदन (Moderation) उपरांत ही वॉल पर प्रदर्शित होता है।'
                      : 'Privacy: Phone numbers or personal contacts are never collected or shown. All submissions undergo committee moderation before being displayed.'}
                  </p>
                </div>

                <button
                  type="submit"
                  id="submit-manokamna-btn"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-500 text-stone-950 font-bold text-sm shadow-md transition cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{lang === 'hi' ? 'मनोकामना समर्पित करें' : 'Submit Prayer'}</span>
                </button>
              </form>

              {submittedStatus === 'success' && (
                <div className="mt-4 p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs flex items-center gap-2 animate-fade-in">
                  <CheckCircle className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                  <span>
                    {lang === 'hi'
                      ? 'आपकी मनोकामना सफलतापूर्वक दर्ज कर ली गई है। समिति के अनुमोदन के बाद इसे वॉल पर जोड़ दिया जाएगा।'
                      : 'Your prayer has been recorded. It will appear on the wall following moderation.'}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Devotees' Approved Prayers Display */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading font-bold text-lg text-stone-900 flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose-600 fill-rose-600" />
                <span>{lang === 'hi' ? 'भक्तों की पावन प्रार्थनाएं' : 'Devotees’ Prayers'}</span>
              </h3>
              <span className="text-xs text-stone-500 font-medium">
                {lang === 'hi' ? `${approvedPrayers.length} मनोकामनाएं प्रदर्शित` : `${approvedPrayers.length} Prayers`}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto pr-1">
              {approvedPrayers.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-2xl p-5 border border-stone-200/90 shadow-sm hover:border-amber-300 flex flex-col justify-between transition"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-amber-800 font-bold mb-2">
                      <span>{p.name}</span>
                      <span className="text-stone-400 font-normal text-[11px]">{p.villageCity}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic mb-4">
                      "{p.prayer}"
                    </p>
                  </div>

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[10px] text-stone-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {p.timestamp}
                    </span>
                    <span className="text-amber-700 font-semibold">जय बाबा सिद्ध जी 🙏</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 p-3 rounded-xl bg-amber-50/60 border border-amber-200 text-xs text-amber-900 text-center">
              {lang === 'hi'
                ? '“श्रद्धावांल्लभते ज्ञानं तत्परः संयतेन्द्रियः — बाबा सिद्ध जी के दरबार में श्रद्धा ही सबसे बड़ा अर्पण है।”'
                : '“Sincere faith and pure surrender are the highest offerings at the lotus feet of Baba Siddh Ji.”'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
