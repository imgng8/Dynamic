import React, { useState } from 'react';
import { Copy, Check, FileCode, Layers, Palette, Layout, ArrowRight } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/travelData';

interface KadenceWordPressGuideProps {
  setCurrentPage: (page: PageId) => void;
}

export const KadenceWordPressGuide: React.FC<KadenceWordPressGuideProps> = ({ setCurrentPage }) => {
  const [copied, setCopied] = useState(false);

  const kadencePromptText = `Website Development Specification for WordPress (Kadence Theme + Kadence Blocks)
Business Name: Dynamic Travel and Tours
Address: Gul Bahar, Peshawar, Pakistan
Email: dynamicairservices.das@gmail.com
Phone & WhatsApp: +92 318 9011775

1. THEME & GLOBAL STYLING SETUP:
• Theme: Kadence Theme (Free/Pro)
• Page Builder: Kadence Blocks (Gutenberg Native)
• Color Palette:
  - Accent / Primary CTA: Sky Blue (#0284C7)
  - Secondary / Subtle Gold: Warm Amber (#D97706)
  - Dark Neutral: Navy Obsidian (#0F172A)
  - Base Background: Crisp White (#FFFFFF) & Soft Cool Slate (#F8FAFC)
  - Body Text: Slate 700 (#334155)
• Typography (Google Fonts in Kadence Customizer):
  - Heading Font: 'Outfit' (Bold / 700)
  - Body Font: 'Plus Jakarta Sans' (400 Regular, 500 Medium)

2. HEADER BUILDER CONFIGURATION (Kadence Header Builder):
• Top Row:
  - Left: Phone (+92 318 9011775 clickable tel:), Email (dynamicairservices.das@gmail.com clickable mailto:)
  - Right: Address "Gul Bahar, Peshawar" + WhatsApp Quick Chat link
• Main Row (3-Zone Contract):
  - Zone 1 (Left): Site Logo & Wordmark "Dynamic Travel and Tours"
  - Zone 2 (Center): Primary Navigation (Home, Services, International, Domestic, Umrah, Hajj, Visa, Air Ticketing, About, Contact, Blog)
  - Zone 3 (Right): Button Block "Plan Your Trip" (opens Kadence Modal or anchors to form)
• Mobile Header: Off-canvas navigation with collapsible menu + direct WhatsApp CTA.

3. HOMEPAGE BLOCKS ARCHITECTURE (Using Kadence Blocks):
• Hero Section:
  - Kadence 'Row Layout' (Full Width, minimum height 620px).
  - Background: Full-width high-resolution destination image with dark overlay gradient (0.7 opacity).
  - Kadence 'Advanced Heading' + Subtitle.
  - Kadence 'Button Group': "Explore Packages" (anchor link) and "Plan Your Trip" (modal trigger).
• Travel Search / Booking Bar:
  - Kadence 'Row Layout' with negative top margin (-60px), white background, rounded-2xl, soft shadow.
  - Kadence 'Advanced Form' block: 5-column grid (Preferred Service dropdown, Destination text input, Date picker, Travelers count, "Request Quotation" submit button).
• Core Services:
  - Kadence 'Row Layout' (4 columns on desktop, 1 on mobile).
  - 8 Kadence 'Info Box' blocks with custom SVG travel icons, title, description, and link to inner service pages.
• Umrah & Hajj Spotlight:
  - Kadence 'Row Layout' with 2 columns (Content & Package Cards left, High-impact Makkah imagery right).
• Domestic & International Tour Showcases:
  - Kadence 'Row Layout' (3 columns) containing Kadence 'Info Box' or Kadence 'Portfolio Grid' showcasing Swat, Hunza, Skardu, Dubai, Istanbul, and Malaysia.
• Why Choose Us & Genuine Reviews:
  - Kadence 'Row Layout' (4 columns) highlighting Peshawar physical office, transparent pricing, and 24/7 WhatsApp guidance.
  - Kadence 'Testimonials' block with authentic customer feedback.
• Lead Capture & Conversion Form:
  - Kadence 'Advanced Form' block with direct email notifications to dynamicairservices.das@gmail.com and WhatsApp redirect.

4. FOOTER BUILDER (Kadence Footer Builder):
• Top Row: Callout banner with clickable phone, email, and "Submit Travel Inquiry" button.
• Middle Row (4 Columns):
  - Col 1: Business bio, address in Gul Bahar, Peshawar, and office hours.
  - Col 2: Navigation Links (All 11 pages).
  - Col 3: Core Services Index (Umrah, Hajj, International, Domestic, Visa, Air Ticketing).
  - Col 4: Featured Destinations list.
• Bottom Row: Copyright text & developer signature.

5. PLUGIN STACK:
• Kadence Theme & Kadence Blocks
• Kadence Custom Fonts (for Outfit & Plus Jakarta Sans if needed)
• Fluent Forms or Kadence Advanced Form (for inquiry submissions)
• Joinchat or WP Social Chat (for floating WhatsApp button to +923189011775)`;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(kadencePromptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block">
          WordPress & Kadence Blueprint
        </span>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
          WordPress Adaptation: Kadence Theme & Kadence Blocks
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          As requested in the project brief ("Optional next step: adapt this prompt for WordPress with the Kadence theme and Kadence Blocks"), here is the complete, ready-to-deploy architecture and copy-paste prompt designed specifically for Gutenberg and the Kadence ecosystem.
        </p>
      </div>

      {/* Copy Prompt Box */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-4 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <h3 className="font-display font-bold text-lg text-white">
              Ready-to-Use Kadence WordPress Prompt
            </h3>
            <p className="text-xs text-slate-400">
              Copy and feed directly into an AI assistant, developer, or agency implementing this in WordPress.
            </p>
          </div>
          <button
            onClick={handleCopyPrompt}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold rounded-lg text-xs transition-colors shrink-0"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-950" />
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Kadence Prompt</span>
              </>
            )}
          </button>
        </div>

        <pre className="bg-slate-950 p-4 rounded-xl text-xs font-mono text-slate-300 overflow-x-auto max-h-80 border border-slate-800 leading-relaxed whitespace-pre-wrap">
          {kadencePromptText}
        </pre>
      </div>

      {/* Kadence Architectural Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
          <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
            <Palette className="w-5 h-5" />
          </div>
          <h3 className="font-display font-bold text-base text-slate-900">
            1. Global Palette & Fonts
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            In WordPress Customizer &gt; General &gt; Colors, set Palette 1 to Navy (#0F172A), Accent 1 to Sky Blue (#0284C7), Accent 2 to Amber Gold (#D97706), and Base to Pure White. Under Typography, select 'Outfit' for H1–H4 and 'Plus Jakarta Sans' for Body text.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
          <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
            <Layout className="w-5 h-5" />
          </div>
          <h3 className="font-display font-bold text-base text-slate-900">
            2. Header Builder Setup
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Use Kadence Header Builder's 3-zone contract: place HTML Contact item in Top Row, Site Identity on Left of Main Row, Primary Navigation in Center, and a Button item linking to #inquiry-form on Right.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
          <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
            <Layers className="w-5 h-5" />
          </div>
          <h3 className="font-display font-bold text-base text-slate-900">
            3. Kadence Block Structure
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Build the homepage with Kadence Row Layout (Hero), Kadence Advanced Form (Floating Search Bar), Kadence Info Box 4-column Grid (Services), and Kadence Post Grid (Northern Tours & Umrah packages).
          </p>
        </div>
      </div>

      {/* Return to website */}
      <div className="flex justify-center pt-4">
        <button
          onClick={() => {
            setCurrentPage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-xl text-xs transition-colors shadow-sm"
        >
          <span>Return to Dynamic Travel Homepage</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
