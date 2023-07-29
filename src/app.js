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

