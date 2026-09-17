import React from 'react';
import { Train, MapPin, Compass, Car, Bus, Info, ExternalLink, ShieldCheck } from 'lucide-react';
import { Language, TempleInfoConfig } from '../types';

interface HowToReachProps {
  lang: Language;
  templeInfo: TempleInfoConfig;
}

export const HowToReachSection: React.FC<HowToReachProps> = ({ lang, templeInfo }) => {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Sona Arjunpur, Saharanpur, Uttar Pradesh'
  )}`;

  return (
    <section id="how-to-reach" className="py-20 bg-[#FAF7F2] text-[#2C221E] relative border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs sm:text-sm font-semibold uppercase mb-3">
            <Compass className="w-3.5 h-3.5 text-amber-700" />
            <span>{lang === 'hi' ? 'यात्रा मार्ग एवं परिवहन निर्देश' : 'Travel & Transit Guide'}</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#422006] mb-4">
            🚆 {lang === 'hi' ? 'सोना अर्जुनपुर कैसे पहुंचें?' : 'How to Reach Sona Arjunpur?'}
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto rounded-full mb-6" />

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
            {lang === 'hi'
              ? 'सोना अर्जुनपुर जनपद सहारनपुर (उत्तर प्रदेश) में स्थित है। श्रद्धालु रेल मार्ग, निजी वाहन अथवा स्थानीय परिवहन के माध्यम से सुगमता से यहां पहुंच सकते हैं।'
              : 'Sona Arjunpur is situated in Saharanpur district, Uttar Pradesh. Pilgrims can reach conveniently via railway transit, private vehicles, or local connectivity.'}
          </p>
        </div>

        {/* Primary Transit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Rail Route & Station */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200 shadow-md flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold mb-4 shadow-inner">
                <Train className="w-6 h-6" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1 block">
                {lang === 'hi' ? 'प्राथमिक रेल मार्ग' : 'Primary Rail Route'}
              </span>

              <h3 className="font-heading text-xl sm:text-2xl font-bold text-stone-900 mb-3">
                {lang === 'hi' ? 'सहारनपुर–शामली–दिल्ली रेल मार्ग' : 'Saharanpur–Shamli–Delhi Rail Route'}
              </h3>

              <div className="bg-amber-50/70 p-4 rounded-2xl border border-amber-200/80 mb-5 text-sm text-stone-800 leading-relaxed">
                <p className="font-semibold text-amber-950 mb-1">
                  {lang === 'hi' ? 'सोना अर्जुनपुर रेलवे स्टेशन' : 'Sona Arjunpur Railway Station'}
                </p>
                <p>
                  {lang === 'hi'
                    ? '“सोना अर्जुनपुर सहारनपुर–शामली–दिल्ली रेल मार्ग पर स्थित है और यहां अपना रेलवे स्टेशन है।”'
                    : '“Sona Arjunpur is located on the Saharanpur–Shamli–Delhi railway line and has its own local railway station.”'}
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-stone-600">
                <div className="flex items-start gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-amber-600 mt-1.5 flex-shrink-0" />
                  <div>
                    <strong>{lang === 'hi' ? 'निकटतम प्रमुख रेलवे स्टेशन:' : 'Nearest Major Railway Station:'}</strong>{' '}
                    <span>{lang === 'hi' ? templeInfo.nearestRailwayStationHi : templeInfo.nearestRailwayStationEn}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-amber-600 mt-1.5 flex-shrink-0" />
                  <div>
                    <strong>{lang === 'hi' ? 'सहारनपुर से दूरी:' : 'Distance from Saharanpur:'}</strong>{' '}
                    <span>{lang === 'hi' ? templeInfo.distanceHi : templeInfo.distanceEn}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100 text-xs text-stone-500 italic">
              {lang === 'hi'
                ? 'यात्री कृपया स्थानीय पैसेंजर ट्रेनों की समय सारिणी स्टेशन पूछताछ अथवा भारतीय रेलवे के आधिकारिक पोर्टल से जांचें।'
                : 'Devotees are advised to verify passenger train schedules directly via official Indian Railways inquiries.'}
            </div>
          </div>

          {/* Card 2: Road & Local Transport Route */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200 shadow-md flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-800 flex items-center justify-center font-bold mb-4 shadow-inner">
                <Car className="w-6 h-6" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-orange-700 mb-1 block">
                {lang === 'hi' ? 'सड़क मार्ग एवं स्थानीय परिवहन' : 'Road Route & Local Transit'}
              </span>

              <h3 className="font-heading text-xl sm:text-2xl font-bold text-stone-900 mb-3">
                {lang === 'hi' ? 'सहारनपुर एवं शामली से सड़क संपर्क' : 'Road Access from Saharanpur & Shamli'}
              </h3>

              <p className="text-stone-600 text-sm leading-relaxed mb-4">
                {lang === 'hi'
                  ? 'सहारनपुर जिला मुख्यालय अथवा निकटवर्ती कस्बों से निजी वाहन, टैक्सी अथवा स्थानीय तिपहिया/ऑटो रिक्शा द्वारा संपर्क मार्ग से सोना अर्जुनपुर पहुंचा जा सकता है।'
                  : 'Visitors traveling by car, two-wheelers, taxi or regional auto-rickshaws can easily connect via the district road network to Sona Arjunpur.'}
              </p>

              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs flex items-center gap-3">
                  <Car className="w-4 h-4 text-stone-700 flex-shrink-0" />
                  <div>
                    <strong>{lang === 'hi' ? 'पार्किंग सुविधा:' : 'Parking:'} </strong>
                    <span>{lang === 'hi' ? templeInfo.parkingInfoHi : templeInfo.parkingInfoEn}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs flex items-center gap-3">
                  <Bus className="w-4 h-4 text-stone-700 flex-shrink-0" />
                  <div>
                    <strong>{lang === 'hi' ? 'स्थानीय सवारी:' : 'Local Transport:'} </strong>
                    <span>
                      {lang === 'hi'
                        ? 'सहारनपुर अथवा शामली बस स्टैंड/स्टेशन से स्थानीय वाहन उपलब्ध रहते हैं।'
                        : 'Local feeder transport is customarily available from Saharanpur/Shamli transit hubs.'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Action Button */}
            <div className="mt-6 pt-4 border-t border-stone-100">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="google-maps-location-button"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold text-xs sm:text-sm shadow-md transition cursor-pointer"
              >
                <MapPin className="w-4 h-4" />
                <span>{lang === 'hi' ? '📍 Google Maps पर स्थान देखें' : '📍 View Location on Google Maps'}</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
              <p className="text-[11px] text-stone-500 text-center mt-2">
                {lang === 'hi'
                  ? 'सोना अर्जुनपुर, सहारनपुर (उ.प्र.) का प्रमाणित मानचित्र'
                  : 'Verified map location query for Sona Arjunpur, Saharanpur (U.P.)'}
              </p>
            </div>
          </div>
        </div>

        {/* Responsible Travel Advisory Box */}
        <div className="bg-stone-50 border border-stone-200/90 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 text-xs text-stone-700">
          <ShieldCheck className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
          <p>
            <strong>{lang === 'hi' ? 'तथ्यात्मक सूचना:' : 'Factual Travel Note:'} </strong>
            {lang === 'hi'
              ? 'मंदिर प्रबंधन किसी भी काल्पनिक ट्रेन नंबर, निश्चित बस समय सारिणी या किराए का दावा नहीं करता है। यात्रा प्रारंभ करने से पहले अपनी सुविधा अनुसार नवीनतम परिवहन साधनों की पुष्टि स्वयं कर लें।'
              : 'The temple does not fabricate unverified train numbers, bus timetables or fixed fares. Pilgrims are advised to check real-time state transport and Indian Railways services before commencing their journey.'}
          </p>
        </div>
      </div>
    </section>
  );
};
