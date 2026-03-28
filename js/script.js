// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// Theme toggle
const toggle = document.querySelector('.theme-toggle');

toggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});
