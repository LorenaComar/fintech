document.addEventListener('DOMContentLoaded', function() {

    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close'); 
    const body = document.querySelector('body');

    menuToggle.addEventListener('click', function() {
        body.classList.toggle('menu-open');
    });

    menuClose.addEventListener('click', function() {
        body.classList.remove('menu-open');
    });
});