import React, { useState } from 'react';
import {
  Compass,
  ArrowRight,
  Phone,
  MessageSquare,
  MapPin,
  Calendar,
  Users,
  CheckCircle,
  Globe,
  Plane,
  ShieldCheck,
  Building,
  HeartHandshake,
  Star
} from 'lucide-react';
import { PageId, TourPackage } from '../types';
import {
  BUSINESS_INFO,
  SERVICES_LIST,
  POPULAR_PACKAGES,
  DESTINATIONS_DATA,
  TESTIMONIALS,
  WHY_CHOOSE_US
} from '../data/travelData';

interface HomePageProps {
  setCurrentPage: (page: PageId) => void;
  openInquiryModal: (defaultService?: string, defaultDest?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setCurrentPage, openInquiryModal }) => {
  // Quick Search bar state
  const [quickService, setQuickService] = useState('Umrah Packages');
  const [quickDest, setQuickDest] = useState('');
  const [quickDate, setQuickDate] = useState('');
  const [quickTravelers, setQuickTravelers] = useState('2 Adults');

  const handleQuickSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openInquiryModal(quickService, quickDest);
  };

  const umrahPackages = POPULAR_PACKAGES.filter((p) => p.category === 'umrah');
  const domesticPackages = POPULAR_PACKAGES.filter((p) => p.category === 'domestic');
  const internationalPackages = POPULAR_PACKAGES.filter((p) => p.category === 'international');

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. Hero Section */}
      <section className="relative min-h-[580px] sm:min-h-[640px] flex items-center justify-center bg-slate-900 text-white overflow-hidden">
        {/* Background Image with Measured Contrast Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={BUSINESS_INFO.heroImage}
            alt="Dynamic Travel and Tours Global Destinations"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000"
          />
          {/* Measured Dark Scrim for WCAG AA readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 w-full">
          <div className="max-w-3xl space-y-6">
            {/* Location & Agency Trust Marker */}
            <div className="flex items-center gap-2 text-xs font-medium text-sky-300">
              <MapPin className="w-4 h-4 text-sky-400" />
              <span>Gul Bahar, Peshawar, Pakistan</span>
              <span aria-hidden="true">&middot;</span>
              <span>Trusted Travel Agency</span>
            </div>

            {/* Hero Headline */}
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15] text-balance">
              Explore the World with Seamless Travel & Sacred Journeys
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
              From spiritually profound Umrah & Hajj arrangements to majestic Northern Pakistan expeditions and international holidays, Dynamic Travel and Tours delivers personalized care, verified accommodations, and responsive booking support.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  const target = document.getElementById('featured-packages-section');
                  target?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold rounded-xl text-sm transition-all shadow-md hover:shadow-lg whitespace-nowrap"
              >
                Explore Packages
              </button>
              <button
                onClick={() => openInquiryModal()}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold rounded-xl text-sm transition-all backdrop-blur-sm whitespace-nowrap"
              >
                Plan Your Trip
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="inline-flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white px-3 py-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Travel Search & Inquiry Quick Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-10 sm:-mt-16 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-5 sm:p-7">
          <div className="mb-4">
            <h2 className="font-display text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
              Plan Your Journey with Dynamic Travel
            </h2>
            <p className="text-xs text-slate-500">
              Submit your preferred service, dates, and destination for a swift quotation from our Peshawar office.
            </p>
          </div>

          <form onSubmit={handleQuickSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Preferred Service
              </label>
              <select
                value={quickService}
                onChange={(e) => setQuickService(e.target.value)}
                className="w-full text-xs px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="Umrah Packages">Umrah Packages</option>
                <option value="Hajj Services">Hajj Services</option>
                <option value="International Tour Packages">International Tours</option>
                <option value="Domestic Tours Across Pakistan">Domestic Pakistan Tours</option>
                <option value="Visa Assistance">Visa Assistance</option>
                <option value="Air Ticketing">Air Ticketing</option>
                <option value="Family Holidays">Family Holidays</option>
                <option value="Group Tours">Group Tours</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Destination
              </label>
              <input
                type="text"
                placeholder="e.g. Makkah, Swat, Hunza, Dubai"
                value={quickDest}
                onChange={(e) => setQuickDest(e.target.value)}
                className="w-full text-xs px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Estimated Date
              </label>
              <input
                type="date"
                value={quickDate}
                onChange={(e) => setQuickDate(e.target.value)}
                className="w-full text-xs px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Number of Travelers
              </label>
              <select
                value={quickTravelers}
                onChange={(e) => setQuickTravelers(e.target.value)}
                className="w-full text-xs px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="1 Solo Traveler">1 Solo Traveler</option>
                <option value="2 Adults (Couple)">2 Adults</option>
                <option value="Family (3-5 Persons)">Family (3-5)</option>
                <option value="Group (6+ Persons)">Group (6+)</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 3. Our Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block mb-1">
              End-to-End Travel Solutions
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Our Professional Travel Services
            </h2>
          </div>
          <button
            onClick={() => {
              setCurrentPage('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-semibold text-sky-600 hover:text-sky-700 flex items-center gap-1.5 whitespace-nowrap self-start md:self-end"
          >
            <span>View All Services in Detail</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_LIST.slice(0, 8).map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-md transition-shadow group"
            >
              <div>
                <div className="w-11 h-11 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center mb-4 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-base text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {service.shortDesc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => {
                    setCurrentPage(service.pageTarget);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs font-semibold text-slate-800 hover:text-sky-600 transition-colors"
                >
                  {service.ctaLabel} &rarr;
                </button>
                <button
                  onClick={() => openInquiryModal(service.title)}
                  className="text-[11px] text-sky-600 font-medium hover:underline"
                >
                  Inquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Dedicated Umrah & Hajj Promotional Section */}
      <section id="featured-packages-section" className="bg-slate-900 text-white py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                Sacred Pilgrimage Services
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white">
                Spiritual Peace in Makkah & Madinah
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                Dynamic Travel and Tours understands the sanctity of your pilgrimage. We arrange direct visas, verified hotel reservations close to the Haram boundaries, private air-conditioned GMC / coach transfers, and guided sacred Ziyarat tours with complete transparency.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => {
                    setCurrentPage('umrah');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-lg text-xs transition-colors"
                >
                  View Umrah Packages
                </button>
                <button
                  onClick={() => {
                    setCurrentPage('hajj');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold rounded-lg text-xs transition-colors"
                >
                  Hajj Assistance & Consultations
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-xl aspect-4/3">
                <img
                  src={BUSINESS_INFO.umrahImage}
                  alt="Masjid al-Haram Kaaba Makkah"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                  <div className="text-xs text-white">
                    <span className="font-semibold block text-amber-300">Direct Departures Available</span>
                    <span className="text-slate-300">From Peshawar & Islamabad Airports</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Umrah Package Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {umrahPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-slate-800/90 rounded-xl border border-slate-700 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs text-amber-400 font-semibold">
                      {pkg.duration}
                    </span>
                    <span className="text-xs text-slate-400">
                      Departs: {pkg.departureCity}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                    {pkg.description}
                  </p>

                  <div className="space-y-2 mb-5">
                    {pkg.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-700/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    Pricing: Inquire for Seasonal Rates
                  </span>
                  <button
                    onClick={() => openInquiryModal('Umrah Packages', pkg.title)}
                    className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-lg text-xs transition-colors"
                  >
                    Inquire for Dates & Rates
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Domestic Tours Across Pakistan (Swat, Hunza, Skardu, Naran Kaghan, Murree) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block mb-1">
              Explore Northern Pakistan
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Domestic Tours: Swat, Hunza, Skardu & Beyond
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Tailored mountain excursions departing directly from Peshawar and Islamabad with experienced drivers and verified family hotels.
            </p>
          </div>
          <button
            onClick={() => {
              setCurrentPage('domestic');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-semibold text-sky-600 hover:text-sky-700 flex items-center gap-1.5 whitespace-nowrap self-start md:self-end"
          >
            <span>View All Domestic Packages</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {domesticPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
                  {pkg.duration}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-base text-slate-900 mb-1.5">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-slate-600 mb-3 line-clamp-2">
                    {pkg.description}
                  </p>
                  <div className="space-y-1.5 mb-4">
                    {pkg.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-slate-700">
                        <CheckCircle className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">
                    Departs {pkg.departureCity}
                  </span>
                  <button
                    onClick={() => openInquiryModal('Domestic Tours Across Pakistan', pkg.title)}
                    className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg text-xs transition-colors"
                  >
                    Inquire Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. International Tours Section (Saudi Arabia, Turkey, Dubai, Malaysia) */}
      <section className="bg-slate-50 py-16 px-4 sm:px-6 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block mb-1">
                Global Destinations
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                International Tour Packages
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Explore Dubai, Istanbul, Kuala Lumpur, and Baku with confirmed flights, hotel stays, visa support, and city excursions.
              </p>
            </div>
            <button
              onClick={() => {
                setCurrentPage('international');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-semibold text-sky-600 hover:text-sky-700 flex items-center gap-1.5 whitespace-nowrap self-start md:self-end"
            >
              <span>Explore All International Packages</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {internationalPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
                    {pkg.duration}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-base text-slate-900 mb-1.5">
                      {pkg.title}
                    </h3>
                    <p className="text-xs text-slate-600 mb-3 line-clamp-2">
                      {pkg.description}
                    </p>
                    <div className="space-y-1.5 mb-4">
                      {pkg.highlights.slice(0, 3).map((h, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-slate-700">
                          <CheckCircle className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-500">
                      Season: {pkg.recommendedSeason || 'Flexible'}
                    </span>
                    <button
                      onClick={() => openInquiryModal('International Tour Packages', pkg.title)}
                      className="px-3.5 py-1.5 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-lg text-xs transition-colors"
                    >
                      Request Quotation
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Popular Destinations Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block mb-1">
            Where Will You Go Next?
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Popular Destinations We Serve
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Whether for spiritual fulfillment, mountain adventure, or vibrant international city culture, our Peshawar travel desk arranges your complete journey.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {DESTINATIONS_DATA.slice(0, 6).map((dest, i) => (
            <div
              key={i}
              onClick={() => openInquiryModal('Custom Travel', dest.name)}
              className="group cursor-pointer rounded-xl overflow-hidden border border-slate-200 bg-white hover:border-sky-500 transition-all text-left"
            >
              <div className="h-28 w-full overflow-hidden bg-slate-100">
                <img
                  src={dest.image}
                  alt={dest.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3">
                <div className="text-[10px] text-sky-600 font-semibold uppercase tracking-wider">
                  {dest.category}
                </div>
                <h3 className="font-display font-bold text-xs text-slate-900 group-hover:text-sky-600 transition-colors">
                  {dest.name}
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                  {dest.country}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Why Choose Us Section */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block mb-1">
              Honest Guidance & Reliable Coordination
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Why Travel with Dynamic Travel and Tours?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Based in Gul Bahar, Peshawar, we pride ourselves on authentic customer care, verified hotel bookings, and attentive personal travel guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-sm text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Genuine Customer Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block mb-1">
            Real Traveler Feedback
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            What Our Travelers Say
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Verified experiences from travelers who booked their Umrah, domestic tours, and international flights through Dynamic Travel and Tours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-700 italic leading-relaxed mb-4">
                  "{t.review}"
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100">
                <p className="text-xs font-bold text-slate-900">{t.name}</p>
                <p className="text-[11px] text-slate-500">{t.role} &bull; {t.trip}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-6">
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-8 sm:p-12 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl space-y-3 text-center md:text-left">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
              Let's Plan Your Next Unforgettable Journey
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Get personalized itinerary recommendations, confirmed flight seats, and genuine guidance from our travel experts in Peshawar.
            </p>
            <div className="text-xs text-slate-400 flex flex-wrap items-center justify-center md:justify-start gap-4 pt-1">
              <span>Office: Gul Bahar, Peshawar</span>
              <span aria-hidden="true">&middot;</span>
              <span>Direct Calling & WhatsApp</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="w-full sm:w-auto px-5 py-3 bg-white text-slate-900 hover:bg-slate-100 font-semibold rounded-xl text-xs transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-sky-600" />
              <span>Call +92 318 9011775</span>
            </a>
            <button
              onClick={() => openInquiryModal()}
              className="w-full sm:w-auto px-6 py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold rounded-xl text-xs transition-colors whitespace-nowrap shadow-sm"
            >
              Submit Custom Inquiry
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
