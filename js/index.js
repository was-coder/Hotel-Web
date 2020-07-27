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

const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    getInputs();
});

function getInputs() {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    if (nameValue === "") {
        setFail(name, "Name cannot be blank");
    }
    else {
        setSuccess(name);
    }

    if (emailValue === "") {
        setFail(email, "Email cannot be blank");
    }
    else if (!emailCheck(emailValue)) {
        setFail(email, "Email is not valid");
    }
    else {
        setSuccess(email);
    }

    if (messageValue === "") {
        setFail(message, "Message cannot be blank");
    }
    else {
        setSuccess(message);
    }
}

function setFail(input, message) {
    const control = input.parentElement;
    const small = control.querySelector('small');

    small.innerText = message;
    control.className = "control fail";
}

function setSuccess(input) {
    const control = input.parentElement;
    control.className = "control success";
}

function emailCheck(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}