window.DIRECTORY_CONFIG = {
  "key": "kitchen-hourly:he",
  "title": "Kitchen Hourly",
  "sourceButton": "בדיקת מחיר וגישה",
  "facets": [
    {
      "key": "state",
      "label": "מדינה",
      "allLabel": "כל שוק פתיחה",
      "options": [
        {
          "value": "Oregon",
          "label": "אורגון"
        },
        {
          "value": "Washington",
          "label": "וושינגטון"
        }
      ]
    },
    {
      "key": "rate",
      "label": "תעריף מפורסם",
      "allLabel": "כל תעריף",
      "options": [
        {
          "value": "under20",
          "label": "פחות מ-$20 לשעה"
        },
        {
          "value": "20to25",
          "label": "$20–25 לשעה"
        },
        {
          "value": "over25",
          "label": "מעל $25 לשעה"
        }
      ]
    },
    {
      "key": "access",
      "label": "גישה",
      "allLabel": "כל סוג גישה",
      "options": [
        {
          "value": "24/7",
          "label": "24/7"
        },
        {
          "value": "Scheduled",
          "label": "לפי תיאום"
        },
        {
          "value": "Off-hours available",
          "label": "שעות שפל זמינות"
        }
      ]
    },
    {
      "key": "storage",
      "label": "אחסון",
      "allLabel": "כל סטטוס",
      "options": [
        {
          "value": "Available",
          "label": "זמין"
        },
        {
          "value": "Ask",
          "label": "יש לברר"
        },
        {
          "value": "Currently full",
          "label": "מלא כרגע"
        }
      ]
    }
  ],
  "factKeys": [
    {
      "key": "rate",
      "label": "תעריף לשעה"
    },
    {
      "key": "minimum",
      "label": "מינימום / חברות"
    },
    {
      "key": "storage",
      "label": "אחסון"
    }
  ],
  "listings": [
    {
      "id": "public-market-crw",
      "name": "Public Market Premier Kitchen",
      "location": "Kennewick, וושינגטון",
      "summary": "תשע עמדות, אזורי הכנה, כיורים וקירור יומי. העמוד מפרסם שעות שיא, שפל, חבילות ואחסון יבש, מקורר וקפוא.",
      "tags": [
        "החל מ-$18 לשעה",
        "9 עמדות",
        "אחסון קר"
      ],
      "facts": {
        "rate": "החל מ-$18 לשעה",
        "minimum": "לפי שעה וחבילות 10–50 שעות",
        "storage": "החל מ-$50 לחודש"
      },
      "filters": {
        "state": "Washington",
        "rate": "under20",
        "access": "Scheduled",
        "storage": "Available"
      },
      "priceSort": 18,
      "score": 99,
      "url": "https://publicmarketcrw.com/kitchen/"
    },
    {
      "id": "cherry-pit",
      "name": "Cherry Pit Kitchen",
      "location": "פורטלנד, אורגון",
      "summary": "מטבח עם הזמנה מקוונת ותעריפים גלויים לשימוש מזדמן, התחייבויות חודשיות ושעות שפל.",
      "tags": [
        "$17 בשעות שפל",
        "שימוש מזדמן",
        "הזמנה מקוונת"
      ],
      "facts": {
        "rate": "$17–25 לשעה",
        "minimum": "מינימום 3 שעות לשימוש מזדמן",
        "storage": "יש לברר מחיר"
      },
      "filters": {
        "state": "Oregon",
        "rate": "under20",
        "access": "Off-hours available",
        "storage": "Ask"
      },
      "priceSort": 17,
      "score": 97,
      "url": "https://www.cherrypitkitchen.com/pricing"
    },
    {
      "id": "cascade-leavenworth",
      "name": "Leavenworth Commissary Kitchen",
      "location": "Leavenworth, וושינגטון",
      "summary": "מטבח קהילתי לשפים, קייטרינג, חקלאים, אופים, משאיות אוכל ויצרנים, עם רשימת ציוד ואחסון מפורטת.",
      "tags": [
        "החל מ-$15 לשעה",
        "משאיות אוכל",
        "ציוד מיוחד"
      ],
      "facts": {
        "rate": "$15–35 לשעה",
        "minimum": "חברות שנתית $100",
        "storage": "$35 יבש / $50 קפוא / $100 קר"
      },
      "filters": {
        "state": "Washington",
        "rate": "under20",
        "access": "Scheduled",
        "storage": "Available"
      },
      "priceSort": 15,
      "score": 94,
      "url": "https://www.cascademarkets.org/kitchen"
    },
    {
      "id": "whimsy",
      "name": "Whimsy's Kitchen",
      "location": "Tacoma, וושינגטון",
      "summary": "מטבח משותף עם גדלים שונים של עמדות וטבלת מחירים ברורה לשעות לילה ויום.",
      "tags": [
        "$18 בלילה",
        "מחיר לפי גודל",
        "מכשירים כלולים"
      ],
      "facts": {
        "rate": "$18–35 לשעה",
        "minimum": "$500 לחודש; מינימום חודשיים",
        "storage": "לא כלול"
      },
      "filters": {
        "state": "Washington",
        "rate": "under20",
        "access": "Off-hours available",
        "storage": "Ask"
      },
      "priceSort": 18,
      "score": 91,
      "url": "https://whimsyskitchen.com/hourly-rates/"
    },
    {
      "id": "loc-oly",
      "name": "LOC-OLY Grown Kitchen",
      "location": "Olympia, וושינגטון",
      "summary": "מטבח 24/7 עם אזורי בישול והכנה, ציוד רב וטווח מחיר מפורסם. האחסון מלא כרגע.",
      "tags": [
        "24/7",
        "$20–55 לשעה",
        "ציוד רב"
      ],
      "facts": {
        "rate": "$20–55 לשעה",
        "minimum": "משתנה לפי שימוש",
        "storage": "מלא כרגע"
      },
      "filters": {
        "state": "Washington",
        "rate": "20to25",
        "access": "24/7",
        "storage": "Currently full"
      },
      "priceSort": 20,
      "score": 88,
      "url": "https://capitalmallolympia.com/kitchen/"
    },
    {
      "id": "renegade",
      "name": "Renegade Kitchens",
      "location": "Salem, אורגון",
      "summary": "מטבח מורשה לשימוש מסחרי ולא מסחרי לפי שעה. האתר מציין שכעת אינו מקבל שוכרים חדשים.",
      "tags": [
        "אות לרשימת המתנה",
        "Salem",
        "שימוש מסחרי"
      ],
      "facts": {
        "rate": "יש לברר",
        "minimum": "לפי סוג שימוש",
        "storage": "פנייה למטבח"
      },
      "filters": {
        "state": "Oregon",
        "rate": "over25",
        "access": "Scheduled",
        "storage": "Ask"
      },
      "score": 73,
      "url": "https://renegadekitchens.com/"
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
        "key": "state",
        "label": "מדינה",
        "placeholder": "כל שוק פתיחה"
      },
      {
        "key": "rate",
        "label": "תעריף מפורסם",
        "placeholder": "כל תעריף"
      },
      {
        "key": "access",
        "label": "גישה",
        "placeholder": "כל סוג גישה"
      }
    ]
  }
};
