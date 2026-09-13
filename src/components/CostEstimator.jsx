import React, { useState, useMemo } from 'react';
import { Calculator, Info, ChevronRight, FileText, Clock, Layers } from 'lucide-react';

const projectTypes = [
  { id: 'custom-build', label: 'Custom Home Build', baseRate: { std: 380, lux: 550, ultra: 850 }, durationPerSqft: 0.003, minSqft: 2000, maxSqft: 8000, defaultSqft: 3500 },
  { id: 'full-reno', label: 'Full Home Renovation', baseRate: { std: 180, lux: 320, ultra: 500 }, durationPerSqft: 0.002, minSqft: 1000, maxSqft: 5000, defaultSqft: 2500 },
  { id: 'laneway', label: 'Laneway House / ADU', baseRate: { std: 320, lux: 450, ultra: 650 }, durationPerSqft: 0.004, minSqft: 500, maxSqft: 1200, defaultSqft: 850 },
  { id: 'addition', label: 'Home Addition', baseRate: { std: 300, lux: 480, ultra: 700 }, durationPerSqft: 0.003, minSqft: 400, maxSqft: 2500, defaultSqft: 1000 },
  { id: 'kitchen', label: 'Luxury Kitchen Remodel', baseRate: { std: 150, lux: 280, ultra: 450 }, durationPerSqft: 0.005, minSqft: 200, maxSqft: 1000, defaultSqft: 450 },
  { id: 'commercial', label: 'Commercial Fit-Out', baseRate: { std: 140, lux: 260, ultra: 420 }, durationPerSqft: 0.0015, minSqft: 800, maxSqft: 6000, defaultSqft: 2000 }
];

const finishLevels = [
  { id: 'std', title: 'Executive Standard', desc: 'High quality finishes, quartz counters, premium tile, brand name appliances.' },
  { id: 'lux', title: 'Architectural Luxury', desc: 'Custom oak cabinetry, floor-to-ceiling glass, radiant heating, designer fixtures.' },
  { id: 'ultra', title: 'Ultra-Luxury Custom', desc: 'Mass timber accents, automated smart home, Sub-Zero appliances, custom stonework.' }
];

