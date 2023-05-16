import { hideLoader } from './queries';
import { getAddedBooks } from './login-modal';
import { checkCurentUser } from './login-modal';
import { bookList } from './login-modal';
import { generateCard } from './create-markup-shopping';

import shoppping_list from '../images/shopping_list.png';

import amazonImg from '../images/amazon_link.png';
import appleImg from '../images/apple_link.png';
import bookshopImg from '../images/bookshop_link.png';
import trash from '../images/trash.png';

import { generateCard, generateCards } from './create-markup-shopping';

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
    listEl.insertAdjacentHTML('beforeend', generateCards(data));
  });
});

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
}

function apiFetchCate(id) {
  return fetch(`https://books-backend.p.goit.global/books/${id}`).then(resp =>
    resp.json()
  );
}

hideLoader();
