export { apiRequestTopBooks };

function apiRequestTopBooks() {
  const BASE_URL = 'https://books-backend.p.goit.global/books/top-books';
  showLoader();
  return fetch(BASE_URL)
    .then(resp => {
      hideLoader();
      if (!resp.ok) {
        showLoader();
        throw new Error(resp.statusText);
      }
      return resp.json();
    })
    .catch(error => {
      showLoader();
      console.error(error);
    });
}
function showLoader() {
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    preloader.classList.remove('hide');
  }
}

function hideLoader() {
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    preloader.classList.add('hide');
  }
}

export { showLoader, hideLoader };

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

// document.addEventListener('load', () => {
//   const mediaFiles = document.querySelectorAll('.preloader, video');
//   let i = 0;

//   Array.from(mediaFiles).forEach((file, index) => {
//     file.onload = () => {
//       i++;

//       percents.innerHTML = ((i * 100) / mediaFiles.length).toFixed(1);

//       if (i === mediaFiles.length) {
//         preloader.classList.add('preloader--hide');
//         percents.innerHTML = 100;
//       }
//     };
//   });
// });

// // вызываем функцию apiRequestTopBooks() для получения данных из API
// apiRequestTopBooks().then(data => {
//   // вызываем функцию createMarkupTopBooks() для создания разметки на странице
//   const markup = createMarkupTopBooks(data);
//   // находим контейнер для разметки на странице
//   const container = document.querySelector('#top-books_container');
//   // вставляем разметку в контейнер
//   container.innerHTML = markup;
// });
