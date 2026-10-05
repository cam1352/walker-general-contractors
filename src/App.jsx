import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import CostEstimator from './components/CostEstimator';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import Services from './components/Services';
import PortfolioGallery from './components/PortfolioGallery';
import ProcessTimeline from './components/ProcessTimeline';
import AboutOwner from './components/AboutOwner';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactModal from './components/ContactModal';
import SubcontractorPage from './pages/SubcontractorPage';
import Footer from './components/Footer';
import GoogleTranslate from './components/GoogleTranslate';
import LocationPage from './pages/LocationPage';
import LocationsList from './pages/LocationsList';
import BrochurePage from './pages/BrochurePage';

function HomePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [estimateData, setEstimateData] = useState(null);
  

  const handleOpenContactWithEstimate = (data) => {
    setEstimateData(data);
    setIsContactOpen(true);
  };

  const handleOpenContactNormal = () => {
    setEstimateData(null);
    setIsContactOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#8CC63F] selection:text-white">
      <Navbar
        onOpenEstimate={() => {
          const el = document.getElementById('estimator');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenContact={handleOpenContactNormal}
        />
      
      <main>
        <Hero
          onOpenEstimate={() => {
            const el = document.getElementById('estimator');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenContact={handleOpenContactNormal}
        
        />
        <TrustBadges />
        <CostEstimator onOpenContactWithEstimate={handleOpenContactWithEstimate} />
        <BeforeAfterSlider />
        <Services onOpenContact={handleOpenContactNormal}
         />
        <PortfolioGallery onOpenContact={handleOpenContactNormal}
         />
        
        {/* Call to action for the massive location directory */}
        <div className="bg-slate-900 py-16 border-y border-slate-800 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Serving the Entire Lower Mainland</h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8">From Deep Cove to South Surrey, we are BC's premier builder.</p>
            <Link to="/locations" className="px-8 py-3 bg-[#8CC63F] text-slate-950 font-bold uppercase tracking-wider rounded-lg hover:bg-white transition-colors">
              View All 150+ Service Areas
            </Link>
        </div>

        <ProcessTimeline onOpenContact={handleOpenContactNormal}
         />
        <AboutOwner onOpenContact={handleOpenContactNormal}
         />
        <Testimonials />
        <FAQ />
        
        {/* SUPERCHARGED SEO CONTENT BLOCK */}
        <section className="bg-slate-50 py-24 border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-6">
            <article className="prose prose-lg prose-slate max-w-none">
              <h2 className="text-4xl font-extrabold text-slate-900 mb-8">Walker General Contractors: Vancouver's Premier Construction Specialists</h2>
              
              <p className="text-slate-700 leading-relaxed mb-6">
                When you are looking for premier solutions from a trusted builder in British Columbia, <strong>Walker General Contractors</strong> stands unmatched. With decades of combined experience across residential renovations, custom home builds, and large-scale commercial developments, we are proud to be the leading specialists in Vancouver's highly competitive construction industry.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-[#8CC63F] pb-2 inline-block">Proven Results & Excellence</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Our foundation is built on transparency, structural integrity, and architectural brilliance. We don't just build houses; we engineer dream homes that withstand the test of time. Discover proven results through our extensive portfolio of award-winning kitchen remodels, high-end bathroom renovations, and flawless home additions. Every project is backed by our rock-solid warranty and unwavering commitment to client satisfaction.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 border-b-2 border-[#8CC63F] pb-2 inline-block">Certified Specialists</h3>
                  <p className="text-slate-700 leading-relaxed">
                    We employ a dedicated team of fully licensed, bonded, and insured Red Seal carpenters, master electricians, and highly certified specialists. Navigating Vancouver's complex municipal zoning laws and building permits can be a nightmare, but our dedicated project managers handle everything from initial architectural drafting to the final city inspection. We ensure your project is 100% compliant and built to the absolute highest modern safety standards.
                  </p>
                </div>
              </div>

              <div className="mt-16 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Get Fast, Transparent Quotes Today</h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Don't trust your biggest investment to unverified contractors. Whether you are planning a full gut-renovation of a heritage home in Kitsilano or building a custom modern estate in West Vancouver, we provide brutally honest timelines and fast, transparent quotes with zero hidden fees. Contact us today and let's bring your vision to life.
                </p>
                <button onClick={handleOpenContactNormal} className="px-8 py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-[#8CC63F] hover:text-slate-900 transition-colors uppercase tracking-wide">
                  Schedule Your Free Consultation
                </button>
              </div>
            </article>
          </div>
        </section>

      </main>

      <Footer 
        onOpenContact={handleOpenContactNormal}
        />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialEstimateData={estimateData}
      />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/locations" element={<LocationsList />} />
          <Route path="/overview" element={<BrochurePage />} />
      <Route path="/subcontractors" element={<SubcontractorPage />} />
      <Route path="/locations/:main/:sub" element={<LocationPage />} />
    </Routes>
  );
}
