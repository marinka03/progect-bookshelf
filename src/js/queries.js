export { apiRequestTopBooks };

function apiRequestTopBooks() {
  const BASE_URL = 'https://books-backend.p.goit.global/books/top-books';
  showLoader();
  return fetch(BASE_URL).then(resp => {
    hideLoader();
    if (!resp.ok) {
      showLoader();
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

// function apiRequestTopBooks() {
//   const BASE_URL = 'https://books-backend.p.goit.global/books/top-books';
//   showLoader();
//   return fetch(BASE_URL)
//     .then(resp => {
//       hideLoader();
//       if (!resp.ok) {
//         showLoader();
//         throw new Error(resp.statusText);
//       }
//       return resp.json();
//     })
//     .catch(error => {
//       showLoader();
//       console.error(error);
//     });

function showLoader() {
  const preloader = document.querySelector('#preloader');
  preloader.classList.remove('hide');
}

function hideLoader() {
  const preloader = document.querySelector('#preloader');
  preloader.classList.add('hide');
}

// вызываем функцию apiRequestTopBooks() для получения данных из API
// apiRequestTopBooks().then(data => {
//   // вызываем функцию createMarkupTopBooks() для создания разметки на странице
//   const markup = createMarkupTopBooks(data);
//   // находим контейнер для разметки на странице
//   const container = document.querySelector('#top-books_container');
//   // вставляем разметку в контейнер
//   container.innerHTML = markup;
// });
