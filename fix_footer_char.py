import re
with open('src/components/Footer.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = re.sub(r'.*?&copy;', '&copy;', content)

with open('src/components/Footer.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
