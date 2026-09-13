import React from 'react';
import { Star, Quote, MapPin } from 'lucide-react';
import { testimonials } from '../data/walkerData';

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-900/60 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#8CC63F]/10 border border-[#8CC63F]/30 text-[#8CC63F] text-xs font-semibold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-[#8CC63F] text-[#8CC63F]" />
            <span>Client Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            What North Shore Homeowners Say
          </h2>
          <p className="text-slate-400 text-base">
            Read verified feedback from homeowners in Edgemont, Deep Cove, and West Vancouver.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative">
              <Quote className="w-10 h-10 text-[#8CC63F]/20 absolute top-6 right-6" />

              <div className="space-y-4 relative z-10">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#8CC63F] text-[#8CC63F]" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-slate-900 mt-6 space-y-1">
                <h4 className="font-bold text-white text-sm">{t.author}</h4>
                <div className="flex items-center space-x-1 text-xs text-[#8CC63F] font-mono">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{t.location}</span>
                </div>
                <div className="text-[11px] text-slate-400">{t.project}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
