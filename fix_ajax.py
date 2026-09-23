import re

with open('src/components/SubcontractorPortal.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

old_form = r'<form action="https://formsubmit.co/info@walkergeneralcontractors.ca" method="POST" enctype="multipart/form-data" className="space-y-6">'

new_form = '''<form 
  onSubmit={(e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    fetch("https://formsubmit.co/ajax/info@walkergeneralcontractors.ca", {
        method: "POST",
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        setSubmitted(true);
    })
    .catch(error => {
        console.error(error);
        setSubmitted(true);
    });
  }}
  className="space-y-6"
>'''

content = content.replace('<form action="https://formsubmit.co/info@walkergeneralcontractors.ca" method="POST" enctype="multipart/form-data" className="space-y-6">', new_form)

with open('src/components/SubcontractorPortal.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Ajax form submit added!")
