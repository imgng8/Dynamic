import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, ShieldCheck, User } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/travelData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Travel Inquiry',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your full name';
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your contact phone or WhatsApp number';
    } else if (formData.phone.replace(/\D/g, '').length < 8) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (formData.email && !formData.email.includes('@')) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please share your travel questions or requirements';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const getWhatsAppMessageUrl = () => {
    const text = `Assalam-o-Alaikum Dynamic Travel and Tours,
I have sent a message through your website contact desk:
• Name: ${formData.name}
• Contact: ${formData.phone}
• Email: ${formData.email || 'N/A'}
• Subject: ${formData.subject}
• Message: ${formData.message}`;

    return `https://wa.me/923189011775?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block">
          Get In Touch & Visit Us
        </span>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
          Contact Dynamic Travel and Tours
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Have an inquiry about Umrah arrangements, domestic Pakistan vacations, or international flight bookings? Call our phone line, connect on WhatsApp, or visit our office in Gul Bahar, Peshawar.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Cards Column (Left) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900 text-white rounded-2xl p-7 border border-slate-800 space-y-6 shadow-sm">
            <h2 className="font-display font-bold text-xl text-white">
              Office Information
            </h2>

            <div className="space-y-4 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">
                    Physical Address
                  </span>
                  <p className="text-sm font-medium text-white mt-0.5">
                    {BUSINESS_INFO.address}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Easily accessible in the Gul Bahar commercial area of Peshawar.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">
                    Direct Phone Line
                  </span>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneClean}`}
                    className="text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors block mt-0.5"
                    title="Click to call directly"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Direct calling available during working hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">
                    WhatsApp Inquiry Line
                  </span>
                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors block mt-0.5"
                    title="Chat on WhatsApp"
                  >
                    {BUSINESS_INFO.phone} (WhatsApp)
                  </a>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Fast responses for quotes, flight inquiries, and visas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">
                    Official Email
                  </span>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="text-xs sm:text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors block mt-0.5 break-all"
                    title="Click to email"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    For corporate proposals and group itineraries.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">
                    Working Hours
                  </span>
                  <p className="text-xs text-white mt-0.5 leading-relaxed">
                    {BUSINESS_INFO.officeHours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick WhatsApp Action Card */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 space-y-3">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>Instant Chat with our Travel Desk</span>
            </div>
            <p className="text-xs text-emerald-700 leading-relaxed">
              Prefer chatting on WhatsApp? Click below to start a conversation directly with our travel consultants in Peshawar.
            </p>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Open WhatsApp (+92 318 9011775)</span>
            </a>
          </div>
        </div>

        {/* Working Contact & Inquiry Form (Right) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          {submitted ? (
            <div className="py-12 text-center space-y-5">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl text-slate-900">
                  Message Successfully Sent!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your inquiry regarding <strong className="text-slate-900">{formData.subject}</strong> has been received by Dynamic Travel and Tours.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={getWhatsAppMessageUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-lg text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Message Copy to WhatsApp</span>
                </a>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      phone: '',
                      email: '',
                      subject: 'General Travel Inquiry',
                      message: '',
                    });
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg text-xs transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h3 className="font-display font-bold text-xl text-slate-900">
                  Send Us a Direct Message
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your details below and our team will get back to you promptly.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Tariq Khan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full text-xs px-3.5 py-2.5 bg-slate-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-800 ${
                      errors.name ? 'border-rose-400 bg-rose-50/40' : 'border-slate-200'
                    }`}
                  />
                  {errors.name && <p className="text-[11px] text-rose-500 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / WhatsApp Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +92 318 9011775"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full text-xs px-3.5 py-2.5 bg-slate-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-800 ${
                      errors.phone ? 'border-rose-400 bg-rose-50/40' : 'border-slate-200'
                    }`}
                  />
                  {errors.phone && <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. user@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full text-xs px-3.5 py-2.5 bg-slate-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-800 ${
                      errors.email ? 'border-rose-400 bg-rose-50/40' : 'border-slate-200'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Subject / Service Area
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-800 font-medium"
                  >
                    <option value="Umrah Package Inquiry">Umrah Package Inquiry</option>
                    <option value="Hajj Services Consultation">Hajj Services Consultation</option>
                    <option value="Domestic Pakistan Tour (Swat, Hunza, Skardu)">Domestic Pakistan Tour</option>
                    <option value="International Tour (Dubai, Turkey, Malaysia)">International Tour Package</option>
                    <option value="Visa Assistance Service">Visa Assistance Service</option>
                    <option value="Air Ticketing Quote">Air Ticketing (Flights)</option>
                    <option value="General Travel Inquiry">General Travel Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Message or Travel Requirements <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Share details regarding your travel dates, group size, preferred airlines, or hotel distance..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full text-xs px-3.5 py-2.5 bg-slate-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-800 resize-none ${
                    errors.message ? 'border-rose-400 bg-rose-50/40' : 'border-slate-200'
                  }`}
                ></textarea>
                {errors.message && <p className="text-[11px] text-rose-500 mt-1">{errors.message}</p>}
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  Gul Bahar, Peshawar &bull; Dynamic Travel and Tours
                </span>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg text-xs transition-colors flex items-center gap-2 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
