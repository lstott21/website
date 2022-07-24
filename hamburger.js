const hamburger = document.querySelector('.nav-toggle');
const navsub = document.querySelector('.mobile-menu');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open')
    navsub.classList.toggle('collapse')})

