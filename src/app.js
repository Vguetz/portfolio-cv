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
    const headerDistance = window.scrollY > 175;
    const body = document.querySelector('body');
    if (screen.width < 768) {
        if (headerDistance) {
            header.classList.add('fixed');
            header.classList.add('w-[100%]');
            header.classList.add('left-0');
            header.classList.add('top-0');
            header.classList.add('overflow-hidden');
            header.classList.add('z-10');
            body.classList.add('pt-[175px]');
        } else {
            header.classList.remove('fixed');
            header.classList.remove('w-[100%]');
            header.classList.remove('left-0');
            header.classList.remove('top-0');
            header.classList.remove('overflow-hidden');
            header.classList.remove('z-10');
            body.classList.remove('pt-[175px]');

        }
    } else {
        header.classList.remove('fixed');
        header.classList.remove('w-[100%]');
        header.classList.remove('left-0');
        header.classList.remove('top-0');
        header.classList.remove('overflow-hidden');
        body.classList.remove('pt-[175px]');
        body.classList.remove('z-10');
    }
    });


const botonDarkMode = document.querySelector('.dark-mode-boton');
botonDarkMode.addEventListener('click', function () {
    document.body.classList.toggle('dark');
});




