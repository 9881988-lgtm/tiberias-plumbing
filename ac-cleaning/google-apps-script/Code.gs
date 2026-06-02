const CONFIG = {
  OWNER_EMAIL: "YOUR_EMAIL@gmail.com",
  OWNER_WHATSAPP_PHONE: "972533613100",
  CALENDAR_ID: "primary",
  TIME_ZONE: "Asia/Jerusalem",
  SHEET_ID: "",
  SHEET_NAME: "AC cleaning leads",
  SERVICE_NAME_HE: "ניקוי יחידה פנימית של מזגן",
  SERVICE_NAME_RU: "Мойка внутреннего блока кондиционера",
  PRICE_LABEL: "Wash without disassembly: 250-350 ₪; deep wash with disassembly and disinfection: 400-500 ₪",
  BOOKING_HOURS: 3,
  WORKING_HOURS_BY_DAY: {
    0: { opens: "08:00", closes: "20:00" },
    1: { opens: "08:00", closes: "20:00" },
    2: { opens: "08:00", closes: "20:00" },
    3: { opens: "08:00", closes: "20:00" },
    4: { opens: "08:00", closes: "20:00" },
    5: { opens: "08:00", closes: "12:00" }
  }
};

function doPost(e) {
  try {
    const lead = parseLead_(e);
    const calendar = CalendarApp.getCalendarById(CONFIG.CALENDAR_ID);
    const start = reserveSelectedStart_(calendar, lead.preferredDateTime);
    const end = new Date(start.getTime() + CONFIG.BOOKING_HOURS * 60 * 60 * 1000);
    const event = createCalendarEvent_(calendar, lead, start, end);

    appendLead_(lead, start, end, event);
    sendOwnerEmail_(lead, start, end, event);
    sendClientEmail_(lead, start, end);

    return json_({
      ok: true,
      eventId: event.getId(),
      start: start.toISOString(),
      end: end.toISOString(),
      priceLabel: priceForPackage_(lead)
    });
  } catch (error) {
    notifyError_(error, e);
    return json_({ ok: false, error: String(error) });
  }
}

function doGet(e) {
  const params = e && e.parameter ? e.parameter : {};

  if (params.action === "slots") {
    try {
      const calendar = CalendarApp.getCalendarById(CONFIG.CALENDAR_ID);
      const daysAhead = Math.min(Math.max(Number(params.daysAhead || 21), 1), 45);
      return jsonOrJsonp_({
        ok: true,
        slots: getAvailableSlots_(calendar, daysAhead),
        bookingHours: CONFIG.BOOKING_HOURS,
        timeZone: CONFIG.TIME_ZONE
      }, params.callback);
    } catch (error) {
      return jsonOrJsonp_({ ok: false, error: String(error) }, params.callback);
    }
  }

  return jsonOrJsonp_({ ok: true, service: "AC cleaning lead endpoint" }, params.callback);
}

function parseLead_(e) {
  const raw = e && e.postData && e.postData.contents ? e.postData.contents : "{}";
  const data = JSON.parse(raw);
  const lead = {
    name: clean_(data.name),
    phone: clean_(data.phone),
    email: clean_(data.email),
    address: clean_(data.address),
    area: clean_(data.area),
    units: clean_(data.units || "1"),
    servicePackage: clean_(data.servicePackage),
    servicePackageLabel: clean_(data.servicePackageLabel),
    bookingDate: clean_(data.bookingDate),
    bookingSlot: clean_(data.bookingSlot),
    bookingSlotLabel: clean_(data.bookingSlotLabel),
    preferredDateTime: clean_(data.preferredDateTime),
    contactPreference: clean_(data.contactPreference || "whatsapp"),
    notes: clean_(data.notes),
    language: clean_(data.language || "he"),
    sourceUrl: clean_(data.sourceUrl),
    submittedAt: clean_(data.submittedAt),
    message: clean_(data.message)
  };

  if (!lead.name || !lead.phone || !lead.address || !lead.preferredDateTime) {
    throw new Error("Missing required lead fields: name, phone, address, preferredDateTime");
  }

  return lead;
}

function clean_(value) {
  return String(value || "").trim();
}

function createCalendarEvent_(calendar, lead, start, end) {
  const title = `AC cleaning ${lead.name} ${lead.phone}`;
  const description = [
    serviceName_(lead),
    `Price options: ${CONFIG.PRICE_LABEL}`,
    lead.servicePackageLabel ? `Selected service: ${lead.servicePackageLabel}` : "",
    `Selected price range: ${priceForPackage_(lead)}`,
    `Booking window: ${CONFIG.BOOKING_HOURS} hours`,
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    lead.email ? `Email: ${lead.email}` : "",
    `Address: ${lead.address}`,
    `Area: ${lead.area}`,
    `Units: ${lead.units}`,
    `Selected slot: ${lead.bookingDate || formatDate_(start)} ${lead.bookingSlotLabel || lead.preferredDateTime}`,
    `Preferred contact: ${lead.contactPreference}`,
    lead.notes ? `Notes: ${lead.notes}` : "",
    lead.sourceUrl ? `Source: ${lead.sourceUrl}` : ""
  ].filter(Boolean).join("\n");

  return calendar.createEvent(title, start, end, {
    location: lead.address,
    description
  });
}

