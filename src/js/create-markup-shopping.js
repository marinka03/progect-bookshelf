import amazonImg from '../images/amazon_link.png';
import appleImg from '../images/apple_link.png';
import bookshopImg from '../images/bookshop_link.png';
import trash from '../images/trash.png';
import { hideLoader } from './queries';
// import { bookList } from './login-modal';

// setTimeout(() => {
//   listEl.insertAdjacentHTML('beforeend', generateCard(bookList));
// }, 5000);

const listEl = document.querySelector('.js-listInShopping');

// let shoppingList = bookList;
// console.log(bookList, 'asdkjasldj');

// function deleteBook(bookId) {
//   const cardToDelete = document.querySelector(
//     `.shopping-list-card[data-bookId="${bookId}"]`
//   );
//   cardToDelete.remove();

//   shoppingList = shoppingList.filter(book => book._id !== bookId);
// }
// function deleteBook(bookId) {
//   const cardToDelete = document.querySelector(
//     `.shopping-list-card[data-bookId="${bookId}"]`
//   );
//   cardToDelete.remove();

//   shoppingList = shoppingList.filter(book => book._id !== bookId);
// }

// window.deleteBook = deleteBook;

function generateCards(books) {
  return books.map(book => generateCard(book)).join('');
}

function generateCard(book) {
  return `
    <li class="shopping-list-card js-li-shopping" data-id='${book._id}'> 
      <div class="shopping-list-card__cover">
        <img src="${book.book_image}" alt="${
    book.title
  }" class="shopping-list-card__image">
      </div>
      <div class="shopping-list-card__content">
<div class="shopping-list-card__index">
        <h1 class="shopping-list-card__title">${book.title}</h1>
        <p class="shopping-list-card__category">${
          book.list_name || 'No list name'
        }</p>
</div>
        <div class="shopping-list-card__wrapper">
          <p class="shopping-list-card__desc">${
            book.description || 'We hope you will love it'
          }</p>
        </div>
        <div class="shopping-list-card__cellar">
          <p class="shopping-list-card__author">${book.contributor}</p>
          <ul class="shopping-list-card__links">
             <li>
              <a class="seller__link shopping-list-card__amazon" href=${
                book.amazon_product_url
              } target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Amazon">
                <img src="${amazonImg}" alt="amazon" />
              </a>
            </li>
            <li>
              <a class="seller__link shopping-list-card__book" href=${
                book.buy_links[1].url
              } target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Apple-books">
                <img src="${appleImg}" alt="apple-books" />
              </a>
            </li>
            <li>
              <a class="seller__link shopping-list-card__book" href=${
                book.buy_links[2].url
              } target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Bookshop">
                <img src="${bookshopImg}" alt="bookshop" />
              </a>
            </li>
          </ul>
        </div>
        <button class="shopping-list-card__button js-delete">
          <img src="${trash}" width="16" height="16" class="shopping-list-card__icon" alt="Remove">
        </button>
      </div>
    </li>`;
}

// generateCard(bookList);

hideLoader();

export { generateCard, generateCards };
