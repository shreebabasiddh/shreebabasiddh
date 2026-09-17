import React, { useState } from 'react';
import { Video, Play, ExternalLink, ShieldCheck, Film } from 'lucide-react';
import { Language, VideoItem } from '../types';

interface VideoSectionProps {
  lang: Language;
  videos: VideoItem[];
}

export const VideoSection: React.FC<VideoSectionProps> = ({ lang, videos }) => {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const videoCategories = [
    { key: 'mandir', labelHi: 'मंदिर दर्शन', labelEn: 'Temple Darshan' },
    { key: 'sarovar', labelHi: 'सरोवर', labelEn: 'Sarovar' },
    { key: 'mela', labelHi: 'मेला', labelEn: 'Mela' },
    { key: 'sant_sammelan', labelHi: 'संत सम्मेलन', labelEn: 'Sant Sammelan' },
    { key: 'devotees', labelHi: 'श्रद्धालु अनुभव', labelEn: 'Devotee Experiences' },
  ];

  return (
    <section id="videos" className="py-20 bg-gradient-to-b from-[#FAF7F2] via-[#F5EFE6] to-[#FAF7F2] text-[#2C221E] relative border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100 border border-rose-300 text-rose-900 text-xs sm:text-sm font-semibold uppercase mb-3">
            <Video className="w-3.5 h-3.5 text-rose-700" />
            <span>{lang === 'hi' ? 'सजीव दर्शन एवं उत्सव वृत्तचित्र' : 'Live Darshan & Video Archives'}</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#422006] mb-4">
            🎥 {lang === 'hi' ? 'वीडियो दर्शन' : 'Video Darshan'}
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto rounded-full mb-6" />

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
            {lang === 'hi'
              ? 'मंदिर के आध्यात्मिक आयोजनों, सरोवर की पावन धारा, वार्षिक मेले की रौनक तथा पूज्य संतों के प्रवचनों का वीडियो दर्शन।'
              : 'Video darshan capturing temple rituals, the sacred sarovar, annual fair celebrations, and enlightening spiritual assemblies.'}
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {videos.map((vid) => (
            <div
              key={vid.id}
              onClick={() => setActiveVideo(vid)}
              className="group bg-white rounded-3xl border border-stone-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col cursor-pointer"
            >
              {/* Video Thumbnail Placeholder */}
              <div className="h-44 bg-stone-900 text-white relative flex flex-col items-center justify-center p-4 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="w-12 h-12 rounded-full bg-amber-500/90 group-hover:bg-amber-400 text-stone-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform relative z-10">
                  <Play className="w-5 h-5 fill-stone-950 ml-0.5" />
                </div>
                <span className="relative z-10 text-[10px] text-amber-200 mt-2 font-mono tracking-wider">
                  {lang === 'hi' ? 'वीडियो दर्शन स्लॉट' : 'Video Darshan Slot'}
                </span>
              </div>

              {/* Video Info */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full inline-block mb-1.5">
                    {videoCategories.find((c) => c.key === vid.category)?.[lang === 'hi' ? 'labelHi' : 'labelEn'] ||
                      vid.category}
                  </span>
                  <h4 className="font-heading font-bold text-stone-900 text-sm mb-1 group-hover:text-amber-800 transition-colors">
                    {lang === 'hi' ? vid.titleHi : vid.titleEn}
                  </h4>
                  <p className="text-xs text-stone-600 line-clamp-2">
                    {lang === 'hi' ? vid.descriptionHi : vid.descriptionEn}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-amber-800 font-semibold">
                  <span>{lang === 'hi' ? 'दर्शन देखें' : 'Watch video'}</span>
                  <span>▶</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Player Modal */}
        {activeVideo && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#1C140E] text-white rounded-3xl max-w-2xl w-full border border-amber-500/40 p-6 shadow-2xl relative">
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 text-stone-400 hover:text-white p-1 text-xl font-bold"
              >
                ✕
              </button>

              <div className="flex items-center gap-2 text-xs text-amber-400 uppercase font-semibold mb-2">
                <Film className="w-4 h-4" />
                <span>{lang === 'hi' ? activeVideo.titleHi : activeVideo.titleEn}</span>
              </div>

              <div className="aspect-video w-full bg-black rounded-2xl flex flex-col items-center justify-center border border-stone-800 my-4 text-center p-6">
                {activeVideo.videoId ? (
                  <iframe
                    className="w-full h-full rounded-2xl"
                    src={`https://www.youtube-nocookie.com/embed/${activeVideo.videoId}?autoplay=1`}
                    title="Temple Video Darshan"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="space-y-3">
                    <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto text-2xl font-bold">
                      🕉️
                    </div>
                    <p className="text-sm font-semibold text-amber-200">
                      {lang === 'hi'
                        ? 'आधिकारिक यूट्यूब वीडियो लिंक आरक्षित स्लॉट'
                        : 'Official YouTube Darshan Link Slot'}
                    </p>
                    <p className="text-xs text-stone-400 max-w-md">
                      {lang === 'hi'
                        ? 'समिति द्वारा आधिकारिक वीडियो लिंक जोड़े जाने पर यह वीडियो यहीं सीधे प्ले होगा।'
                        : 'Once the temple committee specifies official YouTube video IDs, videos will stream directly here.'}
                    </p>
                  </div>
                )}
              </div>

              <p className="text-xs text-stone-300">
                {lang === 'hi' ? activeVideo.descriptionHi : activeVideo.descriptionEn}
              </p>
            </div>
          </div>
        )}

        {/* Advisory */}
        <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 text-xs text-stone-600 flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-amber-700 flex-shrink-0" />
          <p>
            {lang === 'hi'
              ? 'समिति अथवा श्रद्धालु यूट्यूब पर उपलब्ध आधिकारिक धार्मिक दर्शन व संत प्रवचनों के लिंक प्रबंधन पोर्टल द्वारा आसानी से जोड़ सकते हैं।'
              : 'The temple management can easily embed official YouTube video darshan links directly via the admin portal.'}
          </p>
        </div>
      </div>
    </section>
  );
};
