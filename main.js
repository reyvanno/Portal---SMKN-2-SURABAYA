let lastScrollTop = 0;
const footer = document.querySelector('footer');

window.addEventListener('scroll', function() {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        footer.style.transform = 'translateY(0)';
        footer.style.transition = 'transform 0.3s ease';
    } else {
        footer.style.transform = 'translateY(100%)';
        footer.style.transition = 'transform 0.3s ease';
    }
    lastScrollTop = st <= 0 ? 0 : st;
});
