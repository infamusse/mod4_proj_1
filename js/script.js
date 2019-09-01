const burger = document.querySelector('.hamburger')

burger.addEventListener('click', function () {
    const navBar = document.querySelector('.nav__header')

    navBar.classList.toggle('nav__header--active');
    burger.classList.toggle('hamburger--active');
})