function reserveSelectedStart_(calendar, selectedDateTime) {
  const start = parsePreferredDate_(selectedDateTime);
  if (!start) {
    throw new Error("Selected booking slot is missing or invalid");
  }
  if (start <= new Date()) {
    throw new Error("Selected booking slot is in the past");
  }
  if (!isWorkingSlot_(start)) {
    throw new Error("Selected booking slot is outside working hours");
  }
  if (!isFree_(calendar, start)) {
    throw new Error("Selected booking slot is no longer available");
  }
  return start;
}

function getAvailableSlots_(calendar, daysAhead) {
  const now = new Date();
  const slots = [];
  const durationMs = CONFIG.BOOKING_HOURS * 60 * 60 * 1000;

  for (let dayOffset = 0; dayOffset < daysAhead; dayOffset += 1) {
    const day = new Date(now);
    day.setDate(now.getDate() + dayOffset);
    day.setHours(0, 0, 0, 0);
    if (!isWorkingDay_(day)) continue;

    const hours = workingHoursFor_(day);
    const dayOpen = atTime_(day, hours.opens);
    const dayClose = atTime_(day, hours.closes);
    let cursor = dayOpen;

    while (cursor.getTime() + durationMs <= dayClose.getTime()) {
      const end = new Date(cursor.getTime() + durationMs);
      if (cursor > now && isFree_(calendar, cursor)) {
        slots.push({
          start: toLocalDateTime_(cursor),
          end: toLocalDateTime_(end),
          date: toLocalDate_(cursor),
          label: `${formatTime_(cursor)}-${formatTime_(end)}`
        });
      }
      cursor = new Date(cursor.getTime() + durationMs);
    }
  }

  return slots;
}

function findBookingStart_(calendar, preferredDateTime) {
  const requested = parsePreferredDate_(preferredDateTime);

  if (requested && isWorkingSlot_(requested) && isFree_(calendar, requested)) {
    return requested;
  }

  const now = new Date();
  const searchStart = requested && requested > now ? requested : now;
  const durationMs = CONFIG.BOOKING_HOURS * 60 * 60 * 1000;

  for (let dayOffset = 0; dayOffset < 45; dayOffset += 1) {
    const day = new Date(searchStart);
    day.setDate(searchStart.getDate() + dayOffset);
    if (!isWorkingDay_(day)) continue;

    const hours = workingHoursFor_(day);
    const dayOpen = atTime_(day, hours.opens);
    const dayClose = atTime_(day, hours.closes);
    let cursor = dayOffset === 0
      ? new Date(Math.max(dayOpen.getTime(), roundUpToHalfHour_(searchStart).getTime()))
      : dayOpen;

    while (cursor.getTime() + durationMs <= dayClose.getTime()) {
      if (isFree_(calendar, cursor)) return cursor;
      cursor = new Date(cursor.getTime() + 30 * 60 * 1000);
    }
  }

  throw new Error("No available working slot found in the next 45 days");
}

function parsePreferredDate_(value) {
  if (!value) return null;
  const match = String(value).match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/);
  if (!match) return null;
  return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]), Number(match[4]), Number(match[5]), 0, 0);
}

function isWorkingSlot_(start) {
  if (!isWorkingDay_(start)) return false;
  const hours = workingHoursFor_(start);
  const end = new Date(start.getTime() + CONFIG.BOOKING_HOURS * 60 * 60 * 1000);
  return start >= atTime_(start, hours.opens) && end <= atTime_(start, hours.closes);
}

function isWorkingDay_(date) {
  return Boolean(workingHoursFor_(date));
}

function workingHoursFor_(date) {
  return CONFIG.WORKING_HOURS_BY_DAY[date.getDay()] || null;
}

function isFree_(calendar, start) {
  const end = new Date(start.getTime() + CONFIG.BOOKING_HOURS * 60 * 60 * 1000);
  return calendar.getEvents(start, end).length === 0;
}

function atTime_(date, hm) {
  const parts = hm.split(":").map(Number);
  const result = new Date(date);
  result.setHours(parts[0], parts[1], 0, 0);
  return result;
}

function roundUpToHalfHour_(date) {
  const result = new Date(date);
  result.setSeconds(0, 0);
  const minutes = result.getMinutes();
  const add = minutes === 0 || minutes === 30 ? 0 : minutes < 30 ? 30 - minutes : 60 - minutes;
  result.setMinutes(minutes + add);
  return result;
}

