function showPopup() {
    const popup = document.getElementById('popup');
    popup.classList.add('show');
    popup.classList.remove('hide');
}

function closePopup() {
    const popup = document.getElementById('popup');
    const confirmationPopup = document.getElementById('confirmation-popup');

    popup.classList.add('hide');

    setTimeout(function() {
        popup.classList.remove('show');
        confirmationPopup.classList.remove('show');
    }, 300);
}

function showConfirmationPopup() {

    const popup = document.getElementById('popup');
    const confirmationPopup = document.getElementById('confirmation-popup');

    popup.classList.add('hide');
    popup.classList.remove('show');
    confirmationPopup.classList.add('show');
}

document.getElementById('application-form').addEventListener('submit', function(event) {
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
        phoneError.textContent = "Номер має бути у форматі +380XXXXXXXXX або 0XXXXXXXXX.";
        phoneInput.classList.add('invalid');
        isValid = false;
    }
    if (!isValid) {
        return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('phone', phone);

    fetch('/sign_up_form_pinduoduo', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        showConfirmationPopup();
        document.getElementById("application-form").reset();
    })
    .catch(error => {
        phoneError.textContent = "Виникла помилка. Спробуйте пізніше.";
    });
});

document.querySelector('.close-confirmation-btn').addEventListener('click', function() {
    closePopup();
});
