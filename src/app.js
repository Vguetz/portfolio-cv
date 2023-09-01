// Add event listener when the component is loaded
window.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const mainSection = document.querySelector('main');

    // Function to check if the sidebar should be hidden
    const handleScroll = () => {
        const shouldHideSidebar = window.scrollY > 700;
        sidebar.classList.toggle('translate-x-[-100%]', shouldHideSidebar);
        sidebar.classList.add('transition-transform', shouldHideSidebar);
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);
});

//scroll header change



window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const headerDistance = window.scrollY > -1;
    const body = document.querySelector('body');

        if (headerDistance) {
            header.classList.add('fixed');
            header.classList.add('w-[100%]');
            header.classList.add('left-0');
            header.classList.add('top-0');
            header.classList.add('z-10');
            body.classList.add('tablet:pt-[103.28px]');
            body.classList.add('pt-[67.28px]');
        } else {
            header.classList.remove('fixed');
            header.classList.remove('w-[100%]');
            header.classList.remove('left-0');
            header.classList.remove('top-0');
            header.classList.remove('z-10');
            body.classList.remove('pt-[175px]');

        }
    });


const botonDarkMode = document.querySelector('.dark-mode-boton');
botonDarkMode.addEventListener('click', function () {
    document.body.classList.toggle('dark');
});


//scroll header change

// JavaScript
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('nav');

    // Function to toggle the menu visibility
    function toggleMenu() {
        menu.classList.toggle('hidden');
    }

    // Add click event listener to the hamburger icon
    hamburger.addEventListener('click', toggleMenu);
});

// Element
var darkmodeBtn = document.document.querySelector("dark-mode-boton");
var btnIcon = document.getElementById("btn-icon");
var bgMask = document.getElementById("bg-mask");
var mainBg = document.getElementById("main");

// Element Content
var darkColor = "#0e0e0e";
var lightColor = "#fff";

var bgDark = "#191919";
var bgLight = "#f2f2f2";

// Status
var status = 0; // 0 = Light mode, 1 = Dark mode
var duration = 400;

function switchMode() {

    if (status == 0) {

        bgMask.style.backgroundColor = darkColor;
        setTimeout(function () {
            mainBg.style.backgroundColor = darkColor;
        }, duration);
        btnIcon.setAttribute("class", "fas fa-moon fa-2x");
        btnIcon.style.color = lightColor;
        darkmodeBtn.style.backgroundColor = bgDark;

        status = 1;

    } else if (status == 1) {

        bgMask.style.backgroundColor = lightColor;
        setTimeout(function () {
            mainBg.style.backgroundColor = lightColor;
        }, duration);
        btnIcon.setAttribute("class", "fas fa-sun fa-2x");
        btnIcon.style.color = darkColor;
        darkmodeBtn.style.backgroundColor = bgLight;

        status = 0;

    }

    restartAnimation();

}

function restartAnimation() {

    bgMask.classList.remove("animation");
    void bgMask.offsetWidth;
    bgMask.classList.add("animation");

}
