document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".cta-button, .price-box button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Запись временно недоступна. Свяжитесь с нами!");
        });
    });
});
