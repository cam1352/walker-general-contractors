import re
import os

# 1. Read existing SubcontractorPortal.jsx
with open('src/components/SubcontractorPortal.jsx', 'r', encoding='utf-8') as f:
    portal = f.read()

# 2. Convert it to a standalone Page
portal = portal.replace('export default function SubcontractorPortal({ isOpen, onClose }) {', 'export default function SubcontractorPage() {')
portal = portal.replace('if (!isOpen) return null;', '')
portal = portal.replace('className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"', 'className="min-h-screen bg-slate-50 pt-32 pb-24 px-4"')
portal = portal.replace('<div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={onClose} />', '')
# Remove the X close button
portal = re.sub(r'<button onClick=\{onClose\}.*?<X className="w-5 h-5" />\s*</button>', '', portal, flags=re.DOTALL)
# Make it take full width but constrained, not a popup
portal = portal.replace('relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]', 'relative w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col')
# It's no longer scrollable internally, it scrolls with the page
portal = portal.replace('className="p-6 overflow-y-auto"', 'className="p-8"')

with open('src/pages/SubcontractorPage.jsx', 'w', encoding='utf-8') as f:
    f.write(portal)

# 3. Add to App.jsx
with open('src/App.jsx', 'r', encoding='utf-8') as f:
    app = f.read()

app = app.replace("import SubcontractorPortal from './components/SubcontractorPortal';", "import SubcontractorPage from './pages/SubcontractorPage';")
app = re.sub(r'<SubcontractorPortal isOpen=\{isSubcontractorOpen\} onClose=\{.*\} />', '', app)
app = app.replace("const [isSubcontractorOpen, setIsSubcontractorOpen] = useState(false);", "")
# Fix Navbar and Footer props in App.jsx
app = re.sub(r'onOpenSubcontractor=\{.*?\}\s*', '', app)
# Add Route
app = app.replace('<Route path="/overview" element={<BrochurePage />} />', '<Route path="/overview" element={<BrochurePage />} />\n      <Route path="/subcontractors" element={<SubcontractorPage />} />')

with open('src/App.jsx', 'w', encoding='utf-8') as f:
    f.write(app)

# 4. Modify Navbar.jsx
with open('src/components/Navbar.jsx', 'r', encoding='utf-8') as f:
    nav = f.read()

# Change the desktop top bar text to a Link
nav = nav.replace('<button onClick={onOpenSubcontractor} className="flex items-center space-x-1 hover:text-[#8CC63F]', '<Link to="/subcontractors" className="flex items-center space-x-1 hover:text-[#8CC63F]')
nav = nav.replace('<span>Subcontractor Login</span>\n            </button>', '<span>Subcontractor Login</span>\n            </Link>')

# Change the mobile menu button to a Link
mobile_btn = '''<button onClick={() => { setMobileMenuOpen(false); onOpenSubcontractor(); }} className="block w-full text-left text-slate-700 hover:text-[#8CC63F] font-bold py-2 border-b border-slate-100 flex items-center space-x-2">'''
mobile_link = '''<Link to="/subcontractors" onClick={() => setMobileMenuOpen(false)} className="block w-full text-left text-slate-700 hover:text-[#8CC63F] font-bold py-2 border-b border-slate-100 flex items-center space-x-2">'''
nav = nav.replace(mobile_btn, mobile_link)
nav = nav.replace('<span>Subcontractor Compliance Login</span>\n            </button>', '<span>Subcontractor Compliance Login</span>\n            </Link>')

with open('src/components/Navbar.jsx', 'w', encoding='utf-8') as f:
    f.write(nav)

print("Refactored into SubcontractorPage!")
