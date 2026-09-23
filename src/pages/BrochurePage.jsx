import React from 'react';

export default function BrochurePage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-8 text-center">Company Overview</h1>
        <div style={{ position: 'relative', width: '100%', height: '0', paddingTop: '141.4285%', paddingBottom: '0', boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform' }}>
          <iframe 
            loading="lazy" 
            style={{ position: 'absolute', width: '100%', height: '100%', top: '0', left: '0', border: 'none', padding: '0', margin: '0' }}
            src="https://www.canva.com/design/DAHUKwbGu6I/view?embed" 
            allowFullScreen="allowfullscreen" 
            allow="fullscreen"
          >
          </iframe>
        </div>
      </div>
    </div>
  );
}
