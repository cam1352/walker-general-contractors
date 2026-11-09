service_code = """import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { services, companyDetails } from '../data/walkerData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CheckCircle2, ChevronRight, Phone, ShieldCheck, Home, Building2, ChefHat, Bath, Layers, Hammer } from 'lucide-react';

const iconMap = { Home, Hammer, Building2, ChefHat, Bath, Layers };

export default function ServiceDetailPage() {
  const { serviceId } = useParams();
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Service Not Found</h1>
          <Link to="/" className="text-[#8CC63F] hover:underline font-bold">&larr; Return to Home</Link>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[service.icon] || Home;
  const otherServices = services.filter(s => s.id !== service.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Navbar onOpenContact={() => {}} onOpenEstimate={() => {}} />

      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-8">
            <Link to="/" className="hover:text-[#8CC63F] transition">Home</Link>
            <span>/</span>
            <a href="/#services" className="hover:text-[#8CC63F] transition">Services</a>
            <span>/</span>
            <span className="text-slate-900">{service.title}</span>
          </nav>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-12 border border-slate-200">
            <img 
              src={service.bgImage} 
              alt={service.title} 
              className="w-full h-80 sm:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent flex flex-col justify-end p-8 sm:p-12 text-white">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#8CC63F] text-slate-950 text-xs font-extrabold uppercase tracking-wider mb-4 self-start">
                <IconComponent className="w-4 h-4" />
                <span>{service.category} Expertise</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-heading font-black tracking-tight mb-4">
                {service.title} in Vancouver & North Shore
              </h1>
              <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
                {service.summary}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 border-b-2 border-[#8CC63F] pb-2 inline-block">
                  Why Vancouver Homeowners Choose Walker for {service.title}
                </h2>
                <p className="text-slate-700 leading-relaxed text-base mb-6">
                  Executing <strong>{service.title.toLowerCase()}</strong> in Greater Vancouver requires precision engineering, deep familiarity with local building bylaws (including City of Vancouver, District of North Vancouver, and West Vancouver), and uncompromising structural standards.
                </p>
                <p className="text-slate-700 leading-relaxed text-base">
                  Led by Kyle Walker (BCIT Construction Alum, 18+ years experience), our licensed master tradespeople and project superintendents oversee every framing inspection, trade handoff, and finishing detail with fixed-price transparency.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Project Standards & Specifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-[#8CC63F] shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-800 font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">Our 5-Stage Delivery Process</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-[#8CC63F] pl-4 py-1">
                    <h4 className="font-bold text-slate-900">1. Feasibility & Detailed Estimating</h4>
                    <p className="text-sm text-slate-600">Transparent line-item budget with zero unexpected surprise charges.</p>
                  </div>
                  <div className="border-l-4 border-[#8CC63F] pl-4 py-1">
                    <h4 className="font-bold text-slate-900">2. Architectural & Permit Acquisition</h4>
                    <p className="text-sm text-slate-600">Comprehensive management of municipal zoning, engineering stamps, and permits.</p>
                  </div>
                  <div className="border-l-4 border-[#8CC63F] pl-4 py-1">
                    <h4 className="font-bold text-slate-900">3. Structural Execution & Rough-Ins</h4>
                    <p className="text-sm text-slate-600">Certified Red Seal carpentry, plumbing, electrical, and HVAC rough-ins.</p>
                  </div>
                  <div className="border-l-4 border-[#8CC63F] pl-4 py-1">
                    <h4 className="font-bold text-slate-900">4. Premium Finishing & Millwork</h4>
                    <p className="text-sm text-slate-600">Master cabinetmakers, stone fabricators, and custom interior finishes.</p>
                  </div>
                  <div className="border-l-4 border-[#8CC63F] pl-4 py-1">
                    <h4 className="font-bold text-slate-900">5. Final Inspection & 2-5-10 Warranty Handover</h4>
                    <p className="text-sm text-slate-600">Flawless occupancy sign-off and multi-year structural warranty documentation.</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Complementary Contracting Services</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {otherServices.map((other) => (
                    <Link
                      key={other.id}
                      to={`/services/${other.id}`}
                      className="group p-4 bg-white border border-slate-200 hover:border-[#8CC63F] rounded-xl transition-all shadow-sm flex items-center justify-between"
                    >
                      <div>
                        <h4 className="font-bold text-sm text-slate-900 group-hover:text-[#8CC63F] transition-colors">
                          {other.title}
                        </h4>
                        <span className="text-xs text-slate-500">{other.category}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#8CC63F] group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-950 text-white p-8 rounded-3xl border border-slate-800 shadow-xl sticky top-28">
                <div className="flex items-center space-x-2 text-[#8CC63F] text-xs font-bold uppercase tracking-wider mb-3">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Licensed BC General Contractor</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  Request a Free Quote for {service.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  Speak directly with Principal Builder Kyle Walker regarding your timeline, architectural plans, and preliminary budget.
                </p>

                <div className="space-y-4 mb-6 text-sm text-slate-300 border-y border-slate-800 py-4">
                  <div>
                    <span className="text-slate-500 text-xs block">Direct Line</span>
                    <a href={`tel:${companyDetails.phone}`} className="font-bold text-lg text-[#8CC63F] font-mono hover:underline">
                      {companyDetails.phoneFormatted}
                    </a>
                  </div>
                  <div>
                    <span className="text-slate-500 text-xs block">Email Enquiries</span>
                    <a href={`mailto:${companyDetails.email}`} className="text-xs text-slate-300 hover:text-[#8CC63F]">
                      {companyDetails.email}
                    </a>
                  </div>
                  <div>
                    <span className="text-slate-500 text-xs block">Office Location</span>
                    <span className="text-xs text-slate-300">{companyDetails.address}, {companyDetails.city}, BC</span>
                  </div>
                </div>

                <a 
                  href={`tel:${companyDetails.phone}`}
                  className="w-full py-4 rounded-xl bg-[#8CC63F] text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-[#7CB334] transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-[#8CC63F]/20"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call (604) 781-7785</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer onOpenContact={() => {}} onOpenSubcontractor={() => {}} />
    </div>
  );
}
"""

with open('src/pages/ServiceDetailPage.jsx', 'w', encoding='utf-8') as f:
    f.write(service_code)
print("ServiceDetailPage.jsx written successfully!")

