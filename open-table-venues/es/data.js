window.DIRECTORY_CONFIG = {
  "key": "open-table-venues:es",
  "title": "Open Table Venues",
  "sourceButton": "Comprobar política",
  "facets": [
    {
      "key": "state",
      "label": "Estado",
      "allLabel": "Cualquier estado",
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
      "label": "Política de catering",
      "allLabel": "Cualquier política flexible",
      "options": [
        {
          "value": "Any professional caterer",
          "label": "Cualquier profesional"
        },
        {
          "value": "Outside catering welcomed",
          "label": "Catering externo aceptado"
        },
        {
          "value": "Cultural caterers",
          "label": "Catering cultural"
        },
        {
          "value": "Self-catering possible",
          "label": "Autoservicio posible"
        }
      ]
    },
    {
      "key": "capacity",
      "label": "Invitados",
      "allLabel": "Cualquier capacidad",
      "options": [
        {
          "value": "under120",
          "label": "Hasta 120"
        },
        {
          "value": "120to200",
          "label": "120–200"
        },
        {
          "value": "over200",
          "label": "Más de 200"
        }
      ]
    },
    {
      "key": "setting",
      "label": "Entorno",
      "allLabel": "Cualquier entorno",
      "options": [
        {
          "value": "Historic",
          "label": "Histórico"
        },
        {
          "value": "Farm",
          "label": "Granja"
        },
        {
          "value": "Modern",
          "label": "Moderno"
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
      "label": "Capacidad"
    },
    {
      "key": "policy",
      "label": "Catering externo"
    },
    {
      "key": "pricing",
      "label": "Precio publicado"
    }
  ],
  "listings": [
    {
      "id": "rixey-manor",
      "name": "Rixey Manor",
      "location": "Rixeyville, Virginia",
      "summary": "Finca histórica cuyo sitio oficial permite cualquier catering, sin lista obligatoria ni tarifa de catering externo. El lugar aporta personal de bar autorizado.",
      "tags": [
        "Sin tarifa de catering",
        "Sin lista obligatoria",
        "Finca histórica"
      ],
      "facts": {
        "capacity": "Confirmar según montaje",
        "policy": "Cualquier catering; sin tarifa externa",
        "pricing": "Solicitar paquete actual"
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
      "location": "Condado de Fairfax, Virginia",
      "summary": "El condado permite elegir cualquier catering profesional en sus espacios de recepción. El autoservicio se limita a Great Falls Grange y Clark House.",
      "tags": [
        "Catering a elección",
        "Espacios públicos",
        "Autoservicio en dos lugares"
      ],
      "facts": {
        "capacity": "Varía por propiedad",
        "policy": "Profesional a elección",
        "pricing": "Varía por propiedad"
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
      "summary": "Casa histórica municipal donde catering, carpas, sillas y mesas se contratan externamente; la comida debe prepararse en la cocina moderna anexa.",
      "tags": [
        "Proveedores externos",
        "Cocina moderna",
        "Casa histórica"
      ],
      "facts": {
        "capacity": "Bodas y fiestas pequeñas",
        "policy": "Servicios externos",
        "pricing": "Ver tarifas municipales"
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
      "summary": "Centro moderno cuya página de bodas acepta expresamente catering externo y permite elegir organizador propio.",
      "tags": [
        "Catering externo",
        "Organizador flexible",
        "Espacio moderno"
      ],
      "facts": {
        "capacity": "Confirmar montajes",
        "policy": "Catering externo aceptado",
        "pricing": "Solicitar opciones actuales"
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
      "summary": "El sitio de bodas acepta catering global externo autorizado y ofrece personal, bufés, bebidas y zonas de montaje para comida preparada.",
      "tags": [
        "Catering global",
        "Apoyo de banquetes",
        "Hotel"
      ],
      "facts": {
        "capacity": "Varios espacios",
        "policy": "Catering global autorizado",
        "pricing": "Paquete personalizado"
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
      "summary": "Granja interior y exterior con mesas para catering, acceso de entrega y proveedores preferidos no obligatorios. La página anuncia hasta 250 invitados.",
      "tags": [
        "Lista no obligatoria",
        "Hasta 250",
        "Granja"
      ],
      "facts": {
        "capacity": "Hasta 250",
        "policy": "Preferidos no obligatorios",
        "pricing": "Desde 5.000 $ por un día"
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
        "placeholder": "Cualquier estado"
      },
      {
        "key": "policy",
        "label": "Política de catering",
        "placeholder": "Cualquier política flexible"
      },
      {
        "key": "capacity",
        "label": "Invitados",
        "placeholder": "Cualquier capacidad"
      }
    ]
  }
};
