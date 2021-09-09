const headerNav = document.querySelector('.header__nav');
const headerBurger = document.querySelector('.header__burger');

headerBurger.addEventListener('click', function (){
    headerNav.classList.toggle('active');
    headerBurger.classList.toggle('active');
})