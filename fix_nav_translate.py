import re

with open('src/components/Navbar.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove the desktop GoogleTranslate
content = re.sub(r'<GoogleTranslate id="google_desktop" className="mr-2" />\s*', '', content)
# Remove the id prop from the mobile one since our new component doesn't use it
content = content.replace('<GoogleTranslate id="google_mobile" className="" />', '<GoogleTranslate />')

with open('src/components/Navbar.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Removed desktop GoogleTranslate")
