import { createMarkupCategory } from './create-markup-category-books';
import { apiRequestCategory } from './queries';
import { allCategoryCreate } from './home';

import { save, load } from './storage-servises';
export { saveActiveCategory, changeActiveCategory };

const categoryListEl = document.querySelector('.category-list');
const categoryConteiner = document.querySelector('.js-section-top-books');

categoryListEl.addEventListener('click', async e => {
  const categoryRequest = e.target.dataset.category || e.target.textContent;
  const categoryRequestTarget = e.target;

  if (e.target.textContent === categoryListEl.textContent) {
    return;
  }

  if (categoryRequest === 'All categories') {
    allCategoryCreate();
    // добавление активной категории
    saveActiveCategory(e.target.textContent);
    changeActiveCategory(categoryRequestTarget);
  } else {
    apiRequestCategory(categoryRequest)
      .then(data => {
        // console.log(data);
        const MarkupCategory = createMarkupCategory(data);
        categoryConteiner.innerHTML = `<h1 class="title-top-books">${e.target.textContent}</h1><div class="category-books_container">${MarkupCategory}</div>`;

        // добавление активной категории
        saveActiveCategory(e.target.textContent);
        changeActiveCategory(categoryRequestTarget);
      })
      .catch(err => console.log(err));
  }
});

apiRequestCategoriesList()
  .then(data => {
    categoryListEl.insertAdjacentHTML('beforeend', createMarkupCategList(data));
  })
  .catch(err => console.log(err));

function apiRequestCategoriesList() {
  const CATEGORIES_URL =
    'https://books-backend.p.goit.global/books/category-list';
  return fetch(CATEGORIES_URL).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

function createMarkupCategList(arr) {
  return arr
    .map(
      li => `<li class="category-list_item" data-category='${li.list_name}'>
        <p class="category-list_name">${li.list_name}</p>
</li>`
    )
    .sort()
    .join('');
}

function changeActiveCategory() {
  const nameOfCat = load('activeCategory');
  const activeCategory = document.querySelector('.active-category');
  const liEl = document.querySelectorAll('.category-list_item');

  if (activeCategory) {
    activeCategory.classList.remove('active-category');
  }

  liEl.forEach(el => {
    const category = el.getAttribute('data-category');
    if (category === nameOfCat) {
      el.classList.add('active-category');
    }
  });
}

function saveActiveCategory(value) {
  save('activeCategory', value);
}
