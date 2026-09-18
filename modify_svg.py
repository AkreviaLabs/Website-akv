import re

with open('src/app/icon.svg', 'r') as f:
    content = f.read()

# Replace the inner elements with a wrapped <g> tag for scaling
inner_elements = """<circle cx="32" cy="32" r="17" fill="none" stroke="#1FB6A6" stroke-width="2.38"/>
<line x1="8.1" y1="32.0" x2="14.2" y2="32.0" stroke="#1FB6A6" stroke-width="2.38" stroke-linecap="round"/>
<line x1="55.9" y1="32.0" x2="49.8" y2="32.0" stroke="#1FB6A6" stroke-width="2.38" stroke-linecap="round"/>
<line x1="32.0" y1="8.1" x2="32.0" y2="14.2" stroke="#1FB6A6" stroke-width="2.38" stroke-linecap="round"/>
<line x1="32.0" y1="55.9" x2="32.0" y2="49.8" stroke="#1FB6A6" stroke-width="2.38" stroke-linecap="round"/>
<circle cx="32" cy="32" r="2.9" fill="#1FB6A6"/>"""

scaled_elements = f'<g transform="translate(32, 32) scale(1.3) translate(-32, -32)">\n{inner_elements}\n</g>'

new_content = content.replace(inner_elements, scaled_elements)

with open('src/app/icon.svg', 'w') as f:
    f.write(new_content)