function appendLead_(lead, start, end, event) {
  if (!CONFIG.SHEET_ID) return;
  const sheet = SpreadsheetApp.openById(CONFIG.SHEET_ID).getSheetByName(CONFIG.SHEET_NAME)
    || SpreadsheetApp.openById(CONFIG.SHEET_ID).insertSheet(CONFIG.SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Submitted", "Start", "End", "Selected Slot", "Name", "Phone", "Email", "Address", "Area", "Units", "Service Package", "Contact", "Price", "Event ID", "Notes", "Source"]);
  }
  sheet.appendRow([
    new Date(),
    start,
    end,
    lead.bookingSlotLabel || lead.preferredDateTime,
    lead.name,
    lead.phone,
    lead.email,
    lead.address,
    lead.area,
    lead.units,
    lead.servicePackageLabel || lead.servicePackage,
    lead.contactPreference,
    priceForPackage_(lead),
    event.getId(),
    lead.notes,
    lead.sourceUrl
  ]);
}

function sendOwnerEmail_(lead, start, end, event) {
  const subject = `New AC cleaning lead: ${lead.name} ${lead.phone}`;
  const body = [
    "New lead for indoor AC unit cleaning and disinfection.",
    "",
    `Price options: ${CONFIG.PRICE_LABEL}`,
    lead.servicePackageLabel ? `Selected service: ${lead.servicePackageLabel}` : "",
    `Selected price range: ${priceForPackage_(lead)}`,
    `Calendar slot: ${formatDate_(start)} - ${formatDate_(end)}`,
    `Client selected: ${lead.bookingDate || toLocalDate_(start)} ${lead.bookingSlotLabel || lead.preferredDateTime}`,
    `Event ID: ${event.getId()}`,
    "",
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    lead.email ? `Email: ${lead.email}` : "",
    `Address: ${lead.address}`,
    `Area: ${lead.area}`,
    `Units: ${lead.units}`,
    `Preferred contact: ${lead.contactPreference}`,
    lead.notes ? `Notes: ${lead.notes}` : "",
    lead.sourceUrl ? `Source: ${lead.sourceUrl}` : ""
  ].filter(Boolean).join("\n");

  MailApp.sendEmail(CONFIG.OWNER_EMAIL, subject, body);
}

function sendClientEmail_(lead, start, end) {
  if (!lead.email) return;
  const isRu = lead.language === "ru";
  const subject = isRu
    ? "Подтверждение цены на мойку кондиционера"
    : "אישור מחיר לניקוי מזגן";
  const body = isRu
    ? [
        `${lead.name}, здравствуйте.`,
        "",
        `Получили заявку на ${CONFIG.SERVICE_NAME_RU}.`,
        lead.servicePackageLabel ? `Выбранный тип мойки: ${lead.servicePackageLabel}.` : "",
        `Диапазон цены выбранного варианта: ${priceForPackage_(lead)}.`,
        `Выбранный рабочий слот зарезервирован: ${formatDate_(start)} - ${formatDate_(end)}.`,
        "Доступ к кондиционеру и детали выезда будут подтверждены отдельно.",
        "",
        `Телефон/WhatsApp: ${CONFIG.OWNER_WHATSAPP_PHONE}`
      ].join("\n")
    : [
        `שלום ${lead.name},`,
        "",
        `קיבלנו את הבקשה עבור ${CONFIG.SERVICE_NAME_HE}.`,
        lead.servicePackageLabel ? `סוג הניקוי שנבחר: ${lead.servicePackageLabel}.` : "",
        `טווח המחיר למסלול שנבחר: ${priceForPackage_(lead)}.`,
        `המועד שנבחר נשמר ביומן: ${formatDate_(start)} - ${formatDate_(end)}.`,
        "הגישה למזגן ופרטי ההגעה יאושרו בנפרד.",
        "",
        `טלפון/WhatsApp: ${CONFIG.OWNER_WHATSAPP_PHONE}`
      ].join("\n");

  MailApp.sendEmail(lead.email, subject, body);
}

function notifyError_(error, e) {
  const body = [
    "AC cleaning lead endpoint error",
    String(error),
    e && e.postData ? e.postData.contents : ""
  ].join("\n\n");
  MailApp.sendEmail(CONFIG.OWNER_EMAIL, "AC cleaning lead error", body);
}

function serviceName_(lead) {
  return lead.language === "ru" ? CONFIG.SERVICE_NAME_RU : CONFIG.SERVICE_NAME_HE;
}

function priceForPackage_(lead) {
  if (lead.servicePackage === "basic") return "250-350 ₪";
  if (lead.servicePackage === "deep") return "400-500 ₪";
  return CONFIG.PRICE_LABEL;
}

function formatDate_(date) {
  return Utilities.formatDate(date, CONFIG.TIME_ZONE, "yyyy-MM-dd HH:mm");
}

function toLocalDate_(date) {
  return Utilities.formatDate(date, CONFIG.TIME_ZONE, "yyyy-MM-dd");
}

function toLocalDateTime_(date) {
  return Utilities.formatDate(date, CONFIG.TIME_ZONE, "yyyy-MM-dd'T'HH:mm");
}

function formatTime_(date) {
  return Utilities.formatDate(date, CONFIG.TIME_ZONE, "HH:mm");
}

function json_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function jsonOrJsonp_(payload, callback) {
  if (callback && /^[A-Za-z_$][0-9A-Za-z_$]*$/.test(callback)) {
    return ContentService
      .createTextOutput(`${callback}(${JSON.stringify(payload)});`)
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return json_(payload);
}
