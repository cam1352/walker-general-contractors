import React, { useState } from 'react';
import { Home, Hammer, Building2, ChefHat, Bath, Layers, CheckCircle2, ChevronRight } from 'lucide-react';
import { services } from '../data/walkerData';

const iconMap = { Home, Hammer, Building2, ChefHat, Bath, Layers };

export default function Services({ onOpenContact }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredServices = activeCategory === 'All'
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#8CC63F]/10 border border-[#8CC63F]/30 text-[#8CC63F] text-xs font-semibold uppercase tracking-wider">
              <span>Full-Scope Contracting</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
              General Contracting Services Tailored For Vancouver Properties
            </h2>
            <p className="text-slate-400 text-base">
              From high-performance new custom homes to luxury kitchen renovations and legal secondary suites, Walker General Contractors handles every stage.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800 self-start md:self-end">
            {['All', 'Build', 'Renovation', 'Infill'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeCategory === cat ? 'bg-[#8CC63F] text-slate-950 shadow-md shadow-[#8CC63F]/20' : 'text-slate-400 hover:text-white'}`}
              >
                {cat === 'All' ? 'All Services' : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.icon] || Home;
            return (
              <div
                key={service.id}
                className="group relative bg-slate-950 border border-slate-800/90 hover:border-[#8CC63F]/50 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.bgImage}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full border border-slate-700 text-[10px] font-mono text-[#8CC63F] uppercase font-bold">
                    {service.category}
                  </div>

                  <div className="absolute bottom-4 left-6 w-12 h-12 rounded-xl bg-[#8CC63F] text-slate-950 flex items-center justify-center font-bold shadow-lg shadow-[#8CC63F]/30">
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-white group-hover:text-[#8CC63F] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed mt-2">
                      {service.summary}
                    </p>
                  </div>

                  <div className="space-y-2 border-t border-slate-900 pt-4 text-xs text-slate-300">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8CC63F] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-900">
                    <button
                      onClick={onOpenContact}
                      className="w-full py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-semibold text-xs hover:bg-[#8CC63F] hover:text-slate-950 hover:border-[#8CC63F] transition-all flex items-center justify-center space-x-1"
                    >
                      <span>Inquire About {service.title}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
