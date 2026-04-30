function renderProjects(projects = projectsData) {
  const container = document.getElementById("projectsContainer");
  if (!container || typeof projectsData === "undefined") return;

  container.innerHTML = projects
    .map(
      (project, index) => `
        <div class="project-card">
          <div class="project-card-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>

            <div class="project-tags">
              ${project.technologies
                .map((tech) => `<span class="project-tag">${tech}</span>`)
                .join("")}
            </div>

            <div class="project-actions">
              <button class="view-btn" data-index="${index}">View Details</button>
              <a href="${project.githubLink}" target="_blank">GitHub</a>
            </div>
          </div>
        </div>
      `
    )
    .join("");
}

renderProjects();