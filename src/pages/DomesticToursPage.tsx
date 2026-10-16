import React, { useState } from 'react';
import { Mountain, CheckCircle, MapPin, Calendar, Compass, ShieldCheck, ArrowRight } from 'lucide-react';
import { PageId, TourPackage } from '../types';
import { POPULAR_PACKAGES, BUSINESS_INFO } from '../data/travelData';

interface DomesticToursPageProps {
  setCurrentPage: (page: PageId) => void;
  openInquiryModal: (serviceName?: string, dest?: string) => void;
}

export const DomesticToursPage: React.FC<DomesticToursPageProps> = ({
  openInquiryModal,
}) => {
  const domesticList = POPULAR_PACKAGES.filter((p) => p.category === 'domestic');
  const [selectedDestination, setSelectedDestination] = useState<string>('all');

  const filteredList =
    selectedDestination === 'all'
      ? domesticList
      : domesticList.filter((p) =>
          p.title.toLowerCase().includes(selectedDestination.toLowerCase()) ||
          p.destinations.some((d) => d.toLowerCase().includes(selectedDestination.toLowerCase()))
        );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block">
          Discover Pakistan's Crown Jewels
        </span>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
          Domestic Tours: Swat, Hunza, Skardu, Naran & Murree
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Experience the majestic alpine peaks, turquoise rivers, and serene valleys of Northern Pakistan. Dynamic Travel and Tours arranges private family road trips, group excursions, and luxury 4x4 mountain tours with skilled drivers departing directly from Peshawar and Islamabad.
        </p>
      </div>

      {/* Destination Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4">
        {[
          { label: 'All Northern Tours', val: 'all' },
          { label: 'Hunza Valley', val: 'hunza' },
          { label: 'Skardu & Deosai', val: 'skardu' },
          { label: 'Swat & Malam Jabba', val: 'swat' },
        ].map((tab) => (
          <button
            key={tab.val}
            onClick={() => setSelectedDestination(tab.val)}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
              selectedDestination === tab.val
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
        {filteredList.map((pkg) => (
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
                  Departs: {pkg.departureCity} &bull; Season: {pkg.recommendedSeason}
                </div>
                <h2 className="font-display font-bold text-xl text-slate-900 mb-2">
                  {pkg.title}
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {pkg.description}
                </p>

                <div className="space-y-2 mb-5">
                  <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Package Highlights:
                  </p>
                  {pkg.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-600 space-y-1">
                  <div className="font-semibold text-slate-800">Inclusions:</div>
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
                  <span className="text-xs font-medium text-slate-800">Inquire for Family / Group Quote</span>
                </div>
                <button
                  onClick={() => openInquiryModal('Domestic Tours Across Pakistan', pkg.title)}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg text-xs transition-colors"
                >
                  Inquire Package
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Northern Pakistan Valley Guide Breakdown */}
      <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 sm:p-10 space-y-8">
        <div>
          <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block mb-1">
            Top Valleys in Pakistan
          </span>
          <h3 className="font-display font-bold text-2xl text-slate-900">
            Featured Destinations for Your Next Trip
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-2xl">
            Each region offers unique geography and cultural heritage. Here is what makes each destination extraordinary:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
            <h4 className="font-display font-bold text-base text-slate-900">
              Swat Valley & Malam Jabba
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Convenient 3-hour drive from Peshawar via the Swat Motorway. Perfect for short family breaks, skiing or chairlifts at Malam Jabba, and scenic pine-forest trout fishing in Kalam and Mahodand Lake.
            </p>
            <div className="text-[11px] font-medium text-sky-600">
              Ideal duration: 3 to 5 Days
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
            <h4 className="font-display font-bold text-base text-slate-900">
              Hunza Valley & Khunjerab
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Famed for apricot blossoms, peaceful valleys, and the historic Baltit and Altit Forts. Boat on turquoise Attabad Lake and take the world's highest paved road to the China Border at Khunjerab Pass.
            </p>
            <div className="text-[11px] font-medium text-sky-600">
              Ideal duration: 7 to 9 Days
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
            <h4 className="font-display font-bold text-base text-slate-900">
              Skardu & Deosai National Park
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              The mountain kingdom. Home to Upper Kachura Lake, Shangrila Resort, cold desert dunes at Katpana, and the vast, breathtaking wildflower plains of Deosai Plateau (Land of Giants).
            </p>
            <div className="text-[11px] font-medium text-sky-600">
              Ideal duration: 8 to 10 Days
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
            <h4 className="font-display font-bold text-base text-slate-900">
              Naran Kaghan & Saif-ul-Malook
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              A classic summer destination alongside the rushing waters of Kunhar River. Ride mountain jeeps up to fairy-tale Lake Saif-ul-Malook and cross over Babusar Top toward Gilgit.
            </p>
            <div className="text-[11px] font-medium text-sky-600">
              Ideal duration: 4 to 5 Days (May to October)
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
            <h4 className="font-display font-bold text-base text-slate-900">
              Murree & Galiyat
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Closest hill station retreat for a refreshing weekend break. Explore Mall Road, Ayubia pipeline walking track, Nathia Gali pine hills, and panoramic views of Kashmir valleys.
            </p>
            <div className="text-[11px] font-medium text-sky-600">
              Ideal duration: 2 to 3 Days (Year-round)
            </div>
          </div>

          <div className="bg-sky-50 border border-sky-200 p-5 rounded-xl space-y-3 flex flex-col justify-between">
            <div>
              <h4 className="font-display font-bold text-base text-slate-900">
                Custom Family or Corporate Trip?
              </h4>
              <p className="text-xs text-slate-600 mt-1">
                Tell us your group size and budget. We arrange private Toyota Prado / Hiace, hotel bookings, and a dedicated tour manager from Peshawar.
              </p>
            </div>
            <button
              onClick={() => openInquiryModal('Domestic Tours Across Pakistan', 'Custom Northern Pakistan Tour')}
              className="w-full py-2 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-lg text-xs transition-colors"
            >
              Request Custom Itinerary
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
