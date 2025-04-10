window.addEventListener("DOMContentLoaded", () => {
    const phoneField = document.getElementById("phone");
    if (phoneField) {
        phoneField.value = "+380";
    }
    const form = document.getElementById('application-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const nameInput = document.getElementById('name');
            const phoneInput = document.getElementById('phone');
            const nameError = document.getElementById('name-error');
            const phoneError = document.getElementById('phone-error');

            const name = nameInput.value.trim();
            const phone = phoneInput.value.trim();
            const phoneRegex = /^(?:\+380\d{9}|0\d{9})$/;

            let isValid = true;

            nameError.textContent = '';
            phoneError.textContent = '';
            nameInput.classList.remove('invalid');
            phoneInput.classList.remove('invalid');

            if (name.length < 3) {
                nameError.textContent = "Ім'я має містити щонайменше 3 літери.";
                nameInput.classList.add('invalid');
                isValid = false;
            }

            if (!phoneRegex.test(phone)) {
                phoneError.textContent = "Номер має бути у форматі +380XXXXXXXXX";
                phoneInput.classList.add('invalid');
                isValid = false;
            }

            if (!isValid) return;

            const formData = new FormData();
            formData.append('name', name);
            formData.append('phone', phone);

            fetch('/consultation_form', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                document.getElementById("popup").style.display = "flex";
                form.reset();
                phoneInput.value = "+380 ";
            })
            .catch(error => {
                phoneError.textContent = "Виникла помилка. Спробуйте пізніше.";
            });
        });
    }

    const closeBtn = document.getElementById("close-popup");
    if (closeBtn) {
        closeBtn.addEventListener("click", function() {
            document.getElementById("popup").style.display = "none";
        });
    }
});
