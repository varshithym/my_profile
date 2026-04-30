const projectSearchInput = document.getElementById("projectSearch");

if (projectSearchInput) {
  projectSearchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();

    const filteredProjects = projectsData.filter((project) => {
      const titleMatch = project.title.toLowerCase().includes(query);
      const descriptionMatch = project.description.toLowerCase().includes(query);
      const techMatch = project.technologies.some((tech) =>
        tech.toLowerCase().includes(query)
      );

      return titleMatch || descriptionMatch || techMatch;
    });

    renderProjects(filteredProjects);
  });
}