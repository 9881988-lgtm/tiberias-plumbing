<?php
declare(strict_types=1);

/**
 * Publish the maintained single-app catalogue for GitHub Pages.
 * PHP runs at build time, not on the GitHub Pages web server.
 * Usage: php scripts/build-apps-maintenance.php [--check|--stdout]
 */
if (PHP_SAPI !== 'cli') {
    http_response_code(404);
    exit;
}

function buildAppsCatalogue(array $arguments): int
{
    if (count($arguments) > 1 || (
        $arguments !== [] && !in_array($arguments[0], ['--check', '--stdout'], true)
    )) {
        fwrite(STDERR, "Usage: php scripts/build-apps-maintenance.php [--check|--stdout]\n");
        return 2;
    }

    $template = __DIR__ . '/apps-catalog-template.html';
    $target = dirname(__DIR__) . '/structo-robotics/apps.html';
    if (!is_file($template)) {
        throw new RuntimeException('Catalogue template is missing.');
    }
    $html = file_get_contents($template);
    if ($html === false || $html === '') {
        throw new RuntimeException('Catalogue template is empty or unreadable.');
    }

    if (($arguments[0] ?? '') === '--stdout') {
        fwrite(STDOUT, $html);
        return 0;
    }

    if (($arguments[0] ?? '') === '--check') {
        if (!is_file($target) || file_get_contents($target) !== $html) {
            fwrite(STDERR, "apps.html is out of date; run the PHP generator.\n");
            return 1;
        }
        fwrite(STDOUT, "apps.html matches the catalogue template.\n");
        return 0;
    }

    $directory = dirname($target);
    if (!is_dir($directory) || !is_writable($directory)) {
        throw new RuntimeException('Output directory is unavailable or not writable.');
    }
    $temporary = tempnam($directory, '.apps-catalogue-');
    if ($temporary === false) {
        throw new RuntimeException('Unable to create a temporary output file.');
    }
    try {
        if (file_put_contents($temporary, $html) !== strlen($html)) {
            throw new RuntimeException('Unable to write the complete page.');
        }
        if (!chmod($temporary, 0644) || !rename($temporary, $target)) {
            throw new RuntimeException('Unable to publish the generated page.');
        }
    } finally {
        if (is_file($temporary)) {
            unlink($temporary);
        }
    }
    fwrite(STDOUT, "Generated structo-robotics/apps.html from the catalogue template.\n");
    return 0;
}

try {
    exit(buildAppsCatalogue(array_slice($argv, 1)));
} catch (Throwable $error) {
    fwrite(STDERR, 'Build failed: ' . $error->getMessage() . "\n");
    exit(1);
}
