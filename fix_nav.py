import re

with open('src/components/Navbar.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add GoogleTranslate import
content = content.replace("import { companyDetails } from '../data/walkerData';", "import { companyDetails } from '../data/walkerData';\nimport GoogleTranslate from './GoogleTranslate';")

# 2. Add Overview Link
content = content.replace('<a href="#faq" className="hover:text-[#8CC63F] transition-colors">FAQ</a>', '<a href="#faq" className="hover:text-[#8CC63F] transition-colors">FAQ</a>\n              <Link to="/overview" className="hover:text-[#8CC63F] transition-colors">Company Overview</Link>')
content = content.replace('<a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block text-slate-700 hover:text-[#8CC63F] font-bold py-2 border-b border-slate-100">Frequently Asked Questions</a>', '<a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block text-slate-700 hover:text-[#8CC63F] font-bold py-2 border-b border-slate-100">Frequently Asked Questions</a>\n              <Link to="/overview" onClick={() => setMobileMenuOpen(false)} className="block text-slate-700 hover:text-[#8CC63F] font-bold py-2 border-b border-slate-100">Company Overview</Link>')

# 3. Change mobile menu to use CSS visibility
content = content.replace('{mobileMenuOpen && (', '')

# Replace the specific closing )} that corresponds to the mobileMenuOpen block.
# We know it's right before </nav>
content = content.replace('        )}\n      </nav>', '      </nav>')

# And we need to change the class name of the mobile menu
old_mobile_class = '<div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 shadow-xl">'
new_mobile_class = '<div className={lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 shadow-xl transition-all duration-300 overflow-hidden }>'
content = content.replace(old_mobile_class, new_mobile_class)

# 4. Inject Google Translate into the bottom of the mobile menu
old_bottom = '''                </button>
              </div>
            </div>'''
new_bottom = '''                </button>
              </div>
              <GoogleTranslate id="google_mobile" className="w-full flex justify-center py-4 border-t border-slate-100" />
            </div>'''
content = content.replace(old_bottom, new_bottom)

with open('src/components/Navbar.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
