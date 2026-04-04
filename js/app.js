   // Theme toggle
    // const themeToggle = document.getElementById('theme-toggle'); themeToggle.addEventListener('click', () => { const currentTheme = document.documentElement.getAttribute('data-theme') || ''; document.documentElement.setAttribute('data-theme', currentTheme === 'dark' ? '' : 'dark'); });
    // Mobile menu toggle 
    const mobileToggle = document.querySelector('.mobile-menu-toggle'); mobileToggle.addEventListener('click', () => { document.querySelector('.sidebar').classList.toggle('open'); });
    // Active navigation highlighting 
    const navLinks = document.querySelectorAll('.sidebar-nav .nav-link'); const sections = document.querySelectorAll('.content-section'); function updateActiveLink() { let current = 'home'; sections.forEach(section => { const rect = section.getBoundingClientRect(); if (rect.top <= 100 && rect.bottom >= 100) { current = section.getAttribute('id'); } }); navLinks.forEach(link => { link.classList.remove('active'); if (link.getAttribute('data-section') === current) { link.classList.add('active'); } }); }
    // Update on scroll
    window.addEventListener('scroll', updateActiveLink);
    // Update on nav click 
    navLinks.forEach(link => { link.addEventListener('click', () => { navLinks.forEach(l => l.classList.remove('active')); link.classList.add('active'); }); });
    // Initial check 
    updateActiveLink(); 