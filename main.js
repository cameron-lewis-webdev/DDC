const offscreenMenu = document.querySelector('.offscreen-menu');
const toggle = document.querySelector('.toggle');
const bsnsName = document.querySelector('.bsns-name');
const bsnsLogo = document.querySelector('.bsns-logo');
const showcaseContainer = document.querySelector('.showcase-container');
const dayNiteToggle = document.querySelector('.day-nite-toggle');
const navMenu = document.querySelector('.nav-menu');
const header = document.querySelector('header');
const hero = document.querySelector('.hero');
const heroImg = document.querySelector('.hero-img');
const services = document.querySelector('.services');
const serviceCard = document.querySelectorAll('.service-card');
const gallery = document.querySelector('.gallery');
const ordering = document.querySelector('.ordering');
const contact = document.querySelector('.contact');
const faq = document.querySelector('.faq');
const footer = document.querySelector('footer');



toggle.addEventListener('click', () => {
    toggle.classList.toggle('active-hamburger')
    offscreenMenu.classList.toggle('active-hamburger')
    bsnsName.classList.toggle('active-hamburger')
    bsnsLogo.classList.toggle('active-hamburger')
    showcaseContainer.classList.toggle('active-hamburger')
})

dayNiteToggle.addEventListener('click', () => {
    dayNiteToggle.classList.toggle('active-dn-toggle')
    header.classList.toggle('active-dn-toggle')
    bsnsName.classList.toggle('active-dn-toggle')
    toggle.classList.toggle('active-dn-toggle')
    hero.classList.toggle('active-dn-toggle')
    heroImg.classList.toggle('active-dn-toggle')
    services.classList.toggle('active-dn-toggle')
    gallery.classList.toggle('active-dn-toggle')
    ordering.classList.toggle('active-dn-toggle')
    contact.classList.toggle('active-dn-toggle')
    faq.classList.toggle('active-dn-toggle')
    footer.classList.toggle('active-dn-toggle')
    navMenu.classList.toggle('active-dn-toggle')
})

// Below funciton loops each element that has the class 'service-card' and toggles the class 'active-dn-toggle' whenever the dayNiteToggle is toggled.

for(let i = 0; i < serviceCard.length; i++) {
    dayNiteToggle.addEventListener('click', () => {
        serviceCard[i].classList.toggle('active-dn-toggle')
    })
}