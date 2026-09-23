import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, X, ChevronRight, Calculator } from 'lucide-react';
import { companyDetails } from '../data/walkerData';
import GoogleTranslate from './GoogleTranslate';

export default function Navbar({ onOpenEstimate, onOpenContact, onOpenSubcontractor }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-slate-100 border-b border-slate-200 text-xs py-2 px-4 text-slate-600 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-[#8CC63F] font-bold">
              <MapPin className="w-3.5 h-3.5" />
              <span>{companyDetails.address}, {companyDetails.city}, BC</span>
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600 font-medium">Licensed BC Builder</span>
            <span className="text-slate-300">|</span>
            <Link to="/subcontractors" className="flex items-center space-x-1 hover:text-[#8CC63F] text-slate-500 transition-colors font-bold uppercase tracking-wider text-[10px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
              <span>Subcontractor Login</span>
            </Link>
          </div>
          <div className="flex items-center space-x-5">
            <a href={`tel:${companyDetails.phone}`} className="flex items-center space-x-1.5 hover:text-[#8CC63F] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#8CC63F]" />
              <span className="font-bold text-slate-800">{companyDetails.phoneFormatted}</span>
            </a>
            <a href={`mailto:${companyDetails.email}`} className="flex items-center space-x-1.5 hover:text-[#8CC63F] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#8CC63F]" />
              <span className="font-medium text-slate-600">{companyDetails.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md py-3 shadow-md border-b border-slate-200' : 'bg-white py-5 border-b border-slate-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="https://walkergeneralcontractors.ca/wp-content/uploads/2026/03/Walker-logo.png" 
              alt="Walker General Contractors Logo" 
              className="h-12 w-auto object-contain group-hover:opacity-90 transition-opacity"
            />
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-sm sm:text-lg tracking-wider text-slate-900 uppercase group-hover:text-[#8CC63F] transition-colors leading-tight">
                GENERAL CONTRACTORS
              </span>
              <span className="text-[11px] tracking-[0.2em] text-[#808285] uppercase font-bold">
                Vancouver
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 text-sm font-bold text-slate-700">
            <a href="#services" className="hover:text-[#8CC63F] transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-[#8CC63F] transition-colors">Portfolio</a>
            <a href="#faq" className="hover:text-[#8CC63F] transition-colors">FAQ</a>
              <Link to="/overview" className="hover:text-[#8CC63F] transition-colors">Company Overview</Link>
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={onOpenContact}
              className="px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#8CC63F] text-white hover:bg-[#7CB334] shadow-md shadow-[#8CC63F]/20 transition-all transform hover:-translate-y-0.5 flex items-center space-x-1"
            >
              <span>Get Free Quote</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        
          <div className={`lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 shadow-xl transition-all duration-300 overflow-hidden ${mobileMenuOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0 py-0 pb-0 pt-0 border-transparent"}`}>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-slate-700 hover:text-[#8CC63F] font-bold py-2 border-b border-slate-100">Services</a>
            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="block text-slate-700 hover:text-[#8CC63F] font-bold py-2 border-b border-slate-100">Project Portfolio</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block text-slate-700 hover:text-[#8CC63F] font-bold py-2 border-b border-slate-100">Frequently Asked Questions</a>
              <Link to="/overview" onClick={() => setMobileMenuOpen(false)} className="block text-slate-700 hover:text-[#8CC63F] font-bold py-2 border-b border-slate-100">Company Overview</Link>
            <Link to="/subcontractors" onClick={() => setMobileMenuOpen(false)} className="block w-full text-left text-slate-700 hover:text-[#8CC63F] font-bold py-2 border-b border-slate-100 flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#8CC63F]"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
              <span>Subcontractor Compliance Login</span>
            </Link>

            {/* Language Toggle - directly under subcontractor login */}
            <div className="py-2 border-b border-slate-100">
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">Language</p>
              <GoogleTranslate />
            </div>

            <div className="pt-2 space-y-2">
              <a href={`tel:${companyDetails.phone}`} className="w-full py-3 rounded-lg bg-slate-100 border border-slate-200 text-[#8CC63F] font-bold flex items-center justify-center space-x-2 text-sm">
                <Phone className="w-4 h-4" />
                <span>Call {companyDetails.phoneFormatted}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 rounded-lg bg-[#8CC63F] text-white font-bold text-sm uppercase tracking-wider shadow-md"
              >
                Request Free Consultation
              </button>
            </div>
            
          </div>
      </nav>
    </header>
  );
}