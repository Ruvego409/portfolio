with open('C:/Users/vasur/.gemini/antigravity/scratch/portfolio/portfolio/src/data/projects.ts', 'r', encoding='utf-8') as f:
    content = f.read()

import re
for slug in ['ubu', 'lasowiak-cranberry-liqueur', 'sheetsolved']:
    m = re.search(r'slug:\s*[\'"]' + slug + r'[\'"].*?(?=gallery:)(.*?)(?=\n\s*\},|\n\s*related:)', content, re.DOTALL)
    if m:
        gal = re.findall(r'(?:img|video)\([\'"]([^\'"]+)[\'"]', m.group(0))
        print(f'{slug}: {gal}')
