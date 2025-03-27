document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".swiper-container", {
        loop: true,
        centeredSlides: true,  // Центрирование активного слайда
        slidesPerView: 1,      // На мобильных устройствах отображаем только 1 слайд
        spaceBetween: 0,       // Убираем промежуток между слайдами
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".next-btn",
            prevEl: ".prev-btn"
        },
        breakpoints: {
            768: {
                slidesPerView: 1,   // 1 слайд на мобильных
                spaceBetween: 0,    // Без промежутков между слайдами
                centeredSlides: true // Центрируем слайд на мобильных
            },
            1024: {
                slidesPerView: 3,   // 3 слайда на экранах больше 1024px
                spaceBetween: 15,    // Промежуток между слайдами
            }
        }
    });
});
