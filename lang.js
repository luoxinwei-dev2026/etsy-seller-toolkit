let isDarkMode = localStorage.getItem('darkMode') === 'true';

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    localStorage.setItem('darkMode', isDarkMode);
    document.body.classList.toggle('dark-mode', isDarkMode);
}

function toggleMobileMenu() {
    document.getElementById('mobileMenu').classList.toggle('active');
}

window.onload = function() {
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
};
