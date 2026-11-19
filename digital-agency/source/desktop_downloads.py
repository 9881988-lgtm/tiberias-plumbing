"""Public offline desktop downloads; the cloud Galany CRM remains a separate product."""
from html import escape

BASE = ('https://github.com/9881988-lgtm/tiberias-plumbing/raw/refs/tags/'
        'edelstein-crm-desktop-v1.0.0/desktop-distributions/edelstein-crm/1.0.0/')
FILES = ('Edelstein-CRM-Israel-macOS.zip','Edelstein-CRM-Israel-Windows-x64.exe','Edelstein-CRM-Israel-Portable.zip')
COPY = {
 'ru': ('Скачать автономную CRM','Отдельное приложение для контактов, сделок, задач и встреч. Работает без облачной Galany CRM. Записи остаются на вашем устройстве; синхронизации между версиями нет.',
        'Для MacBook','macOS 14+, Apple Silicon и Intel. Нативная сборка без нотарификации Apple; macOS может не разрешить запуск.',
        'Для Windows x64','Автономный файл EXE с локальным интерфейсом в браузере. Цифровой подписи Windows нет.',
        'Без установки','Распакуйте ZIP и откройте index.html в обычном окне Chrome или Edge. Если система блокирует исполняемый файл, используйте эту версию, не отключая защиту.',
        'Скачать','Контрольные суммы SHA-256'),
 'he': ('הורדת ה-CRM לעבודה לא מקוונת','יישום נפרד לאנשי קשר, עסקאות, משימות ופגישות. הוא פועל ללא Galany CRM בענן. הנתונים נשארים במכשיר ואינם מסתנכרנים בין המהדורות.',
        'ל-MacBook','ל-macOS 14 ומעלה, במחשבי Apple Silicon ו-Intel. היישום לא עבר אימות נוטריוני של Apple וייתכן שהמערכת תחסום את הפעלתו.',
        'ל-Windows x64','קובץ EXE עצמאי הפותח ממשק מקומי בדפדפן. הקובץ אינו חתום בחתימה דיגיטלית של Windows.',
        'ללא התקנה','חלצו את קובץ ה-ZIP ופתחו את index.html בחלון רגיל של Chrome או Edge. אם מערכת ההפעלה חוסמת את היישום, השתמשו במהדורה זו בלי לבטל את ההגנה.',
        'הורדה','סכומי ביקורת SHA-256'),
 'en': ('Download the offline CRM','A separate app for contacts, deals, tasks and meetings. It works without the Galany cloud CRM. Records stay on this device and do not sync between editions.',
        'For MacBook','macOS 14 or later on Apple Silicon or Intel. This native build is not notarized by Apple; macOS may block it.',
        'For Windows x64','A standalone executable with a local browser interface. The executable is not digitally signed.',
        'No installation','Extract the ZIP and open index.html in a regular Chrome or Edge window. If the OS blocks an executable, use this edition and leave system protections enabled.',
        'Download','SHA-256 checksums'),
 'fr': ('Télécharger le CRM hors ligne','Une application distincte pour les contacts, les affaires, les tâches et les rendez-vous. Elle fonctionne sans Galany CRM en ligne. Les données restent sur cet appareil, sans synchronisation entre les éditions.',
        'Pour MacBook','macOS 14 ou plus récent, sur Apple Silicon et Intel. Cette version native n’est pas notariée par Apple et macOS peut en bloquer l’ouverture.',
        'Pour Windows x64','Un exécutable autonome avec une interface locale dans le navigateur. Le fichier ne porte pas de signature numérique Windows.',
        'Sans installation','Décompressez le ZIP et ouvrez index.html dans une fenêtre normale de Chrome ou Edge. Si le système bloque un exécutable, utilisez cette édition sans désactiver les protections.',
        'Télécharger','Sommes de contrôle SHA-256')
}
def render(lang):
    title,desc,mac,mac_note,win,win_note,portable,portable_note,download,checks=COPY[lang]
    offers=[]
    for i,(name,note) in enumerate([(mac,mac_note),(win,win_note),(portable,portable_note)]):
        fmt=('ZIP','EXE','ZIP')[i]
        offers.append(f'<article><h3>{escape(name)}</h3><p>{escape(note)}</p><a class="btn" href="{BASE+FILES[i]}" aria-label="{escape(download+" · "+name)}">{escape(download)} · {fmt}</a></article>')
    return (f'<section class="product-section desktop-downloads" id="desktop-downloads"><div class="product-wrap"><p class="eyebrow">{escape(title)} · 1.0.0</p>'
            f'<h2>Edelstein CRM Israel</h2><p class="section-lead">{escape(desc)}</p><div class="download-grid">{"".join(offers)}</div>'
            f'<a class="checksum-link" href="{BASE}SHA256SUMS.txt">{escape(checks)}</a></div></section>')
