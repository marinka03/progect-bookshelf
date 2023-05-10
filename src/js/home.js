import { apiRequestTopBooks } from './queries';
import { createMarkupTopBooks } from './create-markup-home';

const mainContainerEl = document.querySelector('.js-main-container');
const seeMoreBtn = document.querySelector('.js-top-books_button');

apiRequestTopBooks()
  .then(data => {
    mainContainerEl.insertAdjacentHTML('beforeend', createMarkupTopBooks(data));
    if (data.page !== data.total_pages) {
      paginationBtn.hidden = false;
    }
  })
  .catch(err => console.log(err));
