"""Attach the consent-gated analytics script to built and checked-in agency pages."""
from pathlib import Path
import sys


def attach(directory):
    for page in directory.rglob('index.html'):
        if 'source' in page.relative_to(directory).parts:
            continue
        raw = page.read_text()
        if 'data-edl-analytics' in raw:
            continue
        route = '../' * len(page.relative_to(directory).parent.parts)
        script = f'<script defer data-edl-analytics src="{route}analytics.js?v=1"></script>\n'
        page.write_text(raw.replace('</head>', script + '</head>', 1))


if __name__ == '__main__':
    attach(Path(sys.argv[1]).resolve())
