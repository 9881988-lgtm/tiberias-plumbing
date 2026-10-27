import json
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlparse
from xml.etree import ElementTree


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = []
        self.links = []
        self.schemas = []
        self.schema = None
        self.lang = None
        self.h1 = 0
        self.canonical = None
        self.alternates = []

    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        if tag == 'html':
            self.lang = attrs['lang']
        if 'id' in attrs:
            self.ids.append(attrs['id'])
        if tag == 'h1':
            self.h1 += 1
        if tag == 'script' and attrs.get('type') == 'application/ld+json':
            self.schema = ''
        if tag == 'link' and attrs.get('rel') == 'canonical':
            self.canonical = attrs['href']
        if tag == 'link' and attrs.get('rel') == 'alternate':
            self.alternates.append(attrs['href'])
        for attr in ['src', 'href']:
            if attrs.get(attr):
                self.links.append(attrs[attr])

    def handle_endtag(self, tag):
        if tag == 'script' and self.schema is not None:
            self.schemas.append(json.loads(self.schema))
            self.schema = None

    def handle_data(self, data):
        if self.schema is not None:
            self.schema += data


agency = Path(__file__).resolve().parents[1]
for language in ['he', 'en', 'ru', 'fr']:
    file = agency / ('' if language == 'he' else language) / 'index.html'
    page = Page()
    page.feed(file.read_text())
    assert page.lang == language
    assert page.h1 == 1
    assert len(page.ids) == len(set(page.ids)), f'Duplicate IDs: {language}'
    assert len(page.schemas) == 1
    assert len(page.alternates) == 5
    assert page.canonical.endswith('/digital-agency/' + ('' if language == 'he' else language + '/'))
    for link in page.links:
        url = urlparse(link)
        if url.scheme or url.netloc:
            continue
        if not url.path:
            assert not url.fragment or unquote(url.fragment) in page.ids, f'Broken anchor {link}'
            continue
        target = file.parent / unquote(url.path)
        if url.path.endswith('/'):
            target /= 'index.html'
        assert target.exists(), f'Missing local target: {target}'
    assert 'DIGITAL100' not in file.read_text()
    assert '123' not in file.read_text()
    print(f'{language}: metadata, JSON-LD, anchors and local resources OK')

ElementTree.parse(agency / 'sitemap.xml')
ElementTree.parse(agency.parent / 'sitemap.xml')
print('Both XML sitemaps parse correctly')
