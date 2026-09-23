import re

# 1. Update App.jsx to remove floating widget
with open('src/App.jsx', 'r', encoding='utf-8') as f:
    app_content = f.read()

# The regex should match any <GoogleTranslate ... />
app_content = re.sub(r'<GoogleTranslate[^>]*>', '', app_content)

with open('src/App.jsx', 'w', encoding='utf-8') as f:
    f.write(app_content)

# 2. Update Navbar.jsx
with open('src/components/Navbar.jsx', 'r', encoding='utf-8') as f:
    nav_content = f.read()

# If GoogleTranslate isn't imported, import it
if "import GoogleTranslate" not in nav_content:
    nav_content = nav_content.replace("import { companyDetails } from '../data/walkerData';", "import { companyDetails } from '../data/walkerData';\nimport GoogleTranslate from './GoogleTranslate';")

# Add to desktop
old_desktop = '''          {/* Action CTAs */}
          <div className="hidden md:flex items-center space-x-3">'''
new_desktop = '''          {/* Action CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            <GoogleTranslate id="google_desktop" className="mr-2" />'''
if 'id="google_desktop"' not in nav_content:
    nav_content = nav_content.replace(old_desktop, new_desktop)

# Add to mobile
old_mobile = '''              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 rounded-lg bg-[#8CC63F] text-white font-bold text-sm uppercase tracking-wider shadow-md"
              >
                Request Free Consultation
              </button>
            </div>
          </div>
      </nav>'''
new_mobile = '''              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 rounded-lg bg-[#8CC63F] text-white font-bold text-sm uppercase tracking-wider shadow-md"
              >
                Request Free Consultation
              </button>
            </div>
            <GoogleTranslate id="google_mobile" className="w-full flex justify-center py-4 border-t border-slate-100" />
          </div>
      </nav>'''
if 'id="google_mobile"' not in nav_content:
    nav_content = nav_content.replace(old_mobile, new_mobile)

with open('src/components/Navbar.jsx', 'w', encoding='utf-8') as f:
    f.write(nav_content)

print("Navbar & App updated for embedded Translate widgets!")
