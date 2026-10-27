import urllib.request
import re

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
req = urllib.request.Request('https://www.lundgrenlindqvist.se/', headers=headers)
with urllib.request.urlopen(req, timeout=10) as r:
    html = r.read().decode('utf-8', errors='ignore')

idx = html.find('CaseCard')
while idx != -1:
    print("--- CaseCard snippet ---")
    print(html[idx-50:idx+400])
    idx = html.find('CaseCard', idx+400)
    if idx > 3000:
        break
