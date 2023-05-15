import amazonImg from '../images/amazon_link.png';
import appleImg from '../images/apple_link.png';
import bookshopImg from '../images/bookshop_link.png';
import trash from '../images/trash.png';
import { hideLoader } from './queries'

let shoppingList = [
  {
    id: 1,
    title: 'Harry Potter',
    book_image: 'harry-potter.jpg',
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/Harry-Potter-Philosophers-Stone-Rowling/dp/B01MTGVJ6X/ref=sr_1_9',
      },
      {
        name: 'Audible',
        url: 'https://www.audible.com/pd/Harry-Potter-and-the-Sorcerers-Stone-Audiobook/B017V4SPQQ',
      },
    ],
    contributor: 'J.K. Rowling',
    age_group: 'Children',
    description: 'Fantasy novel about the boy wizard Harry Potter',
  },
  {
    id: 2,
    title: 'Lord of the Rings',
    book_image: 'lord-of-the-rings.jpg',
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/Lord-Rings-Fellowship-Ultimate-Collectors/dp/B007ZQAKHU/ref=sr_1_2',
      },
      {
        name: 'Audible',
        url: 'https://www.audible.com/pd/The-Fellowship-of-the-Ring-Audiobook/B0099RKI5W',
      },
    ],
    contributor: 'J.R.R. Tolkien',
    description: 'Epic fantasy adventure novel set in Middle-earth',
  },
  {
    id: 3,
    title: 'Lord of the Rings',
    book_image: 'lord-of-the-rings.jpg',
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/Lord-Rings-Fellowship-Ultimate-Collectors/dp/B007ZQAKHU/ref=sr_1_2',
      },
      {
        name: 'Audible',
        url: 'https://www.audible.com/pd/The-Fellowship-of-the-Ring-Audiobook/B0099RKI5W',
      },
    ],
    contributor: 'J.R.R. Tolkien',
    description: 'Epic fantasy adventure novel set in Middle-earth',
  },
  {
    id: 4,
    title: 'Lord of the Rings',
    book_image: 'lord-of-the-rings.jpg',
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/Lord-Rings-Fellowship-Ultimate-Collectors/dp/B007ZQAKHU/ref=sr_1_2',
      },
      {
        name: 'Audible',
        url: 'https://www.audible.com/pd/The-Fellowship-of-the-Ring-Audiobook/B0099RKI5W',
      },
    ],
    contributor: 'J.R.R. Tolkien',
    description: 'Epic fantasy adventure novel set in Middle-earth',
  },
];

function generateCards() {
  const cards = document.querySelector('.js-listInShopping');
  shoppingList.forEach(book => {
    cards.insertAdjacentHTML('beforeend', generateCard(book));
  });
}

// generateCards();

function deleteBook(bookId) {
  shoppingList = shoppingList.filter(book => book.id !== bookId);

  const cards = document.querySelector('.js-listInShopping');
  cards.innerHTML = '';
  generateCards();
}

window.deleteBook = deleteBook;

function generateCard(book) {
  return `
    <li class="shopping-list-card">
      <div class="shopping-list-card__cover">
        <img src="${book.book_image}">
      </div>
      <div class="shopping-list-card__content">
        <h1 class="shopping-list-card__title">${book.title}</h1>
        <p class="shopping-list-card__category">${
          book.age_group || 'No category'
        }</p> 
<div class="shopping-list-card__wrapper">
        <p class="shopping-list-card__desc">${
          book.description || 'No description'
        }</p>
</div>
<div class="shopping-list-card__cellar">       
 <p class="shopping-list-card__author">${book.contributor}</p>
        <ul class="shopping-list-card__links">
                   <li>
              <a class="seller__link shopping-list-card__amazon" href=# target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Amazon">
                <img src="${amazonImg}" alt="amazon" />
              </a>
            </li>
            <li>
              <a class="seller__link shopping-list-card__book" href=# target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Apple-books">
                <img src="${appleImg}" alt="apple-books" />
              </a>
            </li>
            <li>
              <a class="seller__link shopping-list-card__book" href=# target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Bookshop">
                <img src="${bookshopImg}" alt="bookshop" />
              </a>
            </li>
        </ul></div>
        <button class="shopping-list-card__button" onclick="deleteBook(${
          book.id
        })">
        
        <img src="${trash}" width="16" height="16" class="shopping-list-card__icon" alt="Remove">
        
        </button>

      </div>
  `;
}

// import { array } from './shopping-list.js';

// let shoppingList = array;

// function generateCards() {
//   const cards = document.querySelector('.js-shopping-list-card');
//   cards.innerHTML = '';

//   shoppingList.forEach(book => {
//     cards.insertAdjacentHTML('beforeend', generateCard(book));
//   });
// }

// function deleteBook(event) {
//   const bookElement = event.target.closest('.shopping-list-card');
//   const bookId = bookElement.dataset.bookId;
//   shoppingList = shoppingList.filter(book => book._id !== bookId);
//   const cards = document.querySelector('.js-listInShopping');
//   cards.innerHTML = '';
//   generateCards();
// }

// window.deleteBook = deleteBook;

// function generateCard(book) {
//   return `
//     <li class="shopping-list-card" data-bookId='${book._id}'> 
//       <div class="shopping-list-card__cover">
//         <img src="${book.book_image}">
//       </div>
// <div class="shopping-list-card__content">
//         <h1 class="shopping-list-card__title">${book.title}</h1>
//         <p class="shopping-list-card__category">${
//           book.list_name || 'No list name'
//         }</p>
// <div class="shopping-list-card__wrapper">
//         <p class="shopping-list-card__desc">${
//           book.description || 'No description'
//         }</p>
// </div>
// <div class="shopping-list-card__cellar">
//         <p class="shopping-list-card__author">${book.contributor}</p>
//         <ul class="shopping-list-card__links">
//           <li>          
//            <a href="${book.amazon_product_url}"><img src="amazon.png"></a>
//           </li> 
//           <li>
//            <a href="${
//              book.buy_links[1].url
//            }"><img src="book1.png"></a>             
//           </li>
//           <li>
//            <a href="${book.buy_links[2].url}"><img src="book2.png"></a>
//           </li>                  
//         </ul></div>
//         <button class="shopping-list-card__button" onclick="deleteBook(${
//           book._id
//         })">
//         <svg width="16" height="16" class="shopping-list-card__icon">
//         <use href="/icons.e58dda3e.svg#icon-trash"></use>
//         </svg>
//         </button>
//       </div>
// </li>
//   `;
// }

// generateCards();

hideLoader();
