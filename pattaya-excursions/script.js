const phone = "972533613100";

const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".tour-card");
const bookingForm = document.querySelector("#bookingForm");
const tourSelect = document.querySelector("#tourSelect");
const dateInput = document.querySelector("#dateInput");
const peopleInput = document.querySelector("#peopleInput");
const hotelInput = document.querySelector("#hotelInput");
const noteInput = document.querySelector("#noteInput");

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filters.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");

    cards.forEach((card) => {
      const categories = card.dataset.category || "";
      const shouldShow = filter === "all" || categories.includes(filter);
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

document.querySelectorAll(".book-button").forEach((button) => {
  button.addEventListener("click", () => {
    const tourName = button.dataset.tour || "";
    tourSelect.value = tourName;
    document.querySelector("#booking").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const tour = tourSelect.value || "подберите мне экскурсию";
  const date = dateInput.value.trim() || "дату уточню";
  const people = peopleInput.value.trim() || "количество гостей уточню";
  const hotel = hotelInput.value.trim() || "отель/район уточню";
  const note = noteInput.value.trim() || "без дополнительного комментария";

  const message = [
    "Здравствуйте! Хочу экскурсию в Паттайе.",
    `Экскурсия: ${tour}`,
    `Дата: ${date}`,
    `Гостей: ${people}`,
    `Отель/район: ${hotel}`,
    `Комментарий: ${note}`,
    "Пришлите, пожалуйста, актуальные варианты, цену и условия трансфера."
  ].join("\n");

  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
});
