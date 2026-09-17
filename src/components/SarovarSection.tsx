import React from 'react';
import { Waves, Fish, ShieldAlert, Heart, Droplets, Image as ImageIcon } from 'lucide-react';
import { Language } from '../types';

interface SarovarSectionProps {
  lang: Language;
  onOpenLightbox: (title: string, desc: string, category: string) => void;
}

export const SarovarSection: React.FC<SarovarSectionProps> = ({ lang, onOpenLightbox }) => {
  const sarovarItems = [
    {
      id: 'sarovar-view',
      titleHi: 'पवित्र बाबा सिद्ध सरोवर',
      titleEn: 'Sacred Baba Siddh Sarovar',
      category: 'सरोवर',
      descHi: 'मंदिर परिसर के चारों ओर फैला हुआ विशाल, शांत एवं निर्मल जलकुंड।',
      descEn: 'The expansive, serene sacred water reservoir surrounding the temple.',
      badgeHi: 'जलकुंड',
      badgeEn: 'Reservoir',
      svgIcon: 'waves',
    },
    {
      id: 'bathing-ghat',
      titleHi: 'श्रद्धालुओं का स्नान घाट',
      titleEn: 'Pilgrim Bathing Ghat Area',
      category: 'स्नान क्षेत्र',
      descHi: 'सरोवर का वह पृथक भाग जो श्रद्धालुओं के पवित्र स्नान व आचमन हेतु नियत है।',
      descEn: 'The designated separate section of the sarovar reserved for holy ablution.',
      badgeHi: 'स्नान क्षेत्र',
      badgeEn: 'Bathing Ghat',
      svgIcon: 'droplets',
    },
    {
      id: 'fish-sanctuary',
      titleHi: 'मछलियों का संरक्षित आवास',
      titleEn: 'Protected Fish Sanctuary',
      category: 'जलीय जीव',
      descHi: 'सरोवर के दूसरे हिस्से में मछलियां स्वच्छंद विचरण करती हैं, जहां श्रद्धालु आहार देते हैं।',
      descEn: 'Fishes swim undisturbed in the protected zone where pilgrims feed them with love.',
      badgeHi: 'मत्स्य संरक्षण',
      badgeEn: 'Fish Sanctuary',
      svgIcon: 'fish',
    },
    {
      id: 'turtle-habitat',
      titleHi: 'कछुओं का प्राकृतिक वास',
      titleEn: 'Sacred Turtle Habitat',
      category: 'कछुए व जलजीव',
      descHi: 'सरोवर में कछुओं का सहज एवं संरक्षित बसेरा, जो आस्था और जैव विविधता का प्रतीक है।',
      descEn: 'Natural and protected shelter for turtles, symbolizing conservation and harmony.',
      badgeHi: 'कछुआ संरक्षण',
      badgeEn: 'Turtles',
      svgIcon: 'turtle',
    },
    {
      id: 'temple-beside-sarovar',
      titleHi: 'सरोवर तट पर मंदिर का प्रतिबिम्ब',
      titleEn: 'Temple Beside the Sarovar',
      category: 'मंदिर व सरोवर',
      descHi: 'सरोवर के जल में मंदिर शिखर का मनोहारी आध्यात्मिक दृश्य।',
      descEn: 'The captivating reflection of the holy spire on the calm waters of the pond.',
      badgeHi: 'तपोस्थली दृश्य',
      badgeEn: 'Temple Vista',
      svgIcon: 'temple',
    },
    {
      id: 'devotees-feeding',
      titleHi: 'जीव दया एवं श्रद्धालु',
      titleEn: 'Devotees & Feeding Tradition',
      category: 'श्रद्धालु परंपरा',
      descHi: 'भक्तजन आटे की गोलियां एवं आहार जलीय जीवों को अर्पित कर पुण्य लाभ लेते हैं।',
      descEn: 'Pilgrims offering food to aquatic beings as an act of compassion and faith.',
      badgeHi: 'जीव सेवा',
      badgeEn: 'Compassion',
      svgIcon: 'heart',
    },
  ];

  return (
    <section id="sarovar" className="py-20 bg-gradient-to-b from-[#F3EFE6] via-[#FAF7F2] to-[#F3EFE6] text-[#2C221E] relative border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-900/10 border border-cyan-800/30 text-cyan-900 text-xs sm:text-sm font-semibold uppercase mb-3">
            <Waves className="w-3.5 h-3.5 text-cyan-700" />
            <span>{lang === 'hi' ? 'प्राकृतिक एवं आध्यात्मिक सरोवर' : 'Sacred Sarovar & Aquatic Ecology'}</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#164E63] mb-4">
            🌊 {lang === 'hi' ? 'बाबा सिद्ध सरोवर' : 'Baba Siddh Sarovar'}
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-600 to-transparent mx-auto rounded-full mb-6" />

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
            {lang === 'hi' ? (
              <>
                मंदिर की सबसे विशेष पहचान इसके चारों ओर स्थित <strong>पवित्र सरोवर</strong> है। सरोवर के दो अलग-अलग हिस्से हैं—एक हिस्सा <strong>श्रद्धालुओं के स्नान</strong> के लिए है, जबकि दूसरे हिस्से में <strong>मछलियां, कछुए और अन्य जलीय जीव</strong> रहते हैं। श्रद्धालु इन जलीय जीवों को आहार देते हैं और सरोवर के प्राकृतिक वातावरण का अनुभव करते हैं।
              </>
            ) : (
              <>
                The most remarkable feature of the temple is the <strong>sacred sarovar</strong> surrounding it. The sarovar has two distinct sections: one part is dedicated to <strong>holy bathing for devotees</strong>, while the other portion is home to <strong>fishes, turtles, and aquatic life</strong>. Pilgrims joyfully feed these creatures and immerse themselves in the tranquil natural ambiance.
              </>
            )}
          </p>
        </div>

        {/* Two Sections Highlight Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Section 1: Bathing Ghat */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-cyan-200 shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold">
                <Droplets className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-cyan-700 uppercase tracking-wider">
                  {lang === 'hi' ? 'प्रथम भाग' : 'Part 1'}
                </span>
                <h3 className="text-lg font-bold text-stone-900">
                  {lang === 'hi' ? 'श्रद्धालु स्नान क्षेत्र' : 'Devotee Ablution Ghat'}
                </h3>
              </div>
            </div>
            <p className="text-stone-600 text-sm leading-relaxed mb-4">
              {lang === 'hi'
                ? 'श्रद्धालु दर्शन से पूर्व आस्था भाव से यहां स्नान करते हैं। यह क्षेत्र विशेष रूप से स्वच्छता और सुरक्षा की दृष्टि से अलग रखा गया है।'
                : 'Devotees take a sacred dip here before offering prayers. This section is cordoned off for cleanliness, sanctity and pilgrim safety.'}
            </p>
            <div className="text-xs text-stone-500 bg-stone-50 p-2.5 rounded-lg border border-stone-200">
              💧 {lang === 'hi' ? 'स्वच्छता व मर्यादा का ध्यान रखें' : 'Please preserve hygiene and sanctity'}
            </div>
          </div>

          {/* Section 2: Aquatic Sanctuary */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-emerald-200 shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <Fish className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                  {lang === 'hi' ? 'द्वितीय भाग' : 'Part 2'}
                </span>
                <h3 className="text-lg font-bold text-stone-900">
                  {lang === 'hi' ? 'मछलियां, कछुए व जलीय जीव' : 'Fishes, Turtles & Aquatic Life'}
                </h3>
              </div>
            </div>
            <p className="text-stone-600 text-sm leading-relaxed mb-4">
              {lang === 'hi'
                ? 'यह क्षेत्र जलजीवों के प्राकृतिक व सुरक्षित जीवन हेतु संरक्षित है। यहां किसी भी प्रकार का स्नान वर्जित है; श्रद्धालु केवल किनारे से आहार देते हैं।'
                : 'Protected exclusively for aquatic life. Bathing is strictly prohibited in this zone; pilgrims gently feed them from the steps.'}
            </p>
            <div className="text-xs text-emerald-800 bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
              🌿 {lang === 'hi' ? 'जीव संरक्षण एवं सात्विक आहार की परंपरा' : 'Tradition of non-violence and compassionate feeding'}
            </div>
          </div>
        </div>

        {/* Clearly Marked Image Placeholder Gallery */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base sm:text-lg font-bold text-stone-800 flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-cyan-700" />
              <span>{lang === 'hi' ? 'सरोवर दर्शन छायाचित्र वीथिका' : 'Sarovar Visual Gallery'}</span>
            </h3>
            <span className="text-xs text-stone-500">
              {lang === 'hi' ? '(सत्यापित फोटो आरक्षित)' : '(Verified photo slots)'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sarovarItems.map((item) => (
              <div
                key={item.id}
                onClick={() =>
                  onOpenLightbox(
                    lang === 'hi' ? item.titleHi : item.titleEn,
                    lang === 'hi' ? item.descHi : item.descEn,
                    item.category
                  )
                }
                className="group bg-white rounded-2xl border border-stone-300/80 overflow-hidden shadow-sm hover:shadow-md hover:border-cyan-500/50 transition-all cursor-pointer flex flex-col"
              >
                {/* Clearly Marked Visual Placeholder Box */}
                <div className="h-44 bg-gradient-to-br from-stone-100 via-cyan-50 to-stone-200 flex flex-col items-center justify-center p-4 text-center border-b border-stone-200 relative group-hover:bg-cyan-50/70 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white/90 shadow-sm border border-cyan-200 flex items-center justify-center text-cyan-700 mb-2 group-hover:scale-110 transition-transform">
                    {item.svgIcon === 'fish' && <Fish className="w-6 h-6 text-cyan-600" />}
                    {item.svgIcon === 'waves' && <Waves className="w-6 h-6 text-cyan-600" />}
                    {item.svgIcon === 'droplets' && <Droplets className="w-6 h-6 text-cyan-600" />}
                    {item.svgIcon === 'heart' && <Heart className="w-6 h-6 text-rose-600" />}
                    {item.svgIcon !== 'fish' && item.svgIcon !== 'waves' && item.svgIcon !== 'droplets' && item.svgIcon !== 'heart' && (
                      <Waves className="w-6 h-6 text-cyan-600" />
                    )}
                  </div>
                  <span className="inline-block text-[11px] font-semibold text-cyan-900 bg-cyan-100/90 px-2.5 py-0.5 rounded-full border border-cyan-300/60 mb-1">
                    {lang === 'hi' ? item.badgeHi : item.badgeEn}
                  </span>
                  <span className="text-[11px] text-stone-500 italic">
                    {lang === 'hi' ? '[सत्यापित मंदिर छायाचित्र हेतु आरक्षित]' : '[Verified Photo Slot]'}
                  </span>
                </div>

                {/* Text description */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm group-hover:text-cyan-800 transition-colors mb-1">
                      {lang === 'hi' ? item.titleHi : item.titleEn}
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {lang === 'hi' ? item.descHi : item.descEn}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-cyan-700 font-medium">
                    <span>{lang === 'hi' ? 'विस्तार से देखें' : 'View details'}</span>
                    <span>🔍</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ecological & Religious Harmony Note */}
        <div className="bg-cyan-900/5 border border-cyan-800/20 rounded-xl p-4 text-xs text-stone-700 flex items-center gap-3">
          <ShieldAlert className="w-5 h-5 text-cyan-800 flex-shrink-0" />
          <p>
            {lang === 'hi'
              ? 'आग्रह: सरोवर में साबुन, डिटर्जेंट अथवा प्लास्टिक कचरा न डालें। मछलियों व कछुओं को केवल समिति द्वारा मान्य शुद्ध आटा या दाना ही अर्पित करें।'
              : 'Advisory: Please refrain from using soaps, detergents or discarding plastics in the sarovar. Only offer clean flour or feed approved by the temple committee.'}
          </p>
        </div>
      </div>
    </section>
  );
};
