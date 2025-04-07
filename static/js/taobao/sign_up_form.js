// Открытие попапа
function showPopup() {
    const popup = document.getElementById('popup');
    popup.classList.add('show');
    popup.classList.remove('hide');
}

// Закрытие попапа
function closePopup() {
    // Закрытие попапов с анимацией
    const popup = document.getElementById('popup');
    const confirmationPopup = document.getElementById('confirmation-popup');

    popup.classList.add('hide');
    // confirmationPopup.classList.add('hide');

    setTimeout(function() {
        popup.classList.remove('show');
        confirmationPopup.classList.remove('show');
    }, 300); // задержка для анимации скрытия
}

// Показываем попап с подтверждением
function showConfirmationPopup() {
    // Закрываем попап с формой и показываем попап с подтверждением
    const popup = document.getElementById('popup');
    const confirmationPopup = document.getElementById('confirmation-popup');

    popup.classList.add('hide');
    popup.classList.remove('show');
    confirmationPopup.classList.add('show');
    // confirmationPopup.classList.remove('hide');
}

// Отправка формы
document.getElementById('application-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;

    var formData = new FormData();
    formData.append('name', name);
    formData.append('phone', phone);

    fetch('/sign_up_form_taobao', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        showConfirmationPopup();  // Вызов функции, а не ручное изменение display
        document.getElementById("application-form").reset();
    })
    .catch(error => alert("Виникла помилка. Спробуйте пізніше."));
});

// Обработчик для кнопки "Закрити"
document.querySelector('.close-confirmation-btn').addEventListener('click', function() {
    closePopup();
});


