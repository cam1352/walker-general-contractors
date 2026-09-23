import re

with open('src/components/SubcontractorPortal.jsx', 'r', encoding='utf-8') as f:
    portal = f.read()

# Remove required attributes so HTML5 doesn't silently block the button click
portal = portal.replace('required className', 'className')
portal = portal.replace('required accept', 'accept')

# Replace the fetch logic to include a loading state
old_state = 'const [submitted, setSubmitted] = useState(false);'
new_state = 'const [submitted, setSubmitted] = useState(false);\n  const [isSubmitting, setIsSubmitting] = useState(false);'
portal = portal.replace(old_state, new_state)

old_form = '''              <form 
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

new_form = '''              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsSubmitting(true);
                  const formData = new FormData(e.target);
                  fetch("https://formsubmit.co/ajax/info@walkergeneralcontractors.ca", {
                      method: "POST",
                      body: formData,
                      headers: {
                          'Accept': 'application/json'
                      }
                  })
                  .then(response => {
                      setIsSubmitting(false);
                      setSubmitted(true);
                  })
                  .catch(error => {
                      console.error(error);
                      setIsSubmitting(false);
                      setSubmitted(true);
                  });
                }}
                className="space-y-6"
              >'''
portal = portal.replace(old_form, new_form)

old_submit = '''                <div className="pt-4 border-t border-slate-100">
                  <button 
                    type="submit"
                    className="w-full py-4 bg-slate-950 text-white rounded-xl font-bold tracking-wider hover:bg-[#8CC63F] hover:text-slate-950 transition-all flex justify-center items-center space-x-2"
                  >
                    <ShieldCheck className="w-5 h-5" />
                    <span>Submit For Verification</span>
                  </button>
                </div>'''

new_submit = '''                <div className="pt-4 border-t border-slate-100">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-slate-950 text-white rounded-xl font-bold tracking-wider hover:bg-[#8CC63F] hover:text-slate-950 transition-all flex justify-center items-center space-x-2 disabled:opacity-50"
                  >
                    <ShieldCheck className="w-5 h-5" />
                    <span>{isSubmitting ? "Uploading Documents..." : "Submit For Verification"}</span>
                  </button>
                </div>'''
portal = portal.replace(old_submit, new_submit)

with open('src/components/SubcontractorPortal.jsx', 'w', encoding='utf-8') as f:
    f.write(portal)

print("Portal fixed!")
