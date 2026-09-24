import re

with open('src/components/Footer.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the copyright symbol and add the link
old_line = "Ac {new Date().getFullYear()} {companyDetails.name}. All rights reserved. North Vancouver, BC."
new_line = "&copy; {new Date().getFullYear()} <a href=\"https://walkergeneralcontractors.ca\" className=\"hover:text-[#8CC63F] underline underline-offset-2 transition-colors\">{companyDetails.name}</a>. All rights reserved. North Vancouver, BC."

content = content.replace(old_line, new_line)

with open('src/components/Footer.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Footer link and copyright fixed!")
