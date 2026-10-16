import { TourPackage, ServiceDetail, BlogPost } from '../types';

export const BUSINESS_INFO = {
  name: 'Dynamic Travel and Tours',
  shortName: 'Dynamic Travel',
  email: 'dynamicairservices.das@gmail.com',
  phone: '+92 318 9011775',
  phoneClean: '+923189011775',
  whatsappUrl: 'https://wa.me/923189011775',
  address: 'Gul Bahar, Peshawar, Khyber Pakhtunkhwa, Pakistan',
  officeHours: 'Monday – Saturday: 9:00 AM – 9:00 PM (PKT) | Sunday: By Appointment',
  heroImage: '/src/assets/images/hero_travel_world_1792133424282.jpg',
  umrahImage: '/src/assets/images/umrah_makkah_holy_1792133424776.jpg',
  domesticImage: '/src/assets/images/hunza_skardu_mountains_1792133424865.jpg',
  internationalImage: '/src/assets/images/international_destinations_1792133425038.jpg',
};

export const SERVICES_LIST: ServiceDetail[] = [
  {
    id: 'umrah-packages',
    title: 'Umrah Packages',
    shortDesc: 'Complete spiritual journeys with tailored hotel distance options, visa processing, direct ground transport, and guided Ziyarat.',
    fullDesc: 'We specialize in providing comfortable, hassle-free Umrah packages for individuals, families, and private groups departing from Peshawar and Islamabad. From budget-friendly walking distance options to luxury 5-star clock tower stays, we arrange your complete pilgrimage.',
    iconName: 'Moon',
    features: [
      'Electronic Umrah Visa processing within 24–48 hours',
      'Curated hotel bookings in Makkah & Madinah (Walking distance options)',
      'Private or group GMC / Coaster airport and intercity transfers',
      'Knowledgeable local guides for sacred Ziyarat historical sites',
      'Customized stays from 7 to 21 days'
    ],
    ctaLabel: 'View Umrah Details',
    pageTarget: 'umrah'
  },
  {
    id: 'hajj-services',
    title: 'Hajj Services',
    shortDesc: 'Comprehensive facilitation, official Ministry pre-registration guidance, and attentive logistical support for the fifth pillar of Islam.',
    fullDesc: 'Performing Hajj is a lifetime milestone. Dynamic Travel and Tours provides honest consultations on official government regulations, private quota programs, Maktab tent categories in Mina & Arafat, and dedicated group management.',
    iconName: 'Compass',
    features: [
      'Pre-registration assistance and documentation guidance',
      'Maktab tent selection and training seminars in Peshawar',
      'Direct flights from Peshawar / Islamabad to Jeddah / Madinah',
      'Experienced group coordinators and religious scholars guidance',
      'Transparent itineraries with zero hidden logistical surprises'
    ],
    ctaLabel: 'Explore Hajj Services',
    pageTarget: 'hajj'
  },
  {
    id: 'international-tours',
    title: 'International Tour Packages',
    shortDesc: 'Curated international holidays across Saudi Arabia, Turkey, UAE (Dubai), Malaysia, Azerbaijan, Thailand, and beyond.',
    fullDesc: 'Explore historic minarets in Istanbul, world-class skylines in Dubai, lush rainforests in Malaysia, or the ancient streets of Baku. We curate end-to-end itineraries including flights, 4-star/5-star hotels, daily breakfasts, excursions, and visa paperwork.',
    iconName: 'Globe',
    features: [
      'Top destinations: Dubai, Istanbul, Kuala Lumpur, Baku, Bangkok',
      'Custom family vacations, honeymoons, and corporate groups',
      'Guided excursions, desert safaris, Bosphorus cruises, island trips',
      'Confirmed flight tickets and luxury hotel vouchers',
      'Round-the-clock coordinator assistance during your trip'
    ],
    ctaLabel: 'Browse International Tours',
    pageTarget: 'international'
  },
  {
    id: 'domestic-tours',
    title: 'Domestic Tours Across Pakistan',
    shortDesc: 'Discover the unmatched natural beauty of Northern Pakistan: Swat, Hunza Valley, Skardu, Naran Kaghan, and Murree.',
    fullDesc: 'From the emerald rivers of Swat Valley to the snow-crowned 8,000-meter giants of the Karakoram in Skardu and Hunza, our domestic tour packages combine safe mountain transport (Prado / 4x4 / Hiace), vetted family-friendly hotels, and experienced local drivers.',
    iconName: 'Mountain',
    features: [
      'Featured valleys: Swat, Malam Jabba, Hunza, Skardu, Naran Kaghan, Murree',
      'Private 4x4 Prado and air-conditioned Grand Cabin coasters',
      'Deluxe mountain resort stays with scenic views and heaters',
      'Sightseeing at Attabad Lake, Shangrila Lake, Saif-ul-Malook & Deosai',
      'Flexible departures from Peshawar and Islamabad'
    ],
    ctaLabel: 'Explore Domestic Trips',
    pageTarget: 'domestic'
  },
  {
    id: 'visa-assistance',
    title: 'Visa Assistance Services',
    shortDesc: 'Professional visa consultancy, file preparation, embassy appointment scheduling, and electronic visa issuance.',
    fullDesc: 'Navigating international visa requirements can be daunting. Dynamic Travel and Tours assists you with document auditing, cover letter drafting, bank statement review, and rapid submission for tourist and visit visas.',
    iconName: 'FileCheck',
    features: [
      'Fast eVisa issuance for UAE / Dubai (30 & 60 days)',
      'Saudi Arabia tourist and single/multiple visit visas',
      'Turkey, Malaysia, and Azerbaijan eVisas',
      'Appointment bookings & file preparation for Schengen, UK & USA',
      'Accurate document checklists preventing delays or refusals'
    ],
    ctaLabel: 'Learn About Visa Services',
    pageTarget: 'visa'
  },
  {
    id: 'air-ticketing',
    title: 'Air Ticketing (Domestic & International)',
    shortDesc: 'Instant flight bookings and itinerary comparisons across domestic carriers and leading world airlines at competitive market fares.',
    fullDesc: 'Whether flying domestic between Peshawar, Karachi, Islamabad, and Lahore, or journeying internationally across the Middle East, Europe, or North America, we find you optimal routes, convenient baggage allowances, and swift seat reservations.',
    iconName: 'Plane',
    features: [
      'Domestic airlines: PIA, Airblue, Serene Air, Fly Jinnah',
      'International airlines: Emirates, Qatar Airways, Saudia, flydubai, Turkish Airlines',
      'Direct departures from Bacha Khan International Airport (Peshawar)',
      'Group ticketing discounts and flexible date consultations',
      'Assistance with seat selection, extra baggage, and date change reissue'
    ],
    ctaLabel: 'Request Flight Quote',
    pageTarget: 'flights'
  },
  {
    id: 'family-holidays',
    title: 'Family Holiday Packages',
    shortDesc: 'Carefully paced travel itineraries tailored for parents, children, and elders with comfortable stays and gentle schedules.',
    fullDesc: 'Family travel requires extra attention to detail: spacious interconnecting hotel rooms, child-friendly activities, wheelchair assistance when requested, and relaxed travel durations so everyone returns home refreshed.',
    iconName: 'Users',
    features: [
      'Family-friendly hotels with verified hygiene and quiet surroundings',
      'Spacious private vehicles with dedicated courteous drivers',
      'Balanced daily itineraries with minimal rushed transitions',
      'Meal planning preferences and dietary consideration'
    ],
    ctaLabel: 'Plan Family Vacation',
    pageTarget: 'services'
  },
  {
    id: 'group-and-custom',
    title: 'Group Tours & Customized Packages',
    shortDesc: 'Bespoke itineraries designed from scratch around your specific budget, schedule, interests, and group size.',
    fullDesc: 'Planning a college excursion, corporate retreat, or extended family clan reunion? We build bespoke travel packages covering private coaches, team-building excursions, conference facilities, and customized meal plans.',
    iconName: 'Sparkles',
    features: [
      'Tailor-made itineraries to your exact dates and budget',
      'Dedicated group leader support from Peshawar/Islamabad',
      'Special discounted corporate and educational group rates',
      'Comprehensive travel vouchers, badges, and itinerary guides'
    ],
    ctaLabel: 'Build Custom Package',
    pageTarget: 'contact'
  }
];

