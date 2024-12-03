const offscreenMenu = document.querySelector('.offscreen-menu');
const toggle = document.querySelector('.toggle');
const bsnsName = document.querySelector('.bsns-name');
const bsnsLogo = document.querySelector('.bsns-logo');
const showcaseContainer = document.querySelector('.showcase-container');




toggle.addEventListener('click', () => {
    toggle.classList.toggle('active-hamburger')
    offscreenMenu.classList.toggle('active-hamburger')
    bsnsName.classList.toggle('active-hamburger')
    bsnsLogo.classList.toggle('active-hamburger')
    showcaseContainer.classList.toggle('active-hamburger')
})

// Below funciton loops each element that has the class 'service-card' and toggles the class 'active-dn-toggle' whenever the dayNiteToggle is toggled.

// for(let i = 0; i < serviceCard.length; i++) {
//     dayNiteToggle.addEventListener('click', () => {
//         serviceCard[i].classList.toggle('active-dn-toggle')
//     })
// }
