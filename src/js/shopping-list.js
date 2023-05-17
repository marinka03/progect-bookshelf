import { hideLoader } from './queries';
import { generateCard } from './create-markup-shopping';
import shoppping_list from '../images/shopping_list.png';

import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

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

const options = {
  totalItems: localStorageEL.books.length,
  itemsPerPage: 3,
  visiblePages: 3,
  page: 1,
  centerAlign: true,
  //   template: {
  //     // Переопределение шаблона компонентов
  //     page: '<li class="pagination-item"><a href="#" class="page-link">{{page}}</a></li>',
  //     currentPage:
  //       '<li class="pagination-item active"><a href="#" class="page-link">{{page}}</a></li>',
  //     moveButton:
  //       '<li class="pagination-item"><a href="#" class="page-link-{{type}}">' +
  //       '<span class="tui-ico-{{type}}">{{type}}</span></a></li>',
  //     disabledMoveButton:
  //       '<li class="pagination-item disabled"><a href="#" class="page-link-{{type}}">' +
  //       '<span class="tui-ico-{{type}}">{{type}}</span></a></li>',
  //   },
  //   onPageChange: function (pageNum) {
  //     console.log('Page changed:', pageNum);
  //   },
};

const pagination = new Pagination('pagination', options);

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
// localStorageEL.books.forEach(item => {
//   apiFetchCate(item).then(data => {
//     console.log(data);
//     array.push(data);
//     listEl.insertAdjacentHTML('beforeend', generateCard(data));
//   });
// });

let count = 0;
localStorageEL.books.forEach(item => {
  //   console.log(count);
  count += 1;
  if (!(count > 3)) {
    apiFetchCate(item).then(data => {
      console.log(data);
      array.push(data);
      listEl.insertAdjacentHTML('beforeend', generateCard(data));
    });
  }
});

// const array = [];
// pagination.on('beforeMove', evt => {
//   //   localStorageEL.books.forEach(item => {
//   //     apiFetchCate(item).then(data => {
//   //       console.log(data);
//   //       array.push(data);
//   //       listEl.innerHTML = generateCard(data);
//   //     });
//   //   });
//   console.log(evt);
// });

function paginationPage(page) {
  //   console.log(page);
  for (let i = 0; i < 3; i++) {
    console.log(page);
  }
}
pagination.on('beforeMove', evt => {
  //   listEl.innerHTML = '';
  //   let count = 0;
  //   localStorageEL.books.forEach(item => {
  //     // console.log(count);
  //     count += 1;
  //     if (!(count > 3)) {
  //       apiFetchCate(item).then(data => {
  //         console.log(data);
  //         array.push(data);
  //         listEl.insertAdjacentHTML('beforeend', generateCard(data));
  //       });
  //     }
  //   });
  console.log(localStorageEL.books);

  paginationPage(evt.page);

  if (evt.page === 1) {
    listEl.innerHTML = '';
    apiFetchCate(localStorageEL.books[0]).then(data => {
      console.log(data);
      array.push(data);
      listEl.insertAdjacentHTML('beforeend', generateCard(data));
    });
    apiFetchCate(localStorageEL.books[1]).then(data => {
      console.log(data);
      array.push(data);
      listEl.insertAdjacentHTML('beforeend', generateCard(data));
    });
    apiFetchCate(localStorageEL.books[2]).then(data => {
      console.log(data);
      array.push(data);
      listEl.insertAdjacentHTML('beforeend', generateCard(data));
    });
  } else if (evt.page === 2) {
    listEl.innerHTML = '';
    apiFetchCate(localStorageEL.books[3]).then(data => {
      console.log(data);
      array.push(data);
      listEl.insertAdjacentHTML('beforeend', generateCard(data));
    });
    apiFetchCate(localStorageEL.books[4]).then(data => {
      console.log(data);
      array.push(data);
      listEl.insertAdjacentHTML('beforeend', generateCard(data));
    });
    apiFetchCate(localStorageEL.books[5]).then(data => {
      console.log(data);
      array.push(data);
      listEl.insertAdjacentHTML('beforeend', generateCard(data));
    });
  } else if (evt.page === 3) {
    listEl.innerHTML = '';
    apiFetchCate(localStorageEL.books[6]).then(data => {
      console.log(data);
      array.push(data);
      listEl.insertAdjacentHTML('beforeend', generateCard(data));
    });
    apiFetchCate(localStorageEL.books[7]).then(data => {
      console.log(data);
      array.push(data);
      listEl.insertAdjacentHTML('beforeend', generateCard(data));
    });
    apiFetchCate(localStorageEL.books[8]).then(data => {
      console.log(data);
      array.push(data);
      listEl.insertAdjacentHTML('beforeend', generateCard(data));
    });
  } else if (evt.page === 4) {
    listEl.innerHTML = '';
    apiFetchCate(localStorageEL.books[9]).then(data => {
      console.log(data);
      array.push(data);
      listEl.insertAdjacentHTML('beforeend', generateCard(data));
    });
    apiFetchCate(localStorageEL.books[10]).then(data => {
      console.log(data);
      array.push(data);
      listEl.insertAdjacentHTML('beforeend', generateCard(data));
    });
    apiFetchCate(localStorageEL.books[11]).then(data => {
      console.log(data);
      array.push(data);
      listEl.insertAdjacentHTML('beforeend', generateCard(data));
    });
  }
  console.log(evt);
});

// pagination.on('afterMove', ({ page }) => console.log(page));

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
      //   console.log(emptyWrapper.style.display);
      //   emptyWrapper.style.display = 'block';
      //   console.log(emptyWrapper.style.display);
      //   console.log(emptyWrapper);
      //   console.log(empty);
      //   console.log('1');
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
