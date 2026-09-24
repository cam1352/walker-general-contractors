import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Calculator, ShieldCheck } from 'lucide-react';

export default function ContactModal({ isOpen, onClose, initialEstimateData }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Full Home Renovation',
    location: 'North Vancouver',
    timeline: 'Within 3 Months',
    message: '',
    securityAnswer: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialEstimateData) {
      setFormData(prev => ({
        ...prev,
        service: initialEstimateData.type || prev.service,
        location: initialEstimateData.location || prev.location,
        message: `Estimate Calculation: ${initialEstimateData.sqft} sq ft, ${initialEstimateData.finish} finish. Estimated Range: ${initialEstimateData.estimateRange}`
      }));
    }
  }, [initialEstimateData]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("form-name", "contact");

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })
    .then(() => setSubmitted(true))
    .catch((error) => console.error(error));
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-slate-900 border border-[#8CC63F]/40 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative my-8">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-950/80 border border-slate-700 text-slate-300 hover:text-white flex items-center justify-center"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 sm:p-8 border-b border-slate-800 space-y-2">
          <div className="flex items-center space-x-2 text-xs font-mono text-[#8CC63F] uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            <span>Direct Consultation Request</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white">
            Let's Talk About Your Project
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm">
            Speak directly with Kyle Walker & WGC project managers for your North Vancouver site evaluation.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#8CC63F]/20 text-[#8CC63F] border border-[#8CC63F]/40 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div className="space-y-2">
              <h4 className="text-2xl font-bold text-white">Consultation Request Received!</h4>
              <p className="text-slate-300 text-sm max-w-md mx-auto">
                Thank you, <strong className="text-[#8CC63F]">{formData.name}</strong>. Kyle Walker or a WGC senior estimator will review your details and contact you at <span className="font-mono text-white">{formData.phone || formData.email}</span> within 24 business hours.
              </p>
            </div>
            <div>
              <button
                onClick={handleReset}
                className="px-6 py-3 rounded-xl bg-[#8CC63F] text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-[#7CB334]"
              >
                Return to Website
              </button>
            </div>
          </div>
        ) : (
          <form action="https://formsubmit.co/kyle@walkergeneralcontractors.ca" method="POST" className="p-6 sm:p-8 space-y-5">
            <input type="hidden" name="_subject" value="New Website Inquiry - Walker General Contractors" />
            <input type="hidden" name="_captcha" value="false" />
            
            {initialEstimateData && (
              <div className="p-3 bg-[#8CC63F]/10 border border-[#8CC63F]/30 rounded-xl text-xs text-[#8CC63F] flex items-center space-x-2">
                <Calculator className="w-4 h-4 text-[#8CC63F] flex-shrink-0" />
                <span>Estimate pre-populated from interactive calculator!</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Your Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-[#8CC63F]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="(604) 555-0199"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-[#8CC63F]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="sarah@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-[#8CC63F]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Service Scope</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-[#8CC63F]"
                >
                  <option value="Full Home Renovation">Full Home Renovation</option>
                  <option value="Custom Home Build">Custom Home Build</option>
                  <option value="Laneway House / ADU">Laneway House / ADU</option>
                  <option value="Luxury Kitchen Remodel">Luxury Kitchen Remodel</option>
                  <option value="Spa Bathroom Renovation">Spa Bathroom Renovation</option>
                  <option value="Legal Basement Suite">Legal Basement Suite</option>
                  <option value="Commercial Fit-Out">Commercial Fit-Out</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Project Details & Ideas</label>
              <textarea
                name="message"
                rows="3"
                placeholder="Describe your vision, architectural preferences, or budget parameters..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-[#8CC63F]"
              />
            </div>

            {/* Quick Security Check (5 + 3 = ?) */}
            <div className="flex items-center justify-between p-3 bg-slate-950 rounded-xl border border-slate-800">
              <span className="text-xs text-slate-400 font-mono">Quick Verification: 5 + 3 = ?</span>
              <input
                type="text"
                name="securityAnswer"
                required
                placeholder="Answer"
                value={formData.securityAnswer}
                onChange={(e) => setFormData({ ...formData, securityAnswer: e.target.value })}
                className="w-24 bg-slate-900 border border-slate-700 rounded-lg p-1.5 text-center text-sm text-white font-mono focus:border-[#8CC63F]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[#8CC63F] text-slate-950 font-bold text-sm uppercase tracking-wider hover:bg-[#7CB334] transition-all shadow-xl shadow-[#8CC63F]/25 flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>Submit Free Consultation Request</span>
            </button>

          </form>
        )}

      </div>
    </div>
  );
}
