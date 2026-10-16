import React from 'react';
import { Compass, CheckCircle, ShieldCheck, Heart, Clock, MapPin, Users, Phone, ArrowRight } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, POPULAR_PACKAGES } from '../data/travelData';

interface UmrahPageProps {
  setCurrentPage: (page: PageId) => void;
  openInquiryModal: (serviceName?: string, dest?: string) => void;
}

export const UmrahPage: React.FC<UmrahPageProps> = ({ openInquiryModal }) => {
  const umrahList = POPULAR_PACKAGES.filter((p) => p.category === 'umrah');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      {/* Top Banner */}
      <div className="relative rounded-2xl overflow-hidden bg-slate-900 text-white min-h-[380px] flex items-center p-8 sm:p-12 border border-slate-800 shadow-xl">
        <div className="absolute inset-0 z-0">
          <img
            src={BUSINESS_INFO.umrahImage}
            alt="Umrah Holy Kaaba in Makkah"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/50" />
        </div>

        <div className="relative z-10 max-w-2xl space-y-4">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
            Sacred Pilgrimage Services &bull; Gul Bahar, Peshawar
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-white leading-tight">
            Perform Your Umrah with Tranquility & Trust
          </h1>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
            Dynamic Travel and Tours assists you at every step of your sacred journey: electronic visa issuance, carefully selected walking-distance hotels in Makkah and Madinah, comfortable private ground transport, and knowledgeable Ziyarat guides.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => openInquiryModal('Umrah Packages')}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-xl text-xs transition-colors shadow-md"
            >
              Request Umrah Quotation
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="inline-flex items-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold rounded-xl text-xs transition-colors backdrop-blur-sm"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call Us Directly: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Umrah Packages Comparison */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block mb-1">
            Carefully Structured Programs
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Featured Umrah Packages
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Seasonal package rates fluctuate based on Saudi hotel demand, distance to the Haram courtyards, and airline fare classes. Contact our Peshawar desk for exact dates and family group discounts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {umrahList.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                    {pkg.duration}
                  </span>
                  <span className="text-xs text-slate-500">
                    Departs: {pkg.departureCity}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                  {pkg.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {pkg.description}
                </p>

                <div className="space-y-3 mb-6">
                  <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Package Inclusions & Features:
                  </p>
                  {pkg.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-slate-50 rounded-xl space-y-2 text-xs">
                  <div className="font-semibold text-slate-900">Covered Services:</div>
                  <div className="text-slate-600">{pkg.inclusions.join(' • ')}</div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-6">
                <div>
                  <span className="text-[11px] text-slate-400 block">Pricing Inquiries:</span>
                  <span className="text-xs font-medium text-slate-900">Seasonal / Personalized Quote</span>
                </div>
                <button
                  onClick={() => openInquiryModal('Umrah Packages', pkg.title)}
                  className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-lg text-xs transition-colors"
                >
                  Inquire Package Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Umrah Package Tiers (Economy, Standard, Executive, VIP 5-Star) */}
      <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 sm:p-10 space-y-8">
        <div>
          <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block mb-1">
            Custom Accommodation Tiers
          </span>
          <h3 className="font-display font-bold text-2xl text-slate-900">
            Tailor Your Stay by Hotel Proximity
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-2xl">
            Whether you prioritize budget affordability or immediate front-row courtyard access for elderly family members, we configure your itinerary to match:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3">
            <h4 className="font-display font-bold text-base text-slate-900">
              Economy & Shuttle Packages
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Clean 3-star standard hotel properties located within 600m to 900m of the Haram, or featuring 24/7 dedicated shuttle bus service to the main courtyards. Best value for budget-conscious pilgrims.
            </p>
            <div className="text-xs text-slate-500 pt-2 border-t border-slate-100">
              Shuttle frequency: Every 5–10 minutes
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3">
            <h4 className="font-display font-bold text-base text-slate-900">
              4-Star Walking Distance
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Prime locations situated within 250m to 400m easy walking distance to the Haram courtyards. Ideal for families with young children and seniors who prefer walking without waiting for buses.
            </p>
            <div className="text-xs text-slate-500 pt-2 border-t border-slate-100">
              Walk time: 4–6 minutes to prayer lines
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3">
            <h4 className="font-display font-bold text-base text-slate-900">
              VIP 5-Star & Clock Tower
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Direct courtyard or Abraj Al-Bait (Clock Tower) access with panoramic Haram views, international breakfast buffets, and private luxury GMC Yukon airport transfers.
            </p>
            <div className="text-xs text-slate-500 pt-2 border-t border-slate-100">
              Immediate courtyard access via private elevators
            </div>
          </div>
        </div>
      </div>

      {/* Step by Step Guidance */}
      <div className="bg-white rounded-2xl border border-slate-200 p-8 space-y-6">
        <h3 className="font-display font-bold text-xl text-slate-900">
          How Booking Your Umrah Works with Dynamic Travel
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Consultation & Dates', desc: 'Visit our Gul Bahar office or message on WhatsApp with your desired dates and family count.' },
            { step: '02', title: 'Hotel & Flight Selection', desc: 'Review transparent options for Makkah, Madinah hotels, and direct/transit airline tickets.' },
            { step: '03', title: 'Visa & Nusuk Booking', desc: 'We issue your electronic Umrah visa and assist in setting up your Nusuk Rawdah appointments.' },
            { step: '04', title: 'Safe Travel & Support', desc: 'Receive all vouchers, airport transfer contacts, and 24/7 coordinator assistance throughout your stay.' },
          ].map((s, idx) => (
            <div key={idx} className="space-y-2 border-l-2 border-slate-200 pl-4">
              <span className="text-xs font-mono font-bold text-sky-600">{s.step}</span>
              <h4 className="font-bold text-sm text-slate-900">{s.title}</h4>
              <p className="text-xs text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
