const apps = [
  ["Focentra", "Focus Timer", "Protect deep work with flexible focus and break sessions."],
  ["Docuvail", "PDF Scanner", "Scan paper into private PDF files stored on your iPhone."],
  ["Autorythm", "Car Log", "Keep service, mileage, repair, and cost history together."],
  ["Packlume", "Trip Checklist", "Plan every trip and see exactly how ready you are."],
  ["Brewmetry", "Coffee Guide", "Calculate ratios, save recipes, and time your brew."],
  ["Beaconora", "BLE Scanner", "Explore nearby Bluetooth Low Energy advertisements."],
  ["Formcrest", "Body Log", "Track weight and measurements without an account."],
  ["Daylune", "Mood Journal", "Build a quiet, private timeline of daily check-ins."],
  ["Doughclock", "Bake Planner", "Calculate every bread-making stage backward."],
  ["Privashade", "Photo Redactor", "Hide faces and sensitive details before sharing."]
];

const grid = document.querySelector("[data-app-grid]");
if (grid) {
  for (const [name, kind, description] of apps) {
    const article = document.createElement("article");
    article.className = "card";
    article.innerHTML = `
      <p class="eyebrow">${kind}</p>
      <h2>${name}</h2>
      <p>${description}</p>
      <span class="tag">7 days free · $4.99 lifetime</span>
    `;
    grid.append(article);
  }
}
