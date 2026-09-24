with open('src/components/Footer.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

old_text = "Ac {new Date().getFullYear()} {companyDetails.name}. All rights reserved. North Vancouver, BC."
new_text = "&copy; {new Date().getFullYear()} <a href=\"https://walkergeneralcontractors.ca\" className=\"hover:text-[#8CC63F] underline underline-offset-2 transition-colors\" target=\"_blank\" rel=\"noopener noreferrer\">{companyDetails.name}</a>. All rights reserved. North Vancouver, BC."

content = content.replace(old_text, new_text)

with open('src/components/Footer.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
