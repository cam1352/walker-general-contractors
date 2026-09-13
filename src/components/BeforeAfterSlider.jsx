import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight, Sparkles, MapPin } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 5) percentage = 5;
    if (percentage > 95) percentage = 95;
    setSliderPos(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section id="before-after" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#8CC63F]/10 border border-[#8CC63F]/30 text-[#8CC63F] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Transformation Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Drag to Experience The Walker Transformation
          </h2>
          <p className="text-slate-400 text-base">
            See how we transform vintage 1970s North Vancouver post-and-beam structures into contemporary architectural masterpieces.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-800 select-none">
          
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative w-full h-[380px] sm:h-[500px] md:h-[600px] cursor-ew-resize overflow-hidden"
          >
            {/* AFTER Image */}
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
              alt="WGC Contemporary Architectural Home (After)"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            
            {/* AFTER Label */}
            <div className="absolute top-6 right-6 z-20 bg-[#8CC63F] text-slate-950 px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-widest shadow-lg flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>WGC Modern Rebuild (AFTER)</span>
            </div>

            {/* BEFORE Image Overlay */}
            <div
              className="absolute top-0 bottom-0 left-0 overflow-hidden pointer-events-none z-10"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80"
                alt="Original Legacy Structure (Before)"
                className="absolute top-0 bottom-0 left-0 max-w-none h-full object-cover filter brightness-[0.7] contrast-[0.9]"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
              />
              
              <div className="absolute top-6 left-6 bg-slate-900/90 backdrop-blur-md border border-slate-700 text-slate-200 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest shadow-lg">
                Original Structure (BEFORE)
              </div>
            </div>

            {/* Divider Line */}
            <div
              className="absolute top-0 bottom-0 z-30 w-1 bg-[#8CC63F] shadow-[0_0_15px_rgba(140,198,63,0.8)]"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#8CC63F] text-slate-950 shadow-2xl flex items-center justify-center border-2 border-white cursor-ew-resize transform active:scale-110 transition-transform font-bold">
                <ArrowLeftRight className="w-5 h-5 font-bold" />
              </div>
            </div>

          </div>

          <div className="bg-slate-900 p-6 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-300 border-t border-slate-800 gap-4">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-[#8CC63F]" />
              <span className="font-semibold text-white">Project Case Study:</span>
              <span className="text-slate-400">Deep Cove Hillside Transformation, North Vancouver</span>
            </div>
            <div className="flex space-x-6 font-mono text-slate-400">
              <span>Scope: Structural Modernization</span>
              <span className="text-[#8CC63F]">Timeline: 7 Months</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
