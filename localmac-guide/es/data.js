window.DIRECTORY_CONFIG = {
  "key": "localmac-guide:es",
  "title": "LocalMac Guide",
  "sourceButton": "Detalles oficiales",
  "facets": [
    {
      "key": "chip",
      "label": "Chip del Mac",
      "allLabel": "Cualquier Mac compatible",
      "options": [
        {
          "value": "Apple Silicon",
          "label": "Apple Silicon"
        },
        {
          "value": "Intel or Apple Silicon",
          "label": "Intel o Apple Silicon"
        }
      ]
    },
    {
      "key": "setup",
      "label": "Tipo de instalación",
      "allLabel": "Cualquier instalación",
      "options": [
        {
          "value": "Desktop app",
          "label": "Aplicación de escritorio"
        },
        {
          "value": "Terminal first",
          "label": "Primero terminal"
        }
      ]
    },
    {
      "key": "documents",
      "label": "Trabajo con documentos",
      "allLabel": "Cualquier flujo",
      "options": [
        {
          "value": "yes",
          "label": "Documentos integrados"
        },
        {
          "value": "no",
          "label": "Chat o motor primero"
        }
      ]
    },
    {
      "key": "price",
      "label": "Precio inicial",
      "allLabel": "Cualquier precio",
      "options": [
        {
          "value": "Free",
          "label": "Gratis"
        },
        {
          "value": "Free tier",
          "label": "Plan gratuito"
        },
        {
          "value": "Paid",
          "label": "De pago"
        }
      ]
    }
  ],
  "factKeys": [
    {
      "key": "system",
      "label": "Requisito del Mac"
    },
    {
      "key": "documents",
      "label": "Documentos"
    },
    {
      "key": "price",
      "label": "Punto de entrada"
    }
  ],
  "listings": [
    {
      "id": "nocloud-ai",
      "name": "NoCloud AI: Offline Chat",
      "location": "macOS 26+ con Apple Silicon",
      "summary": "Aplicación de Mac App Store centrada en consultar un documento importado con modelos Gemma descargados por separado. No requiere cuenta de NoCloud AI.",
      "tags": [
        "Creada por nosotros",
        "Sin cuenta",
        "Mac App Store"
      ],
      "facts": {
        "system": "Apple Silicon, macOS 26+",
        "documents": "PDF, TXT, MD, RTF, CSV, JSON",
        "price": "Gratis; Pro 0,99 $/mes"
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
      "location": "macOS 13.6+ con Apple Silicon",
      "summary": "Asistente de escritorio de código abierto que usa modelos locales como ruta predeterminada y ofrece orientación de hardware según la memoria.",
      "tags": [
        "Código abierto",
        "Local por defecto",
        "Guía de hardware"
      ],
      "facts": {
        "system": "Apple Silicon, macOS 13.6+",
        "documents": "Proyectos y archivos",
        "price": "Gratis y abierto"
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
      "location": "macOS; confirma el chip actual",
      "summary": "Entorno de escritorio para descubrir y ejecutar modelos, conversar con documentos y ofrecer un servidor local. El uso principal funciona sin conexión tras las descargas.",
      "tags": [
        "Explorador de modelos",
        "RAG documental",
        "Servidor local"
      ],
      "facts": {
        "system": "Consulta requisitos actuales",
        "documents": "Chat local con documentos",
        "price": "Consulta términos oficiales"
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
      "summary": "Aplicación multiplataforma para ejecutar modelos descargables de forma privada. LocalDocs utiliza archivos locales como fuentes de información.",
      "tags": [
        "LocalDocs",
        "Multiplataforma",
        "Sin GPU obligatoria"
      ],
      "facts": {
        "system": "macOS Monterey 12.6+",
        "documents": "Colecciones LocalDocs",
        "price": "Gratis y abierto"
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
      "location": "macOS 11+; Intel y Apple Silicon",
      "summary": "Espacio de trabajo privado más amplio que conecta modelos locales y en línea para usuarios que necesitan más controles.",
      "tags": [
        "Local y nube",
        "Espacio de trabajo",
        "Versión Intel"
      ],
      "facts": {
        "system": "macOS 11+",
        "documents": "Funciones de espacio de trabajo",
        "price": "Consulta planes actuales"
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
      "location": "macOS; confirma requisitos actuales",
      "summary": "Motor de modelos locales con flujo orientado a terminal y una API para otras aplicaciones. Adecuado para quien compone su propia solución.",
      "tags": [
        "Motor",
        "Para desarrolladores",
        "API"
      ],
      "facts": {
        "system": "Confirmar en descarga",
        "documents": "A través de apps conectadas",
        "price": "Gratis y abierto"
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
        "key": "chip",
        "label": "Chip del Mac",
        "placeholder": "Cualquier Mac compatible"
      },
      {
        "key": "setup",
        "label": "Tipo de instalación",
        "placeholder": "Cualquier instalación"
      },
      {
        "key": "documents",
        "label": "Trabajo con documentos",
        "placeholder": "Cualquier flujo"
      }
    ]
  }
};
