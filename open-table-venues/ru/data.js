window.DIRECTORY_CONFIG = {
  "key": "open-table-venues:ru",
  "title": "Open Table Venues",
  "sourceButton": "Проверить правила",
  "facets": [
    {
      "key": "state",
      "label": "Штат",
      "allLabel": "Любой штат",
      "options": [
        {
          "value": "Maryland",
          "label": "Мэриленд"
        },
        {
          "value": "Virginia",
          "label": "Вирджиния"
        }
      ]
    },
    {
      "key": "policy",
      "label": "Правила кейтеринга",
      "allLabel": "Любые гибкие правила",
      "options": [
        {
          "value": "Any professional caterer",
          "label": "Любой профессиональный кейтеринг"
        },
        {
          "value": "Outside catering welcomed",
          "label": "Внешний кейтеринг разрешён"
        },
        {
          "value": "Cultural caterers",
          "label": "Национальный кейтеринг"
        },
        {
          "value": "Self-catering possible",
          "label": "Можно организовать питание самим"
        }
      ]
    },
    {
      "key": "capacity",
      "label": "Число гостей",
      "allLabel": "Любая вместимость",
      "options": [
        {
          "value": "under120",
          "label": "До 120"
        },
        {
          "value": "120to200",
          "label": "120–200"
        },
        {
          "value": "over200",
          "label": "Более 200"
        }
      ]
    },
    {
      "key": "setting",
      "label": "Тип площадки",
      "allLabel": "Любой тип",
      "options": [
        {
          "value": "Historic",
          "label": "Историческая"
        },
        {
          "value": "Farm",
          "label": "Ферма"
        },
        {
          "value": "Modern",
          "label": "Современная"
        },
        {
          "value": "Hotel",
          "label": "Отель"
        }
      ]
    }
  ],
  "factKeys": [
    {
      "key": "capacity",
      "label": "Вместимость"
    },
    {
      "key": "policy",
      "label": "Внешний кейтеринг"
    },
    {
      "key": "pricing",
      "label": "Опубликованная цена"
    }
  ],
  "listings": [
    {
      "id": "rixey-manor",
      "name": "Rixey Manor",
      "location": "Риксивилл, Вирджиния",
      "summary": "Историческая усадьба разрешает пригласить любого кейтерера без обязательного списка и дополнительного сбора. Бар обслуживает лицензированная команда площадки.",
      "tags": [
        "Без сбора",
        "Без обязательного списка",
        "Историческая усадьба"
      ],
      "facts": {
        "capacity": "Уточнить для вашей схемы",
        "policy": "Любой кейтеринг, без сбора",
        "pricing": "Запросить актуальный пакет"
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
      "location": "Округ Фэрфакс, Вирджиния",
      "summary": "Округ разрешает выбрать любого профессионального кейтерера. Самостоятельное питание допускается только в Great Falls Grange и Clark House.",
      "tags": [
        "Свободный выбор",
        "Муниципальные площадки",
        "Две self-catering площадки"
      ],
      "facts": {
        "capacity": "Зависит от объекта",
        "policy": "Любой профессиональный кейтеринг",
        "pricing": "Зависит от объекта"
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
      "location": "Фолс-Черч, Вирджиния",
      "summary": "Муниципальная историческая ферма: кейтеринг, шатры, стулья и столы заказываются у внешних компаний, а еда готовится в пристроенной современной кухне.",
      "tags": [
        "Внешние подрядчики",
        "Современная кухня",
        "Историческая ферма"
      ],
      "facts": {
        "capacity": "Небольшие свадьбы и события",
        "policy": "Внешние услуги",
        "pricing": "См. тарифы города"
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
      "location": "Стерлинг, Вирджиния",
      "summary": "Современный центр прямо разрешает внешний кейтеринг и собственного организатора.",
      "tags": [
        "Внешний кейтеринг",
        "Свободный организатор",
        "Современная площадка"
      ],
      "facts": {
        "capacity": "Уточнить схемы",
        "policy": "Внешний кейтеринг разрешён",
        "pricing": "Запросить варианты"
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
      "location": "Фолс-Черч, Вирджиния",
      "summary": "Свадебный сайт отеля сообщает о приёме лицензированных национальных кейтереров и поддержке банкетной команды.",
      "tags": [
        "Национальный кейтеринг",
        "Банкетная поддержка",
        "Отель"
      ],
      "facts": {
        "capacity": "Несколько залов",
        "policy": "Лицензированный национальный кейтеринг",
        "pricing": "Индивидуальный пакет"
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
      "location": "Норт-Ист, Мэриленд",
      "summary": "Фермерская площадка с местом для кейтерера, удобной доставкой и необязательным списком рекомендуемых подрядчиков. До 250 гостей.",
      "tags": [
        "Список не обязателен",
        "До 250",
        "Ферма"
      ],
      "facts": {
        "capacity": "До 250",
        "policy": "Рекомендованные подрядчики не обязательны",
        "pricing": "От $5 000 за день"
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
        "placeholder": "Любой штат"
      },
      {
        "key": "policy",
        "label": "Правила кейтеринга",
        "placeholder": "Любые гибкие правила"
      },
      {
        "key": "capacity",
        "label": "Число гостей",
        "placeholder": "Любая вместимость"
      }
    ]
  }
};