export default function CostEstimator({ onOpenContactWithEstimate }) {
  const [selectedType, setSelectedType] = useState(projectTypes[0]);
  const [sqft, setSqft] = useState(selectedType.defaultSqft);
  const [finishLevel, setFinishLevel] = useState('lux');
  const [location, setLocation] = useState('District of North Vancouver');

  const handleTypeChange = (type) => {
    setSelectedType(type);
    setSqft(type.defaultSqft);
  };

  const calculations = useMemo(() => {
    const rate = selectedType.baseRate[finishLevel];
    const baseTotal = sqft * rate;
    const minTotal = Math.round(baseTotal * 0.92);
    const maxTotal = Math.round(baseTotal * 1.12);

    const monthsEst = Math.max(3, Math.round(4 + sqft * selectedType.durationPerSqft));
    
    let permitMonths = "4 - 8 Weeks";
    if (location.includes("West Vancouver")) permitMonths = "8 - 12 Weeks";
    if (selectedType.id === 'custom-build') permitMonths = "10 - 16 Weeks (DP & BP)";

    return { rate, minTotal, maxTotal, monthsEst, permitMonths };
  }, [selectedType, sqft, finishLevel, location]);

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section id="estimator" className="py-24 bg-slate-900/60 relative overflow-hidden border-y border-slate-800">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8CC63F]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#8CC63F]/10 border border-[#8CC63F]/30 text-[#8CC63F] text-xs font-semibold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            North Shore Construction & Renovation Cost Calculator
          </h2>
          <p className="text-slate-400 text-base">
            Get an instant baseline estimate for your custom build or renovation in North Vancouver, West Vancouver, or Greater Vancouver based on real regional cost factors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls */}
          <div className="lg:col-span-7 bg-slate-950/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-8 shadow-2xl">
            
            {/* 1. Project Type */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-slate-200 uppercase tracking-wider flex items-center justify-between">
                <span>1. Select Project Type</span>
                <span className="text-xs text-[#8CC63F] font-mono">Step 1 of 4</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => handleTypeChange(type)}
                    className={`p-3 rounded-xl border text-xs font-bold transition-all text-left flex flex-col justify-between h-20 ${selectedType.id === type.id ? 'bg-[#8CC63F]/15 border-[#8CC63F] text-[#8CC63F] shadow-md shadow-[#8CC63F]/10' : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'}`}
                  >
                    <span>{type.label}</span>
                    <span className="text-[10px] text-slate-400 font-mono">~${type.baseRate.lux}/sq ft</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Area */}
            <div className="space-y-4 pt-2 border-t border-slate-900">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-slate-200 uppercase tracking-wider">
                  2. Approximate Area (Square Feet)
                </label>
                <div className="bg-[#8CC63F]/10 border border-[#8CC63F]/30 text-[#8CC63F] font-mono font-bold px-3 py-1 rounded-lg text-sm">
                  {sqft.toLocaleString()} sq ft
                </div>
              </div>
              
              <input
                type="range"
                min={selectedType.minSqft}
                max={selectedType.maxSqft}
                step={50}
                value={sqft}
                onChange={(e) => setSqft(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#8CC63F]"
              />
              
              <div className="flex justify-between text-xs font-mono text-slate-500">
                <span>{selectedType.minSqft.toLocaleString()} sq ft</span>
                <span>{((selectedType.minSqft + selectedType.maxSqft) / 2).toLocaleString()} sq ft</span>
                <span>{selectedType.maxSqft.toLocaleString()} sq ft</span>
              </div>
            </div>

            {/* 3. Finishing */}
            <div className="space-y-3 pt-2 border-t border-slate-900">
              <label className="text-sm font-semibold text-slate-200 uppercase tracking-wider">
                3. Finishing & Material Grade
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {finishLevels.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setFinishLevel(level.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${finishLevel === level.id ? 'bg-[#8CC63F]/15 border-[#8CC63F] text-white' : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'}`}
                  >
                    <div className="font-bold text-xs text-[#8CC63F] mb-1">{level.title}</div>
                    <div className="text-[11px] leading-snug text-slate-400">{level.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Jurisdiction */}
            <div className="space-y-3 pt-2 border-t border-slate-900">
              <label className="text-sm font-semibold text-slate-200 uppercase tracking-wider">
                4. Municipal Property Jurisdiction
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-sm text-slate-200 focus:outline-none focus:border-[#8CC63F] font-medium"
              >
                <option value="District of North Vancouver">District of North Vancouver (DNV)</option>
                <option value="City of North Vancouver">City of North Vancouver (CNV)</option>
                <option value="West Vancouver">West Vancouver (District)</option>
                <option value="Vancouver Westside">Vancouver Westside / Downtown</option>
                <option value="Burnaby & Tri-Cities">Burnaby / Coquitlam / Tri-Cities</option>
              </select>
            </div>

          </div>

          {/* Results Summary */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 border border-[#8CC63F]/30 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 relative sticky top-28">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <span className="text-xs font-mono text-[#8CC63F] uppercase tracking-widest">Estimated Budget Range</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-mono">Live Calculation</span>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-2 text-center">
              <span className="text-xs text-slate-400 uppercase font-semibold">Estimated Total Project Investment</span>
              <div className="text-3xl sm:text-4xl font-heading font-extrabold text-[#8CC63F]">
                {formatCurrency(calculations.minTotal)} - {formatCurrency(calculations.maxTotal)}
              </div>
              <p className="text-[11px] text-slate-400 font-mono">
                Estimated Rate: ~${calculations.rate}/sq ft CAD
              </p>
            </div>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex justify-between items-center p-3 bg-slate-900/80 rounded-lg border border-slate-800">
                <span className="flex items-center space-x-2 text-slate-400">
                  <Clock className="w-4 h-4 text-[#8CC63F]" />
                  <span>Est. Construction Timeline:</span>
                </span>
                <span className="font-bold text-white font-mono">{calculations.monthsEst} Months</span>
              </div>

              <div className="flex justify-between items-center p-3 bg-slate-900/80 rounded-lg border border-slate-800">
                <span className="flex items-center space-x-2 text-slate-400">
                  <FileText className="w-4 h-4 text-[#8CC63F]" />
                  <span>Est. Permit Processing ({location}):</span>
                </span>
                <span className="font-bold text-white font-mono">{calculations.permitMonths}</span>
              </div>

              <div className="flex justify-between items-center p-3 bg-slate-900/80 rounded-lg border border-slate-800">
                <span className="flex items-center space-x-2 text-slate-400">
                  <Layers className="w-4 h-4 text-[#8CC63F]" />
                  <span>Warranty Protection:</span>
                </span>
                <span className="font-bold text-[#8CC63F] font-mono">BC 2-5-10 Year</span>
              </div>
            </div>

            <div className="p-3 bg-[#8CC63F]/10 border border-[#8CC63F]/20 rounded-xl text-[11px] text-[#8CC63F]/90 leading-relaxed flex items-start space-x-2">
              <Info className="w-4 h-4 text-[#8CC63F] flex-shrink-0 mt-0.5" />
              <span>
                Estimates include preliminary labor, materials, management, and standard permits for North Vancouver. Final fixed price is locked after site inspection.
              </span>
            </div>

            <button
              onClick={() => onOpenContactWithEstimate({
                type: selectedType.label,
                sqft,
                finish: finishLevels.find(f => f.id === finishLevel)?.title,
                estimateRange: `${formatCurrency(calculations.minTotal)} - ${formatCurrency(calculations.maxTotal)}`,
                location
              })}
              className="w-full py-4 rounded-xl bg-[#8CC63F] text-slate-950 font-bold text-sm uppercase tracking-wider hover:bg-[#7CB334] transition-all shadow-xl shadow-[#8CC63F]/25 flex items-center justify-center space-x-2"
            >
              <span>Lock In Estimate & Book Consultation</span>
              <ChevronRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
