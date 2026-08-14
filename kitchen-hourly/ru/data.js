window.DIRECTORY_CONFIG = {
  "key": "kitchen-hourly:ru",
  "title": "Kitchen Hourly",
  "sourceButton": "Проверить цену и доступ",
  "facets": [
    {
      "key": "state",
      "label": "Штат",
      "allLabel": "Любой стартовый рынок",
      "options": [
        {
          "value": "Oregon",
          "label": "Орегон"
        },
        {
          "value": "Washington",
          "label": "Вашингтон"
        }
      ]
    },
    {
      "key": "rate",
      "label": "Опубликованная ставка",
      "allLabel": "Любая ставка",
      "options": [
        {
          "value": "under20",
          "label": "До $20 в час"
        },
        {
          "value": "20to25",
          "label": "$20–25 в час"
        },
        {
          "value": "over25",
          "label": "Более $25 в час"
        }
      ]
    },
    {
      "key": "access",
      "label": "Доступ",
      "allLabel": "Любой доступ",
      "options": [
        {
          "value": "24/7",
          "label": "24/7"
        },
        {
          "value": "Scheduled",
          "label": "По расписанию"
        },
        {
          "value": "Off-hours available",
          "label": "Доступны непиковые часы"
        }
      ]
    },
    {
      "key": "storage",
      "label": "Хранение",
      "allLabel": "Любой статус",
      "options": [
        {
          "value": "Available",
          "label": "Доступно"
        },
        {
          "value": "Ask",
          "label": "Уточнить"
        },
        {
          "value": "Currently full",
          "label": "Сейчас заполнено"
        }
      ]
    }
  ],
  "factKeys": [
    {
      "key": "rate",
      "label": "Почасовая ставка"
    },
    {
      "key": "minimum",
      "label": "Минимум / членство"
    },
    {
      "key": "storage",
      "label": "Хранение"
    }
  ],
  "listings": [
    {
      "id": "public-market-crw",
      "name": "Public Market Premier Kitchen",
      "location": "Кенневик, Вашингтон",
      "summary": "Девять рабочих мест, зоны подготовки, мойки и дневной холодильник. Опубликованы пиковые, непиковые и пакетные ставки, а также разные виды хранения.",
      "tags": [
        "От $18 в час",
        "9 рабочих мест",
        "Холодное хранение"
      ],
      "facts": {
        "rate": "От $18 в час",
        "minimum": "Почасово и пакеты 10–50 часов",
        "storage": "От $50 в месяц"
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
      "location": "Портленд, Орегон",
      "summary": "Кухня с онлайн-бронированием и открытой сеткой тарифов: разовая аренда, месячные объёмы и непиковые часы.",
      "tags": [
        "$17 в непиковые часы",
        "Разовая аренда",
        "Онлайн-бронирование"
      ],
      "facts": {
        "rate": "$17–25 в час",
        "minimum": "Разовая аренда от 3 часов",
        "storage": "Уточнить цену"
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
      "location": "Ливенворт, Вашингтон",
      "summary": "Общественная кухня для поваров, кейтеринга, фермеров, кондитеров, фудтраков и производителей с подробным оборудованием и хранением.",
      "tags": [
        "От $15 в час",
        "Фудтраки",
        "Спецоборудование"
      ],
      "facts": {
        "rate": "$15–35 в час",
        "minimum": "$100 в год",
        "storage": "$35 сухое / $50 морозильник / $100 холодильник"
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
      "location": "Такома, Вашингтон",
      "summary": "Общая кухня с рабочими столами разных размеров и понятной таблицей дневных и ночных ставок.",
      "tags": [
        "$18 ночная ставка",
        "Цена по размеру",
        "Оборудование включено"
      ],
      "facts": {
        "rate": "$18–35 в час",
        "minimum": "$500 в месяц; минимум 2 месяца",
        "storage": "Не включено"
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
      "location": "Олимпия, Вашингтон",
      "summary": "Круглосуточная кухня с зонами готовки, подготовки и большим набором оборудования. На странице указано, что хранение сейчас заполнено.",
      "tags": [
        "24/7",
        "$20–55 в час",
        "Большой список оборудования"
      ],
      "facts": {
        "rate": "$20–55 в час",
        "minimum": "Зависит от использования",
        "storage": "Сейчас заполнено"
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
      "location": "Сейлем, Орегон",
      "summary": "Лицензированная кухня для коммерческой и некоммерческой почасовой работы. Сайт сейчас не принимает новых арендаторов.",
      "tags": [
        "Сигнал очереди",
        "Сейлем",
        "Коммерческое использование"
      ],
      "facts": {
        "rate": "Уточнить",
        "minimum": "Зависит от задачи",
        "storage": "Связаться с кухней"
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
        "key": "state",
        "label": "Штат",
        "placeholder": "Любой стартовый рынок"
      },
      {
        "key": "rate",
        "label": "Опубликованная ставка",
        "placeholder": "Любая ставка"
      },
      {
        "key": "access",
        "label": "Доступ",
        "placeholder": "Любой доступ"
      }
    ]
  }
};