export const POPULAR_PACKAGES: TourPackage[] = [
  {
    id: 'umrah-comfort-15days',
    title: '15-Day Comfort Umrah Package',
    category: 'umrah',
    duration: '15 Days / 14 Nights',
    destinations: ['Makkah Al-Mukarramah', 'Madinah Al-Munawwarah'],
    description: 'A serene and spiritually fulfilling journey with 7 nights in Makkah and 7 nights in Madinah at respected walking-distance hotels.',
    highlights: [
      'Short walking distance to Masjid al-Haram & Masjid an-Nabawi',
      'Direct ground transportation via private air-conditioned VIP coach',
      'Guided historical Ziyarat tours in both holy cities (Ghar e Hira, Jabal e Thawr, Uhud, Quba)',
      'Fast-track electronic visa processing included'
    ],
    inclusions: ['Umrah Visa', 'Hotel Accommodation', 'Ground Transport', 'Guided Ziyarat', '24/7 Coordinator'],
    image: '/src/assets/images/umrah_makkah_holy_1792133424776.jpg',
    departureCity: 'Peshawar or Islamabad',
    recommendedSeason: 'Year-Round (Best Oct–April)'
  },
  {
    id: 'umrah-ramadan-special',
    title: 'Ramadan Spiritual Retreat (Last 10 Days)',
    category: 'umrah',
    duration: '12 Days / 11 Nights',
    destinations: ['Makkah', 'Madinah'],
    description: 'Experience Laylatul Qadr and Khatam-al-Quran in the sacred sanctuary of Makkah with prime lodging and verified shuttle access.',
    highlights: [
      'Confirmed rooms during peak Ramadan days',
      'Daily Suhoor arrangements and assistance',
      'Round-trip airport transfers via Jeddah & Madinah',
      'Pre-departure orientation session in Peshawar'
    ],
    inclusions: ['Ramadan Visa', 'Star Accommodation', 'VIP Ground Transfer', '24/7 Group Leader'],
    image: '/src/assets/images/umrah_makkah_holy_1792133424776.jpg',
    departureCity: 'Peshawar or Islamabad',
    recommendedSeason: 'Ramadan 1448 / 1449'
  },
  {
    id: 'domestic-hunza-fairy-meadows',
    title: '7-Day Hunza Valley & Attabad Lake Expedition',
    category: 'domestic',
    duration: '7 Days / 6 Nights',
    destinations: ['Gilgit', 'Karimabad (Hunza)', 'Attabad Lake', 'Hussaini Bridge', 'Khunjerab Pass'],
    description: 'Journey across the legendary Karakoram Highway to the heart of Hunza Valley, visiting ancient forts, turquoise glacial lakes, and the China border.',
    highlights: [
      'Visit 800-year-old Baltit and Altit Forts with local historians',
      'Boating on crystal turquoise waters of Attabad Lake',
      'Drive to Khunjerab Pass (Highest paved international border at 4,693m)',
      'Scenic sunset views of Rakaposhi peak (7,788m)'
    ],
    inclusions: ['Private 4x4 / Grand Cabin', 'Luxury Mountain Hotel stays', 'Daily Breakfast', 'Fuel & Tolls', 'Tour Guide'],
    image: '/src/assets/images/hunza_skardu_mountains_1792133424865.jpg',
    departureCity: 'Peshawar / Islamabad',
    recommendedSeason: 'April – October'
  },
  {
    id: 'domestic-skardu-deosai',
    title: '8-Day Majestic Skardu & Deosai Plains Tour',
    category: 'domestic',
    duration: '8 Days / 7 Nights',
    destinations: ['Skardu', 'Shangrila Resort', 'Upper Kachura Lake', 'Deosai National Park', 'Shigar Fort'],
    description: 'Experience the crown jewel of Gilgit-Baltistan. Discover the Land of Giants (Deosai), serene cold deserts, and emerald glacial alpine lakes.',
    highlights: [
      'Explore Shangrila Heaven on Earth Resort & Upper Kachura boating',
      'Safari across Deosai Plains (world second highest plateau) & Sheosar Lake',
      'Stay at historic Shigar and Khaplu royal valleys',
      'Stargazing at the Cold Desert of Katpana'
    ],
    inclusions: ['4x4 Mountain Jeep / Transport', 'Selected Resort Lodging', 'Breakfast & Dinner', 'Tour Manager'],
    image: '/src/assets/images/hunza_skardu_mountains_1792133424865.jpg',
    departureCity: 'Peshawar / Islamabad',
    recommendedSeason: 'May – September'
  },
  {
    id: 'domestic-swat-malamjabba',
    title: '5-Day Swat Emerald Valley & Malam Jabba',
    category: 'domestic',
    duration: '5 Days / 4 Nights',
    destinations: ['Mingora', 'Malam Jabba', 'Fizagat', 'Kalam Valley', 'Mahodand Lake'],
    description: 'Known as the Switzerland of the East, Swat features pine-covered mountains, white waters of Swat River, and thrilling chairlifts in Malam Jabba.',
    highlights: [
      'Chairlift and zip-lining adventure at Malam Jabba ski resort',
      'Off-road 4x4 trip through pine forests to magical Mahodand Lake',
      'Ushu Forest walk and riverside trout dining in Kalam',
      'Visits to historic Buddhist Gandhara archaeological sites in Swat'
    ],
    inclusions: ['Dedicated Transport from Peshawar', 'Standard/Deluxe Hotel stays', 'Jeep ride to Mahodand', 'Driver expenses'],
    image: '/src/assets/images/hunza_skardu_mountains_1792133424865.jpg',
    departureCity: 'Peshawar (Direct Departure)',
    recommendedSeason: 'Year-Round (Snow in Winter, Lush Green in Summer)'
  },
  {
    id: 'international-turkey-discovery',
    title: '7-Day Istanbul & Cappadocia Highlights',
    category: 'international',
    duration: '7 Days / 6 Nights',
    destinations: ['Istanbul', 'Bosphorus Strait', 'Goreme', 'Cappadocia'],
    description: 'A seamless journey connecting the imperial splendor of Byzantine & Ottoman Istanbul with the magical fairy chimneys of Cappadocia.',
    highlights: [
      'Guided historical tours: Blue Mosque, Hagia Sophia, Topkapi Palace & Grand Bazaar',
      'Bosphorus sunset cruise between Europe and Asia continents',
      'Domestic flight to Cappadocia with optional sunrise Hot Air Balloon flight',
      'Stay in unique authentic cave-style boutique hotel'
    ],
    inclusions: ['4-Star & Cave Hotel Accommodation', 'Internal Turkey Flights', 'Daily Breakfast', 'Airport Transfers', 'Guided Excursions'],
    image: '/src/assets/images/international_destinations_1792133425038.jpg',
    departureCity: 'Peshawar / Islamabad',
    recommendedSeason: 'September – November / April – June'
  },
  {
    id: 'international-dubai-explorer',
    title: '5-Day Dubai & Abu Dhabi Luxury Experience',
    category: 'international',
    duration: '5 Days / 4 Nights',
    destinations: ['Downtown Dubai', 'Dubai Marina', 'Desert Conservation Reserve', 'Abu Dhabi Sheikh Zayed Grand Mosque'],
    description: 'The ultimate blend of futuristic architecture, exhilarating desert safaris, and cultural landmarks in the United Arab Emirates.',
    highlights: [
      'At The Top observation deck tickets at Burj Khalifa',
      'Premium Desert Safari with 4x4 dune bashing, BBQ dinner & live shows',
      'Dubai Marina luxury Dhow Cruise with international buffet',
      'Day excursion to Abu Dhabi & the magnificent Sheikh Zayed Grand Mosque'
    ],
    inclusions: ['4-Star Centrally Located Hotel', 'UAE Tourist Visa Processing', 'Daily Buffet Breakfast', 'All Mentioned Tours & Transfers'],
    image: '/src/assets/images/hero_travel_world_1792133424282.jpg',
    departureCity: 'Peshawar (Direct flydubai / Emirates)',
    recommendedSeason: 'October – April'
  },
  {
    id: 'international-malaysia-tropical',
    title: '6-Day Kuala Lumpur & Langkawi Island Escape',
    category: 'international',
    duration: '6 Days / 5 Nights',
    destinations: ['Kuala Lumpur', 'Genting Highlands', 'Batu Caves', 'Langkawi Island'],
    description: 'Modern metropolitan skylines blended with tropical rainforests, pristine white beaches, and the Langkawi sky bridge.',
    highlights: [
      'Petronas Twin Towers photo stop and Kuala Lumpur city tour',
      'Day trip to Genting Highlands via cable car and Batu Caves visit',
      'Flight to Langkawi Island with Island Hopping boat excursion',
      'Langkawi cable car & SkyCab mountain viewpoint'
    ],
    inclusions: ['Selected 4-Star Hotels', 'Domestic Flight KL-Langkawi', 'Daily Breakfast', 'All Transfers', 'Malaysia eVisa Assistance'],
    image: '/src/assets/images/international_destinations_1792133425038.jpg',
    departureCity: 'Peshawar / Islamabad',
    recommendedSeason: 'November – August'
  }
];

