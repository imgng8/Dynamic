import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { InternationalToursPage } from './pages/InternationalToursPage';
import { DomesticToursPage } from './pages/DomesticToursPage';
import { UmrahPage } from './pages/UmrahPage';
import { HajjPage } from './pages/HajjPage';
import { VisaPage } from './pages/VisaPage';
import { AirTicketingPage } from './pages/AirTicketingPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { KadenceWordPressGuide } from './pages/KadenceWordPressGuide';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalService, setModalService] = useState('Umrah Packages');
  const [modalDest, setModalDest] = useState('');

  // Synchronize hash with page state for deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home',
        'services',
        'international',
        'domestic',
        'umrah',
        'hajj',
        'visa',
        'flights',
        'about',
        'contact',
        'blog',
        'kadence-guide',
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handlePageChange = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
  };

  const openInquiryModal = (serviceName = 'Umrah Packages', destination = '') => {
    setModalService(serviceName);
    setModalDest(destination);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Primary Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={handlePageChange}
        openInquiryModal={openInquiryModal}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            setCurrentPage={handlePageChange}
            openInquiryModal={openInquiryModal}
          />
        )}
        {currentPage === 'services' && (
          <ServicesPage
            setCurrentPage={handlePageChange}
            openInquiryModal={openInquiryModal}
          />
        )}
        {currentPage === 'international' && (
          <InternationalToursPage
            setCurrentPage={handlePageChange}
            openInquiryModal={openInquiryModal}
          />
        )}
        {currentPage === 'domestic' && (
          <DomesticToursPage
            setCurrentPage={handlePageChange}
            openInquiryModal={openInquiryModal}
          />
        )}
        {currentPage === 'umrah' && (
          <UmrahPage
            setCurrentPage={handlePageChange}
            openInquiryModal={openInquiryModal}
          />
        )}
        {currentPage === 'hajj' && (
          <HajjPage
            setCurrentPage={handlePageChange}
            openInquiryModal={openInquiryModal}
          />
        )}
        {currentPage === 'visa' && (
          <VisaPage
            setCurrentPage={handlePageChange}
            openInquiryModal={openInquiryModal}
          />
        )}
        {currentPage === 'flights' && (
          <AirTicketingPage
            setCurrentPage={handlePageChange}
            openInquiryModal={openInquiryModal}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            setCurrentPage={handlePageChange}
            openInquiryModal={() => openInquiryModal()}
          />
        )}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'blog' && (
          <BlogPage
            setCurrentPage={handlePageChange}
            openInquiryModal={openInquiryModal}
          />
        )}
        {currentPage === 'kadence-guide' && (
          <KadenceWordPressGuide setCurrentPage={handlePageChange} />
        )}
      </main>

      {/* Inquiry & Quotation Modal */}
      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialService={modalService}
        initialDestination={modalDest}
      />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloatingButton />

      {/* Footer */}
      <Footer
        setCurrentPage={handlePageChange}
        openInquiryModal={openInquiryModal}
      />
    </div>
  );
}
