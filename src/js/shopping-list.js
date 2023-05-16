import { hideLoader } from './queries';
import { getAddedBooks } from './login-modal';
import { checkCurentUser } from './login-modal';
import { bookList } from './login-modal';
import { generateCard } from './create-markup-shopping';
// setTimeout(() => {
//   console.log('jvnnre', bookList);
//   //   listEl.insertAdjacentHTML('beforeend', createMarkupBooksInShopping(bookList));
//   listEl.insertAdjacentHTML('beforeend', generateCard(bookList));
// }, 3000);
// hideLoader();
import shoppping_list from '../images/shopping_list.png';

import amazonImg from '../images/amazon_link.png';
import appleImg from '../images/apple_link.png';
import bookshopImg from '../images/bookshop_link.png';
import trash from '../images/trash.png';

import { initializeApp } from 'firebase/app';

import 'firebase/auth';

import {
  getAuth,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

import {
  getDatabase,
  ref,
  set,
  child,
  update,
  remove,
  get,
  onValue,
} from 'firebase/database';

import { addbooktosl, removeBook } from './login-modal';
import { async } from '@firebase/util';

// setTimeout(() => {
//   console.log('jvnnre', bookList);
//   //   listEl.insertAdjacentHTML('beforeend', createMarkupBooksInShopping(bookList));
//   listEl.insertAdjacentHTML('beforeend', generateCard(bookList));
// }, 5000);
hideLoader();
const containerEl = document.querySelector('.js-container-list');
const listEl = document.querySelector('.js-listInShopping');
const emptyWrapper = document.querySelector('.js-wrapper-empty-page');
console.log(emptyWrapper);
// const arrToShoppingList = [];
const localStorageEL = JSON.parse(localStorage.getItem('userdata')) ?? {};
console.log(localStorageEL.books);
// listEl.insertAdjacentHTML('beforeend', createMarkupBooksInShopping(bookList));
// const btnDelete = document.querySelector('.js-li-shopping');

const empty = emptyWrapper;

if (!localStorageEL.books.length) {
  console.log(localStorageEL.books);
  console.log('1');
  emptyWrapper.style.display = 'block';
} else {
  console.log('2');
  emptyWrapper.style.display = 'none';
}

const array = [];
localStorageEL.books.forEach(item => {
  apiFetchCate(item).then(data => {
    console.log(data);
    array.push(data);
    listEl.insertAdjacentHTML('beforeend', generateCardochki(data));
  });
});
// console.log(array);
// listEl.insertAdjacentHTML('beforeend', generateCard(array));

// apiFetch().then(data =>
//   containerEl.insertAdjacentHTML('beforeend', createMarkupTopBooks(data))
// );

// containerEl.addEventListener('click', addToShoppingList);
listEl.addEventListener('click', onClickBtnDelete);

function onClickBtnDelete(evt) {
  if (evt.target.classList.contains('js-delete')) {
    console.log('5');
    const li = evt.target.closest('.js-li-shopping');
    const id = li.dataset.id;
    console.log(id);
    // const masShop = array.filter(item => item._id !== id);
    // console.log(masShop);
    // listEl.innerHTML = createMarkupBooksInShopping(masShop);

    // const index = bookList.findIndex(item => item._id === id);
    // console.log(bookList[index]);
    // bookList.splice(index, 1);
    // console.log(bookList);
    //   localStorage.setItem('shopping-list', JSON.stringify(bookList));

    const index = array.findIndex(item => item._id === id);
    console.log(array[index]);
    array.splice(index, 1);
    console.log(array);

    // localStorage.setItem('shopping-list', JSON.stringify(bookList));
    // listEl.innerHTML = createMarkupBooksInShopping(bookList);

    // listEl.innerHTML = generateCard(array);
    // const arr = array.map(item => item._id);
    // localStorageEL.books = arr;
    // console.log(localStorageEL);
    // localStorage.setItem('userdata', JSON.stringify(localStorageEL));
    // console.log(array);
    console.log('vjn;evo;n;e');
    removeBook(id);
    listEl.innerHTML = generateCard(array);

    if (!array.length) {
      console.log(emptyWrapper.style.display);
      //   emptyWrapper.style.display = 'block';
      console.log(emptyWrapper.style.display);
      console.log(emptyWrapper);
      console.log(empty);
      console.log('1');
      //   addABook.style.display = 'none';
      //   listEl.insertAdjacentElement('beforeend', emptyWrapper);
      listEl.innerHTML = `<div class="wrapper-empty-page js-wrapper-empty-page"><p class="wrapper-empty-page_description js-descr-empty">This page is empty, add some books and proceed to order.</p><img class="js-image-empty" src="${shoppping_list}" alt="This page is empty" /></div>`;
    }
  }
}

function addToShoppingList(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('js-addToShopping')) {
    return;
  }

  getAddedBooks();

  iterateArray(getAddedBooks());

  const li = evt.target.closest('.js-card');
  const id = li.dataset.id;

  apiFetchCate(id).then(data => {
    const inShoppingList = array.some(item => li.dataset.id === item._id);
    if (inShoppingList) {
      return;
    }
    array.push(data);
    console.log(array);
    // localStorage.setItem('shopping-list', JSON.stringify(array));
    listEl.innerHTML = createMarkupBooksInShopping(array);
  });

  //   const mas = document.querySelectorAll('.js-card');

  //   const findEl = [...mas].find(item => item.dataset.id === id);

  //   const inShoppingList = arrToShoppingList.some(
  //     item => item.dataset.id === findEl.dataset.id
  //   );

  //   if (inShoppingList) {
  //     return;
  //   }
  //   const inShoppingList = arrToShoppingList.some(
  //     item => li.dataset.id === item.dataset.id
  //   );
  //   if (inShoppingList) {
  //     return;
  //   }
  //   arrToShoppingList.push(li);
  //   console.log(arrToShoppingList);

  // listEl.insertAdjacentElement('beforeend', arrToShoppingList[0])
  //   listEl.append(...arrToShoppingList);
}

