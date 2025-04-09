document.getElementById("application-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (name === "" || phone === "") {
        alert("Будь ласка, заповніть усі поля!");
        return;
    }

    const phonePattern = /^\+380[\s\(\)-]*\d{2}[\s\(\)-]*\d{3}[\s\-]*\d{2}[\s\-]*\d{2}$/;
    if (!phonePattern.test(phone)) {
        alert("Будь ласка, введіть правильний номер телефону в форматі +380 (__) ___-__-__");
        return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);

    fetch("/consultation_form", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("popup").style.display = "flex"
        document.getElementById("application-form").reset();
    })
    .catch(error => alert("Виникла помилка. Спробуйте пізніше."));
});

document.getElementById("close-popup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
});

window.addEventListener("load", () => {
    document.getElementById("phone").value = "+380 ";
});
