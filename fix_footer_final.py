with open('src/components/Footer.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

import re
# We know the line ends with "All rights reserved. North Vancouver, BC."
content = re.sub(r'[^>]*\{new Date\(\)\.getFullYear\(\)\} \{companyDetails\.name\}\. All rights reserved\. North Vancouver, BC\.',
                 '&copy; {new Date().getFullYear()} <a href="https://walkergeneralcontractors.ca" className="hover:text-[#8CC63F] underline underline-offset-2 transition-colors" target="_blank" rel="noopener noreferrer">{companyDetails.name}</a>. All rights reserved. North Vancouver, BC.',
                 content)

with open('src/components/Footer.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
