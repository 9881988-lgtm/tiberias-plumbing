"""Attach the consent-gated analytics script to built and checked-in agency pages."""
from pathlib import Path
import re
import sys


def attach(directory):
    for page in directory.rglob('index.html'):
        if 'source' in page.relative_to(directory).parts:
            continue
        raw = page.read_text()
        route = '../' * len(page.relative_to(directory).parent.parts)
        script = f'<script defer data-edl-analytics src="{route}analytics.js?v=2"></script>'
        if 'data-edl-analytics' in raw:
            updated = re.sub(r'<script defer data-edl-analytics src="[^"]+"></script>', script, raw, count=1)
        else:
            updated = raw.replace('</head>', script + '\n</head>', 1)
        if updated != raw:
            page.write_text(updated)


if __name__ == '__main__':
    attach(Path(sys.argv[1]).resolve())
