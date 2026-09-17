export type Language = 'hi' | 'en';

export type GalleryCategory =
  | 'all'
  | 'mandir'
  | 'baba_siddh'
  | 'sarovar'
  | 'fish_turtles'
  | 'chandan_mitti'
  | 'mela'
  | 'sant_sammelan'
  | 'devotees'
  | 'sona_arjunpur';

export interface GalleryItem {
  id: string;
  category: GalleryCategory;
  titleHi: string;
  titleEn: string;
  descriptionHi: string;
  descriptionEn: string;
  imageUrl?: string;
  placeholderLabelHi: string;
  placeholderLabelEn: string;
  isCustomUploaded?: boolean;
}

export interface VideoItem {
  id: string;
  category: 'mandir' | 'sarovar' | 'mela' | 'sant_sammelan' | 'devotees';
  titleHi: string;
  titleEn: string;
  videoId: string; // YouTube video ID or placeholder
  descriptionHi: string;
  descriptionEn: string;
}

export interface ManokamnaPrayer {
  id: string;
  name: string;
  villageCity: string;
  prayer: string;
  timestamp: string;
  approved: boolean;
}

export interface TempleInfoConfig {
  templeNameHi: string;
  templeNameEn: string;
  locationHi: string;
  locationEn: string;
  districtHi: string;
  districtEn: string;
  stateHi: string;
  stateEn: string;
  nearestRailwayStationHi: string;
  nearestRailwayStationEn: string;
  distanceHi: string;
  distanceEn: string;
  railRouteHi: string;
  railRouteEn: string;
  mainAttractionsHi: string;
  mainAttractionsEn: string;
  contactPhone: string;
  contactEmail: string;
  committeeNameHi: string;
  committeeNameEn: string;
  dailyHoursHi: string;
  dailyHoursEn: string;
  aartiTimingsHi: string;
  aartiTimingsEn: string;
  melaTimingsHi: string;
  melaTimingsEn: string;
  parkingInfoHi: string;
  parkingInfoEn: string;
  accommodationInfoHi: string;
  accommodationInfoEn: string;
  bhandaraInfoHi: string;
  bhandaraInfoEn: string;
  announcementNoticeHi: string;
  announcementNoticeEn: string;
  googleMapsQuery: string;
  isMapVerified: boolean;
}

export interface Institution {
  id: string;
  nameHi: string;
  nameEn: string;
  categoryHi: string;
  categoryEn: string;
  descHi: string;
  descEn: string;
  statusHi: string;
  statusEn: string;
}

export interface TimelineMilestone {
  step: number;
  titleHi: string;
  titleEn: string;
  subtitleHi: string;
  subtitleEn: string;
  descHi: string;
  descEn: string;
}
