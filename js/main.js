const contactForm = document.getElementById("contactForm");
const yearEl = document.getElementById("year");



if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    alert(
      "Message captured. In a real deployment this would hit your backend or an email service."
    );
  });
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

