import { hideLoader } from './queries';
import { generateCard } from './create-markup-shopping';
import shoppping_list from '../images/shopping_list.png';

import { generateCard, generateCards } from './create-markup-shopping';

import 'firebase/auth';

import { removeBook } from './login-modal';

hideLoader();
// const containerEl = document.querySelector('.js-container-list');
const listEl = document.querySelector('.js-listInShopping');
const emptyWrapper = document.querySelector('.js-wrapper-empty-page');
console.log(emptyWrapper);
// const arrToShoppingList = [];
console.log(JSON.parse(localStorage.getItem('userdata')) || {});
const localStorageEL = JSON.parse(localStorage.getItem('userdata')) || {};
console.log(localStorageEL.books);
// listEl.insertAdjacentHTML('beforeend', createMarkupBooksInShopping(bookList));
// const btnDelete = document.querySelector('.js-li-shopping');

const empty = emptyWrapper;
console.log(localStorageEL);
console.log(Object.keys(localStorageEL).length);
if (!Object.keys(localStorageEL).length) {
  console.log('vfekbmnubneubn');
  return;
} else if (!localStorageEL.books.length) {
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
    listEl.insertAdjacentHTML('beforeend', generateCard(data));
  });
});

listEl.addEventListener('click', onClickBtnDelete);

function onClickBtnDelete(evt) {
  if (evt.target.classList.contains('js-delete')) {
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
    listEl.innerHTML = generateCards(array);

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

function apiFetchCate(id) {
  return fetch(`https://books-backend.p.goit.global/books/${id}`).then(resp =>
    resp.json()
  );
}

hideLoader();
