import { onOpenModal } from './create-modal';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const STORAGE_KEY = 'themeKey';

const checkBox = document.querySelector('#toggle');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const categoryListName = document.querySelector('.category-list');
const headerHome = document.querySelector('.header__home');
const headerShopping = document.querySelector('.header__shopping');
const currentHome = document.querySelector('.current-home');
// const modalPopUp = document.querySelector('.modal_pop-up');

checkBox.addEventListener('change', onChange);

isTheme();

async function onChange(e) {
  if (e.target.checked) {
    body.classList.remove('ligth-theme');
    body.classList.add('dark-theme');
    header.classList.add('dark-theme_header');
    headerHome.classList.add('dark-theme_header-hover');
    headerShopping.classList.add('dark-theme_header-hover');
    currentHome.classList.add('dark-theme-cuttent-page');
    categoryListName.classList.remove('light-theme-color-item');
    categoryListName.classList.add('dark-theme-category-list_item');
    modalPopUp.classList.add('dark-theme_modal-book');
    // if (await onOpenModal()) {
    //   modalPopUp.classList.add('dark-theme_modal-book');
    // }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(Theme.DARK));
  } else {
    body.classList.add('ligth-theme');
    body.classList.remove('dark-theme');
    header.classList.remove('dark-theme_header');
    headerHome.classList.remove('dark-theme_header-hover');
    headerShopping.classList.remove('dark-theme_header-hover');
    categoryListName.classList.remove('dark-theme-category-list_item');
    categoryListName.classList.add('light-theme-color-item');
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Theme.LIGHT));
  }
}

// function modal() {
//   if (onChange) {
//     modalPopUp.classList.add('dark-theme_modal-book');
//   }
// }
// modal();

function isTheme() {
  const saveTheme = localStorage.getItem(STORAGE_KEY);
  if (!saveTheme) {
    body.classList.add('ligth-theme');
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Theme.LIGHT));
  } else {
    const parseTheme = JSON.parse(saveTheme);
    if (parseTheme === 'dark-theme') {
      body.classList.add('dark-theme');
      header.classList.add('dark-theme_header');
      headerHome.classList.add('dark-theme_header-hover');
      headerShopping.classList.add('dark-theme_header-hover');
      categoryListName.classList.remove('light-theme-color-item');
      categoryListName.classList.add('dark-theme-category-list_item');
      checkBox.checked = true;
    }
  }
}
