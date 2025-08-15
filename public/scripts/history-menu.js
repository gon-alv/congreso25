// Mobile Menu Toggle Functionality + Navigation Arrows
document.addEventListener('DOMContentLoaded', function() {
    // === HAMBURGER MENU FUNCTIONALITY ===
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    let isMenuOpen = false;
    
    function toggleMobileMenu() {
        isMenuOpen = !isMenuOpen;
       
        if (isMenuOpen) {
            mobileMenu.classList.add('mobile-menu-open');
            mobileMenuButton.classList.add('hamburger-open');
            mobileMenuButton.setAttribute('aria-expanded', 'true');
            // Prevent body scroll when menu is open
            document.body.style.overflow = 'hidden';
        } else {
            mobileMenu.classList.remove('mobile-menu-open');
            mobileMenuButton.classList.remove('hamburger-open');
            mobileMenuButton.setAttribute('aria-expanded', 'false');
            // Restore body scroll
            document.body.style.overflow = '';
        }
    }
    
    // Toggle menu on button click
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', toggleMobileMenu);
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (isMenuOpen &&
                !mobileMenu.contains(event.target) &&
                !mobileMenuButton.contains(event.target)) {
                toggleMobileMenu();
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && isMenuOpen) {
                toggleMobileMenu();
            }
        });
        
        // Close menu when clicking on a link (for mobile navigation)
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (isMenuOpen) {
                    toggleMobileMenu();
                }
            });
        });
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768 && isMenuOpen) {
            toggleMobileMenu(); // Close mobile menu on desktop
        }
    });

    // === NAVIGATION ARROWS FUNCTIONALITY ===
    // Datos de navegación
    const navItems = [
        { name: 'ULagos', path: '/historia/' },
        { name: 'Campus Osorno', path: '/historia/campus-osorno' },
        { name: 'Campus Pto. Montt', path: '/historia/campus-chinquihue' },
        { name: 'Sede Chiloé', path: '/historia/sede-chiloe' },
        { name: 'Sede Santiago', path: '/historia/sede-santiago' },
        { name: 'Congresos', path: '/historia/congresos' }
    ];

    // Estado inicial para navegación por flechas
    let currentIndex = 0;
    
    // Detectar página actual
    const currentPath = window.location.pathname;
    const foundIndex = navItems.findIndex(item => item.path === currentPath);
    if (foundIndex !== -1) {
        currentIndex = foundIndex;
    }

    // Elementos del DOM para navegación por flechas
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const currentText = document.getElementById('currentText');
    const currentLink = document.getElementById('currentLink');
    const indicators = document.querySelectorAll('.indicator');

    // Función para actualizar la interfaz de navegación por flechas
    function updateUI() {
        const currentItem = navItems[currentIndex];
        
        // Actualizar texto y enlace
        if (currentText) currentText.textContent = currentItem.name;
        if (currentLink) currentLink.href = currentItem.path;
        
        // Actualizar indicadores
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    // Navegación anterior
    function goToPrevious() {
        currentIndex = currentIndex === 0 ? navItems.length - 1 : currentIndex - 1;
        updateUI();
    }

    // Navegación siguiente
    function goToNext() {
        currentIndex = currentIndex === navItems.length - 1 ? 0 : currentIndex + 1;
        updateUI();
    }

    // Event listeners para navegación por flechas
    if (prevBtn) {
        prevBtn.addEventListener('click', goToPrevious);
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', goToNext);
    }

    // Event listeners para indicadores
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateUI();
        });
    });

    // Soporte para navegación con teclado (flechas) - solo si no hay menú abierto
    document.addEventListener('keydown', function(event) {
        // Navegación con flechas solo si el menú hamburguesa no está abierto
        if (!isMenuOpen) {
            if (event.key === 'ArrowLeft') {
                event.preventDefault();
                goToPrevious();
            } else if (event.key === 'ArrowRight') {
                event.preventDefault();
                goToNext();
            }
        }
    });

    // Inicializar UI de navegación por flechas
    if (currentText || currentLink || indicators.length > 0) {
        updateUI();
    }
});