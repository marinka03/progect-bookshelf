import { createMarkupTopBooks } from './create-markup-home';
import { home } from './home';
import { createModalMarkup } from './create-modal';



// const book = document.querySelector('[data-bookId]');
// book.addEventListener('click', onQuickViewBookClick);

// async function onQuickViewBookClick(evt) {
//   evt.preventDefault();
//   const books = await createMarkupTopBooks();
//   if (!books) return;
  

//   if (evt.target.classList.contains('top-books_quick-view')) {
//     const id = Number(evt.target.dataset.bookId);
//     console.log(id);
    
//   }
// }

// const BASE_URL = 'https://books-backend.p.goit.global/books/';
  // const li = evt.target.closest('.js-card');
  // const bookId = li.dataset.id;

// async function apiRequestBook(bookId) {
//   const URL = `${BASE_URL}${bookId}`;
//   const resp = await fetch(URL);
//   if (!resp.ok) {
//     throw new Error(resp.statusText);
//   }
//   return await resp.json();
// }
// apiRequestBook(boookId).then(data => {

// });

//   apiRequestBook().then((data) => {
   
//  }) 

// function apiRequestTopBooks() {
//   const BASE_URL = 'https://books-backend.p.goit.global/books/top-books';
//   return fetch(BASE_URL).then(resp => {
//     if (!resp.ok) {
//       throw new Error(resp.statusText);
//     }
//     return resp.json();
//   });
// }
