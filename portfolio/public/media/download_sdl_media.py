import urllib.request
import os

os.makedirs('C:/Users/vasur/.gemini/antigravity/scratch/portfolio/portfolio/public/media/sdl', exist_ok=True)

downloads = {
    # Viedoc / Askul
    'sdl-viedoc-system.png': 'https://cdn.sanity.io/images/6uvtz1ot/production/3993c327d5d1db69eb127e4b26ffb65e0a8ba0c4-5760x2881.png?w=2000&fm=jpg&q=85&auto=format',
    'sdl-askul-identity.jpg': 'https://cdn.sanity.io/images/6uvtz1ot/production/1ce6ae64229d0af07dd214ec94e8e11c672588f2-3000x2000.jpg?w=2000&fm=jpg&q=85&auto=format',
    'sdl-viedoc-ui.png': 'https://cdn.sanity.io/images/6uvtz1ot/production/1c4b50a43fcf8e547a8b22e3ce433568955a9214-2160x2161.png?w=2000&fm=jpg&q=85&auto=format',
    # Omaka
    'sdl-omaka-cans.jpg': 'https://cdn.sanity.io/images/6uvtz1ot/production/0d123b8b470b6b95cbda440430b1fcdcd0c8ab15-2000x1333.jpg?w=2000&fm=jpg&q=85&auto=format',
    'sdl-omaka-identity.jpg': 'https://cdn.sanity.io/images/6uvtz1ot/production/3ae9aa298d8cf62ed73aa465950fc1a0d80bbfd2-2000x1333.jpg?w=2000&fm=jpg&q=85&auto=format',
    'sdl-omaka-bottles.jpg': 'https://cdn.sanity.io/images/6uvtz1ot/production/2d930352c44e3801685bb9dc55d6faa546e3167b-2000x1333.jpg?w=2000&fm=jpg&q=85&auto=format',
    # Orionteatern
    'sdl-orionteatern-posters.jpg': 'https://cdn.sanity.io/images/6uvtz1ot/production/18b7e7d9dd5ee9d884a4bbddcad87b32e2458057-2000x1333.jpg?w=2000&fm=jpg&q=85&auto=format',
    'sdl-orionteatern-identity.png': 'https://cdn.sanity.io/images/6uvtz1ot/production/5708be4eea7cfda6dcee67a92f1455a5aa5670ac-3840x2560.png?w=2000&fm=jpg&q=85&auto=format',
    'sdl-orionteatern-workshop.jpg': 'https://cdn.sanity.io/images/6uvtz1ot/production/3b7d0454c5744d5a3aee53aecc0bc8ecafa66929-1620x1080.jpg?w=2000&fm=jpg&q=85&auto=format',
}

headers = {'User-Agent': 'Mozilla/5.0'}

for name, url in downloads.items():
    path = f'C:/Users/vasur/.gemini/antigravity/scratch/portfolio/portfolio/public/media/sdl/{name}'
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as resp:
            data = resp.read()
            with open(path, 'wb') as f:
                f.write(data)
            print(f'Downloaded {name}: {len(data)} bytes')
    except Exception as e:
        print(f'Failed {name}: {e}')
