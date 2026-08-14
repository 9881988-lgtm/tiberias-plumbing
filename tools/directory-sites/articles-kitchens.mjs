export const kitchenArticles = [
  {
    slug: "true-hourly-cost",
    minutes: 7,
    sources: [
      ["Public Market CRW rates", "https://publicmarketcrw.com/commercial-kitchen/"],
      ["Cherry Pit Kitchen rates", "https://www.cherrypitkitchen.com/rates"],
      ["Whimsy's Kitchen hourly rates", "https://whimsyskitchen.com/hourly-rates/"]
    ],
    translations: {
      en: {
        title: "The true hourly cost of a commissary kitchen",
        description: "Compare shared kitchens using productive hours, minimums, membership, storage, cleaning and transport rather than the headline rate.",
        eyebrow: "Kitchen cost model",
        lead: "An $18 hourly rate can cost more than a $25 rate when minimum blocks, travel, setup and storage are counted. Price one complete production run.",
        takeaways: ["Calculate productive hours, not booked hours.", "Add minimums, membership and storage.", "Include travel, setup and cleanup.", "Measure cost per sellable unit."],
        sections: [
          ["map-the-run", "1. Map one production run", ["Write the sequence from loading the vehicle to returning clean equipment. Include travel, check-in, setup, preheating, production, cooling, packing, cleaning and load-out.", "Only part of the reserved block creates product. A kitchen with the right oven, mixer or prep layout can reduce non-productive time enough to justify a higher rate."]],
          ["add-fixed-costs", "2. Add every fixed and recurring cost", ["Record application, deposit, membership, minimum monthly spend, insurance, orientation and required permits. Add dry, cold and frozen storage separately.", "Ask whether cleaning supplies, sheet pans, smallwares, dishwashing, waste, oil disposal and utilities are included. A published rate without inclusions is not yet comparable."]],
          ["price-the-unit", "3. Convert the shift into unit economics", ["Divide the full run cost by the number of sellable units, not the theoretical batch. Include spoilage, samples and products held for quality checks.", "Repeat for peak and off-peak rates. A schedule change may improve margin without changing recipe or price."]]
        ],
        callout: ["Core formula", "Cost per sellable unit = (kitchen + fixed allocation + storage + transport + labor + waste) / sellable units."],
        table: ["Hourly rate reality", ["Cost layer", "Ask", "Measure"], [["Booking", "Minimum block and monthly commitment", "Reserved hours"], ["Production", "Equipment and workflow", "Productive hours"], ["Operations", "Cleaning, waste, utilities", "Added shift cost"], ["Inventory", "Storage and access", "Monthly allocation"]]],
        conclusion: ["Compare output, not stickers", "The best-value kitchen is the one that produces compliant, sellable product at the lowest dependable unit cost, not necessarily the lowest hourly price."]
      },
      es: {
        title: "El coste horario real de una cocina compartida",
        description: "Compara cocinas por horas productivas, mínimos, membresía, almacenamiento, limpieza y transporte.",
        eyebrow: "Modelo de costes",
        lead: "Una tarifa de 18 $ puede costar más que una de 25 $ al sumar mínimos, viaje, preparación y almacén. Calcula una producción completa.",
        takeaways: ["Calcula horas productivas.", "Añade mínimos, membresía y almacenamiento.", "Incluye viaje, montaje y limpieza.", "Mide coste por unidad vendible."],
        sections: [
          ["map-the-run", "1. Mapea una producción", ["Anota desde cargar el vehículo hasta volver con equipo limpio: viaje, entrada, montaje, calor, producción, frío, envase, limpieza y salida.", "Solo parte de la reserva produce. El equipo correcto puede ahorrar suficiente tiempo para justificar una tarifa mayor."]],
          ["add-fixed-costs", "2. Añade costes fijos y recurrentes", ["Registra solicitud, depósito, membresía, mínimo mensual, seguro, formación, permisos y cada tipo de almacenamiento.", "Pregunta si se incluyen limpieza, bandejas, utensilios, lavavajillas, residuos, aceite y suministros."]],
          ["price-the-unit", "3. Lleva el turno a coste unitario", ["Divide el coste total por unidades vendibles, no por la producción teórica. Incluye merma y control de calidad.", "Repite con horas punta y valle. Un cambio de horario puede mejorar el margen."]]
        ],
        callout: ["Fórmula", "Coste por unidad = (cocina + fijos + almacén + transporte + trabajo + merma) / unidades vendibles."],
        table: ["Realidad de la tarifa", ["Capa", "Pregunta", "Medida"], [["Reserva", "Mínimo y compromiso", "Horas reservadas"], ["Producción", "Equipo y flujo", "Horas productivas"], ["Operación", "Limpieza y suministros", "Coste del turno"], ["Inventario", "Almacén y acceso", "Asignación mensual"]]],
        conclusion: ["Compara producción, no etiquetas", "La mejor cocina produce alimentos conformes al menor coste unitario fiable; no siempre tiene la menor tarifa."]
      },
      ru: {
        title: "Реальная почасовая стоимость общей коммерческой кухни",
        description: "Сравнение по продуктивным часам, минимуму, членству, хранению, уборке и дороге, а не по цене в заголовке.",
        eyebrow: "Модель расходов",
        lead: "Ставка $18 может обойтись дороже $25 после учёта минимального блока, дороги, подготовки и хранения. Считайте полный производственный цикл.",
        takeaways: ["Считайте продуктивные, а не забронированные часы.", "Добавьте минимум, членство и хранение.", "Учтите дорогу, подготовку и уборку.", "Считайте цену товарной единицы."],
        sections: [
          ["map-the-run", "1. Разберите один производственный цикл", ["Запишите путь от загрузки машины до возврата чистого инвентаря: дорога, вход, подготовка, нагрев, производство, охлаждение, упаковка, уборка и выезд.", "Продукт создаётся только часть времени. Подходящая печь, миксер и планировка могут оправдать более высокую ставку."]],
          ["add-fixed-costs", "2. Добавьте постоянные и регулярные расходы", ["Учтите заявку, депозит, членство, месячный минимум, страховку, инструктаж, разрешения, сухое, холодное и морозильное хранение.", "Уточните, включены ли химия, противни, мелкий инвентарь, мойка, мусор, масло и коммунальные услуги."]],
          ["price-the-unit", "3. Переведите смену в экономику единицы", ["Разделите полную стоимость на продаваемые единицы, а не на теоретический выпуск. Учтите брак и образцы.", "Повторите расчёт для пиковых и непиковых часов. Иногда график повышает маржу без изменения цены продукта."]]
        ],
        callout: ["Формула", "Цена единицы = (кухня + доля фиксированных + хранение + дорога + труд + потери) / продаваемые единицы."],
        table: ["Реальность ставки", ["Слой", "Вопрос", "Метрика"], [["Бронь", "Минимум и обязательство", "Забронированные часы"], ["Производство", "Оборудование и поток", "Продуктивные часы"], ["Операции", "Уборка, мусор, ресурсы", "Доплата за смену"], ["Запасы", "Хранение и доступ", "Месячная доля"]]],
        conclusion: ["Сравнивайте выпуск", "Лучшая кухня даёт легальный продаваемый продукт по минимальной устойчивой цене единицы, а не обязательно по минимальной ставке."]
      },
      he: {
        title: "העלות האמיתית לשעה במטבח מסחרי משותף",
        description: "משווים לפי שעות יצרניות, מינימום, חברות, אחסון, ניקיון ונסיעה ולא לפי המחיר בכותרת.",
        eyebrow: "מודל עלויות מטבח",
        lead: "מחיר של $18 לשעה יכול לעלות יותר מ-$25 כשמוסיפים מינימום, נסיעה, הכנה ואחסון. מתמחרים מחזור ייצור מלא.",
        takeaways: ["מחשבים שעות יצרניות.", "מוסיפים מינימום, חברות ואחסון.", "כוללים נסיעה, הקמה וניקיון.", "מודדים עלות ליחידה שניתנת למכירה."],
        sections: [
          ["map-the-run", "1. ממפים מחזור ייצור", ["כותבים את הרצף מהעמסת הרכב ועד חזרת ציוד נקי: נסיעה, כניסה, הכנה, חימום, ייצור, קירור, אריזה, ניקיון ויציאה.", "רק חלק מההזמנה מייצר מוצר. ציוד ופריסה מתאימים יכולים להצדיק תעריף גבוה יותר."]],
          ["add-fixed-costs", "2. מוסיפים עלויות קבועות וחוזרות", ["רושמים בקשה, פיקדון, חברות, מינימום חודשי, ביטוח, הדרכה, רישיונות ואחסון יבש, קר וקפוא.", "שואלים אם כלולים חומרי ניקוי, תבניות, כלים, שטיפה, פסולת, שמן ושירותים."]],
          ["price-the-unit", "3. הופכים משמרת לכלכלת יחידה", ["מחלקים את העלות המלאה במספר היחידות שניתן למכור, כולל פחת ודגימות.", "מחשבים שוב בשעות שיא ושפל. שינוי לוח זמנים יכול לשפר רווחיות."]]
        ],
        callout: ["נוסחה", "עלות ליחידה = (מטבח + קבועות + אחסון + הובלה + עבודה + פחת) / יחידות למכירה."],
        table: ["מציאות התעריף", ["שכבה", "שאלה", "מדד"], [["הזמנה", "מינימום והתחייבות", "שעות שמורות"], ["ייצור", "ציוד ותהליך", "שעות יצרניות"], ["תפעול", "ניקיון ופסולת", "עלות משמרת"], ["מלאי", "אחסון וגישה", "הקצאה חודשית"]]],
        conclusion: ["משווים תפוקה, לא מדבקה", "המטבח המשתלם מייצר מוצר חוקי למכירה בעלות יחידה אמינה ונמוכה, ולא בהכרח במחיר השעתי הנמוך ביותר."]
      }
    }
  },
  {
    slug: "equipment-fit-checklist",
    minutes: 7,
    sources: [
      ["Cascade Community Kitchen", "https://www.cascadecommunitymarkets.org/kitchen"],
      ["LOC-OLY Grown Kitchen", "https://capitalmallolympia.com/kitchen/"],
      ["Cherry Pit Kitchen", "https://www.cherrypitkitchen.com/"]
    ],
    translations: {
      en: {
        title: "Commercial kitchen equipment checklist for bakers, caterers and food trucks",
        description: "Match a shared kitchen to the actual production process, utilities, storage and packaging needs of your food business.",
        eyebrow: "Production fit",
        lead: "A licensed kitchen can still be wrong for your product. Walk the process in order and verify capacity, utilities, changeover and storage before committing.",
        takeaways: ["Bring a process map and equipment dimensions.", "Check capacity, not just availability.", "Include cooling, packing and dishwashing.", "Run a paid pilot shift before a long commitment."],
        sections: [
          ["map-product", "1. Map the product from raw input to packed unit", ["List receiving, storage, washing, prep, cooking, cooling, portioning, packaging, labeling and dispatch. Mark every temperature control and allergen boundary.", "The bottleneck is often after cooking. Cooling racks, blast chilling, counter space or a label station may matter more than the headline appliance."]],
          ["verify-capacity", "2. Verify useful capacity", ["Record oven cavity, mixer bowl, hood position, electrical outlets, gas connections, sink size and refrigeration space. Confirm what can run at the same time.", "Ask whether equipment is shared across stations and how conflicts are handled. A listed appliance is not useful if it is routinely booked by another tenant."]],
          ["pilot-the-shift", "3. Pilot the complete shift", ["Book the smallest practical block and produce a real batch. Time setup, sanitation, equipment queues, cooling, packing and cleanup.", "Review the result with the operator before committing. A pilot exposes missing smallwares, access constraints and realistic output better than a tour."]]
        ],
        callout: ["Bring this to the tour", "Recipe/process sheet, batch size, largest tray or pot dimensions, electrical requirements, storage volume, cleaning method and target units per shift."],
        table: ["Fit by business model", ["Business", "Critical equipment", "Common bottleneck"], [["Bakery", "Oven, mixer, racks", "Proofing and cooling"], ["Caterer", "Prep, hot holding, loading", "Simultaneous dishes"], ["Food truck", "Batch cook, cold storage", "Transfer and schedule"], ["Packaged food", "Kettle, filler, labeling", "Cooling and packaging"]]],
        conclusion: ["Prove the workflow", "The correct kitchen is the one where the full batch moves safely from receiving to dispatch. A pilot shift is the strongest evidence."]
      },
      es: {
        title: "Lista de equipos para repostería, catering y food trucks",
        description: "Ajusta la cocina compartida al proceso, suministros, almacén y envase de tu negocio.",
        eyebrow: "Encaje de producción",
        lead: "Una cocina autorizada puede no servir para tu producto. Recorre el proceso y verifica capacidad, suministros, cambios y almacenamiento.",
        takeaways: ["Lleva mapa de proceso y medidas.", "Comprueba capacidad útil.", "Incluye frío, envase y lavado.", "Haz un turno piloto."],
        sections: [
          ["map-product", "1. Mapea de materia prima a envase", ["Lista recepción, almacén, lavado, preparación, cocción, frío, porción, envase, etiqueta y salida. Marca temperatura y alérgenos.", "El cuello de botella suele estar después de cocinar: carros, frío, mesa o etiqueta."]],
          ["verify-capacity", "2. Verifica capacidad útil", ["Anota horno, mezclador, campana, electricidad, gas, fregadero y frío. Confirma qué funciona al mismo tiempo.", "Pregunta si el equipo se comparte y cómo resuelven conflictos."]],
          ["pilot-the-shift", "3. Prueba el turno completo", ["Reserva el bloque mínimo y produce un lote real. Mide montaje, saneamiento, colas, frío, envase y limpieza.", "Revisa el resultado antes de un compromiso largo."]]
        ],
        callout: ["Lleva a la visita", "Proceso, tamaño de lote, medidas máximas, electricidad, volumen de almacén, limpieza y unidades objetivo."],
        table: ["Encaje por negocio", ["Negocio", "Equipo crítico", "Cuello de botella"], [["Repostería", "Horno, batidora, carros", "Fermentación y frío"], ["Catering", "Preparación, calor, carga", "Platos simultáneos"], ["Food truck", "Lotes y frío", "Transferencia y horario"], ["Envasado", "Marmita, llenado, etiqueta", "Frío y envase"]]],
        conclusion: ["Demuestra el flujo", "La cocina correcta permite mover el lote con seguridad desde recepción hasta salida. El piloto es la mejor prueba."]
      },
      ru: {
        title: "Чек-лист оборудования для пекарни, кейтеринга и фудтрака",
        description: "Как сопоставить общую кухню с производственным процессом, ресурсами, хранением и упаковкой.",
        eyebrow: "Соответствие производству",
        lead: "Лицензированная кухня всё равно может не подходить продукту. Пройдите весь процесс и проверьте мощность, ресурсы, переналадку и хранение.",
        takeaways: ["Возьмите карту процесса и размеры инвентаря.", "Проверяйте полезную мощность.", "Учтите охлаждение, упаковку и мойку.", "Проведите платную тестовую смену."],
        sections: [
          ["map-product", "1. Пройдите путь от сырья до упаковки", ["Перечислите приёмку, хранение, мойку, подготовку, готовку, охлаждение, фасовку, маркировку и отгрузку. Отметьте температурные и аллергенные границы.", "Узкое место часто после готовки: стеллажи, охлаждение, стол или маркировка важнее главной печи."]],
          ["verify-capacity", "2. Проверьте полезную мощность", ["Запишите объём печи, миксера, вытяжку, розетки, газ, мойки и холодильники. Уточните, что может работать одновременно.", "Спросите, делится ли оборудование между рабочими местами и как решаются конфликты."]],
          ["pilot-the-shift", "3. Проведите полный пилот", ["Забронируйте минимальный блок и сделайте реальную партию. Замерьте подготовку, санитарную обработку, очереди, охлаждение, упаковку и уборку.", "Обсудите результат с оператором до длинного обязательства."]]
        ],
        callout: ["Что взять на просмотр", "Техкарту, размер партии, габариты инвентаря, электричество, объём хранения, способ уборки и плановый выпуск."],
        table: ["Подбор по бизнесу", ["Бизнес", "Критичное оборудование", "Частое узкое место"], [["Пекарня", "Печь, миксер, стеллажи", "Расстойка и охлаждение"], ["Кейтеринг", "Подготовка, тепло, погрузка", "Параллельные блюда"], ["Фудтрак", "Партии, холод", "Перенос и график"], ["Упаковка", "Котёл, розлив, этикетка", "Охлаждение и фасовка"]]],
        conclusion: ["Докажите сценарий", "Правильная кухня безопасно проводит партию от приёмки до отгрузки. Лучшее подтверждение — пилотная смена."]
      },
      he: {
        title: "רשימת ציוד לאופים, קייטרינג ומשאיות אוכל",
        description: "מתאימים מטבח משותף לתהליך הייצור, תשתיות, אחסון ואריזה של העסק.",
        eyebrow: "התאמת ייצור",
        lead: "מטבח מורשה עדיין יכול לא להתאים למוצר. עוברים על התהליך ומאמתים קיבולת, תשתיות, החלפה ואחסון.",
        takeaways: ["מביאים מפת תהליך ומידות.", "בודקים קיבולת שימושית.", "כוללים קירור, אריזה ושטיפה.", "עושים משמרת ניסיון."],
        sections: [
          ["map-product", "1. ממפים מחומר גלם למוצר ארוז", ["רושמים קבלה, אחסון, שטיפה, הכנה, בישול, קירור, חלוקה, אריזה, סימון ומשלוח. מסמנים טמפרטורה ואלרגנים.", "צוואר הבקבוק נמצא לעיתים אחרי הבישול: מדפים, קירור, שולחן או סימון."]],
          ["verify-capacity", "2. מאמתים קיבולת שימושית", ["רושמים נפח תנור, מיקסר, קולט, חשמל, גז, כיור וקירור. מאשרים מה יכול לעבוד יחד.", "שואלים אם הציוד משותף ואיך מטפלים בהתנגשויות."]],
          ["pilot-the-shift", "3. מנסים משמרת מלאה", ["מזמינים בלוק קטן ומייצרים אצווה אמיתית. מודדים הקמה, חיטוי, המתנות, קירור, אריזה וניקיון.", "בוחנים את התוצאה לפני התחייבות ארוכה."]]
        ],
        callout: ["מה להביא לסיור", "תהליך, גודל אצווה, מידות כלי גדול, חשמל, נפח אחסון, ניקיון ויעד יחידות."],
        table: ["התאמה לפי עסק", ["עסק", "ציוד קריטי", "צוואר בקבוק"], [["מאפייה", "תנור, מיקסר, מדפים", "התפחה וקירור"], ["קייטרינג", "הכנה, חימום, טעינה", "מנות במקביל"], ["משאית אוכל", "בישול אצוות וקירור", "העברה ולוח זמנים"], ["מזון ארוז", "סיר, מילוי, סימון", "קירור ואריזה"]]],
        conclusion: ["מוכיחים את התהליך", "המטבח הנכון מעביר את האצווה בבטחה מקבלה למשלוח. משמרת ניסיון היא הראיה הטובה ביותר."]
      }
    }
  },
  {
    slug: "permits-storage-scheduling",
    minutes: 7,
    sources: [
      ["Washington State Department of Agriculture food processor resources", "https://agr.wa.gov/departments/food-safety/food-safety/food-processors"],
      ["Oregon Department of Agriculture food safety", "https://www.oregon.gov/oda/programs/foodsafety/pages/default.aspx"],
      ["Renegade Kitchens current availability", "https://renegadekitchens.com/"]
    ],
    translations: {
      en: {
        title: "Permits, storage and scheduling: what to confirm before signing",
        description: "A pre-contract checklist for shared-kitchen licensing, insurance, storage access, recurring hours and current availability.",
        eyebrow: "Before the contract",
        lead: "A host kitchen's approval does not automatically authorize every product or business. Align regulator, kitchen and production schedule before committing.",
        takeaways: ["Identify the regulator for your product and sales channel.", "Get storage quantity and access in writing.", "Reserve recurring hours that match production.", "Keep a fallback for waitlists and closures."],
        sections: [
          ["confirm-regulator", "1. Confirm who regulates the activity", ["Your requirements can depend on product, process, packaging and where it is sold. Ask the relevant state or local authority what license, inspection, plan review and labeling apply.", "Share that answer with the kitchen. The facility's license, your business license and a product-specific approval are separate questions."]],
          ["lock-storage", "2. Lock the storage workflow", ["Measure dry, refrigerated and frozen volume, container dimensions and turnover. Confirm whether access is available outside a booked shift and how deliveries are received.", "Put quantity, location, price, temperature responsibility and termination rules in writing. ‘Storage available’ without a reserved allocation is not dependable capacity."]],
          ["secure-schedule", "3. Secure a repeatable schedule", ["Ask for the actual calendar, not only advertised opening hours. Identify peak conflicts, cancellation policy, recurring reservations, holiday access and what happens when equipment fails.", "Maintain a secondary production option or realistic notice period. Full kitchens and waitlists are useful market signals, but not operating capacity."]]
        ],
        callout: ["Three approvals, not one", "Before launch, confirm your business/product approval, the facility's suitability and your recurring booking/storage agreement."],
        table: ["Pre-sign evidence", ["Area", "Document", "Red flag"], [["Licensing", "Written regulator guidance", "‘The kitchen license covers you’"], ["Insurance", "Required limits and certificate", "Unknown additional insured"], ["Storage", "Reserved volume and access", "First-come shelf space"], ["Schedule", "Recurring calendar and cancellation", "Verbal availability only"]]],
        conclusion: ["Sign when the system is complete", "The room, permit, storage and schedule must all work together. One missing element can stop production even when the hourly rate looks ideal."]
      },
      es: {
        title: "Permisos, almacenamiento y horarios: qué confirmar antes de firmar",
        description: "Lista previa al contrato sobre licencias, seguro, acceso al almacén, horas recurrentes y disponibilidad.",
        eyebrow: "Antes del contrato",
        lead: "La aprobación de una cocina no autoriza automáticamente cada producto. Alinea regulador, cocina y horario antes de comprometerte.",
        takeaways: ["Identifica al regulador de tu producto y canal.", "Obtén volumen y acceso de almacén por escrito.", "Reserva horas recurrentes.", "Mantén alternativa ante listas de espera."],
        sections: [
          ["confirm-regulator", "1. Confirma quién regula", ["Los requisitos dependen de producto, proceso, envase y venta. Pregunta a la autoridad por licencia, inspección, revisión y etiqueta.", "Comparte la respuesta con la cocina. Licencia de instalación, licencia de negocio y aprobación del producto son cuestiones distintas."]],
          ["lock-storage", "2. Cierra el flujo de almacenamiento", ["Mide seco, frío y congelado, envases y rotación. Confirma acceso fuera del turno y recepción de entregas.", "Incluye cantidad, lugar, precio, temperatura y finalización en el contrato."]],
          ["secure-schedule", "3. Asegura un horario repetible", ["Pide el calendario real: conflictos, cancelación, reservas, festivos y fallos de equipo.", "Mantén alternativa o plazo realista. Una lista de espera indica demanda, no capacidad."]]
        ],
        callout: ["Tres aprobaciones", "Confirma aprobación de negocio/producto, idoneidad de la instalación y acuerdo recurrente de reserva y almacén."],
        table: ["Evidencia previa", ["Área", "Documento", "Alerta"], [["Licencia", "Guía escrita del regulador", "‘La licencia te cubre’"], ["Seguro", "Límites y certificado", "Asegurado adicional desconocido"], ["Almacén", "Volumen y acceso reservados", "Espacio por orden de llegada"], ["Horario", "Calendario y cancelación", "Solo promesa verbal"]]],
        conclusion: ["Firma cuando el sistema esté completo", "Espacio, permiso, almacén y horario deben funcionar juntos. Uno solo puede detener la producción."]
      },
      ru: {
        title: "Разрешения, хранение и график: что проверить до договора",
        description: "Преддоговорный чек-лист лицензий, страховки, хранения, регулярных часов и доступности кухни.",
        eyebrow: "До подписания",
        lead: "Допуск кухни не всегда разрешает ваш продукт или бизнес. Согласуйте регулятора, площадку и производственный график до обязательств.",
        takeaways: ["Определите регулятора продукта и канала продаж.", "Зафиксируйте объём и доступ к хранению.", "Забронируйте регулярные часы.", "Имейте запасной вариант."],
        sections: [
          ["confirm-regulator", "1. Уточните, кто регулирует деятельность", ["Требования зависят от продукта, процесса, упаковки и места продажи. Спросите ведомство о лицензии, инспекции, плане и маркировке.", "Передайте ответ кухне. Лицензия объекта, вашего бизнеса и отдельного продукта — разные вопросы."]],
          ["lock-storage", "2. Зафиксируйте хранение", ["Измерьте сухой, холодный и морозильный объём, тару и оборот. Проверьте доступ вне смены и приём доставки.", "Укажите объём, место, цену, температуру и прекращение услуги письменно."]],
          ["secure-schedule", "3. Обеспечьте повторяемый график", ["Попросите реальный календарь: пики, отмены, регулярную бронь, праздники и отказ оборудования.", "Сохраните вторую площадку или разумный срок предупреждения. Очередь показывает спрос, но не даёт мощности."]]
        ],
        callout: ["Три согласования", "Подтвердите допуск бизнеса/продукта, пригодность объекта и регулярную бронь с хранением."],
        table: ["Доказательства до подписи", ["Область", "Документ", "Риск"], [["Лицензия", "Письменный ответ ведомства", "‘Лицензия кухни покрывает вас’"], ["Страховка", "Лимиты и сертификат", "Неизвестный доп. застрахованный"], ["Хранение", "Зарезервированный объём", "Свободная полка без гарантии"], ["График", "Календарь и отмена", "Только устное обещание"]]],
        conclusion: ["Подписывайте полный рабочий контур", "Помещение, разрешение, хранение и график должны работать вместе. Любой пробел остановит производство."]
      },
      he: {
        title: "רישיונות, אחסון ולוח זמנים: מה מאשרים לפני חתימה",
        description: "רשימת בדיקה לפני חוזה לגבי רישוי, ביטוח, גישת אחסון, שעות קבועות וזמינות.",
        eyebrow: "לפני החוזה",
        lead: "אישור המטבח אינו מאשר אוטומטית כל מוצר או עסק. מתאמים רגולטור, מטבח ולוח ייצור לפני התחייבות.",
        takeaways: ["מזהים את הרגולטור למוצר ולערוץ.", "מקבלים נפח וגישה לאחסון בכתב.", "שומרים שעות חוזרות.", "מכינים חלופה לרשימות המתנה."],
        sections: [
          ["confirm-regulator", "1. מאשרים מי מפקח על הפעילות", ["הדרישות תלויות במוצר, תהליך, אריזה ומכירה. שואלים את הרשות על רישיון, בדיקה, סקירה וסימון.", "משתפים את המטבח. רישיון המתקן, רישיון העסק ואישור מוצר הם שאלות נפרדות."]],
          ["lock-storage", "2. סוגרים את תהליך האחסון", ["מודדים נפח יבש, קר וקפוא, מידות מיכלים וקצב סבב. מאשרים גישה מחוץ למשמרת וקבלת משלוחים.", "מכניסים כמות, מקום, מחיר, אחריות טמפרטורה וסיום להסכם."]],
          ["secure-schedule", "3. מבטיחים לוח זמנים חוזר", ["מבקשים את היומן בפועל: עומסים, ביטולים, הזמנות קבועות, חגים ותקלות ציוד.", "שומרים אפשרות ייצור שנייה או זמן התראה. רשימת המתנה היא אות ביקוש, לא קיבולת."]]
        ],
        callout: ["שלושה אישורים", "מאשרים עסק/מוצר, התאמת המתקן והסכם הזמנה ואחסון קבוע."],
        table: ["ראיות לפני חתימה", ["תחום", "מסמך", "סימן אזהרה"], [["רישוי", "הנחיה כתובה מהרשות", "‘רישיון המטבח מכסה’"], ["ביטוח", "גבולות ותעודה", "מבוטח נוסף לא ידוע"], ["אחסון", "נפח וגישה שמורים", "מדף על בסיס מקום פנוי"], ["לוח זמנים", "יומן וביטול", "זמינות בעל פה בלבד"]]],
        conclusion: ["חותמים כשהמערכת שלמה", "החדר, הרישיון, האחסון והזמן חייבים לעבוד יחד. חסר אחד יכול לעצור ייצור."]
      }
    }
  }
];
