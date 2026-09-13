import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { processSteps } from '../data/walkerData';

export default function ProcessTimeline({ onOpenContact }) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 bg-slate-900/40 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#8CC63F]/10 border border-[#8CC63F]/30 text-[#8CC63F] text-xs font-semibold uppercase tracking-wider">
            <span>Transparent Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Our 5-Stage General Contracting Process
          </h2>
          <p className="text-slate-400 text-base">
            We eliminate budget surprises, contractor delays, and permit stress through our proven system.
          </p>
        </div>

        <div className="hidden lg:grid grid-cols-5 gap-4 mb-10">
          {processSteps.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between h-36 ${activeStep === idx ? 'bg-[#8CC63F]/15 border-[#8CC63F] text-white shadow-xl shadow-[#8CC63F]/10 scale-105 z-10' : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'}`}
            >
              <div className="flex justify-between items-center">
                <span className={`font-mono text-xl font-extrabold ${activeStep === idx ? 'text-[#8CC63F]' : 'text-slate-600'}`}>
                  {s.step}
                </span>
                {activeStep === idx && <CheckCircle2 className="w-5 h-5 text-[#8CC63F]" />}
              </div>
              <div className="font-heading font-bold text-sm leading-snug">
                {s.title}
              </div>
            </button>
          ))}
        </div>

        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="w-12 h-12 rounded-xl bg-[#8CC63F] text-slate-950 font-mono font-extrabold text-xl flex items-center justify-center shadow-lg">
                  {processSteps[activeStep].step}
                </span>
                <div>
                  <span className="text-xs font-mono text-[#8CC63F] uppercase tracking-widest block">Phase {activeStep + 1} of 5</span>
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                    {processSteps[activeStep].title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-300 text-base leading-relaxed">
                {processSteps[activeStep].desc}
              </p>

              <div className="flex items-center space-x-4 pt-4 border-t border-slate-900">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                  className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 disabled:opacity-30 hover:bg-slate-800"
                >
                  Previous Phase
                </button>
                <button
                  disabled={activeStep === processSteps.length - 1}
                  onClick={() => setActiveStep(Math.min(processSteps.length - 1, activeStep + 1))}
                  className="px-4 py-2 rounded-xl bg-[#8CC63F]/20 border border-[#8CC63F]/40 text-xs text-[#8CC63F] font-bold disabled:opacity-30 hover:bg-[#8CC63F]/30 flex items-center space-x-1"
                >
                  <span>Next Phase</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-4 text-center">
              <ShieldCheck className="w-10 h-10 text-[#8CC63F] mx-auto" />
              <h4 className="font-bold text-white text-base">Ready for Step 01?</h4>
              <p className="text-xs text-slate-400">
                Book your initial site consultation with Kyle Walker to evaluate property zoning and feasibility.
              </p>
              <button
                onClick={onOpenContact}
                className="w-full py-3 rounded-xl bg-[#8CC63F] text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-[#7CB334] transition-colors shadow-lg shadow-[#8CC63F]/20"
              >
                Schedule Site Call
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
