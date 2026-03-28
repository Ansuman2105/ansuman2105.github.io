// LOADER
window.addEventListener('load', () => {
    document.querySelector('.loader').style.display = 'none';
});

// THEME TOGGLE
const toggle = document.querySelector('.theme-toggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');

    const icon = toggle.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');

    localStorage.setItem('theme',
        document.body.classList.contains('light-theme') ? 'light' : 'dark'
    );
});

// LOAD THEME
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-theme');
}

// TYPING EFFECT
const text = ["Program Manager", "IoT Specialist", "Automation Engineer"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
    if (i < text.length) {
        if (!isDeleting && j <= text[i].length) {
            current = text[i].substring(0, j++);
        } else if (isDeleting && j >= 0) {
            current = text[i].substring(0, j--);
        }

        document.querySelector('.typing').textContent = current;

        if (j === text[i].length) isDeleting = true;
        if (j === 0) {
            isDeleting = false;
            i = (i + 1) % text.length;
        }
    }
    setTimeout(type, 100);
}
type();

// SCROLL ANIMATION
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('fade-in');
    });
});
document.querySelectorAll('.project-card').forEach(el => observer.observe(el));

// CLICK ANALYTICS
document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('click', () => {
        console.log("Clicked:", el.innerText);
    });
});
