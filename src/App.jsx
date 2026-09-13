import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CostEstimator from './components/CostEstimator';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import Services from './components/Services';
import PortfolioGallery from './components/PortfolioGallery';
import ProcessTimeline from './components/ProcessTimeline';
import AboutOwner from './components/AboutOwner';
import Testimonials from './components/Testimonials';
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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
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
