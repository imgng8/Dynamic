import React from 'react';
import { Compass, CheckCircle, ShieldCheck, Phone, MessageSquare, AlertCircle, Calendar } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/travelData';

interface HajjPageProps {
  setCurrentPage: (page: PageId) => void;
  openInquiryModal: (serviceName?: string, dest?: string) => void;
}

export const HajjPage: React.FC<HajjPageProps> = ({ openInquiryModal }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      {/* Top Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">
          The Fifth Pillar of Islam
        </span>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
          Hajj Services & Pre-Registration Guidance
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Undertaking the sacred Hajj pilgrimage is a life-defining milestone. Dynamic Travel and Tours provides truthful, transparent facilitation for pilgrims from Peshawar and Khyber Pakhtunkhwa, assisting with Ministry of Religious Affairs registration policies, private quota consultations, and hands-on preparation.
        </p>
      </div>

      {/* Official Guidelines & Disclaimer Notice */}
      <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-6 sm:p-8 flex items-start gap-4">
        <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
        <div className="space-y-2">
          <h3 className="font-display font-bold text-base text-amber-950">
            Official Ministry Regulations & Transparent Information
          </h3>
          <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
            In accordance with Pakistan's Ministry of Religious Affairs (MORA) and Saudi Ministry of Hajj & Umrah guidelines, Hajj packages and quotas are strictly regulated each season. Dynamic Travel and Tours strictly avoids publishing speculative rates or unverified guarantees. We provide authentic, licensed consultation, document preparation, and personalized guidance for pilgrims applying under government and authorized private schemes.
          </p>
        </div>
      </div>

      {/* Core Services Offered */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm">
          <div>
            <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
              Pre-Registration & Document Verification
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Assisting prospective pilgrims with passport validity checks, computerized CNIC verification, medical fitness requirements, and official portal pre-registration before official deadlines.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>CNIC & Biometric verification help</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Vaccination card documentation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Family group linkage support</span>
              </li>
            </ul>
          </div>

          <div className="pt-6 border-t border-slate-100 mt-6">
            <button
              onClick={() => openInquiryModal('Hajj Services', 'Hajj Registration Guidance')}
              className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg text-xs transition-colors"
            >
              Consult On Registration
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm">
          <div>
            <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
              Maktab Categories & Tent Consultation
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Understanding the differences between Maktab zones in Mina, air-conditioned European tents, gypsum wall tents, train access, and shuttle services during the Days of Tashreeq.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Mina tent proximity explanations</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Arafat & Muzdalifah logistical plans</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Mashair train vs bus routing comparison</span>
              </li>
            </ul>
          </div>

          <div className="pt-6 border-t border-slate-100 mt-6">
            <button
              onClick={() => openInquiryModal('Hajj Services', 'Maktab Consultation')}
              className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg text-xs transition-colors"
            >
              Inquire Maktab Options
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm">
          <div>
            <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
              Hajj Orientation & Sharia Guidance
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Pre-departure educational workshops held in Peshawar covering the Fara'id, Wajibat, Sunan, and practical crowd management tips for first-time Hujjaj.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-700">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Step-by-step Manasik-e-Hajj walkthrough</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Ihram rules, Qurbani & Rami timings</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Health, hydration & packing checklist</span>
              </li>
            </ul>
          </div>

          <div className="pt-6 border-t border-slate-100 mt-6">
            <button
              onClick={() => openInquiryModal('Hajj Services', 'Hajj Orientation Workshop')}
              className="w-full py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-lg text-xs transition-colors"
            >
              Join Orientation List
            </button>
          </div>
        </div>
      </div>

      {/* Office Visit Callout */}
      <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
            Schedule an In-Person Hajj Consultation
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl">
            Visit our office in Gul Bahar, Peshawar for a face-to-face review with our pilgrimage advisors. We will walk you through official application timelines and ensure your family file is complete.
          </p>
          <div className="text-xs text-slate-400 mt-3 flex items-center gap-3">
            <span>Gul Bahar, Peshawar</span>
            <span aria-hidden="true">&middot;</span>
            <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="text-sky-400 hover:underline">
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-xl text-xs transition-colors flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp Hajj Desk</span>
          </a>
          <button
            onClick={() => openInquiryModal('Hajj Services')}
            className="w-full sm:w-auto px-5 py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold rounded-xl text-xs transition-colors"
          >
            Request Appointment
          </button>
        </div>
      </div>
    </div>
  );
};
