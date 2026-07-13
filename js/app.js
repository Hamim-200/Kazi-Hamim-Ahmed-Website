 // Mobile menu toggle
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const sidebar = document.querySelector('.sidebar');
        mobileToggle.addEventListener('click', () => sidebar.classList.toggle('open'));

        // Active navigation highlighting on scroll
        const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');
        const sections = document.querySelectorAll('.content-section');

        function updateActiveLink() {
            let current = 'home';
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    current = section.getAttribute('id');
                }
            });
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('data-section') === current);
            });
        }

        window.addEventListener('scroll', updateActiveLink);
        navLinks.forEach(link => {
            link.addEventListener('click', () => sidebar.classList.remove('open'));
        });
        updateActiveLink();