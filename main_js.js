
// JS start bot
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth Scroll Reveal Animation
document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });
});

// Accordion Toggle Logic
function toggleAccordion(id) {
    const content = document.getElementById(id);
    const icon = document.getElementById('icon-' + id);

    if (content.style.maxHeight && content.style.maxHeight !== '0px') {
        content.style.maxHeight = '0px';
        icon.classList.remove('rotate-45');
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.classList.add('rotate-45');
    }
}

// Show More / Less Experiences Logic
function toggleMoreExperiences() {
    const container = document.getElementById('more-experiences');
    const icon = document.getElementById('toggle-exp-icon');
    const text = document.getElementById('toggle-exp-text');

    if (container.style.display === 'none') {
        container.style.display = 'block';
        icon.classList.add('rotate-180');
        text.textContent = 'Show less';
    } else {
        container.style.display = 'none';
        icon.classList.remove('rotate-180');
        text.textContent = 'Show all experiences';
    }
}

// Theme Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const darkIcon = document.getElementById('theme-toggle-dark-icon');
const lightIcon = document.getElementById('theme-toggle-light-icon');

if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    darkIcon.classList.remove('hidden');
} else {
    document.documentElement.classList.remove('dark');
    lightIcon.classList.remove('hidden');
}

themeToggleBtn.addEventListener('click', function () {
    darkIcon.classList.toggle('hidden');
    lightIcon.classList.toggle('hidden');

    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
    }
});
// JS end