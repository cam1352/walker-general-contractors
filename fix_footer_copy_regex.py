import re

with open('src/components/Footer.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace using regex to avoid spacing issues
content = re.sub(r'Ac \{new Date\(\)\.getFullYear\(\)\} \{companyDetails\.name\}\. All rights reserved\. North Vancouver, BC\.', 
                 '&copy; {new Date().getFullYear()} <a href="https://walkergeneralcontractors.ca" className="hover:text-[#8CC63F] underline underline-offset-2 transition-colors">{companyDetails.name}</a>. All rights reserved. North Vancouver, BC.', 
                 content)

with open('src/components/Footer.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Footer link fixed via Regex!")
