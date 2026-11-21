
// ==========================================
// 1. NAVIGATION MOBILE
// ==========================================

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuToggle?.addEventListener("click", () => {
  const isOpen =
    menuToggle.getAttribute("aria-expanded") === "true";

  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  mainNav.classList.toggle("open", !isOpen);
});

// Fermer le menu après avoir cliqué sur un lien
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});


// ==========================================
// 2. ANIMATIONS AU DÉFILEMENT
// ==========================================

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

// Observer tous les éléments ayant la classe reveal
document.querySelectorAll(".reveal").forEach(element => {
  revealObserver.observe(element);
});


// ==========================================
// 3. FILTRAGE DES RÉALISATIONS
// ==========================================

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    const selectedFilter = button.dataset.filter;

    // Actualiser le bouton actif
    filterButtons.forEach(item => {
      item.classList.toggle("active", item === button);
    });

    // Afficher ou masquer les projets
    projectCards.forEach(card => {

      const shouldShow =
        selectedFilter === "all" ||
        card.dataset.category === selectedFilter;

      card.classList.toggle("is-hidden", !shouldShow);

    });

  });

});


// ==========================================
// 4. ANNÉE AUTOMATIQUE DU FOOTER
// ==========================================

const yearElement = document.querySelector("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// ==========================================
// 5. NAVIGATION ACTIVE SELON LA SECTION
// ==========================================

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const sectionObserver = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        navLinks.forEach(link => {

          const isActive =
            link.getAttribute("href") === `#${entry.target.id}`;

          link.classList.toggle("active", isActive);

        });

      }

    });

  },
  {
    rootMargin: "-35% 0px -55% 0px"
  }
);

// Observer les différentes sections
sections.forEach(section => {
  sectionObserver.observe(section);
});

