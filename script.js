// Your projects. To add one, copy a block and change the details.
const projects = [
  {
    name: "Momo Smart LMS",
    description: "A learning management system for schools: courses, assignments with rubric grading, timed assessments, attendance and early-intervention alerts.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    category: "education",
    live: "https://momo-smart.vercel.app",
    code: "https://github.com/Reyel-boop/momo-smart",
  },
  {
    name: "ILAW Assist",
    description: "AI-written DepEd ILAW lesson plans.",
    tags: ["JavaScript", "AI"],
    category: "education",
    live: "https://reyel-boop.github.io/ilaw-assist-demo/",
    code: "https://github.com/Reyel-boop/ilaw-assist-demo",
  },
  {
    name: "BLESS PRAISE Awards Portal",
    description: "The awards portal for San Vicente NHS's BLESS PRAISE program.",
    tags: ["JavaScript"],
    category: "education",
    live: "https://reyel-boop.github.io/bless-praise-portal/",
    code: "https://github.com/Reyel-boop/bless-praise-portal",
  },
  {
    name: "CampusShield Pro",
    description: "Landing page for CampusShield Pro.",
    tags: ["HTML", "CSS"],
    category: "education",
    live: "https://reyel-boop.github.io/campusshieldprolandingpage/",
    code: "https://github.com/Reyel-boop/campusshieldprolandingpage",
  },
  {
    name: "Valiant Cashbook",
    description: "A 5-day online trial of the Valiant Cashbook.",
    tags: ["HTML"],
    category: "business",
    live: "https://reyel-boop.github.io/valiant-cashbook-trial/",
    code: "https://github.com/Reyel-boop/valiant-cashbook-trial",
  },
  {
    name: "Zoho Guide",
    description: "A step-by-step guide to using Zoho.",
    tags: ["HTML"],
    category: "business",
    live: "https://reyel-boop.github.io/ZOHOGuide/",
    code: "https://github.com/Reyel-boop/ZOHOGuide",
  },
];

const grid = document.getElementById("project-grid");

function renderProjects(filter) {
  const shown = projects.filter((p) => filter === "all" || p.category === filter);
  grid.innerHTML = shown
    .map(
      (p) => `
      <article class="card">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <div class="tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
        <div class="links">
          <a href="${p.live}" target="_blank" rel="noopener">Live site ↗</a>
          <a href="${p.code}" target="_blank" rel="noopener">Code</a>
        </div>
      </article>`
    )
    .join("");
}

document.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    document.querySelector(".chip.active").classList.remove("active");
    chip.classList.add("active");
    renderProjects(chip.dataset.filter);
  });
});

// Light/dark theme, remembered between visits
const root = document.documentElement;
const saved = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
root.dataset.theme = saved || (prefersDark ? "dark" : "light");

document.getElementById("theme-toggle").addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", root.dataset.theme);
});

document.getElementById("year").textContent = new Date().getFullYear();
renderProjects("all");
