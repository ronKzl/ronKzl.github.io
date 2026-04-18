const roles = [
  {
    id: "shopify",
    title: "Software Engineer Intern",
    company: "Shopify",
    years: "Sept 2025 - Dec 2025",
    location: "Ottawa, CA",
    headline:
      "Hardened checkout resilience and optimized high-traffic payment pipelines.",
    bullets: [
      "Retained critical sales revenue and dropped cart abandonment by 30% by implementing a graceful error-handling flow.",
      "Resolved API contract violations between Shopify Payments and the Apple Pay SDK for UAE merchants.",
      "Simplified checkout codebase and ensured WCAG 2.1 compliance by consolidating React components.",
      "Utilized an existing Go edge service to implement a throttle fix, reducing redundant PayPal transaction token calls by 70% during Black Friday.",
    ],
    mediaLabel: "Checkout Telemetry",
    mediaBody:
      "Designed robust fallback pipelines to seamlessly route failed express transactions to standard checkout under heavy global load.",
  },
  {
    id: "jsi-telecom",
    title: "FullStack Engineer Intern",
    company: "JSI Telecom",
    years: "May 2024 - Dec 2024",
    location: "Ottawa, CA",
    headline:
      "Modernized enterprise UI architecture and extended core C++ network emulation.",
    bullets: [
      "Led a migration of a critical file management application from Angular 16 to 17 to improve long-term scalability.",
      "Extracted modular components into a shared Angular library, reducing enterprise code duplication by 35%.",
      "Extended a C++ network emulator to support ETSI protocols and built a Python interop layer via Ctypes.",
      "Achieved a 26% decrease in average bug resolution time by shipping tailored customer solutions.",
    ],
    mediaLabel: "System Architecture",
    mediaBody:
      "Bridged low-level C++ network protocols with Python automated testing layers to increase regression coverage by 60%.",
  },
  {
    id: "ross-video",
    title: "Software Engineer Intern",
    company: "Ross Video",
    years: "Jan 2024 - Apr 2024",
    location: "Ottawa, CA",
    headline:
      "Engineered stable C++ firmware utilities and resolved critical multi-threading defects.",
    bullets: [
      "Developed C++ packaging utilities, a CLI tool, and a checksum-verified protocol for secure CX hardware updates.",
      "Eliminated screen flickering on production control panels during live broadcasts by optimizing C display logic.",
      "Identified and resolved deadlocks and multi-threaded race conditions in production code using mutex synchronization.",
    ],
    mediaLabel: "Hardware Diagnostics",
    mediaBody:
      "Low-level synchronization and memory management to guarantee 100% patch integrity for remote broadcasting hardware.",
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
    // card.className = "exp-card" + (index === 0 ? " open" : "");
    card.className = "exp-card";
    card.innerHTML = `
      <div class="exp-card__header">
        <div>${role.title}<br><span>${role.company}</span></div>
        <div class="exp-card__toggle">&gt;</div>
      </div>
      <div class="exp-card__body">
        <p class="exp-card__summary">${role.headline}</p>
        <p>${role.mediaBody}</p>
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
