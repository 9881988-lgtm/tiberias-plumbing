"""Apply shared navigation to the approved static editions without rewriting offer markup."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin
import sys
import xml.etree.ElementTree as ET

BASE = "https://9881988-lgtm.github.io/tiberias-plumbing/digital-agency/"
LANG = {"he": "עברית", "ru": "Русский", "en": "English", "fr": "Français"}
SLUGS = ("galany-crm", "ai-sales-agent", "call-center-software", "software",
         "auto-secretary", "dental-secretary", "small-business-secretary",
         "hotel-secretary", "hotel-consulting", "innovation-applications")
LABELS = {
    "ru": ("По теме", "Все услуги", "Продукты Galany", "Проект колл-центра", "Заявки в акселераторы"),
    "he": ("עוד בנושא", "כל השירותים", "מוצרי Galany", "פרויקט המוקד", "בקשות לאקסלרטורים"),
    "en": ("Related services", "All services", "Galany products", "Contact centre project", "Accelerator applications"),
    "fr": ("À découvrir", "Tous les services", "Produits Galany", "Projet de centre d’appels", "Candidatures aux accélérateurs"),
}

class Tags(HTMLParser):
    def __init__(self, src):
        super().__init__(convert_charrefs=False)
        self.lines = [0] + [i+1 for i,c in enumerate(src) if c == '\n']
        self.tags = []
        self.feed(src)
    def handle_starttag(self, tag, attrs):
        line, col = self.getpos()
        pos = self.lines[line-1] + col
        self.tags.append((tag, dict(attrs), pos, pos+len(self.get_starttag_text())))

def suffix(lang):
    return '' if lang=='he' else lang+'/'

def route(slug,lang):
    return slug+'/'+suffix(lang)

def transform(file,slug,lang):
    raw = file.read_text()
    if slug=='ai-call-center':
        start, end = '<!-- GALANY LINKS START -->','<!-- GALANY LINKS END -->'
        i=raw.index(start); j=raw.index(end,i)+len(end)
        links='<nav class="service-rail"><div class="inner"><strong>Galany CRM</strong><a data-related="galany-crm" href="../galany-crm/">Galany CRM</a><a data-related="ai-sales-agent" href="../ai-sales-agent/">נציג מכירות AI</a><a data-related="call-center-software" href="../call-center-software/">תוכנה למוקד</a></div></nav>'
        raw=(raw[:i]+raw[j:]).replace('</main>',start+links+end+'</main>')
    tags = Tags(raw).tags
    patches = []
    rel = '../' if lang=='he' else '../../'
    def inject(pos,s): patches.append((pos,pos,s))
    if not any(t=='link' and 'service-studio.css' in a.get('href','') for t,a,_,_ in tags):
        inject(raw.index('</head>'), f'<link rel="stylesheet" href="{rel}service-studio.css?v=20261119-services">\n')
    if slug!='ai-call-center':
        alts={a.get('hreflang') for t,a,_,_ in tags if t=='link' and a.get('rel')=='alternate'}
        for code in ['he','ru','en','fr','x-default']:
            h='he-IL' if code=='he' else code
            if h not in alts:
                url=BASE+route(slug,'he' if code=='x-default' else code)
                inject(raw.index('</head>'), f'<link rel="alternate" hreflang="{h}" href="{url}">\n')
        select=next(((pos,end) for t,a,pos,end in tags if t=='select' and a.get('id')=='software-language'),None)
        opts=''.join(f'<option value="{rel}{route(slug,c)}"'+(' selected' if c==lang else '')+f'>{label}</option>' for c,label in LANG.items())
        if select:
            patches.append((select[1],raw.index('</select>',select[1]),opts))
        else:
            pos,end=next((p,e) for t,a,p,e in tags if a.get('class')=='hotel-language')
            ctl='<div class="studio-languages"><select id="software-language" aria-label="Language / שפה">'+opts+'</select></div>'
            patches.append((pos,raw.index('</a>',end)+4,ctl))
            inject(raw.index('</body>'),f'<script src="{rel}software.js" defer></script>\n')
        if not any(a.get('class')=='service-rail' for _,a,_,_ in tags):
            label,all_services,products,call,grants=LABELS[lang]
            choices=[(suffix(lang)+'#services',all_services),(route('software',lang),products),('ai-call-center/'+('' if lang=='he' else '?lang='+lang),call),(route('innovation-applications',lang),grants)]
            links=''.join(f'<a href="{rel}{path}">{name}</a>' for path,name in choices if path!=route(slug,lang))
            rail=f'<nav class="service-rail" aria-label="{label}"><div class="product-wrap"><strong>{label}</strong>{links}</div></nav>'
            inject(raw.index('</main>'),rail)
    out=raw
    for a,b,v in sorted(patches,reverse=True):
        out=out[:a]+v+out[b:]
    if out!=file.read_text(): file.write_text(out)

def sitemap(file,urls):
    if not file.is_file(): return
    raw=file.read_text()
    found={n.text for n in ET.fromstring(raw).findall('{*}url/{*}loc')}
    extra=''.join('<url><loc>'+u+'</loc><lastmod>2026-11-19</lastmod></url>\n' for u in urls if u not in found)
    if extra: file.write_text(raw.replace('</urlset>',extra+'</urlset>'))

if __name__=='__main__':
    target=Path(sys.argv[1]).resolve()
    urls=[]
    for slug in SLUGS:
        for lang in LANG:
            r=route(slug,lang); file=target/r/'index.html'
            if file.exists():
                transform(file,slug,lang);urls.append(urljoin(BASE,r))
    legacy=target/'ai-call-center/index.html'
    if legacy.exists(): transform(legacy,'ai-call-center','he')
    sitemap(target/'sitemap.xml',urls)
    if target==Path(__file__).resolve().parents[1]: sitemap(target.parent/'sitemap.xml',urls)
