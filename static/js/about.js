// Функция для проверки, что элемент находится в видимой части экрана
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Функция для добавления класса visible, если элемент в пределах экрана
function handleScroll() {
    const items = document.querySelectorAll('.cta-item'); // Все элементы с классом .cta-item
    items.forEach(item => {
        if (isElementInViewport(item)) {
            item.classList.add('visible'); // Добавляем класс visible, если элемент в пределах экрана
        }
    });
}

// Запускаем обработчик при прокрутке страницы
window.addEventListener('scroll', handleScroll);

// Также проверим на старте, если элементы уже видны (например, если они вверху страницы)
handleScroll();
