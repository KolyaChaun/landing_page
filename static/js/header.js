document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-links li a');
    const consultationBtn = document.querySelector('.consultation-btn');
    const socialIcons = document.querySelectorAll('.social-icons a');

    // Функция плавной прокрутки с небольшим отступом сверху
    function scrollToElement(targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offset = targetElement.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: offset, behavior: 'smooth' });
        }
    }

    // Обработчик для кнопки "Отримати консультацію"
    consultationBtn?.addEventListener('click', function (e) {
        e.preventDefault();
        if (window.location.pathname === '/taobao' || window.location.pathname === '/pinduoduo') {
            window.location.href = '/#consultation';
        } else if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
            scrollToElement('consultation');
        } else {
            window.location.href = '/#consultation';
        }
        navLinks?.classList.remove('active');
        hamburger?.classList.remove('active');
    });

    // Открытие/закрытие меню при клике на бургер
    hamburger?.addEventListener('click', () => {
        navLinks?.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Прокрутка при клике на навигационные ссылки на главной странице
    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        navItems.forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                scrollToElement(this.getAttribute('href').split('#')[1]);
                navLinks?.classList.remove('active');
                hamburger?.classList.remove('active');
            });
        });
    }

    // Закрытие меню при клике на иконки соцсетей
    socialIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            navLinks?.classList.remove('active');
            hamburger?.classList.remove('active');
        });
    });
});





