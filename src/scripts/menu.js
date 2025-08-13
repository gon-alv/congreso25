function initMobileMenuToggle() {
  const toggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!toggle || !mobileMenu) return;

  toggle.onclick = () => {
  mobileMenu.classList.toggle("hidden");
});


  // Cerrar menú al hacer click en cualquier enlace
  mobileMenu.querySelectorAll("a").forEach(link => {
    link.onclick = () => {
      mobileMenu.classList.add("hidden");
    };  
  });
}

// Ejecutar en primera carga
document.addEventListener("DOMContentLoaded", initMobileMenuToggle);

// Ejecutar en cada transición de página de Astro
document.addEventListener("astro:after-swap", initMobileMenuToggle);
