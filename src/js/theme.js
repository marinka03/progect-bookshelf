const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const STORAGE_KEY = 'themeKey';

const checkBox = document.querySelector('#toggle');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const categoryListName = document.querySelector('.category-list');
const headerLogoSvg = document.querySelector('.js-icon');

checkBox.addEventListener('change', onChange);
isTheme();

function onChange(e) {
  if (e.target.checked) {
    body.classList.remove('ligth-theme');
    body.classList.add('dark-theme');
    header.classList.add('dark-theme_header');
    categoryListName.classList.remove('light-theme-color-item');
    categoryListName.classList.add('dark-theme-category-list_item');
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Theme.DARK));
  } else {
    body.classList.add('ligth-theme');
    body.classList.remove('dark-theme');
    header.classList.remove('dark-theme_header');
    categoryListName.classList.add('light-theme-color-item');
    categoryListName.classList.remove('dark-theme-category-list_item');
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Theme.LIGHT));
  }
}

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
      checkBox.checked = true;
    }
  }
}
