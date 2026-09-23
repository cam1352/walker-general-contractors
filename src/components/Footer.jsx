import React from 'react';
import { Phone, Mail, MapPin, ChevronRight, ShieldCheck } from 'lucide-react';
import { companyDetails } from '../data/walkerData';

export default function Footer({ onOpenContact }) {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="https://walkergeneralcontractors.ca/wp-content/uploads/2026/03/Walker-logo.png" 
                alt="Walker General Contractors Logo" 
                className="h-12 w-auto object-contain bg-white/10 rounded-lg p-1"
              />
            </div>

            <p className="text-slate-400 leading-relaxed text-xs">
              Premier North Vancouver general contractor specializing in high-performance modern custom home builds, structural additions, and luxury renovations across Greater Vancouver.
            </p>

            <div className="pt-2 text-xs text-slate-300 space-y-2 font-mono">
              <div className="flex items-center space-x-2 text-[#8CC63F]">
                <ShieldCheck className="w-4 h-4" />
                <span>BC Licensed Residential Builder</span>
              </div>
              <div>2-5-10 Home Warranty Certified</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-[#8CC63F] transition-colors">Services Catalog</a></li>
              <li><a href="#estimator" className="hover:text-[#8CC63F] transition-colors">Cost Calculator</a></li>
              <li><a href="#before-after" className="hover:text-[#8CC63F] transition-colors">Before & After</a></li>
              <li><a href="#portfolio" className="hover:text-[#8CC63F] transition-colors">Project Gallery</a></li>
              <li><a href="#process" className="hover:text-[#8CC63F] transition-colors">5-Stage Process</a></li>
              <li><a href="#about" className="hover:text-[#8CC63F] transition-colors">About Kyle Walker</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2">
              <li>Custom Home Building</li>
              <li>Full Home Renovations</li>
              <li>Laneway Houses & ADUs</li>
              <li>Custom Additions & Structural</li>
              <li>Luxury Kitchen Remodels</li>
              <li>Spa Bathroom Renovations</li>
              <li>Legal Basement Suites</li>
              <li>Commercial Interior Fit-Outs</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Get In Touch</h4>
            
            <div className="space-y-2 text-slate-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#8CC63F] flex-shrink-0 mt-0.5" />
                <span>{companyDetails.address}, {companyDetails.city}, BC {companyDetails.postalCode}</span>
              </div>

              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#8CC63F] flex-shrink-0" />
                <a href={`tel:${companyDetails.phone}`} className="hover:text-[#8CC63F] font-bold font-mono">
                  {companyDetails.phoneFormatted}
                </a>
              </div>

              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#8CC63F] flex-shrink-0" />
                <a href={`mailto:${companyDetails.email}`} className="hover:text-[#8CC63F]">
                  {companyDetails.email}
                </a>
              </div>
            </div>

            <button
              onClick={onOpenContact}
              className="w-full py-3 rounded-xl bg-[#8CC63F] text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-[#7CB334] transition-colors shadow-lg shadow-[#8CC63F]/20 flex items-center justify-center space-x-1"
            >
              <span>Schedule Consultation</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} {companyDetails.name}. All rights reserved. North Vancouver, BC.
          </div>
          <div className="flex space-x-4">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">BC Housing License</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
