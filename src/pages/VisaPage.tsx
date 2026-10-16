import React, { useState } from 'react';
import { FileCheck, CheckCircle, Clock, ShieldCheck, Phone, MessageSquare, AlertCircle, ArrowRight } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/travelData';

interface VisaPageProps {
  setCurrentPage: (page: PageId) => void;
  openInquiryModal: (serviceName?: string, dest?: string) => void;
}

export const VisaPage: React.FC<VisaPageProps> = ({ openInquiryModal }) => {
  const [selectedCountry, setSelectedCountry] = useState<string>('uae');

  const visaData = [
    {
      id: 'uae',
      country: 'United Arab Emirates (Dubai)',
      type: 'Tourist & Visit eVisa',
      validity: '30 Days / 60 Days',
      processingTime: '24 to 72 Business Hours',
      requirements: [
        'Color scan of valid passport (minimum 6 months validity)',
        'Passport-size photograph with white background',
        'National ID Card (CNIC) front and back scan',
        'Confirmed return flight ticket reservation',
        'Confirmed hotel booking voucher'
      ],
      notes: 'Available as single-entry or multiple-entry. Immediate electronic delivery to your email or WhatsApp upon approval.'
    },
    {
      id: 'saudi',
      country: 'Saudi Arabia',
      type: 'Umrah & Tourist eVisa',
      validity: '90 Days / 1 Year Multiple Entry (depending on category)',
      processingTime: '24 to 48 Hours',
      requirements: [
        'Scanned passport bio-page (minimum 6 months validity)',
        'Recent digital passport photo with white background',
        'Valid credit/debit card for Saudi portal fee transmission',
        'Nusuk platform registration support'
      ],
      notes: 'Allows performing Umrah, visiting Madinah, and exploring all Saudi tourist regions including Riyadh, Jeddah, and AlUla.'
    },
    {
      id: 'turkey',
      country: 'Turkey',
      type: 'e-Visa / Sticker Visa File Preparation',
      validity: 'Single or Multiple Entry',
      processingTime: 'e-Visa: Instant | Sticker: 10–15 Working Days',
      requirements: [
        'Passport with at least 2 blank pages and 6 months validity',
        'Valid Schengen, US, UK, or Ireland visa/residence permit (for instant e-Visa)',
        'Bank statement covering past 6 months with account maintenance certificate (for sticker visa)',
        'Confirmed flight and hotel itinerary vouchers',
        'Employment letter / Business registration documents (NTN)'
      ],
      notes: 'If you hold an active US/UK/Schengen visa, you qualify for instant online e-Visa. Otherwise, we prepare your complete sticker visa file for Gerry’s / Anatolia center.'
    },
    {
      id: 'malaysia',
      country: 'Malaysia',
      type: 'eVisa (Tourist)',
      validity: '30 Days Stay',
      processingTime: '3 to 5 Working Days',
      requirements: [
        'Original passport scan with 6 months validity',
        'Studio digital passport photo (35mm x 50mm, white background)',
        'Confirmed return flight tickets',
        'Confirmed hotel accommodation proof',
        'Bank statement of past 3 months'
      ],
      notes: '100% digital submission directly processed through Malaysian immigration portal.'
    },
    {
      id: 'azerbaijan',
      country: 'Azerbaijan (Baku)',
      type: 'ASAN Official eVisa',
      validity: '30 Days Single Entry',
      processingTime: 'Standard: 3 Days | Urgent: 3 Hours',
      requirements: [
        'Clear scan of passport information page',
        'Basic travel dates and hotel address in Baku',
        'Valid email address for electronic visa receipt'
      ],
      notes: 'No bank statement required for standard Pakistani passport holders.'
    },
    {
      id: 'schengen-uk',
      country: 'Schengen & United Kingdom',
      type: 'Embassy File Preparation & Appointment Booking',
      validity: 'Based on Embassy Decision',
      processingTime: 'Consultation & File Audit: 2–3 Days',
      requirements: [
        'VFS / Gerry’s biometric appointment scheduling',
        'Tailored day-by-day travel itinerary drafting',
        'Hotel booking confirmations & flight reservation dummy tickets',
        'Cover letter & travel purpose explanation drafting',
        'Review of personal bank statements, tax returns & property proofs'
      ],
      notes: 'Visa approval is solely at the embassy’s discretion. We ensure your documentation is immaculate, preventing easily avoidable submission errors.'
    }
  ];

  const currentVisa = visaData.find((v) => v.id === selectedCountry) || visaData[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block">
          Document Verification & Processing
        </span>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
          Professional Visa Assistance Services
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Avoid costly application mistakes and delays. Dynamic Travel and Tours provides meticulous visa consultancy, official electronic visa issuance, and embassy appointment file preparation from our Gul Bahar, Peshawar office.
        </p>
      </div>

      {/* Interactive Visa Category Selector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Country Selector */}
        <div className="lg:col-span-4 space-y-2">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            Select Destination Country
          </p>
          {visaData.map((v) => (
            <button
              key={v.id}
              onClick={() => setSelectedCountry(v.id)}
              className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                selectedCountry === v.id
                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                  : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
              }`}
            >
              <div>
                <h3 className="font-bold text-sm leading-tight">{v.country}</h3>
                <span className={`text-[11px] block mt-0.5 ${selectedCountry === v.id ? 'text-sky-300' : 'text-slate-500'}`}>
                  {v.type}
                </span>
              </div>
              <ArrowRight className={`w-4 h-4 ${selectedCountry === v.id ? 'text-sky-400' : 'text-slate-400'}`} />
            </button>
          ))}
        </div>

        {/* Right Column: Detailed Document Checklist for Active Country */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-3">
              <div>
                <span className="text-xs text-sky-600 font-semibold uppercase tracking-wider block">
                  Visa Specifications
                </span>
                <h2 className="font-display font-bold text-2xl text-slate-900">
                  {currentVisa.country}
                </h2>
              </div>
              <div className="flex items-center gap-4 text-xs text-slate-600">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-sky-600" />
                  <span>Turnaround: <strong className="text-slate-900">{currentVisa.processingTime}</strong></span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                Mandatory Documentation Checklist:
              </h4>
              <div className="space-y-2.5">
                {currentVisa.requirements.map((req, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl text-xs text-slate-600 leading-relaxed">
              <strong className="text-slate-900 block mb-1">Important Details & Guidelines:</strong>
              {currentVisa.notes}
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
            <span className="text-xs text-slate-500">
              Personalized document audit available at our Peshawar office.
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-medium transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Visa Query</span>
              </a>
              <button
                onClick={() => openInquiryModal('Visa Assistance', currentVisa.country)}
                className="w-full sm:w-auto px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-xs font-medium transition-colors shadow-sm"
              >
                Apply for {currentVisa.country} Visa
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Honest Advisory Notice */}
      <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 flex items-start gap-4">
        <ShieldCheck className="w-6 h-6 text-sky-400 shrink-0 mt-1" />
        <div className="space-y-2">
          <h3 className="font-display font-bold text-lg text-white">
            Transparent Visa Consultation Commitment
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Dynamic Travel and Tours guarantees honest procedural advice. We never guarantee visa approvals, nor do we issue fabricated bank statements or fake invitations. Every file is prepared strictly in compliance with the relevant consulate's requirements to maximize your probability of approval.
          </p>
        </div>
      </div>
    </div>
  );
};
