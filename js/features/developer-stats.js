const statsData = [
  {
    value: "3+",
    label: "Projects"
  },
  {
    value: "8.6",
    label: "CGPA"
  },
  {
    value: "8",
    label: "Skills"
  },
  {
    value: "2026",
    label: "Graduation"
  }
];

function renderStats() {
  const container = document.getElementById("statsContainer");
  if (!container) return;

  container.innerHTML = statsData
    .map(
      (stat) => `
        <div class="stat-card">
          <h3>${stat.value}</h3>
          <p>${stat.label}</p>
        </div>
      `
    )
    .join("");
}

renderStats();