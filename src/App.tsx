import React, { useState, useEffect } from 'react';
import { Language, TempleInfoConfig, GalleryItem, ManokamnaPrayer } from './types';
import {
  DEFAULT_TEMPLE_INFO,
  INITIAL_GALLERY,
  INITIAL_PRAYERS,
  DEFAULT_TIMELINE,
  DEFAULT_INSTITUTIONS,
  DEFAULT_VIDEOS,
} from './data/templeData';
import { Navbar } from './components/Navbar';
import { NoticeBanner } from './components/NoticeBanner';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SarovarSection } from './components/SarovarSection';
import { ChandanMittiSection } from './components/ChandanMittiSection';
import { ManokamnaOfferingsSection } from './components/ManokamnaOfferingsSection';
import { AnnualMelaSection } from './components/AnnualMelaSection';
import { SantSammelanSection } from './components/SantSammelanSection';
import { InstitutionsSection } from './components/InstitutionsSection';
import { VillageHeritageSection } from './components/VillageHeritageSection';
import { HowToReachSection } from './components/HowToReachSection';
import { PhotoGallerySection } from './components/PhotoGallerySection';
import { VideoSection } from './components/VideoSection';
import { ManokamnaWallSection } from './components/ManokamnaWallSection';
import { TempleInfoCard } from './components/TempleInfoCard';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { AdminModal } from './components/AdminModal';

