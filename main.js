let lastScroll = 0;
const footer = document.querySelector('footer');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll) {
        footer.classList.add('hide');
    } else {
        footer.classList.remove('hide');
    }
    lastScroll = currentScroll;
});
