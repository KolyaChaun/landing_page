document.addEventListener("DOMContentLoaded", function () {
    function revealOnScroll() {
        let courses = document.querySelectorAll(".course-item");
        let windowHeight = window.innerHeight;

        courses.forEach((course) => {
            let position = course.getBoundingClientRect().top;
            if (position < windowHeight - 100) {
                course.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Вызываем сразу для анимации на загрузке страницы
});



