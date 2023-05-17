export { apiRequestTopBooks, apiRequestCategory, showLoader, hideLoader };

const preloader = document.querySelector('#preloader');

function apiRequestTopBooks() {
  const BASE_URL = 'https://books-backend.p.goit.global/books/top-books';
  // const preloader = document.querySelector('#preloader');
  showLoader();
  return fetch(BASE_URL)
    .then(resp => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      // hideLoader();
      // setTimeout(() => {
      //   preloader.remove();
      // }, 200);
      return resp.json();
    })
    .catch(error => {
      console.error(error);
      hideLoader();
    });
}

function apiRequestCategory(category) {
  const BASE_URL = `https://books-backend.p.goit.global/books/category?category=${category}`;
  // const preloader = document.querySelector('#preloader');
  showLoader();
  return fetch(BASE_URL)
    .then(resp => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      hideLoader();
      // setTimeout(() => {
      //   preloader.remove();
      // }, 200);
      return resp.json();
    })
    .catch(error => {
      console.error(error);
      hideLoader();
    });
}

function showLoader() {
  // const preloader = document.querySelector('#preloader');
  preloader.classList.remove('hide');
}

function hideLoader() {
  // const preloader = document.querySelector('#preloader');
  preloader.classList.add('hide');
}
