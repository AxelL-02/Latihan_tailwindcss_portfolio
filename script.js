const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    nav.classList.toggle('hidden');
});

// navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header');

    if (window.pageYOffset > 5) {
        header.classList.add('navbar-fixed');
        header.classList.remove('absolute');
    } else {
        header.classList.remove('navbar-fixed');
        header.classList.add('absolute');
    }
}