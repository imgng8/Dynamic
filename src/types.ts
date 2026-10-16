export type PageId =
  | 'home'
  | 'services'
  | 'international'
  | 'domestic'
  | 'umrah'
  | 'hajj'
  | 'visa'
  | 'flights'
  | 'about'
  | 'contact'
  | 'blog'
  | 'kadence-guide';

export type ServiceType =
  | 'umrah'
  | 'hajj'
  | 'international'
  | 'domestic'
  | 'visa'
  | 'air-ticketing'
  | 'family'
  | 'group'
  | 'custom';

export interface TourPackage {
  id: string;
  title: string;
  category: 'domestic' | 'international' | 'umrah' | 'hajj';
  duration: string;
  destinations: string[];
  description: string;
  highlights: string[];
  inclusions: string[];
  image: string;
  departureCity: string;
  recommendedSeason?: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  ctaLabel: string;
  pageTarget: PageId;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  content: string[];
}

export interface InquiryFormData {
  service: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  adults: number;
  children: number;
  fullName: string;
  phone: string;
  email: string;
  notes: string;
}
