import React, { useState } from 'react';
import { Phone, Mail, MapPin, Menu, X, Compass, ChevronDown, MessageSquare } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/travelData';

interface NavbarProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  openInquiryModal: (defaultService?: string, defaultDest?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
  openInquiryModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleNavClick = (page: PageId) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top Utility Bar with Real Contact Links */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-6 flex-wrap">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
              title="Call Dynamic Travel and Tours directly"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
              title="Email Dynamic Travel and Tours"
            >
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>{BUSINESS_INFO.email}</span>
            </a>
            <span className="hidden lg:flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>{BUSINESS_INFO.address}</span>
            </span>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <span className="hidden sm:inline text-slate-400 text-[11px]">
              Office: Gul Bahar, Peshawar
            </span>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation: Top Bar Contract: 3 zones separated by gap-8 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand title, one line wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left group whitespace-nowrap shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-sky-400 border border-slate-800 shadow-sm transition-transform group-hover:scale-105">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="font-display font-bold text-lg text-slate-900 tracking-tight block leading-tight">
                Dynamic Travel <span className="text-sky-600">& Tours</span>
              </span>
              <span className="text-[11px] text-slate-500 font-medium tracking-wide uppercase block">
                Peshawar, Pakistan
              </span>
            </div>
          </button>

          {/* Zone 2: 4-5 concise single-line nav links with dropdown */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">
            <button
              onClick={() => handleNavClick('home')}
              className={`hover:text-sky-600 transition-colors whitespace-nowrap shrink-0 py-1 ${
                currentPage === 'home' ? 'text-sky-600 font-semibold' : ''
              }`}
            >
              Home
            </button>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className={`flex items-center gap-1 hover:text-sky-600 transition-colors whitespace-nowrap shrink-0 py-1 ${
                  ['services', 'umrah', 'hajj', 'international', 'domestic', 'visa', 'flights'].includes(currentPage)
                    ? 'text-sky-600 font-semibold'
                    : ''
                }`}
              >
                <span>Services & Tours</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {servicesDropdownOpen && (
                <div
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 text-xs"
                >
                  <button
                    onClick={() => handleNavClick('services')}
                    className="w-full text-left px-4 py-2 hover:bg-slate-50 font-medium text-slate-900 block"
                  >
                    All Services Overview
                  </button>
                  <div className="border-t border-slate-100 my-1"></div>
                  <button
                    onClick={() => handleNavClick('umrah')}
                    className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700 flex items-center justify-between"
                  >
                    <span>Umrah Packages</span>
                    <span className="text-[10px] text-amber-700 font-medium">Sacred</span>
                  </button>
                  <button
                    onClick={() => handleNavClick('hajj')}
                    className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700"
                  >
                    Hajj Services & Pre-Registration
                  </button>
                  <button
                    onClick={() => handleNavClick('international')}
                    className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700"
                  >
                    International Tours (Dubai, Turkey, Malaysia)
                  </button>
                  <button
                    onClick={() => handleNavClick('domestic')}
                    className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700"
                  >
                    Domestic Tours (Swat, Hunza, Skardu)
                  </button>
                  <button
                    onClick={() => handleNavClick('visa')}
                    className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700"
                  >
                    Visa Assistance & Consultation
                  </button>
                  <button
                    onClick={() => handleNavClick('flights')}
                    className="w-full text-left px-4 py-2 hover:bg-slate-50 text-slate-700"
                  >
                    Air Ticketing (Domestic & International)
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('umrah')}
              className={`hover:text-sky-600 transition-colors whitespace-nowrap shrink-0 py-1 ${
                currentPage === 'umrah' ? 'text-sky-600 font-semibold' : ''
              }`}
            >
              Umrah
            </button>

            <button
              onClick={() => handleNavClick('domestic')}
              className={`hover:text-sky-600 transition-colors whitespace-nowrap shrink-0 py-1 ${
                currentPage === 'domestic' ? 'text-sky-600 font-semibold' : ''
              }`}
            >
              Pakistan Tours
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`hover:text-sky-600 transition-colors whitespace-nowrap shrink-0 py-1 ${
                currentPage === 'about' ? 'text-sky-600 font-semibold' : ''
              }`}
            >
              About Us
            </button>

            <button
              onClick={() => handleNavClick('blog')}
              className={`hover:text-sky-600 transition-colors whitespace-nowrap shrink-0 py-1 ${
                currentPage === 'blog' ? 'text-sky-600 font-semibold' : ''
              }`}
            >
              Blog
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`hover:text-sky-600 transition-colors whitespace-nowrap shrink-0 py-1 ${
                currentPage === 'contact' ? 'text-sky-600 font-semibold' : ''
              }`}
            >
              Contact Us
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => openInquiryModal()}
              className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0 shadow-sm"
            >
              Plan Your Trip
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu covering all 11 pages */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-5 py-4 space-y-1 shadow-lg max-h-[85vh] overflow-y-auto">
          <div className="pb-2 border-b border-slate-100">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Website Pages
            </p>
            <button
              onClick={() => handleNavClick('home')}
              className={`block w-full text-left py-2 text-sm font-medium ${
                currentPage === 'home' ? 'text-sky-600 font-semibold' : 'text-slate-800'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className={`block w-full text-left py-2 text-sm font-medium ${
                currentPage === 'services' ? 'text-sky-600 font-semibold' : 'text-slate-800'
              }`}
            >
              Services Overview
            </button>
            <button
              onClick={() => handleNavClick('international')}
              className={`block w-full text-left py-2 text-sm font-medium ${
                currentPage === 'international' ? 'text-sky-600 font-semibold' : 'text-slate-800'
              }`}
            >
              International Tours
            </button>
            <button
              onClick={() => handleNavClick('domestic')}
              className={`block w-full text-left py-2 text-sm font-medium ${
                currentPage === 'domestic' ? 'text-sky-600 font-semibold' : 'text-slate-800'
              }`}
            >
              Domestic Tours (Swat, Hunza, Skardu)
            </button>
            <button
              onClick={() => handleNavClick('umrah')}
              className={`block w-full text-left py-2 text-sm font-medium ${
                currentPage === 'umrah' ? 'text-sky-600 font-semibold' : 'text-slate-800'
              }`}
            >
              Umrah Packages
            </button>
            <button
              onClick={() => handleNavClick('hajj')}
              className={`block w-full text-left py-2 text-sm font-medium ${
                currentPage === 'hajj' ? 'text-sky-600 font-semibold' : 'text-slate-800'
              }`}
            >
              Hajj Services
            </button>
            <button
              onClick={() => handleNavClick('visa')}
              className={`block w-full text-left py-2 text-sm font-medium ${
                currentPage === 'visa' ? 'text-sky-600 font-semibold' : 'text-slate-800'
              }`}
            >
              Visa Services
            </button>
            <button
              onClick={() => handleNavClick('flights')}
              className={`block w-full text-left py-2 text-sm font-medium ${
                currentPage === 'flights' ? 'text-sky-600 font-semibold' : 'text-slate-800'
              }`}
            >
              Air Ticketing
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`block w-full text-left py-2 text-sm font-medium ${
                currentPage === 'about' ? 'text-sky-600 font-semibold' : 'text-slate-800'
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`block w-full text-left py-2 text-sm font-medium ${
                currentPage === 'contact' ? 'text-sky-600 font-semibold' : 'text-slate-800'
              }`}
            >
              Contact Us
            </button>
            <button
              onClick={() => handleNavClick('blog')}
              className={`block w-full text-left py-2 text-sm font-medium ${
                currentPage === 'blog' ? 'text-sky-600 font-semibold' : 'text-slate-800'
              }`}
            >
              Travel Blog & Guides
            </button>
            <button
              onClick={() => handleNavClick('kadence-guide')}
              className={`block w-full text-left py-2 text-xs font-medium text-slate-500 hover:text-sky-600 ${
                currentPage === 'kadence-guide' ? 'text-sky-600 font-semibold' : ''
              }`}
            >
              WordPress / Kadence Export Guide
            </button>
          </div>

          <div className="pt-3 space-y-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneClean}`}
              className="flex items-center gap-2 py-2 text-xs font-medium text-slate-700"
            >
              <Phone className="w-4 h-4 text-sky-600" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
