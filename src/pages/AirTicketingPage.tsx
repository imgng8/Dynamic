import React, { useState } from 'react';
import { Plane, Calendar, Users, MapPin, CheckCircle, Phone, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/travelData';

interface AirTicketingPageProps {
  setCurrentPage: (page: PageId) => void;
  openInquiryModal: (serviceName?: string, dest?: string) => void;
}

export const AirTicketingPage: React.FC<AirTicketingPageProps> = ({ openInquiryModal }) => {
  const [origin, setOrigin] = useState('Peshawar (PEW)');
  const [destination, setDestination] = useState('Dubai (DXB)');
  const [tripType, setTripType] = useState<'round' | 'oneWay'>('round');
  const [departDate, setDepartDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState('1 Adult');
  const [flightClass, setFlightClass] = useState('Economy');
  const [submittedQuote, setSubmittedQuote] = useState(false);

  const handleFlightSearch = (e: React.FormEvent) => {
    e.preventDefault();
    openInquiryModal(
      'Air Ticketing',
      `${tripType === 'round' ? 'Round-trip' : 'One-way'}: ${origin} to ${destination} (${passengers}, ${flightClass})`
    );
  };

  const domesticAirlines = [
    { name: 'Pakistan International Airlines (PIA)', desc: 'Extensive domestic network to Karachi, Skardu, Gilgit, and Lahore' },
    { name: 'Airblue', desc: 'Frequent daily services between Peshawar, Karachi, and Islamabad' },
    { name: 'Serene Air', desc: 'Generous baggage allowances with modern Boeing & Airbus fleets' },
    { name: 'Fly Jinnah', desc: 'Affordable domestic connections across major provincial hubs' }
  ];

  const internationalAirlines = [
    { name: 'Emirates', routes: 'Direct Dubai connections & worldwide network' },
    { name: 'Qatar Airways', routes: 'Award-winning global transit via Doha Hamad Airport' },
    { name: 'Saudia (Saudi Arabian Airlines)', routes: 'Direct Umrah, Hajj & business flights to Jeddah & Riyadh' },
    { name: 'flydubai', routes: 'Direct flights from Bacha Khan Airport (Peshawar) to Dubai' },
    { name: 'Gulf Air & Air Arabia', routes: 'Convenient Middle East transit options at competitive fares' },
    { name: 'Turkish Airlines', routes: 'Seamless connections to Europe, UK, and North America via Istanbul' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-bold text-sky-600 uppercase tracking-wider block">
          Worldwide Flight Bookings
        </span>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
          Air Ticketing: Domestic & International
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Book competitive airfares for domestic routes across Pakistan or international journeys to the Middle East, Europe, North America, and Southeast Asia. We compare multiple carrier tariffs to get you confirmed seats, optimal baggage allowances, and flexible reissuance options.
        </p>
      </div>

      {/* Flight Search / Quote Panel */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6 flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setTripType('round')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                tripType === 'round' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'
              }`}
            >
              Round Trip
            </button>
            <button
              onClick={() => setTripType('oneWay')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                tripType === 'oneWay' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600'
              }`}
            >
              One Way
            </button>
          </div>
          <div className="text-xs text-slate-500">
            Departing from <strong className="text-slate-800">Peshawar (PEW)</strong> or <strong className="text-slate-800">Islamabad (ISB)</strong>
          </div>
        </div>

        <form onSubmit={handleFlightSearch} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Flying From (Origin)
              </label>
              <div className="relative">
                <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="w-full text-xs pl-8 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Flying To (Destination)
              </label>
              <div className="relative">
                <Plane className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="e.g. Dubai, Jeddah, London, Karachi"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full text-xs pl-8 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Departure Date
              </label>
              <input
                type="date"
                value={departDate}
                onChange={(e) => setDepartDate(e.target.value)}
                className="w-full text-xs px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            {tripType === 'round' ? (
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Return Date
                </label>
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="w-full text-xs px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
            ) : (
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Cabin Class
                </label>
                <select
                  value={flightClass}
                  onChange={(e) => setFlightClass(e.target.value)}
                  className="w-full text-xs px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 font-medium"
                >
                  <option value="Economy">Economy</option>
                  <option value="Premium Economy">Premium Economy</option>
                  <option value="Business Class">Business Class</option>
                </select>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Passengers
              </label>
              <select
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="w-full text-xs px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 font-medium"
              >
                <option value="1 Adult">1 Adult</option>
                <option value="2 Adults">2 Adults</option>
                <option value="Family (2 Adults, 1 Child)">Family (2 Adults, 1 Child)</option>
                <option value="Family (2 Adults, 2+ Children)">Family (2 Adults, 2+ Children)</option>
                <option value="Group (5+ Passengers)">Group (5+ Passengers)</option>
              </select>
            </div>

            {tripType === 'round' && (
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Cabin Class
                </label>
                <select
                  value={flightClass}
                  onChange={(e) => setFlightClass(e.target.value)}
                  className="w-full text-xs px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 font-medium"
                >
                  <option value="Economy">Economy</option>
                  <option value="Premium Economy">Premium Economy</option>
                  <option value="Business Class">Business Class</option>
                </select>
              </div>
            )}

            <div className="flex items-end sm:col-start-3">
              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Request Live Flight Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Airlines Partners */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Domestic Airlines */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-4">
          <h3 className="font-display font-bold text-lg text-slate-900">
            Domestic Flight Networks (Pakistan)
          </h3>
          <div className="space-y-3">
            {domesticAirlines.map((item, idx) => (
              <div key={idx} className="bg-white p-3.5 rounded-xl border border-slate-200">
                <h4 className="font-bold text-xs text-slate-900">{item.name}</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* International Airlines */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-4">
          <h3 className="font-display font-bold text-lg text-slate-900">
            International Flight Partners
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {internationalAirlines.map((item, idx) => (
              <div key={idx} className="bg-white p-3.5 rounded-xl border border-slate-200">
                <h4 className="font-bold text-xs text-slate-900">{item.name}</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">{item.routes}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Ticketing Benefits */}
      <div className="bg-white rounded-2xl border border-slate-200 p-8 space-y-4">
        <h3 className="font-display font-bold text-xl text-slate-900">
          Why Book Your Flights Through Dynamic Travel?
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
          <div className="space-y-1.5">
            <h4 className="font-bold text-xs text-slate-900 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Direct Airport Assistance</span>
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Convenient ticketing for departures from Peshawar's Bacha Khan International Airport (PEW) and Islamabad (ISB).
            </p>
          </div>
          <div className="space-y-1.5">
            <h4 className="font-bold text-xs text-slate-900 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Baggage Guidance & Pre-Selection</span>
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              We inform you of exact weight allowances (20kg, 30kg, 2x 23kg pieces) so you never encounter unexpected check-in penalties.
            </p>
          </div>
          <div className="space-y-1.5">
            <h4 className="font-bold text-xs text-slate-900 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Date Change & Cancellation Help</span>
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Need to reschedule your flight? Our staff assists with airline reissuance, date changes, and refunds according to fare rules.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
