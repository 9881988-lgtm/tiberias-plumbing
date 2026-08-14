window.DIRECTORY_CONFIG = {
  "key": "open-table-venues:en",
  "title": "Open Table Venues",
  "sourceButton": "Check venue policy",
  "facets": [
    {
      "key": "state",
      "label": "State",
      "allLabel": "Any state",
      "options": [
        {
          "value": "Maryland",
          "label": "Maryland"
        },
        {
          "value": "Virginia",
          "label": "Virginia"
        }
      ]
    },
    {
      "key": "policy",
      "label": "Catering policy",
      "allLabel": "Any flexible policy",
      "options": [
        {
          "value": "Any professional caterer",
          "label": "Any professional caterer"
        },
        {
          "value": "Outside catering welcomed",
          "label": "Outside catering welcomed"
        },
        {
          "value": "Cultural caterers",
          "label": "Cultural caterers"
        },
        {
          "value": "Self-catering possible",
          "label": "Self-catering possible"
        }
      ]
    },
    {
      "key": "capacity",
      "label": "Guest count",
      "allLabel": "Any capacity",
      "options": [
        {
          "value": "under120",
          "label": "Up to 120"
        },
        {
          "value": "120to200",
          "label": "120–200"
        },
        {
          "value": "over200",
          "label": "200+"
        }
      ]
    },
    {
      "key": "setting",
      "label": "Setting",
      "allLabel": "Any setting",
      "options": [
        {
          "value": "Historic",
          "label": "Historic"
        },
        {
          "value": "Farm",
          "label": "Farm"
        },
        {
          "value": "Modern",
          "label": "Modern"
        },
        {
          "value": "Hotel",
          "label": "Hotel"
        }
      ]
    }
  ],
  "factKeys": [
    {
      "key": "capacity",
      "label": "Capacity"
    },
    {
      "key": "policy",
      "label": "Outside catering"
    },
    {
      "key": "pricing",
      "label": "Published price"
    }
  ],
  "listings": [
    {
      "id": "rixey-manor",
      "name": "Rixey Manor",
      "location": "Rixeyville, Virginia",
      "summary": "A historic estate whose official site says couples may bring any caterer, with no required vendor list and no outside-catering fee. The venue provides its own licensed bar staff.",
      "tags": [
        "No catering fee",
        "No required vendor list",
        "Historic estate"
      ],
      "facts": {
        "capacity": "Confirm for your layout",
        "policy": "Any caterer; no outside-catering fee",
        "pricing": "Request current package"
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
      "location": "Fairfax County, Virginia",
      "summary": "Fairfax County states that renters may use the professional caterer of their choice at its reception sites. Self-catering is specifically limited to Great Falls Grange and Clark House.",
      "tags": [
        "Caterer of choice",
        "Public venues",
        "Self-catering at two sites"
      ],
      "facts": {
        "capacity": "Varies by property",
        "policy": "Professional caterer of choice",
        "pricing": "Varies by property"
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
      "location": "Falls Church, Virginia",
      "summary": "A city-operated historic farmhouse and grounds. The official rental page says catering, tents, chairs and tables are rented from outside companies, with food prepared in the attached modern kitchen.",
      "tags": [
        "Outside vendors required",
        "Modern kitchen",
        "Historic farmhouse"
      ],
      "facts": {
        "capacity": "Small weddings and parties",
        "policy": "Outside catering services",
        "pricing": "See city rental schedule"
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
      "location": "Sterling, Virginia",
      "summary": "A modern event centre whose wedding page explicitly welcomes outside catering and allows couples to choose their own planner.",
      "tags": [
        "Outside catering welcomed",
        "Flexible planner",
        "Modern venue"
      ],
      "facts": {
        "capacity": "Confirm current layouts",
        "policy": "Outside catering welcomed",
        "pricing": "Request current rental options"
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
      "location": "Falls Church, Virginia",
      "summary": "The venue's dedicated wedding site says it welcomes licensed outside global caterers, with banquet staff, buffet setups, beverage stations and staging areas for pre-prepared food.",
      "tags": [
        "Global caterers",
        "Banquet support",
        "Hotel"
      ],
      "facts": {
        "capacity": "Multiple event spaces",
        "policy": "Licensed outside global caterers",
        "pricing": "Custom package"
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
      "location": "North East, Maryland",
      "summary": "An indoor-outdoor horse farm venue with caterer tables, delivery access and preferred vendors listed as not required. Its current page advertises seating up to 250 guests.",
      "tags": [
        "Preferred list not required",
        "Up to 250",
        "Farm"
      ],
      "facts": {
        "capacity": "Up to 250",
        "policy": "Preferred vendors not required",
        "pricing": "From $5,000 shown for one day"
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
    "any": "Any",
    "confirm": "Confirm directly",
    "officialSource": "View official source",
    "suggestUpdate": "Suggest an update",
    "save": "Save",
    "saved": "Saved",
    "compare": "Compare",
    "noMatchesTitle": "No exact matches yet",
    "noMatchesText": "Clear a filter or suggest a verified listing for this gap.",
    "location": "Location",
    "bestFor": "Best for",
    "feature": "Feature",
    "matcherButton": "Show my best match",
    "matcherEmpty": "Choose at least one preference.",
    "matcherNoResult": "No exact match is verified yet. Try fewer constraints.",
    "matcherResult": "Best current match",
    "matcherApply": "Show in directory"
  },
  "matcher": {
    "fields": [
      {
        "key": "state",
        "label": "State",
        "placeholder": "Any state"
      },
      {
        "key": "policy",
        "label": "Catering policy",
        "placeholder": "Any flexible policy"
      },
      {
        "key": "capacity",
        "label": "Guest count",
        "placeholder": "Any capacity"
      }
    ]
  }
};
