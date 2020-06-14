$('.carousel').carousel({
    interval : 200
});

const myBurger = document.querySelector('.burger');
const burger = document.querySelector('.burger__button');

let onMenu = false;

myBurger.addEventListener('click', toggleOn);

function toggleOn() {
    if (!onMenu) {
        burger.classList.add('on');
        onMenu = true;
    } else {
        burger.classList.remove('on');
        onMenu = false;
    }
}