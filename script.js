const toggleBtn = document.querySelector('.btn-close');
const mainNav = document.querySelector('.main-nav');

toggleBtn.addEventListener('click', () => {
    mainNav.classList.toggle('open');
});