export const DESTINATIONS_DATA = [
  {
    name: 'Swat Valley',
    country: 'Pakistan',
    category: 'Domestic',
    description: 'Known as the Switzerland of Pakistan, featuring Malam Jabba, Kalam, and Ushu pine valleys.',
    image: '/src/assets/images/hunza_skardu_mountains_1792133424865.jpg'
  },
  {
    name: 'Hunza Valley',
    country: 'Pakistan',
    category: 'Domestic',
    description: 'World-renowned mountain paradise framed by Rakaposhi, Ultar Sar, and pristine Attabad Lake.',
    image: '/src/assets/images/hunza_skardu_mountains_1792133424865.jpg'
  },
  {
    name: 'Skardu & Deosai',
    country: 'Pakistan',
    category: 'Domestic',
    description: 'Gateway to K2, featuring Shangrila, Katpana cold desert, and high-altitude wilderness.',
    image: '/src/assets/images/hunza_skardu_mountains_1792133424865.jpg'
  },
  {
    name: 'Naran Kaghan',
    country: 'Pakistan',
    category: 'Domestic',
    description: 'Famous Kunhar River, legendary Saif-ul-Malook lake, and scenic Babusar Pass route.',
    image: '/src/assets/images/hunza_skardu_mountains_1792133424865.jpg'
  },
  {
    name: 'Murree & Galiyat',
    country: 'Pakistan',
    category: 'Domestic',
    description: 'Convenient mountain retreat with colonial architecture, Mall Road, and Ayubia chairlifts.',
    image: '/src/assets/images/hunza_skardu_mountains_1792133424865.jpg'
  },
  {
    name: 'Makkah & Madinah',
    country: 'Saudi Arabia',
    category: 'Pilgrimage',
    description: 'The twin holy sanctuaries of Islam, offering spiritually profound Umrah and Hajj journeys.',
    image: '/src/assets/images/umrah_makkah_holy_1792133424776.jpg'
  },
  {
    name: 'Istanbul & Cappadocia',
    country: 'Turkey',
    category: 'International',
    description: 'A historic crossroads of empires, Bosphorus waterways, and geological cave wonderlands.',
    image: '/src/assets/images/international_destinations_1792133425038.jpg'
  },
  {
    name: 'Dubai & Abu Dhabi',
    country: 'United Arab Emirates',
    category: 'International',
    description: 'Ultra-modern luxury, world shopping festivals, desert adventures, and grand mosques.',
    image: '/src/assets/images/hero_travel_world_1792133424282.jpg'
  },
  {
    name: 'Kuala Lumpur',
    country: 'Malaysia',
    category: 'International',
    description: 'A vibrant Southeast Asian hub of cultural diversity, culinary wonders, and modern architecture.',
    image: '/src/assets/images/international_destinations_1792133425038.jpg'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'umrah-preparation-guide-pakistan',
    title: 'Essential Preparation Checklist for First-Time Umrah from Pakistan',
    category: 'Pilgrimage Guide',
    readTime: '6 min read',
    date: 'October 2026',
    summary: 'A step-by-step practical guide covering Nusuk app registration, packing essentials for Makkah & Madinah weather, currency exchange, and biometric procedures.',
    content: [
      'Embarking on Umrah is among the most meaningful journeys of a Muslims life. Preparing thoroughly before leaving Pakistan ensures your focus remains entirely on devotion and worship.',
      'Key Documentation: Ensure your passport has at least 6 months validity. The electronic Umrah visa issued through licensed operators is linked directly to your passport. Download the official Nusuk application onto your smartphone before departure to book your Rawdah permit for Madinah.',
      'Packing Essentials: Pack two sets of Ihram for men, comfortable slip-on footwear for walking between marble courtyards, basic unscented toiletries, a small waist pouch for prayer books, and prescription medications with doctor prescriptions.',
      'Currency & Connectivity: Saudi Riyals can be exchanged before departure or withdrawn directly at Jeddah and Madinah airport ATMs using international debit cards. Local Saudi SIM cards (STC, Mobily, Zain) are readily available upon landing.'
    ]
  },
  {
    id: 'northern-pakistan-road-trip-guide',
    title: 'Planning the Ultimate Northern Pakistan Road Trip: Swat, Hunza & Skardu',
    category: 'Domestic Travel',
    readTime: '7 min read',
    date: 'September 2026',
    summary: 'How to choose between self-drive, private 4x4, and scheduled group departures from Peshawar or Islamabad, plus seasonal road safety insights.',
    content: [
      'Pakistan’s northern territories are home to the intersection of the world’s three greatest mountain ranges: the Himalayas, the Karakoram, and the Hindu Kush.',
      'Route Selection: The Swat Expressway allows quick 3-hour access from Peshawar to the gateway of Swat Valley, making Swat ideal for 4-to-5 day excursions. For Gilgit and Hunza, the Hazara Motorway and Karakoram Highway via Babusar Top (summer only) or Besham provide awe-inspiring vistas.',
      'Vehicle Considerations: While passenger sedans can reach Kalam or Gilgit city, inner excursions like Deosai Plains, Mahodand Lake, or Khunjerab Pass strictly require high-clearance 4x4 vehicles with experienced mountain drivers.',
      'Responsible Tourism: Please remember to respect local cultural customs, hire certified local community guides, and strictly keep your trash with you to protect these pristine valleys.'
    ]
  },
  {
    id: 'dubai-tourist-visa-requirements',
    title: 'Complete UAE & Dubai Tourist Visa Guide for Pakistani Passport Holders',
    category: 'Visa Insights',
    readTime: '5 min read',
    date: 'August 2026',
    summary: 'Understand the current 30-day and 60-day Dubai visa requirements, mandatory return ticket rules, hotel confirmations, and processing turnaround.',
    content: [
      'Dubai remains one of the top vacation destinations for Pakistani families and business travelers due to direct 3-hour flight connectivity from Peshawar and Islamabad.',
      'Standard Requirements: Scanned copy of original passport (valid for minimum 6 months), passport-size white background photograph, confirmed round-trip air ticket, and valid national identity card (CNIC).',
      'Processing Time: Dubai tourist eVisas are typically approved in 24 to 72 business hours when processed through licensed travel agencies. Always apply at least 5 working days before your planned flight.',
      'Airport Entry Check: Travelers entering the UAE should carry their printed eVisa copy, confirmed hotel reservation or host proof, and sufficient travel funds for their stay duration.'
    ]
  }
];

