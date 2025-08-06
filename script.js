// script.js

document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Functionality ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIconOpen = document.getElementById('menu-icon-open');
    const menuIconClose = document.getElementById('menu-icon-close');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('mobile-menu-transform');
        menuIconOpen.classList.toggle('hidden');
        menuIconClose.classList.toggle('hidden');
        // Prevent body scroll when menu is open
        document.body.style.overflow = mobileMenu.classList.contains('mobile-menu-transform') ? '' : 'hidden';
    };

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', toggleMenu);
    }

    // Close menu when a link is clicked
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });


    // --- Sticky Header Functionality ---
    const header = document.getElementById('main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }


    // --- On-Scroll Animation Functionality ---
    // Use Intersection Observer for better performance
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: stop observing the element once it's visible
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

});
document.addEventListener('DOMContentLoaded', () => {

    /**
     * Intersection Observer for on-scroll animations.
     * This function detects when an element enters the viewport and adds a 'is-visible'
     * class to trigger a CSS animation. It's more performant than scroll event listeners.
     */
    const animatedElements = document.querySelectorAll('[data-animation]');

    // Create a new observer with a callback function
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is intersecting (visible)
            if (entry.isIntersecting) {
                // Add the 'is-visible' class to trigger the animation
                entry.target.classList.add('is-visible');
                
                // Stop observing the element after the animation has been triggered once
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when at least 10% of the element is visible
    });

    // Observe each element with the 'data-animation' attribute
    animatedElements.forEach(element => {
        observer.observe(element);
    });

});
