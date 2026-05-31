const copyButton = document.querySelector("[data-copy]");

if (copyButton) {
  copyButton.addEventListener("click", async () => {
    const number = copyButton.getAttribute("data-copy");
    const label = copyButton.querySelector(".copy-button__label");
    const originalText = label ? label.textContent : copyButton.textContent.trim();

    try {
      await navigator.clipboard.writeText(number);
      copyButton.classList.add("is-copied");
      if (label) label.textContent = "Номер скопирован";
      window.setTimeout(() => {
        copyButton.classList.remove("is-copied");
        if (label) label.textContent = originalText;
      }, 1800);
    } catch {
      window.location.href = `tel:${number.replace(/\s/g, "")}`;
    }
  });
}
