import React from 'react';
import { MapPin, Calculator, ChevronRight, CheckCircle2 } from 'lucide-react';
import { companyDetails } from '../data/walkerData';

export default function Hero({ onOpenEstimate, onOpenContact }) {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Architectural Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
          alt="North Vancouver Custom Build"
          className="w-full h-full object-cover object-center opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#8CC63F]/10 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Location Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#8CC63F]/10 border border-[#8CC63F]/30 text-[#8CC63F] text-xs font-semibold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>North Vancouver, West Vancouver & Greater Vancouver</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white tracking-tight leading-[1.15]">
              Crafting Exceptional <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8CC63F] via-emerald-200 to-[#8CC63F]">
                Coastal Modern Homes
              </span>
              <br />& Custom Renovations.
            </h1>

            <p className="text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              Led by BCIT graduate Kyle Walker, <strong className="text-white">Walker General Contractors</strong> delivers high-performance custom home builds, additions, and full renovations with transparent fixed budgeting, zero contractor horror stories, and 2-5-10 warranty protection.
            </p>

            {/* Certification Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-300">
              <div className="flex items-center space-x-2 bg-slate-900/80 backdrop-blur border border-slate-800 p-2.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-[#8CC63F] flex-shrink-0" />
                <span>BC Licensed Builder</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-900/80 backdrop-blur border border-slate-800 p-2.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-[#8CC63F] flex-shrink-0" />
                <span>2-5-10 Year Warranty</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-900/80 backdrop-blur border border-slate-800 p-2.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-[#8CC63F] flex-shrink-0" />
                <span>BC Energy Step Code 4/5</span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                onClick={onOpenContact}
                className="px-8 py-4 rounded-xl bg-[#8CC63F] text-slate-950 font-bold text-sm uppercase tracking-wider hover:bg-[#7CB334] shadow-xl shadow-[#8CC63F]/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
              >
                <span>Start Your Project</span>
                <ChevronRight className="w-5 h-5" />
              </button>

              <a
                href="#estimator"
                className="px-6 py-4 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 font-semibold text-sm hover:border-[#8CC63F]/50 hover:bg-slate-800 transition-all flex items-center justify-center space-x-2"
              >
                <Calculator className="w-4 h-4 text-[#8CC63F]" />
                <span>Estimate Your Renovation Cost</span>
              </a>
            </div>

          </div>

          {/* Right Floating Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-mono text-[#8CC63F] uppercase tracking-widest block">Official Builder Profile</span>
                  <h3 className="text-xl font-heading font-bold text-white">{companyDetails.name}</h3>
                </div>
                <div className="w-12 h-12 rounded-xl bg-[#8CC63F]/20 border border-[#8CC63F]/40 flex items-center justify-center text-[#8CC63F] font-bold text-lg">
                  18+
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                <p className="leading-relaxed">
                  "We built Walker General Contractors around a simple standard: absolute craftsmanship, complete clarity on costs, and treating every North Vancouver property like our own family home."
                </p>
                <div className="flex items-center space-x-3 pt-2">
                  <div className="w-10 h-10 rounded-full bg-[#8CC63F] text-slate-950 font-bold flex items-center justify-center text-sm shadow-md">
                    KW
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{companyDetails.owner}</h4>
                    <p className="text-xs text-[#808285]">Founder & Principal | BCIT Alumni</p>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800 text-center">
                {companyDetails.stats.map((stat, idx) => (
                  <div key={idx} className="bg-slate-950/60 p-3 rounded-lg border border-slate-800/80">
                    <div className="text-xl font-heading font-extrabold text-[#8CC63F]">{stat.value}</div>
                    <div className="text-[11px] text-slate-400 uppercase font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Direct Phone Bar */}
              <a
                href={`tel:${companyDetails.phone}`}
                className="block text-center py-3 px-4 rounded-xl bg-[#8CC63F]/10 border border-[#8CC63F]/30 text-[#8CC63F] font-bold text-sm hover:bg-[#8CC63F]/20 transition-colors"
              >
                Speak Directly with Kyle: {companyDetails.phoneFormatted}
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
