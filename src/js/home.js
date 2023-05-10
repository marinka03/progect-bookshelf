import { apiRequestTopBooks } from './queries';
import { createMarkupTopBooks } from './create-markup-home';

const mainContainer = document.querySelector('.main-container');

apiRequestTopBooks()
  .then(data => {
    mainContainer.insertAdjacentHTML('beforeend', createMarkupTopBooks(data));
    if (data.page !== data.total_pages) {
      paginationBtn.hidden = false;
    }
  })
  .catch(err => console.log(err));
