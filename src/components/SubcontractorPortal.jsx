import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

export default function SubcontractorPortal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-slate-950 p-6 text-white flex justify-between items-start shrink-0 border-b border-[#8CC63F]/30">
          <div>
            <div className="flex items-center space-x-2 text-[#8CC63F] mb-1">
              <ShieldCheck className="w-5 h-5" />
              <span className="font-bold tracking-wider text-xs uppercase">Compliance Portal</span>
            </div>
            <h2 className="text-xl md:text-2xl font-extrabold">Subcontractor Pre-Qualification</h2>
            <p className="text-slate-400 text-sm mt-1">Walker General Contractors requires 100% legal compliance for all trades.</p>
          </div>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto">
          <form action="https://formsubmit.co/info@walkergeneralcontractors.ca" method="POST" encType="multipart/form-data" className="space-y-6">
            <input type="hidden" name="_subject" value="New Subcontractor Application - Walker General Contractors" />
            
            <input type="hidden" name="_captcha" value="false" />

            {/* Company Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold border-b pb-2 flex items-center space-x-2">
                <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-sm">1</span>
                <span>Company Details</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Legal Company Name</label>
                  <input type="text" name="Company Name" required placeholder="e.g. Apex Plumbing Ltd." className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#8CC63F] focus:border-[#8CC63F] outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Trade Classification</label>
                  <select name="Trade Classification" required className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#8CC63F] outline-none text-slate-700">
                    <option value="">Select Primary Trade...</option>
                    <option value="electrical">Electrical</option>
                    <option value="plumbing">Plumbing</option>
                    <option value="hvac">HVAC</option>
                    <option value="framing">Framing &amp; Structural</option>
                    <option value="drywall">Drywall &amp; Taping</option>
                    <option value="painting">Painting</option>
                    <option value="concrete">Concrete &amp; Foundation</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Contact Person</label>
                  <input type="text" name="Contact Person" required placeholder="Full name" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#8CC63F] outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
                  <input type="email" name="Email" required placeholder="contact@company.ca" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#8CC63F] outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Phone Number</label>
                <input type="tel" name="Phone" required placeholder="(604) 000-0000" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#8CC63F] outline-none" />
              </div>
            </div>

            {/* Mandatory Compliance */}
            <div className="space-y-4 pt-2">
              <h3 className="text-lg font-bold border-b pb-2 flex items-center space-x-2 text-red-600">
                <span className="bg-red-50 text-red-600 px-2 py-0.5 rounded text-sm border border-red-200">2</span>
                <span>Mandatory Compliance</span>
              </h3>
              <div className="bg-red-50/50 p-4 rounded-xl border border-red-100 space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">WorkSafeBC (WCB) Account Number</label>
                  <input type="text" name="WCB Account Number" required placeholder="Required for all site access" className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-red-400 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Commercial General Liability ($2M Minimum) — Policy Number</label>
                  <input type="text" name="Liability Policy Number" required placeholder="Policy Number" className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-red-400 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Upload Clearance Letter &amp; Insurance Docs (PDF)</label>
                  <input type="file" name="Clearance Documents" accept=".pdf,.doc,.docx,.jpg,.png" className="w-full border-2 border-dashed border-slate-300 rounded-xl p-6 bg-white cursor-pointer hover:bg-slate-50 transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#8CC63F] file:text-white hover:file:bg-[#7CB334]" />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <button
                type="submit"
                className="w-full py-4 bg-slate-950 text-white rounded-xl font-bold tracking-wider hover:bg-[#8CC63F] hover:text-slate-950 transition-all flex justify-center items-center space-x-2"
              >
                <ShieldCheck className="w-5 h-5" />
                <span>Submit For Verification</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}