function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    const items = document.querySelectorAll('.cta-item');
    items.forEach(item => {
        if (isElementInViewport(item)) {
            item.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);

handleScroll();
