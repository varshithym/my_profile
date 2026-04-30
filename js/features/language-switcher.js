function changeLanguage(lang) {
  const elements = document.querySelectorAll("[data-en]");

  elements.forEach((el) => {
    if (lang === "en") {
      el.textContent = el.getAttribute("data-en");
    }
  });
}