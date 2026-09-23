import re

with open('src/pages/SubcontractorPage.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Change the email destination to Kyle's email
content = content.replace('https://formsubmit.co/info@walkergeneralcontractors.ca', 'https://formsubmit.co/kyle@walkergeneralcontractors.ca')

with open('src/pages/SubcontractorPage.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated destination to Kyle's email")
