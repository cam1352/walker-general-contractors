import React from 'react';
import { GraduationCap, MapPin, Phone, Mail, CheckCircle2, Shield } from 'lucide-react';
import { companyDetails } from '../data/walkerData';

export default function AboutOwner({ onOpenContact }) {
  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#8CC63F]/10 border border-[#8CC63F]/30 text-[#8CC63F] text-xs font-semibold uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>BCIT Trained Leadership</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
              Meet Kyle Walker & <br className="hidden sm:inline" />
              The WGC Team
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              {companyDetails.ownerBio}
            </p>

            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start space-x-3 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-[#8CC63F] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-xs uppercase font-mono">BCIT Contracting & Business Management (2006)</h4>
                  <p className="text-xs text-slate-400">Formal technical foundation in structural engineering, building science, and project estimation.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
                <Shield className="w-5 h-5 text-[#8CC63F] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-xs uppercase font-mono">Licensed BC Residential Builder</h4>
                  <p className="text-xs text-slate-400">Enrolled in 2-5-10 National Home Warranty protection and full Red Seal sub-trade oversight.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center space-x-4">
              <button
                onClick={onOpenContact}
                className="px-6 py-3.5 rounded-xl bg-[#8CC63F] text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-[#7CB334] transition-colors shadow-lg shadow-[#8CC63F]/20"
              >
                Speak Directly With Kyle
              </button>
              
              <a
                href={`tel:${companyDetails.phone}`}
                className="text-xs font-mono text-[#8CC63F] font-bold hover:underline flex items-center space-x-1"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{companyDetails.phoneFormatted}</span>
              </a>
            </div>

          </div>

          <div className="lg:col-span-6">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
              
              <div className="flex items-center space-x-4 border-b border-slate-800 pb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#8CC63F] text-slate-950 font-bold text-2xl flex items-center justify-center shadow-lg shadow-[#8CC63F]/30">
                  KW
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-white">{companyDetails.name}</h3>
                  <p className="text-xs text-[#8CC63F] font-mono">Headquarters: North Vancouver, BC</p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#8CC63F] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 font-mono uppercase block text-[10px]">Office Address</span>
                    <span className="font-semibold text-white">{companyDetails.address}, {companyDetails.city}, BC {companyDetails.postalCode}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-[#8CC63F] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 font-mono uppercase block text-[10px]">Direct Office Line</span>
                    <span className="font-semibold text-white">{companyDetails.phoneFormatted}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-[#8CC63F] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 font-mono uppercase block text-[10px]">Inquiries Email</span>
                    <span className="font-semibold text-white">{companyDetails.email}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-2">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">Core Service Municipalities</span>
                <div className="flex flex-wrap gap-1.5">
                  {companyDetails.serviceAreas.map((area, idx) => (
                    <span key={idx} className="bg-slate-950 px-2.5 py-1 rounded-md text-[11px] text-slate-300 border border-slate-800">
                      {area}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
