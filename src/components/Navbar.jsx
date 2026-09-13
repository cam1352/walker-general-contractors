import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, ChevronRight, Calculator } from 'lucide-react';
import { companyDetails } from '../data/walkerData';

export default function Navbar({ onOpenEstimate, onOpenContact }) {
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
      <div className="bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-xs py-2 px-4 text-slate-300 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-[#8CC63F] font-medium">
              <MapPin className="w-3.5 h-3.5" />
              <span>{companyDetails.address}, {companyDetails.city}, BC</span>
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">Licensed BC Builder & General Contractor</span>
          </div>
          <div className="flex items-center space-x-5">
            <a href={`tel:${companyDetails.phone}`} className="flex items-center space-x-1.5 hover:text-[#8CC63F] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#8CC63F]" />
              <span className="font-semibold text-white">{companyDetails.phoneFormatted}</span>
            </a>
            <a href={`mailto:${companyDetails.email}`} className="flex items-center space-x-1.5 hover:text-[#8CC63F] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#8CC63F]" />
              <span>{companyDetails.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${scrolled ? 'bg-slate-950/95 backdrop-blur-md py-3 shadow-xl border-b border-slate-800/80' : 'bg-gradient-to-b from-slate-950/90 to-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo matching Walker General Contractors logo colors (#8CC63F & #808285) */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-[#8CC63F] rounded-lg flex items-center justify-center font-bold text-slate-950 text-xl tracking-tighter shadow-lg shadow-[#8CC63F]/20 group-hover:scale-105 transition-transform">
              W
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg sm:text-xl tracking-wider text-white uppercase group-hover:text-[#8CC63F] transition-colors">
                WALKER
              </span>
              <span className="text-[10px] tracking-widest text-[#808285] uppercase font-semibold">
                General Contractors
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 text-sm font-medium">
            <a href="#services" className="text-slate-300 hover:text-[#8CC63F] transition-colors">Services</a>
            <a href="#estimator" className="text-slate-300 hover:text-[#8CC63F] transition-colors flex items-center space-x-1">
              <Calculator className="w-4 h-4 text-[#8CC63F]" />
              <span>Cost Calculator</span>
            </a>
            <a href="#before-after" className="text-slate-300 hover:text-[#8CC63F] transition-colors">Before & After</a>
            <a href="#portfolio" className="text-slate-300 hover:text-[#8CC63F] transition-colors">Portfolio</a>
            <a href="#process" className="text-slate-300 hover:text-[#8CC63F] transition-colors">Our Process</a>
            <a href="#about" className="text-slate-300 hover:text-[#8CC63F] transition-colors">About WGC</a>
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={onOpenEstimate}
              className="px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider text-slate-200 border border-slate-700 bg-slate-900/60 hover:bg-slate-800 hover:border-[#8CC63F]/50 transition-all flex items-center space-x-1.5"
            >
              <Calculator className="w-3.5 h-3.5 text-[#8CC63F]" />
              <span>Instant Estimate</span>
            </button>

            <button
              onClick={onOpenContact}
              className="px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#8CC63F] text-slate-950 hover:bg-[#7CB334] shadow-lg shadow-[#8CC63F]/25 transition-all transform hover:-translate-y-0.5 flex items-center space-x-1"
            >
              <span>Get Free Quote</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950/98 border-b border-slate-800 px-4 pt-3 pb-6 space-y-4 shadow-2xl">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-[#8CC63F] font-medium py-2 border-b border-slate-900">Services</a>
            <a href="#estimator" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-[#8CC63F] font-medium py-2 border-b border-slate-900 flex items-center justify-between">
              <span>Interactive Cost Calculator</span>
              <span className="text-xs bg-[#8CC63F]/20 text-[#8CC63F] px-2 py-0.5 rounded font-mono">Calculator</span>
            </a>
            <a href="#before-after" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-[#8CC63F] font-medium py-2 border-b border-slate-900">Before & After Transformations</a>
            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-[#8CC63F] font-medium py-2 border-b border-slate-900">Project Portfolio</a>
            <a href="#process" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-[#8CC63F] font-medium py-2 border-b border-slate-900">Our 5-Stage Process</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-slate-200 hover:text-[#8CC63F] font-medium py-2 border-b border-slate-900">About Kyle Walker & WGC</a>

            <div className="pt-2 space-y-2">
              <a href={`tel:${companyDetails.phone}`} className="w-full py-3 rounded-lg bg-slate-900 border border-slate-800 text-[#8CC63F] font-bold flex items-center justify-center space-x-2 text-sm">
                <Phone className="w-4 h-4" />
                <span>Call {companyDetails.phoneFormatted}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 rounded-lg bg-[#8CC63F] text-slate-950 font-bold text-sm uppercase tracking-wider"
              >
                Request Free Consultation
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
