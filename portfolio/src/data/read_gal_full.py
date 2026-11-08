with open('C:/Users/vasur/.gemini/antigravity/scratch/portfolio/portfolio/src/data/projects.ts', 'r', encoding='utf-8') as f:
    content = f.read()

import re
for slug in ['ubu', 'lasowiak-cranberry-liqueur']:
    idx = content.find(f"slug: '{slug}'")
    if idx != -1:
        chunk = content[idx:idx+3500]
        gal_imgs = re.findall(r"img\('([^']+)'", chunk)
        print(f'{slug} images:', gal_imgs)
