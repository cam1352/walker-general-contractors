import React, { useState } from 'react';
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
import Footer from './components/Footer';

export default function App() {
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

        <CostEstimator
          onOpenContactWithEstimate={handleOpenContactWithEstimate}
        />

        <BeforeAfterSlider />

        <Services
          onOpenContact={handleOpenContactNormal}
        />

        <PortfolioGallery
          onOpenContact={handleOpenContactNormal}
        />

        <ProcessTimeline
          onOpenContact={handleOpenContactNormal}
        />

        <AboutOwner
          onOpenContact={handleOpenContactNormal}
        />

        <Testimonials />
        
        {/* Render the 100 FAQs here */}
        <FAQ />
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