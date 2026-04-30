const modal = document.getElementById("projectModal");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("view-btn")) {
    const index = e.target.getAttribute("data-index");
    const project = projectsData[index];

    modalBody.innerHTML = `
      <h2>${project.title}</h2>
      <p>${project.description}</p>
      <h3>Technologies Used</h3>
      <ul>
        ${project.technologies.map((tech) => `<li>${tech}</li>`).join("")}
      </ul>
      <div style="margin-top: 20px;">
        <a href="${project.githubLink}" target="_blank">GitHub</a>
      </div>
    `;

    modal.classList.add("show");
  }
});

if (modalClose) {
  modalClose.addEventListener("click", () => {
    modal.classList.remove("show");
  });
}

if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
    }
  });
}