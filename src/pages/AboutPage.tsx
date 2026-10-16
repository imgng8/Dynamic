import React from 'react';
import { Compass, MapPin, Phone, Mail, Clock, ShieldCheck, HeartHandshake, Users, ArrowRight } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, WHY_CHOOSE_US } from '../data/travelData';

interface AboutPageProps {
  setCurrentPage: (page: PageId) => void;
  openInquiryModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setCurrentPage, openInquiryModal }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      {/* Hero / About Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block">
          About Our Agency
        </span>
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
          Dynamic Travel and Tours
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Founded on principles of unwavering integrity, sincere hospitality, and dependable travel coordination, Dynamic Travel and Tours serves travelers, families, and pilgrims across Peshawar, Khyber Pakhtunkhwa, and Pakistan.
        </p>
      </div>

      {/* Story & Philosophy Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-5 text-sm text-slate-700 leading-relaxed">
          <h2 className="font-display font-bold text-2xl text-slate-900 tracking-tight">
            Rooted in Gul Bahar, Peshawar — Serving Worldwide Journeys
          </h2>
          <p>
            At Dynamic Travel and Tours, travel is not merely about issuing boarding passes or hotel keys. It is about facilitating deeply meaningful moments: standing before the Kaaba in tears of gratitude, showing your children the pristine alpine peaks of Hunza and Skardu, or exploring international cities with total peace of mind.
          </p>
          <p>
            Operating out of our accessible office in Gul Bahar, Peshawar, we bridge the gap between complex travel regulations and smooth execution. Our experienced team takes the time to sit with every client, review hotel proximity with honest distance assessments, and structure realistic itineraries that honor your budget and time.
          </p>
          <div className="pt-2">
            <h3 className="font-bold text-slate-900 text-sm mb-2">Our Operating Commitments:</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-sky-600 font-bold">&bull;</span>
                <span><strong>No Hidden Expenses:</strong> Complete breakdowns provided prior to payment.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-600 font-bold">&bull;</span>
                <span><strong>Pilgrim-First Ethos:</strong> Dedicated guidance throughout sacred Umrah & Hajj journeys.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-600 font-bold">&bull;</span>
                <span><strong>Responsive Communication:</strong> Direct mobile and WhatsApp connectivity at all stages.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg">Peshawar Travel Desk</h3>
              <p className="text-xs text-slate-400">Gul Bahar, Peshawar, Pakistan</p>
            </div>
          </div>

          <div className="space-y-3 text-xs text-slate-300 pt-2 border-t border-slate-800">
            <div className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <span className="block text-slate-400 text-[11px]">Direct Telephone & WhatsApp</span>
                <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="text-white font-medium hover:underline">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <span className="block text-slate-400 text-[11px]">Official Email</span>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-white font-medium hover:underline">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <span className="block text-slate-400 text-[11px]">Visiting Hours</span>
                <span>{BUSINESS_INFO.officeHours}</span>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => openInquiryModal()}
              className="w-full py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold rounded-lg text-xs transition-colors"
            >
              Plan Travel with Us
            </button>
          </div>
        </div>
      </div>

      {/* Values & Principles */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block mb-1">
            Our Guiding Values
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Built on Integrity, Reliability & Care
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <h3 className="font-display font-bold text-sm text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Direct Contact Invitation */}
      <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-display font-bold text-xl text-slate-900">
            Have Questions About an Upcoming Trip?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
            Whether inquiring about family holiday options in Northern Pakistan, visa processing times, or Umrah schedules, we are here to assist.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => {
              setCurrentPage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg text-xs transition-colors"
          >
            Contact Details & Map
          </button>
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-lg text-xs transition-colors"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
};
