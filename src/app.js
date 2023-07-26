// Add event listener when the component is loaded
window.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const mainSection = document.querySelector('main');
    const aboutMeSection = document.getElementById('about');

    // Function to check if the sidebar should be hidden
    const handleScroll = () => {
        if (window.scrollY > mainSection.offsetTop + mainSection.offsetHeight) {
            sidebar.classList.add('translate-x-[-100%]');
            sidebar.classList.add('transition-transform');
        } else {
            sidebar.classList.remove('translate-x-[-100%]');
        }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Function to check if the bottom of the sidebar touches the top of the "About Me" section
    const handleAboutMeSectionIntersection = (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && entry.boundingClientRect.bottom >= 0) {
            sidebar.classList.add('translate-x-[-100%]');
        }
    };

    // Add the Intersection Observer to watch the "About Me" section
    const aboutMeObserver = new IntersectionObserver(handleAboutMeSectionIntersection, {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0,
    });

    aboutMeObserver.observe(aboutMeSection);
});