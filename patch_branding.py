import re

# PATCH NAVBAR
with open("src/components/Navbar.jsx", "r", encoding="utf-8") as f:
    nav_content = f.read()

nav_target = """<a href="#" className="flex items-center space-x-3 group">
            <img 
              src="https://walkergeneralcontractors.ca/wp-content/uploads/2026/03/Walker-logo.png" 
              alt="Walker General Contractors Logo" 
              className="h-12 w-auto object-contain group-hover:opacity-90 transition-opacity"
            />
          </a>"""

nav_replacement = """<a href="#" className="flex items-center space-x-3 group">
            <img 
              src="https://walkergeneralcontractors.ca/wp-content/uploads/2026/03/Walker-logo.png" 
              alt="Walker General Contractors Logo" 
              className="h-12 w-auto object-contain group-hover:opacity-90 transition-opacity"
            />
            <div className="flex flex-col hidden sm:flex">
              <span className="font-heading font-extrabold text-lg sm:text-xl tracking-wider text-slate-900 uppercase group-hover:text-[#8CC63F] transition-colors leading-tight">
                GENERAL CONTRACTORS
              </span>
              <span className="text-[11px] tracking-[0.2em] text-[#808285] uppercase font-bold">
                Vancouver
              </span>
            </div>
          </a>"""

nav_content = nav_content.replace(nav_target, nav_replacement)
with open("src/components/Navbar.jsx", "w", encoding="utf-8") as f:
    f.write(nav_content)

# PATCH FOOTER
with open("src/components/Footer.jsx", "r", encoding="utf-8") as f:
    foot_content = f.read()

foot_target = """<div className="flex items-center space-x-3">
              <img 
                src="https://walkergeneralcontractors.ca/wp-content/uploads/2026/03/Walker-logo.png" 
                alt="Walker General Contractors Logo" 
                className="h-12 w-auto object-contain bg-white/10 rounded-lg p-1"
              />
            </div>"""

foot_replacement = """<div className="flex items-center space-x-3">
              <img 
                src="https://walkergeneralcontractors.ca/wp-content/uploads/2026/03/Walker-logo.png" 
                alt="Walker General Contractors Logo" 
                className="h-12 w-auto object-contain bg-white/10 rounded-lg p-1"
              />
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg tracking-wider text-white uppercase leading-tight">
                  GENERAL CONTRACTORS
                </span>
                <span className="text-[11px] tracking-[0.2em] text-[#808285] uppercase font-bold">
                  Vancouver
                </span>
              </div>
            </div>"""

foot_content = foot_content.replace(foot_target, foot_replacement)
with open("src/components/Footer.jsx", "w", encoding="utf-8") as f:
    f.write(foot_content)

print("Navbar and Footer branding successfully updated to 'General Contractors Vancouver'.")