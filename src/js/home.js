import { apiRequestTopBooks } from './queries';
import { createMarkupTopBooks } from './create-markup-home';
import { apiRequestCategory } from './queries';
import { createMarkupCategory } from './create-markup-category-books';
import { save, load, remove } from './storage-servises';
import { saveActiveCategory, changeActiveCategory } from './category-list';

export { allCategoryCreate };
const mainHomeContainerEl = document.querySelector('.js-section-top-books');

function allCategoryCreate() {
  apiRequestTopBooks()
    .then(data => {
      const MarkupTopBooks = createMarkupTopBooks(data);
      mainHomeContainerEl.innerHTML = MarkupTopBooks;

      if (data.page !== data.total_pages) {
        paginationBtn.hidden = false;
      }
      // сброс активной категории
      saveActiveCategory('All categories');
    })
    .catch(err => console.log(err));
}

allCategoryCreate();
// changeActiveCategory();

document.body.addEventListener('click', function (event) {
  if (event.target.classList.contains('js-top-books_button')) {
    // выполнить функцию для элемента с классом 'js-top-books_button'
    const category = event.target.getAttribute('data-category');

    apiRequestCategory(category)
      .then(data => {
        console.log('data :>> ', data);
        const MarkupCategory = createMarkupCategory(data);
        mainHomeContainerEl.innerHTML = `<h1 class="title-top-books">${category}</h1><div class="category-books_container">${MarkupCategory}</div>`;
        // добавление активной категории
        saveActiveCategory(category);
        // changeActiveCategory(categoryEl);
      })
      .catch(err => console.log(err));
  }
});
