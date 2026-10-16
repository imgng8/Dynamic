import React from 'react';
import { Compass, CheckCircle, ArrowRight, Phone, MessageSquare, ShieldCheck } from 'lucide-react';
import { PageId } from '../types';
import { SERVICES_LIST, BUSINESS_INFO } from '../data/travelData';

interface ServicesPageProps {
  setCurrentPage: (page: PageId) => void;
  openInquiryModal: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ setCurrentPage, openInquiryModal }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block">
          Comprehensive Travel Services
        </span>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
          Reliable Travel, Pilgrimage & Ticketing Solutions
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Dynamic Travel and Tours provides end-to-end travel management from our Gul Bahar, Peshawar office. From sacred Umrah & Hajj arrangements to mountain retreats in Northern Pakistan and worldwide airline ticketing, explore our verified service spectrum below.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICES_LIST.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-2xl border border-slate-200 p-7 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                  <Compass className="w-6 h-6" />
                </div>
                <button
                  onClick={() => openInquiryModal(service.title)}
                  className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg text-xs transition-colors"
                >
                  Request Quote
                </button>
              </div>

              <h2 className="font-display font-bold text-xl text-slate-900 mb-2">
                {service.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                {service.fullDesc}
              </p>

              <div className="space-y-2 mb-6">
                <p className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
                  Service Highlights & Inclusions:
                </p>
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => {
                  setCurrentPage(service.pageTarget);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs font-semibold text-sky-600 hover:text-sky-700 flex items-center gap-1.5"
              >
                <span>{service.ctaLabel}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-emerald-600 font-medium hover:underline"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Assurance Box */}
      <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-sky-600" />
            <span>Honest & Verified Service Pledge</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
            We operate transparently with no fabricated claims or surprise costs. All hotel distance ratings, flight routing options, and visa requirements are reviewed with you in person or on WhatsApp before any booking is confirmed.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-2"
          >
            <Phone className="w-3.5 h-3.5 text-sky-400" />
            <span>Call Our Desk</span>
          </a>
          <button
            onClick={() => openInquiryModal()}
            className="px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-xs font-semibold transition-colors"
          >
            Book Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};
