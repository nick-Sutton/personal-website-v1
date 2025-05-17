document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link[data-section], .navbar-brand');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.getAttribute('data-section') || 'home';
            
            // Update active nav link
            document.querySelectorAll('.nav-link.active').forEach(activeLink => {
                activeLink.classList.remove('active');
            });
            this.classList.add('active');
            
            // Hide all content sections
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Show the target section
            const targetElement = document.getElementById(`${targetSection}-section`);
            if (targetElement) {
                targetElement.classList.add('active');
            }
            
            // Update URL
            history.pushState(null, null, `#${targetSection}`);
        });
    });
    
    // Initialize first section based on URL hash or default to 'about'
    const initialHash = window.location.hash.substring(1);
    const initialSection = initialHash || 'about';
    const initialLink = document.querySelector(`[data-section="${initialSection}"]`);
    const initialSectionElement = document.getElementById(`${initialSection}-section`);
    
    if (initialLink) {
        initialLink.classList.add('active');
    }
    if (initialSectionElement) {
        initialSectionElement.classList.add('active');
    }
});
