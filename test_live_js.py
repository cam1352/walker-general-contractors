import urllib.request
import re

try:
    with urllib.request.urlopen('https://generalcontractorsvancouver.ca') as response:
        html = response.read().decode('utf-8')
        
    # Find the main JS file
    match = re.search(r'src="(/assets/index-.*?\.js)"', html)
    if match:
        js_url = 'https://generalcontractorsvancouver.ca' + match.group(1)
        print("Fetching JS:", js_url)
        with urllib.request.urlopen(js_url) as js_response:
            js = js_response.read().decode('utf-8')
            print("FOOTER TEXT IN JS:", "walkergeneralcontractors.ca" in js)
    else:
        print("No JS bundle found")
except Exception as e:
    print("Error:", e)
