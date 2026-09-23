import re
with open("src/components/Navbar.jsx", "r", encoding="utf-8") as f:
    c = f.read()
c = c.replace("</a>\n\n          {/* Desktop Navigation */}", "</Link>\n\n          {/* Desktop Navigation */}")
# fallback replace just in case
c = re.sub(r'</a>(\s*<!-- Desktop Navigation -->|\s*\{\/\* Desktop Navigation \*\/})', r'</Link>\g<1>', c)
with open("src/components/Navbar.jsx", "w", encoding="utf-8") as f:
    f.write(c)