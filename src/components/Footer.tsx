import React from 'react';
import { Compass, Phone, Mail, MapPin, MessageSquare, Clock, Globe } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/travelData';

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
  openInquiryModal: (service?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage, openInquiryModal }) => {
  const handleNavClick = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      {/* Top CTA Strip */}
      <div className="border-b border-slate-800/80 bg-slate-900/60 py-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
              Ready to embark on your next journey?
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Speak with our travel consultants in Gul Bahar, Peshawar for Umrah, international vacations, and domestic tours.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold transition-colors"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              <span>Call +92 318 9011775</span>
            </a>
            <button
              onClick={() => openInquiryModal()}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold rounded-lg text-xs transition-colors"
            >
              <span>Submit Travel Inquiry</span>
            </button>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand & Address */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                <Compass className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-lg text-white tracking-tight">
                Dynamic Travel <span className="text-sky-400">& Tours</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Your trusted travel partner in Gul Bahar, Peshawar. Dedicated to facilitating sacred Umrah and Hajj pilgrimages, unforgettable domestic tours across Northern Pakistan, and seamless international travel.
            </p>
            <div className="space-y-2.5 text-xs text-slate-300 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 text-slate-400">
                <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.officeHours}</span>
              </div>
            </div>
          </div>

          {/* Quick Links: Website Pages */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNavClick('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-white transition-colors">
                  Our Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('blog')} className="hover:text-white transition-colors">
                  Travel Blog & Guides
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="hover:text-white transition-colors">
                  Contact & Office Location
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('kadence-guide')} className="text-sky-400 hover:text-sky-300 transition-colors">
                  WordPress Kadence Guide
                </button>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNavClick('umrah')} className="hover:text-white transition-colors">
                  Umrah Packages
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('hajj')} className="hover:text-white transition-colors">
                  Hajj Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('international')} className="hover:text-white transition-colors">
                  International Tours
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('domestic')} className="hover:text-white transition-colors">
                  Domestic Pakistan Tours
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('visa')} className="hover:text-white transition-colors">
                  Visa Assistance
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('flights')} className="hover:text-white transition-colors">
                  Air Ticketing
                </button>
              </li>
            </ul>
          </div>

          {/* Featured Destinations */}
          <div className="space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white">
              Destinations
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNavClick('umrah')} className="hover:text-white transition-colors">
                  Makkah & Madinah
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('domestic')} className="hover:text-white transition-colors">
                  Swat Valley & Malam Jabba
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('domestic')} className="hover:text-white transition-colors">
                  Hunza Valley & Attabad
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('domestic')} className="hover:text-white transition-colors">
                  Skardu & Deosai Plains
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('international')} className="hover:text-white transition-colors">
                  Dubai & Abu Dhabi
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('international')} className="hover:text-white transition-colors">
                  Istanbul, Turkey
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Hairline & Legal Bar */}
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Dynamic Travel and Tours. Gul Bahar, Peshawar, Pakistan. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              <span>Gul Bahar, Peshawar</span>
            </span>
            <span aria-hidden="true">&middot;</span>
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="hover:text-slate-300 transition-colors"
            >
              {BUSINESS_INFO.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
