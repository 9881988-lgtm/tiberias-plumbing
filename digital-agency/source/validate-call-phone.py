import json
import re
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
CALL = '972555071400'
WHATSAPP = '972533613100'
PAGES = [ROOT / 'index.html', ROOT / 'ac-cleaning/index.html', ROOT / 'solar-boilers/index.html']
PAGES += [ROOT / f'structo-robotics/{name}.html' for name in ['index', 'construction-robot-investors', 'solar-drone-investors', 'innovations']]
PAGES += list((ROOT / 'digital-agency').rglob('index.html'))


class Contacts(HTMLParser):
    def __init__(self):
        super().__init__()
        self.calls, self.whatsapp, self.schemas = [], [], []
        self.capture = None

    def handle_starttag(self, tag, attributes):
        a = dict(attributes)
        href = a.get('href', '')
        if href.startswith('tel:'):
            self.calls.append(re.sub(r'\D', '', href[4:]))
        if href.startswith('https://wa.me/'):
            self.whatsapp.append(href.split('/')[3].split('?')[0])
        if tag == 'script' and a.get('type') == 'application/ld+json':
            self.capture = ''

    def handle_data(self, data):
        if self.capture is not None:
            self.capture += data

    def handle_endtag(self, tag):
        if tag == 'script' and self.capture is not None:
            self.schemas.append(json.loads(self.capture))
            self.capture = None


def phones(value):
    if isinstance(value, dict):
        for key, item in value.items():
            if key == 'telephone':
                yield re.sub(r'\D', '', item)
            else:
                yield from phones(item)
    elif isinstance(value, list):
        for item in value:
            yield from phones(item)


calls = 0
for file in PAGES:
    p = Contacts()
    p.feed(file.read_text())
    assert p.calls and set(p.calls) == {CALL}, f'Incorrect call destination in {file}'
    assert p.whatsapp and set(p.whatsapp) == {WHATSAPP}, f'Unverified WhatsApp number in {file}'
    assert set(phones(p.schemas)).issubset({CALL}), f'Incorrect schema phone in {file}'
    calls += len(p.calls)
    print(f'{file.relative_to(ROOT)}: calls -> CRM 1400; WhatsApp -> existing channel')

for directory in ['digital-agency', 'ac-cleaning', 'solar-boilers']:
    for file in (ROOT / directory).glob('*.js'):
        source = file.read_text()
        assert not re.search(r'tel:\+972(?:-?53-?361-?31-?00|533613100)', source)
        assert f'wa.me/{CALL}' not in source

for file in [ROOT / 'script.js', ROOT / 'ac-cleaning/script.js', ROOT / 'solar-boilers/script.js']:
    source = file.read_text()
    assert '+972-53-361-31-00' not in source
    assert '+972-55-507-1400' in source

assert 'wa.me/972533613100' in (ROOT / 'digital-agency/software.js').read_text()
print(f'PASS: {len(PAGES)} pages, {calls} call links, all schema phones and existing WhatsApp routes.')
