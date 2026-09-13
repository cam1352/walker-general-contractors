import React, { useState } from 'react';
import { MapPin, Maximize2, X, CheckCircle2, ChevronRight } from 'lucide-react';
import { portfolioProjects } from '../data/walkerData';

export default function PortfolioGallery({ onOpenContact }) {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Custom Build', 'Full Renovation', 'Laneway House', 'Commercial'];

  const filteredProjects = filter === 'All'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#8CC63F]/10 border border-[#8CC63F]/30 text-[#8CC63F] text-xs font-semibold uppercase tracking-wider">
            <span>Our Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight">
            Recent Projects Across North & West Vancouver
          </h2>
          <p className="text-slate-400 text-base">
            Explore our portfolio of architectural custom builds, luxury renovations, and laneway homes.
          </p>

          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${filter === cat ? 'bg-[#8CC63F] border-[#8CC63F] text-slate-950 shadow-lg shadow-[#8CC63F]/20' : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-slate-900 border border-slate-800/90 hover:border-[#8CC63F]/60 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                <div className="absolute top-4 left-4 bg-slate-950/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-[#8CC63F] font-bold border border-slate-800">
                  {project.category}
                </div>

                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#8CC63F] text-slate-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 shadow-lg">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center space-x-1.5 text-xs text-[#8CC63F] font-mono">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{project.location}</span>
                </div>
                <h3 className="text-xl font-heading font-bold text-white group-hover:text-[#8CC63F] transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                <div className="pt-3 border-t border-slate-800 flex justify-between text-xs text-slate-400 font-mono">
                  <span>Sq Ft: {project.sqft}</span>
                  <span>Timeline: {project.timeline}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-slate-900 border border-[#8CC63F]/40 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative my-8">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-950/80 border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-72 sm:h-96">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 space-y-1">
                <span className="inline-block bg-[#8CC63F] text-slate-950 font-bold text-xs px-3 py-1 rounded-md uppercase font-mono">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-3 gap-3 p-4 bg-slate-950 rounded-xl border border-slate-800 text-center font-mono text-xs">
                <div>
                  <div className="text-slate-400">Location</div>
                  <div className="font-bold text-white mt-1">{selectedProject.location}</div>
                </div>
                <div>
                  <div className="text-slate-400">Size</div>
                  <div className="font-bold text-white mt-1">{selectedProject.sqft}</div>
                </div>
                <div>
                  <div className="text-slate-400">Duration</div>
                  <div className="font-bold text-[#8CC63F] mt-1">{selectedProject.timeline}</div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider">Project Summary</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{selectedProject.description}</p>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider">Architectural Highlights</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {selectedProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-center space-x-2 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-[#8CC63F] flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
                <span className="text-xs text-slate-400 font-mono">Build Year: {selectedProject.year}</span>
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    onOpenContact();
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#8CC63F] text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-[#7CB334] transition-colors flex items-center justify-center space-x-1"
                >
                  <span>Build A Similar Project</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
