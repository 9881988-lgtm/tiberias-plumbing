(function () {
  "use strict";

  const config = window.DIRECTORY_CONFIG;
  if (!config) return;

  const urlState = new URLSearchParams(window.location.search);

  const ui = {
    any: "Any",
    confirm: "Confirm directly",
    officialSource: "View official source",
    suggestUpdate: "Suggest an update",
    save: "Save",
    saved: "Saved",
    compare: "Compare",
    noMatchesTitle: "No exact matches yet",
    noMatchesText: "Clear a filter or suggest a verified listing for this gap.",
    location: "Location",
    bestFor: "Best for",
    feature: "Feature",
    matcherButton: "Show my best match",
    matcherEmpty: "Choose at least one preference.",
    matcherNoResult: "No exact match is verified yet. Try fewer constraints.",
    matcherResult: "Best current match",
    matcherApply: "Show in directory",
    ...config.ui
  };

  const state = {
    search: urlState.get("q") || "",
    filters: {},
    sort: "recommended",
    saved: new Set(JSON.parse(localStorage.getItem(`${config.key}:saved`) || "[]")),
    compare: new Set()
  };

  const elements = {
    search: document.querySelector("#directory-search"),
    searchButton: document.querySelector("#search-button"),
    filters: document.querySelector("#filters"),
    reset: document.querySelector("#reset-filters"),
    results: document.querySelector("#listing-grid"),
    count: document.querySelector("#result-count"),
    sort: document.querySelector("#sort-results"),
    compareBar: document.querySelector("#compare-bar"),
    compareCount: document.querySelector("#compare-count"),
    compareOpen: document.querySelector("#compare-open"),
    compareDialog: document.querySelector("#compare-dialog"),
    compareClose: document.querySelector("#compare-close"),
    compareContent: document.querySelector("#compare-content"),
    matcher: document.querySelector("#matcher-form"),
    matcherResult: document.querySelector("#matcher-result")
  };

  const escapeHtml = (value) => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const normalize = (value) => String(value || "").toLocaleLowerCase();

  function renderFacets() {
    elements.filters.innerHTML = config.facets.map((facet) => {
      const options = facet.options.map((option) => {
        const value = typeof option === "string" ? option : option.value;
        const label = typeof option === "string" ? option : option.label;
        return `<option value="${escapeHtml(value)}">${escapeHtml(label)}</option>`;
      }).join("");

      return `
        <div class="facet">
          <label for="facet-${escapeHtml(facet.key)}">${escapeHtml(facet.label)}</label>
          <select id="facet-${escapeHtml(facet.key)}" data-filter="${escapeHtml(facet.key)}">
            <option value="">${escapeHtml(facet.allLabel || ui.any)}</option>
            ${options}
          </select>
        </div>`;
    }).join("");
  }

  function listingMatches(listing) {
    const searchable = normalize([
      listing.name,
      listing.location,
      listing.summary,
      listing.tags.join(" "),
      Object.values(listing.facts).join(" ")
    ].join(" "));

    if (state.search && !searchable.includes(normalize(state.search))) return false;

    return Object.entries(state.filters).every(([key, selected]) => {
      if (!selected) return true;
      const value = listing.filters[key];
      if (Array.isArray(value)) return value.includes(selected);
      return String(value) === selected;
    });
  }

  function sortedListings() {
    const listings = config.listings.filter(listingMatches);
    if (state.sort === "name") return listings.sort((a, b) => a.name.localeCompare(b.name));
    if (state.sort === "location") return listings.sort((a, b) => a.location.localeCompare(b.location));
    if (state.sort === "price") return listings.sort((a, b) => (a.priceSort ?? Number.MAX_SAFE_INTEGER) - (b.priceSort ?? Number.MAX_SAFE_INTEGER));
    return listings.sort((a, b) => (b.score || 0) - (a.score || 0));
  }

  function renderListing(listing) {
    const isSaved = state.saved.has(listing.id);
    const isCompared = state.compare.has(listing.id);
    const facts = config.factKeys.map((fact) => `
      <div>
        <dt>${escapeHtml(fact.label)}</dt>
        <dd>${escapeHtml(listing.facts[fact.key] || ui.confirm)}</dd>
      </div>`).join("");
    const tags = listing.tags.slice(0, 3).map((tag, index) => `<span class="tag${index === 0 ? " tag--signal" : ""}">${escapeHtml(tag)}</span>`).join(" ");
    const artwork = listing.artwork
      ? `<img class="app-listing-artwork" src="${escapeHtml(listing.artwork)}" alt="" width="128" height="128" loading="lazy" referrerpolicy="no-referrer" />`
      : "";

    return `
      <article class="listing-card" data-id="${escapeHtml(listing.id)}">
        <div>
          <div class="listing-card__header">
            <div class="listing-card__identity">
              ${artwork}
              <div>
                <h3>${escapeHtml(listing.name)}</h3>
                <p class="listing-card__location">${escapeHtml(listing.location)}</p>
              </div>
            </div>
            <div>${tags}</div>
          </div>
          <p class="listing-card__summary">${escapeHtml(listing.summary)}</p>
          <dl class="facts">${facts}</dl>
          <div class="listing-card__actions">
            <a class="button button--primary" href="${escapeHtml(listing.url)}" target="_blank" rel="noopener noreferrer">
              <i data-lucide="external-link" aria-hidden="true"></i>
              ${escapeHtml(config.sourceButton || ui.officialSource)}
            </a>
            <a class="button button--quiet" href="mailto:9881988@gmail.com?subject=${encodeURIComponent(`${config.title}: update ${listing.name}`)}">
              ${escapeHtml(ui.suggestUpdate)}
            </a>
          </div>
        </div>
        <div class="listing-card__save">
          <button class="button button--secondary save-button" type="button" data-save="${escapeHtml(listing.id)}" aria-pressed="${isSaved}">
            <i data-lucide="bookmark" aria-hidden="true"></i>
            <span>${isSaved ? escapeHtml(ui.saved) : escapeHtml(ui.save)}</span>
          </button>
          <label class="compare-check">
            <input type="checkbox" data-compare="${escapeHtml(listing.id)}" ${isCompared ? "checked" : ""} /> ${escapeHtml(ui.compare)}
          </label>
        </div>
      </article>`;
  }

  function renderResults() {
    const listings = sortedListings();
    elements.count.textContent = String(listings.length);
    elements.results.innerHTML = listings.length
      ? listings.map(renderListing).join("")
      : `<div class="empty-state"><h3>${escapeHtml(ui.noMatchesTitle)}</h3><p>${escapeHtml(ui.noMatchesText)}</p></div>`;
    if (window.lucide) window.lucide.createIcons();
  }

  function persistSaved() {
    localStorage.setItem(`${config.key}:saved`, JSON.stringify([...state.saved]));
  }

  function updateCompareBar() {
    elements.compareCount.textContent = String(state.compare.size);
    elements.compareBar.classList.toggle("is-visible", state.compare.size > 0);
  }

  function renderComparison() {
    const selected = config.listings.filter((listing) => state.compare.has(listing.id));
    const headings = selected.map((listing) => `<th scope="col">${escapeHtml(listing.name)}</th>`).join("");
    const rows = [
      { label: ui.location, value: (listing) => listing.location },
      ...config.factKeys.map((fact) => ({ label: fact.label, value: (listing) => listing.facts[fact.key] || ui.confirm })),
      { label: ui.bestFor, value: (listing) => listing.tags.join(", ") }
    ];
    const body = rows.map((row) => `<tr><th scope="row">${escapeHtml(row.label)}</th>${selected.map((listing) => `<td>${escapeHtml(row.value(listing))}</td>`).join("")}</tr>`).join("");
    elements.compareContent.innerHTML = `<table class="compare-table"><thead><tr><th scope="col">${escapeHtml(ui.feature)}</th>${headings}</tr></thead><tbody>${body}</tbody></table>`;
  }

  function renderMatcher() {
    if (!elements.matcher || !config.matcher?.fields?.length) return;

    const fields = config.matcher.fields.map((field) => {
      const facet = config.facets.find((candidate) => candidate.key === field.key);
      if (!facet) return "";
      const options = facet.options.map((option) => {
        const value = typeof option === "string" ? option : option.value;
        const label = typeof option === "string" ? option : option.label;
        return `<option value="${escapeHtml(value)}">${escapeHtml(label)}</option>`;
      }).join("");
      return `<label><span>${escapeHtml(field.label || facet.label)}</span><select data-match-filter="${escapeHtml(field.key)}"><option value="">${escapeHtml(field.placeholder || facet.allLabel || ui.any)}</option>${options}</select></label>`;
    }).join("");

    elements.matcher.innerHTML = `${fields}<button class="button button--primary" type="button" data-run-matcher><i data-lucide="sparkles" aria-hidden="true"></i>${escapeHtml(ui.matcherButton)}</button>`;
  }

  function runMatcher() {
    const chosen = Object.fromEntries([...elements.matcher.querySelectorAll("[data-match-filter]")]
      .map((select) => [select.dataset.matchFilter, select.value])
      .filter(([, value]) => value));

    if (!Object.keys(chosen).length) {
      elements.matcherResult.innerHTML = `<p>${escapeHtml(ui.matcherEmpty)}</p>`;
      return;
    }

    const match = config.listings
      .filter((listing) => Object.entries(chosen).every(([key, selected]) => {
        const value = listing.filters[key];
        return Array.isArray(value) ? value.includes(selected) : String(value) === selected;
      }))
      .sort((a, b) => (b.score || 0) - (a.score || 0))[0];

    if (!match) {
      elements.matcherResult.innerHTML = `<p>${escapeHtml(ui.matcherNoResult)}</p>`;
      return;
    }

    elements.matcherResult.innerHTML = `<p class="matcher-result__label">${escapeHtml(ui.matcherResult)}</p><h3>${escapeHtml(match.name)}</h3><p>${escapeHtml(match.summary)}</p><button class="button button--secondary" type="button" data-apply-match>${escapeHtml(ui.matcherApply)}</button>`;
    elements.matcherResult.querySelector("[data-apply-match]").addEventListener("click", () => {
      state.filters = { ...chosen };
      elements.filters.querySelectorAll("[data-filter]").forEach((select) => { select.value = chosen[select.dataset.filter] || ""; });
      renderResults();
      document.querySelector("#directory")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function applySearch() {
    state.search = elements.search.value.trim();
    const url = new URL(window.location.href);
    state.search ? url.searchParams.set("q", state.search) : url.searchParams.delete("q");
    window.history.replaceState({}, "", url);
    renderResults();
    document.querySelector("#directory")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  renderFacets();
  renderMatcher();
  elements.search.value = state.search;
  renderResults();
  updateCompareBar();
  if (window.lucide) window.lucide.createIcons();

  elements.searchButton.addEventListener("click", applySearch);
  elements.search.addEventListener("keydown", (event) => {
    if (event.key === "Enter") applySearch();
  });
  elements.search.addEventListener("input", () => {
    state.search = elements.search.value.trim();
    renderResults();
  });
  elements.filters.addEventListener("change", (event) => {
    if (!event.target.matches("[data-filter]")) return;
    state.filters[event.target.dataset.filter] = event.target.value;
    renderResults();
  });
  elements.reset.addEventListener("click", () => {
    state.filters = {};
    elements.filters.querySelectorAll("select").forEach((select) => { select.value = ""; });
    elements.search.value = "";
    state.search = "";
    renderResults();
  });
  elements.sort.addEventListener("change", () => {
    state.sort = elements.sort.value;
    renderResults();
  });
  elements.results.addEventListener("click", (event) => {
    const button = event.target.closest("[data-save]");
    if (!button) return;
    const id = button.dataset.save;
    state.saved.has(id) ? state.saved.delete(id) : state.saved.add(id);
    persistSaved();
    renderResults();
  });
  elements.results.addEventListener("change", (event) => {
    if (!event.target.matches("[data-compare]")) return;
    const id = event.target.dataset.compare;
    if (event.target.checked && state.compare.size >= 3) {
      event.target.checked = false;
      return;
    }
    event.target.checked ? state.compare.add(id) : state.compare.delete(id);
    updateCompareBar();
  });
  elements.compareOpen.addEventListener("click", () => {
    renderComparison();
    elements.compareDialog.showModal();
  });
  elements.compareClose.addEventListener("click", () => elements.compareDialog.close());
  elements.matcher?.addEventListener("click", (event) => {
    if (event.target.closest("[data-run-matcher]")) runMatcher();
  });
})();
