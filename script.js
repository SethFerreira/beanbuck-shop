const toggleBtn = document.querySelector('.btn-close');
const mainNav = document.querySelector('.main-nav');
const socialListNav = document.querySelector('.social-list ul');
const socialListNavIcon = document.querySelectorAll('.icon-text ion-icon');

toggleBtn.addEventListener('click', () => {
    mainNav.classList.toggle('open');
});

socialListNavIcon.forEach(icon => {
    icon.addEventListener('click', () => {
        const ul = icon.closest('.social-list').querySelector('ul');
        ul.classList.toggle('open'); 
    });
});
