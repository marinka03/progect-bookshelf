const homeCurrentPage = document.querySelector('.header__home-box');
const shoppingCurrentPage = document.querySelector('.header__shopping-box');

function initPageState() {
  if (window) {
    const page = window.location.pathname;

    if (page.includes('/shopping-list')) {
      shoppingCurrentPage.classList.add('current-shopping');
      homeCurrentPage.classList.remove('current-home');
    }
    if (page.includes('/index')) {
      homeCurrentPage.classList.add('current-home');
      shoppingCurrentPage.classList.remove('current-shopping');
    }
  }
}
initPageState();

const burgerHomeCurrentPage = document.querySelector('.mob-menu__home-box');
const burgerSpppingCurrentPage = document.querySelector(
  '.mob-menu__shopping-box'
);

function currenPage() {
  if (window) {
    const page = window.location.pathname;

    if (page.includes('/shopping-list')) {
      burgerSpppingCurrentPage.classList.add('mobile-menu-current-shopping');
      burgerHomeCurrentPage.classList.remove('mobile-menu-current-home');
    }
    if (page.includes('/index')) {
      burgerHomeCurrentPage.classList.add('mobile-menu-current-home');
      burgerSpppingCurrentPage.classList.remove('mobile-menu-current-shopping');
    }
  }
}
currenPage();
