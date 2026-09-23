import re

with open('src/App.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the missing onOpenSubcontractor prop in Navbar
old_navbar = """      <Navbar
        onOpenEstimate={() => {
          const el = document.getElementById('estimator');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenContact={handleOpenContactNormal}
        
      />"""

new_navbar = """      <Navbar
        onOpenEstimate={() => {
          const el = document.getElementById('estimator');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenContact={handleOpenContactNormal}
        onOpenSubcontractor={() => setIsSubcontractorOpen(true)}
      />"""

content = content.replace(old_navbar, new_navbar)

with open('src/App.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Navbar prop fixed!")
