import urllib.request
try:
    with urllib.request.urlopen('https://generalcontractorsvancouver.ca') as response:
        html = response.read().decode('utf-8')
        print("FOOTER TEXT FOUND:", "walkergeneralcontractors.ca" in html)
        if "walkergeneralcontractors.ca" in html:
            # Try to print the context
            idx = html.find("walkergeneralcontractors.ca")
            print(html[max(0, idx-100):min(len(html), idx+100)])
except Exception as e:
    print("Error:", e)
