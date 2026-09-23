import re

with open('src/components/GoogleTranslate.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove includedLanguages entirely so it defaults to all languages
content = re.sub(r"includedLanguages:\s*'[^']+',", "", content)

with open('src/components/GoogleTranslate.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Removed includedLanguages restriction")
