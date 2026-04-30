// ============================
// PROJECT FILTER FEATURE
// ============================

import { renderProjects } from "./project-render.js";
import { projects } from "../data/projects.js";

export function setupFilter() {
  const buttons = document.querySelectorAll("[data-filter]");

  if (!buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filterValue = btn.getAttribute("data-filter");

      // active button UI
      buttons.forEach((b) => b.classList.remove("bg-blue-600", "text-white"));
      btn.classList.add("bg-blue-600", "text-white");

      // filter logic
      if (filterValue === "all") {
        renderProjects(
          document.getElementById("projects-container"),
          projects
        );
        return;
      }

      const filtered = projects.filter((project) =>
        project.techStack.includes(filterValue)
      );

      renderProjects(
        document.getElementById("projects-container"),
        filtered
      );
    });
  });
}const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach((button) => {
  button.addEventListener("click", function () {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");

    const filter = this.getAttribute("data-filter");

    if (filter === "all") {
      renderProjects(projectsData);
      return;
    }

    const filteredProjects = projectsData.filter((project) => {
      if (filter === "mern") return project.category === "mern";
      if (filter === "backend") return project.category === "backend";
      if (filter === "java") return project.category === "java";
      return true;
    });

    renderProjects(filteredProjects);
  });
});