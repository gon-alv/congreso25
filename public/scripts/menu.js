// public/scripts/menu.js

function initMobileMenuToggle() {
  const toggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (toggle && mobileMenu) {
    toggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }
}

// Ejecutar en carga inicial
document.addEventListener("DOMContentLoaded", initMobileMenuToggle);

// Volver a ejecutar si Astro recarga el HTML (usando navegación parcial)
document.addEventListener("astro:after-swap", initMobileMenuToggle);
