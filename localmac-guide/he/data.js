window.DIRECTORY_CONFIG = {
  "key": "localmac-guide:he",
  "title": "LocalMac Guide",
  "sourceButton": "פרטים רשמיים",
  "facets": [
    {
      "key": "chip",
      "label": "שבב Mac",
      "allLabel": "כל Mac נתמך",
      "options": [
        {
          "value": "Apple Silicon",
          "label": "Apple Silicon"
        },
        {
          "value": "Intel or Apple Silicon",
          "label": "Intel או Apple Silicon"
        }
      ]
    },
    {
      "key": "setup",
      "label": "אופן התקנה",
      "allLabel": "כל דרך",
      "options": [
        {
          "value": "Desktop app",
          "label": "אפליקציית שולחן עבודה"
        },
        {
          "value": "Terminal first",
          "label": "Terminal תחילה"
        }
      ]
    },
    {
      "key": "documents",
      "label": "עבודה עם מסמכים",
      "allLabel": "כל תהליך",
      "options": [
        {
          "value": "yes",
          "label": "מסמכים מובנים"
        },
        {
          "value": "no",
          "label": "צ'אט או מנוע תחילה"
        }
      ]
    },
    {
      "key": "price",
      "label": "מחיר התחלתי",
      "allLabel": "כל מחיר",
      "options": [
        {
          "value": "Free",
          "label": "חינם"
        },
        {
          "value": "Free tier",
          "label": "מסלול חינמי"
        },
        {
          "value": "Paid",
          "label": "בתשלום"
        }
      ]
    }
  ],
  "factKeys": [
    {
      "key": "system",
      "label": "דרישת Mac"
    },
    {
      "key": "documents",
      "label": "מסמכים"
    },
    {
      "key": "price",
      "label": "נקודת פתיחה"
    }
  ],
  "listings": [
    {
      "id": "nocloud-ai",
      "name": "NoCloud AI: Offline Chat",
      "location": "macOS 26+ על Apple Silicon",
      "summary": "אפליקציית Mac App Store לשאלות על מסמך מיובא אחד באמצעות מודלי Gemma שמורידים בנפרד. אין צורך בחשבון NoCloud AI.",
      "tags": [
        "המוצר שלנו",
        "ללא חשבון",
        "Mac App Store"
      ],
      "facts": {
        "system": "Apple Silicon, macOS 26+",
        "documents": "PDF, TXT, MD, RTF, CSV, JSON",
        "price": "חינם; Pro ב-$0.99 לחודש"
      },
      "filters": {
        "chip": "Apple Silicon",
        "setup": "Desktop app",
        "documents": "yes",
        "price": "Free tier"
      },
      "priceSort": 0,
      "score": 99,
      "url": "https://apps.apple.com/us/app/nocloud-ai-offline-chat/id6793953951?mt=12"
    },
    {
      "id": "jan",
      "name": "Jan",
      "location": "macOS 13.6+ על Apple Silicon",
      "summary": "עוזר שולחני בקוד פתוח שמעדיף מודלים מקומיים ומציג הנחיות חומרה לפי זיכרון.",
      "tags": [
        "קוד פתוח",
        "מקומי כברירת מחדל",
        "הנחיות חומרה"
      ],
      "facts": {
        "system": "Apple Silicon, macOS 13.6+",
        "documents": "פרויקטים וקבצים",
        "price": "חינם ובקוד פתוח"
      },
      "filters": {
        "chip": "Apple Silicon",
        "setup": "Desktop app",
        "documents": "yes",
        "price": "Free"
      },
      "priceSort": 0,
      "score": 92,
      "url": "https://www.jan.ai/docs/desktop/install/mac"
    },
    {
      "id": "lm-studio",
      "name": "LM Studio",
      "location": "macOS; יש לאשר תמיכה בשבב",
      "summary": "סביבת שולחן עבודה לגילוי והרצת מודלים, עבודה עם מסמכים ושרת מקומי. השימוש העיקרי זמין אופליין לאחר הורדות.",
      "tags": [
        "גילוי מודלים",
        "RAG למסמכים",
        "שרת מקומי"
      ],
      "facts": {
        "system": "ראו דרישות עדכניות",
        "documents": "צ'אט מקומי עם מסמכים",
        "price": "ראו תנאים רשמיים"
      },
      "filters": {
        "chip": "Apple Silicon",
        "setup": "Desktop app",
        "documents": "yes",
        "price": "Free"
      },
      "priceSort": 0,
      "score": 88,
      "url": "https://www.lmstudio.ai/docs/app/offline"
    },
    {
      "id": "gpt4all",
      "name": "GPT4All",
      "location": "macOS 12.6+",
      "summary": "אפליקציה רב-מערכתית להרצת מודלים שהורדו באופן פרטי. LocalDocs משתמש בקבצים מקומיים כמקורות מידע.",
      "tags": [
        "LocalDocs",
        "רב-מערכתי",
        "ללא דרישת GPU"
      ],
      "facts": {
        "system": "macOS Monterey 12.6+",
        "documents": "אוספי LocalDocs",
        "price": "חינם ובקוד פתוח"
      },
      "filters": {
        "chip": "Intel or Apple Silicon",
        "setup": "Desktop app",
        "documents": "yes",
        "price": "Free"
      },
      "priceSort": 0,
      "score": 84,
      "url": "https://docs.gpt4all.io/gpt4all_desktop/quickstart.html"
    },
    {
      "id": "msty",
      "name": "Msty Studio",
      "location": "macOS 11+; Intel ו-Apple Silicon",
      "summary": "סביבת עבודה פרטית רחבה שמחברת מודלים מקומיים ומקוונים למי שצריך יותר שליטה.",
      "tags": [
        "מקומי וענן",
        "סביבת עבודה",
        "גרסת Intel"
      ],
      "facts": {
        "system": "macOS 11+",
        "documents": "יכולות סביבת עבודה",
        "price": "ראו תוכניות עדכניות"
      },
      "filters": {
        "chip": "Intel or Apple Silicon",
        "setup": "Desktop app",
        "documents": "yes",
        "price": "Free tier"
      },
      "priceSort": 0,
      "score": 76,
      "url": "https://msty.ai/products/studio/"
    },
    {
      "id": "ollama",
      "name": "Ollama",
      "location": "macOS; יש לאשר דרישות",
      "summary": "מנוע מקומי פופולרי עם תהליך שמתחיל ב-Terminal ו-API לאפליקציות אחרות. מתאים לבניית מערך אישי.",
      "tags": [
        "מנוע",
        "למפתחים",
        "API"
      ],
      "facts": {
        "system": "אישור בעמוד ההורדה",
        "documents": "דרך אפליקציות מחוברות",
        "price": "חינם ובקוד פתוח"
      },
      "filters": {
        "chip": "Intel or Apple Silicon",
        "setup": "Terminal first",
        "documents": "no",
        "price": "Free"
      },
      "priceSort": 0,
      "score": 69,
      "url": "https://ollama.com/download/mac"
    }
  ],
  "ui": {
    "any": "הכול",
    "confirm": "יש לאשר ישירות",
    "officialSource": "מקור רשמי",
    "suggestUpdate": "הצעת עדכון",
    "save": "שמירה",
    "saved": "נשמר",
    "compare": "השוואה",
    "noMatchesTitle": "עדיין אין התאמה מדויקת",
    "noMatchesText": "אפשר להסיר מסנן או להציע אפשרות מאומתת שחסרה.",
    "location": "מיקום",
    "bestFor": "מתאים במיוחד ל",
    "feature": "קריטריון",
    "matcherButton": "הצגת ההתאמה הטובה ביותר",
    "matcherEmpty": "יש לבחור העדפה אחת לפחות.",
    "matcherNoResult": "עדיין אין התאמה מדויקת ומאומתת. נסו פחות תנאים.",
    "matcherResult": "ההתאמה הטובה כרגע",
    "matcherApply": "הצגה במדריך"
  },
  "matcher": {
    "fields": [
      {
        "key": "chip",
        "label": "שבב Mac",
        "placeholder": "כל Mac נתמך"
      },
      {
        "key": "setup",
        "label": "אופן התקנה",
        "placeholder": "כל דרך"
      },
      {
        "key": "documents",
        "label": "עבודה עם מסמכים",
        "placeholder": "כל תהליך"
      }
    ]
  }
};
