document.getElementById("application-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();

    // Проверка, что поля не пустые
    if (name === "" || phone === "") {
        alert("Будь ласка, заповніть усі поля!");
        return;
    }

    // Проверка на правильность формата номера телефона
    const phonePattern = /^\+380[\s\(\)-]*\d{2}[\s\(\)-]*\d{3}[\s\-]*\d{2}[\s\-]*\d{2}$/;
    if (!phonePattern.test(phone)) {
        alert("Будь ласка, введіть правильний номер телефону в форматі +380 (__) ___-__-__");
        return;
    }

    // Если все верно, отправляем данные на сервер
    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);

    fetch("/submit_form", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("popup").style.display = "flex"
        document.getElementById("application-form").reset(); // Сбрасываем форму после отправки
    })
    .catch(error => alert("Виникла помилка. Спробуйте пізніше."));
});

document.getElementById("close-popup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none"; // Скрываем попап
});

// Устанавливаем начальное значение с кодом страны для номера телефона
window.addEventListener("load", () => {
    document.getElementById("phone").value = "+380 "; // Устанавливаем начальное значение для поля телефона
});

