import React, { useState } from 'react';
import { X, Save, RefreshCw, Plus, Check, Trash2, ShieldCheck, Code, Bell, Clock, Calendar, Phone, Image as ImageIcon } from 'lucide-react';
import { GalleryCategory, GalleryItem, Language, ManokamnaPrayer, TempleInfoConfig } from '../types';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  templeInfo: TempleInfoConfig;
  onSaveInfo: (updated: TempleInfoConfig) => void;
  galleryItems: GalleryItem[];
  onAddPhoto: (item: GalleryItem) => void;
  onDeletePhoto: (id: string) => void;
  prayers: ManokamnaPrayer[];
  onApprovePrayer: (id: string) => void;
  onDeletePrayer: (id: string) => void;
  onResetDefaults: () => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({
  isOpen,
  onClose,
  lang,
  templeInfo,
  onSaveInfo,
  galleryItems,
  onAddPhoto,
  onDeletePhoto,
  prayers,
  onApprovePrayer,
  onDeletePrayer,
  onResetDefaults,
}) => {
  const [activeTab, setActiveTab] = useState<'info' | 'photos' | 'moderation' | 'guide'>('info');
  const [formData, setFormData] = useState<TempleInfoConfig>({ ...templeInfo });
  const [saveAlert, setSaveAlert] = useState(false);

  // New photo form state
  const [newPhotoTitle, setNewPhotoTitle] = useState('');
  const [newPhotoDesc, setNewPhotoDesc] = useState('');
  const [newPhotoCat, setNewPhotoCat] = useState<GalleryCategory>('mandir');
  const [newPhotoUrl, setNewPhotoUrl] = useState('');

  if (!isOpen) return null;

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveInfo(formData);
    setSaveAlert(true);
    setTimeout(() => setSaveAlert(false), 3000);
  };

  const handleAddPhotoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPhotoTitle.trim()) return;

    const newItem: GalleryItem = {
      id: `photo-${Date.now()}`,
      category: newPhotoCat,
      titleHi: newPhotoTitle,
      titleEn: newPhotoTitle,
      descriptionHi: newPhotoDesc || 'मंदिर प्रबंधन समिति द्वारा सत्यापित छायाचित्र।',
      descriptionEn: newPhotoDesc || 'Verified photograph uploaded by temple committee.',
      imageUrl: newPhotoUrl.trim() || undefined,
      placeholderLabelHi: newPhotoTitle,
      placeholderLabelEn: newPhotoTitle,
      isCustomUploaded: true,
    };

    onAddPhoto(newItem);
    setNewPhotoTitle('');
    setNewPhotoDesc('');
    setNewPhotoUrl('');
  };

  const pendingPrayers = prayers.filter((p) => !p.approved);

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#1C140E] text-[#FDFBF7] rounded-3xl max-w-4xl w-full border border-amber-600/40 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-[#2C180E] via-[#3D2012] to-[#2C180E] border-b border-amber-700/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold border border-amber-500/30">
              ⚙️
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-amber-100">
                {lang === 'hi' ? 'मंदिर प्रबंधन एवं अद्यतन पोर्टल' : 'Temple Administration Portal'}
              </h3>
              <p className="text-xs text-amber-300/80">
                {lang === 'hi'
                  ? 'श्री बाबा सिद्ध मंदिर, सोना अर्जुनपुर'
                  : 'Shri Baba Siddh Mandir, Sona Arjunpur'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-stone-900/60 hover:bg-stone-900 text-stone-300 hover:text-white flex items-center justify-center transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-stone-800 bg-[#160E0A] px-6 gap-2 overflow-x-auto text-xs sm:text-sm font-semibold scrollbar-none">
          <button
            onClick={() => setActiveTab('info')}
            className={`py-3 px-4 border-b-2 transition whitespace-nowrap cursor-pointer ${
              activeTab === 'info'
                ? 'border-amber-400 text-amber-300'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            📋 {lang === 'hi' ? 'सामान्य सूचना व समय' : 'Info & Timings'}
          </button>
          <button
            onClick={() => setActiveTab('photos')}
            className={`py-3 px-4 border-b-2 transition whitespace-nowrap cursor-pointer ${
              activeTab === 'photos'
                ? 'border-amber-400 text-amber-300'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            📸 {lang === 'hi' ? 'फोटो प्रबंधन' : 'Manage Photos'}
          </button>
          <button
            onClick={() => setActiveTab('moderation')}
            className={`py-3 px-4 border-b-2 transition whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'moderation'
                ? 'border-amber-400 text-amber-300'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            <span>🙏 {lang === 'hi' ? 'मनोकामना मॉडरेशन' : 'Prayer Moderation'}</span>
            {pendingPrayers.length > 0 && (
              <span className="w-5 h-5 rounded-full bg-rose-600 text-white text-[10px] flex items-center justify-center font-bold">
                {pendingPrayers.length}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('guide')}
            className={`py-3 px-4 border-b-2 transition whitespace-nowrap cursor-pointer ${
              activeTab === 'guide'
                ? 'border-amber-400 text-amber-300'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            📖 {lang === 'hi' ? 'अपडेट निर्देशिका (Guide)' : 'Admin Guide'}
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {saveAlert && (
            <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 text-xs flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>
                {lang === 'hi'
                  ? 'सभी विवरण सफलतापूर्वक सुरक्षित कर लिए गए हैं।'
                  : 'All details have been updated successfully.'}
              </span>
            </div>
          )}

          {/* Tab 1: General Info & Timings */}
          {activeTab === 'info' && (
            <form onSubmit={handleInfoSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-amber-200 font-bold mb-1">
                    {lang === 'hi' ? 'आगामी मेला समय / तिथियां' : 'Upcoming Mela Dates'}
                  </label>
                  <input
                    type="text"
                    value={formData.melaTimingsHi}
                    onChange={(e) =>
                      setFormData({ ...formData, melaTimingsHi: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl bg-stone-900 border border-stone-700 text-white text-xs"
                  />
                </div>

                <div>
                  <label className="block text-amber-200 font-bold mb-1">
                    {lang === 'hi' ? 'दैनिक दर्शन समय' : 'Daily Darshan Hours'}
                  </label>
                  <input
                    type="text"
                    value={formData.dailyHoursHi}
                    onChange={(e) =>
                      setFormData({ ...formData, dailyHoursHi: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl bg-stone-900 border border-stone-700 text-white text-xs"
                  />
                </div>

                <div>
                  <label className="block text-amber-200 font-bold mb-1">
                    {lang === 'hi' ? 'आरती एवं पूजा समय' : 'Aarti & Puja Timings'}
                  </label>
                  <input
                    type="text"
                    value={formData.aartiTimingsHi}
                    onChange={(e) =>
                      setFormData({ ...formData, aartiTimingsHi: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl bg-stone-900 border border-stone-700 text-white text-xs"
                  />
                </div>

                <div>
                  <label className="block text-amber-200 font-bold mb-1">
                    {lang === 'hi' ? 'समिति संपर्क नंबर' : 'Committee Phone Number'}
                  </label>
                  <input
                    type="text"
                    value={formData.contactPhone}
                    onChange={(e) =>
                      setFormData({ ...formData, contactPhone: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl bg-stone-900 border border-stone-700 text-white text-xs"
                  />
                </div>

                <div>
                  <label className="block text-amber-200 font-bold mb-1">
                    {lang === 'hi' ? 'समिति ईमेल' : 'Committee Email'}
                  </label>
                  <input
                    type="text"
                    value={formData.contactEmail}
                    onChange={(e) =>
                      setFormData({ ...formData, contactEmail: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl bg-stone-900 border border-stone-700 text-white text-xs"
                  />
                </div>

                <div>
                  <label className="block text-amber-200 font-bold mb-1">
                    {lang === 'hi' ? 'प्रबंधन समिति का नाम' : 'Management Committee Name'}
                  </label>
                  <input
                    type="text"
                    value={formData.committeeNameHi}
                    onChange={(e) =>
                      setFormData({ ...formData, committeeNameHi: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl bg-stone-900 border border-stone-700 text-white text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-amber-200 font-bold mb-1">
                  {lang === 'hi' ? 'विशेष सूचना / घोषणा बैनर' : 'Announcement Notice Banner'}
                </label>
                <textarea
                  rows={2}
                  value={formData.announcementNoticeHi}
                  onChange={(e) =>
                    setFormData({ ...formData, announcementNoticeHi: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-xl bg-stone-900 border border-stone-700 text-white text-xs"
                />
              </div>

              <div>
                <label className="block text-amber-200 font-bold mb-1">
                  {lang === 'hi' ? 'भंडारा व प्रसाद व्यवस्था विवरण' : 'Bhandara & Prasad Guidelines'}
                </label>
                <input
                  type="text"
                  value={formData.bhandaraInfoHi}
                  onChange={(e) =>
                    setFormData({ ...formData, bhandaraInfoHi: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-xl bg-stone-900 border border-stone-700 text-white text-xs"
                />
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-stone-800">
                <button
                  type="button"
                  onClick={onResetDefaults}
                  className="px-3.5 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>{lang === 'hi' ? 'डिफ़ॉल्ट रीसेट करें' : 'Reset to Defaults'}</span>
                </button>

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs flex items-center gap-2 cursor-pointer shadow-lg"
                >
                  <Save className="w-4 h-4" />
                  <span>{lang === 'hi' ? 'परिवर्तन सुरक्षित करें' : 'Save Changes'}</span>
                </button>
              </div>
            </form>
          )}

          {/* Tab 2: Photos Management */}
          {activeTab === 'photos' && (
            <div className="space-y-6">
              {/* Add Photo Form */}
              <form onSubmit={handleAddPhotoSubmit} className="p-4 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-3 text-xs">
                <h4 className="font-bold text-amber-300 text-sm flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  <span>{lang === 'hi' ? 'नया मंदिर छायाचित्र जोड़ें' : 'Add New Photograph'}</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-stone-300 font-bold mb-1">
                      {lang === 'hi' ? 'शीर्षक / विवरण *' : 'Title *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={newPhotoTitle}
                      onChange={(e) => setNewPhotoTitle(e.target.value)}
                      placeholder={lang === 'hi' ? 'उदा. मुख्य शिखर दर्शन' : 'e.g. Sanctum Shikhara'}
                      className="w-full px-3 py-2 rounded-xl bg-stone-950 border border-stone-700 text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-stone-300 font-bold mb-1">
                      {lang === 'hi' ? 'श्रेणी (Category) *' : 'Category *'}
                    </label>
                    <select
                      value={newPhotoCat}
                      onChange={(e) => setNewPhotoCat(e.target.value as GalleryCategory)}
                      className="w-full px-3 py-2 rounded-xl bg-stone-950 border border-stone-700 text-white text-xs"
                    >
                      <option value="mandir">मंदिर</option>
                      <option value="baba_siddh">बाबा सिद्ध जी</option>
                      <option value="sarovar">सरोवर</option>
                      <option value="fish_turtles">मछलियां और कछुए</option>
                      <option value="chandan_mitti">चंदन मिट्टी</option>
                      <option value="mela">मेला</option>
                      <option value="sant_sammelan">संत सम्मेलन</option>
                      <option value="devotees">श्रद्धालु</option>
                      <option value="sona_arjunpur">सोना अर्जुनपुर</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-stone-300 font-bold mb-1">
                    {lang === 'hi' ? 'फोटो URL (ऐच्छिक)' : 'Photo URL (Optional)'}
                  </label>
                  <input
                    type="url"
                    value={newPhotoUrl}
                    onChange={(e) => setNewPhotoUrl(e.target.value)}
                    placeholder="https://... (Leave blank to keep verified placeholder slot)"
                    className="w-full px-3 py-2 rounded-xl bg-stone-950 border border-stone-700 text-white text-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs cursor-pointer"
                >
                  {lang === 'hi' ? '+ छायाचित्र जोड़ें' : '+ Add Photo'}
                </button>
              </form>

              {/* Existing Photos List */}
              <div className="space-y-2">
                <h4 className="font-bold text-stone-300 text-xs">
                  {lang === 'hi' ? `वर्तमान फोटो स्लॉट (${galleryItems.length})` : `Current Photo Slots (${galleryItems.length})`}
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-60 overflow-y-auto pr-1">
                  {galleryItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-2.5 rounded-xl bg-stone-900 border border-stone-800 flex items-center justify-between text-xs"
                    >
                      <div className="truncate mr-2">
                        <span className="font-bold text-amber-200">{item.titleHi}</span>
                        <span className="text-[10px] text-stone-400 block">{item.category}</span>
                      </div>

                      {item.isCustomUploaded && (
                        <button
                          onClick={() => onDeletePhoto(item.id)}
                          className="p-1 rounded text-rose-400 hover:bg-rose-950/60 transition cursor-pointer"
                          title="Delete photo"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Manokamna Prayer Moderation */}
          {activeTab === 'moderation' && (
            <div className="space-y-4">
              <div className="bg-amber-950/50 border border-amber-600/30 p-3 rounded-xl text-xs text-amber-200">
                {lang === 'hi'
                  ? 'मर्यादा एवं शुद्धि: श्रद्धालुओं द्वारा समर्पित मनोकामनाएं यहां पहले समीक्षा हेतु आती हैं। अनुमोदन के बाद ही वे मुख्य दीवार पर दिखाई देंगी।'
                  : 'Moderation Queue: Devotee prayers appear here for review before becoming public on the prayer wall.'}
              </div>

              {pendingPrayers.length === 0 ? (
                <div className="p-8 text-center text-xs text-stone-400">
                  {lang === 'hi'
                    ? 'कोई भी लंबित मनोकामना शेष नहीं है। सभी संदेश स्वीकृत हैं।'
                    : 'No pending prayers. All prayers are reviewed.'}
                </div>
              ) : (
                <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                  {pendingPrayers.map((p) => (
                    <div
                      key={p.id}
                      className="p-4 rounded-2xl bg-stone-900 border border-stone-800 text-xs flex flex-col justify-between gap-3"
                    >
                      <div>
                        <div className="flex items-center justify-between font-bold text-amber-300 mb-1">
                          <span>{p.name} ({p.villageCity})</span>
                          <span className="text-[10px] text-stone-500">{p.timestamp}</span>
                        </div>
                        <p className="text-stone-300 italic">"{p.prayer}"</p>
                      </div>

                      <div className="flex items-center gap-2 justify-end pt-2 border-t border-stone-800">
                        <button
                          onClick={() => onDeletePrayer(p.id)}
                          className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-rose-950 text-stone-300 hover:text-rose-300 text-xs transition cursor-pointer"
                        >
                          {lang === 'hi' ? 'अस्वीकार करें' : 'Reject'}
                        </button>
                        <button
                          onClick={() => onApprovePrayer(p.id)}
                          className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition cursor-pointer"
                        >
                          {lang === 'hi' ? 'स्वीकृत करें (Approve)' : 'Approve'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Tab 4: Technical Instructions / Admin Guide */}
          {activeTab === 'guide' && (
            <div className="space-y-4 text-xs text-stone-300 leading-relaxed">
              <div className="p-4 rounded-2xl bg-stone-900/90 border border-stone-800 space-y-3">
                <h4 className="font-bold text-amber-300 text-sm flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  <span>{lang === 'hi' ? 'वेबसाइट प्रबंधन एवं फोटो बदलने की निर्देशिका' : 'Instructions for Replacing Images & Content'}</span>
                </h4>

                <p>
                  <strong>1. वास्तविक मंदिर फोटो जोड़ना:</strong> मंदिर के वास्तविक फोटो फ़ाइलें सीधे `src/data/templeData.ts` में `INITIAL_GALLERY` एरे के `imageUrl` में निर्दिष्ट की जा सकती हैं, अथवा इस प्रबंधन पोर्टल के <em>"फोटो प्रबंधन"</em> टैब से इमेज URL डालकर जोड़ी जा सकती हैं।
                </p>

                <p>
                  <strong>2. आगामी मेला तिथियां एवं संत सम्मेलन:</strong> हर वर्ष आषाढ़ व सावन मास के शनिवार/रविवार की सटीक तिथियां <em>"सामान्य सूचना व समय"</em> टैब से एक क्लिक में अपडेट की जा सकती हैं।
                </p>

                <p>
                  <strong>3. मंदिर समिति के आधिकारिक नंबर:</strong> जब भी मंदिर समिति अपना आधिकारिक फोन नंबर या ईमेल जारी करे, उसे इसी पोर्टल पर दर्ज कर सुरक्षित किया जा सकता है।
                </p>

                <p>
                  <strong>4. प्रमाणिक व तथ्यनिष्ठ नीति:</strong> किसी भी अस्वभाविक या असत्यापित ऐतिहासिक दावे या चमत्कार के दावों से बचते हुए सदा स्थानीय मान्यता ('स्थानीय परंपरा के अनुसार') की भाषा का पालन करें।
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
