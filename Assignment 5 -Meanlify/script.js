document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-toggle');
    const darkModeIcon = document.querySelector('.dark-mode');
    const lightModeIcon = document.querySelector('.light-mode');
    const body = document.body;

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        darkModeIcon.classList.add('hidden');
        lightModeIcon.classList.remove('hidden');
    } else {
        body.setAttribute('data-theme', 'light');
    }

    themeToggle.addEventListener('click', () => {
        if (body.getAttribute('data-theme') === 'light') {
            body.setAttribute('data-theme', 'dark');
            darkModeIcon.classList.add('hidden');
            lightModeIcon.classList.remove('hidden');
            localStorage.setItem('theme', 'dark');
        } else {
            body.setAttribute('data-theme', 'light');
            darkModeIcon.classList.remove('hidden');
            lightModeIcon.classList.add('hidden');
            localStorage.setItem('theme', 'light');
        }
    });
});