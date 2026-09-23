import React from 'react';
import { useParams, Link } from 'react-router-dom';
import locationsData from '../data/locations.json';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function LocationPage() {
  const { main, sub } = useParams();
  const slug = `${main}/${sub}`;
  
  const location = locationsData.find(l => l.slug === slug);

  if (!location) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Location Not Found</h1>
          <Link to="/" className="text-[#8CC63F] hover:underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar onOpenContact={() => {}} onOpenEstimate={() => {}} />
      
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/locations" className="text-[#8CC63F] font-semibold mb-8 inline-block hover:underline">
          &larr; Back to All Locations
        </Link>
        
        <div 
          className="prose prose-lg prose-slate max-w-none"
          dangerouslySetInnerHTML={{ __html: location.content }} 
        />
        
        <div className="mt-16 p-8 bg-slate-50 border border-slate-200 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to build in {location.sub_location}?</h3>
          <p className="text-slate-600 mb-6">Contact Walker General Contractors today for a free consultation.</p>
          <a href="tel:+16045550198" className="inline-block px-8 py-4 bg-[#8CC63F] text-slate-950 font-bold uppercase tracking-wider rounded-xl">
            Call Now: (604) 555-0198
          </a>
        </div>
      </div>
      
      <Footer onOpenContact={() => {}} onOpenSubcontractor={() => {}} />
    </div>
  );
}