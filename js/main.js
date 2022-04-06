// Menu responsive

const navToggle = document.querySelector('.btn-menu');
const navbarMenu = document.querySelector('.navbar-menu');

const menuHome = document.querySelector('.menu-home');
const menuAbout = document.querySelector('.menu-about');
const menuServices = document.querySelector('.menu-services');
const menuContact = document.querySelector('.menu-contact');

navToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('visible');
});

menuHome.addEventListener('click', () => {
    navbarMenu.classList.toggle('visible');
});

menuAbout.addEventListener('click', () => {
    navbarMenu.classList.toggle('visible');
});

menuServices.addEventListener('click', () => {
    navbarMenu.classList.toggle('visible');
});

menuContact.addEventListener('click', () => {
    navbarMenu.classList.toggle('visible');
});


// Functión scroll Reveal

ScrollReveal().reveal(".perfil-img", { delay: 100 });
ScrollReveal().reveal(".home-title", { delay: 300 });
ScrollReveal().reveal(".home-subtitle", { delay: 450 });
ScrollReveal().reveal(".about-description", { delay: 275 });
ScrollReveal().reveal(".skills-title", { delay: 450 });
ScrollReveal().reveal(".skills-container", { delay: 450 });
ScrollReveal().reveal(".services", { delay: 275 });
ScrollReveal().reveal(".portfolio", { delay: 275 });
ScrollReveal().reveal(".contact", { delay: 450 });
ScrollReveal().reveal(".footer", { delay: 275 });

