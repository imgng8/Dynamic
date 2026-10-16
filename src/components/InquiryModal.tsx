import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, MessageSquare, Phone, Calendar, User, Mail, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/travelData';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialDestination?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Umrah Packages',
  initialDestination = '',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: initialService,
    destination: initialDestination,
    departureDate: '',
    returnDate: '',
    travelers: '2 Adults',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        service: initialService || prev.service,
        destination: initialDestination || prev.destination,
      }));
      setSubmitted(false);
      setErrors({});
    }
  }, [isOpen, initialService, initialDestination]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your full name';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your contact phone number';
    } else if (formData.phone.replace(/\D/g, '').length < 9) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (formData.email && !formData.email.includes('@')) {
      newErrors.email = 'Please enter a valid email address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const getWhatsAppLink = () => {
    const text = `Assalam-o-Alaikum Dynamic Travel and Tours,
I would like to inquire about a travel booking:
• Full Name: ${formData.fullName}
• Phone: ${formData.phone}
• Email: ${formData.email || 'Not specified'}
• Service: ${formData.service}
• Destination: ${formData.destination || 'Open consultation'}
• Preferred Departure: ${formData.departureDate || 'Flexible'}
• Return Date: ${formData.returnDate || 'Flexible'}
• Travelers: ${formData.travelers}
• Notes / Specific Requirements: ${formData.notes || 'None'}

Please share package availability, itinerary details, and quotation. Thank you!`;

    return `https://wa.me/923189011775?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Modal Header */}
        <div className="bg-slate-900 px-6 py-4 flex items-center justify-between text-white border-b border-slate-800">
          <div>
            <h3 className="font-display font-bold text-base sm:text-lg">
              {submitted ? 'Inquiry Submitted' : 'Request Travel Quotation'}
            </h3>
            <p className="text-xs text-slate-300">
              Dynamic Travel and Tours &bull; Gul Bahar, Peshawar
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="space-y-5 text-center py-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-display text-xl font-bold text-slate-900">
                  Thank You, {formData.fullName}!
                </h4>
                <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                  Your travel inquiry for <span className="font-semibold text-slate-900">{formData.service}</span> has been recorded. Our travel desk in Gul Bahar, Peshawar will review your dates and reach out promptly.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left text-xs space-y-2 text-slate-700">
                <div className="flex justify-between">
                  <span className="text-slate-500">Service:</span>
                  <span className="font-medium text-slate-900">{formData.service}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Destination:</span>
                  <span className="font-medium text-slate-900">{formData.destination || 'Flexible'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Travelers:</span>
                  <span className="font-medium text-slate-900">{formData.travelers}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Contact Number:</span>
                  <span className="font-medium text-slate-900">{formData.phone}</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl text-sm transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Directly to WhatsApp (+92 318 9011775)</span>
                </a>
                <button
                  onClick={onClose}
                  className="w-full py-2.5 text-xs text-slate-500 hover:text-slate-800 transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Select Service <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full text-xs px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-800 font-medium"
                  >
                    <option value="Umrah Packages">Umrah Packages</option>
                    <option value="Hajj Services">Hajj Services</option>
                    <option value="International Tour Packages">International Tour Packages</option>
                    <option value="Domestic Tours Across Pakistan">Domestic Tours (Northern Pakistan)</option>
                    <option value="Visa Assistance">Visa Assistance Services</option>
                    <option value="Air Ticketing">Air Ticketing (Domestic & International)</option>
                    <option value="Family Holidays">Family Holiday Package</option>
                    <option value="Group Tours">Group & Corporate Tour</option>
                    <option value="Custom Travel">Customized Itinerary</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Target Destination
                  </label>
                  <div className="relative">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Makkah, Swat, Hunza, Dubai, Istanbul"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full text-xs pl-8 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-800"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Departure Date
                  </label>
                  <input
                    type="date"
                    value={formData.departureDate}
                    onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
                    className="w-full text-xs px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Return Date
                  </label>
                  <input
                    type="date"
                    value={formData.returnDate}
                    onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
                    className="w-full text-xs px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Travelers
                  </label>
                  <select
                    value={formData.travelers}
                    onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                    className="w-full text-xs px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-800"
                  >
                    <option value="1 Solo Traveler">1 Solo Traveler</option>
                    <option value="2 Adults (Couple)">2 Adults (Couple)</option>
                    <option value="Family (2 Adults, 1-2 Children)">Family (2 Adults, 1-2 Children)</option>
                    <option value="Family (3-5 Persons)">Family (3-5 Persons)</option>
                    <option value="Small Group (6-10 Persons)">Small Group (6-10 Persons)</option>
                    <option value="Large Group (10+ Persons)">Large Group (10+ Persons)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Muhammad Ahmad"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full text-xs pl-8 pr-3 py-2.5 bg-slate-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-800 ${
                        errors.fullName ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-[11px] text-rose-500 mt-1">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Contact Phone / WhatsApp <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      placeholder="e.g. +92 318 9011775"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full text-xs pl-8 pr-3 py-2.5 bg-slate-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-800 ${
                        errors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address (Optional)
                </label>
                <div className="relative">
                  <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    placeholder="e.g. yourname@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full text-xs pl-8 pr-3 py-2.5 bg-slate-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-800 ${
                      errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Specific Requirements or Hotel Preferences
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. 5-star hotel in Makkah close to clock tower, luxury 4x4 for Hunza tour, direct flights only..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-slate-800 resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <span className="text-[11px] text-slate-500">
                  Direct inquiry to Gul Bahar, Peshawar office
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-lg text-xs transition-colors shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Inquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
