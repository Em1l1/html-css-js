const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav-links');


navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
})