import { apiRequestTopBooks } from './queries';
import { createMarkupTopBooks } from './create-markup-home';
import { apiRequestCategory } from './queries';
import { createMarkupCategory } from './create-markup-category-books';

const mainHomeContainerEl = document.querySelector('.js-section-top-books');

apiRequestTopBooks()
  .then(data => {
    const MarkupTopBooks = createMarkupTopBooks(data);
    mainHomeContainerEl.innerHTML = MarkupTopBooks;

    if (data.page !== data.total_pages) {
      paginationBtn.hidden = false;
    }
  })
  .catch(err => console.log(err));

document.body.addEventListener('click', function (event) {
  if (event.target.classList.contains('js-top-books_button')) {
    // выполнить функцию для элемента с классом 'js-top-books_button'
    category = event.target.getAttribute('data-category');
    apiRequestCategory(category)
      .then(data => {
        console.log('data :>> ', data);
        const MarkupCategory = createMarkupCategory(data);
        mainHomeContainerEl.innerHTML = MarkupCategory;
      })
      .catch(err => console.log(err));
  }
});
