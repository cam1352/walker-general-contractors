import re

with open('src/components/SubcontractorPortal.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove the _next redirect so it goes to FormSubmit's default Success page
content = re.sub(r'<input type="hidden" name="_next".*?/>', '', content)

with open('src/components/SubcontractorPortal.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Removed _next from SubcontractorPortal")
