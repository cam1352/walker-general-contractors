import re

with open('src/components/ContactModal.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the React onSubmit logic and standard form tag with a FormSubmit action
old_form = r'<form onSubmit=\{handleSubmit\} className="p-6 sm:p-8 space-y-5">'
new_form = '''<form action="https://formsubmit.co/kyle@walkergeneralcontractors.ca" method="POST" className="p-6 sm:p-8 space-y-5">
            <input type="hidden" name="_subject" value="New Website Inquiry - Walker General Contractors" />
            <input type="hidden" name="_captcha" value="false" />'''

content = re.sub(old_form, new_form, content)

# If there is a "form-name" hidden input for netlify, remove it
content = re.sub(r'<input type="hidden" name="form-name" value="contact" />', '', content)

# Remove the initial handleSubmit / fetch logic 
# We'll just leave the function there but it won't be called, or we can clean it up.
content = re.sub(r'const handleSubmit = \(e\) => \{.*?setSubmitted\(false\);\n  \};', '', content, flags=re.DOTALL)

with open('src/components/ContactModal.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("ContactModal updated!")
