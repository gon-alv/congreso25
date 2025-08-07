// Mobile Menu Toggle Functionality
    document.addEventListener('DOMContentLoaded', function() {
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
    });