# Single-app catalogue

The App Store catalogue at `structo-robotics/apps.html` presents ReceiptIL as the only currently published app. All other products are described as being in development, testing, or release preparation and are not shown as available downloads.

## PHP implementation

The editable page source is `scripts/apps-catalog-template.html`. `scripts/build-apps-maintenance.php` (PHP 8.0+) copies that template to the published path at build time. GitHub Pages does not execute PHP requests; this remains a static website.

```sh
php -l scripts/build-apps-maintenance.php
php scripts/build-apps-maintenance.php
php scripts/build-apps-maintenance.php --check
```

The generator also accepts `--stdout`, rejects unknown arguments and writes only to the fixed catalogue path. It creates the output atomically. The workflow checks that ReceiptIL App Store ID `6784747059` is present and that no other App Store ID is exposed by the catalogue.

Hebrew is the default (RTL). English and Russian are available through visible language buttons and `?lang=en` / `?lang=ru`. Unknown language values fall back to Hebrew and never become HTML.

## Product positioning

ReceiptIL is described as a supporting iPhone tool for one business profile, receipt-form preparation, PDF export, and basic yearly tracking. The catalogue must always state that ReceiptIL is not registered accounting software and does not issue certified or digitally signed electronic documents. Business users should confirm requirements with an Israeli accountant or tax adviser.

Hebrew is the default (RTL). English and Russian are available through visible language buttons and `?lang=en` / `?lang=ru`. Unknown language values fall back to Hebrew.

When another app is genuinely available, add it to the source template and update the workflow allowlist in the same commit.
