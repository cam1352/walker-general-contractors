import re

with open('src/components/SubcontractorPortal.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update the form tag
old_form = r'<form onSubmit=\{\(e\) => \{ e.preventDefault\(\); setSubmitted\(true\); \}\} className="space-y-6">'
new_form = '''<form action="https://formsubmit.co/info@walkergeneralcontractors.ca" method="POST" enctype="multipart/form-data" className="space-y-6">
            <input type="hidden" name="_subject" value="New Subcontractor Application - Walker General Contractors" />
            <input type="hidden" name="_next" value="https://walkergeneralcontractors.ca/" />
            <input type="hidden" name="_captcha" value="false" />'''
content = re.sub(old_form, new_form, content)

# 2. Add name attributes
content = content.replace('placeholder="e.g. Apex Plumbing Ltd." />', 'name="Company Name" placeholder="e.g. Apex Plumbing Ltd." />')
content = content.replace('className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#8CC63F] outline-none text-slate-700">', 'name="Trade Classification" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#8CC63F] outline-none text-slate-700">')
content = content.replace('placeholder="Required for all site access" />', 'name="WCB Account Number" placeholder="Required for all site access" />')
content = content.replace('placeholder="Policy Number" />', 'name="Liability Policy Number" placeholder="Policy Number" />')

# 3. Fix the file upload
old_upload = '''<div className="w-full border-2 border-dashed border-slate-300 rounded-xl p-6 flex flex-col items-center justify-center bg-white cursor-pointer hover:bg-slate-50 transition-colors">
                      <FileText className="w-8 h-8 text-slate-400 mb-2" />
                      <span className="text-sm font-medium text-slate-600">Click to upload files</span>
                      <span className="text-xs text-slate-400 mt-1">PDF, JPG up to 10MB</span>
                    </div>'''
new_upload = '''<input type="file" name="Clearance Documents" required accept=".pdf,.doc,.docx,.jpg,.png" className="w-full border-2 border-dashed border-slate-300 rounded-xl p-6 flex flex-col items-center justify-center bg-white cursor-pointer hover:bg-slate-50 transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#8CC63F] file:text-white hover:file:bg-[#7CB334]" />'''
content = content.replace(old_upload, new_upload)

with open('src/components/SubcontractorPortal.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Patched Subcontractor Portal!")
