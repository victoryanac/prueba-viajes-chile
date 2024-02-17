
/* navbar */
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            document.getElementById('mainNav').classList.add('navbar-scrolled');
        } else {
            document.getElementById('mainNav').classList.remove('navbar-scrolled');
        }
    });
});

