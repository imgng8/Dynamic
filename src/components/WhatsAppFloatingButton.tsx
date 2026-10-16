import React from 'react';
import { MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/travelData';

export const WhatsAppFloatingButton: React.FC = () => {
  return (
    <a
      href={BUSINESS_INFO.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group focus:outline-none focus:ring-4 focus:ring-emerald-300"
      aria-label="Chat with Dynamic Travel and Tours on WhatsApp"
    >
      <div className="relative">
        <MessageSquare className="w-5 h-5 transition-transform group-hover:scale-110" />
      </div>
      <span className="text-xs font-semibold tracking-wide pr-1 hidden sm:inline">
        WhatsApp Inquiry
      </span>
    </a>
  );
};
