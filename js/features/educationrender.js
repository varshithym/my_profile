function renderEducation() {
  const container = document.getElementById("educationContainer");
  if (!container || typeof educationData === "undefined") return;

  container.innerHTML = educationData
    .map(
      (edu) => `
        <div class="edu-card">
          <h3>${edu.title}</h3>
          <p><strong>${edu.institution}</strong></p>
          <p>${edu.duration}</p>
          <p>${edu.description}</p>
        </div>
      `
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", renderEducation);