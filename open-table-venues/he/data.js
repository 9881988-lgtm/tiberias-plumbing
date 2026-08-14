window.DIRECTORY_CONFIG = {
  "key": "open-table-venues:he",
  "title": "Open Table Venues",
  "sourceButton": "בדיקת המדיניות",
  "facets": [
    {
      "key": "state",
      "label": "מדינה",
      "allLabel": "כל מדינה",
      "options": [
        {
          "value": "Maryland",
          "label": "מרילנד"
        },
        {
          "value": "Virginia",
          "label": "וירג'יניה"
        }
      ]
    },
    {
      "key": "policy",
      "label": "מדיניות קייטרינג",
      "allLabel": "כל מדיניות גמישה",
      "options": [
        {
          "value": "Any professional caterer",
          "label": "כל קייטרינג מקצועי"
        },
        {
          "value": "Outside catering welcomed",
          "label": "קייטרינג חיצוני מתקבל"
        },
        {
          "value": "Cultural caterers",
          "label": "קייטרינג תרבותי"
        },
        {
          "value": "Self-catering possible",
          "label": "אפשרות להגשה עצמית"
        }
      ]
    },
    {
      "key": "capacity",
      "label": "מספר אורחים",
      "allLabel": "כל קיבולת",
      "options": [
        {
          "value": "under120",
          "label": "עד 120"
        },
        {
          "value": "120to200",
          "label": "120–200"
        },
        {
          "value": "over200",
          "label": "מעל 200"
        }
      ]
    },
    {
      "key": "setting",
      "label": "סוג מקום",
      "allLabel": "כל סוג",
      "options": [
        {
          "value": "Historic",
          "label": "היסטורי"
        },
        {
          "value": "Farm",
          "label": "חווה"
        },
        {
          "value": "Modern",
          "label": "מודרני"
        },
        {
          "value": "Hotel",
          "label": "מלון"
        }
      ]
    }
  ],
  "factKeys": [
    {
      "key": "capacity",
      "label": "קיבולת"
    },
    {
      "key": "policy",
      "label": "קייטרינג חיצוני"
    },
    {
      "key": "pricing",
      "label": "מחיר מפורסם"
    }
  ],
  "listings": [
    {
      "id": "rixey-manor",
      "name": "Rixey Manor",
      "location": "Rixeyville, וירג'יניה",
      "summary": "אחוזה היסטורית שמאפשרת כל קייטרינג, ללא רשימת ספקים מחייבת וללא עמלת קייטרינג חיצוני. צוות הבר מורשה מטעם המקום.",
      "tags": [
        "ללא עמלה",
        "ללא רשימה מחייבת",
        "אחוזה היסטורית"
      ],
      "facts": {
        "capacity": "אישור לפי סידור",
        "policy": "כל קייטרינג; ללא עמלה",
        "pricing": "בקשת חבילה עדכנית"
      },
      "filters": {
        "state": "Virginia",
        "policy": "Any professional caterer",
        "capacity": "120to200",
        "setting": "Historic"
      },
      "score": 99,
      "url": "https://www.rixeymanor.com/"
    },
    {
      "id": "fairfax-historic",
      "name": "Fairfax Historic Properties",
      "location": "מחוז Fairfax, וירג'יניה",
      "summary": "המחוז מאפשר לבחור כל קייטרינג מקצועי. הגשה עצמית מוגבלת ל-Great Falls Grange ול-Clark House.",
      "tags": [
        "קייטרינג לפי בחירה",
        "מקומות ציבוריים",
        "הגשה עצמית בשני אתרים"
      ],
      "facts": {
        "capacity": "משתנה לפי נכס",
        "policy": "קייטרינג מקצועי לפי בחירה",
        "pricing": "משתנה לפי נכס"
      },
      "filters": {
        "state": "Virginia",
        "policy": "Self-catering possible",
        "capacity": "under120",
        "setting": "Historic"
      },
      "score": 95,
      "url": "https://www.fairfaxcounty.gov/parks/historic-property-rental-services/faqs"
    },
    {
      "id": "cherry-hill",
      "name": "Cherry Hill Farmhouse",
      "location": "Falls Church, וירג'יניה",
      "summary": "בית חווה היסטורי עירוני שבו מזמינים קייטרינג, אוהלים, כיסאות ושולחנות מספקים חיצוניים, והאוכל מוכן במטבח המודרני הצמוד.",
      "tags": [
        "ספקים חיצוניים",
        "מטבח מודרני",
        "בית חווה היסטורי"
      ],
      "facts": {
        "capacity": "אירועים קטנים",
        "policy": "שירותי קייטרינג חיצוניים",
        "pricing": "ראו תעריפי העיר"
      },
      "filters": {
        "state": "Virginia",
        "policy": "Any professional caterer",
        "capacity": "under120",
        "setting": "Historic"
      },
      "score": 91,
      "url": "https://www.fallschurchva.gov/1589/Weddings-Special-Event-Rentals"
    },
    {
      "id": "cascades-overlook",
      "name": "Cascades Overlook Event Center",
      "location": "Sterling, וירג'יניה",
      "summary": "מרכז מודרני שמקבל במפורש קייטרינג חיצוני ומאפשר לבחור מפיק עצמאי.",
      "tags": [
        "קייטרינג חיצוני",
        "מפיק גמיש",
        "מקום מודרני"
      ],
      "facts": {
        "capacity": "יש לאשר סידורים",
        "policy": "קייטרינג חיצוני מתקבל",
        "pricing": "בקשת אפשרויות עדכניות"
      },
      "filters": {
        "state": "Virginia",
        "policy": "Outside catering welcomed",
        "capacity": "over200",
        "setting": "Modern"
      },
      "score": 88,
      "url": "https://www.cascadeseventcenter.com/weddings"
    },
    {
      "id": "falls-church-marriott",
      "name": "Falls Church Marriott Fairview Park",
      "location": "Falls Church, וירג'יניה",
      "summary": "אתר החתונות מקבל קייטרינג עולמי חיצוני ומורשה ומציע צוות, מזנונים ועמדות הכנה.",
      "tags": [
        "קייטרינג עולמי",
        "תמיכת אירוח",
        "מלון"
      ],
      "facts": {
        "capacity": "מספר חללים",
        "policy": "קייטרינג עולמי מורשה",
        "pricing": "חבילה מותאמת"
      },
      "filters": {
        "state": "Virginia",
        "policy": "Cultural caterers",
        "capacity": "over200",
        "setting": "Hotel"
      },
      "score": 86,
      "url": "https://www.weddingsatfallschurchmarriott.com/catering"
    },
    {
      "id": "fairwinds-farm",
      "name": "Fairwinds Farm & Stables",
      "location": "North East, מרילנד",
      "summary": "חווה פנימית וחיצונית עם שולחנות לקייטרינג, גישת משלוחים וספקים מועדפים שאינם חובה. עד 250 אורחים.",
      "tags": [
        "הרשימה לא חובה",
        "עד 250",
        "חווה"
      ],
      "facts": {
        "capacity": "עד 250",
        "policy": "ספקים מועדפים אינם חובה",
        "pricing": "החל מ-$5,000 ליום"
      },
      "filters": {
        "state": "Maryland",
        "policy": "Any professional caterer",
        "capacity": "over200",
        "setting": "Farm"
      },
      "priceSort": 5000,
      "score": 82,
      "url": "https://www.fairwindsstables.com/weddings"
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
        "placeholder": "כל מדינה"
      },
      {
        "key": "policy",
        "label": "מדיניות קייטרינג",
        "placeholder": "כל מדיניות גמישה"
      },
      {
        "key": "capacity",
        "label": "מספר אורחים",
        "placeholder": "כל קיבולת"
      }
    ]
  }
};
