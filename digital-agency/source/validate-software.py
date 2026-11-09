import json
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse, unquote
from xml.etree import ElementTree as ET

ROOT = Path(__file__).resolve().parents[2]
BASE = 'https://9881988-lgtm.github.io/tiberias-plumbing/'
ROUTES = ['software', 'galany-crm', 'ai-sales-agent', 'call-center-software']


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids, self.links, self.alternates, self.schemas = [], [], {}, []
        self.meta = {}
        self.h1 = 0
        self.title = ''
        self.capture_title = False
        self.script = None

    def handle_starttag(self, tag, attributes):
        a = dict(attributes)
        if tag == 'html':
            self.lang, self.direction = a['lang'], a['dir']
        if a.get('id'):
            self.ids.append(a['id'])
        if tag == 'h1':
            self.h1 += 1
        if tag == 'title':
            self.capture_title = True
        if tag == 'meta':
            self.meta[a.get('name', a.get('property'))] = a.get('content', '')
        if tag == 'link' and a.get('rel') == 'canonical':
            self.canonical = a['href']
        if tag == 'link' and a.get('rel') == 'alternate':
            self.alternates[a['hreflang']] = a['href']
        if tag == 'script' and a.get('type') == 'application/ld+json':
            self.script = ''
        for field in ['href', 'src']:
            if a.get(field):
                self.links.append(a[field])

    def handle_data(self, data):
        if self.capture_title:
            self.title += data
        if self.script is not None:
            self.script += data

    def handle_endtag(self, tag):
        if tag == 'title':
            self.capture_title = False
        if tag == 'script' and self.script is not None:
            self.schemas.append(json.loads(self.script))
            self.script = None


titles, descriptions, urls = set(), set(), set()
for route in ROUTES:
    for lang in ['he', 'ru', 'en']:
        relative = f'digital-agency/{route}/' + ('' if lang == 'he' else lang + '/')
        file = ROOT / relative / 'index.html'
        raw = file.read_text()
        p = Page()
        p.feed(raw)
        canonical = BASE + relative
        assert p.lang == lang and p.direction == ('rtl' if lang == 'he' else 'ltr')
        assert p.h1 == 1 and len(p.ids) == len(set(p.ids)), file
        assert p.canonical == canonical and p.meta['og:url'] == canonical
        assert p.meta['robots'].startswith('index,follow')
        assert p.meta['description'] and p.meta['twitter:card'] == 'summary_large_image'
        assert p.title not in titles and p.meta['description'] not in descriptions
        titles.add(p.title)
        descriptions.add(p.meta['description'])
        assert set(p.alternates) == {'he-IL', 'ru', 'en', 'x-default'}
        for language in ['he', 'ru', 'en']:
            expected = BASE + f'digital-agency/{route}/' + ('' if language == 'he' else language + '/')
            assert p.alternates['he-IL' if language == 'he' else language] == expected
        for link in p.links:
            parsed = urlparse(link)
            if parsed.scheme or parsed.netloc:
                continue
            if not parsed.path:
                assert not parsed.fragment or unquote(parsed.fragment) in p.ids, link
                continue
            target = file.parent / unquote(parsed.path)
            if parsed.path.endswith('/'):
                target /= 'index.html'
            assert target.exists(), f'Missing resource: {target}'
        graph = p.schemas[0]['@graph']
        assert any(x['@type'] == 'FAQPage' for x in graph)
        assert any(x['@type'] == 'BreadcrumbList' for x in graph)
        assert 'aggregateRating' not in raw and 'ratingCount' not in raw
        if route != 'software':
            app = next(x for x in graph if x['@type'] == 'SoftwareApplication')
            assert len(app['offers']) == 5
            assert [x['priceSpecification']['price'] for x in app['offers']] == ['1000', '2000', '3000', '12960', '12960']
            assert all(x['priceSpecification']['valueAddedTaxIncluded'] is False for x in app['offers'][1:])
        assert raw.count('class="crm-plan"') == 5
        assert '9881988@gmail.com' in raw and 'tel:+972555071400' in raw
        assert 'demo-privacy' in p.ids and 'cost-total' in p.ids
        assert '91.107.216.53' not in raw
        assert 'без НДС' in raw if lang == 'ru' else ('אינם כוללים מע״מ' in raw if lang == 'he' else 'exclude VAT' in raw)
        urls.add(canonical)
        print(f'{relative}: static content, links, metadata, hreflang, schema and prices OK')

ns = {'s': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
for sitemap in [ROOT / 'sitemap.xml', ROOT / 'digital-agency/sitemap.xml']:
    entries = [x.text for x in ET.parse(sitemap).findall('s:url/s:loc', ns)]
    assert len(entries) == len(set(entries)), sitemap
    assert urls.issubset(set(entries)), sitemap
assert (ROOT / 'scripts/apps-catalog-template.html').read_bytes() == (ROOT / 'structo-robotics/apps.html').read_bytes()
assert 'Galany CRM' in (ROOT / 'structo-robotics/apps.html').read_text()
print('PASS: 12 pages, reciprocal languages, both sitemaps and catalog source/output match.')
