with open('C:/Users/vasur/.gemini/antigravity/scratch/portfolio/portfolio/src/data/projects.ts', 'r', encoding='utf-8') as f:
    content = f.read()

import re
for slug in ['ubu', 'lasowiak-cranberry-liqueur']:
    m = re.search(r'slug:\s*[\'"]' + slug + r'[\'"].*?(?=slug:|$)', content, re.DOTALL)
    if m:
        print(f'=== {slug} ===')
        print(m.group(0)[:1500])
