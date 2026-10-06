# Temporary app-catalogue page

The App Store catalogue at `structo-robotics/apps.html` is temporarily replaced by a multilingual under-development notice. Individual product pages, app listings on Apple, and the rest of the website are not removed.

## PHP implementation

The source is `scripts/build-apps-maintenance.php` (PHP 8.0+). PHP runs **at build time** and generates a static HTML page. GitHub Pages does not execute PHP requests; this change does not turn the website into a PHP backend.

```sh
php -l scripts/build-apps-maintenance.php
php scripts/build-apps-maintenance.php
php scripts/build-apps-maintenance.php --check
```

The generator also accepts `--stdout`, rejects unknown arguments and writes only to the fixed catalogue path. It creates the output atomically. Interface copy is escaped; JSON embedded in the script is encoded with HTML-safe flags. The generated page has no app cards, App Store links, analytics scripts or contact-data submission forms.

Hebrew is the default (RTL). English and Russian are available through visible language buttons and `?lang=en` / `?lang=ru`. Unknown language values fall back to Hebrew and never become HTML.

## Restore the catalogue

The last complete catalogue remains in Git history at commit `39d74efdb58c99b6ead208819a3ac6f4d5d5e521`, path `structo-robotics/apps.html`. A local backup was also saved as `outputs/Website_Apps_Original_2026_10_06.html` in the working workspace (not published).

When restoring, copy the original catalogue back and remove or update the maintenance-page check workflow so that it no longer expects a generated notice.

This is new PHP build-tool code created on 6 October 2026, not evidence of past PHP employment or production PHP-backend experience.