function apiFetch() {
  return fetch('https://books-backend.p.goit.global/books/top-books').then(
    resp => resp.json()
  );
}

function createMarkupTopBooks(books) {
  return books
    .map(book => {
      const booksArr = book.books
        .map(
          bookOne => `<li class='js-card' data-id=${bookOne._id}>
				<h2>${book.list_name}</h2>
				<img src="${bookOne.book_image}" alt="" width='180'>
				<p>${bookOne.author}</p>
				<button class='js-addToShopping'>Add to shopping list</button>
			</li>`
        )
        .join('');
      return `<ul>${booksArr}</ul>`;
    })
    .join('');
}

// // const listEl = document.querySelector('.js-listInShopping');

function apiFetchCate(id) {
  return fetch(`https://books-backend.p.goit.global/books/${id}`).then(resp =>
    resp.json()
  );
}

function createMarkupBooksInShopping(books) {
  return books
    .map(
      book =>
        `<li class='js-li-shopping' data-id='${book._id}'>
				<img src="${book.book_image}" alt="${book.title}" width='116'>
				<h2>${book.title}</h2>
				<h3>${book.list_name}</h3>
				<p>${book.description}</p>
				<h3>${book.author}</h3>
				<button class='js-delete'>Delete</button>
				<a href="${book.amazon_product_url}">Amazon</a>
				<a href="${book.buy_links[1].url}">Book1</a>
				<a href="${book.buy_links[2].url}">Book2</a>
			</li>`
    )
    .join('');
}

// function generateCard(books) {
//   return books
//     .map(
//       book =>
//         `
//     <li class="shopping-list-card js-li-shopping" data-id=${book._id}>
//       <div class="shopping-list-card__cover">
//         <img src="${book.book_image}" width='116'>
//       </div>
//       <div class="shopping-list-card__content">
//         <h1 class="shopping-list-card__title">${book.title}</h1>
//         <p class="shopping-list-card__category">${
//           book.age_group || 'No category'
//         }</p>
// <div class="shopping-list-card__wrapper">
//         <p class="shopping-list-card__desc">${
//           book.description || 'No description'
//         }</p>
// </div>
// <div class="shopping-list-card__cellar">
//  <p class="shopping-list-card__author">${book.contributor}</p>
//         <ul class="shopping-list-card__links">
//                    <li>
//               <a class="seller__link shopping-list-card__amazon" href=# target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Amazon">
//                 <img src="${book.title}" alt="amazon" />
//               </a>
//             </li>
//             <li>
//               <a class="seller__link shopping-list-card__book" href=# target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Apple-books">
//                 <img src="${book.title}" alt="apple-books" />
//               </a>
//             </li>
//             <li>
//               <a class="seller__link shopping-list-card__book" href=# target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Bookshop">
//                 <img src="${book.title}" alt="bookshop" />
//               </a>
//             </li>
//         </ul></div>
//         <button class="shopping-list-card__button" onclick="deleteBook(${
//           book.id
//         })">

//         <img src="${
//           book.title
//         }" width="16" height="16" class="js-delete shopping-list-card__icon" alt="Remove">

//         </button>

//       </div>
//   `
//     )
//     .join('');
// }

export { array };

hideLoader();

function generateCardochki(book) {
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
        <button class="shopping-list-card__button">
          <img src="${trash}" width="16" height="16" class="shopping-list-card__icon js-delete" alt="Remove">
        </button>
      </div>
    </li>`;
}
