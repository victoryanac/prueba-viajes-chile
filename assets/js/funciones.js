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
/* SECCION CONTACTO */
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$("#enviarCorreo").click(
    function () {
        alert("Tu mensaje fue enviado correctamente...");
    }
)
/*  smooth scroll*/
$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            var navbarOffset = $('.navbar').outerHeight();
            $('html, body').animate({
                scrollTop: $(hash).offset().top - navbarOffset
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});
