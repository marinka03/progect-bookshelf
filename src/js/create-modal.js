import amazonImg from '../images/amazon_link.png';
import appleImg from '../images/apple_link.png';
import bookshopImg from '../images/bookshop_link.png';
import { addbooktosl } from './login-modal';
import storageServises from './storage-servises';


const bookQuikWiew = document.querySelector('.main');
const modalElement = document.querySelector('.modal_pop-up__container');
const modalInfo = document.querySelector('.modal_pop-up__description');
const bookDescription = document.querySelector('.no-description');
const backdrop = document.querySelector('.backdrop_pop-up');
const closeModalBtn = document.querySelector('.modal_pop-up__close-btn');

bookQuikWiew.addEventListener('click', onOpenModal);
closeModalBtn.addEventListener('click', onCloseModal);

let bookItem;

async function onOpenModal(evt) {
  if (!evt.target.closest('.top-books_quick-view')) return;
  
  const bookId = evt.target
  .closest('.top-books_quick-view')
  .getAttribute('data-bookId');
  bookItem = bookId;
  console.log(bookId);


  backdrop.classList.remove('backdrop_pop-up--is-hidden');
  backdrop.addEventListener('click', handleBackdropClick);
  closeModalBtn.addEventListener('click', onCloseModal);
  window.addEventListener('keydown', onEscKeyPress);

  await renderBookById(bookId);


  // const buttonModalRemoveBook = document.querySelector('.modalbtn-remove');
  // buttonModalRemoveBook.addEventListener('click', removeee)
  
  // function removeee() {
  //     console.log('cliiiiick')
  // }

  // await 

  // const addAAbook = document.querySelector('.modal__btn-add');
  // addAAbook.addEventListener('click', addbooktosl(bookId));
  
}

function onCloseModal() {
  backdrop.classList.toggle('backdrop_pop-up--is-hidden');
  backdrop.removeEventListener('click', handleBackdropClick);
  closeModalBtn.removeEventListener('click', onCloseModal);
  window.removeEventListener('keydown', onEscKeyPress);

  modalInfo.innerHTML = '';
}

function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    onCloseModal();
  }
}

function handleBackdropClick(event) {
  if (event.target === event.currentTarget) {
    onCloseModal();
  }
}

async function renderBookById(bookId) {
  modalElement.innerHTML = '';

  try {
    const book = await getBookById(bookId);

    storageServises.save('active-book', book);

    const bookInStorage = Boolean(storageServises.load('selected-books')?.find(el => el._id === book._id));

    const { book_image, title, author, description, buy_links } = book;

    if (description === '') {
     bookDescription.innerHTML = 'We hope you will love it';
    } else {
    bookDescription.innerHTML = '';
  }

    const markup = `<div class="modal-info">
    <img class="book__img" src="${book_image}" alt="${title}"/>
    <div class="modal-info__box">
       <h2 class="book__title">${title}</h2>
       <h3 class="book__author">${author}</h3>
       <p class="book__description">${description}</p>
       <ul class="list seller__list">
         <li>
              <a class="seller__link" href="${
                buy_links[0].url
              }" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Amazon">
                <img src="${amazonImg}" alt="amazon" />
              </a>
            </li>
            <li>
              <a class="seller__link" href="${
                buy_links[1].url
              }" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Apple-books">
                <img src="${appleImg}" alt="apple-books" />
              </a>
            </li>
            <li>
              <a class="seller__link" href="${
                buy_links[4].url
              }" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Bookshop">
                <img src="${bookshopImg}" alt="bookshop" />
              </a>
            </li>
       </ul>
       </div>
    </div>
    <button class="btn modal__btn-add" type="button"
    data-bookId='${bookId}'>${bookInStorage ? 'remove from the shopping list' : 'add to shopping list'}</button>
    <button class="btn modalbtn-remove" data-bookId='${bookId}' type="button">remove from the shopping list</button>
    <p class="modal__btn-text">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>`;

    // <button class="btn modal__btn-remove" type="button">remove from the shopping list</button>
    //   <p class="modal__btn-text">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
    
    modalElement.innerHTML = markup;

    const linksShops = document.querySelectorAll('.modal__link');
    onLinksClick(linksShops);
  } catch (error) {
    console.log(error);
  }
}

function onLinksClick(links) {
  for (let i = 0; i < links.length; i++) {
    let link = links[i];
    link.addEventListener('click', function (e) {
      e.preventDefault();
      window.open(this.href);
    });
  }
}

 
const BASE_URL = 'https://books-backend.p.goit.global/books/';

async function getBookById(bookId) {
  const URL = `${BASE_URL}${bookId}`;
  const resp = await fetch(URL);
  if (!resp.ok) {
    throw new Error(resp.statusText);
  }
  return await resp.json();
}
