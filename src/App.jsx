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
import SubcontractorPortal from './components/SubcontractorPortal';
import Footer from './components/Footer';
import GoogleTranslate from './components/GoogleTranslate';
import LocationPage from './pages/LocationPage';
import LocationsList from './pages/LocationsList';
import BrochurePage from './pages/BrochurePage';

function HomePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [estimateData, setEstimateData] = useState(null);
  const [isSubcontractorOpen, setIsSubcontractorOpen] = useState(false);

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
      </main>

      <Footer 
        onOpenContact={handleOpenContactNormal}
        onOpenSubcontractor={() => setIsSubcontractorOpen(true)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        initialEstimateData={estimateData}
      />
      
      
      <GoogleTranslate id="google_desktop" className="hidden lg:flex fixed bottom-6 left-6 z-[100] bg-white p-2 rounded-xl shadow-2xl border border-slate-200" />
        <SubcontractorPortal isOpen={isSubcontractorOpen} onClose={() => setIsSubcontractorOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/locations" element={<LocationsList />} />
          <Route path="/overview" element={<BrochurePage />} />
      <Route path="/locations/:main/:sub" element={<LocationPage />} />
    </Routes>
  );
}



