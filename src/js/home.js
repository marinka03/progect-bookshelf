import { apiRequestTopBooks } from './queries';
import { createMarkupTopBooks } from './create-markup-home';

const mainTopBooksContainerEl = document.querySelector('.js-top-books-container');

apiRequestTopBooks()
  .then(data => {
    markup = createMarkupTopBooks(data);
    mainTopBooksContainerEl.innerHTML = markup;
    if (data.page !== data.total_pages) {
      paginationBtn.hidden = false;
    }
  })
  .catch(err => console.log(err));
