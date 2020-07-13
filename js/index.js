/*Start of JS for button toggling*/
const collapseBtn = document.querySelector('.collapse-btn');
const hamburger = document.querySelector('.collapse-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');

let showMenu = false;

collapseBtn.addEventListener('click', toggleMenu);

function toggleMenu () {
    if (!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));
        showMenu = true;
    }
    else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));
        showMenu = false;
    }
};
/*End of JS for button toggling*/

