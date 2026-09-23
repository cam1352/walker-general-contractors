import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove the old google translate script
content = re.sub(r'<script type="text/javascript">\s*function googleTranslateElementInit.*?</script>', '', content, flags=re.DOTALL)
content = re.sub(r'<script type="text/javascript"\s*src="//translate\.google\.com/translate_a/element\.js\?cb=googleTranslateElementInit"></script>', '', content)

# Remove the old style that hides the top bar
content = re.sub(r'<style>\s*/\* Hide the annoying top bar Google Translate adds \*/.*?</style>', '', content, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("index.html fixed!")
