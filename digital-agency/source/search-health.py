"""Check the shipped pages, not a short list of template URLs."""
import json
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin, urlsplit
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
BASE = "https://9881988-lgtm.github.io/tiberias-plumbing/digital-agency/"


class Document(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.tags = []
        self.structured = False
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        self.tags.append((tag, attrs))
        if tag == "script":
            self.structured = attrs.get("type") == "application/ld+json"

    def handle_endtag(self, tag):
        if tag == "script":
            self.structured = False

    def handle_data(self, data):
        if self.structured:
            json.loads(data)


pages = {}
for file in ROOT.rglob("index.html"):
    url = urljoin(BASE, file.relative_to(ROOT).as_posix().removesuffix("index.html"))
    tags = Document(file.read_text()).tags
    pages[url] = tags
    meta = {a.get("name", a.get("property")): a.get("content") for t,a in tags if t == "meta"}
    assert [a["href"] for t,a in tags if t == "link" and a.get("rel") == "canonical"] == [url], url
    assert sum(t == "h1" for t,a in tags) == 1, url
    assert meta["description"] and "noindex" not in meta.get("robots", "").lower(), url
    assert meta["og:url"] == url and meta["og:image"] and meta["twitter:card"], url
    for t,a in tags:
        if t == "img":
            for item in filter(None, a.get("srcset", "").split(",")):
                path = urlsplit(urljoin(url, item.strip().split()[0])).path
                assert (ROOT.parent/path.removeprefix("/tiberias-plumbing/")).is_file(), path

mapped = [n.text for n in ET.parse(ROOT/"sitemap.xml").findall("{*}url/{*}loc")]
assert len(mapped) == len(set(mapped)) and set(mapped) == set(pages)
for url,tags in pages.items():
    alts = {a["hreflang"]:a["href"] for t,a in tags if t=="link" and "hreflang" in a}
    assert {"he-IL","ru","en","fr","x-default"} == set(alts), url
    for target in alts.values():
        if "?" not in target:
            assert any(a.get("href")==url for t,a in pages[target] if t=="link" and "hreflang" in a), (url,target)
print(f"PASS: {len(pages)} pages, sitemap, metadata, responsive assets, schema and static locale reciprocity")