export default function App() {
  const [lang, setLang] = useState<Language>('hi');
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Persistent / Local storage backed info
  const [templeInfo, setTempleInfo] = useState<TempleInfoConfig>(() => {
    const saved = localStorage.getItem('siddh_mandir_info');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse temple info from storage', e);
      }
    }
    return DEFAULT_TEMPLE_INFO;
  });

  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(() => {
    const saved = localStorage.getItem('siddh_mandir_gallery');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse gallery from storage', e);
      }
    }
    return INITIAL_GALLERY;
  });

  const [prayers, setPrayers] = useState<ManokamnaPrayer[]>(() => {
    const saved = localStorage.getItem('siddh_mandir_prayers');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse prayers from storage', e);
      }
    }
    return INITIAL_PRAYERS;
  });

  // Lightbox state
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    title: string;
    desc: string;
    category: string;
    imageUrl?: string;
  }>({
    isOpen: false,
    title: '',
    desc: '',
    category: '',
  });

  // Save updates to localStorage
  useEffect(() => {
    localStorage.setItem('siddh_mandir_info', JSON.stringify(templeInfo));
  }, [templeInfo]);

  useEffect(() => {
    localStorage.setItem('siddh_mandir_gallery', JSON.stringify(galleryItems));
  }, [galleryItems]);

  useEffect(() => {
    localStorage.setItem('siddh_mandir_prayers', JSON.stringify(prayers));
  }, [prayers]);

  // Language toggle handler
  const handleToggleLang = () => {
    setLang((prev) => (prev === 'hi' ? 'en' : 'hi'));
  };

  // Lightbox opener
  const handleOpenLightbox = (title: string, desc: string, category: string, imageUrl?: string) => {
    setLightboxState({
      isOpen: true,
      title,
      desc,
      category,
      imageUrl,
    });
  };

  // Admin actions
  const handleSaveInfo = (updated: TempleInfoConfig) => {
    setTempleInfo(updated);
  };

  const handleAddPhoto = (item: GalleryItem) => {
    setGalleryItems((prev) => [item, ...prev]);
  };

  const handleDeletePhoto = (id: string) => {
    setGalleryItems((prev) => prev.filter((p) => p.id !== id));
  };

  const handleAddPrayer = (name: string, villageCity: string, prayer: string) => {
    const newPrayer: ManokamnaPrayer = {
      id: `prayer-${Date.now()}`,
      name,
      villageCity,
      prayer,
      timestamp: new Date().toLocaleDateString('hi-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
      approved: false, // Subject to moderation as required
    };
    setPrayers((prev) => [newPrayer, ...prev]);
  };

  const handleApprovePrayer = (id: string) => {
    setPrayers((prev) =>
      prev.map((p) => (p.id === id ? { ...p, approved: true } : p))
    );
  };

  const handleDeletePrayer = (id: string) => {
    setPrayers((prev) => prev.filter((p) => p.id !== id));
  };

  const handleResetDefaults = () => {
    if (window.confirm('क्या आप सभी डेटा को मूल डिफ़ॉल्ट में रीसेट करना चाहते हैं?')) {
      setTempleInfo(DEFAULT_TEMPLE_INFO);
      setGalleryItems(INITIAL_GALLERY);
      setPrayers(INITIAL_PRAYERS);
      localStorage.removeItem('siddh_mandir_info');
      localStorage.removeItem('siddh_mandir_gallery');
      localStorage.removeItem('siddh_mandir_prayers');
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C221E] font-sans antialiased selection:bg-amber-200 selection:text-amber-900">
      {/* 1. Header & Navigation */}
      <Navbar
        lang={lang}
        onToggleLang={handleToggleLang}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* 2. Urgent / Special Notice Banner */}
      <NoticeBanner
        noticeHi={templeInfo.announcementNoticeHi}
        noticeEn={templeInfo.announcementNoticeEn}
        lang={lang}
      />

      <main>
        {/* 3. Hero Section */}
        <Hero
          lang={lang}
          melaTimingsHi={templeInfo.melaTimingsHi}
          melaTimingsEn={templeInfo.melaTimingsEn}
          onOpenAdmin={() => setIsAdminOpen(true)}
        />

        {/* 4. About Temple & Sacred History */}
        <AboutSection lang={lang} />

        {/* 5. Sacred Baba Siddh Sarovar */}
        <SarovarSection
          lang={lang}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* 6. Sacred Chandan Mitti Tradition & Medical Disclaimer */}
        <ChandanMittiSection lang={lang} />

        {/* 7. Devotional Offerings & Beliefs */}
        <ManokamnaOfferingsSection lang={lang} />

        {/* 8. Annual Sacred Mela */}
        <AnnualMelaSection
          lang={lang}
          melaTimingsHi={templeInfo.melaTimingsHi}
          melaTimingsEn={templeInfo.melaTimingsEn}
          onOpenAdmin={() => setIsAdminOpen(true)}
        />

        {/* 9. Sant Sammelan */}
        <SantSammelanSection
          lang={lang}
          onOpenAdmin={() => setIsAdminOpen(true)}
        />

        {/* 10. Educational Institutions in Baba Siddh Ji's Name */}
        <InstitutionsSection
          lang={lang}
          institutions={DEFAULT_INSTITUTIONS}
        />

        {/* 11. Sona Arjunpur Village Heritage & Timeline */}
        <VillageHeritageSection
          lang={lang}
          timeline={DEFAULT_TIMELINE}
        />

        {/* 12. How to Reach & Transit Guide */}
        <HowToReachSection
          lang={lang}
          templeInfo={templeInfo}
        />

        {/* 13. Photo Gallery with Categories & Verified Placeholders */}
        <PhotoGallerySection
          lang={lang}
          galleryItems={galleryItems}
          onOpenLightbox={handleOpenLightbox}
          onOpenAdmin={() => setIsAdminOpen(true)}
        />

        {/* 14. Video Darshan Archive */}
        <VideoSection
          lang={lang}
          videos={DEFAULT_VIDEOS}
        />

        {/* 15. Devotees' Manokamna Prayer Wall */}
        <ManokamnaWallSection
          lang={lang}
          prayers={prayers}
          onSubmitPrayer={handleAddPrayer}
        />

        {/* 16. Comprehensive Temple Factsheet Card */}
        <TempleInfoCard
          lang={lang}
          info={templeInfo}
          onOpenAdmin={() => setIsAdminOpen(true)}
        />

        {/* 17. Contact & Enquiry */}
        <ContactSection
          lang={lang}
          templeInfo={templeInfo}
        />
      </main>

      {/* 18. Footer */}
      <Footer lang={lang} />

      {/* Lightbox Modal */}
      <LightboxModal
        lang={lang}
        isOpen={lightboxState.isOpen}
        onClose={() => setLightboxState((prev) => ({ ...prev, isOpen: false }))}
        title={lightboxState.title}
        desc={lightboxState.desc}
        category={lightboxState.category}
        imageUrl={lightboxState.imageUrl}
      />

      {/* Admin Portal Modal */}
      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        lang={lang}
        templeInfo={templeInfo}
        onSaveInfo={handleSaveInfo}
        galleryItems={galleryItems}
        onAddPhoto={handleAddPhoto}
        onDeletePhoto={handleDeletePhoto}
        prayers={prayers}
        onApprovePrayer={handleApprovePrayer}
        onDeletePrayer={handleDeletePrayer}
        onResetDefaults={handleResetDefaults}
      />
    </div>
  );
}
