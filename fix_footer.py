import re

with open('src/components/Footer.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Make sure Link is imported
if "import { Link }" not in content:
    content = content.replace("import { Phone, Mail, MapPin, ChevronRight, ShieldCheck } from 'lucide-react';", "import { Phone, Mail, MapPin, ChevronRight, ShieldCheck } from 'lucide-react';\nimport { Link } from 'react-router-dom';")

content = content.replace('export default function Footer({ onOpenContact, onOpenSubcontractor }) {', 'export default function Footer({ onOpenContact }) {')
content = content.replace('<li><button onClick={onOpenSubcontractor} className="hover:text-[#8CC63F] transition-colors text-left">Trade & Subcontractor Portal</button></li>', '<li><Link to="/subcontractors" className="hover:text-[#8CC63F] transition-colors text-left">Trade & Subcontractor Portal</Link></li>')

with open('src/components/Footer.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated Footer!")
