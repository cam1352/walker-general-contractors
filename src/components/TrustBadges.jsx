import React from 'react';
import { ShieldCheck, HardHat, Award, CheckCircle } from 'lucide-react';

export default function TrustBadges() {
  return (
    <section className="bg-slate-900 border-y border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-slate-400 mb-8">
          Trusted by Vancouver's Most Demanding Homeowners
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center justify-center text-center group">
            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-4 border border-slate-700 group-hover:border-amber-500 transition-colors">
              <ShieldCheck className="w-8 h-8 text-amber-500" />
            </div>
            <span className="text-slate-300 font-medium">Fully Licensed<br />& Insured</span>
          </div>

          <div className="flex flex-col items-center justify-center text-center group">
            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-4 border border-slate-700 group-hover:border-amber-500 transition-colors">
              <HardHat className="w-8 h-8 text-amber-500" />
            </div>
            <span className="text-slate-300 font-medium">WorkSafeBC<br />Compliant</span>
          </div>

          <div className="flex flex-col items-center justify-center text-center group">
            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-4 border border-slate-700 group-hover:border-amber-500 transition-colors">
              <CheckCircle className="w-8 h-8 text-amber-500" />
            </div>
            <span className="text-slate-300 font-medium">BC Housing<br />Certified Builder</span>
          </div>

          <div className="flex flex-col items-center justify-center text-center group">
            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-4 border border-slate-700 group-hover:border-amber-500 transition-colors">
              <Award className="w-8 h-8 text-amber-500" />
            </div>
            <span className="text-slate-300 font-medium">BBB A+<br />Accredited</span>
          </div>
        </div>
      </div>
    </section>
  );
}
