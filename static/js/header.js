// Получаем элементы
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('.nav-links li a');
const consultationBtn = document.querySelector('.consultation-btn');
const socialIcons = document.querySelectorAll('.social-icons a');

// Открытие/закрытие меню при клике на бургер
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Закрытие меню при клике на любую ссылку
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Закрытие меню при клике на кнопку "Отримати консультацію"
consultationBtn.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
});

// Закрытие меню при клике на иконки соцсетей
socialIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});
document.querySelector('.consultation-btn').addEventListener('click', function(e) {
    e.preventDefault(); // Отменяем стандартное поведение перехода по якорю
    const target = document.querySelector('#consultation'); // Ищем элемент с id="consultation"
    window.scrollTo({
        top: target.offsetTop - 55,
        behavior: 'smooth'
    });
});