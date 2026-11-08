with open('C:/Users/vasur/.gemini/antigravity/scratch/portfolio/portfolio/src/styles/globals.css', 'r', encoding='utf-8') as f:
    content = f.read()

append_text = """

@font-face {
  font-family: 'LabGrotesque';
  src: url('/fonts/LabGrotesqueWeb-Regular.woff2') format('woff2'),
       url('/fonts/LabGrotesqueWeb-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

[data-sdl-page],
[data-sdl-page] * {
  font-family: var(--font-lab-grotesque), 'LabGrotesque', 'LabGrotesque-regular', 'Lab Grotesque', sans-serif !important;
}
"""

if '[data-sdl-page]' not in content:
    content += append_text
    with open('C:/Users/vasur/.gemini/antigravity/scratch/portfolio/portfolio/src/styles/globals.css', 'w', encoding='utf-8') as f:
        f.write(content)
    print('Updated globals.css')
else:
    print('Already present')
