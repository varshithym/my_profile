function renderSkills() {
  const container = document.getElementById("skillsContainer");
  if (!container || typeof skillsData === "undefined") return;

  container.innerHTML = skillsData
    .map(
      (skill) => `
        <div class="skill-card">
          <h3>${skill.name}</h3>
          <p><strong>${skill.level}</strong></p>
          <p>${skill.description}</p>
        </div>
      `
    )
    .join("");
}

renderSkills();