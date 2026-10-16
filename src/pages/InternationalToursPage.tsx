import React, { useState } from 'react';
import { Globe, CheckCircle, Calendar, MapPin, Plane, ShieldCheck, ArrowRight } from 'lucide-react';
import { PageId, TourPackage } from '../types';
import { POPULAR_PACKAGES, BUSINESS_INFO } from '../data/travelData';

interface InternationalToursPageProps {
  setCurrentPage: (page: PageId) => void;
  openInquiryModal: (serviceName?: string, dest?: string) => void;
}

export const InternationalToursPage: React.FC<InternationalToursPageProps> = ({
  openInquiryModal,
}) => {
  const internationalList = POPULAR_PACKAGES.filter((p) => p.category === 'international');

  const [activeCountry, setActiveCountry] = useState<string>('all');

  const filteredPackages =
    activeCountry === 'all'
      ? internationalList
      : internationalList.filter((p) =>
          p.destinations.some((d) => d.toLowerCase().includes(activeCountry.toLowerCase()))
        );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block">
          Worldwide Holidays & Guided Tours
        </span>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
          International Tour Packages
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          From the historic minarets and Bosphorus waters of Istanbul to the dazzling skyline of Dubai and tropical rainforests of Malaysia, Dynamic Travel and Tours crafts seamless international holidays departing conveniently from Peshawar and Islamabad.
        </p>
      </div>

      {/* Country Filter Tabs (Interactive Segmented Control) */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4">
        {[
          { label: 'All International Tours', val: 'all' },
          { label: 'Dubai & UAE', val: 'dubai' },
          { label: 'Turkey & Istanbul', val: 'istanbul' },
          { label: 'Malaysia', val: 'malaysia' },
        ].map((tab) => (
          <button
            key={tab.val}
            onClick={() => setActiveCountry(tab.val)}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              activeCountry === tab.val
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {filteredPackages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="relative h-56 w-full bg-slate-100 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-md">
                  {pkg.duration}
                </div>
              </div>

              <div className="p-6">
                <div className="text-xs text-sky-600 font-semibold mb-1">
                  Departs from {pkg.departureCity}
                </div>
                <h2 className="font-display font-bold text-xl text-slate-900 mb-2">
                  {pkg.title}
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {pkg.description}
                </p>

                <div className="space-y-2 mb-5">
                  <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Tour Highlights:
                  </p>
                  {pkg.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-600 space-y-1">
                  <div className="font-semibold text-slate-800">What's Included:</div>
                  <div className="text-[11px] text-slate-500">
                    {pkg.inclusions.join(' • ')}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 block">Pricing Info</span>
                  <span className="text-xs font-medium text-slate-800">Customized Quote</span>
                </div>
                <button
                  onClick={() => openInquiryModal('International Tour Packages', pkg.title)}
                  className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-lg text-xs transition-colors"
                >
                  Inquire Package
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Featured International Destinations Checklist */}
      <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 space-y-6">
        <div>
          <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block mb-1">
            Tailor-Made Overseas Itineraries
          </span>
          <h3 className="font-display font-bold text-2xl text-white">
            Custom International Destinations
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-2xl">
            Don't see your desired country above? We arrange private visas, air tickets, and hotel bookings for destinations worldwide including Baku (Azerbaijan), Thailand (Bangkok & Phuket), Singapore, Egypt, and Europe.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {[
            { country: 'Saudi Arabia', note: 'Umrah + Riyadh & Taif tourism, direct flights' },
            { country: 'United Arab Emirates', note: 'Dubai shopping, desert safaris, Abu Dhabi mosque' },
            { country: 'Turkey', note: 'Istanbul, Cappadocia cave stays, Bosphorus cruises' },
            { country: 'Malaysia', note: 'Kuala Lumpur twin towers, Langkawi beach resorts' },
            { country: 'Azerbaijan', note: 'Baku historic old city, flame towers, snow resorts' },
            { country: 'Thailand', note: 'Bangkok shopping, Phuket & Krabi island hopping' },
            { country: 'Schengen & Europe', note: 'Visa file prep, flight reservation vouchers' },
            { country: 'United Kingdom', note: 'Family visit visa appointment booking & guidance' },
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-800/80 rounded-xl p-4 border border-slate-700">
              <h4 className="font-bold text-sm text-white mb-1">{item.country}</h4>
              <p className="text-xs text-slate-400">{item.note}</p>
            </div>
          ))}
        </div>

        <div className="pt-4 flex flex-wrap items-center gap-4">
          <button
            onClick={() => openInquiryModal('International Tour Packages')}
            className="px-5 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold rounded-lg text-xs transition-colors"
          >
            Request Custom International Itinerary
          </button>
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 hover:text-emerald-300"
          >
            <span>Ask our international desk on WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
