let lastScrollTop = 0;
const footer = document.querySelector('footer');

window.addEventListener('scroll', function() {
    if (window.innerWidth <= 768) {
        const st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
            footer.classList.remove('hide');
        } else {
            footer.classList.add('hide');
        }
        lastScrollTop = st <= 0 ? 0 : st;
    }
});
