import React from 'react';
import { Link } from 'react-router-dom';
import locationsData from '../data/locations.json';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function LocationsList() {
  // Group by main location
  const grouped = locationsData.reduce((acc, loc) => {
    if (!acc[loc.main_location]) acc[loc.main_location] = [];
    acc[loc.main_location].push(loc);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar onOpenContact={() => {}} onOpenEstimate={() => {}} />
      
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-slate-950 text-center">Service Areas</h1>
        <p className="text-xl text-slate-600 mb-16 text-center max-w-3xl mx-auto">
          Walker General Contractors proudly serves 15 major cities and 150+ sub-locations across the entire Lower Mainland.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(grouped).map(([mainLoc, subLocs]) => (
            <div key={mainLoc} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold text-[#8CC63F] mb-4 border-b pb-2">{mainLoc}</h2>
              <ul className="space-y-2">
                {subLocs.map((loc) => (
                  <li key={loc.slug}>
                    <Link to={`/locations/${loc.slug}`} className="text-slate-600 hover:text-[#8CC63F] hover:underline flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                      <span>{loc.sub_location}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      <Footer onOpenContact={() => {}} onOpenSubcontractor={() => {}} />
    </div>
  );
}