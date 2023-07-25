// Add event listener when the component is loaded
window.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const mainSection = document.querySelector('main');
    const mainSectionBottom = mainSection.offsetTop + mainSection.offsetHeight;

    // Function to check if the sidebar should be hidden
    const handleScroll = () => {
        if (window.scrollY > mainSectionBottom) {
            sidebar.classList.add('translate-x-[-100%]');
            sidebar.classList.add('transition-transform');
        } else {
            sidebar.classList.remove('translate-x-[-100%]');
        }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);
});