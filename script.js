
document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo');
    logo.style.transition = 'opacity 1s ease-in-out';
    logo.style.opacity = 0;
    setTimeout(() => {
        logo.style.opacity = 1;
    }, 500);
});