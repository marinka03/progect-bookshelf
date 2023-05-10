import { apiRequestTopBooks } from './queries';
import { createMarkupTopBooks } from './create-markup-home';

const mainContainerEl = document.querySelector('.js-main-container');

apiRequestTopBooks()
  .then(data => {
    mainContainerEl.insertAdjacentHTML('beforeend', createMarkupTopBooks(data));
    if (data.page !== data.total_pages) {
      paginationBtn.hidden = false;
    }
  })
  .catch(err => console.log(err));
