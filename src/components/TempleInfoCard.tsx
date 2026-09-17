import React from 'react';
import { Info, Clock, MapPin, Train, Sparkles, Phone, Car, Bed, Utensils, Settings } from 'lucide-react';
import { Language, TempleInfoConfig } from '../types';

interface TempleInfoCardProps {
  lang: Language;
  info: TempleInfoConfig;
  onOpenAdmin: () => void;
}

export const TempleInfoCard: React.FC<TempleInfoCardProps> = ({ lang, info, onOpenAdmin }) => {
  const quickFacts = [
    {
      labelHi: 'मंदिर का नाम',
      labelEn: 'Temple Name',
      valHi: info.templeNameHi,
      valEn: info.templeNameEn,
      icon: 'sparkles',
    },
    {
      labelHi: 'स्थान',
      labelEn: 'Location',
      valHi: `${info.locationHi}, ${info.districtHi}, ${info.stateHi}`,
      valEn: `${info.locationEn}, ${info.districtEn}, ${info.stateEn}`,
      icon: 'pin',
    },
    {
      labelHi: 'निकटतम प्रमुख रेलवे स्टेशन',
      labelEn: 'Nearest Major Railway Station',
      valHi: info.nearestRailwayStationHi,
      valEn: info.nearestRailwayStationEn,
      icon: 'train',
    },
    {
      labelHi: 'दूरी',
      labelEn: 'Distance',
      valHi: info.distanceHi,
      valEn: info.distanceEn,
      icon: 'train',
    },
    {
      labelHi: 'रेलवे कनेक्टिविटी',
      labelEn: 'Railway Connectivity',
      valHi: info.railRouteHi,
      valEn: info.railRouteEn,
      icon: 'train',
    },
    {
      labelHi: 'मुख्य आकर्षण',
      labelEn: 'Main Attractions',
      valHi: info.mainAttractionsHi,
      valEn: info.mainAttractionsEn,
      icon: 'sparkles',
    },
  ];

  const editableAmenities = [
    {
      labelHi: 'दैनिक दर्शन समय',
      labelEn: 'Daily Opening Hours',
      valHi: info.dailyHoursHi,
      valEn: info.dailyHoursEn,
      icon: <Clock className="w-4 h-4 text-amber-700" />,
    },
    {
      labelHi: 'आरती एवं पूजा समय',
      labelEn: 'Aarti & Puja Timings',
      valHi: info.aartiTimingsHi,
      valEn: info.aartiTimingsEn,
      icon: <Clock className="w-4 h-4 text-amber-700" />,
    },
    {
      labelHi: 'मेला आयोजन समय',
      labelEn: 'Mela Schedule',
      valHi: info.melaTimingsHi,
      valEn: info.melaTimingsEn,
      icon: <Sparkles className="w-4 h-4 text-amber-700" />,
    },
    {
      labelHi: 'प्रबंधन समिति',
      labelEn: 'Management Committee',
      valHi: info.committeeNameHi,
      valEn: info.committeeNameEn,
      icon: <Info className="w-4 h-4 text-amber-700" />,
    },
    {
      labelHi: 'पार्किंग सुविधा',
      labelEn: 'Parking Information',
      valHi: info.parkingInfoHi,
      valEn: info.parkingInfoEn,
      icon: <Car className="w-4 h-4 text-amber-700" />,
    },
    {
      labelHi: 'विश्राम एवं धर्मशाला',
      labelEn: 'Accommodation & Stay',
      valHi: info.accommodationInfoHi,
      valEn: info.accommodationInfoEn,
      icon: <Bed className="w-4 h-4 text-amber-700" />,
    },
    {
      labelHi: 'प्रसाद एवं भंडारा विवरण',
      labelEn: 'Prasad & Bhandara Info',
      valHi: info.bhandaraInfoHi,
      valEn: info.bhandaraInfoEn,
      icon: <Utensils className="w-4 h-4 text-amber-700" />,
    },
    {
      labelHi: 'आधिकारिक संपर्क सूत्र',
      labelEn: 'Temple Contact Number',
      valHi: info.contactPhone,
      valEn: info.contactPhone,
      icon: <Phone className="w-4 h-4 text-amber-700" />,
    },
  ];

  return (
    <section id="temple-info" className="py-20 bg-[#FAF7F2] text-[#2C221E] relative border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs sm:text-sm font-semibold uppercase mb-3">
            <Info className="w-3.5 h-3.5 text-amber-700" />
            <span>{lang === 'hi' ? 'महत्वपूर्ण मंदिर विवरणिका' : 'Official Temple Factsheet'}</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#422006] mb-4">
            🏛️ {lang === 'hi' ? 'मंदिर सामान्य जानकारी' : 'Temple Information'}
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto rounded-full mb-6" />

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
            {lang === 'hi'
              ? 'श्रद्धालुओं की सुविधा हेतु श्री बाबा सिद्ध मंदिर की प्रामाणिक एवं पारदर्शी जानकारी।'
              : 'Essential, transparent, and authentic information for visiting pilgrims and devotees.'}
          </p>
        </div>

        {/* Fact Sheet Grid */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-amber-200 shadow-lg mb-10">
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-amber-100">
            <div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-stone-900">
                {lang === 'hi' ? 'मुख्य परिचय एवं अवस्थिति' : 'Core Identification & Connectivity'}
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                {lang === 'hi' ? 'जनपद सहारनपुर, उत्तर प्रदेश' : 'District Saharanpur, Uttar Pradesh'}
              </p>
            </div>
            <button
              onClick={onOpenAdmin}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-semibold transition cursor-pointer"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? 'संपादित करें' : 'Edit Info'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-8">
            {quickFacts.map((f, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 py-2 border-b border-stone-100">
                <span className="text-xs font-bold text-stone-500 uppercase tracking-wide min-w-[180px]">
                  {lang === 'hi' ? f.labelHi : f.labelEn}:
                </span>
                <span className="text-sm font-semibold text-stone-900">
                  {lang === 'hi' ? f.valHi : f.valEn}
                </span>
              </div>
            ))}
          </div>

          {/* Dynamic / Editable Facilities & Timings */}
          <div className="mt-8 pt-6 border-t-2 border-amber-100">
            <h4 className="font-heading text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-700" />
              <span>{lang === 'hi' ? 'दर्शन समय, व्यवस्थाएं एवं संपर्क' : 'Darshan Hours, Facilities & Contact'}</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {editableAmenities.map((item, i) => (
                <div key={i} className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80">
                  <div className="flex items-center gap-2 text-xs font-bold text-stone-700 mb-1">
                    {item.icon}
                    <span>{lang === 'hi' ? item.labelHi : item.labelEn}</span>
                  </div>
                  <div className="text-xs sm:text-sm text-stone-900 font-medium">
                    {lang === 'hi' ? item.valHi : item.valEn}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
