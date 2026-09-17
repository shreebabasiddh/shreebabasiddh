import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, ShieldCheck, ExternalLink, HelpCircle } from 'lucide-react';
import { Language, TempleInfoConfig } from '../types';

interface ContactSectionProps {
  lang: Language;
  templeInfo: TempleInfoConfig;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang, templeInfo }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', query: '' });
  const [sentStatus, setSentStatus] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.query) return;
    setSentStatus(true);
    setFormData({ name: '', phone: '', query: '' });
    setTimeout(() => setSentStatus(false), 6000);
  };

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Sona Arjunpur, Saharanpur, Uttar Pradesh'
  )}`;

  return (
    <section id="contact" className="py-20 bg-[#FAF7F2] text-[#2C221E] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs sm:text-sm font-semibold uppercase mb-3">
            <Phone className="w-3.5 h-3.5 text-amber-700" />
            <span>{lang === 'hi' ? 'मार्गदर्शन एवं सहायता' : 'Information & Support'}</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#422006] mb-4">
            📞 {lang === 'hi' ? 'संपर्क करें' : 'Contact Us'}
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto rounded-full mb-6" />

          {/* Mandatory Committee Disclaimer Highlight */}
          <div className="bg-amber-100/70 border border-amber-300 rounded-2xl p-4 text-xs sm:text-sm font-semibold text-amber-950 inline-block">
            {lang === 'hi'
              ? '“मंदिर संबंधी आधिकारिक जानकारी के लिए मंदिर प्रबंधन समिति से संपर्क करें।”'
              : '“For official information concerning the temple, kindly reach out directly to the Temple Management Committee.”'}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Official Contact Cards */}
          <div className="space-y-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200 shadow-md">
              <h3 className="font-heading text-xl font-bold text-stone-900 mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-700" />
                <span>{lang === 'hi' ? 'मंदिर का पावन पता' : 'Sacred Address'}</span>
              </h3>

              <div className="space-y-4 text-sm text-stone-700">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-amber-50 text-amber-800 flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-stone-900">
                      {lang === 'hi' ? templeInfo.templeNameHi : templeInfo.templeNameEn}
                    </div>
                    <div>
                      {lang === 'hi'
                        ? 'ग्राम: सोना अर्जुनपुर, डाकघर: सोना अर्जुनपुर, जनपद: सहारनपुर, पिन कोड: 247001 (उ.प्र.)'
                        : 'Village: Sona Arjunpur, Post: Sona Arjunpur, District: Saharanpur, PIN: 247001, Uttar Pradesh, India'}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-amber-50 text-amber-800 flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-stone-900">{lang === 'hi' ? 'फोन / संपर्क' : 'Phone'}</div>
                    <div className="text-xs text-stone-600">{templeInfo.contactPhone}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-amber-50 text-amber-800 flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-stone-900">{lang === 'hi' ? 'ईमेल' : 'Email'}</div>
                    <div className="text-xs text-stone-600">{templeInfo.contactEmail}</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-stone-100">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-800 hover:bg-amber-700 text-white text-xs font-semibold shadow-sm transition"
                >
                  <MapPin className="w-4 h-4" />
                  <span>{lang === 'hi' ? 'Google Maps पर देखें' : 'View on Google Maps'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Note Box */}
            <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200 text-xs text-stone-600 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
              <p>
                {lang === 'hi'
                  ? 'पवित्रता एवं अनुशासन: मंदिर परिसर में सात्विक आचरण, स्वच्छता एवं शांति बनाए रखना प्रत्येक श्रद्धालु का कर्तव्य है।'
                  : 'Devotee code: Preserving spiritual sanctity, hygiene, and peaceful conduct is the noble duty of every pilgrim.'}
              </p>
            </div>
          </div>

          {/* Quick Inquiry / Message Form */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">
                <HelpCircle className="w-4 h-4 text-amber-700" />
                <span>{lang === 'hi' ? 'दर्शन एवं सेवा संबंधी जिज्ञासा' : 'Darshan & Seva Inquiries'}</span>
              </div>

              <h3 className="font-heading text-xl font-bold text-stone-900 mb-4">
                {lang === 'hi' ? 'समिति को संदेश प्रेषित करें' : 'Send a Message to Committee'}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {lang === 'hi' ? 'नाम *' : 'Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={lang === 'hi' ? 'आपका नाम' : 'Your Name'}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 bg-stone-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {lang === 'hi' ? 'मोबाइल नंबर (ऐच्छिक)' : 'Mobile Number (Optional)'}
                  </label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={lang === 'hi' ? 'संपर्क नंबर' : 'Phone Number'}
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 bg-stone-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {lang === 'hi' ? 'आपका प्रश्न अथवा संदेश *' : 'Your Query / Inquiry *'}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.query}
                    onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                    placeholder={
                      lang === 'hi'
                        ? 'भंडारा आयोजन, दर्शन समय या अन्य जानकारी हेतु संदेश लिखें...'
                        : 'Write message regarding bhandara seva, darshan timings or pilgrimage inquiry...'
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 bg-stone-50"
                  />
                </div>

                <button
                  type="submit"
                  id="submit-contact-inquiry-btn"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-amber-800 hover:bg-amber-700 text-white font-bold text-sm shadow-md transition cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{lang === 'hi' ? 'संदेश भेजें' : 'Send Inquiry'}</span>
                </button>
              </form>

              {sentStatus && (
                <div className="mt-4 p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                  <span>
                    {lang === 'hi'
                      ? 'आपका संदेश सफलतापूर्वक दर्ज कर लिया गया है।'
                      : 'Your inquiry has been submitted successfully.'}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
