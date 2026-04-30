// ============================
// KEYBOARD SHORTCUTS
// ============================

export function setupKeyboard() {
  document.addEventListener("keydown", (e) => {
    // avoid triggering inside input fields
    const tag = document.activeElement.tagName.toLowerCase();
    if (tag === "input" || tag === "textarea") return;

    // ============================
    // SEARCH (press "/")
    // ============================
    if (e.key === "/") {
      e.preventDefault();
      const search = document.getElementById("project-search");
      if (search) search.focus();
    }

    // ============================
    // THEME TOGGLE (press "t")
    // ============================
    if (e.key.toLowerCase() === "t") {
      const btn = document.getElementById("theme-toggle");
      if (btn) btn.click();
    }

    // ============================
    // GO TO PROJECTS (press "p")
    // ============================
    if (e.key.toLowerCase() === "p") {
      const section = document.getElementById("projects");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }

    // ============================
    // CLOSE MODAL (press ESC)
    // ============================
    if (e.key === "Escape") {
      const modal = document.getElementById("project-modal");
      if (modal && !modal.classList.contains("hidden")) {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
      }
    }
  });
}