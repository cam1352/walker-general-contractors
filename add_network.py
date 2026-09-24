import re

with open('src/components/Footer.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

network_html = """
          {/* Partner Network */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Our Network</h4>
            <ul className="space-y-2">
              <li><a href="https://walkergeneralcontractors.ca" target="_blank" rel="noopener noreferrer" className="hover:text-[#8CC63F] transition-colors">Walker General Contractors</a></li>
              <li><a href="https://vancouvercustomhome.ca" target="_blank" rel="noopener noreferrer" className="hover:text-[#8CC63F] transition-colors">Vancouver Custom Homes</a></li>
              <li><a href="https://mailorderpharmacy.io" target="_blank" rel="noopener noreferrer" className="hover:text-[#8CC63F] transition-colors">Mail Order Pharmacy</a></li>
              <li><a href="https://calorietracker.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-[#8CC63F] transition-colors">NutriSnap AI Tracker</a></li>
            </ul>
          </div>
"""

# We'll inject this right before the "Contact Us" or "Navigation" column
content = content.replace('{/* Quick Links */}', network_html + '\n          {/* Quick Links */}')

with open('src/components/Footer.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Walker Footer Updated!")