export const TESTIMONIALS = [
  {
    name: 'Haji Muhammad Tariq',
    role: 'Peshawar Resident',
    trip: 'Family Umrah (15 Days)',
    review: 'Dynamic Travel and Tours made our family Umrah completely effortless. The hotel in Makkah was genuinely close to the Haram as promised, and our private transport from Jeddah was waiting on time. Very honest brothers in Gul Bahar.'
  },
  {
    name: 'Engr. Shahab Khan',
    role: 'Corporate Travel Lead',
    trip: 'Hunza Valley Group Tour',
    review: 'We booked a 14-person group tour from Peshawar to Hunza. The Grand Cabin coaster was spotless, our driver was exceptionally skilled on the Karakoram highway, and every hotel was clean with great food. Highly recommended.'
  },
  {
    name: 'Dr. Fatima Noor',
    role: 'Academician',
    trip: 'Dubai Family Holiday & Ticketing',
    review: 'Our UAE visas were processed in two days without any hassle. Dynamic Travel also found us great direct flight rates from Peshawar. Communication on WhatsApp was prompt at every hour.'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Physical Office in Gul Bahar, Peshawar',
    description: 'You can walk into our office, sit down with our travel consultants, verify all flight and hotel details in person, and receive physical vouchers and receipts with complete peace of mind.'
  },
  {
    title: 'Transparent Pricing & No Hidden Surprises',
    description: 'We do not lure travelers with unrealistic prices that double later. We provide transparent quotes clearly itemizing flights, visa fees, hotel categories, transport, and taxes upfront.'
  },
  {
    title: 'Direct WhatsApp & Phone Support',
    description: 'When traveling across foreign airports or mountain roads, you have direct access to our staff on WhatsApp (+92 318 9011775) from departure until your safe return.'
  },
  {
    title: 'Dedicated Pilgrimage & Northern Pakistan Specialists',
    description: 'Years of hands-on coordination in Saudi Arabia for Umrah & Hajj, coupled with intimate knowledge of routes in Swat, Hunza, and Skardu, ensure thoughtful, realistic itineraries.'
  }
];
