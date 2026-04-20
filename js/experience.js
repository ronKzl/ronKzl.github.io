const roles = [
  {
    id: "shopify",
    logo: "imgs/shopify.png",
    title: "Software Engineer Intern",
    company: "Shopify",
    years: "Sept 2025 - Dec 2025",
    location: "Ottawa, CA",
    headline:
      "Supported Checkout platform processing 500M+ daily transactions across Ruby/Rails, GraphQL, and TypeScript.",
    hook: "Shopped online last Black Friday? You likely passed through the checkout pipelines I optimized.",
    bullets: [
      "Retained critical sales revenue and dropped cart abandonment by 30% by implementing a graceful error-handling flow.",
      "Resolved API contract violations between Shopify Payments and the Apple Pay SDK for UAE merchants.",
      "Simplified frontend checkout codebase and ensured WCAG compliance by consolidating React components.",
      "Collaborated with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders.",
    ],
  },
  {
    id: "jsi-telecom",
    logo: "imgs/jsi.png",
    title: "FullStack Engineer Intern",
    company: "JSI Telecom",
    years: "May 2024 - Dec 2024",
    location: "Ottawa, CA",
    headline:
      "Modernized enterprise UI architecture and crafted custom visualization solutions for customers around the globe.",

    bullets: [
      "Led a migration of a critical file management application from Angular 16 to 17 to improve long-term scalability.",
      "Extracted modular components into a shared Angular library, reducing enterprise code duplication by 35%.",
      "Extended a C++ network emulator to support ETSI protocols and built a Python interop layer via Ctypes.",
      "Worked alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements.",
    ],
  },
  {
    id: "ross-video",
    logo: "imgs/ross.png",
    title: "Software Engineer Intern",
    company: "Ross Video",
    years: "Jan 2024 - Apr 2024",
    location: "Ottawa, CA",
    headline:
      "Worked on the CX Panel product launch while maintaing support of Caprica, the world's largest live broadcasting server.",

    bullets: [
      "Proposed and implemented scalable solutions to issues identified with devices and applications responsible for communicating with the broadcasting panels.",
      "Developed C++ packaging utilities, a CLI tool, and a checksum-verified protocol for secure CX panel hardware updates.",
      "Eliminated screen flickering on production control panels during live broadcasts by optimizing C display logic.",
      "Identified and resolved deadlocks and multi-threaded race conditions in production code using mutex synchronization.",
    ],
  },
  {
    id: "kinaxis",
    logo: "imgs/kinaxis-red.png",
    title: "Software Engineer Intern",
    company: "Kinaxis",
    years: "May 2023 - Sept 2023",
    location: "Ottawa, CA",
    headline:
      "Collaborated with QA to supercharge their daily workflow and reduce reproduction time for RapidResponse issues.",

    bullets: [
      "Optimized internal debugging workflows by engineering a C++ state serialization utility using the Boost library.",
      "Improved internal data retrieval workflows for QA, reducing time spent investigating large-scale customer issues.",
      "Performed quality assurance tests for RapidResponse to ensure cross-device compatibility.",
    ],
  },
];

const experienceCardsEl = document.getElementById("experienceCards");

function renderExperienceCards() {
  if (!experienceCardsEl) {
    return;
  }

  experienceCardsEl.innerHTML = "";
  roles.forEach((role, index) => {
    const card = document.createElement("div");
    card.className = "exp-card";
    card.innerHTML = `
      <div class="exp-card__header">
        <div class="exp-card__header-top">
          <div class="exp-card__title-group">
            <img src="${role.logo}" alt="${role.company} Logo" class="exp-card__logo" />
            <div>${role.title}<br><span>${role.company}</span></div>
          </div>
          <div class="exp-card__toggle">&gt;</div>
        </div>
        ${role.hook ? `<div class="exp-card__hook">${role.hook}</div>` : ""}
      </div>

      <div class="exp-card__body">
        <p class="exp-card__summary">${role.headline}</p>
        <ul class="role-detail__bullets">
          ${role.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
        </ul>
        <p class="role-detail__meta">${role.years} · ${role.location}</p>
      </div>
    `;

    const header = card.querySelector(".exp-card__header");
    const body = card.querySelector(".exp-card__body");

    function updateHeight() {
      body.style.maxHeight = card.classList.contains("open")
        ? `${body.scrollHeight}px`
        : "0px";
    }

    header.addEventListener("click", () => {
      const openCard = experienceCardsEl.querySelector(".exp-card.open");
      if (openCard && openCard !== card) {
        openCard.classList.remove("open");
        openCard.querySelector(".exp-card__body").style.maxHeight = "0px";
      }

      card.classList.toggle("open");
      updateHeight();
    });

    experienceCardsEl.appendChild(card);
    requestAnimationFrame(updateHeight);
  });
}

renderExperienceCards();
