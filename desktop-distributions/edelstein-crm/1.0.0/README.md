# Edelstein CRM Israel 1.0.0 | Offline desktop editions

Contacts, deals, tasks and meetings for a single workstation. Starts empty. No server account, remote AI agent or telephony is included. Never upload a customer database to GitHub. These editions do not sync to one another or to Galany CRM.

| Download | What it does |
| --- | --- |
| Edelstein-CRM-Israel-Windows-x64.exe | Standalone x64 launcher. Keep its console open and use the CRM in the browser window it opens. The service listens only on this computer; data is stored under the current user's configuration directory in EdelsteinCRMIsrael/workspace.json. Close the console to quit. Not Authenticode signed. |
| Edelstein-CRM-Israel-macOS.zip | Native Mac Catalyst app for macOS 14 or later, Apple Silicon and Intel. Local-only build with a separate sandbox, separate from the QA or App Store edition. Ad-hoc signed, **not Developer ID signed or notarized by Apple**; macOS may refuse to launch it. |
| Edelstein-CRM-Israel-Portable.zip | No executable or installation. Extract index.html to a permanent location and open it in a regular, non-private Edge or Chrome window. This edition stores data in that browser profile; moving the file, clearing browser data or changing profiles may make the old workspace unavailable. Export backups regularly. |

If Windows or macOS blocks the executable, leave the system protection enabled and use the portable edition. Do not use the portable edition on a shared browser profile. JSON backups from Windows and the portable edition contain unencrypted personal data. Keep them private. Native Mac data is separate; importing these Windows backups into the Mac app is not supported. See SHA256SUMS.txt to verify the downloads.
