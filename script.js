// =========================
// MENU MOBILE
// =========================

const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Fecha o menu depois que a pessoa clica em um link
const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});


// =========================
// ANO AUTOMÁTICO
// =========================

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}


// =========================
// ANIMAÇÃO DOS CARDS
// =========================

const cards = document.querySelectorAll(
  ".food-card, .combo-card, .about-highlight"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }

    });
  },
  {
    threshold: 0.15
  }
);

cards.forEach((card) => {
  card.classList.add("hidden");
  observer.observe(card);
});
