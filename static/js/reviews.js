document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".swiper-container", {
        loop: true,
        centeredSlides: true,  // Центрирование активного слайда
        slidesPerView: 3,      // Отображаем 3 слайда
        spaceBetween: 15,      // Промежуток между слайдами
        pagination: {
            el: ".swiper-pagination",  // Активируем пагинацию
            clickable: true            // Точки будут кликабельны
        },
        navigation: {
            nextEl: ".next-btn",
            prevEl: ".prev-btn"
        },
        breakpoints: {
            768: {
                slidesPerView: 2,      // Для мобильных устройств будет отображаться 2 слайда
            },
            1024: {
                slidesPerView: 3,      // Для больших экранов 3 слайда
            }
        }
    });
});

