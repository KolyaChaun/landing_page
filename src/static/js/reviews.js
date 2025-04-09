document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".swiper-container", {
        loop: true,
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 0,
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
                slidesPerView: 1,
                spaceBetween: 0,
                centeredSlides: true
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 15,
            }
        }
    });
});
