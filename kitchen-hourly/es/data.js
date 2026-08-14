window.DIRECTORY_CONFIG = {
  "key": "kitchen-hourly:es",
  "title": "Kitchen Hourly",
  "sourceButton": "Comprobar tarifa y acceso",
  "facets": [
    {
      "key": "state",
      "label": "Estado",
      "allLabel": "Cualquier mercado",
      "options": [
        {
          "value": "Oregon",
          "label": "Oregón"
        },
        {
          "value": "Washington",
          "label": "Washington"
        }
      ]
    },
    {
      "key": "rate",
      "label": "Tarifa publicada",
      "allLabel": "Cualquier tarifa",
      "options": [
        {
          "value": "under20",
          "label": "Menos de 20 $/hora"
        },
        {
          "value": "20to25",
          "label": "20–25 $/hora"
        },
        {
          "value": "over25",
          "label": "Más de 25 $/hora"
        }
      ]
    },
    {
      "key": "access",
      "label": "Acceso",
      "allLabel": "Cualquier acceso",
      "options": [
        {
          "value": "24/7",
          "label": "24/7"
        },
        {
          "value": "Scheduled",
          "label": "Programado"
        },
        {
          "value": "Off-hours available",
          "label": "Horario reducido"
        }
      ]
    },
    {
      "key": "storage",
      "label": "Almacenamiento",
      "allLabel": "Cualquier estado",
      "options": [
        {
          "value": "Available",
          "label": "Disponible"
        },
        {
          "value": "Ask",
          "label": "Consultar"
        },
        {
          "value": "Currently full",
          "label": "Actualmente completo"
        }
      ]
    }
  ],
  "factKeys": [
    {
      "key": "rate",
      "label": "Tarifa horaria"
    },
    {
      "key": "minimum",
      "label": "Mínimo / membresía"
    },
    {
      "key": "storage",
      "label": "Almacenamiento"
    }
  ],
  "listings": [
    {
      "id": "public-market-crw",
      "name": "Public Market Premier Kitchen",
      "location": "Kennewick, Washington",
      "summary": "Nueve puestos con zonas de preparación, fregaderos y cámara fría. La página publica horarios punta, valle, bonos y almacenamiento seco, refrigerado y congelado.",
      "tags": [
        "Desde 18 $/hora",
        "9 puestos",
        "Almacenamiento frío"
      ],
      "facts": {
        "rate": "Desde 18 $/hora",
        "minimum": "Por horas y planes de 10–50 horas",
        "storage": "Desde 50 $/mes"
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
      "location": "Portland, Oregón",
      "summary": "Cocina de Portland con reserva en línea. Los planes publicados van desde uso puntual hasta tarifas menores por compromiso mensual y horas valle.",
      "tags": [
        "17 $ fuera de hora",
        "Uso puntual",
        "Reserva en línea"
      ],
      "facts": {
        "rate": "17–25 $/hora",
        "minimum": "Uso puntual: mínimo 3 horas",
        "storage": "Consultar precio"
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
      "summary": "Cocina comunitaria para chefs, catering, agricultores, reposteros, food trucks y productores, con equipos y almacenamiento publicados.",
      "tags": [
        "Desde 15 $/hora",
        "Food trucks",
        "Equipo especializado"
      ],
      "facts": {
        "rate": "15–35 $/hora",
        "minimum": "Membresía anual de 100 $",
        "storage": "35 $ seco / 50 $ congelado / 100 $ frío"
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
      "summary": "Cocina compartida con puestos de varios tamaños y una tabla pública que distingue claramente precios nocturnos y diurnos.",
      "tags": [
        "18 $ turno nocturno",
        "Precio por tamaño",
        "Electrodomésticos incluidos"
      ],
      "facts": {
        "rate": "18–35 $/hora",
        "minimum": "500 $/mes; mínimo 2 meses",
        "storage": "No incluido"
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
      "summary": "Cocina 24/7 con áreas de cocción y preparación, amplio equipo y tarifa publicada. La página indica que el almacenamiento está completo.",
      "tags": [
        "24/7",
        "20–55 $/hora",
        "Mucho equipo"
      ],
      "facts": {
        "rate": "20–55 $/hora",
        "minimum": "Varía según uso",
        "storage": "Actualmente completo"
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
      "location": "Salem, Oregón",
      "summary": "Cocina autorizada para uso comercial y no comercial por hora. El sitio indica que no acepta nuevos usuarios, por lo que el estado es esencial.",
      "tags": [
        "Señal de lista de espera",
        "Salem",
        "Uso comercial"
      ],
      "facts": {
        "rate": "Consultar tarifa",
        "minimum": "Depende del uso",
        "storage": "Consultar"
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
    "any": "Cualquiera",
    "confirm": "Confirmar directamente",
    "officialSource": "Ver fuente oficial",
    "suggestUpdate": "Sugerir una actualización",
    "save": "Guardar",
    "saved": "Guardado",
    "compare": "Comparar",
    "noMatchesTitle": "Aún no hay coincidencias exactas",
    "noMatchesText": "Quita un filtro o sugiere una opción verificada para este caso.",
    "location": "Ubicación",
    "bestFor": "Ideal para",
    "feature": "Criterio",
    "matcherButton": "Mostrar mi mejor opción",
    "matcherEmpty": "Elige al menos una preferencia.",
    "matcherNoResult": "Aún no hay una coincidencia exacta verificada. Prueba con menos condiciones.",
    "matcherResult": "Mejor opción actual",
    "matcherApply": "Mostrar en el directorio"
  },
  "matcher": {
    "fields": [
      {
        "key": "state",
        "label": "Estado",
        "placeholder": "Cualquier mercado"
      },
      {
        "key": "rate",
        "label": "Tarifa publicada",
        "placeholder": "Cualquier tarifa"
      },
      {
        "key": "access",
        "label": "Acceso",
        "placeholder": "Cualquier acceso"
      }
    ]
  }
};
