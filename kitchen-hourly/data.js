window.DIRECTORY_CONFIG = {
  "key": "kitchen-hourly:en",
  "title": "Kitchen Hourly",
  "sourceButton": "Check rates & access",
  "facets": [
    {
      "key": "state",
      "label": "State",
      "allLabel": "Any launch market",
      "options": [
        {
          "value": "Oregon",
          "label": "Oregon"
        },
        {
          "value": "Washington",
          "label": "Washington"
        }
      ]
    },
    {
      "key": "rate",
      "label": "Published entry rate",
      "allLabel": "Any rate",
      "options": [
        {
          "value": "under20",
          "label": "Under $20/hour"
        },
        {
          "value": "20to25",
          "label": "$20–$25/hour"
        },
        {
          "value": "over25",
          "label": "Over $25/hour"
        }
      ]
    },
    {
      "key": "access",
      "label": "Access",
      "allLabel": "Any access",
      "options": [
        {
          "value": "24/7",
          "label": "24/7"
        },
        {
          "value": "Scheduled",
          "label": "Scheduled"
        },
        {
          "value": "Off-hours available",
          "label": "Off-hours available"
        }
      ]
    },
    {
      "key": "storage",
      "label": "Storage",
      "allLabel": "Any storage status",
      "options": [
        {
          "value": "Available",
          "label": "Available"
        },
        {
          "value": "Ask",
          "label": "Ask"
        },
        {
          "value": "Currently full",
          "label": "Currently full"
        }
      ]
    }
  ],
  "factKeys": [
    {
      "key": "rate",
      "label": "Published hourly rate"
    },
    {
      "key": "minimum",
      "label": "Minimum / membership"
    },
    {
      "key": "storage",
      "label": "Storage"
    }
  ],
  "listings": [
    {
      "id": "public-market-crw",
      "name": "Public Market Premier Kitchen",
      "location": "Kennewick, Washington",
      "summary": "Nine workstations with prep areas, shared sinks and cooler access. The official page publishes peak, off-peak and prepaid options, plus dry, refrigerated and frozen storage.",
      "tags": [
        "From $18/hour",
        "9 workstations",
        "Cold storage"
      ],
      "facts": {
        "rate": "From $18/hour",
        "minimum": "Hourly and 10–50 hour plans",
        "storage": "From $50/month"
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
      "location": "Portland, Oregon",
      "summary": "A price-transparent Portland kitchen using online scheduling. The published plan ranges from drop-in time to lower hourly rates for larger monthly commitments and off-hours.",
      "tags": [
        "$17 off-hours",
        "Drop-in option",
        "Online scheduling"
      ],
      "facts": {
        "rate": "$17–$25/hour",
        "minimum": "Drop-in has 3-hour minimum",
        "storage": "Ask for current pricing"
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
      "location": "Leavenworth, Washington",
      "summary": "A community-market kitchen for chefs, caterers, farmers, bakers, food trucks and food processors, with a detailed equipment list and published storage rates.",
      "tags": [
        "From $15/hour",
        "Food trucks",
        "Specialized equipment"
      ],
      "facts": {
        "rate": "$15–$35/hour",
        "minimum": "$100 annual membership",
        "storage": "$35 dry / $50 frozen / $100 cold"
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
      "location": "Tacoma, Washington",
      "summary": "A shared-use kitchen with multiple prep-station sizes. The public rate table makes the difference between overnight and daytime station costs unusually clear.",
      "tags": [
        "$18 graveyard rate",
        "Station-size pricing",
        "Appliances included"
      ],
      "facts": {
        "rate": "$18–$35/hour",
        "minimum": "$500/month; 2-month minimum",
        "storage": "Not included in hourly rate"
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
      "location": "Olympia, Washington",
      "summary": "A 24/7 commercial kitchen with cooking and non-cooking prep areas, broad equipment and a published hourly range. Its page currently notes that storage is full.",
      "tags": [
        "24/7",
        "$20–$55/hour",
        "Large equipment list"
      ],
      "facts": {
        "rate": "$20–$55/hour",
        "minimum": "Varies by use",
        "storage": "Currently full"
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
      "location": "Salem, Oregon",
      "summary": "A licensed Salem kitchen built for commercial and non-commercial hourly use. The official site currently says it is not accepting new tenants, making status tracking essential.",
      "tags": [
        "Waitlist signal",
        "Salem",
        "Commercial use"
      ],
      "facts": {
        "rate": "Contact for current rate",
        "minimum": "Depends on intended use",
        "storage": "Contact kitchen"
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
        "placeholder": "Any launch market"
      },
      {
        "key": "rate",
        "label": "Published entry rate",
        "placeholder": "Any rate"
      },
      {
        "key": "access",
        "label": "Access",
        "placeholder": "Any access"
      }
    ]
  }
};
