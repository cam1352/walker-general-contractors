import re

with open("src/App.jsx", "r", encoding="utf-8") as f:
    content = f.read()

# First, remove all injected onOpenSubcontractors that shouldn't be there
content = content.replace("onOpenSubcontractor={() => setIsSubcontractorOpen(true)}", "")

# Now inject it specifically ONLY into Navbar and Footer
navbar_target = """<Navbar
        onOpenEstimate={() => {
          const el = document.getElementById('estimator');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenContact={handleOpenContactNormal}
      />"""

navbar_replacement = """<Navbar
        onOpenEstimate={() => {
          const el = document.getElementById('estimator');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenContact={handleOpenContactNormal}
        onOpenSubcontractor={() => setIsSubcontractorOpen(true)}
      />"""

footer_target = """<Footer 
        onOpenContact={handleOpenContactNormal}
      />"""
footer_replacement = """<Footer 
        onOpenContact={handleOpenContactNormal}
        onOpenSubcontractor={() => setIsSubcontractorOpen(true)}
      />"""

content = content.replace(navbar_target, navbar_replacement)
content = content.replace(footer_target, footer_replacement)
# Also just in case the footer already had it with weird spacing
content = re.sub(r'<Footer\s+onOpenContact={handleOpenContactNormal}\s*/>', footer_replacement, content)
content = re.sub(r'<Footer\s+onOpenContact={handleOpenContactNormal}\s+onOpenSubcontractor={[^{}]+}\s*/>', footer_replacement, content)

with open("src/App.jsx", "w", encoding="utf-8") as f:
    f.write(content)