window.DIRECTORY_CONFIG = {
  "key": "localmac-guide:en",
  "title": "LocalMac Guide",
  "sourceButton": "Official details",
  "facets": [
    {
      "key": "chip",
      "label": "Mac chip",
      "allLabel": "Any supported Mac",
      "options": [
        {
          "value": "Apple Silicon",
          "label": "Apple Silicon"
        },
        {
          "value": "Intel or Apple Silicon",
          "label": "Intel or Apple Silicon"
        }
      ]
    },
    {
      "key": "setup",
      "label": "Setup style",
      "allLabel": "Any setup",
      "options": [
        {
          "value": "Desktop app",
          "label": "Desktop app"
        },
        {
          "value": "Terminal first",
          "label": "Terminal first"
        }
      ]
    },
    {
      "key": "documents",
      "label": "Document workflow",
      "allLabel": "Any workflow",
      "options": [
        {
          "value": "yes",
          "label": "Built-in document workflow"
        },
        {
          "value": "no",
          "label": "Chat/runtime first"
        }
      ]
    },
    {
      "key": "price",
      "label": "Entry price",
      "allLabel": "Any price",
      "options": [
        {
          "value": "Free",
          "label": "Free"
        },
        {
          "value": "Free tier",
          "label": "Free tier"
        },
        {
          "value": "Paid",
          "label": "Paid"
        }
      ]
    }
  ],
  "factKeys": [
    {
      "key": "system",
      "label": "Mac requirement"
    },
    {
      "key": "documents",
      "label": "Documents"
    },
    {
      "key": "price",
      "label": "Starting point"
    }
  ],
  "listings": [
    {
      "id": "nocloud-ai",
      "name": "NoCloud AI: Offline Chat",
      "location": "macOS 26+ on Apple Silicon",
      "summary": "A focused Mac App Store app for asking questions about one imported document with separately downloaded Gemma models. No NoCloud AI account is required.",
      "tags": [
        "Built by us",
        "No account",
        "Mac App Store"
      ],
      "facts": {
        "system": "Apple Silicon, macOS 26+",
        "documents": "PDF, TXT, MD, RTF, CSV, JSON",
        "price": "Free; Pro $0.99/month"
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
      "location": "macOS 13.6+ on Apple Silicon",
      "summary": "Open-source desktop assistant with local models as the default path. Its current Mac documentation lists Apple Silicon support and hardware guidance by RAM.",
      "tags": [
        "Open source",
        "Local by default",
        "Hardware guidance"
      ],
      "facts": {
        "system": "Apple Silicon, macOS 13.6+",
        "documents": "Projects and files",
        "price": "Free / open source"
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
      "location": "macOS; confirm chip requirements",
      "summary": "A desktop environment for discovering and running models locally, chatting with documents and exposing a local server. Core use can continue offline after required downloads.",
      "tags": [
        "Model explorer",
        "Document RAG",
        "Local server"
      ],
      "facts": {
        "system": "See current Mac requirements",
        "documents": "Local document chat",
        "price": "See official terms"
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
      "summary": "A cross-platform desktop app for running downloadable models privately. LocalDocs can use local files as information sources for chats.",
      "tags": [
        "LocalDocs",
        "Cross-platform",
        "No GPU required"
      ],
      "facts": {
        "system": "macOS Monterey 12.6+",
        "documents": "LocalDocs collections",
        "price": "Free / open source"
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
      "location": "macOS 11+; Intel and Apple Silicon builds",
      "summary": "A broader private AI workspace that can connect local and online models. It suits users who want more workflow controls than a single-purpose document assistant.",
      "tags": [
        "Local and cloud",
        "Workspace",
        "Intel build"
      ],
      "facts": {
        "system": "macOS 11+",
        "documents": "Workspace features",
        "price": "See current plans"
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
      "location": "macOS; current requirements on official download page",
      "summary": "A popular local model runtime with a command-line-first workflow and an API for other apps. Best for users comfortable choosing models and composing their own stack.",
      "tags": [
        "Runtime",
        "Developer friendly",
        "API"
      ],
      "facts": {
        "system": "Confirm on download page",
        "documents": "Provided by connected apps",
        "price": "Free / open source"
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
        "key": "chip",
        "label": "Mac chip",
        "placeholder": "Any supported Mac"
      },
      {
        "key": "setup",
        "label": "Setup style",
        "placeholder": "Any setup"
      },
      {
        "key": "documents",
        "label": "Document workflow",
        "placeholder": "Any workflow"
      }
    ]
  }
};
