window.DIRECTORY_CONFIG = {
  "key": "localmac-guide:ru",
  "title": "LocalMac Guide",
  "sourceButton": "Официальные данные",
  "facets": [
    {
      "key": "chip",
      "label": "Процессор Mac",
      "allLabel": "Любой совместимый Mac",
      "options": [
        {
          "value": "Apple Silicon",
          "label": "Apple Silicon"
        },
        {
          "value": "Intel or Apple Silicon",
          "label": "Intel или Apple Silicon"
        }
      ]
    },
    {
      "key": "setup",
      "label": "Способ запуска",
      "allLabel": "Любой способ",
      "options": [
        {
          "value": "Desktop app",
          "label": "Настольное приложение"
        },
        {
          "value": "Terminal first",
          "label": "Сначала терминал"
        }
      ]
    },
    {
      "key": "documents",
      "label": "Работа с документами",
      "allLabel": "Любой сценарий",
      "options": [
        {
          "value": "yes",
          "label": "Документы встроены"
        },
        {
          "value": "no",
          "label": "Сначала чат или движок"
        }
      ]
    },
    {
      "key": "price",
      "label": "Начальная цена",
      "allLabel": "Любая цена",
      "options": [
        {
          "value": "Free",
          "label": "Бесплатно"
        },
        {
          "value": "Free tier",
          "label": "Есть бесплатный тариф"
        },
        {
          "value": "Paid",
          "label": "Платно"
        }
      ]
    }
  ],
  "factKeys": [
    {
      "key": "system",
      "label": "Требования Mac"
    },
    {
      "key": "documents",
      "label": "Документы"
    },
    {
      "key": "price",
      "label": "Начальная стоимость"
    }
  ],
  "listings": [
    {
      "id": "nocloud-ai",
      "name": "NoCloud AI: Offline Chat",
      "location": "macOS 26+ на Apple Silicon",
      "summary": "Приложение Mac App Store для вопросов к одному импортированному документу с отдельно загружаемыми моделями Gemma. Аккаунт NoCloud AI не нужен.",
      "tags": [
        "Наш продукт",
        "Без аккаунта",
        "Mac App Store"
      ],
      "facts": {
        "system": "Apple Silicon, macOS 26+",
        "documents": "PDF, TXT, MD, RTF, CSV, JSON",
        "price": "Бесплатно; Pro $0,99/месяц"
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
      "location": "macOS 13.6+ на Apple Silicon",
      "summary": "Открытый настольный помощник, где локальные модели используются по умолчанию, а требования объясняются с учётом объёма памяти.",
      "tags": [
        "Открытый код",
        "Локально по умолчанию",
        "Подбор по памяти"
      ],
      "facts": {
        "system": "Apple Silicon, macOS 13.6+",
        "documents": "Проекты и файлы",
        "price": "Бесплатно, открытый код"
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
      "location": "macOS; уточните поддержку процессора",
      "summary": "Настольная среда для поиска и запуска моделей, работы с документами и локального сервера. Основные функции доступны офлайн после загрузок.",
      "tags": [
        "Каталог моделей",
        "RAG документов",
        "Локальный сервер"
      ],
      "facts": {
        "system": "См. актуальные требования",
        "documents": "Локальный чат с документами",
        "price": "См. официальные условия"
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
      "summary": "Кроссплатформенное приложение для приватного запуска скачиваемых моделей. LocalDocs подключает локальные файлы как источники для чата.",
      "tags": [
        "LocalDocs",
        "Кроссплатформенность",
        "GPU не обязателен"
      ],
      "facts": {
        "system": "macOS Monterey 12.6+",
        "documents": "Коллекции LocalDocs",
        "price": "Бесплатно, открытый код"
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
      "location": "macOS 11+; Intel и Apple Silicon",
      "summary": "Расширенное приватное рабочее пространство для локальных и облачных моделей, если одного документного сценария недостаточно.",
      "tags": [
        "Локально и облако",
        "Рабочее пространство",
        "Версия Intel"
      ],
      "facts": {
        "system": "macOS 11+",
        "documents": "Функции рабочего пространства",
        "price": "См. текущие тарифы"
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
      "location": "macOS; уточните требования",
      "summary": "Популярный локальный движок с упором на командную строку и API. Подходит пользователям, готовым самостоятельно собрать стек.",
      "tags": [
        "Движок",
        "Для разработчиков",
        "API"
      ],
      "facts": {
        "system": "Уточнить на странице загрузки",
        "documents": "Через подключённые приложения",
        "price": "Бесплатно, открытый код"
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
    "any": "Любой",
    "confirm": "Уточнить напрямую",
    "officialSource": "Официальный источник",
    "suggestUpdate": "Предложить исправление",
    "save": "Сохранить",
    "saved": "Сохранено",
    "compare": "Сравнить",
    "noMatchesTitle": "Точного совпадения пока нет",
    "noMatchesText": "Уберите один из фильтров или предложите проверенный вариант.",
    "location": "Местоположение",
    "bestFor": "Лучше всего для",
    "feature": "Критерий",
    "matcherButton": "Подобрать лучший вариант",
    "matcherEmpty": "Выберите хотя бы одно условие.",
    "matcherNoResult": "Проверенного точного совпадения пока нет. Уменьшите число условий.",
    "matcherResult": "Лучшее текущее совпадение",
    "matcherApply": "Показать в каталоге"
  },
  "matcher": {
    "fields": [
      {
        "key": "chip",
        "label": "Процессор Mac",
        "placeholder": "Любой совместимый Mac"
      },
      {
        "key": "setup",
        "label": "Способ запуска",
        "placeholder": "Любой способ"
      },
      {
        "key": "documents",
        "label": "Работа с документами",
        "placeholder": "Любой сценарий"
      }
    ]
  }
};
