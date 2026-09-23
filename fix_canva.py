import re

with open('src/pages/BrochurePage.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the Canva iframe with a text block
new_content = """import React from 'react';

export default function BrochurePage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Company Overview</h1>
        <p className="text-xl text-slate-600">Walker General Contractors has been building Vancouver's future for over a decade. Check back soon for our updated company portfolio and media kit.</p>
      </div>
    </div>
  );
}"""

with open('src/pages/BrochurePage.jsx', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Brochure page updated!")
