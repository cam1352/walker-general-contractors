import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { companyDetails, services } from '../data/walkerData';
import { ShieldCheck, Award, CheckCircle2, Phone, Mail, MapPin, Hammer, Users, Calendar } from 'lucide-react';

export default function BrochurePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Navbar onOpenContact={() => {}} onOpenEstimate={() => {}} />

      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#8CC63F]/10 border border-[#8CC63F]/30 text-[#8CC63F] text-xs font-semibold uppercase tracking-wider">
              <span>Established 2006</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-heading font-black text-slate-900 tracking-tight">
              About Walker General Contractors
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              Leading Greater Vancouver & the North Shore in modern custom home construction, architectural additions, and luxury renovations.
            </p>
          </div>

          {/* Stats Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-slate-950 text-white p-8 rounded-3xl border border-slate-800 shadow-xl">
            {companyDetails.stats.map((stat, idx) => (
              <div key={idx} className="text-center space-y-1">
                <div className="text-3xl sm:text-4xl font-extrabold text-[#8CC63F] font-mono">{stat.value}</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Story & Philosophy */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-extrabold text-slate-900">
                18+ Years of Uncompromising Craftsmanship
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Founded by <strong>Kyle Walker</strong>, an alumnus of BCIT's Construction and Project Management program, Walker General Contractors (WGC) was built on a foundational promise: <em>total pricing transparency, daily site cleanliness, and architectural precision</em>.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Over nearly two decades, we have completed more than 180 major residential and commercial builds across North Vancouver, West Vancouver, Kitsilano, Point Grey, Burnaby, and Coquitlam.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-3 text-slate-800 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#8CC63F] shrink-0" />
                  <span>Licensed Residential Builder in British Columbia</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-800 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#8CC63F] shrink-0" />
                  <span>Comprehensive BC 2-5-10 Home Warranty Protection</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-800 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#8CC63F] shrink-0" />
                  <span>Fully bonded, insured ($5M liability) & WorkSafeBC compliant</span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" 
                alt="Luxury Home Built by Walker General Contractors" 
                className="w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* Services Matrix */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-slate-900">Our Core Capabilities</h2>
              <p className="text-slate-600 text-sm mt-2">Explore our specialized general contracting offerings:</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((srv) => (
                <Link
                  key={srv.id}
                  to={`/services/${srv.id}`}
                  className="group bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#8CC63F] hover:shadow-lg transition-all"
                >
                  <h3 className="font-bold text-slate-900 group-hover:text-[#8CC63F] transition-colors mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                    {srv.summary}
                  </p>
                  <span className="text-xs text-[#8CC63F] font-bold mt-4 inline-block">
                    Learn More &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold">Ready to Build With Confidence?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
              Contact our team today to schedule an on-site feasibility consultation or request a transparent line-item estimate for your project.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <a 
                href={`tel:${companyDetails.phone}`}
                className="px-8 py-3.5 bg-[#8CC63F] text-slate-950 font-bold uppercase tracking-wider rounded-xl hover:bg-white transition-colors"
              >
                Call {companyDetails.phoneFormatted}
              </a>
              <Link 
                to="/#estimator" 
                className="px-8 py-3.5 bg-slate-800 text-white font-bold uppercase tracking-wider rounded-xl hover:bg-slate-700 transition-colors"
              >
                Use Cost Estimator
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer onOpenContact={() => {}} onOpenSubcontractor={() => {}} />
    </div>
  );
}