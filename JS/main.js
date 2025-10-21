document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('header nav ul');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('show');
            document.body.classList.toggle('menu-open');
        });
    }

    // --- Accordion for Home Page (Summary View) ---
    const summaryToggles = document.querySelectorAll('.summary-view .toggle');

    summaryToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const expertiseArea = toggle.parentElement;

            // Check if the clicked item is already active
            const isAlreadyActive = expertiseArea.classList.contains('active');

            // Close all other active items
            document.querySelectorAll('.summary-view .expertise-area.active').forEach(activeArea => {
                activeArea.classList.remove('active');
            });

            // If the clicked item was not already active, open it
            if (!isAlreadyActive) {
                expertiseArea.classList.add('active');
            }
        });
    });


    // --- Back to Top Button ---
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });

        backToTopButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // --- Intersection Observer for Animations on Scroll ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1
    });

    const animatedElements = document.querySelectorAll('.service-card, .value-card, #vision, #mission, #partners figure, .field-card, .contact-container, #services li');
    animatedElements.forEach(el => observer.observe(el));

});