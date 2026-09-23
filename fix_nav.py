import re

with open('src/components/Navbar.jsx', 'r', encoding='utf-8') as f:
    nav = f.read()

# Remove the old GoogleTranslate from the bottom
nav = re.sub(r'<GoogleTranslate id="google_mobile" className="w-full flex justify-center py-4 border-t border-slate-100" />', '', nav)

# Add it below Subcontractor Login
old_button = '''              <button onClick={() => { setMobileMenuOpen(false); onOpenSubcontractor(); }} className="block w-full text-left text-slate-700 hover:text-[#8CC63F] font-bold py-2 border-b border-slate-100 flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#8CC63F]"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
                <span>Subcontractor Compliance Login</span>
              </button>'''

new_button = old_button + '''\n              <div className="py-2 border-b border-slate-100 flex items-center justify-start"><GoogleTranslate id="google_mobile" className="" /></div>'''

nav = nav.replace(old_button, new_button)

with open('src/components/Navbar.jsx', 'w', encoding='utf-8') as f:
    f.write(nav)

print("Navbar updated!")
