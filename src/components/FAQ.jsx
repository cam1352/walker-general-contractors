import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import faqsData from '../data/faqs.json';

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  // Take the first 10 FAQs to display on the landing page
  const displayFaqs = faqsData.slice(0, 10);

  return (
    <section id="faq" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Find answers to common questions about our construction, renovation, and permitting processes in Vancouver.
          </p>
        </div>

        <div className="space-y-4">
          {displayFaqs.map((faq) => (
            <div 
              key={faq.id} 
              className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 ${openId === faq.id ? 'border-[#8CC63F] shadow-md' : 'border-slate-200 hover:border-slate-300'}`}
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-semibold text-slate-900 pr-8">{faq.question}</span>
                {openId === faq.id ? (
                  <ChevronUp className="w-5 h-5 text-[#8CC63F] shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openId === faq.id ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}