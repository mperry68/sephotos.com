/**
 * Mobile Menu Toggle
 */

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    const headerActions = document.querySelector('.header-actions');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            const isActive = mainNav.classList.contains('active');
            
            if (isActive) {
                // Close menu
                mainNav.classList.remove('active');
                menuToggle.classList.remove('active');
                if (headerActions) {
                    headerActions.classList.remove('mobile-visible');
                }
            } else {
                // Open menu
                mainNav.classList.add('active');
                menuToggle.classList.add('active');
                if (headerActions) {
                    headerActions.classList.add('mobile-visible');
                }
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mainNav.classList.remove('active');
                menuToggle.classList.remove('active');
                if (headerActions) {
                    headerActions.classList.remove('mobile-visible');
                }
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = mainNav.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnToggle && mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                menuToggle.classList.remove('active');
                if (headerActions) {
                    headerActions.classList.remove('mobile-visible');
                }
            }
        });
    }
});

